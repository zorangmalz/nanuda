import React, { useEffect, useState } from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";
import { useHistory } from "react-router";
import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProfileReview() {
    //Get Review Data
    const [data, setData] = useState([])
    useEffect(() => {
        setData([])
        fetch("https://haulfree.link/review", {
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
                var len;
                if (response.length > 4) {
                    len = 4
                } else {
                    len = response.length
                }
                for (var i = 0; i < len; i++) {
                    const dict = {
                        id: response[i].id,
                        user_profile: response[i].user_profile,
                        user_nickname: response[i].user_nickname,
                        review_image: response[i].review_image[0],
                        review_score: response[i].review_score.toFixed(1),
                        review_like: response[i].review_like.length < 39 ? response[i].review_like : response[i].review_like.slice(0, 39) + "...",
                        product_price: 10000,
                    }
                    array.push(dict)
                }
                setData(data.concat(array))
            })
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
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 20,
                            marginTop: 32,
                            marginBottom: 16,
                        }}>아직 리뷰를 작성하지 않았어요!</div>
                        <ProductList mobile={false} />
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
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginLeft: "5vw",
                        marginTop: 28,
                        marginBottom: 12,
                    }}>아직 리뷰를 작성하지 않았어요!</div>
                    <ProductList mobile={true} />
                </div>
            </Mobile>
        </>
    )
}

function ProductList({mobile}) {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
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
                <div style={{
                    width: mobile ? "20vw" : 96,
                    height: mobile ? "20vw" : 96,
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }}></div>
                <div style={{
                    marginLeft: mobile ? "3vw" : 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: mobile ? 12 : 14, fontFamily: "AvenirNext", marginBottom: mobile ? "2vw" : 8 }}>삼베옷 컬렉션, White, 95</div>
                    <div style={{ fontSize: mobile ? 12 : 14, opacity: 0.6, textDecoration: "line-through", marginBottom: mobile ? "2vw" : 8 }}>210,000 원</div>
                    <div style={{ fontSize: mobile ? 14 : 16, fontWeight: "bold", color: "#010608", marginBottom: mobile ? "2vw" : 8 }}>70,000 원에 획득 완료!</div>
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
                <img alt="프로필" src={item.user_profile} style={{
                    width: mobile ? "8vw" : 32,
                    height: mobile ? "8vw" : 32,
                    borderRadius: mobile ? "4vw" : 16,
                }} />
                <div style={{
                    fontSize: mobile ? 12 : 14,
                    fontWeight: "bold",
                    marginLeft: mobile ? "2vw" : 8,
                    marginTop: mobile ? "1.5vw" : 6
                }}>{item.user_nickname} </div>
            </div>
            <img alt="리뷰사진" src={item.review_image} onClick={() => history.push(`/reviewpost/${item.id}`)} style={{
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
            }}>{item.product_price}원에 획득 완료</div>
        </div>
    )
}