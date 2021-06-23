import React, { useState, useReducer, useRef, useEffect } from "react";
import { Default, Mobile } from "../App";
import { Button, MButton } from "../Auth/SignupProfile";
import { Header, MHeader, InputModule, MInputModule, StandardButton, MStandardButton, S3_BUCKET, imageBucket } from "../Style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs"
import styled from "styled-components"
import { useHistory } from "react-router-dom";

function reducer(state, action) {
    switch (action.type) {
        case "STUDENT":
            return 1;
        case "EMPLOY":
            return 2;
        case "HOUSE":
            return 3;
        case "READY":
            return 4;
        case "SELF":
            return 5;
        case "ETC":
            return 6;
        default:
            return 0;
    }

}

const Title = styled.div`
    width: 440px;
    font-family: "NotoSansCJKkr";
    font-size: 18px;
    font-weight: bold;
    color: #010608;
    margin-top: 32px;
    margin-left: 20px;
`;

const MTitle = styled.div`
    width: 90vw;
    font-family: "NotoSansCJKkr";
    font-size: 16px;
    font-weight: bold;
    color: #010608;
    margin-top: 8vw;
    margin-left: 5vw;
`;

export default function ProfileVerification() {
    const [number, dispatch] = useReducer(reducer, 0)
    const onStudent = () => {
        dispatch({ type: "STUDENT" })
    }
    const onEmploy = () => {
        dispatch({ type: "EMPLOY" })
    }
    const onHouse = () => {
        dispatch({ type: "HOUSE" })
    }
    const onReady = () => {
        dispatch({ type: "READY" })
    }
    const onSelf = () => {
        dispatch({ type: "SELF" })
    }
    const onEtc = () => {
        dispatch({ type: "ETC" })
    }

    //직업 입력
    const [job, setJob] = useState("")
    const onJob = (e) => {
        setJob(e.target.value)
    }

    const history = useHistory()

    //유저 정보 가져오기
    const [user, setUser] = useState({
        user_email: "",
    })

    useEffect(() => {
        fetch('https://haulfree.link/userinfo/', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setUser({
                    ...user,
                    user_email: response.user_email,
                })
            })
            .catch(err => console.log(err))
    }, [])

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
                Key: selectedFile[i].name
            }

            imageBucket.putObject(params)
                .on("httpUploadProgress", (evt) => {

                })
                .send((err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            imageArray.push(`https://${S3_BUCKET}.s3.ap-northeast-2.amazonaws.com/user/${user.user_email}/mission/job/${selectedFile[i].name}`)
        }
        if (imageArray.length === selectedFile.length) {
            history.replace("/")
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
                    minHeight: "100vh",
                    backgroundColor: "#f2f3f8",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Header content="미션" goBack={true} />
                            <Title>현재 직업은 무엇인가요?</Title>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                width: 440,
                                alignSelf: "center",
                                marginTop: 16,
                                rowGap: 16,
                                marginBottom: 16,
                            }}>
                                <Button
                                    text="대학생"
                                    number={number}
                                    standard={1}
                                    onClick={onStudent}
                                />
                                <Button
                                    text="직장인"
                                    number={number}
                                    standard={2}
                                    onClick={onEmploy}
                                />
                                <Button
                                    text="주부"
                                    number={number}
                                    standard={3}
                                    onClick={onHouse}
                                />
                                <Button
                                    text="취준생"
                                    number={number}
                                    standard={4}
                                    onClick={onReady}
                                />
                                <Button
                                    text="자영업"
                                    number={number}
                                    standard={5}
                                    onClick={onSelf}
                                />
                                <Button
                                    text="기타"
                                    number={number}
                                    standard={6}
                                    onClick={onEtc}
                                />
                            </div>
                            {number === 6 ?
                                <InputModule
                                    name="job"
                                    value={job}
                                    onChange={onJob}
                                    placeholder="현재 직업을 입력해주세요."
                                    width={440}
                                    type={1}
                                />
                                :
                                <></>
                            }
                            <Title>직장 혹은 소득을 증빙할 수 있는 사진을 업로드해주세요. (최대 두장)</Title>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 16,
                            }}>
                                {filePath.length < 2 ?
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
                                        <BsPlusCircle size={24} color="#010608" />
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
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#010608",

                                marginTop: 16,
                                width: 440,
                                alignSelf: "center"
                            }}>1/n 팁!</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.8,
                                color: "#010608",

                                marginTop: 4,
                                width: 440,
                                alignSelf: "center",
                            }}>학생증, 사원증, 아르바이트 월급 인증, 고무장갑 인증 등 다양하게 <br />
                                자신의 직장 혹은 소득을 증빙할 수 있는 사진을 업로드해주세요! <br />
                                사용자님의 소중한 개인정보는 확인용도외에 일절 사용 되지 않습니다.</div>
                        </div>
                        <StandardButton
                            marginTop={40}
                            text="인증 완료"
                            onClick={
                                number === 6 && job.length > 0 && selectedFile.length > 0 ?
                                    uploadFile :
                                    number != 0 && selectedFile.length > 0 && number != 6 ?
                                        uploadFile :
                                        () => { }
                            }
                            state={
                                number === 6 && job.length > 0 && selectedFile.length > 0 ? true : number != 0 && selectedFile.length > 0 && number != 6 ? true : false
                            }
                        />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <MHeader content="미션" goBack={true} />
                        <MTitle>현재 직업은 무엇인가요?</MTitle>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            width: "90vw",
                            alignSelf: "center",
                            marginTop: "4vw",
                            rowGap: 12,
                            marginBottom: "4vw",
                        }}>
                            <MButton
                                text="대학생"
                                number={number}
                                standard={1}
                                onClick={onStudent}
                            />
                            <MButton
                                text="직장인"
                                number={number}
                                standard={2}
                                onClick={onEmploy}
                            />
                            <MButton
                                text="주부"
                                number={number}
                                standard={3}
                                onClick={onHouse}
                            />
                            <MButton
                                text="취준생"
                                number={number}
                                standard={4}
                                onClick={onReady}
                            />
                            <MButton
                                text="자영업"
                                number={number}
                                standard={5}
                                onClick={onSelf}
                            />
                            <MButton
                                text="기타"
                                number={number}
                                standard={6}
                                onClick={onEtc}
                            />
                        </div>
                        {number === 6 ?
                            <MInputModule
                                name="job"
                                value={job}
                                onChange={onJob}
                                placeholder="현재 직업을 입력해주세요."
                                width={"90vw"}
                                type={1}
                            />
                            :
                            <></>
                        }
                        <MTitle>직장 혹은 소득을 증빙할 수 있는 사진을 업로드해주세요. (최대 두장)</MTitle>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "4vw",
                        }}>
                            {filePath.length < 2 ?
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
                                    <BsPlusCircle size={20} color="#010608" />
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
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "4vw",
                            width: "90vw",
                            alignSelf: "center"
                        }}>1/n 팁!</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            opacity: 0.8,
                            color: "#010608",

                            marginTop: 4,
                            width: "90vw",
                            alignSelf: "center",
                        }}>학생증, 사원증, 아르바이트 월급 인증, 고무장갑 인증 등 다양하게 
                            자신의 직장 혹은 소득을 증빙할 수 있는 사진을 업로드해주세요! 
                            사용자님의 소중한 개인정보는 확인용도외에 일절 사용 되지 않습니다.</div>
                    </div>
                    <MStandardButton
                        marginTop={"10vw"}
                        text="인증 완료"
                        onClick={
                            number === 6 && job.length > 0 && selectedFile.length > 0 ?
                                uploadFile :
                                number != 0 && selectedFile.length > 0 && number != 6 ?
                                    uploadFile :
                                    () => { }
                        }
                        state={
                            number === 6 && job.length > 0 && selectedFile.length > 0 ? true : number != 0 && selectedFile.length > 0 && number != 6 ? true : false
                        }
                    />
                </div>
            </Mobile>
        </>
    )
}