import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";

export default function PaymentSuccess() {
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
                            alignItems: "center",
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="작성 완료" />
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                marginTop: 32,
                                backgroundColor: "#2dd9d3"
                            }}>
                            </div>
                            <div style={{
                                marginTop: 32,
                                fontSize: 21,
                                fontWeight: "bold",
                                color: "#2dd9d3"
                            }}>작성이 완료<span style={{ color: "#051a1a" }}>되었습니다!</span></div>
                            <div style={{
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#2dd9d3",
                                borderRadius: 6,
                                marginTop: 32,

                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#ffffff",
                                cursor: "pointer"
                            }}>홈으로</div>
                            <div style={{
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#ffffff",
                                borderRadius: 6,
                                marginTop: 32,
                                border: "1px solid #dfdfdf",

                                textAlign: "center",
                                fontSize: 18,
                                opacity: 0.6,
                                color: "#051a1a",
                                cursor: "pointer"
                            }}>내 리뷰 확인하기</div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <Header content="작성 완료" />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#2dd9d3"
                    }}>
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#2dd9d3"
                    }}>작성이 완료<span style={{ color: "#051a1a" }}>되었습니다!</span></div>
                    <div style={{
                        width: "90%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        backgroundColor: "#2dd9d3",
                        borderRadius: 6,
                        marginTop: 32,

                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        cursor: "pointer"
                    }}>홈으로</div>
                    <div style={{
                        width: "90%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        backgroundColor: "#ffffff",
                        borderRadius: 6,
                        marginTop: 16,
                        border: "1px solid #dfdfdf",

                        textAlign: "center",
                        fontSize: 16,
                        opacity: 0.6,
                        color: "#051a1a",
                        cursor: "pointer"
                    }}>내 리뷰 확인하기</div>
                </div>
            </Mobile>
        </>
    )
}