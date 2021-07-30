import React, { useState } from "react"
import { AiFillQuestionCircle } from "react-icons/ai";
import { Default, Mobile } from "../App";
import { BottomTab, Header, MHeader, numberWithCommas } from "../Style";
import nodata from "../images/nodata.png"
import { useHistory } from "react-router-dom";
import { VictoryPie, VictoryLabel } from "victory"

export default function PaymentSchedule() {
    const [data, setData] = useState([])
    const limit = 500000;
    const history = useHistory()
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
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="결제 내역" />
                        <div style={{
                            width: 440,
                            marginTop: 24,
                            marginLeft: 20,
                            marginRight: 20,
                            marginBottom: 32,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: "#010608",
                                    marginBottom: 16,
                                }}>사용한 한도</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 28,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    marginBottom: 8,
                                }}>0 원</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "start"
                                }}>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#010608",
                                        marginRight: 8
                                    }}>총 한도 : {numberWithCommas(limit)} 원</div>
                                    <AiFillQuestionCircle size={24} color="#000000" />
                                </div>
                            </div>
                            <div style={{
                                width: 114,
                                height: 114,
                                borderRadius: 57,
                                backgroundColor: "#ffffff"
                            }}>
                                <svg width={114} height={114} >
                                    <VictoryPie
                                        colorScale={["#26c1f0", "#f2f3f8"]}
                                        standalone={false}
                                        width={114} height={114}
                                        data={[
                                            { x: "use", y: 0, label: "" },
                                            { x: "no-use", y: limit, label: "" },
                                        ]}
                                        radius={57}
                                    />
                                    <circle cx="57" cy="57" r="40" fill="#ffffff" />
                                    <VictoryLabel
                                        textAnchor="middle" verticalAnchor="middle"
                                        x={57} y={57}
                                        style={{ fontSize: 18, fontFamily: "NotoSansCJKkr", fontWeight: "bold" }}
                                        text="0%"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div style={{
                            width: 440,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 24,
                            paddingBottom: 24,
                            backgroundColor: "#010608",

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <PaymentMonth mobile={false} price={0} month="이번달" />
                            <PaymentMonth mobile={false} price={0} month="다음달" />
                            <PaymentMonth mobile={false} price={0} month="2달 뒤" />
                        </div>
                        {data.length > 0 ?
                            <>
                                <div style={{
                                    marginTop: 32,
                                    marginLeft: 20,

                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    alignSelf: "flex-start",
                                }}>결제 진행중</div>
                            </>
                            :
                            <>
                                <img alt="" src={nodata} style={{
                                    marginTop: 64,
                                    marginBottom: 32,
                                    alignSelf: "center",
                                    width: 320,
                                    height: 160,
                                    objectFit: "contain"
                                }} />
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 18,
                                    color: "#202426",
                                    alignSelf: "center"
                                }}>1/n에 처음 오셨나요?</div>
                                <div onClick={() => history.replace("/timedeal/entire")} style={{
                                    width: 440,
                                    paddingTop: 15,
                                    paddingBottom: 15,
                                    backgroundColor: "#26c1f0",
                                    borderRadius: 6,
                                    alignSelf: "center",
                                    marginTop: 32,
                                    cursor: "pointer",

                                    textAlign: "center",
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#ffffff"
                                }}>쇼핑하러가기</div>
                            </>
                        }
                        <BottomTab mobile={false} state={2} />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="결제 내역" />
                    <div style={{
                        width: "90vw",
                        marginTop: "6vw",
                        marginLeft: "5vw",
                        marginRight: "5vw",
                        marginBottom: "8vw",

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                fontWeight: "500",
                                color: "#010608",
                                marginBottom: "4vw",
                            }}>사용한 한도</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 26,
                                fontWeight: "bold",
                                color: "#010608",
                                marginBottom: "2vw",
                            }}>0 원</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "start"
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#010608",
                                    marginRight: "2vw"
                                }}>총 한도 : 500,000 원</div>
                                <AiFillQuestionCircle size={20} color="#000000" />
                            </div>
                        </div>
                        <div style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            backgroundColor: "#ffffff"
                        }}>
                            <svg width={100} height={100} >
                                <VictoryPie
                                    colorScale={["#26c1f0", "#f2f3f8"]}
                                    standalone={false}
                                    width={100} height={100}
                                    data={[
                                        { x: "use", y: 0, label: "" },
                                        { x: "no-use", y: limit, label: "" },
                                    ]}
                                    radius={50}
                                />
                                <circle cx="50" cy="50" r="38" fill="#ffffff" />
                                <VictoryLabel
                                    textAnchor="middle" verticalAnchor="middle"
                                    x={50} y={50}
                                    style={{ fontSize: 16, fontFamily: "NotoSansCJKkr", fontWeight: "bold" }}
                                    text="0%"
                                />
                            </svg>
                        </div>
                    </div>
                    <div style={{
                        width: "90vw",
                        paddingLeft: "5vw",
                        paddingRight: "5vw",
                        paddingTop: "6vw",
                        paddingBottom: "6vw",
                        backgroundColor: "#010608",

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <PaymentMonth mobile={true} price={0} month="이번달" />
                        <PaymentMonth mobile={true} price={0} month="다음달" />
                        <PaymentMonth mobile={true} price={0} month="2달 뒤" />
                    </div>
                    {data.length > 0 ?
                        <>
                            <div style={{
                                marginTop: "8vw",
                                marginLeft: "5vw",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#010608",
                                alignSelf: "flex-start",
                            }}>결제 진행중</div>
                        </>
                        :
                        <>
                            <img alt="" src={nodata} style={{
                                marginTop: "16vw",
                                marginBottom: "8vw",
                                alignSelf: "center",
                                width: "66vw",
                                height: "33vw",
                                objectFit: "contain"
                            }} />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426",
                                alignSelf: "center"
                            }}>1/n에 처음 오셨나요?</div>
                            <div onClick={() => history.replace("/timedeal/entire")} style={{
                                width: "90vw",
                                paddingTop: "4vw",
                                paddingBottom: "4vw",
                                backgroundColor: "#26c1f0",
                                borderRadius: 6,
                                alignSelf: "center",
                                marginTop: "8vw",
                                cursor: "pointer",

                                textAlign: "center",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#ffffff"
                            }}>쇼핑하러가기</div>
                        </>
                    }
                    <BottomTab mobile={true} state={2} />
                </div>
            </Mobile>
        </>
    )
}

const PaymentMonth = ({ mobile, price, month }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginRight: mobile ? "8vw" : 32,
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 16 : 18,
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: mobile ? 4 : 6
            }}>{numberWithCommas(price)} 원</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 12 : 14,
                fontWeight: "bold",
                color: "#ffffff",
            }}>{month} 결제 예정</div>
        </div>
    )
}