import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import { BannerContainer, BottomTag, HomeHeader, MBannerContainer, MBottomTag, MHomeHeader, NameMask, TopBanner, MTopBanner, HomeBottomTag, MHomeBottomTag } from "../Style";
import { BsUpload } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { useHistory } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import smallbanner from "../images/smallbanner.png";
import smallbannertwo from "../images/smallbannertwo.png";
import Slider from "react-slick"
import bannerOne from "../images/bannerOne.png"
import bannerTwo from "../images/bannerTwo.png"
import banner from "../images/homebanner.png"

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

export default function Home() {
    let history = useHistory()

    //Get Service Review Data
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        setReviewData([])
        fetch("https://haulfree.link/servicereview/home", {
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
            })
    }, [])

    //Get After Review Data
    const [review, setReview] = useState([])
    useEffect(() => {
        setReview([])
        fetch("https://haulfree.link/review/home", {
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
                        user_profile: response[i].user_profile,
                        user_nickname: response[i].user_nickname,
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
                    backgroundColor: "#f2f3f8"
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
                        <HomeHeader />
                        {/* 배너 넣어야됨 */}
                        <div style={{
                            width: 480,
                            height: 48,
                            backgroundColor: "#051a1a"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",

                            }}>
                                <div style={{
                                    fontSize: 16,
                                    color: "#ffffff",
                                    marginTop: 12,
                                    marginLeft: 69
                                }}>스타트업 대표님이신가요?</div>
                                <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                    <div style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        color: "#ffffff",
                                        marginTop: 12,
                                        textDecorationLine: "underline",
                                        fontWeight: "bold"
                                    }}>첫 구매 수수료 50% 할인</div>
                                </a>
                            </div>
                        </div>
                        <div style={{
                            width: 480,
                            height: 300,
                            marginBottom: 16,
                        }}>
                            <Slider dots={false} arrows={false} autoplaySpeed={5000} autoplay={true} >
                                <div>
                                    <TopBanner
                                        img={bannerOne}
                                        title="크리에이터 크라우드 펀딩 플랫폼"
                                        content="Y.은 무슨 서비스인지 알아볼까요?"
                                        num={1}
                                        backgroundColor="#273d5a"
                                        link="https://www.notion.so/ydot/HaulFree-6a3f1f7d342d493193ac59d4319c2100"
                                    />
                                </div>
                                <div>
                                    <div style={{
                                        width: 480,

                                        height: 300,
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",

                                    }}>

                                        <a href={"https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"} target="_blank" style={{
                                            textDecorationLine: "none",
                                            WebkitAppearance: "none"
                                        }}>
                                            <div style={{
                                                width: 480,
                                                height: 300,
                                                paddingBottom: 62,
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "flex-end",
                                                justifyContent: "flex-end",
                                            }}>
                                                <img src={bannerTwo} alt="" style={{
                                                    width: 480,
                                                    objectFit: "contain",
                                                }} />
                                            </div>
                                            {/* <div style={{
                        position: "absolute",
                        zIndex: 2,
                        top: 144,
                        width: "56vw",
                        minWidth: 1060,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            width: 445,
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#ffffff",
                            marginBottom: 20,
                        }}>{title}</div>
                        <div style={{
                            width: 300,
                            fontSize: 36,
                            fontWeight: "bold",
                            color: "#ffffff",
                        }}>{content}</div>
                    </div> */}
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <BannerContainer>
                            <div id="wishdeal_click" onClick={() => history.push("wishdealdefault")}>
                                <img style={{ marginRight: 16, cursor: "pointer" }} src={smallbanner} alt="광고배너" /></div>
                            <a href={"https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"} target="_blank" style={{
                                textDecorationLine: "none",
                                WebkitAppearance: "none"
                            }}><img style={{ marginRight: 16 }} src={smallbannertwo} alt="광고배너" /></a>
                        </BannerContainer>
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
                            }}>나눠서 결제하고 바로 경험해보세요 😎</div>
                            <MdKeyboardArrowRight
                                onClick={() => history.push("/timedeal/entire")}
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
                        }}>체크카드, 계좌로 간편하게 분할결제해보세요!</div>
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
                                title="애플"
                                sub="Apple AirPods Pro 
                                애플 에어팟 프로 2세대 무선충전형"
                                twoPrice="130000"
                                fourPrice="65000"
                                stock={2}
                            />
                            <TimeShop
                                title="애플"
                                sub="Apple iPad Air Sky Blue
                                10.9형 iPad Air Wi-Fi 스카이 블루"
                                twoPrice="360750"
                                fourPrice="180375"
                                stock={0}
                            />
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
                            }}>하울한 사람들</div>
                            <MdKeyboardArrowRight
                                onClick={() => history.push("/review")}
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
                        }}>다른 사람들은 어떤걸 샀을까?</div>
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
                                        <img alt="프로필" src={item.user_profile} style={{
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
                                        backgroundColor: "#051a1a",
                                        marginTop: 8,
                                        border: "1px solid #ebebeb",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <img alt="리뷰사진" src={item.review_image} onClick={() => history.push(`/reviewpost/${item.id}`)} style={{
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
                                    }}>{item.product_price}원에 획득 완료</div>
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
                            <div style={{
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426",
                                marginRight: 4,
                            }}>하울프리 이용후기</div>
                            <MdKeyboardArrowRight
                                onClick={() => history.push("/servicereview")}
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
                        }}>아직도 하울프리 이용을 망설이시나요?</div>
                        <AfterContainer>
                            {reviewData.map(item =>
                                <Review
                                    item={item}
                                />
                            )}
                        </AfterContainer>
                        <div style={{ marginTop: 64, marginLeft: 20, width: 440, height: 160, backgroundImage: `url(${banner})`, backgroundSize: "cover", borderRadius: 6, }}>
                            <div style={{ marginLeft: 20, marginTop: 20, fontSize: 21, color: "#ffffff", fontWeight: "bold" }}>스타트업 대표님이신가요?</div>
                            <div style={{ marginLeft: 20, marginTop: 8, fontSize: 16, color: "#ffffff" }}>스타트업을 위한 분할결제 서비스를 신청해보세요.</div>
                            <div style={{ marginLeft: 24, marginTop: 8, backgroundColor: "#051a1a", width: 240, height: 48, borderRadius: 6 }}>
                                <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                    <div style={{ textDecorationLine: "none", padding: 15, marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>첫 구매 수수료 50% 할인!</div>
                                </a>
                            </div>
                        </div>
                        <HomeBottomTag marginTop={200} marginBottom={0} bottomRef={bottomRef} />
                        {hide ?
                            <div ref={buttonRef} style={{
                                width: 440,
                                marginLeft: 20,
                                marginRight: 20,
                                paddingTop: 21,
                                paddingBottom: 21,
                                textAlign: "center",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderRadius: 6,
                                zIndex: 1,

                                fontSize: 21,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                color: "rgba(0, 0, 0, 0)",
                                position: "fixed",
                                bottom: 40,
                            }} />
                            :
                            <div ref={buttonRef} onClick={() => history.push("/wishdealdefault")} style={{
                                width: 440,
                                marginLeft: 20,
                                marginRight: 20,
                                paddingTop: 21,
                                paddingBottom: 21,
                                textAlign: "center",
                                backgroundColor: "#26c1f0",
                                boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",
                                borderRadius: 6,

                                fontSize: 21,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                color: "#ffffff",
                                cursor: "pointer",
                                position: "fixed",
                                bottom: 40,
                            }}>필요한건 위시딜</div>
                        }
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
                                스타트업 대표님이신가요?
                            </div>
                            <a id="startup_click" target="_blank" href={"https://www.notion.so/haulfree/f97fa37a92e04d2c91b2a11aa9624bea"}>
                                <div style={{
                                    marginLeft: 5,
                                    fontSize: 14,
                                    color: "#ffffff",
                                    marginTop: 12,
                                    textDecorationLine: "underline",
                                    fontWeight: "bold"
                                }}>첫 구매 수수료 50% 할인</div>
                            </a>
                        </div>
                    </div>
                    <div style={{ width: "100vw", marginBottom: "3vw"}}>
                        <Slider dots={false} autoplaySpeed={5000} autoplay={true} arrows={false}>
                            <div style={{ width: "100vw" }}>
                                <MTopBanner
                                    img={bannerOne}
                                    title="크리에이터 크라우드 펀딩 플랫폼"
                                    content="Y.은 무슨 서비스인지 알아볼까요?"
                                    num={1}
                                    backgroundColor="#273d5a"
                                    link="https://www.notion.so/ydot/HaulFree-6a3f1f7d342d493193ac59d4319c2100"
                                />
                            </div>
                            <div style={{ width: "100vw" }}>
                                <MTopBanner
                                    img={bannerTwo}
                                    title="크리에이터 크라우드 펀딩 플랫폼"
                                    content="Y.은 무슨 서비스인지 알아볼까요?"
                                    num={1}
                                    backgroundColor="#273d5a"
                                    link="https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"
                                 />
                            </div>
                        </Slider>
                    </div>
                    <MBannerContainer>
                        <div id="wishdeal_click" onClick={() => history.push("wishdealdefault")}>
                            <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbanner} alt="광고배너" /></div>
                        <a href={"https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"} target="_blank" style={{
                            textDecorationLine: "none",
                            WebkitAppearance: "none"
                        }}>
                            <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbannertwo} alt="광고배너" /></a>
                    </MBannerContainer>
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
                        }}>나눠서 결제하고 바로 경험해보세요 😎</div>
                        <MdKeyboardArrowRight
                            onClick={() => history.push("/timedeal/entire")}
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
                    }}>체크카드, 계좌로 간편하게 분할결제해보세요!</div>
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
                            title="애플"
                            sub="Apple AirPods Pro 
                                애플 에어팟 프로 2세대 무선충전형"
                            twoPrice="130000"
                            fourPrice="65000"
                            stock={2}
                        />
                        <MTimeShop
                            title="애플"
                            sub="Apple iPad Air Sky Blue
                                10.9형 iPad Air Wi-Fi 스카이 블루"
                            twoPrice="360750"
                            fourPrice="180375"
                            stock={0}
                        />
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
                        }}>하울한 사람들</div>
                        <MdKeyboardArrowRight
                            onClick={() => history.push("/review")}
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
                    }}>다른 사람들은 어떤걸 샀을까?</div>
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
                                    <img alt="프로필" src={item.user_profile} style={{
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
                                <img alt="리뷰사진" src={item.review_image} onClick={() => history.push(`/reviewpost/${item.id}`)} style={{
                                    width: "42vw",
                                    height: "32vw",
                                    borderRadius: 6,
                                    backgroundColor: "#051a1a",
                                    marginTop: "2vw",
                                    objectFit: "cover",
                                    border: "1px solid #ebebeb"
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
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.review_like}</div>
                                <div style={{
                                    color: "#26c1f0",
                                    marginTop: 4,
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.product_price}원에 획득 완료</div>
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
                        }}>하울프리 이용후기</div>
                        <MdKeyboardArrowRight
                            onClick={() => history.push("/servicereview")}
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
                    }}>아직도 하울프리 이용을 망설이시나요?</div>
                    <MAfterContainer>
                        {reviewData.map(item =>
                            <MReview
                                item={item}
                            />
                        )}
                    </MAfterContainer>
                    <MHomeBottomTag marginTop={100} marginBottom={0} bottomRef={bottomRef} />
                    {hide ?
                        <div ref={buttonRef} style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginRight: "5%",
                            paddingTop: "3%",
                            paddingBottom: "3%",
                            textAlign: "center",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: 6,

                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            color: "rgba(0, 0, 0, 0)",
                            position: "fixed",
                            bottom: 20,
                        }}></div>
                        :
                        <div ref={buttonRef} onClick={() => history.push("/wishdealdefault")} style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginRight: "5%",
                            paddingTop: "3%",
                            paddingBottom: "3%",
                            textAlign: "center",
                            backgroundColor: "#26c1f0",
                            boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",
                            borderRadius: 6,

                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            color: "#ffffff",
                            cursor: "pointer",
                            position: "fixed",
                            bottom: 20,
                        }}>필요한건 위시딜</div>
                    }
                </div>
            </Mobile>
        </>
    )
}

