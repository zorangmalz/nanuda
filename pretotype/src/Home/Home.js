import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import { BannerContainer, BottomTag, HomeHeader, MBannerContainer, MBottomTag, MHomeHeader, NameMask, TopBanner, MTopBanner } from "../Style";
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
import topbanner from "../images/topbanner.png"
import { firestore } from "../firebase"
import MetaTags from "react-meta-tags"
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

    //Get Service Review Data
    const [reviewData, setReviewData] = useState([])
    // useEffect(() => {
    //     setReviewData([])
    //     fetch("https://haulfree.link/servicereview/home", {
    //         method: "GET",
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         credentials: "include",
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             var array = []
    //             for (var i = 0; i < response.length; i++) {
    //                 const data = {
    //                     service_score: response[i].service_score.toFixed(1),
    //                     user_name: response[i].user_name,
    //                     user_age: response[i].user_age,
    //                     user_gender: response[i].user_gender,
    //                     service_date: response[i].service_date,
    //                     service_content: response[i].service_content,
    //                 }
    //                 array.push(data)
    //             }
    //             setReviewData(reviewData.concat(array))
    //         })
    // }, [])

    //Get After Review Data
    const [review, setReview] = useState([
        {
            user_profile: profile,
            user_nickname: "김*명",
            review_image: sampletwo,
            review_score: "5.0",
            review_like: "애플 팬슬을 선물로 받아서 아이패드를 샀습니다. 근데 BNPL로 부담없이 사서",
            product_price: "439,000",
        },
        {
            user_profile: profile,
            user_nickname: "정*웅",
            review_image: sampleone,
            review_score: "4.0",
            review_like: "노이즈 캔슬링이 최고에요. 안사면 곤란해지는 것이에요.",
            product_price: "120,000",
        }
    ])
    // useEffect(() => {
    //     setReview([])
    //     fetch("https://haulfree.link/review/home", {
    //         method: "GET",
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         credentials: "include",
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             var array = []
    //             for (var i = 0; i < response.length; i++) {
    //                 const dict = {
    //                     id: response[i].id,
    //                     user_profile: response[i].user_profile,
    //                     user_nickname: response[i].user_nickname,
    //                     review_image: response[i].review_image[0],
    //                     review_score: response[i].review_score.toFixed(1),
    //                     review_like: response[i].review_like.length < 39 ? response[i].review_like : response[i].review_like.slice(0, 39) + "...",
    //                     product_price: 10000,
    //                 }
    //                 array.push(dict)
    //             }
    //             setReview(review.concat(array))
    //         })
    // }, [])

    useEffect(() => {
        firestore.collection("test").doc("test").get().then((doc) => {
            console.log(doc.data().read)
        })
    }, [])
    const [modal, setModal] = useState(false)
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
                                }}>상품 준비중입니다.</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    color: "#051a1a",
                                    marginBottom: 16,
                                    textAlign: "center"
                                }}>위시딜을 통해 신청할 수 있습니다. <br />
                                빠른 시일내에 준비하도록 하겠습니다.</div>
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
                                    }}>취소</div>
                                    <div onClick={() => history.push("/wishdealdefault")} style={{
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
                                    }}>위시딜 신청하기</div>
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
                                justifyContent: "flex-start",

                            }}>
                                <div style={{
                                    fontSize: 16,
                                    color: "#ffffff",
                                    marginTop: 12,
                                    marginLeft: 69
                                }}>
                                    스타트업 대표님이신가요?
                            </div>
                                <a target="_blank" href={"https://forms.gle/AH6wjiC9Ah4oHk16A"}>
                                    <div style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        color: "#ffffff",
                                        marginTop: 12,
                                        textDecorationLine: "underline",
                                        fontWeight: "bold"
                                    }}>
                                        첫 구매 수수료 50% 할인
                            </div>
                                </a>
                            </div>
                        </div>
                        <div style={{
                            width: 480,
                            height: 300
                        }}>
                            <Slider dots={true} autoplaySpeed={5000} autoplay={true} >
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
                            </Slider></div>

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
                            }}>하울딜</div>
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
                        }}>할인된 상품을 분할결제 하세요!</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 20,
                            marginRight: 20,
                            width: 440,
                            alignItems: "flex-start",
                            justifyContent: "space-between"
                        }}>
                            <div onClick={() => setModal(true)}>
                                <TimeShop
                                    img={sampleone}
                                    title="애플"
                                    sub="Apple AirPods Pro 애플 에어팟 프로 2세대 무선충전형"
                                    price="329,000"
                                    currentPrice="240,000"
                                    stock={0}
                                    sale={27}
                                />
                            </div>
                            <div onClick={() => setModal(true)}>
                                <TimeShop
                                    img={sampletwo}
                                    title="애플"
                                    sub="Apple iPad Air Sky Blue
                                10.9형 iPad Air Wi-Fi 스카이 블루"
                                    price="779,000"
                                    currentPrice="739,000"
                                    stock={0}
                                    sale={5}
                                />
                            </div>
                        </div>
                        <BannerContainer>
                            <img style={{ marginRight: 16 }} src={smallbanner} alt="광고배너" />
                            <img style={{ marginRight: 16 }} src={smallbannertwo} alt="광고배너" />
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
                            }}>하울한 사람들</div>
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
                                    <img alt="리뷰사진" src={item.review_image} style={{
                                        width: 210,
                                        height: 160,
                                        borderRadius: 6,
                                        marginTop: 8,
                                        objectFit: "cover",
                                    }} />
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
                            marginTop: 32,
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
                        }}>아직도 나누다 이용을 망설이시나요?</div>
                        <AfterContainer>
                            <Review
                                item={{
                                    content: "알바를해서 수입은 고정적인데 한번에 큰 지출을 하기 부담스럽더라고요.. 근데 하울프리 통해서 부담없이 나눠서 결제하게 돼서 좋아요!!",
                                }}
                            />
                            <Review
                                item={{
                                    content: "호캉스를 가기로했는데 한번에 결제하기엔 부담이;;; 처음에는 의심스러웠는데 친절하고, 빠르게 결제해주셔서 감사합니다!!",
                                }}
                            />
                        </AfterContainer>
                        <div style={{ marginTop: 64, marginLeft: 20, width: 440, height: 160, backgroundImage: `url(${banner})`, backgroundSize: "cover", borderRadius: 6, }}>
                            <div style={{ marginLeft: 20, marginTop: 20, fontSize: 21, color: "#ffffff", fontWeight: "bold" }}>스타트업 대표님이신가요?</div>
                            <div style={{ marginLeft: 20, marginTop: 8, fontSize: 16, color: "#ffffff" }}>스타트업을 위한 분할결제 서비스를 신청해보세요.</div>
                            <div style={{ marginLeft: 24, marginTop: 8, backgroundColor: "#051a1a", width: 240, height: 48, borderRadius: 6 }}>
                                <a target="_blank" href={"https://forms.gle/AH6wjiC9Ah4oHk16A"}>
                                    <div style={{ textDecorationLine: "none", padding: 15, marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>첫 구매 수수료 50% 할인!</div>
                                </a>
                            </div>
                        </div>

                        <BottomTag marginTop={200} marginBottom={0} />
                        <div id="wishdeal_click" onClick={() => history.push("/wishdealdefault")} style={{
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
                        }}>위시딜 신청하기</div>
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
                            <a target="_blank" href={"https://forms.gle/AH6wjiC9Ah4oHk16A"}>
                                <div style={{
                                    marginLeft: 5,
                                    fontSize: 14,
                                    color: "#ffffff",
                                    marginTop: 12,
                                    textDecorationLine: "underline",
                                    fontWeight: "bold"
                                }}>
                                    첫 구매 수수료 50% 할인
                            </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Slider dots={true} autoplaySpeed={5000} autoplay={true} >
                            <div>
                                <MTopBanner
                                    img={bannerOne}
                                    title="크리에이터 크라우드 펀딩 플랫폼"
                                    content="Y.은 무슨 서비스인지 알아볼까요?"
                                    num={1}
                                    backgroundColor="#273d5a"
                                    link="https://www.notion.so/ydot/HaulFree-6a3f1f7d342d493193ac59d4319c2100"
                                />
                            </div>
                            <div>
                                <MTopBanner
                                    img={bannerTwo}
                                    title="크리에이터 크라우드 펀딩 플랫폼"
                                    content="Y.은 무슨 서비스인지 알아볼까요?"
                                    num={1}
                                    backgroundColor="#273d5a"
                                    link="https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934"
                                ></MTopBanner>

                            </div>
                        </Slider></div>
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
                        }}>하울딜</div>
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
                    }}>할인된 상품을 분할결제 하세요!</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "5%",
                        marginRight: "5%",
                        width: "90%",
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    }}>
                        <div onClick={() => setModal(true)}>
                            <MTimeShop
                                img={sampleone}
                                title="애플"
                                sub="Apple AirPods Pro 애플 에어팟 프로 2세대 무선충전형"
                                price="329,000"
                                currentPrice="240,000"
                                stock={2}
                                sale={27}
                            />
                        </div>
                        <div onClick={() => setModal(true)}>
                            <MTimeShop
                                img={sampletwo}
                                title="애플"
                                sub="Apple iPad Air Sky Blue
                                10.9형 iPad Air Wi-Fi 스카이 블루"
                                price="779,000"
                                currentPrice="739,000"
                                stock={0}
                                sale={5}
                            />
                        </div>
                    </div>
                    <MBannerContainer>
                        <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbanner} alt="광고배너" />
                        <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbannertwo} alt="광고배너" />
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
                        }}>하울한 사람들</div>
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
                                <img alt="리뷰사진" src={item.review_image} style={{
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
                                    height: "8vw",
                                    overflow: "hidden",
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
                    }}>아직도 나누다 이용을 망설이시나요?</div>
                    <MAfterContainer>
                        <MReview
                            item={{
                                content: "알바를해서 수입은 고정적인데 한번에 큰 지출을 하기 부담스럽더라고요.. 근데 하울프리 통해서 부담없이 나눠서 결제하게 돼서 좋아요!!",
                            }}
                        />
                        <MReview
                            item={{
                                content: "호캉스를 가기로했는데 한번에 결제하기엔 부담이;;; 처음에는 의심스러웠는데 친절하고, 빠르게 결제해주셔서 감사합니다!!",
                            }}
                        />
                    </MAfterContainer>

                    <div style={{ marginTop: 64, marginLeft: 20, width: "90vw", height: 160, backgroundImage: `url(${banner})`, backgroundSize: "cover", borderRadius: 6, }}>
                        <div style={{ marginLeft: 20, marginTop: 20, fontSize: 21, color: "#ffffff", fontWeight: "bold" }}>스타트업 대표님이신가요?</div>
                        <div style={{ marginLeft: 20, marginTop: 8, fontSize: 16, color: "#ffffff" }}>스타트업을 위한 분할결제 서비스를 신청해보세요.</div>
                        <div style={{ marginLeft: 24, marginTop: 8, backgroundColor: "#051a1a", width: "60vw", height: 48, borderRadius: 6 }}>
                            <a target="_blank" href={"https://forms.gle/AH6wjiC9Ah4oHk16A"}>
                                <div style={{ textDecorationLine: "none", padding: 15, marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>첫 구매 수수료 50% 할인!</div>
                            </a>
                        </div>
                    </div>

                    <MBottomTag marginTop={100} marginBottom={0} />

                    <div id="wishdeal_click" onClick={() => history.push("/wishdealdefault")} style={{
                        width: "90vw",
                        paddingTop: "3vw",
                        paddingBottom: "3vw",
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
                        bottom: "12vw",
                        alignSelf: "center",
                    }}>위시딜 신청하기</div>
                </div>
            </Mobile>
        </div>
    )
}

export function TimeShop({ img, title, sub, price, sale, currentPrice, stock }) {
    return (
        <div>
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
                            }}>{stock}개 남았어요!</div>
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
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#f72b2b",
                    marginBottom: 4,
                }}>
                    <span style={{
                        color: "#202426",
                        opacity: 0.6,
                        textDecorationLine: "line-through",
                        marginRight: 8,
                        fontWeight: "normal"
                    }}>{price}</span>
                    {sale}%
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#202426"
                }}>{currentPrice} 원</div>
            </div>
        </div>
    )
}

export function MTimeShop({ img, title, sub, price, sale, currentPrice, stock }) {
    return (
        <div>
            <div style={{
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
                            }}>{stock}개 남았어요!</div>
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
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#f72b2b",
                    marginBottom: 4,
                }}>
                    <span style={{
                        color: "#202426",
                        opacity: 0.6,
                        textDecorationLine: "line-through",
                        marginRight: 8,
                        fontWeight: "normal"
                    }}>{price}</span>
                    {sale}%
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202426"
                }}>{currentPrice} 원</div>
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
                    }}>김*명 (20대 남자)</div>
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
                    }}>김*명 (20대 남자)</div>
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