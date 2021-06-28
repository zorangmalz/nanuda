import React, { useEffect, useState } from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader, NameMask, numberWithCommas } from "../Style";
import { useHistory } from "react-router";
import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import nodata from "../images/nodata.png";
import mainlogo from "../images/mainlogo.png";

export default function ProfileReview() {
    //Get Review Data
    const [data, setData] = useState([])
    useEffect(() => {
        setData([])
        fetch("https://haulfree.link/review/profile/0", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
                var array = []
                for (var i = 0; i < response["review_list"].length; i++) {
                    array.push({
                        id: response["review_list"][i].id,
                        order_price: response["review_list"][i].order_price,
                        review_image: response["review_list"][i].review_image[0],
                        review_like: response["review_list"][i].review_like,
                        review_score: response["review_list"][i].review_score,
                        user_name: response["review_list"][i].user_name,
                    })
                }
                setData(data.concat(array))
            })
            .catch(err => console.log(err))
    }, [])

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
                                "id": response["data"][i].id,
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
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="내 리뷰" goBack={true} />
                        {data.length === 0 ?
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: orderData.length > 0 ? "60vh" : "90vh",
                                width: "100%",
                            }}>
                                <img
                                    src={nodata}
                                />
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    marginTop: 32,
                                    marginBottom: 8,
                                    color: "#010608"
                                }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 18,
                                    opacity: 0.6,
                                    color: "#010608"
                                }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                            </div>
                            :
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                width: 440,
                                columnGap: 20,
                                alignSelf: "center",
                            }}>
                                {data.map(item => (
                                    <PostThumb item={item} mobile={false} />
                                ))}
                            </div>
                        }
                        {orderData.length > 0 ? <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 20,
                            marginTop: 32,
                            marginBottom: 16,
                        }}>아직 리뷰를 작성하지 않았어요!</div> : <></>}
                        {orderData.map(item => (
                            <ProductList item={item} mobile={false} />
                        ))}
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="내 리뷰" goBack={true} />
                    {data.length === 0 ?
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: orderData.length > 0 ? "60vh" : "90vh",
                            width: "100%",
                        }}>
                            <img
                                src={nodata}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 20,
                                fontWeight: "bold",
                                marginTop: "8vw",
                                marginBottom: "2vw",
                                color: "#010608"
                            }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                opacity: 0.6,
                                color: "#010608"
                            }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                        </div>
                        :
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            width: "90vw",
                            columnGap: "5vw",
                            alignSelf: "center",
                        }}>
                            {data.map(item => (
                                <PostThumb item={item} mobile={true} />
                            ))}
                        </div>
                    }
                    {orderData.length > 0 ?
                        <>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#010608",
                                marginLeft: "5vw",
                                marginTop: 28,
                                marginBottom: 12,
                            }}>아직 리뷰를 작성하지 않았어요!</div>
                            {orderData.map(item => (
                                <ProductList item={item} mobile={true} />
                            ))}
                        </>
                        : 
                        <></>
                    }
                </div>
            </Mobile>
        </>
    )
}

function ProductList({ item, mobile }) {
    let history = useHistory()
    return (
        <div onClick={() => history.push({
            pathname: "/review/write",
            state: {item: item},
        })} style={{
            marginTop: mobile ? "4vw" : 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            paddingBottom: mobile ? "4vw" : 16,
            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
            width: mobile ? "90vw" : 440,
            alignSelf: "center",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <img alt="제품 이미지" src={item.product_image.length > 0 ? item.product_image : mainlogo} style={{
                    width: mobile ? "20vw" : 96,
                    height: mobile ? "20vw" : 96,
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: mobile ? "3vw" : 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: mobile ? 12 : 14, fontFamily: "AvenirNext", marginBottom: mobile ? "2vw" : 8 }}>{item.product_name}</div>
                    <div style={{ fontSize: mobile ? 12 : 14, opacity: 0.6, textDecoration: "line-through", marginBottom: mobile ? "2vw" : 8 }}>{numberWithCommas(item.product_price)} 원</div>
                    <div style={{ fontSize: mobile ? 14 : 16, fontWeight: "bold", color: "#010608", marginBottom: mobile ? "2vw" : 8 }}>{numberWithCommas(item.order_price)} 원에 획득 완료!</div>
                </div>
            </div>
            <MdKeyboardArrowRight style={{
                marginRight: mobile ? "2vw" : 8,
            }} size={mobile ? 20 : 24} color="rgba(1, 6, 8, 0.2)" />
        </div>
    )
}

function PostThumb({ item, mobile }) {
    let history = useHistory()
    return (
        <div style={{
            marginTop: mobile ? "8vw" : 32,
            cursor: "pointer"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{
                    fontSize: mobile ? 12 : 14,
                    fontWeight: "bold",
                    marginTop: mobile ? "1.5vw" : 6
                }}>{NameMask(item.user_name)} </div>
            </div>
            <img alt="리뷰사진" src={item.review_image} onClick={() => history.push(`/review/post/${item.id}`)} style={{
                width: mobile ? "42vw" : 210,
                height: mobile ? "32vw" : 160,
                borderRadius: 6,
                backgroundColor: "#010608",
                marginTop: mobile ? "2vw" : 8,
                objectFit: "cover",
                border: "1px solid #ebebeb"
            }} />
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: mobile ? "2vw" : 8,
            }}>
                <AiFillStar size={mobile ? 12 : 16} color="#fad94f" />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 12 : 14,
                    fontWeight: "bold",
                    color: "#010608",
                    marginLeft: mobile ? "1vw" : 4,
                }}>{item.review_score}</div>
            </div>
            <div style={{
                fontSize: mobile ? 12 : 14,
                opacity: 0.8,
                marginTop: 8,
                width: mobile ? "42vw" : 210,
                fontFamily: "NotoSansCJKkr"
            }}>{item.review_like}</div>
            <div style={{
                color: "#26c1f0",
                marginTop: mobile ? "1vw" : 4,
                fontSize: mobile ? 12 : 14,
                fontWeight: "bold",
                fontFamily: "NotoSansCJKkr"
            }}>{numberWithCommas(item.order_price)}원에 획득 완료</div>
        </div>
    )
}