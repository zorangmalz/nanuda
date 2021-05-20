import React, { useReducer, useState, useRef, useEffect } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import { BsPlusCircle } from "react-icons/bs"
import { useHistory } from "react-router";
import { Product, MProduct } from "./ReviewSelect";
import AWS from "aws-sdk";
import ReactStars from "react-rating-stars-component"

const AWS_ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY
const AWS_SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY
const S3_BUCKET = process.env.REACT_APP_S3_IMAGE_BUCKET
const REGION = process.env.REACT_APP_REGION

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
})

const imageBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION
})

export default function ReviewWrite() {
    const [number, setNumber] = useState(0);

    let history = useHistory()

    //이용후기 및 의견 작성
    const [inputs, setInputs] = useState({
        like: "",
        dislike: "",
    })
    const { like, dislike } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    //ImageToS3
    //이미지 진행상황
    const [progress, setProgress] = useState(0)

    //이미지 컴포넌트
    const inputFile = useRef(null)

    //이미지 저장 및 경로
    const [selectedFile, setSelectedFile] = useState([])
    const [filePath, setFilePath] = useState([])

    const onButtonclick = () => {
        inputFile.current.click()
    }

    //여러 이미지 경로 저장
    const handelFileInput = (e) => {
        const files = e.target.files;
        let length;
        if (files.length > 2) {
            length = 3;
        } else {
            length = files.length
        }
        for (let i = 0; i < length; i++) {
            setSelectedFile(selectedFile => [...selectedFile, files[i]])
            setFilePath(filePath => [...filePath, URL.createObjectURL(files[i])])
        }
    }

    //s3로 업로드 후 URL을 RDS에 삽입 + user_id, product_id는 추후에 수정
    const uploadFile = async () => {
        var imageArray = []
        for (let i = 0; i < selectedFile.length; i++) {
            const params = {
                ACL: "public-read",
                Body: selectedFile[i],
                Bucket: S3_BUCKET,
                Key: selectedFile[i].name
            }

            imageBucket.putObject(params)
                .on("httpUploadProgress", (evt) => {
                    setProgress(Math.round((evt.loaded / evt.total) * 100))
                    console.log(progress)
                })
                .send((err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            imageArray.push(`https://${S3_BUCKET}.s3.ap-northeast-2.amazonaws.com/${selectedFile[i].name}`)
        }
        console.log(imageArray)
        var data = {
            user_id: 7,
            product_id: "c9a89bd5-e65d-4183-b453-5ec3987507f0",
            review_score: number,
            review_like: inputs.like,
            review_dislike: inputs.dislike,
            review_image: imageArray
        }
        await fetch("http://127.0.0.1:8000/review/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                history.push("/reviewsuccess")
            }).catch(err => {
                console.log(err)
                history.push("/reviewfail")
            })
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
        setNumber(newRating)
    };

    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",

                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                        paddingBottom: 50,
                    }}>
                        <Header content="리뷰 작성" goBack={true} />
                        <Product
                            name="삼배옷 컬랙션, White, 95"
                            current={210000}
                            sale={70000}
                            border={true}
                        />

                        <div style={{
                            marginTop: 16,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>만족도를 표시해주세요! </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 20,
                            marginTop: 12,
                        }}>
                            <ReactStars
                                color="#dbdbdb"
                                count={5}
                                onChange={ratingChanged}
                                size={28}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>사진을 첨부해주세요.(최대 3장)</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 16,
                        }}>
                            {filePath.length < 3 ?
                                <div onClick={onButtonclick} style={{
                                    marginLeft: 20,
                                    width: 120,
                                    height: 120,
                                    borderRadius: 6,
                                    backgroundColor: "#f2f3f8",
                                    cursor: "pointer",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <input multiple ref={inputFile} onChange={handelFileInput} type="file" style={{
                                        display: "none"
                                    }} />
                                    <BsPlusCircle size={24} color="#051a1a" />
                                </div>
                                :
                                <></>
                            }
                            {filePath.length > 0 ?
                                filePath.map(item =>
                                    <img src={item} style={{
                                        width: 120,
                                        height: 120,
                                        resize: "cover",
                                        marginLeft: 20,
                                    }} />
                                )
                                :
                                <></>
                            }
                        </div>
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>제품 사용 후 좋았던 점은 무엇인가요?</div>
                        <textarea onChange={onChange} name="like" value={like} cols="10" rows="5" placeholder="상품에 대한 품질, 사용 후 만족도를 말씀해주세요!" style={{
                            outline: 0,
                            border: 0,
                            width: 408,
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: 20,
                            marginTop: 16,
                            resize: "none",
                        }} />
                        <div style={{
                            marginTop: 16,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>제품 사용 후 안좋았던 점은 무엇인가요?</div>
                        <textarea onChange={onChange} name="dislike" value={dislike} cols="10" rows="5" placeholder="상품에 대한 품질, 사용 후 만족도를 말씀해주세요!" style={{
                            outline: 0,
                            border: 0,
                            width: 408,
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: 20,
                            marginTop: 16,
                            resize: "none",
                        }} />
                        <StandardButton
                            onClick={uploadFile}
                            marginTop={40}
                            text="다음"
                            state={inputs.like.length > 0 && inputs.dislike.length > 0 && filePath.length > 0 && number > 0 ? true : false}
                        />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                    paddingBottom: 20
                }}>
                    <MHeader content="리뷰 작성" goBack={true} />
                    <MProduct
                        name="삼배옷 컬랙션, White, 95"
                        current={210000}
                        sale={70000}
                        border={true}
                    />

                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>만족도를 표시해주세요! </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "5vw",
                        marginTop: "2vw",
                    }}>
                        <ReactStars
                            color="#dbdbdb"
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>사진을 첨부해주세요.(최대 3장)</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: "4vw",
                    }}>
                        {filePath.length < 3 ?
                            <div onClick={onButtonclick} style={{
                                marginLeft: "5vw",
                                width: "25vw",
                                height: "25vw",
                                borderRadius: 6,
                                backgroundColor: "#f2f3f8",
                                cursor: "pointer",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <input multiple ref={inputFile} onChange={handelFileInput} type="file" style={{
                                    display: "none"
                                }} />
                                <BsPlusCircle size={20} color="#051a1a" />
                            </div>
                            :
                            <></>
                        }
                        {filePath.length > 0 ?
                            filePath.map(item =>
                                <img src={item} style={{
                                    width: "25vw",
                                    height: "25vw",
                                    resize: "cover",
                                    marginLeft: "5vw",
                                }} />
                            )
                            :
                            <></>
                        }
                    </div>
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>제품 사용 후 좋았던 점은 무엇인가요?</div>
                    <textarea onChange={onChange} name="like" value={like} cols="10" rows="5" placeholder="상품에 대한 품질, 사용 후 만족도를 말씀해주세요!" style={{
                        outline: 0,
                        border: 0,
                        width: "82vw",
                        padding: "4vw",
                        borderRadius: 6,
                        backgroundColor: "#f2f3f8",
                        minHeight: 100,
                        marginTop: 16,
                        resize: "none",
                        alignSelf: "center",
                    }} />
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>제품 사용 후 안좋았던 점은 무엇인가요?</div>
                    <textarea onChange={onChange} name="dislike" value={dislike} cols="10" rows="5" placeholder="상품에 대한 품질, 사용 후 만족도를 말씀해주세요!" style={{
                        outline: 0,
                        border: 0,
                        width: "82vw",
                        padding: "4vw",
                        borderRadius: 6,
                        backgroundColor: "#f2f3f8",
                        minHeight: 100,
                        marginTop: 16,
                        resize: "none",
                        alignSelf: "center",
                    }} />
                    <MStandardButton
                        onClick={uploadFile}
                        marginTop={20}
                        text="다음"
                        state={inputs.like.length > 0 && inputs.dislike.length > 0 && filePath.length > 0 && number > 0 ? true : false}
                    />
                </div>
            </Mobile>
        </>
    )
}

