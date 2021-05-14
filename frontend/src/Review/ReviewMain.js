import React, { useEffect, useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { useHistory } from "react-router";
import { AiFillStar } from "react-icons/ai";
import nodata from "../images/nodata.png";

export default function ReviewMain() {
    let history = useHistory()
    const [like, setLike] = useState(0)
    function onLike() {
        setLike(1)
    }
    function onDislike() {
        setLike(2)
    }
    function onReset() {
        setLike(0)
    }

    //Get Review Data
    const [data, setData] = useState([])
    useEffect(() => {
        setData([])
        fetch("http://127.0.0.1:8000/review", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                var array = []
                for (var i = 0; i < response.length; i++) {
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

                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="나눠산 사람들" goBack={true} />
                        <div style={{
                            width: 440,
                            height: 150,
                            marginTop: 32,
                            marginLeft: 20,
                            backgroundColor: "#cb1a86",
                            borderRadius: 6
                        }}>
                            <div style={{
                                fontSize: 18,
                                color: "#ffffff",
                                marginLeft: 32,
                                marginTop: 32
                            }}>다른 사람들은 어떤걸 샀을까?</div>
                            <div style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "#ffffff",
                                marginTop: 16,
                                marginLeft: 32
                            }}>뽐뿌가 왔다면 위시딜!</div>
                        </div>
                        {data.length === 0 ?
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "60vh",
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
                                    color: "#202426"
                                }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 18,
                                    opacity: 0.6,
                                    color: "#202426"
                                }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                            </div>
                            :
                            <div style={{
                                display: "grid",
                                flexDirection: "row",
                                width: 240,
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gridTemplateColumns: "1fr 1fr",
                                marginBottom: 100,
                            }}>
                                {data.map(item =>
                                    <div style={{
                                        marginLeft: 20,
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
                                )}
                            </div>
                        }
                        <div onClick={() => history.push("/reviewselect")} style={{
                            position: "fixed",
                            zIndex: 5,
                            bottom: 0,
                            borderRadius: 8,
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            alignSelf: "center",
                            backgroundColor: "#26c1f0",

                            textAlign: "center",
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginBottom: 30,
                        }}>리뷰 작성하기</div>
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
                    <MHeader content="나눠산 사람들" goBack={true} />
                    <div style={{
                        width: "90vw",
                        height: "30vw",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        backgroundColor: "#cb1a86",
                        borderRadius: 6
                    }}>
                        <div style={{
                            fontSize: 16,
                            color: "#ffffff",
                            marginLeft: "8vw",
                            marginTop: "8vw"
                        }}>다른 사람들은 어떤걸 샀을까?</div>
                        <div style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#ffffff",
                            marginTop: "4vw",
                            marginLeft: "8vw"
                        }}>뽐뿌가 왔다면 위시딜!</div>
                    </div>
                    {data.length === 0 ?
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "60vh",
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
                                color: "#202426"
                            }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                opacity: 0.6,
                                color: "#202426"
                            }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                        </div>
                        :
                        <div style={{
                            display: "grid",
                            flexDirection: "row",
                            width: "45vw",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gridTemplateColumns: "1fr 1fr",
                            marginBottom: "20vw",
                        }}>
                            {data.map(item =>
                                <div style={{
                                    marginLeft: "5vw",
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
                            )}
                        </div>
                    }
                    <div onClick={() => history.push("/reviewselect")} style={{
                        position: "fixed",
                        zIndex: 5,
                        bottom: 0,
                        borderRadius: 8,
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        alignSelf: "center",
                        backgroundColor: "#26c1f0",

                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginBottom: "7vw",
                    }}>리뷰 작성하기</div>
                </div>
            </Mobile>
        </>
    )
}