export function TimeShop({ title, sub, twoPrice, fourPrice, stock }) {
    return (
        <>
            <div style={{
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
                    border: "1px solid rgba(5, 26, 26, 0.2)"
                }}>
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
                            }}>{stock}개 남았어요!</div>
                        </div>
                        :
                        <></>
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
                    }}>2회 분할결제</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 18,
                    }}>
                        <span style={{
                            fontSize: 14,
                            fontWeight: "normal",
                        }}>월 </span>{twoPrice}원
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
                    }}>4회 분할결제</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 18,
                    }}>
                        <span style={{
                            fontSize: 14,
                            fontWeight: "normal",
                        }}>월 </span>{fourPrice}원
                    </div>
                </div>
            </div>
        </>
    )
}

export function MTimeShop({ title, sub, twoPrice, fourPrice, stock }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "42vw",
                marginBottom: "8vw"
            }}>
                <div style={{
                    width: "100%",
                    height: "32vw",
                    borderRadius: 6,
                    marginBottom: "2vw",
                    backgroundColor: "#ffffff",
                    color: "#ffffff",
                    position: "relative",
                    border: "1px solid rgba(5, 26, 26, 0.2)"
                }}>
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
                            }}>{stock}개 남았어요!</div>
                        </div>
                        :
                        <></>
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
                        fontWeight: "bold",
                        maxHeight: ""
                    }}>{title}</div>
                    <BsUpload size={18} style={{
                        marginRight: 4,
                        cursor: "pointer"
                    }} />
                </div>
                <div style={{
                    fontSize: 11,
                    opacity: 0.8,
                    color: "#202426",
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
                        fontSize: 11,
                        color: "#202426",
                    }}>2회 분할결제</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 13,
                    }}>
                        <span style={{
                            fontSize: 11,
                            fontWeight: "normal",
                        }}>월 </span>{twoPrice}원
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
                    }}>4회 분할결제</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontWeight: "bold",
                        color: "#202426",
                        fontSize: 13,
                    }}>
                        <span style={{
                            fontSize: 11,
                            fontWeight: "normal",
                        }}>월 </span>{fourPrice}원
                    </div>
                </div>
            </div>
        </>
    )
}

