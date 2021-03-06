import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import { BannerContainer, MBannerContainer, NameMask, HomeBottomTag, MHomeBottomTag, StandardChoiceModal, BottomTab, Header, MHeader } from "../Style";
import { BiTime } from "react-icons/bi";
import { useHistory } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io"
import smallbanner from "../images/smallbannercopy.png";
import smallbannertwo from "../images/smallbannertwocopy.png";
import Slider from "react-slick"
import bannerOne from "../images/bannerOne.png"
import bannerTwo from "../images/bannerTwo.png"
import bannerThree from "../images/bannerThree.png"
import banner from "../images/homebanner.png"
import sampleone from "../images/sampleone.png"
import sampletwo from "../images/sampletwo.png"
import upload from "../images/upload.png"
import mainlogo from "../images/mainlogo.png"

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
    padding-left: 4vw;
    padding-right: 4vw;
    padding-top: 6vw;
    padding-bottom: 6vw;
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

    //Get Service Review Data
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        setReviewData([])
        fetch("https://api.1n1n.io/servicereview/home", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
                if (response != null && response != undefined) {
                    var array = []
                    for (var i = 0; i < response.length; i++) {
                        const data = {
                            service_score: response[i].service_score.toFixed(1),
                            user_name: response[i].user_name,
                            user_age: response[i].user_age,
                            user_gender: response[i].user_gender,
                            service_date: response[i].service_date,
                            service_content: response[i].service_content,
                        }
                        array.push(data)
                    }
                    setReviewData(reviewData.concat(array))
                }
            })
            .catch(err => console.log(err))
    }, [])

    //Get After Review Data
    const [review, setReview] = useState([])
    useEffect(() => {
        setReview([])
        fetch("https://api.1n1n.io/review/home", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
                var array = []
                for (var i = 0; i < response.length; i++) {
                    const dict = {
                        id: response[i].id,
                        user_name: response[i].user_name,
                        review_image: response[i].review_image[0],
                        review_score: response[i].review_score.toFixed(1),
                        review_like: response[i].review_like.length < 39 ? response[i].review_like : response[i].review_like.slice(0, 39) + "...",
                        product_price: 10000,
                    }
                    array.push(dict)
                }
                setReview(review.concat(array))
            })
    }, [])

    const [wishButton, setWishButton] = useState(0)
    const buttonRef = useRef(0)

    const [bottomPosition, setBottomPosition] = useState(0)
    const bottomRef = useRef(0)

    const [hide, setHide] = useState(false)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setBottomPosition(bottomRef.current.getBoundingClientRect().top)
    //         setWishButton(buttonRef.current.getBoundingClientRect().top)
    //         if (bottomPosition < wishButton) {
    //             setHide(true)
    //         } else {
    //             setHide(false)
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll, { passive: true });

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [wishButton, bottomPosition])

    useEffect(() => {
        const test = async () => {
            fetch("https://api.1n1n.io/userInfoName/", {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: "include",
            })
                .then((response) => (response.json()))
                .then(response => {
                    setIsLogin(response.data)
                }).catch(err => {
                    console.log(err)
                })
        }
        test()
    }, [])

    const [isLogin, setIsLogin] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
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
                    zIndex: 0,
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content={<> <img alt="mainlogo" src={mainlogo} style={{
                            width: 32,
                            height: 32,
                            marginRight: 8
                        }} /> n?????? ??? </>} />
                        <div style={{
                            width: 480,
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
                                <div>
                                    <img src={bannerThree} alt="bannerTwo" onClick={() => window.open('https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934', '_blank')} style={{
                                        width: 480,
                                        cursor: "pointer",
                                    }} />
                                </div>
                            </Slider>
                        </div>
                        
                        <BannerContainer>
                            {/* <div id="wishdeal_click" onClick={() => history.push("wishdeal/default")} style={{ borderRadius: 6, }} > */}
                            <a href={"https://docs.google.com/forms/d/e/1FAIpQLSedEeMtDWU6rlKZ7QC_2YhpWerjx_sWI7C3UuS2gsHMTz85hA/viewform?usp=sf_link"} target="_blank" style={{
                                textDecorationLine: "none",
                                WebkitAppearance: "none",
                                borderRadius: 6,
                            }}><img style={{ marginRight: 16, cursor: "pointer", borderRadius: 6, }} src={smallbanner} alt="????????????" /></a>
                                
                                {/* </div> */}
                            <a href={"https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"} target="_blank" style={{
                                textDecorationLine: "none",
                                WebkitAppearance: "none",
                                borderRadius: 6,
                            }}><img style={{ marginRight: 16, borderRadius: 6, }} src={smallbannertwo} alt="????????????" /></a>
                        </BannerContainer>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 32,
                            marginLeft: 20,
                        }}>
                            <div onClick={() => history.push("/timedeal/entire")} style={{
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#010608",
                                marginRight: 4,
                                cursor: "pointer"
                            }}>????????? ???????????? ?????? ?????????????????? ????</div>
                            <MdKeyboardArrowRight
                                onClick={() => history.push("/timedeal/entire")}
                                size={24}
                                color="rgba(1, 6, 8, 0.6)"
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                        </div>

                        <div style={{
                            fontSize: 16,
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            color: "#010608",

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
                            <TimeShop
                                id="display_click"
                                img={sampleone}
                                title="??????"
                                sub="Apple AirPods Pro ?????? ????????? ?????? ???????????????"
                                twoPrice="130,000"
                                fourPrice="65,000"
                                stock={0}
                                sale={27}
                                onClick={() => history.push('/timedeal/entire')}
                            />
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
                                onClick={() => history.push('/timedeal/entire')}
                            />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 64,
                            marginLeft: 20,
                        }}>
                            <div onClick={() => history.push("/review/main")} style={{
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#010608",
                                marginRight: 4,
                                cursor: "pointer"
                            }}>????????? ?????????</div>
                            <MdKeyboardArrowRight
                                onClick={() => history.push("/review/main")}
                                size={24}
                                color="rgba(1, 6, 8, 0.6)"
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                        <div style={{
                            fontSizeAdjust: 16,
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            color: "#010608",

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
                                        <div style={{
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            marginTop: 6
                                        }}>{NameMask(item.user_name)} </div>
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
                                        <img alt="????????????" src={item.review_image} onClick={() => history.push(`/review/post/${item.id}`)} style={{
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
                                            color: "#010608",
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
                            marginTop: 64,
                            marginLeft: 20,
                        }}>
                            <div onClick={() => history.push("/service/main")} style={{
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#010608",
                                marginRight: 4,
                                cursor: "pointer"
                            }}>????????????</div>
                            <MdKeyboardArrowRight
                                onClick={() => history.push("/service/main")}
                                size={24}
                                color="rgba(1, 6, 8, 0.6)"
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                        <div style={{
                            fontSize: 16,
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            color: "#010608",
                            marginLeft: 20,
                        }}>????????? ????????? ???????????????????</div>
                        <AfterContainer>
                            {reviewData.map(item =>
                                <Review
                                    item={item}
                                    mobile={false}
                                />
                            )}
                        </AfterContainer>
                        {/* <div style={{ marginTop: 64, marginLeft: 20, width: 440, height: 160, backgroundImage: `url(${banner})`, backgroundSize: "cover", borderRadius: 6, }}>
                            <div style={{ marginLeft: 20, marginTop: 20, fontSize: 21, color: "#ffffff", fontWeight: "bold" }}>???????????? ??????????????????????</div>
                            <div style={{ marginLeft: 20, marginTop: 8, fontSize: 16, color: "#ffffff" }}>??????????????? ?????? ???????????? ???????????? ??????????????????.</div>
                            <div style={{ marginLeft: 24, marginTop: 8, backgroundColor: "#010608", width: 240, height: 48, borderRadius: 6 }}>
                                <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                    <div style={{ textDecorationLine: "none", padding: 15, marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>??? ?????? ????????? 50% ??????!</div>
                                </a>
                            </div>
                        </div> */}
                        <HomeBottomTag marginTop={200} marginBottom={100} bottomRef={bottomRef} />
                        {/* <div ref={buttonRef} onClick={hide ? () => { } : isLogin ? () => history.push("/wishdeal/default") : () => setLoginModal(true)} style={{
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
                        }}>{hide ? "" : "????????? ????????????"}</div> */}
                        {loginModal ?
                            <StandardChoiceModal
                                title="??????????????? ????????? ??????????????????."
                                content={<span>?????? ?????? ?????????????????? <br /> ????????? ????????? ???????????? ????????????!</span>}
                                canceltext="??????"
                                onCancelClick={() => setLoginModal(false)}
                                buttontext="????????????"
                                onClick={() => history.push("/signup/main")}
                                mobile={false}
                            />
                            :
                            <></>
                        }
                        <BottomTab mobile={false} state={0} />
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
                    zIndex: 0,
                }}>
                    <MHeader content={<> <img alt="mainlogo" src={mainlogo} style={{
                        width: 24,
                        height: 24,
                        marginRight: 4
                    }} /> n?????? ??? </>} />
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
                            <div>
                                <img src={bannerThree} alt="bannerTwo" onClick={() => window.open('https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934', '_blank')} style={{
                                    width: "100vw",
                                    cursor: "pointer",
                                }} />
                            </div>
                        </Slider>
                    </div>
                    <MBannerContainer>
                        <div id="wishdeal_click" onClick={() => history.push("wishdeal/default")}>
                            <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbanner} alt="????????????" /></div>
                        <a href={"https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"} target="_blank" style={{
                            textDecorationLine: "none",
                            WebkitAppearance: "none"
                        }}>
                            <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbannertwo} alt="????????????" /></a>
                    </MBannerContainer>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>
                        <div onClick={() => history.push("/timedeal/entire")} style={{
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            color: "#010608",
                            marginRight: 4,
                        }}>????????? ???????????? ?????? ?????????????????? ????</div>
                        <MdKeyboardArrowRight
                            onClick={() => history.push("/timedeal/entire")}
                            size={20}
                            color="rgba(1, 6, 8, 0.6)"
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    </div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#010608",

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
                        <MTimeShop
                            id="display_click"
                            img={sampleone}
                            title="??????"
                            sub="Apple AirPods Pro ?????? ????????? ?????? 2?????? ???????????????"
                            twoPrice="130,000"
                            fourPrice="65,000"
                            stock={0}
                            sale={27}
                            onClick={() => history.push('/timedeal/entire')}
                        />
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
                            onClick={() => history.push('/timedeal/entire')}
                        />
                    </div>
                    <div onClick={() => history.push("/review/main")} style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "16vw",
                        marginLeft: "5vw",
                    }}>
                        <div style={{
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            color: "#010608",
                            marginRight: 4,
                        }}>????????? ?????????</div>
                        <MdKeyboardArrowRight
                            onClick={() => history.push("/review/main")}
                            size={20}
                            color="rgba(1, 6, 8, 0.6)"
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    </div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#010608",

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
                                    <div style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        marginTop: 6
                                    }}>{NameMask(item.user_name)} </div>
                                </div>
                                <img alt="????????????" src={item.review_image} onClick={() => history.push(`/review/post/${item.id}`)} style={{
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
                                        color: "#010608",
                                        marginLeft: 4,
                                    }}>{item.review_score}</div>
                                </div>
                                <div style={{
                                    fontSize: 12,
                                    opacity: 0.8,
                                    marginTop: 8,
                                    width: "42vw",
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
                        marginTop: "16vw",
                        marginLeft: "5vw",
                    }}>
                        <div onClick={() => history.push("/service/main")} style={{
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            color: "#010608",
                            marginRight: 4,
                        }}>????????????</div>
                        <MdKeyboardArrowRight
                            onClick={() => history.push("/service/main")}
                            size={20}
                            color="rgba(1, 6, 8, 0.6)"
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    </div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#010608",
                        marginLeft: "5%",
                    }}>????????? ????????? ???????????????????</div>
                    <MAfterContainer>
                        {reviewData.map(item =>
                            <Review
                                item={item}
                                mobile={true}
                            />
                        )}
                    </MAfterContainer>
                    <MHomeBottomTag marginTop={100} marginBottom={"20vw"} bottomRef={bottomRef} />
                    {/* <div ref={buttonRef} onClick={hide ? () => { } : isLogin ? () => history.push("/wishdeal/default") : () => setLoginModal(true)} style={{
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
                    }}>{hide ? "" : "????????? ????????????"}</div> */}
                    {loginModal ?
                        <StandardChoiceModal
                            title="??????????????? ????????? ??????????????????."
                            content={<span>?????? ?????? ?????????????????? <br /> ????????? ????????? ???????????? ????????????!</span>}
                            canceltext="??????"
                            onCancelClick={() => setLoginModal(false)}
                            buttontext="????????????"
                            onClick={() => history.push("/signup/main")}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                    <BottomTab mobile={true} state={0}  />
                </div>
            </Mobile>
        </>
    )
}

