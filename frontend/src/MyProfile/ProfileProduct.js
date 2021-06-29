import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader, numberWithCommas } from "../Style";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router";
import mainlogo from "../images/mainlogo.png";

export default function ProfileProduct() {
    //Get Order Data
    const [orderData, setOrderData] = useState([])
    const [fullData,setFullData]=useState([])
    useEffect(() => {
        setOrderData([])
        fetch("https://haulfree.link/order/profile", {
            method: "GET",
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response != null && response != undefined) {
                    var array = []
                    for (var i = 0; i < response.length; i++) {
                        array.push({
                            "order_address": response[i].order_address,
                            "order_address_detail": response[i].order_address_detail,
                            "order_address_number": response[i].order_address_number,
                            "order_date": response[i].order_date.slice(0, 10),
                            "order_price": response[i].order_price,
                            "order_id": response[i].order_id,
                            "order_phone_number": response[i].order_phone_number,
                            "order_receiver": response[i].order_receiver,
                            "order_request": response[i].order_request,
                            "product_id": response[i].product_id,
                            "product_name": response[i].product_name,
                            "product_image": response[i].product_image,
                            "product_price": response[i].product_price,
                            "review_write": response[i].review_write,
                            "wish_image": response[i].wish_image,
                            "wish_title": response[i].wish_title,
                            "payment_history":response[i].payment_history,
                            "order_expected_date":response[i].order_expected_date
                        })
                    }
                    setOrderData(orderData.concat(array))
                }
            })
            .catch(err => console.log(err))
    }, [])

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
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="상품 구매 내역" goBack={true} />
                        <div style={{ marginTop: 16 }} />
                        {orderData.map(item => (
                            <ProductState
                                img={item.product_image ? item.product_image : item.wish_image}
                                date={item.order_date}
                                title={item.product_name ? item.product_name : item.wish_title}
                                price={item.product_price ? item.product_price : item.order_price}
                                item={item}
                                mobile={false}
                            />
                        ))}
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="상품 구매 내역" goBack={true} />
                    <div style={{ marginTop: "4vw" }} />
                    {orderData.map(item => (
                        <ProductState
                            img={item.product_image ? item.product_image : item.wish_image}
                            date={item.order_date}
                            title={item.product_name ? item.product_name : item.wish_title}
                            price={item.product_price ? item.product_price : item.order_price}
                            item={item}
                            mobile={true}
                        />
                    ))}
                </div>
            </Mobile>
        </>
    )
}

function ProductState({ img, date, title, price, mobile, item }) {
    const history = useHistory()
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: mobile ? "4vw" : 16,
                paddingBottom: mobile ? "4vw" : 16,
                width: mobile ? "90vw" : 440,
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)"
            }}>
                <div onClick={() => history.push({
                    pathname: "/profile/product/info",
                    state: { "item": item }
                })} style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    cursor: "pointer",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <img alt="상품" src={img} style={{
                            width: mobile ? 80 : 120,
                            height: mobile ? 80 : 120,
                            borderRadius: 6,
                            marginRight: mobile ? "4vw" : 16,
                            backgroundColor: "#000000",
                            color: "#ffffff"
                        }} />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            width: mobile ? 165 : 260,
                            height: mobile ? 80 : 120,
                        }}>
                            <div style={{
                                fontSize: mobile ? 14 : 16,
                                fontFamily: "NotoSansCJKkr",
                                color: "#010608",
                                opacity: 0.6,
                            }}>{date}</div>
                            <div style={{
                                fontSize: mobile ? 14 : 16,
                                color: "#010608",
                                fontFamily: "AvenirNext",
                                lineHeight: 1.5,
                            }}>{title}</div>
                            <div style={{
                                fontSize: mobile ? 16 : 18,
                                fontWeight: "bold",
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>{numberWithCommas(price)}원</div>
                        </div>
                    </div>
                    <MdKeyboardArrowRight size={mobile ? 24 : 32} color="rgba(1, 6, 8, 0.4)" />
                </div>
            </div>
        </>
    )
}