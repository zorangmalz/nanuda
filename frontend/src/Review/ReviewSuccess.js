import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { AiOutlineCheck } from "react-icons/ai";
import { useHistory } from "react-router";

export default function ReviewSuccess() {
    //화면 변경
    let history = useHistory()
    function goHome() {
        history.push("/")
    }
    function goReview() {
        history.push("/review")
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
                            alignItems: "center",
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="작성 완료" goX={true} />
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                marginTop: 32,
                                backgroundColor: "#2dd9d3",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AiOutlineCheck color="#ffffff" size={50} />
                            </div>
                            <div style={{
                                marginTop: 32,
                                fontSize: 21,
                                fontWeight: "bold",
                                color: "#2dd9d3",
                                fontFamily: "NotoSansCJKkr",
                            }}>작성이 완료
                                <span style={{ color: "#051a1a" }}>되었습니다!</span>
                            </div>
                            <div onClick={goHome} style={{
                                borderRadius: 8,
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                alignSelf: "center",
                                marginTop: 32,
                                backgroundColor: "#2dd9d3",

                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                textAlign: "center",

                                cursor: "pointer",
                            }}>홈으로</div>
                            <div onClick={goReview} style={{
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#ffffff",
                                borderRadius: 6,
                                marginTop: 16,
                                border: "1px solid #dfdfdf",

                                textAlign: "center",
                                fontSize: 18,
                                opacity: 0.6,
                                color: "#051a1a",
                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr",
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
                    <MHeader content="작성 완료" goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#2dd9d3",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AiOutlineCheck color="#ffffff" size={50} />
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#2dd9d3",
                        fontFamily: "NotoSansCJKkr"
                    }}>작성이 완료
                        <span style={{ color: "#051a1a" }}>되었습니다!</span>
                    </div>
                    <div onClick={goHome} style={{
                        borderRadius: 8,
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        alignSelf: "center",
                        marginTop: "8vw",
                        backgroundColor: "#2dd9d3",

                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        textAlign: "center",

                        cursor: "pointer",
                    }}>홈으로</div>
                    <div onClick={goReview} style={{
                        width: "90%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        backgroundColor: "#ffffff",
                        borderRadius: 6,
                        marginTop: 8,
                        border: "1px solid #dfdfdf",

                        textAlign: "center",
                        fontSize: 16,
                        opacity: 0.6,
                        color: "#051a1a",
                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr",
                    }}>내 리뷰 확인하기</div>
                </div>
            </Mobile>
        </>
    )
}