export function TimeShop({ id, img, title, sub, twoPrice, fourPrice, stock, onClick }) {
    const [copy, setCopy] = useState(false)

    return (
        <>
            <div id={id} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: 210,
                marginBottom: 32,
                zIndex: 0,
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
                    <img onClick={onClick} src={img} style={{
                        width: "100%",
                        zIndex: 0,
                        cursor: "pointer"
                    }} />
                    {stock > 0 ?
                        <div style={{
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            backgroundColor: "rgba(1, 6, 8, 0.8)",
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
                        color: "#010608",
                        fontWeight: "bold",
                    }}>{title}</div>
                    <img alt="" src={upload} onClick={() => {
                        setCopy(true)
                        setTimeout(() => {
                            setCopy(false)
                        }, 5000)
                    }} style={{
                        width: 18,
                        height: 18,
                        marginRight: 4,
                        cursor: "pointer"
                    }} />
                </div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.8,
                    color: "#010608",
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
                        fontSize: 12,
                        color: "#010608",
                        opacity: 0.6
                    }}>2??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#010608",
                        fontSize: 16,
                    }}>
                        <span style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            opacity: 0.6
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
                        fontSize: 12,
                        color: "#010608",
                        opacity: 0.6
                    }}>4??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#010608",
                        fontSize: 16,
                    }}>
                        <span style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            opacity: 0.6
                        }}>??? </span>{fourPrice}???
                    </div>
                </div>
            </div>
            {copy ?
                <div style={{
                    position: "fixed",
                    bottom: 40,
                    width: 440,
                    paddingTop: 16,
                    paddingBottom: 16,
                    backgroundColor: "#F2F3F8",
                    borderRadius: 6,

                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <IoMdCheckmarkCircle color="#26C1F0" size={24} style={{ marginLeft: 16 }} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: 8,
                    }}>????????? ?????????????????????.</div>
                </div>
                :
                <></>
            }
        </>
    )
}

