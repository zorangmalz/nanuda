import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { BottomTag, Header, MBottomTag, MHeader } from "../Style";
import { IoPersonCircle } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router";

const MyInfoList = ({ standard, current, limit, path }) => {
    let history = useHistory()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: 110,
        }}>
            {limit ?
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#202426",
                        opacity: 0.6,
                        marginRight: 4,
                    }}>{standard}</div>
                    <AiOutlineQuestionCircle size={16} opacity={0.4} color="#051a1a" />
                </div>
                :
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                    opacity: 0.6,
                }}>{standard}</div>
            }
            <div onClick={() => history.push(path)} style={{
                marginTop: 8,
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#202426",
                cursor: "pointer"
            }}>{current}</div>
        </div>
    )
}

const MMyInfoList = ({ standard, current, limit, path }) => {
    let history = useHistory()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: 80,
        }}>
            {limit ?
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        color: "#202426",
                        opacity: 0.6,
                        marginRight: 4,
                    }}>{standard}</div>
                    <AiOutlineQuestionCircle size={10} opacity={0.4} color="#051a1a" />
                </div>
                :
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 10,
                    color: "#202426",
                    opacity: 0.6,
                }}>{standard}</div>
            }
            <div onClick={() => history.push(path)} style={{
                marginTop: 8,
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",
                cursor: "pointer"
            }}>{current}</div>
        </div>
    )
}

const PayDate = ({date, name, num, price}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 8,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",

                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#051a1a"
            }}>
                <div style={{
                    marginRight: 16,
                }}>{date}</div>
                <div>{name} ({num}차)</div>
            </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426"
            }}>{price} 원</div>
        </div>
    )
}

const MPayDate = ({date, name, num, price}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 8,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",

                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#051a1a"
            }}>
                <div style={{
                    marginRight: "4vw",
                }}>{date}</div>
                <div>{name} ({num}차)</div>
            </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                fontWeight: "bold",
                color: "#202426"
            }}>{price} 원</div>
        </div>
    )
}

const ManageList = ({ name, path }) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/" + path)} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            paddingBottom: 16,
            marginTop: 16,
            cursor: "pointer",
            width: 440,
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                color: "#202426"
            }}>{name}</div>
            <IoIosArrowForward size={24} color="#dbdbdb" />
        </div>
    )
}

const MManageList = ({ name, path }) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/" + path)} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            paddingBottom: "4vw",
            marginTop: "4vw",
            cursor: "pointer",
            width: "90vw",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#202426"
            }}>{name}</div>
            <IoIosArrowForward size={20} color="#dbdbdb" />
        </div>
    )
}

