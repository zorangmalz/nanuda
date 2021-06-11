import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router";

export default function ProfileProduct() {
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
                        alignItems: "center",
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        paddingBottom: 40,
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="상품 구매 내역" goBack={true} />
                        <div style={{ marginTop: 16 }} />
                        <ProductState
                            date="2021.04.13"
                            title="PRADA Model 23-9 limited WHITE, 270mm"
                            price={480000}
                            state={1}
                        />
                        <ProductState
                            date="2021.04.13"
                            title="PRADA Model 23-9 limited WHITE, 270mm"
                            price={480000}
                            state={2}
                        />
                        <ProductState
                            date="2021.04.13"
                            title="PRADA Model 23-9 limited WHITE, 270mm"
                            price={480000}
                            state={2}
                        />
                        <ProductState
                            date="2021.04.13"
                            title="PRADA Model 23-9 limited WHITE, 270mm"
                            price={480000}
                            state={3}
                        />
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
                    paddingBottom: 20,
                }}>
                    <MHeader content="상품 구매 내역" goBack={true} />
                    <div style={{ marginTop: "4vw" }} />
                    <MProductState
                        date="2021.04.13"
                        title="PRADA Model 23-9 limited WHITE, 270mm"
                        price={480000}
                        state={1}
                    />
                    <MProductState
                        date="2021.04.13"
                        title="PRADA Model 23-9 limited WHITE, 270mm"
                        price={480000}
                        state={2}
                    />
                    <MProductState
                        date="2021.04.13"
                        title="PRADA Model 23-9 limited WHITE, 270mm"
                        price={480000}
                        state={2}
                    />
                    <MProductState
                        date="2021.04.13"
                        title="PRADA Model 23-9 limited WHITE, 270mm"
                        price={480000}
                        state={3}
                    />
                </div>
            </Mobile>
        </>
    )
}

function ProductState({ date, title, price, state }) {
    const history = useHistory()
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 16,
                paddingBottom: 16,
                width: 440,
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)"
            }}>
                <div onClick={() => history.push("/profileproductinfo")} style={{
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
                                color: "#010608",
                                opacity: 0.6,
                            }}>{date}</div>
                            <div style={{
                                fontSize: 16,
                                color: "#010608",
                                fontFamily: "AvenirNext",
                                lineHeight: 1.5,
                            }}>{title}</div>
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>{price}원</div>
                        </div>
                    </div>
                    <MdKeyboardArrowRight size={32} color="rgba(1, 6, 8, 0.4)" />
                </div>
                {/* <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 16,
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        width: 414,
                    }}>
                        <div style={{
                            zIndex: 5,
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            backgroundColor: state > 0 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            position: "absolute",
                            zIndex: 4,
                            width: 195,
                            left: 12,
                            top: 8,
                            height: 8,
                            backgroundColor: state > 1 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            zIndex: 3,
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            backgroundColor: state > 1 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            position: "absolute",
                            zIndex: 2,
                            right: 12,
                            top: 8,
                            width: 195,
                            height: 8,
                            backgroundColor: state > 2 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            zIndex: 1,
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            backgroundColor: state > 2 ? "#26c1f0" : "#dbdbdb",
                        }} />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: 440,
                        marginTop: 8,
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: state > 0 ? "bold" : "normal",
                            color: "#010608",
                            opacity: state > 0 ? 1 : 0.6,
                            width: 55,
                            textAlign: "center",
                        }}>주문접수</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: state > 1 ? "bold" : "normal",
                            color: "#010608",
                            opacity: state > 1 ? 1 : 0.6,
                            width: 55,
                            textAlign: "center",
                        }}>배송중</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: state > 2 ? "bold" : "normal",
                            color: "#010608",
                            opacity: state > 2 ? 1 : 0.6,
                            width: 55,
                            textAlign: "center",
                        }}>배송완료</div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

function MProductState({ date, title, price, state }) {
    const history = useHistory()
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "4vw",
                paddingBottom: "4vw",
                width: "90vw",
                alignSelf: "center",
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)"
            }}>
                <div onClick={() => history.push("/profileproductinfo")} style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    cursor: "pointer"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: 6,
                            marginRight: 8,
                            backgroundColor: "#000000",
                            color: "#ffffff"
                        }}>상품 그림</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            width: 165,
                            height: 80,
                        }}>
                            <div style={{
                                fontSize: 14,
                                fontFamily: "NotoSansCJKkr",
                                color: "#010608",
                                opacity: 0.6,
                            }}>{date}</div>
                            <div style={{
                                fontSize: 12,
                                color: "#010608",
                                fontFamily: "AvenirNext",
                                lineHeight: 1.5,
                            }}>{title}</div>
                            <div style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>{price}원</div>
                        </div>
                    </div>
                    <MdKeyboardArrowRight size={24} color="rgba(1, 6, 8, 0.4)" />
                </div>
                {/* <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "4vw",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        width: "81vw",
                    }}>
                        <div style={{
                            zIndex: 5,
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                            backgroundColor: state > 0 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            position: "absolute",
                            zIndex: 4,
                            width: "40vw",
                            left: 8,
                            top: 6,
                            height: 6,
                            backgroundColor: state > 1 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            zIndex: 3,
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                            backgroundColor: state > 1 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            position: "absolute",
                            zIndex: 2,
                            right: 8,
                            top: 6,
                            width: "40vw",
                            height: 6,
                            backgroundColor: state > 2 ? "#26c1f0" : "#dbdbdb",
                        }} />
                        <div style={{
                            zIndex: 1,
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                            backgroundColor: state > 2 ? "#26c1f0" : "#dbdbdb",
                        }} />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "90vw",
                        marginTop: 8,
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: state > 0 ? "bold" : "normal",
                            color: "#010608",
                            opacity: state > 0 ? 1 : 0.6,
                            width: 50,
                            textAlign: "center",
                        }}>주문접수</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: state > 1 ? "bold" : "normal",
                            color: "#010608",
                            opacity: state > 1 ? 1 : 0.6,
                            width: 50,
                            textAlign: "center",
                        }}>배송중</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: state > 2 ? "bold" : "normal",
                            color: "#010608",
                            opacity: state > 2 ? 1 : 0.6,
                            width: 50,
                            textAlign: "center",
                        }}>배송완료</div>
                    </div>
                </div> */}
            </div>
        </>
    )
}