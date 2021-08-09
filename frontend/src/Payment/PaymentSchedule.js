import React, { useState } from "react"
import { AiFillQuestionCircle, AiOutlineClose } from "react-icons/ai";
import { Default, Mobile } from "../App";
import { BottomTab, Header, MHeader, numberWithCommas } from "../Style";
import nodata from "../images/nodata.png"
import { useHistory } from "react-router-dom";
import { VictoryPie, VictoryLabel } from "victory"

export default function PaymentSchedule() {
    const [data, setData] = useState([])
    const limit = 500000;
    const history = useHistory()
    const [standard, setStandard] = useState(2)
    const [limitDescription, setLimitDescription] = useState(false)
    const [one, setOne] = useState(150000)
    const [two, setTwo] = useState(150000)
    const [three, setThree] = useState(0)
    const [four, setFour] = useState(0)
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
                                    <AiFillQuestionCircle style={{ cursor: "pointer" }} size={24} color="#000000" onClick={() => setLimitDescription(true)} />
                                </div>
                            </div>
                            {limitDescription ?
                                <div style={{
                                    width: 440,
                                    height: "100vh",
                                    minHeight: 600,
                                    backgroundColor: "rgba(1, 6, 8, 0.4)",
                                    position: "fixed",
                                    top: 0,
                                    zIndex: 10,

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <div style={{
                                        width: 440,
                                        paddingTop: 8,
                                        paddingBottom: 40,
                                        backgroundColor: "#ffffff",
                                        borderRadius: 6,
                                        border: "solid 1px rgba(5, 26, 26, 0.2)",
                                        zIndex: 11
                                    }}>
                                        <AiOutlineClose size={24} color="#051a1a" style={{ marginLeft: 8 }} />
                                        <div style={{
                                            width: 360,
                                            marginLeft: 40,
                                            marginTop: 8,
                                            marginBottom: 16,
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            color: "#010608",
                                        }}>총 한도와 사용한 한도는 무엇인가요??</div>
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            opacity: 0.8,
                                            fontSize: 14,
                                            color: "#010608",
                                            width: 360,
                                            marginBottom: 32,
                                            marginLeft: 40,
                                        }}>
                                            <span style={{ fontWeight: "bold" }}>총 한도</span>
                                            는 n분의1에서 회원님에게 빌려드릴 수 있는 <br />
                                            금액의 총 합을 의미해요! <br />
                                            <span style={{ fontWeight: "bold" }}>사용한 한도</span>
                                            는 회원님이 상품을 분할결제할때 <br />
                                            나중에 결제할 금액의 총합을 의미합니다!
                                        </div>
                                        <div style={{
                                            width: 360,
                                            marginLeft: 40,
                                            marginBottom: 16,
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            color: "#010608",
                                            letterSpacing: "-0.45px"
                                        }}>총 한도 50만원일때 30만원짜리 가방을 산다면?</div>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginLeft: 40,
                                            marginBottom: 16,
                                        }}>
                                            <DivisionButton mobile={false} num={2} standard={standard} text="2회" onClick={() => {
                                                setStandard(2)
                                                setOne(150000)
                                                setTwo(150000)
                                                setThree(0)
                                                setFour(0)
                                            }} />
                                            <DivisionButton mobile={false} num={4} standard={standard} text="4회" onClick={() => {
                                                setStandard(4)
                                                setOne(75000)
                                                setTwo(75000)
                                                setThree(75000)
                                                setFour(75000)
                                            }} />
                                            <DivisionButton mobile={false} num={0} standard={standard} text="전체" onClick={() => {
                                                setStandard(0)
                                                setOne(300000)
                                                setTwo(0)
                                                setThree(0)
                                                setFour(0)
                                            }} />
                                        </div>
                                        <div style={{
                                            marginLeft: 40,
                                            borderRadius: 6,
                                            backgroundColor: "#f2f3f8",
                                            paddingTop: 16,
                                            paddingLeft: 16,
                                            paddingRight: 16,
                                            paddingBottom: 8,
                                            width: 328,
                                        }}>
                                            <DivisionInfo mobile={false} num={1} date="3/1" price={one} />
                                            <DivisionInfo mobile={false} num={2} date="4/1" price={two} />
                                            <DivisionInfo mobile={false} num={3} date="5/1" price={three} />
                                            <DivisionInfo mobile={false} num={4} date="6/1" price={four} />
                                        </div>
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            color: "#010608",
                                            marginLeft: 40,
                                            marginTop: 16,
                                        }}>
                                            사용한 한도는 나중에 결제할 <span style={{ color: "#26c1f0" }}>{numberWithCommas(two + three + four)}원</span> 입니다. <br />
                                            잔여한도는 <span style={{ color: "#26c1f0" }}>{numberWithCommas(500000 - two - three - four)}원</span> 입니다.
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                            }
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
                                }}>총 한도 : {numberWithCommas(limit)} 원</div>
                                <AiFillQuestionCircle style={{ cursor: "pointer" }} size={20} color="#000000" onClick={() => setLimitDescription(true)} />
                            </div>
                        </div>
                        {limitDescription ?
                            <div style={{
                                width: "100vw",
                                height: "100vh",
                                minHeight: 300,
                                backgroundColor: "rgba(1, 6, 8, 0.4)",
                                position: "fixed",
                                top: 0,
                                zIndex: 10,

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <div style={{
                                    width: "90vw",
                                    paddingTop: "2vw",
                                    paddingBottom: "10vw",
                                    backgroundColor: "#ffffff",
                                    borderRadius: 6,
                                    border: "solid 1px rgba(5, 26, 26, 0.2)",
                                    zIndex: 11
                                }}>
                                    <AiOutlineClose size={20} color="#051a1a" style={{ marginLeft: "2vw" }} />
                                    <div style={{
                                        width: "80vw",
                                        marginLeft: "5vw",
                                        marginTop: "2vw",
                                        marginBottom: "4vw",
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                    }}>총 한도와 사용한 한도는 무엇인가요??</div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        opacity: 0.8,
                                        fontSize: 12,
                                        color: "#010608",
                                        width: "80vw",
                                        marginBottom: "8vw",
                                        marginLeft: "5vw",
                                    }}>
                                        <span style={{ fontWeight: "bold" }}>총 한도</span>
                                        는 n분의1에서 회원님에게 빌려드릴 수 있는 <br />
                                        금액의 총 합을 의미해요! <br />
                                        <span style={{ fontWeight: "bold" }}>사용한 한도</span>
                                        는 회원님이 상품을 분할결제할때 <br />
                                        나중에 결제할 금액의 총합을 의미합니다!
                                    </div>
                                    <div style={{
                                        width: "80vw",
                                        marginLeft: "5vw",
                                        marginBottom: "4vw",
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        letterSpacing: "-0.45px"
                                    }}>총 한도 50만원일때 30만원짜리 가방을 산다면?</div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginLeft: "5vw",
                                        marginBottom: "4vw",
                                    }}>
                                        <DivisionButton mobile={true} num={2} standard={standard} text="2회" onClick={() => {
                                            setStandard(2)
                                            setOne(150000)
                                            setTwo(150000)
                                            setThree(0)
                                            setFour(0)
                                        }} />
                                        <DivisionButton mobile={true} num={4} standard={standard} text="4회" onClick={() => {
                                            setStandard(4)
                                            setOne(75000)
                                            setTwo(75000)
                                            setThree(75000)
                                            setFour(75000)
                                        }} />
                                        <DivisionButton mobile={true} num={0} standard={standard} text="전체" onClick={() => {
                                            setStandard(0)
                                            setOne(300000)
                                            setTwo(0)
                                            setThree(0)
                                            setFour(0)
                                        }} />
                                    </div>
                                    <div style={{
                                        marginLeft: "5vw",
                                        borderRadius: 6,
                                        backgroundColor: "#f2f3f8",
                                        paddingTop: "4vw",
                                        paddingLeft: "4vw",
                                        paddingRight: "4vw",
                                        paddingBottom: "2vw",
                                        width: "72vw",
                                    }}>
                                        <DivisionInfo mobile={true} num={1} date="3/1" price={one} />
                                        <DivisionInfo mobile={true} num={2} date="4/1" price={two} />
                                        <DivisionInfo mobile={true} num={3} date="5/1" price={three} />
                                        <DivisionInfo mobile={true} num={4} date="6/1" price={four} />
                                    </div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginLeft: "5vw",
                                        marginTop: "4vw",
                                    }}>
                                        사용한 한도는 나중에 결제할 <span style={{ color: "#26c1f0" }}>{numberWithCommas(two + three + four)}원</span> 입니다. <br />
                                        잔여한도는 <span style={{ color: "#26c1f0" }}>{numberWithCommas(500000 - two - three - four)}원</span> 입니다.
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                        }
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

