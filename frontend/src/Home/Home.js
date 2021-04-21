import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import Slider from "react-slick";
import { BsBookmark, BsUpload, BsHeart } from "react-icons/bs";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BiTime } from "react-icons/bi";
import { useHistory } from "react-router";

export default function Home() {
    let history = useHistory()

    const reviewData = [
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
                            paddingBottom: 20,
                        }}>
                            <Header content="나누다" />
                            {/* 배너 넣어야됨 */}
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426",
                            }}>오늘의 타임딜</div>
                            <div style={{
                                fontSizeAdjust: 16,
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                color: "#202426",

                                marginTop: 4,
                                marginLeft: 20,
                                marginBottom: 16,
                            }}>최소 25%만 결제하세요.</div>
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
                                marginTop: 69,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426",
                            }}>나눠산 사람들</div>
                            <div style={{
                                fontSizeAdjust: 16,
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                color: "#202426",

                                marginTop: 4,
                                marginLeft: 20,
                                marginBottom: 16,
                            }}>다른사람들은 어떤걸 샀을까?</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                marginBottom: 32,
                                width: 440,
                                alignSelf: "center",
                            }}>
                                {reviewData.map(item =>
                                    <div onClick={() => history.push("/reviewpost")} style={{
                                        cursor: "pointer"
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",

                                        }}> <div style={{
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
                                        <div style={{
                                            width: 210,
                                            height: 210,
                                            borderRadius: 6,
                                            backgroundColor: "#f2f3f8",
                                            marginTop: 8
                                        }} />
                                        <div style={{ marginTop: 8, fontSize: 16, fontWeight: "bold", width: 210, }}>{item.title}</div>
                                        <div style={{
                                            fontSize: 14,
                                            opacity: 0.8,
                                            marginTop: 8,
                                            width: 210,
                                        }}>{item.content}</div>
                                        <div style={{
                                            color: "#26c1f0",
                                            marginTop: 16,
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            width: 210,
                                        }}>{item.money}원에 획득!</div>
                                    </div>
                                )}
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
                                marginTop: 72,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426",
                                marginBottom: 8,
                            }}>나눠본 사람들</div>
                            <div style={{
                                fontSizeAdjust: 16,
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                color: "#202426",
                                marginLeft: 20,
                            }}>첫 후기를 작성하면 2천 포인트를 드려요~</div>
                            <div style={{
                                marginLeft: 4,
                                overflowX: "scroll",
                                display: "flex",
                                flexDirection: "row",
                                padding: 16,
                            }}>
                                <Review
                                    num="5.0"
                                    name="김*명"
                                    property="(20대 남자)"
                                    date="2021.03.16"
                                    content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
                                />
                                <Review
                                    num="5.0"
                                    name="김*명"
                                    property="(20대 남자)"
                                    date="2021.03.16"
                                    content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
                                />
                            </div>
                            <div style={{
                                width: 440,
                                paddingTop: 32,
                                paddingBottom: 30,
                                paddingLeft: 20,
                                paddingRight: 20,
                                marginTop: 200,
                                backgroundColor: "#f2f3f8",
                                marginBottom: 100,
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSizeAdjust: 14,
                                            fontWeight: "bold",
                                            color: "#051a1a"
                                        }}>고객센터 (카카오톡 채널 상담)</div>
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSizeAdjust: 12,
                                            opacity: 0.6,
                                            color: "#202426",
                                            lineHeight: 1.5,
                                            marginTop: 8
                                        }}>
                                            운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                                            점심시간 평일 12:30 ~ 1:30
                                        </div>
                                    </div>
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 24,
                                        backgroundColor: "#fff500"
                                    }} />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    marginTop: 16,
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                        <div style={{
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            color: "#051a1a",
                                            fontFamily: "NotoSansCJKkr"
                                        }}>서비스 이용안내</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>공지사항</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>나누다는 어떤 서비스인가요?</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>자주 묻는 질문</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>제휴/파트너쉽 문의</div>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginRight: 128
                                    }}>
                                        <div style={{
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            color: "#051a1a",
                                            fontFamily: "NotoSansCJKkr"
                                        }}>서비스 정책</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>이용약관</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>개인정보 처리약관</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>마케팅수신 약관</div>
                                        <div style={{
                                            fontSize: 12,
                                            opacity: 0.8,
                                            fontFamily: "NotoSansCJKkr",
                                            color: "#202426",

                                            cursor: "pointer",
                                            marginTop: 8,
                                        }}>분할결제 약관</div>
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 32
                                }}>
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 24,
                                        backgroundColor: "#fff500",
                                        marginRight: 16
                                    }} />
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 24,
                                        backgroundColor: "#26c1f0",
                                        marginRight: 16
                                    }} />
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 24,
                                        backgroundColor: "#051a1a",
                                        marginRight: 16
                                    }} />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 32
                                }}>
                                    <div style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: "#000000",
                                        color: "#ffffff"
                                    }}>로고</div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 21,
                                        fontWeight: "bold",
                                        color: "#202426",
                                        marginLeft: 16
                                    }}>나누다</div>
                                </div>
                                <div style={{
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    opacity: 0.6,
                                    fontFamily: "NotoSansCJKkr",
                                    marginTop: 12
                                }}>(주) 나누다 홀딩스</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    opacity: 0.6,
                                    lineHeight: 1.8,
                                    color: "#051a1a",
                                    marginTop: 8
                                }}>
                                    사업자 등록번호 123-12-12345 <br />
                                    대표자 : 김현명, 이지행 <br />
                                    통신판매업 신고번호 : 제2021-서울종로-2302호 <br />
                                    주소 : 서울특별시 종로구 성균관로 35길 38  킹고 스타트업 스페이스 306호 <br />
                                </div>
                                <div style={{
                                    width: 440,
                                    opacity: 0.4,
                                    fontSize: 12,
                                    color: "#051a1a",
                                    fontFamily: "NotoSansCJKkr",
                                    marginTop: 32
                                }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.</div>
                            </div>
                            <div onClick={() => history.push("/wishdeal")} style={{
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
                    paddingBottom: 20,
                }}>
                    <Header content="나누다" />
                    {/* 배너 넣어야됨 */}
                    <div style={{
                        marginTop: 32,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        color: "#202426",
                    }}>오늘의 타임딜</div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#202426",

                        marginTop: 4,
                        marginLeft: "5%",
                        marginBottom: 16,
                    }}>최소 25%만 결제하세요.</div>
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
                        marginTop: 50,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        color: "#202426",
                    }}>나눠산 사람들</div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#202426",

                        marginTop: 4,
                        marginLeft: "5%",
                        marginBottom: 16,
                    }}>다른사람들은 어떤걸 샀을까?</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: 32,
                        width: "90%",
                        alignSelf: "center",
                    }}>
                        {reviewData.map(item =>
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
                        marginTop: 50,
                        marginLeft: '5%',
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        color: "#202426",
                        marginBottom: 8,
                    }}>나눠본 사람들</div>
                    <div style={{
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        color: "#202426",
                        marginLeft: "5%",
                    }}>첫 후기를 작성하면 2천 포인트를 드려요~</div>
                    <div style={{
                        marginLeft: 4,
                        display: "flex",
                        flexDirection: "row",
                        padding: "4%",
                        overflow: "auto",
                    }}>
                        <MReview
                            num="5.0"
                            name="김*명"
                            property="(20대 남자)"
                            date="2021.03.16"
                            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
                        />
                        <MReview
                            num="5.0"
                            name="김*명"
                            property="(20대 남자)"
                            date="2021.03.16"
                            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
                        />
                    </div>
                    <div style={{
                        width: "90%",
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        marginTop: 100,
                        backgroundColor: "#f2f3f8",
                        marginBottom: 70,
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "space-between"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSizeAdjust: 12,
                                    fontWeight: "bold",
                                    color: "#051a1a"
                                }}>고객센터 (카카오톡 채널 상담)</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 10,
                                    opacity: 0.6,
                                    color: "#202426",
                                    lineHeight: 1.5,
                                    marginTop: 8
                                }}>
                                    운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                                            점심시간 평일 12:30 ~ 1:30
                                        </div>
                            </div>
                            <div style={{
                                width: 36,
                                height: 36,
                                borderRadius: 18,
                                backgroundColor: "#fff500"
                            }} />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            marginTop: 12,
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <div style={{
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    fontFamily: "NotoSansCJKkr"
                                }}>서비스 이용안내</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>공지사항</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>나누다는 어떤 서비스인가요?</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>자주 묻는 질문</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>제휴/파트너쉽 문의</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginRight: "30%"
                            }}>
                                <div style={{
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    fontFamily: "NotoSansCJKkr"
                                }}>서비스 정책</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>이용약관</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>개인정보 처리약관</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>마케팅수신 약관</div>
                                <div style={{
                                    fontSize: 10,
                                    opacity: 0.8,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",

                                    cursor: "pointer",
                                    marginTop: 6,
                                }}>분할결제 약관</div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 24
                        }}>
                            <div style={{
                                width: 36,
                                height: 36,
                                borderRadius: 18,
                                backgroundColor: "#fff500",
                                marginRight: 12
                            }} />
                            <div style={{
                                width: 36,
                                height: 36,
                                borderRadius: 18,
                                backgroundColor: "#26c1f0",
                                marginRight: 12
                            }} />
                            <div style={{
                                width: 36,
                                height: 36,
                                borderRadius: 18,
                                backgroundColor: "#051a1a",
                                marginRight: 12
                            }} />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 24
                        }}>
                            <div style={{
                                width: 26,
                                height: 26,
                                backgroundColor: "#000000",
                                color: "#ffffff"
                            }}>로고</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginLeft: 12
                            }}>나누다</div>
                        </div>
                        <div style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#051a1a",
                            opacity: 0.6,
                            fontFamily: "NotoSansCJKkr",
                            marginTop: 10
                        }}>(주) 나누다 홀딩스</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            opacity: 0.6,
                            lineHeight: 1.8,
                            color: "#051a1a",
                            marginTop: 6
                        }}>
                            사업자 등록번호 123-12-12345 <br />
                                    대표자 : 김현명, 이지행 <br />
                                    통신판매업 신고번호 : 제2021-서울종로-2302호 <br />
                                    주소 : 서울특별시 종로구 성균관로 35길 38  킹고 스타트업 스페이스 306호 <br />
                        </div>
                        <div style={{
                            width: "90%",
                            opacity: 0.4,
                            fontSize: 12,
                            color: "#051a1a",
                            fontFamily: "NotoSansCJKkr",
                            marginTop: 28
                        }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.</div>
                    </div>
                    <div onClick={() => history.push("/wishdeal")} style={{
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

function Review({ num, name, property, date, content }) {
    let history = useHistory()
    return (
        <>
            <div onClick={() => history.push("/servicereview")} style={{
                minWidth: 330,
                padding: 16,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                marginRight: 20,
                borderRadius: 6,
                cursor: "pointer",
            }}>
                <div style={{
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#26c1f0",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{num}/5.0</div>
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
                    }}>{name}({property})</div>
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

function MReview({ num, name, property, date, content }) {
    return (
        <div>
            <div style={{
                width: "82vw",
                padding: "4vw",
                paddingBottom: "10%",
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
                }}>{num}/5.0</div>
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
                    }}>{name}({property})</div>
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