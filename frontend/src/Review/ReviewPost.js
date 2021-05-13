import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import { useHistory } from "react-router";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Product, MProduct } from "./ReviewSelect";
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function ReviewPost({match}) {
    let history = useHistory()
    const { pk } = match.params
    const [data, setData] = useState({
        user_id: "",
        product_id: "",
        user_profile: "",
        user_nickname: "",
        review_image: "",
        review_date: "",
        review_score: 0,
        review_like: "",
        review_dislike: "",
        review_likeNum: 0,
        review_dislikeNum: 0,
        review_alert: 0,
    })

    //좋아요 싫어요 버튼 
    const [like, setLike] = useState(0)
    useEffect(() => {
        const { pk } = match.params
        fetch(`http://127.0.0.1:8000/review/${pk}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                setData({
                    ...data,
                    user_id: response.user_id,
                    product_id: response.product_id,
                    user_profile: response.user_profile,
                    user_nickname: response.user_nickname,
                    review_image: response.review_image[0],
                    review_date: response.review_date.slice(0, 10),
                    review_score: response.review_score,
                    review_like: response.review_like,
                    review_dislike: response.review_dislike,
                    review_likeNum: response.review_likeNum,
                    review_dislikeNum: response.review_dislikeNum,
                    review_alert: response.review_alert
                })
            }).catch(error => console.log(error))
    }, [like])

    const putAlert = async () => {
        var body = {
            id: pk, user_id: data.user_id, 
            product_id: data.product_id, review_alert: data.review_alert + 1
        }
        await fetch(`http://127.0.0.1:8000/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                setMine(false)
            }).catch(err => console.log(err))
    }

    const putLike = async () => {
        var body;
        if (like == 0) {
            body = {
                id: pk, review_likeNum: data.review_likeNum + 1,
                user_id: data.user_id, product_id: data.product_id,
            }
        } else if (like == 2) {
            body = {
                id: pk, review_dislikeNum: data.review_dislikeNum - 1,
                review_likeNum: data.review_likeNum + 1,
                user_id: data.user_id, product_id: data.product_id,
            }
        }
        
        await fetch(`http://127.0.0.1:8000/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                setLike(1)
            }).catch(err => console.log(err))
    }

    const putReset = async () => {
        var body;
        if (like == 1) {
            body = {
                id: pk, review_likeNum: data.review_likeNum - 1,
                user_id: data.user_id, product_id: data.product_id
            }
        } else if (like == 2) {
            body = {
                id: pk, review_dislikeNum: data.review_dislikeNum - 1,
                user_id: data.user_id, product_id: data.product_id
            }
        }
        await fetch(`http://127.0.0.1:8000/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                setLike(0)
            }).catch(err => console.log(err))
    }

    const putDisLike = async () => {
        var body;
        if (like == 0) {
            body = {
                id: pk, review_dislikeNum: data.review_dislikeNum + 1,
                user_id: data.user_id, product_id: data.product_id
            }
        } else if (like == 1) {
            body = {
                id: pk, review_likeNum: data.review_likeNum - 1,
                review_dislikeNum: data.review_dislikeNum + 1,
                user_id: data.user_id, product_id: data.product_id
            }
        }
        await fetch(`http://127.0.0.1:8000/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                setLike(2)
            }).catch(err => console.log(err))
    }
    

    const [mine, setMine] = useState(false)
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
                    <WebIntro />
                    {/* 절반을 나눔 */}
                    <div style={{
                        width: "50%",
                        minWidth: 480,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
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
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 32 }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <img alt="프로필" src={data.user_profile} style={{
                                        width: 32,
                                        height: 32,
                                        backgroundColor: "#f2f3f8",
                                        marginLeft: 20,
                                        borderRadius: 16
                                    }} />
                                    <div style={{
                                        marginLeft: 8,
                                        fontFamily: "AvenirNext",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>{data.user_nickname}</div>
                                </div>
                                {mine ?
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        opacity: 0.6,
                                        fontSize: 14,
                                        color: "#202426",
                                        textDecorationLine: "underline",
                                        marginRight: 20,
                                        cursor: "pointer",
                                    }}>삭제하기</div>
                                    :
                                    <div onClick={putAlert} style={{
                                        fontFamily: "NotoSansCJKkr",
                                        opacity: 0.6,
                                        fontSize: 14,
                                        color: "#202426",
                                        textDecorationLine: "underline",
                                        marginRight: 20,
                                        cursor: "pointer"
                                    }}>신고하기</div>
                                }
                            </div>

                            <img alt="제품 사진" src={data.review_image}  style={{ 
                                width: 480, 
                                backgroundColor: "#2dd9d3", 
                                marginTop: 8,
                            }} />

                            <Product
                                name="삼배옷 컬랙션, White, 95"
                                current={210000}
                                sale={70000}
                                border={false}
                            />
                            <div style={{
                                marginTop: 16,
                                width: 480,
                                border: "0.5px solid #051a1a",
                                opacity: 0.2
                            }}></div>
                            <div style={{
                                marginLeft: 20,
                                marginTop: 16,
                                fontSize: 12,
                                opacity: 0.6,
                                fontFamily: "NotoSansCJKkr",
                                color: "#202426",
                            }}>{data.review_date}</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: 20,
                                marginTop: 8
                            }}>
                                <CustomStar score={data.review_score} num={1} size={28} />
                                <CustomStar score={data.review_score} num={2} size={28} />
                                <CustomStar score={data.review_score} num={3} size={28} />
                                <CustomStar score={data.review_score} num={4} size={28} />
                                <CustomStar score={data.review_score} num={5} size={28} />
                            </div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#26c1f0",
                                marginLeft: 20,
                                marginTop: 32,
                            }}>좋았어요!</div>
                            <div style={{
                                marginTop: 8,
                                marginLeft: 20,
                                width: 440,
                                fontSize: 14,
                                lineHeight: 1.5
                            }}>{data.review_like}</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#f72b2b",
                                marginLeft: 20,
                                marginTop: 32,
                            }}>별로였어요.</div>
                            <div style={{
                                marginTop: 8,
                                marginLeft: 20,
                                width: 440,
                                fontSize: 14,
                                lineHeight: 1.5
                            }}>{data.review_dislike}</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 16,
                                marginLeft: 20,
                            }}>
                                {like === 0 ? <AiOutlineLike onClick={putLike} size={24} color="#051a1a" /> : like === 1 ? <AiFillLike onClick={putReset} size={24} color="#051a1a" /> : <AiOutlineLike onClick={putLike} size={24} color="#051a1a" />}
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    color: "#202426",
                                    marginLeft: 8,
                                    marginRight: 12,
                                }}>{data.review_likeNum}</div>
                                {like === 0 ? <AiOutlineDislike onClick={putDisLike} size={24} color="#051a1a" /> : like === 2 ? <AiFillDislike onClick={putReset} size={24} color="#051a1a" /> : <AiOutlineDislike onClick={putDisLike} size={24} color="#051a1a" />}
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    color: "#202426",
                                    marginLeft: 8,
                                }}>{data.review_dislikeNum}</div>
                            </div>
                            <StandardButton 
                                marginTop={30}
                                text="위시딜 신청하기"
                                onClick={() => history.push("/wishdeal")}
                                state={true}
                            />
                        </div>
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
                    paddingBottom: "5vw"
                }}>
                    <Header content="나눠산 사람들" goBack={true} />
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <div style={{
                                width: 28,
                                height: 28,
                                backgroundColor: "#f2f3f8",
                                marginLeft: "5vw",
                                borderRadius: 14
                            }}>
                            </div>
                            <div style={{
                                marginLeft: 5,
                                fontFamily: "AvenirNext",
                                fontWeight: "bold",
                                fontSize: 12
                            }}>나누다홀릭</div>
                        </div>
                        {mine ?
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#202426",
                                textDecorationLine: "underline",
                                marginRight: "5vw",
                                cursor: "pointer",
                            }}>삭제하기</div>
                            :
                            <div onClick={putAlert} style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#202426",
                                textDecorationLine: "underline",
                                marginRight: "5vw",
                                cursor: "pointer"
                            }}>신고하기</div>
                        }
                    </div>

                    <div style={{ width: "100vw", height: "105vw", backgroundColor: "#2dd9d3", marginTop: 8 }}></div>

                    <MProduct
                        name="삼배옷 컬랙션, White, 95"
                        current={210000}
                        sale={70000}
                        border={false}
                    />
                    <div style={{
                        marginTop: 12,
                        width: "100vw",
                        border: "0.5px solid #051a1a",
                        opacity: 0.2
                    }}></div>
                    <div style={{
                        marginLeft: "5vw",
                        marginTop: "4vw",
                        fontSize: 10,
                        opacity: 0.6,
                        fontFamily: "NotoSansCJKkr",
                        color: "#202426",
                    }}> 2021.03.30 </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "5vw",
                        marginTop: 12
                    }}>
                        <CustomStar score={data.review_score} num={1} size={20} />
                        <CustomStar score={data.review_score} num={2} size={20} />
                        <CustomStar score={data.review_score} num={3} size={20} />
                        <CustomStar score={data.review_score} num={4} size={20} />
                        <CustomStar score={data.review_score} num={5} size={20} />
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>좋았어요!</div>
                    <div style={{
                        marginTop: "2vw",
                        marginLeft: "5vw",
                        width: "90vw",
                        fontSize: 12,
                        lineHeight: 1.5
                    }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#f72b2b",
                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>별로였어요.</div>
                    <div style={{
                        marginTop: "2vw",
                        marginLeft: "5vw",
                        width: "90vw",
                        fontSize: 12,
                        lineHeight: 1.5
                    }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        {like === 0 ? <AiOutlineLike onClick={putLike} size={20} color="#051a1a" /> : like === 1 ? <AiFillLike onClick={putReset} size={20} color="#051a1a" /> : <AiOutlineLike onClick={putLike} size={20} color="#051a1a" />}
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#202426",
                            marginLeft: 4,
                            marginRight: 8,
                        }}>100</div>
                        {like === 0 ? <AiOutlineDislike onClick={putDisLike} size={20} color="#051a1a" /> : like === 2 ? <AiFillDislike onClick={putReset} size={20} color="#051a1a" /> : <AiOutlineDislike onClick={putDisLike} size={20} color="#051a1a" />}
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#202426",
                            marginLeft: 4,
                        }}>100</div>
                    </div>
                    <MStandardButton
                        marginTop={20}
                        text="위시딜 신청하기"
                        onClick={() => history.push("/wishdeal")}
                        state={true}
                    />
                </div>
            </Mobile>
        </>
    )
}

function CustomStar({ score, num, size }) {
    var zero = parseFloat(num.toFixed(1) - score.toFixed(1))
    return (
        <>
            {num.toFixed(1) <= score.toFixed(1) ?
                <FaStar size={size} color="#ffd700" style={{ marginRight: 5 }} />
                :
                zero > 0 && zero < 1 ?
                    <div style={{position: "relative", marginRight: 5, width: size, height: size}}>
                        <FaStarHalf size={size} color="#ffd700" style={{ position: "absolute", top: 0, zIndex: 1 }} />
                        <FaStar size={size} color="#dbdbdb" style={{ position: "absolute", top: 0, zIndex: 0 }} />
                    </div>
                    :
                    <FaStar size={size} color="#dbdbdb" style={{ marginRight: 5 }} />
            }
        </>
    )
}