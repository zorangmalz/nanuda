import React from "react";
import { Default, Mobile } from "../App";
import WebIntro from "../Style";

export default function PaymentFail() {

    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",

                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <WebIntro />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",

                        width: 480,
                        height: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="작성 실패" />
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginTop: 32,
                            backgroundColor: "#f72b2b"
                        }}>
                        </div>
                        <div style={{
                            marginTop: 32,
                            fontSize: 21,
                            fontWeight: "bold",
                            color: "#f72b2b"
                        }}>작성에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                        <div style={{
                            fontSize: 16,
                            color: "#051a1a",
                            opacity: 0.6,
                            marginTop: 16,
                        }}>실패 사유 : Invalid Number</div>
                        <div style={{
                            borderRadius: 8,
                            width: 440,
                            height: 56,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 32,
                            backgroundColor: "#2dd9d3",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}><div style={{
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>홈으로</div></div>
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
                    <Header content="작성 실패" />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#f72b2b"
                    }}>
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#f72b2b"
                    }}>작성에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                    <div style={{
                        fontSize: 16,
                        color: "#051a1a",
                        opacity: 0.6,
                        marginTop: 16,
                    }}>실패 사유 : Invalid Number</div>
                    <div style={{
                        borderRadius: 8,
                        width: "90%",
                        height: 56,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 32,
                        backgroundColor: "#2dd9d3",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}><div style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>홈으로</div></div>
                </div>
            </Mobile>
        </>
    )
}

export function Header({ content }) {
    return (
        <div style={{
            width: "100%",
            height: 56,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #dfdfdf",
            justifyContent: "center",
        }}>
            <div style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#051a1a",
                alignSelf: "center",
                justifyContent: "center",
            }}>{content}</div>
        </div>
    )
}