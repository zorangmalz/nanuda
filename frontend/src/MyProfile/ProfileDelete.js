import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, StandardButton, MStandardButton } from "../Style";

export default function ProfileDelete() {
    let history = useHistory()
    const [agree, setAgree] = useState(false)
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="회원탈퇴" goBack={true} />
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 21,
                            fontWeight: "bold",
                            color: "#051a1a",
                            lineHeight: 1.43,
                        }}>
                            잠깐! 회원탈퇴하면 다음과 같은 <br />
                                혜택이 사라져요
                            </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            opacity: 0.8,
                            color: "#202426",

                            marginTop: 16,
                            marginLeft: 20,
                        }}>
                            <div style={{ marginBottom: 8 }}>1. 나누다 포인트가 사라져요.</div>
                            <div>2. 더이상 자유로운 분할결제가 불가능해요.</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: 20,
                            marginTop: 16,
                        }}>
                            <BsCheck
                                onClick={() => setAgree(!agree)}
                                style={{
                                    cursor: "pointer",
                                }}
                                size={24}
                                color={agree ? "#26c1f0" : "#dbdbdb"}
                            />
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                color: "#202426",
                                marginLeft: 8,
                            }}>위 내용에 동의합니다.</div>
                        </div>
                        <StandardButton
                            marginTop={32}
                            text="탈퇴하기"
                            onClick={agree ? () => history.replace("/") : () => console.log("동의해주세요")}
                            state={agree}
                        />
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
                    <MHeader content="회원탈퇴" goBack={true} />
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#051a1a",
                        lineHeight: 1.43,
                    }}>
                        잠깐! 회원탈퇴하면 다음과 같은 <br />
                                혜택이 사라져요
                            </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#202426",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        <div style={{ marginBottom: 4 }}>1. 나누다 포인트가 사라져요.</div>
                        <div>2. 더이상 자유로운 분할결제가 불가능해요.</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

                        marginLeft: "5vw",
                        marginTop: "4vw",
                    }}>
                        <BsCheck
                            onClick={() => setAgree(!agree)}
                            style={{
                                cursor: "pointer",
                            }}
                            size={20}
                            color={agree ? "#26c1f0" : "#dbdbdb"}
                        />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            color: "#202426",
                            marginLeft: "2vw",
                        }}>위 내용에 동의합니다.</div>
                    </div>
                    <MStandardButton
                        marginTop={"8vw"}
                        text="탈퇴하기"
                        onClick={agree ? () => history.replace("/") : () => console.log("동의해주세요")}
                        state={agree}
                    />
                </div>
            </Mobile>
        </>
    )
}