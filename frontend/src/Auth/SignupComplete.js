import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import point from "../images/point.png"
import { useHistory } from "react-router";

export default function SingupComplete() {
    let history = useHistory()
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

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="회원가입 완료" goBack={true} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            lineHeight: 1.5,
                            alignSelf: "center",
                            marginBottom: 32,
                        }}>
                            회원가입을 축하합니다! <br />
                                작은 선물을 준비했어요.
                            </div>
                        <img
                            src={point}
                            alt="포인트"
                            style={{
                                alignSelf: "center",
                            }}
                        />
                        <StandardButton
                            text="1/n 시작하기"
                            marginTop={32}
                            onClick={() => history.replace("/")}
                            state={true}
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
                }}>
                    <MHeader content="회원가입 완료" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#010608",

                        marginTop: "8vw",
                        lineHeight: 1.5,
                        alignSelf: "center",
                        marginBottom: "8vw",
                    }}>
                        회원가입을 축하합니다! <br />
                                작은 선물을 준비했어요.
                            </div>
                    <img
                        src={point}
                        alt="포인트"
                        style={{
                            alignSelf: "center",
                            width: "70vw",
                        }}
                    />
                    <MStandardButton
                        text="1/n 시작하기"
                        marginTop={"8vw"}
                        onClick={() => history.replace("/")}
                        state={true}
                        marginBottom={"10vw"}
                    />
                </div>
            </Mobile>
        </>
    )
}