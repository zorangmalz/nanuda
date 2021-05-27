import React, { useEffect, useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { useHistory } from "react-router";
import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

function PostThumb({ item }) {
    let history = useHistory()
    return (
        <div style={{
            marginTop: 32,
            cursor: "pointer"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <img alt="프로필" src={item.user_profile} style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                }} />
                <div style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    marginLeft: 8,
                    marginTop: 6
                }}>{item.user_nickname} </div>
            </div>
            <img alt="리뷰사진" src={item.review_image} onClick={() => history.push(`/reviewpost/${item.id}`)} style={{
                width: 210,
                height: 160,
                borderRadius: 6,
                backgroundColor: "#051a1a",
                marginTop: 8,
                objectFit: "cover",
                border: "1px solid #ebebeb"
            }} />
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 8,
            }}>
                <AiFillStar size={16} color="#fad94f" />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#051a1a",
                    marginLeft: 4,
                }}>{item.review_score}</div>
            </div>
            <div style={{
                fontSize: 14,
                opacity: 0.8,
                marginTop: 8,
                width: 210,
                fontFamily: "NotoSansCJKkr"
            }}>{item.review_like}</div>
            <div style={{
                color: "#26c1f0",
                marginTop: 4,
                fontSize: 14,
                fontWeight: "bold",
                fontFamily: "NotoSansCJKkr"
            }}>{item.product_price}원에 획득 완료</div>
        </div>
    )
}

function MPostThumb({ item }) {
    let history = useHistory()
    return (
        <div style={{
            marginTop: "8vw",
            cursor: "pointer"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <img alt="프로필" src={item.user_profile} style={{
                    width: "8vw",
                    height: "8vw",
                    borderRadius: "4vw",
                }} />
                <div style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    marginLeft: 8,
                    marginTop: 6
                }}>{item.user_nickname} </div>
            </div>
            <img alt="리뷰사진" src={item.review_image} onClick={() => history.push(`/reviewpost/${item.id}`)} style={{
                width: "42vw",
                height: "32vw",
                borderRadius: 6,
                backgroundColor: "#051a1a",
                marginTop: "2vw",
                objectFit: "cover",
                border: "1px solid #ebebeb"
            }} />
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: "2vw",
            }}>
                <AiFillStar size={12} color="#fad94f" />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#051a1a",
                    marginLeft: 4,
                }}>{item.review_score}</div>
            </div>
            <div style={{
                fontSize: 12,
                opacity: 0.8,
                marginTop: 8,
                width: "42vw",
                fontFamily: "NotoSansCJKkr"
            }}>{item.review_like}</div>
            <div style={{
                color: "#26c1f0",
                marginTop: 4,
                fontSize: 12,
                fontWeight: "bold",
                fontFamily: "NotoSansCJKkr"
            }}>{item.product_price}원에 획득 완료</div>
        </div>
    )
}

function ProductList() {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            paddingBottom: 16,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            width: 440,
            alignSelf: "center",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div style={{
                    width: 96,
                    height: 96,
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }}></div>
                <div style={{
                    marginLeft: 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 14, fontFamily: "AvenirNext", marginBottom: 8 }}>삼베옷 컬렉션, White, 95</div>
                    <div style={{ fontSize: 14, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>210,000 원</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>70,000 원에 획득 완료!</div>
                </div>
            </div>
            <MdKeyboardArrowRight style={{
                marginRight: 8,
            }} size={24} color="rgba(5, 26, 26, 0.2)" />
        </div>
    )
}

function MProductList() {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            paddingBottom: 12,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            width: "90vw",
            alignSelf: "center",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div style={{
                    width: "20vw",
                    height: "20vw",
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: 12,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 12, fontFamily: "AvenirNext", marginBottom: 8 }}>삼베옷 컬렉션, White, 95</div>
                    <div style={{ fontSize: 12, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>210,000 원</div>
                    <div style={{ fontSize: 14, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>70,000 원에 획득 완료!</div>
                </div>
            </div>
            <MdKeyboardArrowRight style={{
                marginRight: 4,
            }} size={20} color="rgba(5, 26, 26, 0.2)" />
        </div>
    )
}

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
            }
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
                        paddingBottom: 40,
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
                                <PostThumb item={item} />
                            ))}
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202426",
                            marginLeft: 20,
                            marginTop: 32,
                            marginBottom: 16,
                        }}>아직 리뷰를 작성하지 않았어요!</div>
                        <ProductList />
                        <ProductList />
                        <ProductList />
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
                    paddingBottom: 20,
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
                            <MPostThumb item={item} />
                        ))}
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        marginLeft: "5vw",
                        marginTop: 28,
                        marginBottom: 12,
                    }}>아직 리뷰를 작성하지 않았어요!</div>
                    <MProductList />
                    <MProductList />
                    <MProductList />
                </div>
            </Mobile>
        </>
    )
}