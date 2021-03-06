import React, { useState, useRef, useEffect } from "react";
import { Default, Mobile } from "../App";
import { Header, imageBucket, MHeader, MStandardButton, S3_BUCKET, StandardButton } from "../Style";
import { useHistory } from "react-router";
import { Product } from "./ReviewSelect";
import ReactStars from "react-rating-stars-component"
import { useLocation } from "react-router-dom";
import plus from "../images/plus.png"

export default function ReviewWrite() {
    const [number, setNumber] = useState(0);

    let history = useHistory()

    const [data, setData] = useState()
    const location = useLocation()

    //User 정보 받기
    const [userName, setUserName] = useState("")
    useEffect(() => {
        fetch("https://api.1n1n.io/userInfoName/", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        })
            .then(res => res.json())
            .then(res => setUserName(res.name))
            .catch(err => console.log(err))
    }, [])

    //상품 정보를 넘겨 받게 됨
    useEffect(() => {
        setData(location.state.item)
    }, [location])

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
                Key: `${userName}/review/${selectedFile[i].name}`
            }

            imageBucket.putObject(params)
                .on("httpUploadProgress", (evt) => {

                })
                .send((err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            imageArray.push(`https://${S3_BUCKET}.s3.ap-northeast-2.amazonaws.com/${userName}/review/${selectedFile[i].name}`)
        }
        var array;
        if (data.type === "timedeal") {
            array = {
                order_id: data.id,
                review_score: number,
                review_like: inputs.like,
                review_dislike: inputs.dislike,
                review_image: imageArray,
                type: "timedeal",
            }
        } else {
            array = {
                wish_id: data.id,
                review_score: number,
                review_like: inputs.like,
                review_dislike: inputs.dislike,
                review_image: imageArray,
                type: "wishdeal",
            }
        }
        await fetch("https://api.1n1n.io/review/main", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify(array)
        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
                history.push("/review/success")
            }).catch(err => {
                console.log(err)
                history.push("/review/fail")
            })
    }

    const ratingChanged = (newRating) => {
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
                        {data != null ?
                            <Product
                                item={data}
                                border={true}
                                mobile={false}
                            />
                            :
                            <></>
                        }
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
                                    <img alt="" src={plus} style={{ width: 24, height: 24 }} />
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
                            onClick={inputs.like.length > 0 && inputs.dislike.length > 0 && filePath.length > 0 && number > 0 ? uploadFile : () => {}}
                            marginTop={40}
                            text="다음"
                            state={inputs.like.length > 0 && inputs.dislike.length > 0 && filePath.length > 0 && number > 0 ? true : false}
                            marginBottom={40}
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
                    {data != null ?
                        <Product
                            item={data}
                            border={true}
                            mobile={true}
                        />
                        :
                        <></>
                    }
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
                                <img alt="" src={plus} style={{ width: 20, height: 20 }} />
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
                        onClick={inputs.like.length > 0 && inputs.dislike.length > 0 && filePath.length > 0 && number > 0 ? uploadFile : () => {}}
                        marginTop={20}
                        text="다음"
                        state={inputs.like.length > 0 && inputs.dislike.length > 0 && filePath.length > 0 && number > 0 ? true : false}
                        marginBottom={"10vw"}
                    />
                </div>
            </Mobile>
        </>
    )
}