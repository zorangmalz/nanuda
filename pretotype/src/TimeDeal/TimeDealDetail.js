import React, { useState } from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import { BottomTag, Header, MBottomTag, MHeader, MStandardButton } from "../Style";
import { useHistory } from "react-router";
import airpotone from "../images/airpotone.png"
import airpottwo from "../images/airpottwo.png"
import airpotthree from "../images/airpotthree.png"
import profile from "../images/profile.png"
import reviewexample from "../images/reviewexample.png"
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import queryString from "query-string"
import ipadlogo from "../images/ipadlogo.png"
import ipadshort from "../images/ipadshort.png"
import ipadlong from "../images/ipadlong.png"

export default function TimeDealDetail({ location }) {
    let history = useHistory()

    const query = queryString.parse(location.search)
    console.log(query)

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
                        <Header content="νμΈλ" goBack={true} />
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
                        }}>μ ν</div>
                        <div style={{
                            fontFamily: "AvenirNext",
                            fontSize: 18,
                            opacity: 0.8,
                            color: "#010608",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 8,
                            marginBottom: 28,
                        }}>{query.product === "airpod" ? "Apple AirPods Pro μ ν μμ΄ν νλ‘ 1μΈλ λ¬΄μ μΆ©μ ν" : `Apple iPad Air 4μΈλ (MYFM2KH/A), ${<br />} Wi-Fi, 64GB, μ€νμ΄μ€κ·Έλ μ΄`}</div>
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
                        }}>π₯ κ³μ’μ΄μ²΄λ₯Ό ν΅ν΄ <span style={{ fontWeight: "normal" }}>κ°νΈνκ² λΆν κ²°μ νμΈμ!</span></div>
                        <div style={{
                            marginTop: 32,
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 20,
                            marginBottom: 32,
                        }}>μνμ λ³΄</div>
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
                            }}>μνμ λ³΄ λλ³΄κΈ°</div>
                            :
                            <img alt="airpotthree" src={query.product === "airpod" ? airpotthree : ipadlong} style={{ width: 440, marginLeft: 20, marginBottom: 32, height: "auto" }} />
                        }
                        <div style={{ width: 440, height: 1, backgroundColor: "rgba(1, 6, 8, 0.2)", alignSelf: "center", marginBottom: 32 }} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 20,
                            marginBottom: 16,
                        }}>λ¦¬λ·°(μμ)</div>
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
                                        }}>νμΈ νλ¦­</div>
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
                            }}>μ’μμ΄μ!</div>
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
                            }}>λ³λ‘μμ΄μ.</div>
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
                        </div>
                        <InfoBox onClick={() => setNeccInfo(true)} name="νμ νκΈ° μ λ³΄" marginBottom={16} />
                        <InfoBox onClick={() => setInfoShow(true)} name="λ°°μ‘ λ° λ°ν, κ΅νμλ΄" marginBottom={16} />
                        <InfoBox name="μμ£Ό λ¬»λ μ§λ¬Έ" marginBottom={0} />
                        <BottomTag marginTop={100} marginBottom={0} />
                        <div id="hauldeal_click" onClick={() => history.push("/ordersheet", { param: [query.product ? "airpod" : "ipad", 4, "", "white", 1, "", 4, ""], addInfo: "", url: "", image: query.product === "airpod" ? "airpodone" : "ipad" })} style={{
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
                        }}>κ΅¬λ§€νκΈ°</div>
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
                    <MHeader content="νμΈλ" goBack={true} />
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
                    }}>μ ν</div>
                    <div style={{
                        fontFamily: "AvenirNext",
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#010608",
                        marginLeft: "5vw",
                        marginRight: "5vw",
                        marginTop: "2vw",
                        marginBottom: "7vw",
                    }}>Apple AirPods Pro μ ν μμ΄ν νλ‘ 1μΈλ λ¬΄μ μΆ©μ ν</div>
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
                    }}>π₯ κ³μ’μ΄μ²΄λ₯Ό ν΅ν΄ <span style={{ fontWeight: "normal" }}>κ°νΈνκ² λΆν κ²°μ νμΈμ!</span></div>
                    <div style={{
                        marginTop: "8vw",
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginLeft: "5vw",
                        marginBottom: "8vw",
                    }}>μνμ λ³΄</div>
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
                        }}>μνμ λ³΄ λλ³΄κΈ°</div>
                        :
                        <img alt="airpotthree" src={query.product === "airpod" ? airpotthree : ipadlong} style={{ width: "90vw", marginLeft: "5vw", marginBottom: "8vw", height: "auto" }} />
                    }
                    <div style={{ width: "90vw", height: 1, backgroundColor: "rgba(1, 6, 8, 0.2)", alignSelf: "center", marginBottom: "8vw" }} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginLeft: "5vw",
                        marginBottom: "4vw",
                    }}>λ¦¬λ·°(μμ)</div>
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
                                    }}>νμΈ νλ¦­</div>
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
                        }}>μ’μμ΄μ!</div>
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
                        }}>λ³λ‘μμ΄μ.</div>
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
                    </div>
                    <MInfoBox onClick={() => setNeccInfo(true)} name="νμ νκΈ° μ λ³΄" marginBottom={"4vw"} />
                    <MInfoBox onClick={() => setInfoShow(true)} name="λ°°μ‘ λ° λ°ν, κ΅νμλ΄" marginBottom={"4vw"} />
                    <MInfoBox name="μμ£Ό λ¬»λ μ§λ¬Έ" marginBottom={0} />
                    <MBottomTag marginTop={"25vw"} marginBottom={0} />
                    <div id="hauldeal_click" onClick={() => history.push("/ordersheet", { param: ["", 4, "", "white", 1, "", 4, ""], addInfo: "", url: "", image: query.product === "airpod" ? "airpodone" : "ipad" })} style={{
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
                    }}>κ΅¬λ§€νκΈ°</div>
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
            }}>{num}ν λΆν κ²°μ </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#010608"
            }}>
                <span style={{ fontSize: 16 }}>μ </span>
                {price} μ
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
            }}>{num}ν λΆν κ²°μ </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608"
            }}>
                <span style={{ fontSize: 14 }}>μ </span>
                {price} μ
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
            }}>λ°°μ‘ λ° λ°ν, κ΅νμλ΄</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608",
                opacity: 0.8,
                width: 360,
                marginLeft: 40,
            }}>
                λ°°μ‘μ λ³΄ : μμ°¨λ°°μ‘ <br /> <br />
                λ°°μ‘λΉ : λ¬΄λ£λ°°μ‘ <br /> <br />
                νλ°°μ¬ : μ°μ²΄κ΅­ νλ°° <br /> <br />
                λ°°μ‘ μλ΄  : μμμΌ κΈ°μ€ μ€ν 10μ μ΄μ  μ£Όλ¬Έκ±΄μ λΉμΌ λ°μ‘, μ΄ν μ£Όλ¬Έκ±΄μ μ΅μΌ λ°μ‘ <br /> <br />
                κ΅ν, λ°ν μλ΄ : λ°°μ‘μλ£ μ΄ν 7μΌ μ΄λ΄ κ°λ₯(λ¨μλ³μ¬), μν λΆλμ κ²½μ° νΉμ μ¬μ΄νΈλ΄ μλ΄λ λ΄μ©κ³Ό λ€λ₯Έκ²½μ° κ·Έ μ¬μ€μ μκ²λ λ λ‘λΆν° 30μΌ μ΄λ΄ νλΆ κ°λ₯ <br /> <br />
                κ΅ν, λ°ν λΉμ© : 5,000μ(λ¨μλ³μ¬), μν λΆλμ κ²½μ° νλ§€μλΆλ΄ <br /> <br />
                κ΅ν,λ°ν μ νμ¬ν­ : <br />
                γμ£Όλ¬Έ/μ μ μνμ κ²½μ°, μνμ μ μμ΄ μ΄λ―Έ μ§νλ κ²½μ°<br />
                γμν ν¬μ₯μ κ°λ΄νμ¬ μ¬μ© λλ μ€μΉ μλ£λμ΄ μνμ κ°μΉκ° νΌμλ κ²½μ° (λ¨, λ΄μ© νμΈμ μν ν¬μ₯ κ°λ΄μ κ²½μ°λ μμΈ)<br />
                γκ³ κ°μ μ¬μ©, μκ°κ²½κ³Ό, μΌλΆ μλΉμ μνμ¬ μνμ κ°μΉκ° νμ ν κ°μν κ²½μ°<br />
                γμΈνΈμν μΌλΆ μ¬μ©, κ΅¬μ±νμ λΆμ€νμκ±°λ μ·¨κΈ λΆμ£Όμλ‘ μΈν νμ/κ³ μ₯/μ€μΌμΌλ‘ μ¬νλ§€ λΆκ°ν κ²½μ°<br />
                γλͺ¨λν° ν΄μλμ μ°¨μ΄λ‘ μΈν΄ μμμ΄λ μ΄λ―Έμ§κ° μ€μ μ λ¬λΌ, κ³ κ°μ΄ λ¨μ λ³μ¬μΌλ‘ κ΅ν/λ°νμ λ¬΄λ£λ‘ μμ²­νλ κ²½μ°<br />
                γμ μ‘°μ¬μ μ¬μ  (μ λͺ¨λΈ μΆμ λ±) λ° λΆν κ°κ²© λ³λ λ±μ μν΄ λ¬΄λ£ κ΅ν/λ°νμΌλ‘ μμ²­νλ κ²½μ°
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
            }}>λ°°μ‘ λ° λ°ν, κ΅νμλ΄</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#010608",
                opacity: 0.8,
                width: "80vw",
                marginLeft: "5vw",
            }}>
                λ°°μ‘μ λ³΄ : μμ°¨λ°°μ‘ <br /> <br />
                λ°°μ‘λΉ : λ¬΄λ£λ°°μ‘ <br /> <br />
                νλ°°μ¬ : μ°μ²΄κ΅­ νλ°° <br /> <br />
                λ°°μ‘ μλ΄  : μμμΌ κΈ°μ€ μ€ν 10μ μ΄μ  μ£Όλ¬Έκ±΄μ λΉμΌ λ°μ‘, μ΄ν μ£Όλ¬Έκ±΄μ μ΅μΌ λ°μ‘ <br /> <br />
                κ΅ν, λ°ν μλ΄ : λ°°μ‘μλ£ μ΄ν 7μΌ μ΄λ΄ κ°λ₯(λ¨μλ³μ¬), μν λΆλμ κ²½μ° νΉμ μ¬μ΄νΈλ΄ μλ΄λ λ΄μ©κ³Ό λ€λ₯Έκ²½μ° κ·Έ μ¬μ€μ μκ²λ λ λ‘λΆν° 30μΌ μ΄λ΄ νλΆ κ°λ₯ <br /> <br />
                κ΅ν, λ°ν λΉμ© : 5,000μ(λ¨μλ³μ¬), μν λΆλμ κ²½μ° νλ§€μλΆλ΄ <br /> <br />
                κ΅ν,λ°ν μ νμ¬ν­ : <br />
                γμ£Όλ¬Έ/μ μ μνμ κ²½μ°, μνμ μ μμ΄ μ΄λ―Έ μ§νλ κ²½μ°<br />
                γμν ν¬μ₯μ κ°λ΄νμ¬ μ¬μ© λλ μ€μΉ μλ£λμ΄ μνμ κ°μΉκ° νΌμλ κ²½μ° (λ¨, λ΄μ© νμΈμ μν ν¬μ₯ κ°λ΄μ κ²½μ°λ μμΈ)<br />
                γκ³ κ°μ μ¬μ©, μκ°κ²½κ³Ό, μΌλΆ μλΉμ μνμ¬ μνμ κ°μΉκ° νμ ν κ°μν κ²½μ°<br />
                γμΈνΈμν μΌλΆ μ¬μ©, κ΅¬μ±νμ λΆμ€νμκ±°λ μ·¨κΈ λΆμ£Όμλ‘ μΈν νμ/κ³ μ₯/μ€μΌμΌλ‘ μ¬νλ§€ λΆκ°ν κ²½μ°<br />
                γλͺ¨λν° ν΄μλμ μ°¨μ΄λ‘ μΈν΄ μμμ΄λ μ΄λ―Έμ§κ° μ€μ μ λ¬λΌ, κ³ κ°μ΄ λ¨μ λ³μ¬μΌλ‘ κ΅ν/λ°νμ λ¬΄λ£λ‘ μμ²­νλ κ²½μ°<br />
                γμ μ‘°μ¬μ μ¬μ  (μ λͺ¨λΈ μΆμ λ±) λ° λΆν κ°κ²© λ³λ λ±μ μν΄ λ¬΄λ£ κ΅ν/λ°νμΌλ‘ μμ²­νλ κ²½μ°
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
            }}>νμνκΈ°μ λ³΄</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608",
                opacity: 0.8,
                width: 360,
                marginLeft: 40,
            }}>
               νλͺ λ° λͺ¨λΈλͺ : Apple μμ΄ν νλ‘ (MWP22KH/A) <br /><br />
               μ νμ£Όμμ¬μ : λΈμ΄μ¦ μΊμ¬λ§/λ¬΄μ μ΄μ΄ν° <br /><br />
               ν¬κΈ°, λ¬΄κ² : 100*100*45mm(λ°μ€ ν¬ν¨), 250g(λ°μ€ν¬ν¨) <br /><br />
               μΆμλμ : 2019.11 <br /><br />
               μ μ‘°κ΅­ : μ€κ΅­ <br /><br />
               μ μ‘°μ¬/μμμ¬ : μ νμ½λ¦¬μ <br /><br />
               A/S μ±μμμ μ νλ²νΈ : Apple κ³ κ°μΌν° 080-333-4000
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
            }}>νμνκΈ°μ λ³΄</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#010608",
                opacity: 0.8,
                width: 360,
                marginLeft: 40,
            }}>
               νλͺ λ° λͺ¨λΈλͺ : Apple 2020λ 10.9-inch iPad Air Wi-Fi 64GB - Space Grey (MYFM2KH/A) <br /><br />
               μ νμ£Όμμ¬μ : 10.9-inch iPad Air Wi-Fi 64GB <br /><br />
               ν¬κΈ°, λ¬΄κ² : 259*189*50mm(λ°μ€ ν¬ν¨), 905g(λ°μ€ν¬ν¨) <br /><br />
               μΆμλμ : μ μ μμ(μμ²΄λ―Έμ κ³΅) <br /><br />
               KC μΈμ¦ ν μ λ?€ : XU100755-20006 <br /><br />
               μ κ²©μ μ, μλΉμ λ ₯ : 100V ~ 240V AC, μ μ μμ(μμ²΄λ―Έμ κ³΅) <br /><br />
               μ μ‘°κ΅­ : μ€κ΅­ <br /><br />
               μ μ‘°μ¬/μμμ¬ : μ νμ½λ¦¬μ/μ μ μμ(μμ²΄λ―Έμ κ³΅) <br /><br />
               A/S μ±μμμ μ νλ²νΈ : Apple κ³ κ°μΌν° 080-333-4000
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
            }}>νμνκΈ°μ λ³΄</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#010608",
                opacity: 0.8,
                width: "80vw",
                marginLeft: "5vw",
            }}>
               νλͺ λ° λͺ¨λΈλͺ : Apple μμ΄ν νλ‘ (MWP22KH/A) <br /><br />
               μ νμ£Όμμ¬μ : λΈμ΄μ¦ μΊμ¬λ§/λ¬΄μ μ΄μ΄ν° <br /><br />
               ν¬κΈ°, λ¬΄κ² : 100*100*45mm(λ°μ€ ν¬ν¨), 250g(λ°μ€ν¬ν¨) <br /><br />
               μΆμλμ : 2019.11 <br /><br />
               μ μ‘°κ΅­ : μ€κ΅­ <br /><br />
               μ μ‘°μ¬/μμμ¬ : μ νμ½λ¦¬μ <br /><br />
               A/S μ±μμμ μ νλ²νΈ : Apple κ³ κ°μΌν° 080-333-4000
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
            }}>νμνκΈ°μ λ³΄</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#010608",
                opacity: 0.8,
                width: "80vw",
                marginLeft: "5vw",
            }}>
               νλͺ λ° λͺ¨λΈλͺ : Apple 2020λ 10.9-inch iPad Air Wi-Fi 64GB - Space Grey (MYFM2KH/A) <br /><br />
               μ νμ£Όμμ¬μ : 10.9-inch iPad Air Wi-Fi 64GB <br /><br />
               ν¬κΈ°, λ¬΄κ² : 259*189*50mm(λ°μ€ ν¬ν¨), 905g(λ°μ€ν¬ν¨) <br /><br />
               μΆμλμ : μ μ μμ(μμ²΄λ―Έμ κ³΅) <br /><br />
               KC μΈμ¦ ν μ λ?€ : XU100755-20006 <br /><br />
               μ κ²©μ μ, μλΉμ λ ₯ : 100V ~ 240V AC, μ μ μμ(μμ²΄λ―Έμ κ³΅) <br /><br />
               μ μ‘°κ΅­ : μ€κ΅­ <br /><br />
               μ μ‘°μ¬/μμμ¬ : μ νμ½λ¦¬μ/μ μ μμ(μμ²΄λ―Έμ κ³΅) <br /><br />
               A/S μ±μμμ μ νλ²νΈ : Apple κ³ κ°μΌν° 080-333-4000
            </div>
        </div>
    )
}