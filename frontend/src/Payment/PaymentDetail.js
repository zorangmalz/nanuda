import React, { useState ,useEffect} from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { useHistory ,useLocation} from "react-router";

export default function PaymentDetail() {
    const [complete, setComplete] = useState(false)
    
    //화면 변경
    const history = useHistory()
    const location = useLocation()
    const item=location.state.item
    useEffect(()=>{
        console.log(item)
    },[])
    const [dates, setDates] = useState("")
    function compareDate() {
        var today = new Date()
        var month = today.getMonth()
        var day = today.getDate()

        var id = item.order_id
        var splited = id.split("-")
        setDates("20" + splited[1].slice(0, 2) + "." + splited[1].slice(2, 4) + "." + splited[1].slice(4, 6))
    }
    useEffect(()=>{
        compareDate()
    },[])
    function totalpay(){
        
    }
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
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
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
                            {item.product_image===undefined?
                               <img src={item.wish_image} style={{
                                width: 120,
                                heigh: 120,
                                borderRadius: 6,
                                marginRight: 16,
                                objectFit: "cover"
                            }} />
                            :
                            <img src={item.product_image} style={{
                                width: 120,
                                heigh: 120,
                                borderRadius: 6,
                                marginRight: 16,
                                objectFit: "cover"
                            }} />
                            }
                          
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
                                    color: "#010608",
                                    opacity: 0.6,
                                }}>{dates}</div>
                                {item.product_name==undefined ?
                                 <div style={{
                                    fontSize: 16,
                                    color: "#010608",
                                    fontFamily: "AvenirNext",
                                    lineHeight: 1.5,
                                 }}>{item.wish_title}</div>
                                    :
                                    <div style={{
                                        fontSize: 16,
                                        color: "#010608",
                                        fontFamily: "AvenirNext",
                                        lineHeight: 1.5,
                                     }}>{item.product_name}</div>
                                 }
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.order_price}원</div>
                            </div>
                        </div>
                        <div style={{
                            width: 440,
                            height: 1,
                            backgroundColor: "rgba(1, 6, 8, 0.2)",
                            alignSelf: "center",
                        }} />
                            {item.payment_history.map((item) =>{
                                return(
                                    <>
                                    {item.money===0?
                                    <></>
                                    :
                                    <PayInfo
                                    num={item.num}
                                    date={item.date}
                                    state={item.payment}
                                    payback={item.money}
                                />
                                }  
                                    </>
                                )
                            })
                        }
                        {complete ? <></> :
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#f72b2b",
                                alignSelf: "center",
                                marginTop: 8,
                            }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>}
                        <div onClick={() => history.push("/payment/success")} style={{
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
                              {item.product_image===undefined?
                               <img src={item.wish_image} style={{
                                width: 100,
                                heigh: 100,
                                borderRadius: 6,
                                marginRight: 16,
                                objectFit: "cover"
                            }} />
                            :
                            <img src={item.product_image} style={{
                                width: 100,
                                heigh: 100,
                                borderRadius: 6,
                                marginRight: 16,
                                objectFit: "cover"
                            }} />
                            }
                  
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
                                    color: "#010608",
                                    opacity: 0.6,
                                }}>{dates}</div>
                                {item.product_name==undefined ?
                                 <div style={{
                                    fontSize: 14,
                                    color: "#010608",
                                    fontFamily: "AvenirNext",
                                    lineHeight: 1.5,
                                 }}>{item.wish_title}</div>
                                    :
                                    <div style={{
                                        fontSize: 14,
                                        color: "#010608",
                                        fontFamily: "AvenirNext",
                                        lineHeight: 1.5,
                                     }}>{item.product_name}</div>
                                 }
                                <div style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.order_price}원</div>
                        </div>
                    </div>
                    <div style={{
                        width: "90vw",
                        height: 1,
                        backgroundColor: "rgba(1, 6, 8, 0.2)",
                        alignSelf: "center",
                    }} />
                 {item.payment_history.map((item) =>{
                                return(
                                    <>
                                    {item.money===0?
                                    <></>
                                    :
                                    <MPayInfo
                                    num={item.num}
                                    date={item.date}
                                    state={item.payment}
                                    payback={item.money}
                                />
                                }  
                                    </>
                                )
                            })
                        }
                    {complete ? <></> :
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#f72b2b",
                            alignSelf: "center",
                            marginTop: 8,
                        }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>}
                    <div onClick={() => history.push("/payment/success")} style={{
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
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

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
                        color: "#010608",
                    }}>{num}차 분할결제 정보 ({date})</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: state === true ? "rgba(1, 6, 8, 0.6)" : state === false ? "#26c1f0" : "#f72b2b",
                    }}>{state === true ? "결제완료" : state === false ? "결제 예정" : "연체"}</div>
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
                        color: "#010608",
                    }}>{num}차 총 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#010608",
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
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

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
                        color: "#010608",
                    }}>{num}차 분할결제 정보 ({date})</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: state === true ? "rgba(1, 6, 8, 0.6)" : state === false ? "#26c1f0" : "#f72b2b",
                    }}>{state === true ? "결제완료" : state === false ? "결제 예정" : "연체"}</div>
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
                        color: "#010608",
                    }}>{num}차 총 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#010608",
                    }}>{payback} 원</div>
                </div>
            </div>
        </>
    )
}