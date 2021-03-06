import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import { BannerContainer, HomeBottomTag, HomeHeader, MBannerContainer, MHomeBottomTag, MHomeHeader } from "../Style";
import { BsUpload } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { useHistory } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import smallbanner from "../images/smallbanner.png";
import smallbannertwo from "../images/smallbannertwo.png"
import sampleone from "../images/sampleone.png"
import sampletwo from "../images/sampletwo.png"
import profile from "../images/profile.png"
import { firestore } from "../firebase"
import banner from "../images/homebanner.png"
import Slider from "react-slick"
import bannerOne from "../images/bannerOne.png"
import bannerTwo from "../images/bannerTwo.png"

const AfterContainer = styled.div`
    width: 424px;
    margin-left: 20px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MAfterContainer = styled.div`
    width: 86vw;
    margin-left: 5vw;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 4vw;
    padding-bottom: 4vw;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
`;
const MainContainer = styled.div`
    width: 424px;
    margin-left: 20px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MMainContainer = styled.div`
    width: 86vw;
    margin-left: 5vw;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 4vw;
    padding-bottom: 4vw;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
`;
export default function Home() {
    let history = useHistory()

    //Get After Review Data
    const [review, setReview] = useState([
        {
            user_profile: profile,
            user_nickname: "???*???",
            review_image: sampletwo,
            review_score: "5.0",
            review_like: "?????? ????????? ????????? ????????? ??????????????? ????????????. ?????? BNPL??? ???????????? ??????",
            product_price: "439,000",
        },
        {
            user_profile: profile,
            user_nickname: "???*???",
            review_image: sampleone,
            review_score: "4.0",
            review_like: "????????? ???????????? ????????????. ????????? ??????????????? ????????????.",
            product_price: "120,000",
        }
    ])

    useEffect(() => {
        firestore.collection("test").doc("test").get().then((doc) => {
            //console.log(doc.data().read)
        })
    }, [])
    const [modal, setModal] = useState(false)

    const [wishButton, setWishButton] = useState(0)
    const buttonRef = useRef(0)

    const [bottomPosition, setBottomPosition] = useState(0)
    const bottomRef = useRef(0)

    const [hide, setHide] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setBottomPosition(bottomRef.current.getBoundingClientRect().top)
            setWishButton(buttonRef.current.getBoundingClientRect().top)
            if (bottomPosition < wishButton) {
                setHide(true)
            } else {
                setHide(false)
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [wishButton, bottomPosition])
    
    const [enc,setEnc]=useState("")
    const [sign,setSign]=useState(false)
    function getInfo(){
        fetch("http://localhost:3002/checkplus_main", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
        
            .then(res => {
              console.log(res)
              setEnc(res.sEncData)
              setSign(true)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getInfo()
    },[])
    function fnPopup(){
        console.log(enc)
		window.open('', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
        try{
            document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
            document.form_chk.target = "popupChk";
            document.form_chk.submit();
        }catch(err){
            console.log(err)
        }
        
	}
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
                    {sign? 
                    	<form name="form_chk" method="post">
                        <input type="hidden" name="m" value="checkplusService"/>
                        <input type="hidden" name="EncodeData" value={enc}/>	
                        <input type ="hidden" name="recvMethodType" value ="get"/>
                        <div onClick={fnPopup}> CheckPlus ?????????????????? Click</div>
                    </form>
                    : 
                    <div></div>
                    }
                    
                    {modal ?
                        <div style={{
                            width: "100vw",
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            position: "fixed",
                            top: 0,
                            zIndex: 3,
                        }}>
                            <div style={{
                                width: 300,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                borderRadius: 6,
                                backgroundColor: "#ffffff"
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    marginTop: 16,
                                    marginBottom: 16
                                }}>?????? ??????????????????.</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    color: "#051a1a",
                                    marginBottom: 16,
                                    textAlign: "center"
                                }}>???????????? ?????? ????????? ??? ????????????. <br />
                                ?????? ???????????? ??????????????? ???????????????.</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <div onClick={() => setModal(false)} style={{
                                        width: 150,
                                        fontFamily: "NotoSansCJKkr",
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        backgroundColor: "#f2f3f8",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        borderBottomLeftRadius: 6,
                                        color: "rgba(5, 26, 26, 0.6)",
                                        fontSize: 14,
                                    }}>??????</div>
                                    <div id="wishdeal_click" onClick={() => history.push("/wishdealdefault")} style={{
                                        width: 150,
                                        fontFamily: "NotoSansCJKkr",
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        backgroundColor: "#26c1f0",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        borderBottomRightRadius: 6,
                                        fontWeight: "bold",
                                        color: "#ffffff",
                                        fontSize: 14,
                                    }}>????????? ????????????</div>
                                </div>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <HomeHeader />
                        <div style={{
                            width: 480,
                            height: 48,
                            backgroundColor: "#051a1a"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    color: "#ffffff",
                                    marginTop: 12,
                                    marginLeft: 69
                                }}>???????????? ??????????????????????</div>
                                <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                    <div style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        color: "#ffffff",
                                        marginTop: 12,
                                        textDecorationLine: "underline",
                                        fontWeight: "bold"
                                    }}>??? ?????? ????????? 50% ??????</div>
                                </a>
                            </div>
                        </div>
                        <div style={{
                            width: 480,
                            height: 300,
                            marginBottom: 16,
                        }}>
                            <Slider dots={false} arrows={false} autoplaySpeed={3000} autoplay={true} >
                                <div>
                                    <img alt="bannerOne" src={bannerOne} onClick={() => window.open('https://www.notion.so/haulfree/HaulFree-6a3f1f7d342d493193ac59d4319c2100', '_blank')} style={{
                                        width: 480,
                                        cursor: "pointer",
                                    }} />
                                </div>
                                <div>
                                    <img src={bannerTwo} alt="bannerTwo" onClick={() => window.open('https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934', '_blank')} style={{
                                        width: 480,
                                        cursor: "pointer",
                                    }} />
                                </div>
                            </Slider>
                        </div>
                        <BannerContainer>
                            <div id="wishdeal_click" onClick={() => history.push("wishdealdefault")}>
                                <img style={{ marginRight: 16, cursor: "pointer" }} src={smallbanner} alt="????????????" /></div>
                            <a href={"https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"} target="_blank" style={{
                                textDecorationLine: "none",
                                WebkitAppearance: "none"
                            }}><img style={{ marginRight: 16 }} src={smallbannertwo} alt="????????????" /></a>
                        </BannerContainer>
                        <div onClick={() => setModal(true)} style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 32,
                            marginLeft: 20,
                        }}>
                            <div style={{
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426",
                                marginRight: 4,
                            }}>????????? ???????????? ?????? ?????????????????? ????</div>
                            <MdKeyboardArrowRight
                                size={24}
                                color="rgba(5, 26, 26, 0.6)"
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                        <div style={{
                            fontSizeAdjust: 16,
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            color: "#202426",

                            marginTop: 4,
                            marginLeft: 20,
                            marginBottom: 16,
                        }}>????????????, ????????? ???????????? ????????????????????????!</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 20,
                            marginRight: 20,
                            width: 440,
                            alignItems: "flex-start",
                            justifyContent: "space-between"
                        }}>
                            <div onClick={() => history.push('/timedeal?product=airpod')} style={{ cursor: "pointer" }}>
                                <TimeShop
                                    id="display_click"
                                    img={sampleone}
                                    title="??????"
                                    sub="Apple AirPods Pro ?????? ????????? ?????? ???????????????"
                                    twoPrice="130,000"
                                    fourPrice="65,000"
                                    stock={0}
                                    sale={27}
                                />
                            </div>
                            <div onClick={() => history.push('/timedeal?product=ipad')} style={{ cursor: "pointer" }}>
                                <TimeShop
                                    id=""
                                    img={sampletwo}
                                    title="??????"
                                    sub="Apple iPad Air Sky Blue
                                10.9??? iPad Air Wi-Fi ????????? ??????"
                                    twoPrice="360,750"
                                    fourPrice="180,375"
                                    stock={0}
                                    sale={5}
                                />
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 32,
                            marginLeft: 20,
                        }}>
                            <div style={{
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426",
                                marginRight: 4,
                            }}>????????? ?????????</div>
                            <MdKeyboardArrowRight
                                size={24}
                                color="rgba(5, 26, 26, 0.6)"
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                        <div style={{
                            fontSizeAdjust: 16,
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            color: "#202426",

                            marginTop: 4,
                            marginLeft: 20,
                            marginBottom: 16,
                        }}>?????? ???????????? ????????? ??????????</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            width: 440,
                            alignSelf: "center",
                            overflow: "hidden"
                        }}>
                            {review.map(item =>
                                <div style={{
                                    cursor: "pointer",
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}>
                                        <img alt="?????????" src={item.user_profile} style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                        }} />
                                        <div style={{
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            marginLeft: 8,
                                            marginTop: 6
                                        }}>{item.user_nickname} </div>
                                    </div>
                                    <div style={{
                                        minWidth: 210,
                                        minHeight: 160,
                                        borderRadius: 6,
                                        marginTop: 8,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <img alt="????????????" src={item.review_image} style={{
                                            width: 210,
                                            height: 160,
                                            borderRadius: 6,
                                            objectFit: "cover",
                                        }} />
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        marginTop: 8,
                                    }}>
                                        <AiFillStar size={16} color="#fad94f" />
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            color: "#051a1a",
                                            marginLeft: 4,
                                        }}>{item.review_score}</div>
                                    </div>
                                    <div style={{
                                        fontSize: 14,
                                        opacity: 0.8,
                                        marginTop: 8,
                                        width: 210,
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.review_like}</div>
                                    <div style={{
                                        color: "#26c1f0",
                                        marginTop: 4,
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.product_price}?????? ?????? ??????</div>
                                </div>
                            )}
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 32,
                            marginLeft: 20,
                        }}>
                            <div style={{
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426",
                                marginRight: 4,
                            }}>???????????? ????????????</div>
                            <MdKeyboardArrowRight
                                size={24}
                                color="rgba(5, 26, 26, 0.6)"
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                        <div style={{
                            fontSize: 16,
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            color: "#202426",
                            marginLeft: 20,
                            marginTop: 4,
                        }}>????????? ???????????? ????????? ???????????????????</div>
                        <AfterContainer>
                            <Review
                                item={{
                                    content: "????????? ?????? ????????? ??????????????? ????????? ??? ????????? ?????? ????????????????????????.. ?????? ???????????? ????????? ???????????? ????????? ???????????? ?????? ?????????!!",
                                }}
                            />
                            <Review
                                item={{
                                    content: "???????????? ?????????????????? ????????? ??????????????? ?????????;;; ???????????? ????????????????????? ????????????, ????????? ?????????????????? ???????????????!!",
                                }}
                            />
                        </AfterContainer>
                        <div style={{ marginTop: 64, marginLeft: 20, width: 440, height: 160, backgroundImage: `url(${banner})`, backgroundSize: "cover", borderRadius: 6, }}>
                            <div style={{ marginLeft: 20, marginTop: 20, fontSize: 21, color: "#ffffff", fontWeight: "bold" }}>???????????? ??????????????????????</div>
                            <div style={{ marginLeft: 20, marginTop: 8, fontSize: 16, color: "#ffffff" }}>??????????????? ?????? ???????????? ???????????? ??????????????????.</div>
                            <div style={{ marginLeft: 24, marginTop: 8, backgroundColor: "#051a1a", width: 240, height: 48, borderRadius: 6 }}>
                                <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                    <div style={{ textDecorationLine: "none", padding: 15, marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>??? ?????? ????????? 50% ??????!</div>
                                </a>
                            </div>
                        </div>
                        <HomeBottomTag marginTop={200} marginBottom={0} bottomRef={bottomRef} />
                        <div id="wishdeal_click" ref={buttonRef} onClick={hide ? () => { } : () => history.push("/wishdealdefault")} style={{
                            width: 440,
                            marginLeft: 20,
                            marginRight: 20,
                            paddingTop: 21,
                            paddingBottom: 21,
                            textAlign: "center",
                            backgroundColor: hide ? "rgba(0, 0, 0, 0)" : "#26c1f0",
                            boxShadow: hide ? "0 0px 0px 0 rgba(0, 0, 0, 0)" : "0 4px 20px 0 rgba(0, 0, 0, 0.14)",
                            borderRadius: 6,

                            fontSize: 21,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            color: hide ? "rgba(0, 0, 0, 0)" : "#ffffff",
                            cursor: hide ? "none" : "pointer",
                            position: "fixed",
                            bottom: 40,
                        }}>{hide ? "" : "????????? ????????????"}</div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    {modal ?
                        <div style={{
                            width: "100vw",
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            position: "fixed",
                            top: 0,
                            zIndex: 3,
                        }}>
                            <div style={{
                                width: 300,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                borderRadius: 6,
                                backgroundColor: "#ffffff"
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    marginTop: 16,
                                    marginBottom: 16
                                }}>?????? ??????????????????.</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    color: "#051a1a",
                                    marginBottom: 16,
                                    textAlign: "center"
                                }}>???????????? ?????? ????????? ??? ????????????. <br />
                                ?????? ???????????? ??????????????? ???????????????.</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <div onClick={() => setModal(false)} style={{
                                        width: 150,
                                        fontFamily: "NotoSansCJKkr",
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        backgroundColor: "#f2f3f8",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        borderBottomLeftRadius: 6,
                                        color: "rgba(5, 26, 26, 0.6)",
                                        fontSize: 14,
                                    }}>??????</div>
                                    <div id="wishdeal_click" onClick={() => history.push("/wishdealdefault")} style={{
                                        width: 150,
                                        fontFamily: "NotoSansCJKkr",
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        backgroundColor: "#26c1f0",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        borderBottomRightRadius: 6,
                                        fontWeight: "bold",
                                        color: "#ffffff",
                                        fontSize: 14,
                                    }}>????????? ????????????</div>
                                </div>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    <MHomeHeader />
                    <div style={{
                        width: "100%",
                        height: 48,
                        backgroundColor: "#051a1a"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",

                        }}>
                            <div style={{
                                fontSize: 14,
                                color: "#ffffff",
                                marginTop: 12,
                                marginLeft: 50
                            }}>
                                ???????????? ??????????????????????
                            </div>
                            <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                <div style={{
                                    marginLeft: 5,
                                    fontSize: 14,
                                    color: "#ffffff",
                                    marginTop: 12,
                                    textDecorationLine: "underline",
                                    fontWeight: "bold"
                                }}>
                                    ??? ?????? ????????? 50% ??????
                            </div>
                            </a>
                        </div>
                    </div>
                    <div style={{ width: "100vw", marginBottom: "3vw" }}>
                        <Slider dots={false} arrows={false} autoplaySpeed={3000} autoplay={true} >
                            <div>
                                <img alt="bannerOne" src={bannerOne} onClick={() => window.open('https://www.notion.so/haulfree/HaulFree-6a3f1f7d342d493193ac59d4319c2100', '_blank')} style={{
                                    width: "100vw",
                                    cursor: "pointer",
                                }} />
                            </div>
                            <div>
                                <img src={bannerTwo} alt="bannerTwo" onClick={() => window.open('https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934', '_blank')} style={{
                                    width: "100vw",
                                    cursor: "pointer",
                                }} />
                            </div>
                        </Slider>
                    </div>
                    <MBannerContainer>
                        <div id="wishdeal_click" onClick={() => history.push("wishdealdefault")}>
                            <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbanner} alt="????????????" /></div>
                        <a href={"https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"} target="_blank" style={{
                            textDecorationLine: "none",
                            WebkitAppearance: "none"
                        }}>
                            <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbannertwo} alt="????????????" /></a>
                    </MBannerContainer>
                    <div onClick={() => setModal(true)} style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>
                        <div style={{
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            color: "#202426",
                            marginRight: 4,
                        }}>????????? ???????????? ?????? ?????????????????? ????</div>
                        <MdKeyboardArrowRight
                            size={20}
                            color="rgba(5, 26, 26, 0.6)"
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    </div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#202426",

                        marginTop: 4,
                        marginLeft: "5%",
                        marginBottom: "4vw",
                    }}>????????????, ????????? ???????????? ????????????????????????!</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "5%",
                        marginRight: "5%",
                        width: "90%",
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    }}>
                        <div onClick={() => history.push('/timedeal?product=airpod')} style={{ cursor: "pointer" }}>
                            <MTimeShop
                                id="display_click"
                                img={sampleone}
                                title="??????"
                                sub="Apple AirPods Pro ?????? ????????? ?????? 2?????? ???????????????"
                                twoPrice="130,000"
                                fourPrice="65,000"
                                stock={0}
                                sale={27}
                            />
                        </div>
                        <div onClick={() => history.push('/timedeal?product=ipad')} style={{ cursor: "pointer" }}>
                            <MTimeShop
                                id=""
                                img={sampletwo}
                                title="??????"
                                sub="Apple iPad Air Sky Blue
                                10.9??? iPad Air Wi-Fi ????????? ??????"
                                twoPrice="360,750"
                                fourPrice="180,375"
                                stock={0}
                                sale={5}
                            />
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>
                        <div style={{
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            color: "#202426",
                            marginRight: 4,
                        }}>????????? ?????????</div>
                        <MdKeyboardArrowRight
                            size={20}
                            color="rgba(5, 26, 26, 0.6)"
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    </div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#202426",

                        marginTop: 4,
                        marginLeft: "5%",
                        marginBottom: "4vw",
                    }}>?????? ???????????? ????????? ??????????</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: "90%",
                        alignSelf: "center",
                    }}>
                        {review.map(item =>
                            <div style={{
                                cursor: "pointer"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}>
                                    <img alt="?????????" src={item.user_profile} style={{
                                        width: "8vw",
                                        height: "8vw",
                                        borderRadius: "4vw",
                                    }} />
                                    <div style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        marginLeft: 8,
                                        marginTop: 6
                                    }}>{item.user_nickname} </div>
                                </div>
                                <img alt="????????????" src={item.review_image} style={{
                                    width: "42vw",
                                    height: "32vw",
                                    borderRadius: 6,
                                    marginTop: "2vw",
                                    objectFit: "cover",
                                }} />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    marginTop: "2vw",
                                }}>
                                    <AiFillStar size={12} color="#fad94f" />
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 11,
                                        fontWeight: "bold",
                                        color: "#051a1a",
                                        marginLeft: 4,
                                    }}>{item.review_score}</div>
                                </div>
                                <div style={{
                                    fontSize: 12,
                                    opacity: 0.8,
                                    marginTop: 8,
                                    width: "42vw",
                                    height: "7vw",
                                    overflow: "hidden",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.review_like}</div>
                                <div style={{
                                    color: "#26c1f0",
                                    marginTop: 4,
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.product_price}?????? ?????? ??????</div>
                            </div>
                        )}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>
                        <div style={{
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            color: "#202426",
                            marginRight: 4,
                        }}>???????????? ????????????</div>
                        <MdKeyboardArrowRight
                            size={20}
                            color="rgba(5, 26, 26, 0.6)"
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    </div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#202426",
                        marginLeft: "5%",
                        marginTop: "2vw"
                    }}>????????? ???????????? ????????? ???????????????????</div>
                    <MAfterContainer>
                        <MReview
                            item={{
                                content: "??????????????? ????????? ??????????????? ????????? ??? ????????? ?????? ????????????????????????.. ?????? ???????????? ????????? ???????????? ????????? ???????????? ?????? ?????????!!",
                            }}
                        />
                        <MReview
                            item={{
                                content: "???????????? ?????????????????? ????????? ??????????????? ?????????;;; ???????????? ????????????????????? ????????????, ????????? ?????????????????? ???????????????!!",
                            }}
                        />
                    </MAfterContainer>

                    <div style={{ marginTop: "16vw", marginLeft: "5vw", width: "90vw", height: "40vw", backgroundImage: `url(${banner})`, backgroundSize: "cover", borderRadius: 6, }}>
                        <div style={{ marginLeft: "5vw", marginTop: "5vw", fontSize: 16, color: "#ffffff", fontWeight: "bold" }}>???????????? ??????????????????????</div>
                        <div style={{ marginLeft: "5vw", marginTop: 8, fontSize: 14, color: "#ffffff" }}>??????????????? ?????? ???????????? ???????????? ??????????????????.</div>
                        <div style={{ marginLeft: "6vw", marginTop: 8, backgroundColor: "#051a1a", width: "60vw", height: "12vw", borderRadius: 6 }}>
                            <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                <div style={{ textDecorationLine: "none", padding: "4vw", marginTop: "5vw", marginLeft: "5vw", fontSize: 14, fontWeight: "bold", color: "#ffffff" }}>??? ?????? ????????? 50% ??????!</div>
                            </a>
                        </div>
                    </div>
                    <MHomeBottomTag marginTop={100} marginBottom={0} bottomRef={bottomRef} />
                    <div id="wishdeal_click" ref={buttonRef} onClick={hide ? () => { } : () => history.push("/wishdealdefault")} style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginRight: "5%",
                        paddingTop: "3%",
                        paddingBottom: "3%",
                        textAlign: "center",
                        backgroundColor: hide ? "rgba(0, 0, 0, 0)" : "#26c1f0",
                        boxShadow: hide ? "0 0px 0px 0 rgba(0, 0, 0, 0)" : "0 4px 20px 0 rgba(0, 0, 0, 0.14)",
                        borderRadius: 6,

                        fontSize: 18,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        color: hide ? "rgba(0, 0, 0, 0)" : "#ffffff",
                        cursor: hide ? "none" : "pointer",
                        position: "fixed",
                        bottom: 20,
                    }}>{hide ? "" : "????????? ????????????"}</div>
                </div>
            </Mobile>
        </div>
    )
}