export function MTimeShop({ id, img, title, sub, twoPrice, fourPrice, stock, onClick }) {
    const [copy, setCopy] = useState(false)
    return (
        <>
            <div id={id} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "42vw",
                marginBottom: "8vw",
                zIndex: 0,
            }}>
                <div style={{
                    width: "100%",
                    borderRadius: 6,
                    marginBottom: "2vw",
                    backgroundColor: "#ffffff",
                    color: "#ffffff",
                    position: "relative",
                }}>
                    <img onClick={onClick} src={img} style={{
                        width: "100%",
                        zIndex: 0,
                        cursor: "pointer"
                    }} />
                    {stock > 0 ?
                        <div style={{
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            backgroundColor: "rgba(1, 6, 8, 0.8)",
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
                        color: "#010608",
                        fontWeight: "bold"
                    }}>{title}</div>
                    <img alt="" src={upload} onClick={() => {
                        setCopy(true)
                        setTimeout(() => {
                            setCopy(false)
                        }, 5000)
                    }} style={{
                        width: 18,
                        height: 18,
                        marginRight: 4,
                        cursor: "pointer"
                    }} />
                </div>
                <div style={{
                    fontSize: 12,
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.5,
                    fontFamily: "AvenirNext",
                    marginBottom: 6,
                    maxHeight: "9vw",
                    overflowY: "hidden"
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
                        fontSize: 10,
                        color: "#010608",
                        opacity: 0.6
                    }}>2??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#010608",
                        fontSize: 14,
                    }}>
                        <span style={{
                            fontSize: 11,
                            fontWeight: "normal",
                            opacity: 0.6
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
                        fontSize: 10,
                        color: "#010608",
                        opacity: 0.6
                    }}>4??? ????????????</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#010608",
                        fontSize: 14,
                    }}>
                        <span style={{
                            fontSize: 11,
                            fontWeight: "normal",
                            opacity: 0.6
                        }}>??? </span>{fourPrice}???
                    </div>
                </div>
            </div>
            {copy ?
                <div style={{
                    position: "fixed",
                    bottom: "5vw",
                    width: "90vw",
                    paddingTop: "4vw",
                    paddingBottom: "4vw",
                    backgroundColor: "#F2F3F8",
                    borderRadius: 6,

                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <IoMdCheckmarkCircle color="#26C1F0" size={20} style={{ marginLeft: "4vw" }} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        marginLeft: "2vw",
                    }}>????????? ?????????????????????.</div>
                </div>
                :
                <></>
            }
        </>
    )
}

function Review({ item, mobile }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age / 10)
    var gender = item.user_gender === 1 ? "??????" : "??????"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
    return (
        <>
            <div style={{
                minWidth: mobile ? "72vw" : 298,
                padding: mobile ? "4vw" : 16,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                alignSelf: "center",
                marginRight: mobile ? "5vw" : 20,
                borderRadius: 6,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: mobile ? "2vw" : 8,
                }}>
                    <AiFillStar size={mobile ? 14 : 16} color="#fad94f" />
                    <div style={{
                        fontSize: mobile ? 12 : 14,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr",
                        marginLeft: mobile ? "1vw" : 4,
                    }}>{score}</div>
                </div>
                <div style={{
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr",
                    minHeight: mobile ? "18vw" : 72,
                    maxHeight: mobile ? "18vw" : 72,
                    overflowY: "hidden"
                }}>{content}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: mobile ? "2vw" : 8,
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#010608",
                        fontSize: mobile ? 12 : 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{maskingName}({age}0??? {gender})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#010608",
                        fontSize: mobile ? 12 : 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
            </div>
        </>
    )
}