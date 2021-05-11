import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router";

export default function PaymentFail() {
    //타임딜 여부
    const [timeDeal, setTimeDeal] = useState(true)

    //화면 변경
    let history = useHistory()
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
                        }}>
                            <Header content={timeDeal ? "작성 실패" : "주문 결과"} goX={true} />
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                marginTop: 32,
                                backgroundColor: "#f72b2b",
                                
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AiOutlineClose color="#ffffff" size={50} />
                            </div>
                            <div style={{
                                marginTop: 32,
                                fontSize: 21,
                                fontWeight: "bold",
                                color: "#f72b2b",
                                fontFamily: "NotoSansCJKkr"
                            }}>작성에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                            <div style={{
                                fontSize: 16,
                                color: "#051a1a",
                                opacity: 0.6,
                                marginTop: 16,
                                fontFamily: "NotoSansCJKkr"
                            }}>실패 사유 : {timeDeal ? "잔액부족" : "Invalid Number"}</div>
                            <OrderDetail 
                                wishTime={timeDeal}
                                title="PRADA Model 23-9 limited edition berry expensive"
                                price="460,000"
                                name="김현명"
                                orderNum="20200413137223-00-01"
                                number="03770"
                                address="서울 특별시 서대문구 북아현로 1길 17"
                                addressDetail="e편한세상 203동 2104호"
                                phoneNumber="010-4337-6607"
                                deliveryClaim="집 앞"
                            />
                            <div onClick={() => timeDeal ? history.push("/ordersheet") : history.push("/")} style={{
                                borderRadius: 8,
                                width: 440,
                                height: 56,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 32,
                                backgroundColor: "#2dd9d3",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                cursor: "pointer",
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>{timeDeal ? "주문서로 돌아가기" : "홈으로"}</div></div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content={timeDeal ? "작성 실패" : "주문 결과"} goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#f72b2b",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AiOutlineClose color="#ffffff" size={50} />
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#f72b2b",
                        fontFamily: "NotoSansCJKkr"
                    }}>작성에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                    <div style={{
                        fontSize: 16,
                        color: "#051a1a",
                        opacity: 0.6,
                        marginTop: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>실패 사유 : {timeDeal ? "잔액부족" : "Invalid Number"}</div>
                    <MOrderDetail
                        wishTime={timeDeal}
                        title="PRADA Model 23-9 limited edition berry expensive"
                        price="460,000"
                        name="김현명"
                        orderNum="20200413137223-00-01"
                        number="03770"
                        address="서울 특별시 서대문구 북아현로 1길 17"
                        addressDetail="e편한세상 203동 2104호"
                        phoneNumber="010-4337-6607"
                        deliveryClaim="집 앞"
                    />
                    <div onClick={() => timeDeal ? history.push("/ordersheet") : history.push("/")} style={{
                        borderRadius: 8,
                        width: "90%",
                        height: 56,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 32,
                        backgroundColor: "#2dd9d3",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        cursor: "pointer",
                    }}><div style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>{timeDeal ? "주문서로 돌아가기" : "홈으로"}</div></div>
                </div>
            </Mobile>
        </>
    )
}

export function OrderDetail({wishTime, img, title, price, name, orderNum, number, address, addressDetail, phoneNumber, deliveryClaim}) {
    return (
        <>
            {wishTime ?
                <div style={{
                    width: 408,
                    padding: 16,
                    border: "1px solid #dfdfdf",
                    backgroundColor: "#ffffff",
                    marginTop: 32,
                    alignSelf: "center",
                    borderRadius: 6,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom: 16,
                        color: "#202426"
                    }}>주문상세</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 16
                    }}>
                        <div style={{
                            width: 80,
                            height: 80,
                            marginRight: 10,
                            borderRadius: 6,
                            border: "solid 1px rgba(219, 219, 219, 0.1)",
                            backgroundColor: "#000000"
                        }}></div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: 240,
                        }}>
                            <div style={{
                                fontSize: 16,
                                lineHeight: 1.5,
                                color: "#202426",
                                fontFamily: "AvenirNext",
                                marginBottom: 8,
                            }}>{title}</div>
                            <div style={{
                                fontSize: 18,
                                color: "#051a1a",
                                fontFamily: "NotoSansCJKkr",
                                fontWeight: "bold",
                            }}>{price} 원</div>
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.8,
                        color: "#202426",
                        lineHeight: 1.88,
                        fontSize: 16,
                    }}>
                        받는사람 : {name} <br />
                        주문번호 : {orderNum} <br />
                        우편번호 : {number} <br />
                        주소: {address} <br />
                        상세주소 : {addressDetail} <br />
                        연락처 : {phoneNumber} <br />
                        배송 요청사항 : {deliveryClaim} <br />
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

export function MOrderDetail({wishTime, img, title, price, name, orderNum, number, address, addressDetail, phoneNumber, deliveryClaim}) {
    return (
        <>
            {wishTime ?
                <div style={{
                    width: "82%",
                    padding: "4%",
                    border: "1px solid #dfdfdf",
                    backgroundColor: "#ffffff",
                    marginTop: 32,
                    alignSelf: "center",
                    borderRadius: 6,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom: 16,
                        color: "#202426"
                    }}>주문상세</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 16
                    }}>
                        <div style={{
                            width: 70,
                            height: 70,
                            marginRight: 10,
                            borderRadius: 6,
                            border: "solid 1px rgba(219, 219, 219, 0.1)",
                            backgroundColor: "#000000"
                        }}></div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: 180,
                        }}>
                            <div style={{
                                fontSize: 14,
                                lineHeight: 1.5,
                                color: "#202426",
                                fontFamily: "AvenirNext",
                                marginBottom: 8,
                            }}>{title}</div>
                            <div style={{
                                fontSize: 16,
                                color: "#051a1a",
                                fontFamily: "NotoSansCJKkr",
                                fontWeight: "bold",
                            }}>{price} 원</div>
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.8,
                        color: "#202426",
                        lineHeight: 1.88,
                        fontSize: 14,
                    }}>
                        받는사람 : {name} <br />
                        주문번호 : {orderNum} <br />
                        우편번호 : {number} <br />
                        주소: {address} <br />
                        상세주소 : {addressDetail} <br />
                        연락처 : {phoneNumber} <br />
                        배송 요청사항 : {deliveryClaim} <br />
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}