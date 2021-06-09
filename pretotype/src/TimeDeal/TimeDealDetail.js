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
import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function TimeDealDetail() {
    let history = useHistory()

    const [infoHide, setInfoHide] = useState(true)
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
                        <Header content="하울딜" goBack={true} />
                        <img alt="airpotone" src={airpotone} style={{
                            width: 480,
                        }} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginLeft: 20,
                            marginTop: 32,
                        }}>애플</div>
                        <div style={{
                            fontFamily: "AvenirNext",
                            fontSize: 18,
                            opacity: 0.8,
                            color: "#202426",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 8,
                            marginBottom: 28,
                        }}>Apple AirPods Pro 애플 에어팟 프로 1세대 무선충전형</div>
                        <DivideContainer num="2" price="130,000" marginBottom={20} />
                        <DivideContainer num="4" price="65,000" marginBottom={16} />
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
                            color: "#202426",
                            fontWeight: "bold",
                        }}>🔥 계좌이체를 통해 <span style={{ fontWeight: "normal" }}>간편하게 분할결제하세요!</span></div>
                        <div style={{
                            marginTop: 32,
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202426",
                            marginLeft: 20,
                            marginBottom: 32,
                        }}>상품정보</div>
                        <img alt="airpottwo" src={airpottwo} style={{ width: 440, marginLeft: 20 }} />
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
                            <img alt="airpotthree" src={airpotthree} style={{ width: 440, marginLeft: 20, marginBottom: 32, height: "auto" }} />
                        }
                        <div style={{ width: 440, height: 1, backgroundColor: "rgba(5, 26, 26, 0.2)", alignSelf: "center", marginBottom: 32 }} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202426",
                            marginLeft: 20,
                            marginBottom: 16,
                        }}>리뷰(예시)</div>
                        <div style={{
                            width: 440,
                            marginLeft: 20,
                            paddingBottom: 16,
                            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
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
                                    color: "#051a1a",
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
                                            color: "#202426",
                                        }}>하울 홀릭</div>
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
                                            color: "#051a1a",
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
                                color: "#202426",
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
                                color: "#202426",
                                opacity: 0.8,
                                marginBottom: 8,
                                lineHeight: 1.5
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 12,
                                opacity: 0.6,
                                color: "#202426"
                            }}>2021.03.30</div>
                        </div>
                        <InfoBox name="필수 표기 정보" marginBottom={16} />
                        <InfoBox name="배송 및 반품, 교환안내" marginBottom={16} />
                        <InfoBox name="자주 묻는 질문" marginBottom={0} />
                        <BottomTag marginTop={100} marginBottom={0} />
                        <div id="hauldeal_click" onClick={() => history.push("/ordersheet", { param: ["airpod", 4, "", "white", 1, "", 4, ""], addInfo: "", url: "", image: "airpodone" })} style={{
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
                    <MHeader content="하울딜" goBack={true} />
                    <img alt="airpotone" src={airpotone} style={{
                        width: "100vw",
                    }} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#202426",
                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>애플</div>
                    <div style={{
                        fontFamily: "AvenirNext",
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#202426",
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
                        color: "#202426",
                        fontWeight: "bold",
                    }}>🔥 계좌이체를 통해 <span style={{ fontWeight: "normal" }}>간편하게 분할결제하세요!</span></div>
                    <div style={{
                        marginTop: "8vw",
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        marginLeft: "5vw",
                        marginBottom: "8vw",
                    }}>상품정보</div>
                    <img alt="airpottwo" src={airpottwo} style={{ width: "90vw", marginLeft: "5vw" }} />
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
                        <img alt="airpotthree" src={airpotthree} style={{ width: "90vw", marginLeft: "5vw", marginBottom: "8vw", height: "auto" }} />
                    }
                    <div style={{ width: "90vw", height: 1, backgroundColor: "rgba(5, 26, 26, 0.2)", alignSelf: "center", marginBottom: "8vw" }} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        marginLeft: "5vw",
                        marginBottom: "4vw",
                    }}>리뷰(예시)</div>
                    <div style={{
                        width: "90vw",
                        marginLeft: "5vw",
                        paddingBottom: "4vw",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
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
                                color: "#051a1a",
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
                                        color: "#202426",
                                    }}>하울 홀릭</div>
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
                                        color: "#051a1a",
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
                            color: "#202426",
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
                            color: "#202426",
                            opacity: 0.8,
                            marginBottom: "2vw",
                            lineHeight: 1.5
                        }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 10,
                            opacity: 0.6,
                            color: "#202426"
                        }}>2021.03.30</div>
                    </div>
                    <MInfoBox name="필수 표기 정보" marginBottom={"4vw"} />
                    <MInfoBox name="배송 및 반품, 교환안내" marginBottom={"4vw"} />
                    <MInfoBox name="자주 묻는 질문" marginBottom={0} />
                    <MBottomTag marginTop={"25vw"} marginBottom={0} />
                    <div id="hauldeal_click" onClick={() => history.push("/ordersheet", { param: ["", 4, "", "white", 1, "", 4, ""], addInfo: "", url: "", image: "airpodone" })} style={{
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
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            marginBottom: marginBottom,
            marginLeft: 20
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#202426",
                opacity: 0.6
            }}>{num}회 분할결제</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#051a1a"
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
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            marginBottom: marginBottom,
            marginLeft: "5vw"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#202426",
                opacity: 0.6
            }}>{num}회 분할결제</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#051a1a"
            }}>
                <span style={{ fontSize: 14 }}>월 </span>
                {price} 원
            </div>
        </div>
    )
}

const InfoBox = ({ name, marginBottom }) => {
    return (
        <div style={{
            width: 440,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 20,
            paddingBottom: 16,
            marginBottom: marginBottom,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#202426"
            }}>{name}</div>
            <MdKeyboardArrowRight size={24} color="#051a1a" />
        </div>
    )
}

const MInfoBox = ({ name, marginBottom }) => {
    return (
        <div style={{
            width: "90vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "5vw",
            paddingBottom: "4vw",
            marginBottom: marginBottom,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#202426"
            }}>{name}</div>
            <MdKeyboardArrowRight size={18} color="#051a1a" />
        </div>
    )
}