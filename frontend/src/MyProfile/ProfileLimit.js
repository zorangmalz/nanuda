import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function ProfileLimit() {
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
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="나누다 한도" goBack={true} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: 20,
                        }}>김현명님의 총 한도</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 32,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 16,
                            marginBottom: 16,
                            marginLeft: 20,
                        }}>300,000 원</div>
                        <Progressbar width={440} percent={100} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#26c1f0",

                            marginTop: 8,
                            marginRight: 20,
                            alignSelf: "flex-end",
                        }}>총한도 : 300,000 원</div>
                        <div style={{
                            width: 408,
                            marginTop: 16,
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            alignSelf: "center",

                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#202426"
                            }}>나누다 팁!</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.8,
                                color: "#202426",
                                marginTop: 4,
                            }}>현재 한도 금액은 최대 분할결제가 가능한 금액을 의미합니다. <br />
                                예를 들어 60만원 짜리 상품을 구매하는 경우 30만원을 선결제 후 <br />
                                나머지 30만원을 2~4 분할 결제 할 수 있습니다. <br />
                                분할결제를 완료한 만큼 한도가 회복됩니다. </div>
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#20246",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>한도 증가 미션</div>
                        <div style={{
                            width: 408,
                            height: 120,
                            padding: "0px 16px",
                            borderRadius: 6,
                            border: "1px solid #25c1f0",
                            backgroundColor: "#ffffff",
                            marginTop: 16,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            alignSelf: "center",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <div style={{
                                    width: 72,
                                    height: 48,
                                    backgroundColor: "#26f0b0"
                                }} />
                                <div style={{ marginLeft: 16 }}>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#202426",
                                        marginBottom: 8,
                                    }}>작업 인증하기</div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        opacity: 0.6,
                                        fontSize: 14,
                                        color: "#202426"
                                    }}>한도 10만원 증가</div>
                                </div>
                            </div>
                            <div style={{
                                padding: "7px 14px",
                                borderRadius: 6,
                                backgroundColor: "#051a1a",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: "center",

                                cursor: "pointer",
                            }}>진행 가능</div>
                        </div>
                        <div style={{
                            width: 408,
                            height: 120,
                            padding: "0px 16px",
                            borderRadius: 6,
                            border: "1px solid #25c1f0",
                            backgroundColor: "#ffffff",
                            marginTop: 16,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",
                        }}>
                            <div style={{
                                width: 72,
                                height: 72,
                                borderRadius: 36,
                                backgroundColor: "#f2f3f8"
                            }} />
                            <div style={{ marginLeft: 16 }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginBottom: 8,
                                }}>추가 예정</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 14,
                                    color: "#202426"
                                }}>다양한 미션을 준비하고 있어요.</div>
                            </div>
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#20246",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>완료된 미션</div>
                        <div style={{
                            width: 408,
                            height: 120,
                            padding: "0px 16px",
                            borderRadius: 6,
                            border: "1px solid #25c1f0",
                            backgroundColor: "#ffffff",
                            marginTop: 16,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",
                        }}>
                            <div style={{
                                width: 72,
                                height: 72,
                                borderRadius: 36,
                                backgroundColor: "#fff500"
                            }} />
                            <div style={{ marginLeft: 16 }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginBottom: 8,
                                }}>완료한 미션이 없습니다.</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 14,
                                    color: "#202426"
                                }}>미션을 수행하고 한도를 늘려보세요.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="나누다 한도" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 28,
                        marginLeft: "5vw",
                    }}>김현명님의 총 한도</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 14,
                        marginBottom: 14,
                        marginLeft: "5vw",
                    }}>300,000 원</div>
                    <Progressbar width="90vw" percent={100} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#26c1f0",

                        marginTop: 4,
                        marginRight: "5vw",
                        alignSelf: "flex-end",
                    }}>총한도 : 300,000 원</div>
                    <div style={{
                        width: "82vw",
                        marginTop: 12,
                        padding: "4vw",
                        borderRadius: 6,
                        backgroundColor: "#f2f3f8",
                        alignSelf: "center",

                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>나누다 팁!</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            opacity: 0.8,
                            color: "#202426",
                            marginTop: 4,
                        }}>현재 한도 금액은 최대 분할결제가 가능한 금액을 의미합니다.
                            예를 들어 60만원 짜리 상품을 구매하는 경우 30만원을 선결제 후
                            나머지 30만원을 2~4 분할 결제 할 수 있습니다.
                                분할결제를 완료한 만큼 한도가 회복됩니다. </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#20246",

                        marginTop: 28,
                        marginLeft: "5vw",
                    }}>한도 증가 미션</div>
                    <div style={{
                        width: "82vw",
                        height: 90,
                        paddingLeft: "4vw",
                        paddingRight: "4vw",
                        borderRadius: 6,
                        border: "1px solid #25c1f0",
                        backgroundColor: "#ffffff",
                        marginTop: 12,

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        alignSelf: "center",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <div style={{
                                width: 60,
                                height: 26,
                                backgroundColor: "#26f0b0"
                            }} />
                            <div style={{ marginLeft: 12 }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginBottom: 4,
                                }}>작업 인증하기</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 12,
                                    color: "#202426"
                                }}>한도 10만원 증가</div>
                            </div>
                        </div>
                        <div style={{
                            padding: "6px 12px",
                            borderRadius: 6,
                            backgroundColor: "#051a1a",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center",

                            cursor: "pointer",
                        }}>진행 가능</div>
                    </div>
                    <div style={{
                        width: "82vw",
                        height: 90,
                        paddingLeft: "4vw",
                        paddingRight: "4vw",
                        borderRadius: 6,
                        border: "1px solid #25c1f0",
                        backgroundColor: "#ffffff",
                        marginTop: 12,

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                    }}>
                        <div style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: "#f2f3f8"
                        }} />
                        <div style={{ marginLeft: 12 }}>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#202426",
                                marginBottom: 4,
                            }}>추가 예정</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#202426"
                            }}>다양한 미션을 준비하고 있어요.</div>
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#20246",

                        marginTop: 28,
                        marginLeft: "5vw",
                    }}>완료된 미션</div>
                    <div style={{
                        width: "82vw",
                        height: 90,
                        paddingLeft: "4vw",
                        paddingRight: "4vw",
                        borderRadius: 6,
                        border: "1px solid #25c1f0",
                        backgroundColor: "#ffffff",
                        marginTop: 12,

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                    }}>
                        <div style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: "#fff500"
                        }} />
                        <div style={{ marginLeft: 12 }}>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#202426",
                                marginBottom: 4,
                            }}>완료한 미션이 없습니다.</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#202426"
                            }}>미션을 수행하고 한도를 늘려보세요.</div>
                        </div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}

function Progressbar({ width, percent }) {
    return (
        <div style={{
            width: width,
            height: 8,
            borderRadius: 12,
            backgroundColor: "#dbdbdb",
            alignSelf: "center",
        }}>
            <div style={{
                width: percent + "%",
                height: 8,
                borderRadius: 12,
                backgroundColor: "#26c1f0"
            }} />
        </div>
    )
}