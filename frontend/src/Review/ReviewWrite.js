import React, { useReducer, useState, useRef, useEffect } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { BsFillStarFill, BsPlusCircle } from "react-icons/bs"
import { useHistory } from "react-router";
import { Product, MProduct } from "./ReviewSelect";
import AWS from "aws-sdk";

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

function reducer(state, action) {
    switch (action.type) {
        case 'ONEB':
            return 1;
        case 'TWOB':
            return 2;
        case 'THREEB':
            return 3;
        case 'FOURB':
            return 4;
        case 'FIVEB':
            return 5;
        default:
            return state;
    }
}


export default function ReviewWrite() {
    const [numberB, dispatchB] = useReducer(reducer, 0);
    const onOneB = () => {
        dispatchB({ type: 'ONEB' });
    };
    const onTwoB = () => {
        dispatchB({ type: 'TWOB' });
    };
    const onThreeB = () => {
        dispatchB({ type: 'THREEB' });
    };
    const onFourB = () => {
        dispatchB({ type: 'FOURB' });
    };
    const onFiveB = () => {
        dispatchB({ type: 'FIVEB' });
    };

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

    //s3로 업로드 그러나 cors 에러로 보류
    const uploadFile = () => {
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
                    history.push("/reviewsuccess")
                })
                .send((err) => {
                    if (err) {
                        console.log(err)
                        history.push("/reviewfail")
                    }
                })
        }
    }

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
                    <WebIntro />
                    {/* 절반을 나눔 */}
                    <div style={{
                        width: "50%",
                        minWidth: 480,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",

                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
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
                                marginTop: 18,
                            }}>
                                <BsFillStarFill onClick={onOneB} color={numberB > 0 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onTwoB} color={numberB > 1 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onThreeB} color={numberB > 2 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFourB} color={numberB > 3 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFiveB} color={numberB > 4 ? "#fad94f" : "#dfdfdf"} size={28} style={{ cursor: "pointer" }} />
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
                            <div onClick={uploadFile} style={{
                                borderRadius: 6,
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                marginTop: 40,
                                marginBottom: 50,
                                backgroundColor: "#2dd9d3",
                                alignSelf: "center",

                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                                cursor: "pointer",
                                textAlign: "center"
                            }}>다음</div>
                        </div>
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
                        marginTop: "3vw",
                    }}>
                        <BsFillStarFill onClick={onOneB} color={numberB > 0 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onTwoB} color={numberB > 1 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onThreeB} color={numberB > 2 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onFourB} color={numberB > 3 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onFiveB} color={numberB > 4 ? "#fad94f" : "#dfdfdf"} size={24} style={{ cursor: "pointer" }} />
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
                    <div onClick={uploadFile} style={{
                        borderRadius: 6,
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        marginTop: 20,
                        marginBottom: 20,
                        backgroundColor: "#2dd9d3",
                        alignSelf: "center",

                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "bold",
                        cursor: "pointer",
                        textAlign: "center"
                    }}>다음</div>
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