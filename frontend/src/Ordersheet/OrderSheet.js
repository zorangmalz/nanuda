import React, { useState, useReducer } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BiPlusCircle } from "react-icons/bi";

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

export default function OrderSheet() {
    const [register, setRegister] = useState(false);
    const [number, dispatch] = useReducer(reducer, 2);

    //분할결제 기간 선택
    const onTwo = () => {
        dispatch({ type: 'TWO' });
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
    };

    //결제 일정 제공
    const paymentDate = [
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

    //결제 성공 시 -> paymentsuccess, 결제 실패 시 -> paymentfail
    let history = useHistory()
    const [payment, setPayment] = useState(true)
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
                                marginBottom: 16,
                                fontFamily: "NotoSansCJKkr"
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
                                        color: "#202426",
                                        fontFamily: "AvenirNext"
                                    }}>PRADA Model 23-9 limited… <br />
                                    WHITE, 270mm</div>
                                    <div style={{
                                        marginTop: 8,
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        color: "#051a1a",
                                        fontFamily: "NotoSansCJKkr"
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
                                    fontFamily: "NotoSansCJKkr"
                                }}>배송 정보</div>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.8,
                                    color: "#202426",
                                    textDecorationLine: "underline",
                                    cursor: "pointer",
                                    fontFamily: "NotoSansCJKkr"
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
                                    marginBottom: 8,
                                    fontFamily: "NotoSansCJKkr"
                                }}>김현명</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8,
                                    fontFamily: "NotoSansCJKkr"
                                }}>03770</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8,
                                    fontFamily: "NotoSansCJKkr"
                                }}>서울 특별시 서대문구 북아현로 1길 17</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8,
                                    fontFamily: "NotoSansCJKkr"
                                }}>e편한세상 203동 2104호</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    marginBottom: 8,
                                    fontFamily: "NotoSansCJKkr"
                                }}>010-4337-6607</div>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>배송 요청사항 : 집앞</div>
                            </div>
                            <div style={{
                                fontSize: 18,
                                marginLeft: 20,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 16,
                                fontFamily: "NotoSansCJKkr"
                            }}>결제 수단</div>
                            {register ?
                                <div style={{
                                    width: 408,
                                    alignSelf: "center",
                                    padding: 16,
                                    borderRadius: 6,
                                    border: "1px solid #dfdfdf",
                                    marginTop: 16,

                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.8,
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>우리 1002-550-5**544</div>
                                    <div>임시 로고</div>
                                </div>
                                :
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
                                    <BiPlusCircle size={30} color="#000000" />
                                    <div style={{
                                        fontSize: 16,
                                        color: "#202426",
                                        marginTop: 16,
                                        fontFamily: "NotoSansCJKkr"
                                    }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                                </div>
                            }
                            <div style={{
                                fontSize: 18,
                                marginLeft: 20,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 16,
                                fontFamily: "NotoSansCJKkr"
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
                                    fontFamily: "NotoSansCJKkr"
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
                                    fontFamily: "NotoSansCJKkr"
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
                                    fontFamily: "NotoSansCJKkr"
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
                                {paymentDate.map(item =>
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
                                            fontFamily: "NotoSansCJKkr"
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
                                            color: "#202426",
                                            fontFamily: "NotoSansCJKkr"
                                        }}>{item.money} 원</div>
                                    </div>
                                )}
                                <div style={{
                                    marginTop: 8,
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginBottom: 4,
                                    alignSelf: "flex-start",
                                    fontFamily: "NotoSansCJKkr"
                                }}>나누다 팁!</div>
                                <div style={{
                                    opacity: 0.8,
                                    fontSize: 14,
                                    color: "#202426",
                                    alignSelf: "flex-start",
                                    lineHeight: 1.5,
                                    fontFamily: "NotoSansCJKkr"
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
                                fontFamily: "NotoSansCJKkr"
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
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>첫 분할결제 금액 : </div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
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
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>배송비 : </div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
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
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>나누다 포인트 : </div>
                                    <div style={{
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
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
                                        color: "#26c1f0",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>사용가능 : 2,000 P</div>
                                    <div style={{
                                        fontSize: 14,
                                        color: "#26c1f0",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>전액사용</div>
                                </div>
                            </div>
                            <div style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 32,
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr"
                            }}>
                                이번 달은
                                <span style={{
                                    color: "#2dd9d3"
                                }}>  240,000 원</span>
                                 만 결제하세요.
                            </div>
                            <div style={{
                                height: 1,
                                width: 480,
                                backgroundColor: "#dfdfdf",
                                marginTop: 32,
                                marginBottom: 16,
                            }} />
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                textDecorationLine: "underline",
                                marginBottom: 8,
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr",
                                cursor: "pointer"
                            }}>구매조건 확인 및 결제대행 서비스 약관 동의</div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                textDecorationLine: "underline",
                                marginBottom: 8,
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr",
                                cursor: "pointer"
                            }}>개인정보 제공안내</div>
                            <div style={{
                                width: 440,
                                fontSize: 12,
                                opacity: 0.4,
                                color: "#202426",
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr"
                            }}>* 개별 판매자가 등록한 나누다 딜 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 나누다는 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</div>
                            <div style={{
                                height: 1,
                                width: 480,
                                backgroundColor: "#dfdfdf",
                                marginTop: 16,
                                marginBottom: 12,
                            }} />
                            <div style={{
                                fontSize: 14,
                                opacity: 0.4,
                                color: "#202426",
                                alignSelf: "center",
                                marginBottom: 32,
                                fontFamily: "NotoSansCJKkr"
                            }}>위 주문 내용을 확인 하였으며, 회원은 본인의 결제에 동의합니다.</div>
                            <div onClick={() => payment ? history.push("/paymentsuccess") : history.push("/paymentfail")} style={{
                                alignSelf: "center",
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#2dd9d3",
                                borderRadius: 6,
                                marginBottom: 120,

                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: "center",

                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr"
                            }}>결제하기</div>
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
                    backgroundColor: "#ffffff",
                }}>
                    <Header content="주문서" />
                    <div style={{
                        fontSize: 18,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 32,
                        marginBottom: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>상품정보</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",

                        marginLeft: "5%"
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
                                color: "#202426",
                                fontFamily: "AvenirNext"
                            }}>PRADA Model 23-9 limited… <br />
                                    WHITE, 270mm</div>
                            <div style={{
                                marginTop: 8,
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#051a1a",
                                fontFamily: "NotoSansCJKkr"
                            }}>480,000원</div>
                        </div>
                    </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: 16,
                        marginBottom: 16,
                    }} />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        width: "90%",
                        alignSelf: "center",
                    }}>
                        <div style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202426",
                            fontFamily: "NotoSansCJKkr"
                        }}>배송 정보</div>
                        <div style={{
                            fontSize: 14,
                            opacity: 0.8,
                            color: "#202426",
                            textDecorationLine: "underline",
                            cursor: "pointer",
                            fontFamily: "NotoSansCJKkr"
                        }}>배송지 수정</div>
                    </div>
                    <div style={{
                        width: "82%",
                        alignSelf: "center",
                        marginTop: 16,
                        padding: "4%",

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
                            marginBottom: 8,
                            fontFamily: "NotoSansCJKkr"
                        }}>김현명</div>
                        <div style={{
                            fontSize: 16,
                            color: "#202426",
                            marginBottom: 8,
                            fontFamily: "NotoSansCJKkr"
                        }}>03770</div>
                        <div style={{
                            fontSize: 16,
                            color: "#202426",
                            marginBottom: 8,
                            fontFamily: "NotoSansCJKkr"
                        }}>서울 특별시 서대문구 북아현로 1길 17</div>
                        <div style={{
                            fontSize: 16,
                            color: "#202426",
                            marginBottom: 8,
                            fontFamily: "NotoSansCJKkr"
                        }}>e편한세상 203동 2104호</div>
                        <div style={{
                            fontSize: 16,
                            color: "#202426",
                            marginBottom: 8,
                            fontFamily: "NotoSansCJKkr"
                        }}>010-4337-6607</div>
                        <div style={{
                            fontSize: 16,
                            color: "#202426",
                            fontFamily: "NotoSansCJKkr"
                        }}>배송 요청사항 : 집앞</div>
                    </div>
                    <div style={{
                        fontSize: 18,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>결제 수단</div>
                    {register ?
                        <div style={{
                            width: "82vw",
                            alignSelf: "center",
                            padding: "4vw",
                            borderRadius: 6,
                            border: "1px solid #dfdfdf",
                            marginTop: 16,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                            <div style={{
                                fontSize: 16,
                                opacity: 0.8,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>우리 1002-550-5**544</div>
                            <div>임시 로고</div>
                        </div>
                        :
                        <div style={{
                            width: "90%",
                            alignSelf: "center",
                            height: 100,
                            marginTop: 16,
                            paddingTop: 15,
                            paddingBottom: 15,
                            borderRadius: 6,

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",

                            border: "1px solid #dfdfdf"
                        }}>
                            <BiPlusCircle size={20} color="#000000"/>
                            <div style={{
                                fontSize: 16,
                                color: "#202426",
                                marginTop: 16,
                                fontFamily: "NotoSansCJKkr"
                            }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                        </div>
                    }
                    <div style={{
                        fontSize: 18,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>분할결제 옵션 선택</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

                        marginLeft: "5%",
                        marginTop: 16
                    }}>
                        <div onClick={onTwo} style={{
                            width: 80,
                            marginRight: 10,
                            borderRadius: 6,
                            border: number === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                            backgroundColor: number === 2 ? "#051a1a" : "#ffffff",
                            paddingTop: 5,
                            paddingBottom: 5,

                            fontSize: 16,
                            fontWeight: number === 2 ? "bold" : "normal",
                            color: number === 2 ? "#ffffff" : "#051a1a",
                            opacity: number === 2 ? 1 : 0.8,
                            textAlign: "center",
                            fontFamily: "NotoSansCJKkr"
                        }}>2회</div>
                        <div onClick={onThree} style={{
                            width: 80,
                            marginRight: 10,
                            borderRadius: 6,
                            border: number === 3 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                            backgroundColor: number === 3 ? "#051a1a" : "#ffffff",
                            paddingTop: 5,
                            paddingBottom: 5,

                            fontSize: 16,
                            fontWeight: number === 3 ? "bold" : "normal",
                            color: number === 3 ? "#ffffff" : "#051a1a",
                            opacity: number === 3 ? 1 : 0.8,
                            textAlign: "center",
                            fontFamily: "NotoSansCJKkr"
                        }}>3회</div>
                        <div onClick={onFour} style={{
                            width: 80,
                            borderRadius: 6,
                            border: number === 4 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                            backgroundColor: number === 4 ? "#051a1a" : "#ffffff",
                            paddingTop: 5,
                            paddingBottom: 5,

                            fontSize: 16,
                            fontWeight: number === 4 ? "bold" : "normal",
                            color: number === 4 ? "#ffffff" : "#051a1a",
                            opacity: number === 4 ? 1 : 0.8,
                            textAlign: "center",
                            fontFamily: "NotoSansCJKkr"
                        }}>4회</div>
                    </div>
                    <div style={{
                        padding: "4%",
                        width: "82%",
                        marginTop: 16,
                        alignSelf: "center",
                        backgroundColor: "#f2f3f8",
                        borderRadius: 6,

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        {paymentDate.map(item =>
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
                                    fontFamily: "NotoSansCJKkr"
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
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.money} 원</div>
                            </div>
                        )}
                        <div style={{
                            marginTop: 8,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#202426",
                            marginBottom: 4,
                            alignSelf: "flex-start",
                            fontFamily: "NotoSansCJKkr"
                        }}>나누다 팁!</div>
                        <div style={{
                            opacity: 0.8,
                            fontSize: 14,
                            color: "#202426",
                            alignSelf: "flex-start",
                            lineHeight: 1.5,
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            첫 결제 이후 결제 금액들은 자동결제 됩니다. <br />
                                분할결제 한도에 따라 분할 결제 금액이 바뀔 수 있습니다. <br />
                                더 알아보기
                            </div>
                    </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: 32,
                        marginBottom: 32,
                    }} />
                    <div style={{
                        fontSize: 21,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#202426",
                        marginBottom: 12,
                        fontFamily: "NotoSansCJKkr"
                    }}>최종 결제</div>
                    <div style={{
                        width: "90%",
                        alignSelf: "center",

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
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>첫 분할결제 금액 : </div>
                            <div style={{
                                fontSize: 16,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
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
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>배송비 : </div>
                            <div style={{
                                fontSize: 16,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
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
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>나누다 포인트 : </div>
                            <div style={{
                                fontSize: 16,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
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
                                color: "#26c1f0",
                                fontFamily: "NotoSansCJKkr"
                            }}>사용가능 : 2,000 P</div>
                            <div style={{
                                fontSize: 14,
                                color: "#26c1f0",
                                fontFamily: "NotoSansCJKkr"
                            }}>전액사용</div>
                        </div>
                    </div>
                    <div style={{
                        width: "90%",
                        fontSize: 22,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 32,
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        이번달은
                                <span style={{
                            color: "#2dd9d3"
                        }}> 240,000 원 </span>
                                 만 결제하세요.
                            </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: 32,
                        marginBottom: 16,
                    }} />
                    <div style={{
                        fontSize: 14,
                        opacity: 0.6,
                        color: "#202426",
                        textDecorationLine: "underline",
                        marginBottom: 8,
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>구매조건 확인 및 결제대행 서비스 약관 동의</div>
                    <div style={{
                        fontSize: 14,
                        opacity: 0.6,
                        color: "#202426",
                        textDecorationLine: "underline",
                        marginBottom: 8,
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>개인정보 제공안내</div>
                    <div style={{
                        width: "90%",
                        fontSize: 12,
                        opacity: 0.4,
                        color: "#202426",
                        alignSelf: "center",
                        fontFamily: "NotoSansCJKkr"
                    }}>* 개별 판매자가 등록한 나누다 딜 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 나누다는 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: 16,
                        marginBottom: 12,
                    }} />
                    <div style={{
                        fontSize: 14,
                        opacity: 0.4,
                        color: "#202426",
                        width: "90%",
                        alignSelf: "center",
                        marginBottom: 32,
                        fontFamily: "NotoSansCJKkr"
                    }}>위 주문 내용을 확인 하였으며, 회원은 본인의 결제에 동의합니다.</div>
                    <div onClick={() => payment ? history.push("/paymentsuccess") : history.push("/paymentfail")} style={{
                        alignSelf: "center",
                        width: "90%",
                        paddingTop: 15,
                        paddingBottom: 15,
                        backgroundColor: "#2dd9d3",
                        borderRadius: 6,
                        marginBottom: 80,

                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ffffff",
                        textAlign: "center",

                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>결제하기</div>
                </div>
            </Mobile>
        </>
    )
}