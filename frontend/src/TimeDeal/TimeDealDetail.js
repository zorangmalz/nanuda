import React, { useEffect, useState } from "react";
import { Default, Mobile } from "../App";
import { BottomTag, Header, MBottomTag, MHeader } from "../Style";
import { useHistory } from "react-router";
import airpotone from "../images/airpotone.png"
import airpottwo from "../images/airpottwo.png"
import airpotthree from "../images/airpotthree.png"
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import queryString from "query-string"
import ipadlogo from "../images/ipadlogo.png"
import ipadshort from "../images/ipadshort.png"
import ipadlong from "../images/ipadlong.png"

export default function TimeDealDetail({ location }) {
    let history = useHistory()

    const query = queryString.parse(location.search)
    const [des,setDes]=useState("")
    useEffect(() => {
        console.log(query)
        if(query.product === "airpod"){
            setDes("Apple AirPods Pro 애플 에어팟 프로 1세대 무선충전형")
        }else{
            setDes(`Apple iPad Air 4세대 (MYFM2KH/A), Wi-Fi, 64GB, 스페이스그레이`)
        }
    }, [])
    

    const [infoHide, setInfoHide] = useState(true)
    const [infoShow, setInfoShow] = useState(false)
    const [neccInfo, setNeccInfo] = useState(false)
    return (
        <div>
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="n분의1딜" goBack={true} />
                        <img alt="airpotone" src={query.product === "airpod" ? airpotone : ipadlogo} style={{
                            width: 480,
                        }} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 20,
                            marginTop: 32,
                        }}>애플</div>
                        <div style={{
                            fontFamily: "AvenirNext",
                            fontSize: 18,
                            opacity: 0.8,
                            color: "#010608",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 8,
                            marginBottom: 28,
                        }}>{des}</div>
                        <DivideContainer num="2" price={query.product === "airpod" ? "130,000" : "360,750"} marginBottom={20} />
                        <DivideContainer num="4" price={query.product === "airpod" ? "65,000" : "180,375"} marginBottom={16} />
                        <div style={{
                            width: 424,
                            paddingLeft: 16,
                            paddingTop: 16,
                            paddingBottom: 16,
                            backgroundColor: "#f2f3f8",
                            borderRadius: 6,
                            marginLeft: 20,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            color: "#010608",
                            fontWeight: "bold",
                        }}>🔥 계좌이체를 통해 <span style={{ fontWeight: "normal" }}>간편하게 분할결제하세요!</span></div>
                        <div style={{
                            marginTop: 32,
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 20,
                            marginBottom: 32,
                        }}>상품정보</div>
                        <img alt="airpottwo" src={query.product === "airpod" ? airpottwo : ipadshort} style={{ width: 440, marginLeft: 20 }} />
                        {infoHide ?
                            <div onClick={() => setInfoHide(false)} style={{
                                marginTop: 16,
                                marginBottom: 32,
                                border: "1px solid #26c1f0",
                                backgroundColor: "#ffffff",
                                width: 220,
                                paddingTop: 12,
                                paddingBottom: 12,
                                cursor: "pointer",
                                alignSelf: "center",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#26c1f0",
                                textAlign: "center",
                                borderRadius: 6,
                            }}>상품정보 더보기</div>
                            :
                            <img alt="airpotthree" src={query.product === "airpod" ? airpotthree : ipadlong} style={{ width: 440, marginLeft: 20, marginBottom: 32, height: "auto" }} />
                        }
                        <div style={{ width: 440, height: 1, backgroundColor: "rgba(1, 6, 8, 0.2)", alignSelf: "center", marginBottom: 16 }} />
                        {/* <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 20,
                            marginBottom: 16,
                        }}>리뷰(예시)</div>
                        <div style={{
                            width: 440,
                            marginLeft: 20,
                            paddingBottom: 16,
                            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                            marginBottom: 32,
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 32,
                            }}>
                                <AiFillStar color="#fad94f" size={32} />
                                <AiFillStar color="#fad94f" size={32} />
                                <AiFillStar color="#fad94f" size={32} />
                                <AiFillStar color="#fad94f" size={32} />
                                <AiFillStar color="#fad94f" size={32} />
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 21,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    marginLeft: 8,
                                }}>5.0/5.0</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: 440,
                                height: 68,
                                marginBottom: 16,
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    width: 440,
                                    height: 68,
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <img src={profile} alt="profile" style={{ width: 32 }} />
                                        <div style={{
                                            marginLeft: 8,
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            color: "#010608",
                                        }}>n분의1 홀릭</div>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <AiFillStar size={16} color="#fad94f" />
                                        <div style={{
                                            marginLeft: 4,
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            color: "#010608",
                                        }}>4.5</div>
                                    </div>
                                </div>
                                <img src={reviewexample} alt="reviewexample" style={{ width: 110 }} />
                            </div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#26c1f0",
                                marginBottom: 8,
                            }}>좋았어요!</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#010608",
                                opacity: 0.8,
                                marginBottom: 16,
                                lineHeight: 1.5
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#f72b2b",
                                marginBottom: 8,
                            }}>별로였어요.</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#010608",
                                opacity: 0.8,
                                marginBottom: 8,
                                lineHeight: 1.5
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 12,
                                opacity: 0.6,
                                color: "#010608"
                            }}>2021.03.30</div>
                        </div> */}
                        <InfoBox onClick={() => setNeccInfo(true)} name="필수 표기 정보" marginBottom={16} />
                        <InfoBox onClick={() => setInfoShow(true)} name="배송 및 반품, 교환안내" marginBottom={16} />
                        {/* <InfoBox name="자주 묻는 질문" marginBottom={0} /> */}
                        <BottomTag marginTop={100} marginBottom={0} />
                        {/* 넘기는 파라미터값으로 1.product Id(여기서는 Airpod) 2.가격, 3.옵션 */}
                        <div id="hauldeal_click" onClick={() => history.push("/timeorder", { param:[query.product,query.product=="ipad"? "721500":"260000","",des] })} style={{
                            position: "fixed",
                            bottom: 40,
                            width: 440,
                            paddingTop: 16,
                            paddingBottom: 16,
                            borderRadius: 6,
                            backgroundColor: "#26c1f0",
                            alignSelf: "center",
                            cursor: "pointer",

                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            color: "#ffffff",
                            textAlign: "center"
                        }}>구매하기</div>
                        {infoShow ? <div style={{
                            width: 480,
                            height: "100%",
                            backgroundColor: "rgba(1, 6, 8, 0.4)",
                            position: "fixed",
                            top: 0,
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Delivery onClick={() => setInfoShow(false)} />
                        </div> : <div></div>}
                        {neccInfo && query.product === "airpod" ? <div style={{
                            width: 480,
                            height: "100%",
                            backgroundColor: "rgba(1, 6, 8, 0.4)",
                            position: "fixed",
                            top: 0,
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Neccessary onClick={() => setNeccInfo(false)} />
                        </div> : <div></div>}
                        {neccInfo && query.product === "ipad" ? <div style={{
                            width: 480,
                            height: "100%",
                            backgroundColor: "rgba(1, 6, 8, 0.4)",
                            position: "fixed",
                            top: 0,
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <NeccessaryIpad onClick={() => setNeccInfo(false)} />
                        </div> : <div></div>}
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
                }}>
                    <MHeader content="n분의1딜" goBack={true} />
                    <img alt="airpotone" src={query.product === "airpod" ? airpotone : ipadlogo} style={{
                        width: "100vw",
                    }} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#010608",
                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>애플</div>
                    <div style={{
                        fontFamily: "AvenirNext",
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#010608",
                        marginLeft: "5vw",
                        marginRight: "5vw",
                        marginTop: "2vw",
                        marginBottom: "7vw",
                    }}>Apple AirPods Pro 애플 에어팟 프로 1세대 무선충전형</div>
                    <MDivideContainer num="2" price="130,000" marginBottom={"5vw"} />
                    <MDivideContainer num="4" price="65,000" marginBottom={"4vw"} />
                    <div style={{
                        width: "86vw",
                        paddingLeft: "4vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#f2f3f8",
                        borderRadius: 6,
                        marginLeft: "5vw",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#010608",
                        fontWeight: "bold",
                    }}>🔥 계좌이체를 통해 <span style={{ fontWeight: "normal" }}>간편하게 분할결제하세요!</span></div>
                    <div style={{
                        marginTop: "8vw",
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginLeft: "5vw",
                        marginBottom: "8vw",
                    }}>상품정보</div>
                    <img alt="airpottwo" src={query.product === "airpod" ? airpottwo : ipadshort} style={{ width: "90vw", marginLeft: "5vw" }} />
                    {infoHide ?
                        <div onClick={() => setInfoHide(false)} style={{
                            marginTop: "4vw",
                            marginBottom: "8vw",
                            border: "1px solid #26c1f0",
                            backgroundColor: "#ffffff",
                            width: "45vw",
                            paddingTop: "3vw",
                            paddingBottom: "3vw",
                            cursor: "pointer",
                            alignSelf: "center",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#26c1f0",
                            textAlign: "center",
                            borderRadius: 6,
                        }}>상품정보 더보기</div>
                        :
                        <img alt="airpotthree" src={query.product === "airpod" ? airpotthree : ipadlong} style={{ width: "90vw", marginLeft: "5vw", marginBottom: "8vw", height: "auto" }} />
                    }
                    <div style={{ width: "90vw", height: 1, backgroundColor: "rgba(1, 6, 8, 0.2)", alignSelf: "center", marginBottom: "4vw" }} />
                    {/* <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginLeft: "5vw",
                        marginBottom: "4vw",
                    }}>리뷰(예시)</div>
                    <div style={{
                        width: "90vw",
                        marginLeft: "5vw",
                        paddingBottom: "4vw",
                        borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                        marginBottom: "8vw",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: "8vw",
                        }}>
                            <AiFillStar color="#fad94f" size={24} />
                            <AiFillStar color="#fad94f" size={24} />
                            <AiFillStar color="#fad94f" size={24} />
                            <AiFillStar color="#fad94f" size={24} />
                            <AiFillStar color="#fad94f" size={24} />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#010608",
                                marginLeft: "2vw",
                            }}>5.0/5.0</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "90vw",
                            marginBottom: "4vw",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                width: "90vw",
                                height: "16vw"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <img src={profile} alt="profile" style={{ width: "8vw" }} />
                                    <div style={{
                                        marginLeft: "2vw",
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#010608",
                                    }}>n분의1 홀릭</div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <AiFillStar size={14} color="#fad94f" />
                                    <div style={{
                                        marginLeft: "1vw",
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#010608",
                                    }}>4.5</div>
                                </div>
                            </div>
                            <img src={reviewexample} alt="reviewexample" style={{ width: "27vw" }} />
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#26c1f0",
                            marginBottom: "2vw",
                        }}>좋았어요!</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#010608",
                            opacity: 0.8,
                            marginBottom: "4vw",
                            lineHeight: 1.5
                        }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#f72b2b",
                            marginBottom: "2vw",
                        }}>별로였어요.</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#010608",
                            opacity: 0.8,
                            marginBottom: "2vw",
                            lineHeight: 1.5
                        }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 10,
                            opacity: 0.6,
                            color: "#010608"
                        }}>2021.03.30</div>
                    </div> */}
                    <MInfoBox onClick={() => setNeccInfo(true)} name="필수 표기 정보" marginBottom={"4vw"} />
                    <MInfoBox onClick={() => setInfoShow(true)} name="배송 및 반품, 교환안내" marginBottom={"4vw"} />
                    {/* <MInfoBox name="자주 묻는 질문" marginBottom={0} /> */}
                    <MBottomTag marginTop={"25vw"} marginBottom={0} />
                    {/* 넘기는 파라미터값으로 1.product Id(여기서는 Airpod) 2.가격, 3.옵션 */}
                    <div id="hauldeal_click" onClick={() => history.push("/timeorder", { param:[query.product,query.product=="ipad"? "721500":"260000","",des] })} style={{
                        position: "fixed",
                        bottom: "10vw",
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#26c1f0",
                        alignSelf: "center",
                        cursor: "pointer",
                        borderRadius: 6,

                        fontSize: 16,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        color: "#ffffff",
                        textAlign: "center"
                    }}>구매하기</div>
                    {infoShow ? <div style={{
                        width: "100vw",
                        height: "100%",
                        backgroundColor: "rgba(1, 6, 8, 0.4)",
                        position: "fixed",
                        top: 0,
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <MDelivery onClick={() => setInfoShow(false)} />
                    </div> : <div></div>}
                    {neccInfo && query.product === "airpod" ? <div style={{
                        width: "100vw",
                        height: "100%",
                        backgroundColor: "rgba(1, 6, 8, 0.4)",
                        position: "fixed",
                        top: 0,
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <MNeccessary onClick={() => setNeccInfo(false)} />
                    </div> : <div></div>}
                    {neccInfo && query.product === "ipad" ? <div style={{
                        width: "100vw",
                        height: "100%",
                        backgroundColor: "rgba(1, 6, 8, 0.4)",
                        position: "fixed",
                        top: 0,
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <MNeccessaryIpad onClick={() => setNeccInfo(false)} />
                    </div> : <div></div>}
                </div>
            </Mobile>
        </div>
    )
}

const DivideContainer = ({ num, price, marginBottom }) => {
    return (
        <div style={{
            width: 440,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 8,
            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
            marginBottom: marginBottom,
            marginLeft: 20
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#010608",
                opacity: 0.6
            }}>{num}회 분할결제</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#010608"
            }}>
                <span style={{ fontSize: 16 }}>월 </span>
                {price} 원
            </div>
        </div>
    )
}

const MDivideContainer = ({ num, price, marginBottom }) => {
    return (
        <div style={{
            width: "90vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "2vw",
            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
            marginBottom: marginBottom,
            marginLeft: "5vw"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608",
                opacity: 0.6
            }}>{num}회 분할결제</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608"
            }}>
                <span style={{ fontSize: 14 }}>월 </span>
                {price} 원
            </div>
        </div>
    )
}

const InfoBox = ({ name, marginBottom, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: 440,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 20,
            paddingBottom: 16,
            marginBottom: marginBottom,
            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#010608"
            }}>{name}</div>
            <MdKeyboardArrowRight size={24} color="#010608" />
        </div>
    )
}

const MInfoBox = ({ name, marginBottom, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: "90vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "5vw",
            paddingBottom: "4vw",
            marginBottom: marginBottom,
            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608"
            }}>{name}</div>
            <MdKeyboardArrowRight size={18} color="#010608" />
        </div>
    )
}