export default function ProfileMain() {
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
                            <Header content="마이페이지" goBack={true} />
                            <div style={{
                                paddingTop: 32,
                                paddingBottom: 32,
                                paddingLeft: 20,
                                paddingRight: 20,

                                width: 440,
                                backgroundColor: "rgba(38, 193, 240, 0.2)",

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 16
                                }}>
                                    <IoPersonCircle size={72} color="#dbdbdb" style={{ objectFit: "contain" }} />
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        marginLeft: 16
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                            <div style={{
                                                fontFamily: "NotoSansCJKkr",
                                                fontSize: 21,
                                                fontWeight: "bold",
                                                color: "#202426",
                                                marginRight: 4,
                                            }}>나누다 1</div>
                                            <BsPencil size={15} color="rgba(5, 26, 26, 0.6)" />
                                        </div>
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 16,
                                            opacity: 0.6,
                                            color: "#202426",
                                        }}>hyunmyung137@gmail.com</div>
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    width: 440,
                                }}>
                                    <MyInfoList standard="나누다 한도" current={300000} limit={true} path="/profilelimit" />
                                    <MyInfoList standard="나누다 포인트" current={100} limit={false} path="profilepoint" />
                                    <MyInfoList standard="내 리뷰" current={10} limit={false} path="/profilereview" />
                                    <MyInfoList standard="내가 구매한 상품" current={10} limit={false} path="/profileproduct" />
                                </div>
                            </div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                color: "#202426",
                                marginTop: 16,
                                marginLeft: 20
                            }}>이번달 총 결제 금액</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 32,
                                color: "#202426",
                                marginTop: 8,
                                marginLeft: 20,
                                marginBottom: 16
                            }}>300,000 원</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignSelf: "center",

                                width: 408,
                                padding: 16,
                                borderRadius: 6,
                                backgroundColor: "#f2f3f3",
                                marginBottom: 16,
                            }}>
                                <PayDate date="04/01" name="Prada Berry Expensive…" num={1} price={240000} />
                                <PayDate date="04/11" name="Product 2" num={2} price={60000} />
                                <PayDate date="04/21" name="Product 3" num={3} price="-" />
                                <PayDate date="04/29" name="Product 4" num={4} price="-" />
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginTop: 8,
                                }}>나누다 팁!</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    color: "#202426",
                                    opacity: 0.8,
                                    marginTop: 4,
                                }}>첫 결제 이후 분할결제 금액은 결제일에 자동결제 됩니다.</div>
                            </div>
                            <ManageList name="내 정보 관리" path="profileedit" />
                            <ManageList name="분할결제 스케쥴" path="profilepayment" />
                            <ManageList name="결제 수단 관리" path="addaccount" />
                            <ManageList name="상품 구매 내역" path="profileproduct" />
                            <BottomTag marginTop={120} marginBottom={0} />
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
                    <MHeader content="마이페이지" goBack={true} />
                    <div style={{
                        paddingTop: "8vw",
                        paddingBottom: "8vw",
                        paddingLeft: "5vw",
                        paddingRight: "5vw",

                        width: "90vw",
                        backgroundColor: "rgba(38, 193, 240, 0.2)",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 12
                        }}>
                            <IoPersonCircle size={60} color="#dbdbdb" style={{ objectFit: "contain" }} />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                marginLeft: "4vw"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        color: "#202426",
                                        marginRight: 4,
                                    }}>나누다 1</div>
                                    <BsPencil size={12} color="rgba(5, 26, 26, 0.6)" />
                                </div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#202426",
                                }}>hyunmyung137@gmail.com</div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "90vw",
                        }}>
                            <MMyInfoList standard="나누다 한도" current={300000} limit={true} path="/profilelimit" />
                            <MMyInfoList standard="나누다 포인트" current={100} limit={false} path="profilepoint" />
                            <MMyInfoList standard="내 리뷰" current={10} limit={false} path="/profilereview" />
                            <MMyInfoList standard="내가 구매한 상품" current={10} limit={false} path="/profileproduct" />
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "#202426",
                        marginTop: "4vw",
                        marginLeft: "5vw"
                    }}>이번달 총 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 28,
                        color: "#202426",
                        marginTop: "2vw",
                        marginLeft: "5vw",
                        marginBottom: "4vw"
                    }}>300,000 원</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "center",

                        width: "82vw",
                        padding: "4vw",
                        borderRadius: 6,
                        backgroundColor: "#f2f3f3",
                        marginBottom: "4vw",
                    }}>
                        <MPayDate date="04/01" name="Prada Berry Expensive…" num={1} price={240000} />
                        <MPayDate date="04/11" name="Product 2" num={2} price={60000} />
                        <MPayDate date="04/21" name="Product 3" num={3} price="-" />
                        <MPayDate date="04/29" name="Product 4" num={4} price="-" />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 8,
                        }}>나누다 팁!</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#202426",
                            opacity: 0.8,
                            marginTop: 4,
                        }}>첫 결제 이후 분할결제 금액은 결제일에 자동결제 됩니다.</div>
                    </div>
                    <MManageList name="내 정보 관리" path="profileedit" />
                    <MManageList name="분할결제 스케쥴" path="profilepayment" />
                    <MManageList name="결제 수단 관리" path="addaccount" />
                    <MManageList name="상품 구매 내역" path="profileproduct" />
                    <MBottomTag marginTop={60} marginBottom={0} />
                </div>
            </Mobile>
        </>
    )
}