const DivisionButton = ({ mobile, num, standard, text, onClick }) => {
    return (
        <div onClick={onClick} style={{
            paddingTop: mobile ? "2vw" : 9,
            paddingBottom: mobile ? "2vw" : 9,
            paddingLeft: mobile ? "3vw" : 12,
            paddingRight: mobile ? "3vw" : 12,
            backgroundColor: standard === num ? "#051a1a" : "#cbcccc",
            borderRadius: 6,
            border: "solid 1px #051a1a",
            opacity: standard === num ? 1 : 0.8,
            marginRight: mobile ? "4vw" : 16,
            fontFamily: "NotoSansCJKkr",
            fontSize: mobile ? 14 : 16,
            fontWeight: "bold",
            color: standard === num ? "#ffffff" : "#333739",
            cursor: "pointer"
        }}>{text}</div>
    )
}

const DivisionInfo = ({ mobile, num, date, price }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: mobile ? "72vw" : 328,
            marginBottom: mobile ? "2vw" : 8,
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 14 : 16,
                color: "#010608"
            }}>
                {num}차 결제 <span style={{ fontWeight: "bold", color: "#26c1f0" }}>({date})</span>
            </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 14 : 16,
                color: "#010608",
                fontWeight: "bold"
            }}>{price > 0 ? numberWithCommas(price) : "-"} 원</div>
        </div>
    )
}