const Delivery = ({ onClick }) => {
    return (
        <div style={{
            width: 440,
            paddingTop: 12,
            paddingBottom: 40,
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
        }}>
            <AiOutlineClose onClick={onClick} size={20} color="rgba(1, 6, 8, 0.4)" style={{ marginLeft: 12, cursor: "pointer" }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#010608",
                marginBottom: 16,
                width: 360,
                marginLeft: 40,
            }}>배송 및 반품, 교환안내</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608",
                opacity: 0.8,
                width: 360,
                marginLeft: 40,
            }}>
                배송정보 : 순차배송 <br /> <br />
                배송비 : 무료배송 <br /> <br />
                택배사 : 우체국 택배 <br /> <br />
                배송 안내  : 영업일 기준 오후 10시 이전 주문건은 당일 발송, 이후 주문건은 익일 발송 <br /> <br />
                교환, 반품 안내 : 배송완료 이후 7일 이내 가능(단순변심), 상품 불량의 경우 혹은 사이트내 안내된 내용과 다른경우 그 사실을 알게된 날로부터 30일 이내 환불 가능 <br /> <br />
                교환, 반품 비용 : 5,000원(단순변심), 상품 불량의 경우 판매자부담 <br /> <br />
                교환,반품 제한사항 : <br />
                ㆍ주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우<br />
                ㆍ상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가 훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)<br />
                ㆍ고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우<br />
                ㆍ세트상품 일부 사용, 구성품을 분실하였거나 취급 부주의로 인한 파손/고장/오염으로 재판매 불가한 경우<br />
                ㆍ모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 달라, 고객이 단순 변심으로 교환/반품을 무료로 요청하는 경우<br />
                ㆍ제조사의 사정 (신모델 출시 등) 및 부품 가격 변동 등에 의해 무료 교환/반품으로 요청하는 경우
            </div>
        </div>
    )
}

