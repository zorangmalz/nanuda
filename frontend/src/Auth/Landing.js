import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import Slider from "react-slick"

export default function Landing() {
    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",

                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="나누다 시작하기" />
                        <Slider dotsClass="desktop-landing-slick-dots"
                            dots={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            adaptiveHeight={true}
                            autoplay={true}
                            autoplaySpeed={2500}
                            arrows={false}
                        >
                            {/* 첫번째 */}
                            <div>
                                <div style={{
                                    marginTop: 32,
                                    marginLeft: 20,
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                                    }}>사고 싶은게 있는데</div>
                                    <div style={{ marginLeft: 5, color: "#26c1f0", fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>너무 큰 금액</div>
                                </div>
                                <div style={{
                                    marginLeft: 20,
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        fontSize: 24, fontWeight: "bold", color: "#26c1f0", fontFamily: "NotoSansCJKkr"
                                    }}>때문에 고민</div>
                                    <div style={{ fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>한 경험이 있나요?</div>
                                </div>
                                <div style={{
                                    marginTop: 32,
                                    marginLeft: 172,
                                    backgroundColor: "#f2f3f8",
                                    width: 256,
                                    padding: 16,
                                    borderRadius: 10,
                                    boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)",

                                    textAlign: "left",
                                    lineHeight: 1.5,
                                    fontSize: 16,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426"
                                }}>아.. 노트북이 꼭 필요한데 ㅠㅠ <br /> 지금 사면 생활비가 너무 부족해...</div>
                                <div style={{
                                    border: "solid 1px rgba(0,0,0,0.12)",
                                    marginTop: 32,
                                    marginLeft: 20,
                                    backgroundColor: "#ffffff",
                                    width: 239,
                                    padding: 16,
                                    borderRadius: 10,
                                    boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)",
                                    fontSize: 16,
                                    fontFamily: "NotoSansCJKkr",
                                    textAlign: "left",
                                    color: "#202426"
                                }}>그냥 나눠서 결제하면 되는거 아니야?</div>
                                <div style={{
                                    marginTop: 32,
                                    marginLeft: 172,
                                    backgroundColor: "#f2f3f8",
                                    width: 256,
                                    padding: 16,
                                    borderRadius: 10,
                                    boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)",

                                    textAlign: "left",
                                    lineHeight: 1.5,
                                    fontSize: 16,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426"
                                }}>아.. 노트북이 꼭 필요한데 ㅠㅠ <br /> 지금 사면 생활비가 너무 부족해...</div>
                                <div style={{
                                    border: "solid 1px rgba(0,0,0,0.12)",
                                    marginTop: 32,
                                    marginLeft: 20,
                                    backgroundColor: "#ffffff",
                                    width: 239,
                                    padding: 16,
                                    borderRadius: 10,
                                    boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)",
                                    fontSize: 16,
                                    fontFamily: "NotoSansCJKkr",
                                    textAlign: "left",
                                    color: "#202426"
                                }}>나누다에서 나눠서 결제해! <br /> 할부 이자 없이 구매할 수 있어 ㅎㅎ</div>
                                <div style={{
                                    width: 408,
                                    marginLeft: 20,
                                    marginTop: 32,
                                    padding: 16,
                                    backgroundColor: "#D4F7F6",
                                    boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)",
                                    borderRadius: 10,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr",
                                    marginBottom: 32,
                                }}>지금 가입하고 신용등급, 할부이자 상관없이 분할 결제해봐!</div>
                            </div>
                            {/* 두번째 */}
                            <div>
                                <div style={{
                                    marginTop: 32,
                                    marginLeft: 20,
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426"
                                }}>누다에서<span style={{ color: "#26c1f0", marginLeft: 4, }}>원하는 기간을 선택</span>하고</div>
                                <div style={{
                                    marginLeft: 20,
                                    fontSize: 24, fontWeight: "bold", color: "#26c1f0", fontFamily: "NotoSansCJKkr"
                                }}>간편하게 분할결제하세요<span style={{ color: "#202426" }}>!</span></div>
                                <div style={{ marginTop: 32, marginLeft: 20, fontSize: 21, fontWeight: "bold", color: "#202426", fontFamily: "NotoSansCJKkr" }}>1. 원하는 상품을 고르고!</div>
                                <div style={{
                                    marginTop: 16,
                                    marginLeft: 20,
                                    backgroundColor: "#f2f3f8",
                                    width: 440,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    borderRadius: 6, display: "flex", flexDirection: "row", alignItems: "center"
                                }}>
                                    <div style={{}}>아이콘 자리</div>
                                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, fontSize: 18, fontWeight: 500, fontFamily: "NotoSansCJKkr" }}>
                                        <div>지금 사기엔 비싼 노트북</div>
                                        <div style={{ marginTop: 8, color: "#f72b2b", fontWeight: "bold" }}>가격 : 200만원</div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 32, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>2. 분할 결제 옵션 선택하면</div>
                                <div style={{ marginTop: 32, marginLeft: 20, fontSize: 21, fontWeight: "bold", color: "#202426", fontFamily: "NotoSansCJKkr" }}>1. 원하는 상품을 고르고!</div>
                                <div style={{
                                    marginTop: 16,
                                    marginLeft: 20,
                                    backgroundColor: "#f2f3f8",
                                    width: 440,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    borderRadius: 6, display: "flex", flexDirection: "row", alignItems: "center"
                                }}>
                                    <div style={{}}>아이콘 자리</div>
                                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, fontSize: 18, fontWeight: 500, fontFamily: "NotoSansCJKkr" }}>
                                        <div>3개월 분할결제 선택 후 25% 결제</div>
                                        <div style={{ marginTop: 8, color: "#2554d5", fontWeight: "bold" }}>첫 결제금 : 50 만원</div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 32, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>3. 단돈 50만원에 획득!</div>
                                <div style={{ marginTop: 32, marginLeft: 20, fontSize: 21, fontWeight: "bold", color: "#202426", fontFamily: "NotoSansCJKkr" }}>1. 원하는 상품을 고르고!</div>
                                <div style={{
                                    marginTop: 16,
                                    marginLeft: 20,
                                    backgroundColor: "#f2f3f8",
                                    width: 440,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    borderRadius: 6, display: "flex", flexDirection: "row", alignItems: "center"
                                }}>
                                    <div style={{}}>아이콘 자리</div>
                                    <div style={{
                                        marginLeft: 32, fontSize: 18, fontWeight: "bold", fontFamily: "NotoSansCJKkr", color: "#051a1a",
                                    }}>[Web 발신] 택배가 도착했습니다.</div>
                                </div>
                            </div>
                            {/* 세번째 */}
                            <div>
                                <div style={{
                                    marginTop: 32,
                                    marginLeft: 20,
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                                    }}>누다와 함께</div>
                                    <div style={{ marginLeft: 5, color: "#26c1f0", fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>똑똑한 소비생활</div>
                                </div>
                                <div style={{
                                    marginLeft: 20,
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{ fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>시작해볼까요?</div>
                                </div>
                                <div style={{ marginTop: 32, marginLeft: 20, display: "flex", flexDirection: "row" }}>
                                    <div style={{ fontSize: 32, fontWeight: 500 }}>100,000 명</div>
                                    <div style={{ marginTop: 7, fontSize: 24 }}>의 사람들이</div>
                                </div>
                                <div style={{ marginTop: 32, marginLeft: 20, display: "flex", flexDirection: "row" }}>
                                    <div style={{ fontSize: 32, fontWeight: 500 }}>200,000 개</div>
                                    <div style={{ marginTop: 7, fontSize: 24 }}>의 상품을</div>
                                </div>
                                <div style={{ marginTop: 32, marginLeft: 20, display: "flex", flexDirection: "row" }}>
                                    <div style={{ fontSize: 32, fontWeight: 500 }}>똑똑하게 분할 결제</div>
                                    <div style={{ marginTop: 7, fontSize: 24, fontWeight: "normal" }}>하고</div>
                                </div>
                                <div style={{ marginTop: 7, marginLeft: 20, fontSize: 24 }}>있습니다</div>
                            </div>
                        </Slider>
                        <div style={{
                            position: "fixed",
                            zIndex: 5,
                            bottom: 76,
                            borderRadius: 6,
                            width: 440,
                            marginLeft: 20,
                            marginRight: 20,
                            backgroundColor: "#26c1f0",
                            paddingTop: 15,
                            paddingBottom: 15,
                            cursor: "pointer",

                            textAlign: "center",
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>시작하기</div>
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
                    <Header content="나눠산 사람들" />
                    <div style={{
                        marginTop: 32,
                        marginLeft: 20,
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <div style={{
                            fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                        }}>
                            사고 싶은게 있는데
                            </div>
                        <div style={{ marginLeft: 5, color: "#26c1f0", fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>너무 큰 금액</div>
                    </div>
                    <div style={{
                        marginLeft: 20,
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <div style={{
                            fontSize: 24, fontWeight: "bold", color: "#26c1f0", fontFamily: "NotoSansCJKkr"
                        }}>
                            때문에 고민
                            </div>
                        <div style={{ fontSize: 24, fontWeight: "bold", fontFamily: "NotoSansCJKkr" }}>한 경험이 있나요?</div>
                    </div>
                    <div style={{ marginTop: 32, marginRight: 20, backgroundColor: "#f2f3f8", width: 288, height: 80, borderRadius: 10, boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)" }}>
                        <div style={{ marginTop: 20, marginLeft: 16, fontSize: 16, fontFamily: "NotoSansCJKkr" }}>아.. 노트북이 꼭 필요한데 ㅠㅠ</div>
                        <div style={{ marginTop: 4, marginLeft: 16, fontSize: 16, fontFamily: "NotoSansCJKkr" }}>지금 사면 생활비가 너무 부족해... </div>
                    </div>
                    <div style={{ border: "solid 1px rgba(0,0,0,0.12)", marginTop: 32, marginLeft: 20, backgroundColor: "#ffffff", width: 288, height: 56, borderRadius: 10, boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)" }}>
                        <div style={{ marginTop: 20, marginLeft: 16, fontSize: 16, fontFamily: "NotoSansCJKkr" }}>그냥 나눠서 결제하면 되는거 아니야?</div>

                    </div>
                    <div style={{ marginTop: 32, marginLeft: 172, backgroundColor: "#f2f3f8", width: 288, height: 80, borderRadius: 10, boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)" }}>
                        <div style={{ marginTop: 20, marginLeft: 16, fontSize: 16, fontFamily: "NotoSansCJKkr" }}>신용카드도 없는데 어떻게 그렇게 하는</div>
                        <div style={{ marginTop: 4, marginLeft: 16, fontSize: 16, fontFamily: "NotoSansCJKkr" }}>거야? </div>
                    </div>
                    <div style={{ border: "solid 1px rgba(0,0,0,0.12)", marginTop: 32, marginLeft: 20, backgroundColor: "#ffffff", width: 288, height: 80, borderRadius: 10, boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)" }}>
                        <div style={{ marginTop: 20, marginLeft: 16, fontSize: 16, fontFamily: "NotoSansCJKkr" }}>나누다에서 나눠서 결제해!</div>
                        <div style={{ marginTop: 4, marginLeft: 16, fontSize: 16, fontFamily: "NotoSansCJKkr" }}>할부 이자 없이 구매할 수 있어 ㅎㅎ </div>
                    </div>
                    <div style={{ width: "100%", marginLeft: 20, marginTop: 32, height: 56, backgroundColor: "#D4F7F6", boxShadow: "0 3px 6px 0 rgba(38, 37, 37, 0.12)", borderRadius: 10 }}>
                        <div style={{ marginTop: 20, marginLeft: 16, fontWeight: "bold", fontSize: 16, opacity: 1, color: "#202426", fontFamily: "NotoSansCJKkr" }}>지금 가입하고 신용등급, 할부이자 상관없이 분할 결제해봐!</div>
                    </div>
                    <div style={{
                        position: "fixed",
                        zIndex: 5,
                        bottom: 76,
                        borderRadius: 8,
                        width: "90%",
                        height: 56,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 52,
                        backgroundColor: "#26c1f0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}><div style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>시작하기</div></div>
                </div>
            </Mobile>
        </>
    )
}