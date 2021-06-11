import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router";

export default function PaymentFail() {
    //타임딜 여부
    const [timeDeal, setTimeDeal] = useState(true)

    let history = useHistory()
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
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
                        }}>작성에 실패<span style={{ color: "#010608" }}>했습니다.</span></div>
                        <div style={{
                            fontSize: 16,
                            color: "#010608",
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
                        <StandardButton
                            text={timeDeal ? "주문서로 돌아가기" : "홈으로"}
                            onClick={timeDeal ? () => history.push("/ordersheet") : () => history.replace("/")}
                            state={true}
                            marginTop={32}
                        />
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
                    paddingBottom: "8vw",
                }}>
                    <MHeader content={timeDeal ? "작성 실패" : "주문 결과"} goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: "8vw",
                        backgroundColor: "#f72b2b",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AiOutlineClose color="#ffffff" size={80} />
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#f72b2b",
                        fontFamily: "NotoSansCJKkr"
                    }}>작성에 실패<span style={{ color: "#010608" }}>했습니다.</span></div>
                    <div style={{
                        fontSize: 16,
                        color: "#010608",
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
                    <MStandardButton
                        text={timeDeal ? "주문서로 돌아가기" : "홈으로"}
                        onClick={timeDeal ? () => history.push("/ordersheet") : () => history.replace("/")}
                        state={true}
                        marginTop={"8vw"}
                    />
                </div>
            </Mobile>
        </div>
    )
}

export function OrderDetail({ wishTime, img, title, price, name, orderNum, number, address, addressDetail, phoneNumber, deliveryClaim }) {
    return (
        <div>
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
                        color: "#010608"
                    }}>주문상세</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 16
                    }}>
                        <img style={{
                            width: 80,
                            height: 80,
                            objectFit: "cover",
                            border: "solid 1px rgba(219, 219, 219, 0.1)",
                            marginRight: 10,
                            borderRadius: 6
                        }} src={img}></img>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: 240,
                        }}>
                            <div style={{
                                fontSize: 16,
                                lineHeight: 1.5,
                                color: "#010608",
                                fontFamily: "AvenirNext",
                                marginBottom: 8,
                            }}>{title}</div>
                            <div style={{
                                fontSize: 18,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr",
                                fontWeight: "bold",
                            }}>{price} 원</div>
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.8,
                        color: "#010608",
                        lineHeight: 1.88,
                        fontSize: 16,
                    }}>
                        받는사람 : {name} <br />

                        우편번호 : {number} <br />
                        주소: {address} <br />
                        상세주소 : {addressDetail} <br />
                        연락처 : {phoneNumber} <br />
                        배송 요청사항 : {deliveryClaim} <br />
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export function MOrderDetail({ wishTime, img, title, price, name, orderNum, number, address, addressDetail, phoneNumber, deliveryClaim }) {
    return (
        <div>
            {wishTime ?
                <div style={{
                    width: "82vw",
                    padding: "4vw",
                    border: "1px solid #dfdfdf",
                    backgroundColor: "#ffffff",
                    marginTop: "8vw",
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
                        color: "#010608"
                    }}>주문상세</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 16
                    }}>
                        <img style={{
                            width: 80,
                            height: 80,
                            objectFit: "cover",
                            border: "solid 1px rgba(219, 219, 219, 0.1)",
                            marginRight: 10,
                            borderRadius: 6
                        }} src={img}></img>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: 180,
                        }}>
                            <div style={{
                                fontSize: 14,
                                lineHeight: 1.5,
                                color: "#010608",
                                fontFamily: "AvenirNext",
                                marginBottom: 8,
                            }}>{title}</div>
                            <div style={{
                                fontSize: 16,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr",
                                fontWeight: "bold",
                            }}>{price} 원</div>
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.8,
                        color: "#010608",
                        lineHeight: 1.88,
                        fontSize: 14,
                    }}>
                        받는사람 : {name} <br />

                        우편번호 : {number} <br />
                        주소: {address} <br />
                        상세주소 : {addressDetail} <br />
                        연락처 : {phoneNumber} <br />
                        배송 요청사항 : {deliveryClaim} <br />
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}