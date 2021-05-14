import React from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { MdKeyboardArrowRight } from "react-icons/md"

export default function ProfilePayment() {
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
                    }}>
                        <Header content="분할결제 스케쥴" goBack={true} />
                        <BNPLForm state={1} date="2021.03.13" title="PRADA Model 23-9 limited… 
WHITE, 270mm" num={3} payback={310000} />
                        <BNPLForm state={0} date="2021.03.13" title="PRADA Model 23-9 limited… 
WHITE, 270mm" num={0} payback={0} />
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
                    <MHeader content="분할결제 스케쥴" goBack={true} />
                    <MBNPLForm state={1} date="2021.03.13" title="PRADA Model 23-9 limited… 
WHITE, 270mm" num={3} payback={310000} />
                    <MBNPLForm state={0} date="2021.03.13" title="PRADA Model 23-9 limited… 
WHITE, 270mm" num={0} payback={0} />
                </div>
            </Mobile>
        </>
    )
}

function BNPLForm({ state, title, num, date, payback }) {
    const history = useHistory()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "center",

            marginTop: 32,
            width: 440,
            paddingBottom: state === 0 ? 16 : 0,
            borderBottom: state === 0 ? "1px solid rgba(5, 26, 26, 0.2)" : 0,
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginBottom: 16,
            }}>{state === 0 ? "분할결제 완료" : "분할결제 진행중"}</div>
            <div onClick={() => history.push("/profilepaymentdetail")} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                cursor: "pointer",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
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
                        width: 260,
                        height: 120,
                    }}>
                        <div style={{
                            fontSize: 16,
                            fontFamily: "NotoSansCJKkr",
                            color: "#202426",
                            opacity: 0.6,
                        }}>{date}</div>
                        <div style={{
                            fontSize: 16,
                            color: "#202426",
                            fontFamily: "AvenirNext",
                            lineHeight: 1.5,
                        }}>{title}</div>
                        <div style={{
                            opacity: state === 0 ? 0.6 : 1,
                            fontSize: 18,
                            fontWeight: "bold",
                            color: state === 0 ? "051a1a" : "#26c1f0",
                            fontFamily: "NotoSansCJKkr"
                        }}>{state === 0 ? "결제 완료" : num + "차 결제 예정"}</div>
                    </div>
                </div>
                <MdKeyboardArrowRight size={40} color="rgba(5, 26, 26, 0.4)" />
            </div>
            {state === 0 ? <></> :
                <div style={{
                    marginTop: 16,
                    width: 408,
                    borderRadius: 6,
                    backgroundColor: "#f2f3f8",
                    padding: 16,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "100%",
                        marginBottom: 8,
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 16,
                            color: "#202426"
                        }}>{num}차 총 결제 금액</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>{payback} 원</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "100%",
                        marginBottom: 8,
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 16,
                            color: "#202426"
                        }}>결제 후 잔여금액</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>0 원</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "100%",
                        marginBottom: 8,
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 16,
                            color: "#202426"
                        }}>자동결제일</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>{date}</div>
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
                            opacity: 0.6,
                            fontSize: 16,
                            color: "#202426"
                        }}>분할결제 방법</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>{num}분할 결제</div>
                    </div>
                </div>
            }
            {state === 0 ? <></> :
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#f72b2b",
                    width: 440,
                    marginTop: 8,
                    wordSpacing: "-1px"
                }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>
            }
        </div>
    )
}

function MBNPLForm({ state, title, num, date, payback }) {
    const history = useHistory()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "center",

            marginTop: "8vw",
            width: "90vw",
            paddingBottom: state === 0 ? "4vw" : 0,
            borderBottom: state === 0 ? "1px solid rgba(5, 26, 26, 0.2)" : 0,
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",
                marginBottom: "4vw",
            }}>{state === 0 ? "분할결제 완료" : "분할결제 진행중"}</div>
            <div onClick={() => history.push("/profilepaymentdetail")} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                cursor: "pointer",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
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
                        width: "45vw",
                        height: 100,
                    }}>
                        <div style={{
                            fontSize: 12,
                            fontFamily: "NotoSansCJKkr",
                            color: "#202426",
                            opacity: 0.6,
                        }}>{date}</div>
                        <div style={{
                            fontSize: 12,
                            color: "#202426",
                            fontFamily: "AvenirNext",
                            lineHeight: 1.5,
                        }}>{title}</div>
                        <div style={{
                            opacity: state === 0 ? 0.6 : 1,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: state === 0 ? "051a1a" : "#26c1f0",
                            fontFamily: "NotoSansCJKkr"
                        }}>{state === 0 ? "결제 완료" : num + "차 결제 예정"}</div>
                    </div>
                </div>
                <MdKeyboardArrowRight size={32} color="rgba(5, 26, 26, 0.4)" />
            </div>
            {state === 0 ? <></> :
                <div style={{
                    marginTop: "4vw",
                    width: "82vw",
                    borderRadius: 6,
                    backgroundColor: "#f2f3f8",
                    padding: "4vw",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "100%",
                        marginBottom: "2vw",
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426"
                        }}>{num}차 총 결제 금액</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>{payback} 원</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "100%",
                        marginBottom: "2vw",
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426"
                        }}>결제 후 잔여금액</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>0 원</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "100%",
                        marginBottom: "2vw",
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426"
                        }}>자동결제일</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>{date}</div>
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
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426"
                        }}>분할결제 방법</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#051a1a",
                        }}>{num}분할 결제</div>
                    </div>
                </div>
            }
            {state === 0 ? <></> :
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 12,
                    color: "#f72b2b",
                    width: "90vw",
                    marginTop: "2vw",
                    wordSpacing: "-1px"
                }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>
            }
        </div>
    )
}