const MDelivery = ({ onClick }) => {
    return (
        <div style={{
            width: "90vw",
            paddingTop: "3vw",
            paddingBottom: "10vw",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
        }}>
            <AiOutlineClose onClick={onClick} size={16} color="rgba(1, 6, 8, 0.4)" style={{ marginLeft: 12, cursor: "pointer" }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",
                marginBottom: "4vw",
                width: "80vw",
                marginLeft: "10vw",
            }}>배송 및 반품, 교환안내</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#010608",
                opacity: 0.8,
                width: "80vw",
                marginLeft: "5vw",
            }}>
                배송정보 : 순차배송 <br /> <br />
                배송비 : 무료배송 <br /> <br />
                택배사 : 우체국 택배 <br /> <br />
                배송 안내  : 영업일 기준 오후 10시 이전 주문건은 당일 발송, 이후 주문건은 익일 발송 <br /> <br />
                교환, 반품 안내 : 배송완료 이후 7일 이내 가능(단순변심), 상품 불량의 경우 혹은 사이트내 안내된 내용과 다른경우 그 사실을 알게된 날로부터 30일 이내 환불 가능 <br /> <br />
                교환, 반품 비용 : 5,000원(단순변심), 상품 불량의 경우 판매자부담 <br /> <br />
                교환,반품 제한사항 : <br />
                ㆍ주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우<br />
                ㆍ상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가 훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)<br />
                ㆍ고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우<br />
                ㆍ세트상품 일부 사용, 구성품을 분실하였거나 취급 부주의로 인한 파손/고장/오염으로 재판매 불가한 경우<br />
                ㆍ모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 달라, 고객이 단순 변심으로 교환/반품을 무료로 요청하는 경우<br />
                ㆍ제조사의 사정 (신모델 출시 등) 및 부품 가격 변동 등에 의해 무료 교환/반품으로 요청하는 경우
            </div>
        </div>
    )
}

