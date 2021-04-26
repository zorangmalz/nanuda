import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function ProfilePoint() {
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
                            <Header content="나누다 포인트" goBack={true} />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",

                                marginTop: 32,
                                marginLeft: 20,
                            }}>나누다 포인트</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 32,
                                fontWeight: "bold",
                                color: "#202426",
                                
                                width: 440,
                                marginTop: 16,
                                paddingBottom: 32,
                                borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                alignSelf: "center",
                            }}>100 원</div>
                            <PointList date="2021.04.13" content="결제시 사용" price={-10000} />
                            <PointList date="2021.04.13" content="따라사기 보상 적립" price={200} />
                            <PointList date="2021.04.13" content="가입보상 적립" price={10000} />
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
                    <MHeader content="나누다 포인트" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>나누다 포인트</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#202426",

                        width: "90vw",
                        marginTop: "4vw",
                        paddingBottom: "8vw",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        alignSelf: "center",
                    }}>100 원</div>
                    <MPointList date="2021.04.13" content="결제시 사용" price={-10000} />
                    <MPointList date="2021.04.13" content="따라사기 보상 적립" price={200} />
                    <MPointList date="2021.04.13" content="가입보상 적립" price={10000} />
                </div>
            </Mobile>
        </>
    )
}

function PointList({ date, content, price }) {
    return (
        <div style={{
            width: 440,
            marginTop: 16,
            paddingBottom: 16,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                opacity: 0.6,
                fontSize: 16,
                color: "#20246",
            }}>{date}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 8,
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#202426",
                }}>{content}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: price > 0 ? "#26c1f0" : "#f72b2b"
                }}>{price > 0 ? "+" + price + " 원" : price + " 원"}</div>
            </div>
        </div>
    )
}

function MPointList({ date, content, price }) {
    return (
        <div style={{
            width: "90vw",
            marginTop: "4vw",
            paddingBottom: "4vw",
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                opacity: 0.6,
                fontSize: 14,
                color: "#20246",
            }}>{date}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 8,
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#202426",
                }}>{content}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: price > 0 ? "#26c1f0" : "#f72b2b"
                }}>{price > 0 ? "+" + price + " 원" : price + " 원"}</div>
            </div>
        </div>
    )
}