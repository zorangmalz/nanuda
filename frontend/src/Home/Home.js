import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { BottomTag, HomeHeader, MBottomTag, MHomeHeader, NameMask } from "../Style";
import Slider from "react-slick";
import { BsBookmark, BsUpload } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { useHistory } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

export default function Home() {
    let history = useHistory()

    //nanuda data
    const nanudaData = [
        {
            id: "CVIANAN_123",
            pic: "#f2f3f8",
            title: "Prada Berry Expensive 123",
            content: "타임딜로 빠르게 구매했어요!! 여자친구가 진짜 좋아해요",
            money: 70000
        }, {
            id: "CVIANAN_123",
            pic: "#f2f3f8",
            like: 100,
            title: "Prada Berry Expensive 123",
            content: "타임딜로 빠르게 구매했어요!! 여자친구가 진짜 좋아해요",
            money: 70000
        },
    ]

    //Get Review Data
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        setReviewData([])
        fetch("http://127.0.0.1:8000/servicereview", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                var array = []
                for (var i = 0; i < 2; i++) {
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
                    <WebIntro />
                    {/* 절반을 나눔 */}
                    <div style={{
                        width: "50%",
                        minWidth: 480,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <HomeHeader />
                            {/* 배너 넣어야됨 */}
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
                                }}>나누다딜</div>
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
                            }}>할인된 상품을 BNPL하세요!</div>
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
                                    title="PRADA"
                                    sub="PRADA Model 23-9 limited edition berry expensive"
                                    price="600000"
                                    currentPrice="480000"
                                    stock={2}
                                />
                                <TimeShop
                                    title="PRADA"
                                    sub="PRADA Model 23-9 limited edition berry expensive"
                                    price="600000"
                                    currentPrice="480000"
                                    stock={0}
                                    time="내일 오전 9:00 오픈"
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
                                }}>나눠산 사람들</div>
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
                                marginBottom: 32,
                                width: 440,
                                alignSelf: "center",
                            }}>
                                {nanudaData.map(item => <div style={{
                                    cursor: "pointer"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}>
                                        <div style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            backgroundColor: item.pic
                                        }}>
                                        </div>
                                        <div style={{
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            marginLeft: 8,
                                            marginTop: 6
                                        }}>{item.id} </div>
                                    </div>
                                    <div onClick={() => history.push("/reviewpost")} style={{
                                        width: 210,
                                        height: 210,
                                        borderRadius: 6,
                                        backgroundColor: "#f2f3f8",
                                        marginTop: 8
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
                                        }}>4.5</div>
                                    </div>
                                    <div style={{
                                        fontSize: 14,
                                        opacity: 0.8,
                                        marginTop: 8,
                                        width: 210,
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.content}</div>
                                    <div style={{
                                        color: "#26c1f0",
                                        marginTop: 4,
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.follow}원에 획득 완료</div>
                                </div>)}
                            </div>
                            <div style={{
                                width: 440,
                                marginLeft: 20,
                                borderRadius: 6,
                            }}>
                                <Slider dotsClass="desktop-slick-dots"
                                    dots={true}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    adaptiveHeight={true}
                                    arrows={false}
                                >
                                    <div>
                                        <div style={{
                                            width: 364,
                                            paddingTop: 32,
                                            paddingBottom: 32,
                                            paddingLeft: 32,
                                            paddingRight: 44,
                                            backgroundColor: "#cb1a86",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            outline: 0,
                                            borderRadius: 6,
                                        }}>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start"
                                            }}>
                                                <div style={{
                                                    fontSize: 18,
                                                    fontFamily: "NotoSansCJKkr",
                                                    color: "#ffffff",
                                                }}>자주 물어보는 질문들을 정리해봤어요!</div>
                                                <div style={{
                                                    fontSize: 24,
                                                    fontWeight: "bold",
                                                    fontFamily: "NotoSansCJKkr",
                                                    color: "#ffffff",
                                                    marginTop: 16,
                                                }}>나누다 FAQ 총정리!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{
                                            width: 364,
                                            paddingTop: 32,
                                            paddingBottom: 32,
                                            paddingLeft: 32,
                                            paddingRight: 44,
                                            backgroundColor: "#cb1a86",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            borderRadius: 6,
                                        }}>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start"
                                            }}>
                                                <div style={{
                                                    fontSize: 18,
                                                    fontFamily: "NotoSansCJKkr",
                                                    color: "#ffffff",
                                                }}>자주 물어보는 질문들을 정리해봤어요!</div>
                                                <div style={{
                                                    fontSize: 24,
                                                    fontWeight: "bold",
                                                    fontFamily: "NotoSansCJKkr",
                                                    color: "#ffffff",
                                                    marginTop: 16,
                                                }}>나누다 FAQ 총정리!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{
                                            width: 364,
                                            paddingTop: 32,
                                            paddingBottom: 32,
                                            paddingLeft: 32,
                                            paddingRight: 44,
                                            backgroundColor: "#cb1a86",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            borderRadius: 6,
                                        }}>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start"
                                            }}>
                                                <div style={{
                                                    fontSize: 18,
                                                    fontFamily: "NotoSansCJKkr",
                                                    color: "#ffffff",
                                                }}>자주 물어보는 질문들을 정리해봤어요!</div>
                                                <div style={{
                                                    fontSize: 24,
                                                    fontWeight: "bold",
                                                    fontFamily: "NotoSansCJKkr",
                                                    color: "#ffffff",
                                                    marginTop: 16,
                                                }}>나누다 FAQ 총정리!</div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
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
                                }}>나눠본 사람들</div>
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
                                fontSizeAdjust: 16,
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                color: "#202426",
                                marginLeft: 20,
                            }}>아직도 나누다 이용을 망설이시나요?</div>
                            <div style={{
                                marginLeft: 4,
                                overflowX: "scroll",
                                display: "flex",
                                flexDirection: "row",
                                padding: 16,
                            }}>
                                {reviewData.map(item =>
                                    <Review
                                        item={item}
                                    />
                                )}
                            </div>
                            <BottomTag marginTop={200} marginBottom={0} />
                            <div onClick={() => history.push("/wishdealdefault")} style={{
                                width: 440,
                                marginLeft: 20,
                                marginRight: 20,
                                paddingTop: 21,
                                paddingBottom: 21,
                                textAlign: "center",
                                backgroundColor: "#2dd9d3",
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
                        </div>
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
                    {/* 배너 넣어야됨 */}
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
                        }}>나누다딜</div>
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
                    }}>할인된 상품을 BNPL하세요!</div>
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
                            title="PRADA"
                            sub="PRADA Model 23-9 limited edition berry expensive"
                            price="600000"
                            currentPrice="480000"
                            stock={2}
                        />
                        <MTimeShop
                            title="PRADA"
                            sub="PRADA Model 23-9 limited edition berry expensive"
                            price="600000"
                            currentPrice="480000"
                            stock={0}
                            time="내일 오전 9:00 오픈"
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
                        }}>나눠산 사람들</div>
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
                        marginBottom: "8vw",
                        width: "90%",
                        alignSelf: "center",
                    }}>
                        {nanudaData.map(item =>
                            <div onClick={() => history.push("/reviewpost")} style={{
                                cursor: "pointer",
                                width: "42.5vw",
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <div style={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: 12,
                                        backgroundColor: item.pic
                                    }}>
                                    </div>
                                    <div style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        marginLeft: 8,
                                        fontFamily: "AvenirNext"
                                    }}>{item.id} </div>
                                </div>
                                <div style={{
                                    width: "42.5vw",
                                    height: "42.5vw",
                                    borderRadius: 6,
                                    backgroundColor: "#f2f3f8",
                                    marginTop: 8
                                }} />
                                <div style={{ marginTop: 8, fontSize: 12, fontWeight: "bold", width: "42.5vw", fontFamily: "AvenirNext" }}>{item.title}</div>
                                <div style={{
                                    fontSize: 12,
                                    opacity: 0.8,
                                    marginTop: 8,
                                    width: "42.5vw",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.content}</div>
                                <div style={{
                                    color: "#26c1f0",
                                    marginTop: 12,
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    width: "42.5vw",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.money}원에 획득!</div>
                            </div>
                        )}
                    </div>
                    <div style={{
                        width: "90%",
                        marginLeft: "5%",
                        borderRadius: 6,
                    }}>
                        <Slider dotsClass="desktop-slick-dots"
                            dots={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            adaptiveHeight={true}
                            arrows={false}
                        >
                            <div>
                                <div style={{
                                    width: "77%",
                                    paddingTop: "10%",
                                    paddingBottom: "10%",
                                    paddingLeft: "10%",
                                    paddingRight: "13%",
                                    backgroundColor: "#cb1a86",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    outline: 0,
                                    borderRadius: 6,
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start"
                                    }}>
                                        <div style={{
                                            fontSize: 16,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#ffffff",
                                        }}>자주 물어보는 질문들을 정리해봤어요!</div>
                                        <div style={{
                                            fontSize: 22,
                                            fontWeight: "bold",
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#ffffff",
                                            marginTop: 12,
                                        }}>나누다 FAQ 총정리!</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
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
                        }}>나눠본 사람들</div>
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
                    }}>아직도 나누다 이용을 망설이시나요?</div>
                    <div style={{
                        marginLeft: 4,
                        display: "flex",
                        flexDirection: "row",
                        padding: "4%",
                        overflow: "auto",
                    }}>
                        {reviewData.map(item =>
                            <MReview
                                item={item}
                            />
                        )}
                    </div>
                    <MBottomTag marginTop={100} marginBottom={0} />
                    <div onClick={() => history.push("/wishdealdefault")} style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginRight: "5%",
                        paddingTop: "3%",
                        paddingBottom: "3%",
                        textAlign: "center",
                        backgroundColor: "#2dd9d3",
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
                </div>
            </Mobile>
        </>
    )
}

