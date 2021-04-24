import React from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import user from "../images/users.png"
import present from "../images/present.png"

export default function ServiceReview() {
    let history = useHistory()
    const reviewData = [
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            num: "5.0",
            name: "김*명",
            property: "20대 남자",
            date: "2021.03.16",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
    ]
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
                            paddingBottom: 150,
                        }}>
                            <Header content="나눠본 사람들" />
                            <div style={{
                                fontSize: 21,
                                fontWeight: "bold",
                                color: "#202426",

                                marginLeft: 20,
                                marginBottom: 32,
                                marginTop: 32,
                                fontFamily: "NotoSansCJKkr"
                            }}>아직도 나누다 이용을 망설이시나요?</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: 440,
                                alignSelf: "center",
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: 210,
                                }}>
                                    <img alt="" src={user} style={{
                                        width: 72,
                                        height: 72,
                                        marginBottom: 8,
                                    }} />
                                    <div style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        color: "#051a1a",
                                        marginBottom: 16,
                                        fontFamily: "NotoSansCJKkr"
                                    }}>109,000</div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>나누다를 사용한 사람들</div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: 210,
                                }}>
                                    <img alt="" src={present} style={{
                                        width: 72,
                                        height: 72,
                                        marginBottom: 8,
                                    }} />
                                    <div style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        color: "#051a1a",
                                        marginBottom: 16,
                                        fontFamily: "NotoSansCJKkr"
                                    }}>209,000</div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>나누다로 구매한 상품들</div>
                                </div>
                            </div>
                            {reviewData.map(item =>
                                <Review
                                    num={item.num}
                                    name={item.name}
                                    property={item.property}
                                    date={item.date}
                                    content={item.content}
                                />
                            )}
                            <div onClick={() => history.push("/servicewrite")} style={{
                                position: "fixed",
                                bottom: 40,
                                width: 440,
                                alignSelf: "center",
                                paddingTop: 21,
                                paddingBottom: 21,
                                backgroundColor: "#2dd9d3",
                                borderRadius: 6,
                                boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                                color: "#ffffff",
                                fontSize: 21,
                                fontWeight: "bold",
                                textAlign: "center",
                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr"
                            }}>나누다 사용후기 작성하기</div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                    paddingBottom: 120,
                }}>
                    <Header content="나눠본 사람들" />
                    <div style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",

                        marginLeft: "5%",
                        marginBottom: 32,
                        marginTop: 32,
                        fontFamily: "NotoSansCJKkr"
                    }}>아직도 나누다 이용을 망설이시나요?</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "90%",
                        alignSelf: "center",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "45%",
                        }}>
                            <img alt="" src={user} style={{
                                width: 60,
                                height: 60,
                                marginBottom: 8,
                            }} />
                            <div style={{
                                fontSize: 28,
                                fontWeight: "bold",
                                color: "#051a1a",
                                marginBottom: 16,
                                fontFamily: "NotoSansCJKkr"
                            }}>109,000</div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>나누다를 사용한 사람들</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "45%",
                        }}>
                            <img alt="" src={present} style={{
                                width: 60,
                                height: 60,
                                backgroundColor: "#000000",
                                color: "#ffffff",
                                marginBottom: 8,
                            }} />
                            <div style={{
                                fontSize: 28,
                                fontWeight: "bold",
                                color: "#051a1a",
                                marginBottom: 16,
                                fontFamily: "NotoSansCJKkr"
                            }}>209,000</div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>나누다로 구매한 상품들</div>
                        </div>
                    </div>
                    {reviewData.map(item =>
                        <MReview
                            num={item.num}
                            name={item.name}
                            property={item.property}
                            date={item.date}
                            content={item.content}
                        />
                    )}
                    <div onClick={() => history.push("/servicewrite")} style={{
                        position: "fixed",
                        bottom: 40,
                        width: "90%",
                        alignSelf: "center",
                        paddingTop: 12,
                        paddingBottom: 12,
                        backgroundColor: "#2dd9d3",
                        borderRadius: 6,
                        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>나누다 사용후기 작성하기</div>
                </div>
            </Mobile>
        </>
    )
}

function Review({ num, name, property, date, content }) {
    return (
        <>
            <div style={{
                width: 408,
                padding: 16,
                paddingBottom: 40,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                marginTop: 32,
                borderRadius: 6,
            }}>
                <div style={{
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#26c1f0",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{num}/5.0</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginBottom: 8,
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{name}({property})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr"
                }}>{content}</div>
            </div>
        </>
    )
}

function MReview({ num, name, property, date, content }) {
    return (
        <>
            <div style={{
                width: "82%",
                padding: "4%",
                paddingBottom: "10%",
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                marginTop: 32,
                borderRadius: 6,
            }}>
                <div style={{
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#26c1f0",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{num}/5.0</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginBottom: 8,
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{name}({property})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr"
                }}>{content}</div>
            </div>
        </>
    )
}