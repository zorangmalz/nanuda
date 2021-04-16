import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import Slider from "react-slick";
import { BsBookmark, BsUpload } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

export default function Home() {
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
                                backgroundColor: "#f2f3f8"
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
                            <div style={{
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

function Review({ num, name, property, date, content }) {
    return (
        <>
            <div style={{
                minWidth: 330,
                padding: 16,
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