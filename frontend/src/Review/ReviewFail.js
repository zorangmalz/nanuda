import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router";

export default function ReviewFail() {
    //화면 변경
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
                            alignItems: "center",
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="작성 실패" goX={true} />
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                marginTop: 32,
                                backgroundColor: "#f72b2b",
                                
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AiOutlineClose color="#ffffff" size={50} />
                            </div>
                            <div style={{
                                marginTop: 32,
                                fontSize: 21,
                                fontWeight: "bold",
                                color: "#f72b2b",
                                fontFamily: "NotoSansCJKkr"
                            }}>작성에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                            <div style={{
                                fontSize: 16,
                                color: "#051a1a",
                                opacity: 0.6,
                                marginTop: 16,
                                fontFamily: "NotoSansCJKkr"
                            }}>실패 사유 : Invalid Number</div>
                            <div onClick={() => history.push("/")} style={{
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
                    height: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="작성 실패" goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#f72b2b",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AiOutlineClose color="#ffffff" size={50} />
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#f72b2b",
                        fontFamily: "NotoSansCJKkr"
                    }}>작성에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                    <div style={{
                        fontSize: 16,
                        color: "#051a1a",
                        opacity: 0.6,
                        marginTop: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>실패 사유 : Invalid Number</div>
                    <div onClick={() => history.push("/")} style={{
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
                </div>
            </Mobile>
        </>
    )
}