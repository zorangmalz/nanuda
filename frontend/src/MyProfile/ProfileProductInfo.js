import React, { useEffect, useState } from "react";
import { useLocation,useHistory } from "react-router-dom";
import { Default, Mobile } from "../App";
import { Header, MHeader, MStandardButton, numberWithCommas, StandardButton, StandardChoiceModal } from "../Style";

export default function ProfileProductInfo() {
    const location = useLocation()
    const history = useHistory()
    const [order, setOrder] = useState({
        product_image: "",
        product_name: "",
        product_price: "",
        order_receiver: "",
        order_id: "",
        order_address_number: "",
        order_address: "",
        order_address_detail: "",
        order_phone_number: "",
        order_request: "",
        order_price: "",
        wish_image: "",
        wish_title: "",
    })
    useEffect(() => {
        console.log(location.state.item)
        if (location.state.item != null) {
            if (location.state.item.product_image != null) {
                setOrder({
                    product_image: location.state.item.product_image,
                    product_name: location.state.item.product_name,
                    product_price: location.state.item.product_price,
                    order_receiver: location.state.item.order_receiver,
                    order_id: location.state.item.order_id,
                    order_address_number: location.state.item.order_address_number,
                    order_address: location.state.item.order_address,
                    order_address_detail: location.state.item.order_address_detail,
                    order_phone_number: location.state.item.order_phone_number,
                    order_request: location.state.item.order_request,
                    order_price: location.state.item.order_price,
                })
            } else {
                setOrder({
                    wish_image: location.state.item.wish_image,
                    wish_title: location.state.item.wish_title,
                    order_receiver: location.state.item.order_receiver,
                    order_id: location.state.item.order_id,
                    order_address_number: location.state.item.order_address_number,
                    order_address: location.state.item.order_address,
                    order_address_detail: location.state.item.order_address_detail,
                    order_phone_number: location.state.item.order_phone_number,
                    order_request: location.state.item.order_request,
                    order_price: location.state.item.order_price,
                })
            }
        }
    }, [location])

    const [modal, setModal] = useState(false)
    function check(){
        console.log("here")
        history.push("/profile/payment/detail")
    }
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
                            img={order.product_image != undefined ? order.product_image : order.wish_image}
                            title={order.product_name != undefined ? order.product_name : order.wish_title}
                            price={order.product_price != undefined ? order.product_price : order.order_price}
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
                            onClick={check}
                            marginBottom={40}
                        />
                        <StandardButton
                            marginTop={32}
                            text="분할결제 스케쥴 확인하기"
                            state={false}
                            onClick={() => setModal(true)}
                            marginBottom={40}
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
                        img={order.product_image != undefined ? order.product_image : order.wish_image}
                        title={order.product_name != undefined ? order.product_name : order.wish_title}
                        price={order.product_price != undefined ? order.product_price : order.order_price}
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
                        onClick={check}
                        marginBottom={"10vw"}
                    />
                    <MStandardButton
                        marginTop={"8vw"}
                        text="분할결제 스케쥴 확인하기"
                        state={false}
                        onClick={() => setModal(true)}
                        marginBottom={"10vw"}
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