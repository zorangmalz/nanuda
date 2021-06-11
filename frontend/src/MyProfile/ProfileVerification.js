import React, { useState, useReducer } from "react";
import { Default, Mobile } from "../App";
import { Title, Button, InputModule, MTitle, MButton } from "../Auth/SignupProfile";
import WebIntro, { Header, MHeader } from "../Style";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
                            <Title>직장 혹은 소득을 증빙할 수 있는 사진을 업로드해주세요. (최대 두장)</Title>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                width: 440,
                                marginLeft: 20,
                                marginTop: 16,
                            }}>
                                <PictureButton />
                                <PictureButton />
                            </div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#010608",

                                marginTop: 16,
                                width: 440,
                                alignSelf: "center"
                            }}>나누다 팁!</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.8,
                                color: "#010608",

                                marginTop: 4,
                                width: 440,
                                alignSelf: "center",
                            }}>학생증, 사원증, 아르바이트 월급 인증, 고무장갑 인증 등 다양하게
                                자신의 직장 혹은 소득을 증빙할 수 있는 사진을 업로드해주세요!
                            사용자님의 소중한 개인정보는 확인용도외에 일절 사용 되지 않습니다.</div>
                        </div>
                        <div style={{
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#26c1f0",
                            cursor: "pointer",
                            borderRadius: 6,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center",

                            marginTop: 40,
                            alignSelf: "center",
                            marginBottom: 40,
                        }}>인증 완료</div>
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
                        <MTitle>직장 혹은 소득을 증빙할 수 있는 사진을 업로드해주세요. (최대 두장)</MTitle>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            width: "90vw",
                            marginTop: "4vw",
                            alignSelf: "center",
                        }}>
                            <MPictureButton />
                            <MPictureButton />
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "4vw",
                            width: "90vw",
                            alignSelf: "center"
                        }}>나누다 팁!</div>
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
                    <div style={{
                        width: "90vw",
                        paddingTop: 8,
                        paddingBottom: 8,
                        backgroundColor: "#26c1f0",
                        cursor: "pointer",
                        borderRadius: 6,

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        textAlign: "center",

                        marginTop: 20,
                        alignSelf: "center",
                        marginBottom: 20,
                    }}>인증 완료</div>
                </div>
            </Mobile>
        </>
    )
}

function PictureButton() {
    return (
        <div style={{
            width: 120,
            height: 120,
            borderRadius: 6,
            backgroundColor: "#f2f3f8",
            marginRight: 20,

            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <AiOutlinePlusCircle size={32} color="#010608" />
        </div>
    )
}

function MPictureButton() {
    return (
        <div style={{
            width: "25vw",
            height: "25vw",
            borderRadius: 6,
            backgroundColor: "#f2f3f8",
            marginRight: "4vw",

            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <AiOutlinePlusCircle size={24} color="#010608" />
        </div>
    )
}