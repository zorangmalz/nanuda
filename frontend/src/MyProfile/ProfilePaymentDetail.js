import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { useHistory } from "react-router";

export default function ProfilePaymentDetail() {
    const [complete, setComplete] = useState(true)

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
                    backgroundColor: "#f2f3f8",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        paddingBottom: 56,
                    }}>
                        <Header content="결제 결과" goBack={true} />
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            marginRight: 20,
                            marginLeft: 20,
                            marginTop: 32,
                            marginBottom: 32,
                        }}>
                            <div style={{
                                width: 120,
                                height: 120,
                                borderRadius: 6,
                                marginRight: 16,
                                backgroundColor: "#000000",
                                color: "#ffffff"
                            }}>상품 그림</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                height: 120,
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",
                                    opacity: 0.6,
                                }}>2021.03.13</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    fontFamily: "AvenirNext",
                                    lineHeight: 1.5,
                                }}>PRADA Model 23-9 limited… <br />
                                    WHITE, 270mm</div>
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    fontFamily: "NotoSansCJKkr"
                                }}>480,000원</div>
                            </div>
                        </div>
                        <div style={{
                            width: 440,
                            height: 1,
                            backgroundColor: "rgba(5, 26, 26, 0.2)",
                            alignSelf: "center",
                        }} />
                        <PayInfo
                            num={1}
                            date={"3 / 29"}
                            state={0}
                            payback={180000}
                        />
                        <PayInfo
                            num={2}
                            date={"4 / 29"}
                            state={2}
                            payback={0}
                        />
                        <PayInfo
                            num={3}
                            date={"5 / 29"}
                            state={1}
                            payback={310000}
                        />
                        {complete ? <></> :
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#f72b2b",
                                alignSelf: "center",
                                marginTop: 8,
                            }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>}
                        <div onClick={() => history.push("/profilepaymentsuccess")} style={{
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: complete ? "#dbdbdb" : "#26c1f0",
                            borderRadius: 6,
                            marginTop: 32,
                            alignSelf: "center",

                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#ffffff",
                            cursor: "pointer",
                            fontFamily: "NotoSansCJKkr",
                        }}>{complete ? "모든 결제가 완료되었습니다." : "전체 결제하기"}</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#202426",
                            textDecorationLine: "underline",

                            marginTop: 16,
                            marginLeft: 20,
                            cursor: "pointer",
                        }}>미결제 금액과 연체료는 무엇인가요?</div>
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
                    paddingBottom: 32,
                }}>
                    <MHeader content="결제 결과" goBack={true} />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginLeft: "5vw",
                        marginTop: 24,
                        marginBottom: 24,
                    }}>
                        <div style={{
                            width: 100,
                            height: 100,
                            borderRadius: 6,
                            marginRight: 12,
                            backgroundColor: "#000000",
                            color: "#ffffff"
                        }}>상품 그림</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            height: 100,
                        }}>
                            <div style={{
                                fontSize: 14,
                                fontFamily: "NotoSansCJKkr",
                                color: "#202426",
                                opacity: 0.6,
                            }}>2021.03.13</div>
                            <div style={{
                                fontSize: 14,
                                color: "#202426",
                                fontFamily: "AvenirNext",
                                lineHeight: 1.5,
                            }}>PRADA Model 23-9 limited… <br />
                                    WHITE, 270mm</div>
                            <div style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#051a1a",
                                fontFamily: "NotoSansCJKkr"
                            }}>480,000원</div>
                        </div>
                    </div>
                    <div style={{
                        width: "90vw",
                        height: 1,
                        backgroundColor: "rgba(5, 26, 26, 0.2)",
                        alignSelf: "center",
                    }} />
                    <MPayInfo
                        num={1}
                        date={"3 / 29"}
                        state={0}
                        payback={180000}
                    />
                    <MPayInfo
                        num={2}
                        date={"4 / 29"}
                        state={2}
                        payback={0}
                    />
                    <MPayInfo
                        num={3}
                        date={"5 / 29"}
                        state={1}
                        payback={310000}
                    />
                    {complete ? <></> :
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#f72b2b",
                            alignSelf: "center",
                            marginTop: 8,
                        }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>}
                    <div onClick={() => history.push("/profilepaymentsuccess")} style={{
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: complete ? "#dbdbdb" : "#26c1f0",
                        borderRadius: 6,
                        marginTop: 28,
                        alignSelf: "center",

                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr",
                    }}>{complete ? "모든 결제가 완료되었습니다." : "전체 결제하기"}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        opacity: 0.6,
                        color: "#202426",
                        textDecorationLine: "underline",

                        marginTop: 12,
                        marginLeft: "5vw",
                        cursor: "pointer",
                    }}>미결제 금액과 연체료는 무엇인가요?</div>
                </div>
            </Mobile>
        </>
    )
}

function PayInfo({ num, date, state, payback }) {
    return (
        <>
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
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",
                    }}>{num}차 분할결제 정보 ({date})</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: state === 0 ? "rgba(5, 26, 26, 0.6)" : state === 1 ? "#26c1f0" : "#f72b2b",
                    }}>{state === 0 ? "결제완료" : state === 1 ? "결제 예정" : "연체"}</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: 16,
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>{num}차 분할 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>+{payback} 원</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: 16,
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>미결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>+0 원</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>연체료</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>+0 원</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        color: "#202426",
                    }}>{num}차 총 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#051a1a",
                    }}>{payback} 원</div>
                </div>
            </div>
        </>
    )
}

function MPayInfo({ num, date, state, payback }) {
    return (
        <>
            <div style={{
                width: "90vw",
                marginTop: 12,
                paddingBottom: 12,
                borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                    }}>{num}차 분할결제 정보 ({date})</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: state === 0 ? "rgba(5, 26, 26, 0.6)" : state === 1 ? "#26c1f0" : "#f72b2b",
                    }}>{state === 0 ? "결제완료" : state === 1 ? "결제 예정" : "연체"}</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: 12,
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>{num}차 분할 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>+{payback} 원</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: 12,
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>미결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>+0 원</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>연체료</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "rgba(32, 36, 38, 0.6)",
                    }}>+0 원</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "#202426",
                    }}>{num}차 총 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#051a1a",
                    }}>{payback} 원</div>
                </div>
            </div>
        </>
    )
}