function ImagePut() {
    //ImageToS3
    const [progress, setProgress] = useState(0)
    const [selectedFile, setSelectedFile] = useState(null)

    const handelFileInput = (e) => {
        setSelectedFile(e.target.files[0])
        console.log(selectedFile)
    }

    const uploadFile = (file) => {
        const params = {
            ACL: "public-read",
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        }

        imageBucket.putObject(params)
            .on("httpUploadProgress", (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
                console.log(progress)
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }
    return (
        <input onChange={selectedFile === null ? handelFileInput : () => console.log(selectedFile)} onClick={() => selectedFile === null ? console.log("이미지 없어") : uploadFile(selectedFile)} type="file" style={{
            marginLeft: 20,
            marginTop: 16,
            width: 120,
            height: 120,
            borderRadius: 6,
            backgroundColor: "#f2f3f8",
            cursor: "pointer",

        }}>
            {/* <BsPlusCircle size={24} color="#051a1a" /> */}
        </input>
    )
}

function MImagePut() {
    return (
        <div style={{
            marginLeft: "5vw",
            marginTop: "4vw",
            width: "25vw",
            height: "25vw",
            borderRadius: 6,
            backgroundColor: "#f2f3f8",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            cursor: "pointer"
        }}>
            <BsPlusCircle size={16} color="#051a1a" />
        </div>
    )
}