export function TimeShop({ id, img, title, sub, twoPrice, fourPrice, stock }) {
    return (
        <div>
            <div id={id} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: 210,
                marginBottom: 32,
            }}>
                <div style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 6,
                    marginBottom: 8,
                    backgroundColor: "#ffffff",
                    color: "#ffffff",
                    position: "relative",
                }}>
                    <img src={img} style={{
                        width: "100%",
                    }} />
                    {stock > 0 ?
                        <div style={{
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            backgroundColor: "rgba(5, 26, 26, 0.8)",
                            position: "absolute",
                            bottom: 0,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            paddingTop: 8,
                            paddingBottom: 8,
                        }}>
                            <BiTime size={16} color="#ffffff" />
                            <div style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#ffffff",
                                fontFamily: "NotoSansCJKkr",
                                marginLeft: 4,
                            }}>{stock}??? ????????????!</div>
                        </div>
                        :
                        <div></div>
                    }
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
                        fontSize: 16,
                        color: "#202426",
                        fontWeight: "bold",
                    }}>{title}</div>
                    <BsUpload size={18} style={{
                        marginRight: 4,
                        cursor: "pointer"
                    }} />
                </div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.8,
                    color: "#202426",
                    lineHeight: 1.71,
                    fontFamily: "AvenirNext",
                    marginBottom: 8,
                }}>{sub}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: 4,
                    width: "100%"
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#202426",
                    }}>2??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 18,
                    }}>
                        <span style={{
                            fontSize: 14,
                            fontWeight: "normal",
                        }}>??? </span>{twoPrice}???
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "100%"
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#202426",
                    }}>4??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 18,
                    }}>
                        <span style={{
                            fontSize: 14,
                            fontWeight: "normal",
                        }}>??? </span>{fourPrice}???
                    </div>
                </div>
            </div>
        </div>
    )
}