function TimeShop({ title, sub, price, currentPrice, stock, time }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: 210,
            }}>
                <div style={{
                    width: "100%",
                    height: 210,
                    borderRadius: 6,
                    marginBottom: 16,
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    position: "relative",
                }}>
                    {stock > 0 ?
                        <div style={{
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            position: "absolute",
                            top: 10,
                            left: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 8,
                        }}>
                            <BiTime size={16} color="#f72b2b" />
                            <div style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#f72b2b",
                                fontFamily: "NotoSansCJKkr",
                                marginLeft: 4,
                            }}>{stock}개 남았어요!</div>
                        </div>
                        :
                        <div style={{
                            top: 0,
                            width: 210,
                            height: 210,
                            opacity: 0.4,
                            borderRadius: 6,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#000000"
                        }}>
                            <div style={{
                                fontSize: 21,
                                fontFamily: "NotoSansCJKkr",
                                fontWeight: "bold",
                                color: "#ffffff",
                                opacity: 1,
                            }}>{time}</div>
                        </div>
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
                        fontFamily: "AvenirNext",
                        fontSize: 18,
                        color: "#202426",
                    }}>{title}</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <BsUpload size={20} style={{
                            marginRight: 4,
                            cursor: "pointer"
                        }} />
                        <BsBookmark size={20} style={{
                            cursor: "pointer"
                        }} />
                    </div>
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
                    }}>{price} 원 </span>
                    20%
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#202426"
                }}>{currentPrice} 원</div>
            </div>
        </>
    )
}