const Neccessary = ({ onClick }) => {
    return (
        <div style={{
            width: 440,
            paddingTop: 12,
            paddingBottom: 40,
            minHeight: 540,
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
        }}>
            <AiOutlineClose onClick={onClick} size={20} color="rgba(1, 6, 8, 0.4)" style={{ marginLeft: 12, cursor: "pointer" }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#010608",
                marginBottom: 16,
                width: 360,
                marginLeft: 40,
                marginTop: 8,
            }}>필수표기정보</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608",
                opacity: 0.8,
                width: 360,
                marginLeft: 40,
            }}>
               품명 및 모델명 : Apple 에어팟 프로 (MWP22KH/A) <br /><br />
               제품주요사양 : 노이즈 캔슬링/무선이어폰 <br /><br />
               크기, 무게 : 100*100*45mm(박스 포함), 250g(박스포함) <br /><br />
               출시년월 : 2019.11 <br /><br />
               제조국 : 중국 <br /><br />
               제조사/수입사 : 애플코리아 <br /><br />
               A/S 책임자와 전화번호 : Apple 고객센터 080-333-4000
            </div>
        </div>
    )
}

const NeccessaryIpad = ({ onClick }) => {
    return (
        <div style={{
            width: 440,
            paddingTop: 12,
            paddingBottom: 40,
            minHeight: 540,
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
        }}>
            <AiOutlineClose onClick={onClick} size={20} color="rgba(1, 6, 8, 0.4)" style={{ marginLeft: 12, cursor: "pointer" }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#010608",
                marginBottom: 16,
                width: 360,
                marginLeft: 40,
                marginTop: 8,
            }}>필수표기정보</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608",
                opacity: 0.8,
                width: 360,
                marginLeft: 40,
            }}>
               품명 및 모델명 : Apple 2020년 10.9-inch iPad Air Wi-Fi 64GB - Space Grey (MYFM2KH/A) <br /><br />
               제품주요사양 : 10.9-inch iPad Air Wi-Fi 64GB <br /><br />
               크기, 무게 : 259*189*50mm(박스 포함), 905g(박스포함) <br /><br />
               출시년월 : 알 수 없음(업체미제공) <br /><br />
               KC 인증 필 유뮤 : XU100755-20006 <br /><br />
               정격전압, 소비전력 : 100V ~ 240V AC, 알 수 없음(업체미제공) <br /><br />
               제조국 : 중국 <br /><br />
               제조사/수입사 : 애플코리아/알 수 없음(업체미제공) <br /><br />
               A/S 책임자와 전화번호 : Apple 고객센터 080-333-4000
            </div>
        </div>
    )
}