export function MTimeShop({ id, img, title, sub, twoPrice, fourPrice, stock }) {
    return (
        <div>
            <div id={id} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "42vw",
                marginBottom: "8vw"
            }}>
                <div style={{
                    width: "100%",
                    borderRadius: 6,
                    marginBottom: "2vw",
                    backgroundColor: "#ffffff",
                    color: "#ffffff",
                    position: "relative",
                }}>
                    <img src={img} style={{
                        width: "100%",
                    }} />
                    {stock > 0 ?
                        <div style={{
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            backgroundColor: "rgba(5, 26, 26, 0.8)",
                            position: "absolute",
                            bottom: 0,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            paddingTop: "2vw",
                            paddingBottom: "2vw",
                        }}>
                            <BiTime size={12} color="#ffffff" />
                            <div style={{
                                fontSize: 10,
                                fontWeight: "bold",
                                color: "#ffffff",
                                fontFamily: "NotoSansCJKkr",
                                marginLeft: 4,
                            }}>{stock}??? ????????????!</div>
                        </div>
                        :
                        <div></div>
                    }
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
                        fontSize: 14,
                        color: "#202426",
                        fontWeight: "bold"
                    }}>{title}</div>
                    <BsUpload size={18} style={{
                        marginRight: 4,
                        cursor: "pointer"
                    }} />
                </div>
                <div style={{
                    fontSize: 12,
                    opacity: 0.8,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "AvenirNext",
                    marginBottom: 6,
                }}>{sub}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: "1vw",
                    width: "100%"
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 11,
                        color: "#202426",
                    }}>2??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 13,
                    }}>
                        <span style={{
                            fontSize: 11,
                            fontWeight: "normal",
                        }}>??? </span>{twoPrice}???
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "100%"
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 11,
                        color: "#202426",
                    }}>4??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 13,
                    }}>
                        <span style={{
                            fontSize: 11,
                            fontWeight: "normal",
                        }}>??? </span>{fourPrice}???
                    </div>
                </div>
            </div>
        </div>
    )
}

