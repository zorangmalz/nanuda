import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import { Header, MStandardButton, StandardButton, StandardChoiceModal, StandardModal, numberWithCommas } from "../Style";
import { useHistory } from "react-router";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri"
import mainlogo from "../images/mainlogo.png"

export default function ReviewPost({ match }) {
    let history = useHistory()
    const { pk } = match.params
    const [data, setData] = useState({
        user_id: "",
        order_id: "",
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
        product_name: "",
        product_image: "",
        product_price: 0,
        order_price: 0,
    })

    //좋아요 싫어요 버튼 
    const [like, setLike] = useState(0)
    useEffect(() => {
        const { pk } = match.params
        fetch(`https://haulfree.link/review/${pk}`, {
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
                setData({
                    ...data,
                    user_id: response.user_id,
                    order_id: response.order_id,
                    user_profile: response.user_profile,
                    user_nickname: response.user_nickname,
                    review_image: response.review_image != null ? response.review_image[0] : "",
                    review_date: response.review_date.slice(0, 10),
                    review_score: response.review_score,
                    review_like: response.review_like,
                    review_dislike: response.review_dislike,
                    review_likeNum: response.review_likeNum,
                    review_dislikeNum: response.review_dislikeNum,
                    review_alert: response.review_alert,
                    product_name: response.product_name,
                    product_image: response.product_image,
                    product_price: response.product_price,
                    order_price: response.order_price,
                })
            }).catch(error => console.log(error))
    }, [like])

    const putAlert = async () => {
        var body = {
            id: pk, user_id: data.user_id,
            order_id: data.order_id, review_alert: data.review_alert + 1
        }
        await fetch(`https://haulfree.link/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
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
                user_id: data.user_id, order_id: data.order_id,
            }
        } else if (like == 2) {
            body = {
                id: pk, review_dislikeNum: data.review_dislikeNum - 1,
                review_likeNum: data.review_likeNum + 1,
                user_id: data.user_id, order_id: data.order_id,
            }
        }

        await fetch(`https://haulfree.link/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
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
                user_id: data.user_id, order_id: data.order_id
            }
        } else if (like == 2) {
            body = {
                id: pk, review_dislikeNum: data.review_dislikeNum - 1,
                user_id: data.user_id, order_id: data.order_id
            }
        }
        await fetch(`https://haulfree.link/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
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
                user_id: data.user_id, order_id: data.order_id
            }
        } else if (like == 1) {
            body = {
                id: pk, review_likeNum: data.review_likeNum - 1,
                review_dislikeNum: data.review_dislikeNum + 1,
                user_id: data.user_id, order_id: data.order_id
            }
        }
        await fetch(`https://haulfree.link/review/${pk}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                setLike(2)
            }).catch(err => console.log(err))
    }

    const deletePost = async () => {
        await fetch(`https://haulfree.link/review/${pk}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
        history.goBack()
    }

    const [mine, setMine] = useState(true)
    const [modal, setModal] = useState(false)
    const [finishModal, setFinishModal] = useState(false)
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
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="나눠산 사람들" goBack={true} />
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 32 }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <img alt="프로필" src={data.user_profile.length > 0 ? data.user_profile : mainlogo} style={{
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
                            {modal && mine ?
                                <StandardChoiceModal
                                    title="삭제하시겠습니까?"
                                    content="삭제한 게시물은 되돌릴 수 없습니다."
                                    canceltext="취소"
                                    onCancelClick={() => setModal(true)}
                                    buttontext="삭제하기"
                                    onClick={() => {
                                        setModal(false)
                                        setFinishModal(true) 
                                    }}
                                    mobile={false}
                                />
                                :
                                <></>
                            }
                            {finishModal && mine ? 
                                <StandardModal 
                                    title="삭제완료"
                                    content="내 리뷰에서 다시 작성할 수 있습니다."
                                    buttontext="확인"
                                    onClick={deletePost}
                                    mobile={false}
                                />
                                :
                                <></>
                            }
                            {modal && !mine ?
                                <StandardChoiceModal
                                    title="신고하시겠습니까?"
                                    content="신고된 게시물은 운영팀에게 전달됩니다."
                                    canceltext="취소"
                                    onCancelClick={() => setModal(true)}
                                    buttontext="신고하기"
                                    onClick={() => {}}
                                    mobile={false}
                                />
                                :
                                <></>
                            }
                            {mine ?
                                <div onClick={() => setModal(true)} style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 14,
                                    color: "#010608",
                                    textDecorationLine: "underline",
                                    marginRight: 20,
                                    cursor: "pointer",
                                }}>삭제하기</div>
                                :
                                <div onClick={putAlert} style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 14,
                                    color: "#010608",
                                    textDecorationLine: "underline",
                                    marginRight: 20,
                                    cursor: "pointer"
                                }}>신고하기</div>
                            }
                        </div>
                        <img alt="제품 사진" src={data.review_image} style={{
                            width: 480,
                            backgroundColor: "#26c1f0",
                            marginTop: 8,
                        }} />
                        <ReviewProduct
                            product_name={data.product_name}
                            product_image={data.product_image}
                            product_price={data.product_price}
                            order_price={data.order_price}
                            border={false}
                            mobile={false}
                        />
                        <div style={{
                            marginTop: 16,
                            width: 480,
                            border: "0.5px solid #010608",
                            opacity: 0.2
                        }}></div>
                        <div style={{
                            marginLeft: 20,
                            marginTop: 16,
                            fontSize: 12,
                            opacity: 0.6,
                            fontFamily: "NotoSansCJKkr",
                            color: "#010608",
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
                            {like === 0 ? <AiOutlineLike onClick={putLike} size={24} color="#010608" /> : like === 1 ? <AiFillLike onClick={putReset} size={24} color="#010608" /> : <AiOutlineLike onClick={putLike} size={24} color="#010608" />}
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#010608",
                                marginLeft: 8,
                                marginRight: 12,
                            }}>{data.review_likeNum}</div>
                            {like === 0 ? <AiOutlineDislike onClick={putDisLike} size={24} color="#010608" /> : like === 2 ? <AiFillDislike onClick={putReset} size={24} color="#010608" /> : <AiOutlineDislike onClick={putDisLike} size={24} color="#010608" />}
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#010608",
                                marginLeft: 8,
                            }}>{data.review_dislikeNum}</div>
                        </div>
                        <StandardButton
                            marginTop={30}
                            text="위시딜 신청하기"
                            onClick={() => history.push("/wishdeal/main")}
                            state={true}
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
                    paddingBottom: "5vw"
                }}>
                    <Header content="나눠산 사람들" goBack={true} />
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <img alt="프로필" src={data.user_profile.length > 0 ? data.user_profile : mainlogo} style={{
                                width: 28,
                                height: 28,
                                backgroundColor: "#f2f3f8",
                                marginLeft: "5vw",
                                borderRadius: 14
                            }} />
                            <div style={{
                                marginLeft: 5,
                                fontFamily: "AvenirNext",
                                fontWeight: "bold",
                                fontSize: 12
                            }}>{data.user_nickname}</div>
                        </div>
                        {modal && mine ?
                            <StandardChoiceModal
                                title="삭제하시겠습니까?"
                                content="삭제한 게시물은 되돌릴 수 없습니다."
                                canceltext="취소"
                                onCancelClick={() => setModal(true)}
                                buttontext="삭제하기"
                                onClick={() => {
                                    setModal(false)
                                    setFinishModal(true) 
                                }}
                                mobile={true}
                            />
                            :
                            <></>
                        }
                        {finishModal && mine ?
                            <StandardModal
                                title="삭제완료"
                                content="내 리뷰에서 다시 작성할 수 있습니다."
                                buttontext="확인"
                                onClick={deletePost}
                                mobile={true}
                            />
                            :
                            <></>
                        }
                        {modal && !mine ?
                            <StandardChoiceModal
                                title="신고하시겠습니까?"
                                content="신고된 게시물은 운영팀에게 전달됩니다."
                                canceltext="취소"
                                onCancelClick={() => setModal(true)}
                                buttontext="신고하기"
                                onClick={() => { }}
                                mobile={true}
                            />
                            :
                            <></>
                        }
                        {mine ?
                            <div onClick={() => setModal(true)} style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#010608",
                                textDecorationLine: "underline",
                                marginRight: "5vw",
                                cursor: "pointer",
                            }}>삭제하기</div>
                            :
                            <div onClick={putAlert} style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#010608",
                                textDecorationLine: "underline",
                                marginRight: "5vw",
                                cursor: "pointer"
                            }}>신고하기</div>
                        }
                    </div>
                    <img alt="사진" src={data.review_image} style={{ width: "100vw", backgroundColor: "#26c1f0", marginTop: 8 }} />
                    <ReviewProduct
                        product_name={data.product_name}
                        product_image={data.product_image}
                        product_price={data.product_price}
                        order_price={data.order_price}
                        border={false}
                        mobile={true}
                    />
                    <div style={{
                        marginTop: 12,
                        width: "100vw",
                        border: "0.5px solid #010608",
                        opacity: 0.2
                    }}></div>
                    <div style={{
                        marginLeft: "5vw",
                        marginTop: "4vw",
                        fontSize: 10,
                        opacity: 0.6,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",
                    }}>{data.review_date}</div>
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
                    }}>{data.review_like}</div>
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
                    }}>{data.review_dislike}</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        {like === 0 ? <AiOutlineLike onClick={putLike} size={20} color="#010608" /> : like === 1 ? <AiFillLike onClick={putReset} size={20} color="#010608" /> : <AiOutlineLike onClick={putLike} size={20} color="#010608" />}
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#010608",
                            marginLeft: 4,
                            marginRight: 8,
                        }}>{data.review_likeNum}</div>
                        {like === 0 ? <AiOutlineDislike onClick={putDisLike} size={20} color="#010608" /> : like === 2 ? <AiFillDislike onClick={putReset} size={20} color="#010608" /> : <AiOutlineDislike onClick={putDisLike} size={20} color="#010608" />}
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#010608",
                            marginLeft: 4,
                        }}>{data.review_dislikeNum}</div>
                    </div>
                    <MStandardButton
                        marginTop={20}
                        text="위시딜 신청하기"
                        onClick={() => history.push("/wishdeal/main")}
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
                    <div style={{ position: "relative", marginRight: 5, width: size, height: size }}>
                        <FaStarHalf size={size} color="#ffd700" style={{ position: "absolute", top: 0, zIndex: 1 }} />
                        <FaStar size={size} color="#dbdbdb" style={{ position: "absolute", top: 0, zIndex: 0 }} />
                    </div>
                    :
                    <FaStar size={size} color="#dbdbdb" style={{ marginRight: 5 }} />
            }
        </>
    )
}

function ReviewProduct({ product_image, product_name, product_price, order_price, border, mobile }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: mobile ? "5vw" : 20,

            paddingBottom: border ? 16 : 0,
            borderBottom: border ? "1px solid rgba(1, 6, 8, 0.2)" : 0,
            width: mobile ? "90vw" : 440,
        }}>
            <div style={{
                marginTop: mobile ? "4vw" : 16,
                display: "flex",
                flexDirection: "row",
            }}>
                <img alt="상품" src={product_image} style={{
                    width: mobile ? 80 : 96,
                    height: mobile ? 80 : 96,
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: mobile ? 12 : 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: mobile ? 12 : 14, fontFamily: "AvenirNext", marginBottom: mobile ? "2vw" : 8 }}>{product_name}</div>
                    <div style={{ fontSize: mobile ? 12 : 14, opacity: 0.6, textDecoration: "line-through", marginBottom: mobile ? "2vw" : 8 }}>{numberWithCommas(product_price)} 원</div>
                    <div style={{ fontSize: mobile ? 14 : 16, fontWeight: "bold", color: "#010608", marginBottom: mobile ? "2vw" : 8 }}>{numberWithCommas(order_price)} 원에 획득 완료!</div>
                </div>
            </div>
            <RiArrowRightSLine color="#dfdfdf" size={mobile ? 20 : 24} style={{ cursor: "pointer" }} />
        </div>
    )
}