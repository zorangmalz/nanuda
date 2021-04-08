import React, { useState, useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";

function reducer(state, action) {
    switch (action.type) {
        case 'TWO':
            return 2;
        case 'THREE':
            return 3;
        case 'FOUR':
            return 4;
        default:
            return state;
    }
}

export default function TOrderSheet() {
    const [register, setRegister] = useState(false);
    const [number, dispatch] = useReducer(reducer, 2);
    const onTwo = () => {
        dispatch({ type: 'TWO' });
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
    };

    const payment = [
        {
            num: "1",
            date: "3/29",
            money: "240000",
        },
        {
            num: "2",
            date: "4/29",
            money: "240000",
        },
        {
            num: "3",
            date: "5/29",
            money: "-",
        },
        {
            num: "4",
            date: "6/29",
            money: "-",
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
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="주문서" />
                            <div style={{
                                fontSize: 18,
                                marginLeft: 20,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 32,
                                marginBottom: 16
                            }}>상품정보</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                marginRight: 20,
                                marginLeft: 20,
                            }}>
                                <div style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: 6,
                                    marginRight: 16,
                                    backgroundColor: "#000000",
                                    color: "#ffffff"
                                }}>상품 그림</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start"
                                }}>
                                    <div style={{
                                        fontSize: 16,
                                        color: "#202426"
                                    }}>PRADA Model 23-9 limited… <br />
                                    WHITE, 270mm</div>
                                    <div style={{
                                        marginTop: 8,
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        color: "#051a1a"
                                    }}>480,000원</div>
                                </div>
                            </div>
                            <div style={{
                                height: 1,
                                width: 480,
                                backgroundColor: "#dfdfdf",
                                marginTop: 16,
                                marginBottom: 16,
                            }} />
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                width: 440,
                                marginLeft: 20,
                                marginRight: 20,
                            }}>
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#202426",
                                }}>배송 정보</div>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.8,
                                    color: "#202426",
                                    textDecorationLine: "underline"
                                }}>배송지 수정</div>
                            </div>
                            <div style={{
                                width: 408,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 16,
                                padding: 16,

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",

                                borderRadius: 6,
                                border: "1px solid #dfdfdf"
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginBottom: 8
                                }}>김현명</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8
                                }}>03770</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8
                                }}>서울 특별시 서대문구 북아현로 1길 17</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8
                                }}>e편한세상 203동 2104호</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8
                                }}>010-4337-6607</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                }}>배송 요청사항 : 집앞</div>
                            </div>
                            <div style={{
                                fontSize: 18,
                                marginLeft: 20,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 16,
                            }}>결제 수단</div>
                            <div style={{
                                width: 440,
                                height: 180,
                                marginRight: 20,
                                marginLeft: 20,
                                marginTop: 16,
                                paddingTop: 55,
                                paddingBottom: 55,
                                borderRadius: 6,

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",

                                border: "1px solid #dfdfdf"
                            }}>
                                <div style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                    backgroundColor: "#000000"
                                }} />
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginTop: 16
                                }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                            </div>
                            <div style={{
                                fontSize: 18,
                                marginLeft: 20,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 16,
                            }}>분할결제 옵션 선택</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 16
                            }}>
                                <div onClick={onTwo} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: number === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: number === 2 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,

                                    fontSize: 16,
                                    fontWeight: number === 2 ? "bold" : "normal",
                                    color: number === 2 ? "#ffffff" : "#051a1a",
                                    opacity: number === 2 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>2회</div>
                                <div onClick={onThree} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: number === 3 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: number === 3 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,

                                    fontSize: 16,
                                    fontWeight: number === 3 ? "bold" : "normal",
                                    color: number === 3 ? "#ffffff" : "#051a1a",
                                    opacity: number === 3 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>3회</div>
                                <div onClick={onFour} style={{
                                    width: 95,
                                    borderRadius: 6,
                                    border: number === 4 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: number === 4 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,

                                    fontSize: 16,
                                    fontWeight: number === 4 ? "bold" : "normal",
                                    color: number === 4 ? "#ffffff" : "#051a1a",
                                    opacity: number === 4 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>4회</div>
                            </div>
                            <div style={{
                                padding: 16,
                                width: 408,
                                marginTop: 16,
                                marginLeft: 20,
                                backgroundColor: "#f2f3f8",
                                borderRadius: 6,

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                {payment.map(item =>
                                    <div style={{
                                        width: "100%",

                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",

                                        marginBottom: 8,
                                    }}>
                                        <div style={{
                                            fontSize: 16,
                                            color: "#051a1a",
                                        }}>
                                            {item.num}차 결제
                                    <span style={{
                                                fontWeight: "bold",
                                                color: "#26c1f0"
                                            }}>({item.date})</span>
                                        </div>
                                        <div style={{
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            color: "#202426"
                                        }}>{item.money} 원</div>
                                    </div>
                                )}
                                <div style={{
                                    marginTop: 8,
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginBottom: 4,
                                    alignSelf: "flex-start"
                                }}>나누다 팁!</div>
                                <div style={{
                                    opacity: 0.8,
                                    fontSize: 14,
                                    color: "#202426",
                                    alignSelf: "flex-start",
                                    lineHeight: 1.5
                                }}>
                                    첫 결제 이후 결제 금액들은 자동결제 됩니다. <br />
                                분할결제 한도에 따라 분할 결제 금액이 바뀔 수 있습니다. <br />
                                더 알아보기
                            </div>
                            </div>
                            <div style={{
                                height: 1,
                                width: 480,
                                backgroundColor: "#dfdfdf",
                                marginTop: 32,
                                marginBottom: 32,
                            }} />
                            <div style={{
                                fontSize: 21,
                                marginLeft: 20,
                                fontWeight: "bold",
                                color: "#202426",
                                marginBottom: 12,
                            }}>최종 결제</div>
                            <div style={{
                                marginLeft: 20,
                                marginRight: 20,
                                width: 440,

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    width: "100%",
                                    marginBottom: 8,
                                }}>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426"
                                    }}>첫 분할결제 금액 : </div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                    }}> +240,000 원</div>
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
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426"
                                    }}>배송비 : </div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                    }}> + 0 원</div>
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
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426"
                                    }}>나누다 포인트 : </div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                    }}>- 0 P</div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    width: "100%",
                                }}>
                                    <div style={{
                                        fontSize: 14,
                                        color: "#26c1f0"
                                    }}>사용가능 : 2,000 P</div>
                                    <div style={{
                                        fontSize: 14,
                                        color: "#26c1f0",
                                    }}>전액사용</div>
                                </div>
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