function Review({ item }) {
    var score = item.service_score
    var content = item.content
    return (
        <div>
            <div style={{
                minWidth: 330,
                padding: 16,
                height: 138,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                marginRight: 20,
                borderRadius: 6,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 8,
                }}>
                    <AiFillStar size={16} color="#fad94f" />
                    <div style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        marginLeft: 4,
                        fontFamily: "NotoSansCJKkr"
                    }}>4.5</div>
                </div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr",
                    marginBottom: 8,
                }}>{content}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>???*??? (20??? ??????)</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>2021.03.16</div>
                </div>
            </div>
        </div>
    )
}

function MReview({ item }) {
    var content = item.content
    return (
        <div>
            <div style={{
                width: "82vw",
                padding: "4vw",
                height: "32vw",
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                borderRadius: 6,
                marginRight: 12,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 6,
                }}>
                    <AiFillStar size={12} color="#fad94f" />
                    <div style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        marginLeft: 4,
                        fontFamily: "NotoSansCJKkr"
                    }}>4.5</div>
                </div>
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr",
                    marginBottom: 6,
                }}>{content}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 12,
                        fontFamily: "NotoSansCJKkr"
                    }}>???*??? (20??? ??????)</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 12,
                        fontFamily: "NotoSansCJKkr"
                    }}>2021.03.16</div>
                </div>
            </div>
        </div>
    )
}