import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Default, Mobile } from "../App";
import { Header, MHeader, MStandardButton, numberWithCommas, StandardButton, StandardChoiceModal } from "../Style";

export default function ProfileProductInfo() {
    const location = useLocation()
    const history = useHistory()
    const param = location.state.item
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
    const [payComplete, setPayComplete] = useState(false)
    useEffect(() => {
        console.log(location.state.item)
        for (var i = 0; i < 4; i++) {
            if (location.state.item.payment_history[i].money === 0) {
                setPayComplete(location.state.item.payment_history[i - 1].payment)
                break;
            } else if (location.state.item.payment_history[i].money != 0 && i === 3) {
                setPayComplete(location.state.item.payment_history[3].payment)
            }
        }
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
    function check() {
        console.log("here")
        history.push("/payment/history", { item: param })
    }

    function refund(){
        console.log("refund")
        history.push("/profile/payment/refund",{item:param})
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
                                title="????????? ?????????????????????????"
                                content="?????? ??? ?????? ????????? ???????????????."
                                canceltext="????????????"
                                onCancelClick={() => setModal(false)}
                                buttontext="????????????"
                                onClick={refund}
                                mobile={false}
                            />
                            :
                            <></>
                        }
                        <Header content="?????? ?????? ?????? ??????" goBack={true} />
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
                            text="???????????? ????????? ????????????"
                            state={true}
                            onClick={check}
                            marginBottom={0}
                        />
                        <div onClick={() => setModal(true)} style={{
                            width: 440,
                            paddingTop: 16,
                            paddingBottom: 16,
                            borderRadius: 6,
                            backgroundColor: "#dbdbdb",
                            alignSelf: "center",
                            cursor: "pointer",
                            marginTop: 16,
                            marginBottom: 40,

                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            color: "#ffffff",
                            textAlign: "center"
                        }}>{payComplete ? "??????, ?????? ??????" : "?????? ??????"}</div>
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
                            title="????????? ?????????????????????????"
                            content="?????? ??? ?????? ????????? ???????????????."
                            canceltext="????????????"
                            onCancelClick={() => setModal(false)}
                            buttontext="????????????"
                            onClick={refund}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                    <MHeader content="?????? ?????? ?????? ??????" goBack={true} />
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
                        text="???????????? ????????? ????????????"
                        state={true}
                        onClick={check}
                        marginBottom={0}
                    />
                    <div onClick={() => setModal(true)} style={{
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#dbdbdb",
                        alignSelf: "center",
                        cursor: "pointer",
                        marginTop: "4vw",
                        borderRadius: 6,
                        marginBottom: "10vw",

                        fontSize: 16,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        color: "#ffffff",
                        textAlign: "center"
                    }}>{payComplete ? "??????, ?????? ??????" : "?????? ??????"}</div>
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
                }}>????????????</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: mobile ? "4vw" : 16
                }}>
                    <img alt="??????" src={img.length > 0 ? img : ""} style={{
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
                        }}>{numberWithCommas(price)} ???</div>
                    </div>
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.88,
                    fontSize: mobile ? 14 : 16,
                }}>
                    ???????????? : {name} <br />
                    ???????????? : {orderNum} <br />
                    ???????????? : {number} <br />
                    ??????: {address} <br />
                    ???????????? : {addressDetail} <br />
                    ????????? : {phoneNumber} <br />
                    ?????? ???????????? : {deliveryClaim} <br />
                </div>
            </div>
        </>
    )
}