const MNeccessary = ({ onClick }) => {
    return (
        <div style={{
            width: "90vw",
            paddingTop: "3vw",
            paddingBottom: "10vw",
            minHeight: "120vw",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
        }}>
            <AiOutlineClose onClick={onClick} size={16} color="rgba(1, 6, 8, 0.4)" style={{ marginLeft: 12, cursor: "pointer" }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",
                marginBottom: "4vw",
                width: "80vw",
                marginLeft: "5vw",
                marginTop: "2vw"
            }}>필수표기정보</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#010608",
                opacity: 0.8,
                width: "80vw",
                marginLeft: "5vw",
            }}>
               품명 및 모델명 : Apple 에어팟 프로 (MWP22KH/A) <br /><br />
               제품주요사양 : 노이즈 캔슬링/무선이어폰 <br /><br />
               크기, 무게 : 100*100*45mm(박스 포함), 250g(박스포함) <br /><br />
               출시년월 : 2019.11 <br /><br />
               제조국 : 중국 <br /><br />
               제조사/수입사 : 애플코리아 <br /><br />
               A/S 책임자와 전화번호 : Apple 고객센터 080-333-4000
            </div>
        </div>
    )
}

const MNeccessaryIpad = ({ onClick }) => {
    return (
        <div style={{
            width: "90vw",
            paddingTop: "3vw",
            paddingBottom: "10vw",
            minHeight: "120vw",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
        }}>
            <AiOutlineClose onClick={onClick} size={16} color="rgba(1, 6, 8, 0.4)" style={{ marginLeft: 12, cursor: "pointer" }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",
                marginBottom: "4vw",
                width: "80vw",
                marginLeft: "5vw",
                marginTop: "2vw"
            }}>필수표기정보</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#010608",
                opacity: 0.8,
                width: "80vw",
                marginLeft: "5vw",
            }}>
               품명 및 모델명 : Apple 2020년 10.9-inch iPad Air Wi-Fi 64GB - Space Grey (MYFM2KH/A) <br /><br />
               제품주요사양 : 10.9-inch iPad Air Wi-Fi 64GB <br /><br />
               크기, 무게 : 259*189*50mm(박스 포함), 905g(박스포함) <br /><br />
               출시년월 : 알 수 없음(업체미제공) <br /><br />
               KC 인증 필 유뮤 : XU100755-20006 <br /><br />
               정격전압, 소비전력 : 100V ~ 240V AC, 알 수 없음(업체미제공) <br /><br />
               제조국 : 중국 <br /><br />
               제조사/수입사 : 애플코리아/알 수 없음(업체미제공) <br /><br />
               A/S 책임자와 전화번호 : Apple 고객센터 080-333-4000
            </div>
        </div>
    )
}