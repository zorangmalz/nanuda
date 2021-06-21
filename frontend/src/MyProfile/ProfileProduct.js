import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader, numberWithCommas } from "../Style";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router";
import mainlogo from "../images/mainlogo.png";

export default function ProfileProduct() {
    //Get Order Data
    const [orderData, setOrderData] = useState([])
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
                    for (var i = 0; i < response["data"].length; i++) {
                        if (!response["data"][i].review_write) {
                            array.push({
                                "order_date": response["data"][i].order_date.slice(0, 10),
                                "order_price": response["data"][i].order_price,
                                "product_name": response["data"][i].product_name,
                                "product_image": response["data"][i].product_image,
                                "product_price": response["data"][i].product_price,
                                "review_write": response["data"][i].review_write,
                            })
                        }
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
                                img={item.product_image.length > 0 ? item.product_image : mainlogo}
                                date={item.order_date}
                                title={item.product_name}
                                price={item.product_price}
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
                            img={item.product_image.length > 0 ? item.product_image : mainlogo}
                            date={item.order_date}
                            title={item.product_name}
                            price={item.product_price}
                            mobile={true}
                        />
                    ))}
                </div>
            </Mobile>
        </>
    )
}

function ProductState({ img, date, title, price, mobile }) {
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
                <div onClick={() => history.push("/profileproductinfo")} style={{
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