function MTimeShop({ title, sub, price, currentPrice, stock, time }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "42.5vw",
            }}>
                <div style={{
                    width: "100%",
                    height: "42.5vw",
                    borderRadius: 6,
                    marginBottom: 12,
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    position: "relative",
                }}>
                    {stock > 0 ?
                        <div style={{
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            position: "absolute",
                            top: 8,
                            left: 8,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 8,
                        }}>
                            <BiTime size={14} color="#f72b2b" />
                            <div style={{
                                fontSize: 10,
                                fontWeight: "bold",
                                color: "#f72b2b",
                                fontFamily: "NotoSansCJKkr",
                                marginLeft: 4,
                            }}>{stock}개 남았어요!</div>
                        </div>
                        :
                        <div style={{
                            top: 0,
                            width: "42.5vw",
                            height: "42.5vw",
                            opacity: 0.4,
                            borderRadius: 6,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#000000"
                        }}>
                            <div style={{
                                fontSize: 16,
                                fontFamily: "NotoSansCJKkr",
                                fontWeight: "bold",
                                color: "#ffffff",
                                opacity: 1,
                            }}>{time}</div>
                        </div>
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
                        fontFamily: "AvenirNext",
                        fontSize: 16,
                        color: "#202426",
                    }}>{title}</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <BsUpload size={18} style={{
                            marginRight: 4,
                            cursor: "pointer"
                        }} />
                        <BsBookmark size={18} style={{
                            cursor: "pointer"
                        }} />
                    </div>
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
                    }}>{price} 원 </span>
                    20%
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202426"
                }}>{currentPrice} 원</div>
            </div>
        </>
    )
}

function Review({ item }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age/10)
    var gender = item.user_gender === 0 ? "남성" : "여성"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
    return (
        <>
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
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#26c1f0",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{score}/5.0</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginBottom: 8,
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
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr"
                }}>{content}</div>
            </div>
        </>
    )
}

function MReview({ item }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age/10)
    var gender = item.user_gender === 0 ? "남성" : "여성"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
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
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#26c1f0",
                    marginBottom: 6,
                    fontFamily: "NotoSansCJKkr"
                }}>{score}/5.0</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginBottom: 6,
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
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr"
                }}>{content}</div>
            </div>
        </div>
    )
}