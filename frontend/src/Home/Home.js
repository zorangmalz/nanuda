import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { AiOutlineClose } from "react-icons/ai";

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
                            alignItems: "center",
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
                                fontSize: "bold",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 21,
                                color: "#202426"
                            }}>오늘의 타임딜</div>
                            <div style={{
                                fontSizeAdjust: 16,
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                color: "#202426",

                                marginTop: 4,
                                marginLeft: 20,
                            }}>최소 25%만 결제하세요.</div>
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
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                
            </Mobile>
        </>
    )
}