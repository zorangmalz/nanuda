import React from "react";
import { BsCheck } from "react-icons/bs";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, StandardButton, MStandardButton } from "../Style";

export default function ProfileDelete() {
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
                                marginTop: 32,
                                marginLeft: 20,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                fontWeight: "bold",
                                color: "#051a1a",
                            }}>회원탈퇴를 해도 분할결제는 진행됩니다.</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                opacity: 0.8,
                                color: "#202426",

                                marginTop: 16,
                                marginLeft: 20,
                            }}>
                                <div style={{ marginBottom: 8 }}>1. 진행중인 분할결제는 사라지지 않습니다.</div>
                                <div style={{ marginBottom: 8 }}>2. 연체하는 경우, 연체료과 부과됩니다.</div>
                                <div>3. 분할결제가 완료될때 까지 개인정보는 보관됩니다.</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 32,
                            }}>
                                <BsCheck 
                                    size={24}
                                    color="#2dd9d3"
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
                                route={"/"}
                            />
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
                        marginTop: "8vw",
                        marginLeft: "5vw",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#051a1a",
                    }}>회원탈퇴를 해도 분할결제는 진행됩니다.</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#202426",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        <div style={{ marginBottom: 4 }}>1. 진행중인 분할결제는 사라지지 않습니다.</div>
                        <div style={{ marginBottom: 4 }}>2. 연체하는 경우, 연체료과 부과됩니다.</div>
                        <div>3. 분할결제가 완료될때 까지 개인정보는 보관됩니다.</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>
                        <BsCheck
                            size={20}
                            color="#2dd9d3"
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
                        route="/"
                    />
                </div>
            </Mobile>
        </>
    )
}