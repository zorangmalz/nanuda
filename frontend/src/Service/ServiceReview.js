import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import { Header, MHeader, NameMask, StandardChoiceModal } from "../Style";
import { AiFillStar } from "react-icons/ai";
import servicereviewbanner from "../images/servicereviewbanner.png"

export default function ServiceReview() {
    //Get Review Data
    const [reviewData, setReviewData] = useState([])
    const [noReview, setNoReview] = useState(false)

    async function checkReview() {
        await fetch("https://api.1n1n.io/servicereviewornot/", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
                if (response.data === true) {
                    setNoReview(true)
                } else {
                    setNoReview(false)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        checkReview()
        setReviewData([])
        fetch("https://api.1n1n.io/servicereview/main", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            },
            credentials: "include"
        })
            .then(res => res.json())
            .then(response => {
                if (response != null && response != undefined) {
                    var array = []
                    for (var i = 0; i < response.length; i++) {
                        const data = {
                            service_score: response[i].service_score.toFixed(1),
                            user_name: response[i].user_name,
                            user_age: response[i].user_age,
                            user_gender: response[i].user_gender,
                            service_date: response[i].service_date,
                            service_content: response[i].service_content,
                        }
                        array.push(data)
                    }
                    setReviewData(reviewData.concat(array))
                }
            })
    }, [])

    let history = useHistory()


    useEffect(() => {
        const test = async () => {
            fetch("https://api.1n1n.io/userInfoName/", {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: "include",
            })
                .then((response) => (response.json()))
                .then(response => {
                    setIsLogin(response.data)
                }).catch(err => {
                    console.log(err)
                })
        }
        test()
    }, [])

    const [isLogin, setIsLogin] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
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

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        paddingBottom: reviewData.length > 3 ? 150 : 0,
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="나눠본 사람들" goBack={true} />
                        <img src={servicereviewbanner} style={{
                            width: 440,
                            marginTop: 32,
                            marginLeft: 20,
                            marginBottom: 32,
                        }} />
                        {reviewData.map(item =>
                            <Review
                                item={item}
                                mobile={false}
                            />
                        )}
                        <div onClick={isLogin ? noReview ? () => history.push("/service/write") : () => {} : () => setLoginModal(true)} style={{
                            position: "fixed",
                            bottom: 40,
                            width: 440,
                            alignSelf: "center",
                            paddingTop: 21,
                            paddingBottom: 21,
                            backgroundColor: isLogin ? noReview ? "#26c1f0" : "#dbdbdb" : "#26c1f0",
                            borderRadius: 6,
                            boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                            color: "#ffffff",
                            fontSize: 21,
                            fontWeight: "bold",
                            textAlign: "center",
                            cursor: isLogin ? noReview ? "pointer" : "auto" : "pointer",
                            fontFamily: "NotoSansCJKkr"
                        }}>{isLogin ? "첫 후기 작성하고 2천 포인트 받기" : "회원가입 하고 후기 작성하기"}</div>
                        {loginModal ?
                            <StandardChoiceModal
                                title="회원가입이 필요한 서비스입니다."
                                content={<span>지금 바로 회원가입하고 <br /> 다양한 상품을 분할결제 해보세요!</span>}
                                canceltext="취소"
                                onCancelClick={() => setLoginModal(false)}
                                buttontext="회원가입"
                                onClick={() => history.push("/signup/main")}
                                mobile={false}
                            />
                            :
                            <></>
                        }
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                    paddingBottom: reviewData.length > 3 ? 120 : 0,
                }}>
                    <MHeader content="나눠본 사람들" goBack={true} />
                    <img src={servicereviewbanner} style={{
                        width: "90vw",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        marginBottom: "8vw"
                    }} />
                    {reviewData.map(item =>
                        <Review
                            item={item}
                            mobile={true}
                        />
                    )}
                    <div onClick={isLogin ? noReview ? () => history.push("/service/write") : () => {} : () => setLoginModal(true)} style={{
                        position: "fixed",
                        bottom: 40,
                        width: "90%",
                        alignSelf: "center",
                        paddingTop: 12,
                        paddingBottom: 12,
                        backgroundColor: isLogin ? noReview ? "#26c1f0" : "#dbdbdb" : "#26c1f0",
                        borderRadius: 6,
                        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                        cursor: isLogin ? noReview ? "pointer" : "auto" : "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>{isLogin ? "첫 후기 작성하고 2천 포인트 받기" : "회원가입 하고 후기 작성하기"}</div>
                    {loginModal ?
                        <StandardChoiceModal
                            title="회원가입이 필요한 서비스입니다."
                            content={<span>지금 바로 회원가입하고 <br /> 다양한 상품을 분할결제 해보세요!</span>}
                            canceltext="취소"
                            onCancelClick={() => setLoginModal(false)}
                            buttontext="회원가입"
                            onClick={() => history.push("/signup/main")}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                </div>
            </Mobile>
        </>
    )
}

function Review({ item, mobile }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age / 10)
    var gender = item.user_gender === 1 ? "남성" : "여성"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
    return (
        <>
            <div style={{
                width: mobile ? "82vw" : 408,
                padding: mobile ? "4vw" : 16,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                marginBottom: mobile ? "8vw" : 32,
                borderRadius: 6,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                }}>
                    <AiFillStar size={mobile ? 14 : 16} color="#fad94f" />
                    <div style={{
                        fontSize: mobile ? 12 : 14,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr",
                        marginLeft: mobile ? "1vw" : 4,
                    }}>{score}</div>
                </div>
                <div style={{
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr",
                    marginBottom: mobile ? "2vw" : 8,
                    minHeight: mobile ? "20vw" : 80,
                }}>{content}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginBottom: mobile ? "2vw" : 8,
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#010608",
                        fontSize: mobile ? 12 : 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{maskingName}({age}0대 {gender})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#010608",
                        fontSize: mobile ? 12 : 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
            </div>
        </>
    )
}