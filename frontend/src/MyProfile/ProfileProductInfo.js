import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Default, Mobile } from "../App";
import { Header, MHeader, MStandardButton, numberWithCommas, StandardButton, StandardChoiceModal } from "../Style";

export default function ProfileProductInfo() {
    const location = useLocation()

    const [order, setOrder] = useState({
        order_address: "",
        order_address_detail: "",
        order_address_number: "",
        order_id: "",
        order_phone_number: "",
        order_receiver: "",
        order_request: "",
        product_image: "",
        product_name: "",
        product_price: 0,
    })
    useEffect(() => {
        if (location.state.product_id.length > 0) {
            fetch(`https://haulfree.link/order/detail?product=${location.state.product_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
                .then(res => res.json())
                .then(res => setOrder(res))
                .catch(err => console.log(err))
        }
    }, [location])

    const [modal, setModal] = useState(false)
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
                        alignItems: "center",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        {modal ? 
                            <StandardChoiceModal 
                                title="주문을 취소하시겠습니까?"
                                content="취소 후 결제 금액이 환불됩니다."
                                canceltext="돌아가기"
                                onCancelClick={() => setModal(false)}
                                buttontext="취소하기"
                                onClick={() => setModal(false)}
                                mobile={false}
                            />
                            :
                            <></>
                        }
                        <Header content="상품 상세 구매 내역" goBack={true} />
                        <ProductInfo
                            img={order.product_image}
                            title={order.product_name}
                            price={order.product_price}
                            name={order.order_receiver}
                            orderNum={order.order_id}
                            number={order.order_address_number}
                            address={order.order_address}
                            addressDetail={order.order_address_detail}
                            phoneNumber={order.order_phone_number}
                            deliveryClaim={order.order_request}
                            mobile={false}
                        />
                        <StandardButton 
                            marginTop={32}
                            text="분할결제 스케쥴 확인하기"
                            state={true}
                            onClick={() => setModal(true)}
                        />
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
                    {modal ?
                        <StandardChoiceModal
                            title="주문을 취소하시겠습니까?"
                            content="취소 후 결제 금액이 환불됩니다."
                            canceltext="돌아가기"
                            onCancelClick={() => setModal(false)}
                            buttontext="취소하기"
                            onClick={() => setModal(false)}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                    <MHeader content="상품 상세 구매 내역" goBack={true} />
                    <ProductInfo
                        img={order.product_image}
                        title={order.product_name}
                        price={order.product_price}
                        name={order.order_receiver}
                        orderNum={order.order_id}
                        number={order.order_address_number}
                        address={order.order_address}
                        addressDetail={order.order_address_detail}
                        phoneNumber={order.order_phone_number}
                        deliveryClaim={order.order_request}
                        mobile={true}
                    />
                    <MStandardButton
                        marginTop={"8vw"}
                        text="분할결제 스케쥴 확인하기"
                        state={true}
                        onClick={() => setModal(true)}
                    />
                </div>
            </Mobile>
        </>
    )
}

function ProductInfo({ img, title, price, name, number, orderNum, address, addressDetail, phoneNumber, deliveryClaim, mobile }) {
    return (
        <>
            <div style={{
                width: mobile ? "82vw" : 408,
                padding: mobile ? "4vw" : 16,
                border: "1px solid #26c1f0",
                backgroundColor: "#ffffff",
                marginTop: mobile ? "8vw" : 32,
                alignSelf: "center",
                borderRadius: 6,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    fontWeight: "bold",
                    marginBottom: mobile ? "4vw" : 16,
                    color: "#010608"
                }}>주문상세</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: mobile ? "4vw" : 16
                }}>
                    <img alt="제품" src={img.length > 0 ? img : ""} style={{
                        width: 80,
                        height: 80,
                        marginRight: mobile ? "2.5vw" : 10,
                        borderRadius: 6,
                        backgroundColor: "#000000"
                    }} />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: mobile ? "50vw" : 240,
                        height: 80,
                    }}>
                        <div style={{
                            fontSize: mobile ? 14 : 16,
                            lineHeight: 1.5,
                            color: "#010608",
                            fontFamily: "AvenirNext",
                        }}>{title}</div>
                        <div style={{
                            fontSize: mobile ? 16 : 18,
                            color: "#010608",
                            fontFamily: "NotoSansCJKkr",
                            fontWeight: "bold",
                        }}>{numberWithCommas(price)} 원</div>
                    </div>
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.88,
                    fontSize: mobile ? 14 : 16,
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
        </>
    )
}