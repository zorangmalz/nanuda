import React, { useState, useReducer } from "react";
import styled from "styled-components"
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export const Title = styled.div`
    width: 440px;
    font-family: "NotoSansCJKkr";
    font-size: 18px;
    font-weight: bold;
    color: #202426;
    margin-top: 32px;
    margin-left: 20px;
`;

export const MTitle = styled.div`
    width: 90vw;
    font-family: "NotoSansCJKkr";
    font-size: 16px;
    font-weight: bold;
    color: #202426;
    margin-top: 28px;
    margin-left: 5vw;
`;

export const Button = ({text, number, standard, onClick}) => {
    return (
        <div onClick={onClick} style={{
            width: 95,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 6,
            backgroundColor: number === standard ? "#051a1a" : "#ffffff",
            border: number === standard ? "1px solid #051a1a" : "1px solid rgba(5, 26, 26, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 16,
            fontWeight: number === standard ? "bold" : "normal",
            color: number === standard ? "#ffffff" : "rgba(5, 26, 26, 0.8)",
            textAlign: "center",
        }}>{text}</div>
    )
}

export const MButton = ({text, number, standard, onClick}) => {
    return (
        <div onClick={onClick} style={{
            width: "20vw",
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 6,
            backgroundColor: number === standard ? "#051a1a" : "#ffffff",
            border: number === standard ? "1px solid #051a1a" : "1px solid rgba(5, 26, 26, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 12,
            fontWeight: number === standard ? "bold" : "normal",
            color: number === standard ? "#ffffff" : "rgba(5, 26, 26, 0.8)",
            textAlign: "center",
        }}>{text}</div>
    )
}

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

export default function SignupProfile() {
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

    //닉네임 변경
    const [nickname, setNickname] = useState("")
    const onNickname = (e) => {
        setNickname(e.target.value)
    }
    const [cellPhone, setcellPhone] = useState("")
    const oncellPhone = (e) => {
        setcellPhone(e.target.value)
    }
    const [email, setemail] = useState("")
    const onemail = (e) => {
        setemail(e.target.value)
    }
    //직업 입력
    const [job, setJob] = useState("")
    const onJob = (e) => {
        setJob(e.target.value)
    }

    //우편번호 입력
    const [addressNum, setAddressNum] = useState("")
    const onAddressNum = (e) => {
        setAddressNum(e.target.value)
    }

    //주소 입력
    const [address, setAddress] = useState("")
    const onAddress = (e) => {
        setAddress(e.target.value)
    }

    //상세주소 입력
    const [addressDetatil, setAddressDetail] = useState("")
    const onAddressDetail = (e) => {
        setAddressDetail(e.target.value)
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

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="회원정보" goBack={true} />
                            <Title>이름</Title>
                            <InputModule
                                input={nickname}
                                onChange={onNickname}
                                placeholder="당신의 이름은 무엇인가요?"
                                width={440}
                                marginLeft={20}
                                marginTop={16}
                                fontSize={16}
                            />
                              <Title>휴대폰번호</Title>
                            <InputModule
                                input={cellPhone}
                                onChange={oncellPhone}
                                placeholder="휴대폰 번호를 입력해주세요."
                                width={440}
                                marginLeft={20}
                                marginTop={16}
                                fontSize={16}
                            />
                              <Title>이메일 주소(선택)</Title>
                            <InputModule
                                input={email}
                                onChange={onemail}
                                placeholder="이메일 주소를 입력해주세요."
                                width={440}
                                marginLeft={20}
                                marginTop={16}
                                fontSize={16}
                            />
                            <Title>현재 직업은 무엇인가요?</Title>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                width: 440,
                                alignSelf: "center",
                                marginTop: 16,
                                rowGap: 16,
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
                            <InputModule 
                                input={job}
                                onChange={onJob}
                                placeholder="현재 직업을 입력해주세요."
                                width={440}
                                marginLeft={20}
                                marginTop={16}
                                fontSize={16}
                            />
                            
                            <div style={{
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                marginTop: 32,
                                borderRadius: 6,
                                backgroundColor: "#2dd9d3",
                                alignSelf: "center",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#ffffff",
                                cursor: "pointer",
                                textAlign: "center"
                            }}>본인인증하기</div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="회원정보" goBack={true} />
                    <MTitle>이름</MTitle>
                    <InputModule
                        input={nickname}
                        onChange={onNickname}
                        placeholder="당신의 이름은 무엇인가요?"
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                     <MTitle>휴대폰번호</MTitle>
                    <InputModule
                        input={cellPhone}
                        onChange={oncellPhone}
                        placeholder="휴대폰 번호를 입력해주세요"
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                     <MTitle>이메일 주소(선택)</MTitle>
                    <InputModule
                        input={email}
                        onChange={onemail}
                        placeholder="이메일 주소를 입력해주세요."
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                    <MTitle>현재 직업은 무엇인가요?</MTitle>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        width: "90vw",
                        alignSelf: "center",
                        marginTop: 12,
                        rowGap: 12,
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
                    <InputModule
                        input={job}
                        onChange={onJob}
                        placeholder="현재 직업을 입력해주세요."
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                   
                    <div style={{
                        width: "90vw",
                        paddingTop: 12,
                        paddingBottom: 12,
                        marginTop: 24,
                        borderRadius: 6,
                        backgroundColor: "#2dd9d3",
                        alignSelf: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#ffffff",
                        cursor: "pointer",
                        textAlign: "center"
                    }}>본인인증하기</div>
                </div>
            </Mobile>
        </>
    )
}

export function InputModule({ input, onChange, placeholder, width, marginLeft, marginTop, fontSize }) {
    return (
        <>
            <input
                value={input}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    width: width,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    paddingBottom: 8,
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                    outline: 0,

                    fontSize: fontSize,
                    fontFamily: "NotoSansCJKkr",
                    color: "#202426",
                }}
            />
        </>
    )
}