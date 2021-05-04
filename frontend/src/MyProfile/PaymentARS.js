import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function PaymentARS() {
    const [call, setCall] = useState(false)
    const [veri, setVeri] = useState(true)
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
                            <Header content="결제 계좌 등록" goBack={true} />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 32,
                                marginLeft: 20,
                            }}>입력하신 핸드폰 번호로 ARS인증을 진행합니다.</div>
                            <div onClick={() => setCall(!call)} style={{
                                width: 440,
                                paddingTop: 16,
                                paddingBottom: 16,
                                backgroundColor: call ? "#dbdbdb" : "#051a1a",
                                marginTop: 16,
                                borderRadius: 6,
                                alignSelf: "center",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: "center",
                                cursor: "pointer"
                            }}>{call ? "인증 진행중" : "인증 전화 받기"}</div>
                            <div style={{
                                width: 440,
                                paddingTop: 53,
                                paddingBottom: 53,
                                backgroundColor: "#f2f3f8",
                                marginTop: 16,
                                alignSelf: "center",
                                borderRadius: 6,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 32,
                                fontWeight: "bold",
                                color: "#202426",
                                textAlign: "center",
                            }}>1228</div>
                            <div style={{
                                width: 440,
                                alignSelf: "center",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                opacity: 0.8,
                                color: "#202426",
                                lineHeight: 1.5,
                                marginTop: 16,
                            }}>
                                <span>통화 시작시 ARS안내를 끝까지 듣고 </span>
                                <span style={{
                                    fontWeight: "bold",
                                }}>"인증번호를 입력해주세요"</span>
                                <span>라고할 때 고객님의 </span>
                                <span style={{
                                    fontWeight: "bold",
                                }}>생일 4자리</span>
                                <span>를 입력해주세요.</span>
                            </div>
                            <div style={{
                                width: 440,
                                paddingTop: 16,
                                paddingBottom: 16,
                                marginTop: 32,
                                alignSelf: "center",
                                backgroundColor: call ? veri ? "#2dd9d3" : "#dbdbdb" : "#dbdbdb",
                                cursor: "pointer",
                                borderRadius: 6,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: "center",
                            }}>인증완료</div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="결제 계좌 등록" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>입력하신 핸드폰 번호로 ARS인증을 진행합니다.</div>
                    <div style={{
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: call ? "#dbdbdb" : "#051a1a",
                        marginTop: "4vw",
                        borderRadius: 6,
                        alignSelf: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        textAlign: "center"
                    }}>{call ? "인증 진행중" : "인증 전화 받기"}</div>
                    <div style={{
                        width: "90vw",
                        paddingTop: "13vw",
                        paddingBottom: "13vw",
                        backgroundColor: "#f2f3f8",
                        marginTop: "4vw",
                        alignSelf: "center",
                        borderRadius: 6,

                        fontFamily: "NotoSansCJKkr",
                        fontSize: "8vw",
                        fontWeight: "bold",
                        color: "#202426",
                        textAlign: "center",
                    }}>1228</div>
                    <div style={{
                        width: "90vw",
                        alignSelf: "center",
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        opacity: 0.8,
                        color: "#202426",
                        lineHeight: 1.5,
                        marginTop: "4vw",
                    }}>
                        <span>통화 시작시 ARS안내를 끝까지 듣고 </span>
                        <span style={{
                            fontWeight: "bold",
                        }}>"인증번호를 입력해주세요"</span>
                        <span>라고할 때 고객님의 </span>
                        <span style={{
                            fontWeight: "bold",
                        }}>생일 4자리</span>
                        <span>를 입력해주세요.</span>
                    </div>
                    <div style={{
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        marginTop: "8vw",
                        alignSelf: "center",
                        backgroundColor: call ? veri ? "#2dd9d3" : "#dbdbdb" : "#dbdbdb",
                        cursor: "pointer",
                        borderRadius: 6,

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        textAlign: "center",
                    }}>인증완료</div>
                </div>
            </Mobile>
        </>
    )
}