function Review({ item }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age / 10)
    var gender = item.user_gender === 0 ? "남성" : "여성"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
    return (
        <>
            <div style={{
                minWidth: 298,
                padding: 16,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                alignSelf: "center",
                marginRight: 20,
                borderRadius: 6,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                }}>
                    <AiFillStar size={16} color="#fad94f" />
                    <div style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#051a1a",
                        fontFamily: "NotoSansCJKkr",
                        marginLeft: 4,
                    }}>{score}</div>
                </div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr",
                    height: 72,
                }}>{content}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: 8,
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{maskingName}({age}0대 {gender})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
            </div>
        </>
    )
}

function MReview({ item }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age / 10)
    var gender = item.user_gender === 0 ? "남성" : "여성"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
    return (
        <div>
            <div style={{
                width: "72vw",
                padding: "4vw",
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
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
                    <AiFillStar size={14} color="#fad94f" />
                    <div style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#051a1a",
                        marginBottom: 6,
                        fontFamily: "NotoSansCJKkr",
                        marginLeft: "1vw",
                    }}>{score}</div>
                </div>
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr",
                    height: "18vw",
                }}>{content}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: 6,
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 12,
                        fontFamily: "NotoSansCJKkr"
                    }}>{maskingName}({age}0대 {gender})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 12,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
            </div>
        </div>
    )
}