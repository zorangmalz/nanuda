import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import { Header, MHeader, NameMask } from "../Style";
import { AiFillStar } from "react-icons/ai";


export default function ServiceReview() {
    //Get Review Data
    const [reviewData, setReviewData] = useState([])
    const [noReview, setNoReview] = useState(false)

    async function checkReview() {
        await fetch("https://haulfree.link/servicereviewornot/", {
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
        fetch("https://haulfree.link/servicereview/main", {
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
                        <div style={{
                            width: 440,
                            height: 150,
                            alignSelf: "center",
                            marginTop: 32,

                            backgroundColor: "#010608",
                            borderRadius: 6,
                        }}>
                            <div style={{
                                marginLeft: 32,
                                marginTop: 32,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                color: "#ffffff"
                            }}>아직도 하울프리 사용을 망설이시나요?</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "#ffffff",

                                marginTop: 16,
                                marginLeft: 32,
                            }}>실제 후기를 확인해보세요.</div>
                        </div>
                        {reviewData.map(item =>
                            <Review
                                item={item}
                                mobile={false}
                            />
                        )}
                        <div onClick={noReview ? () => history.push("/service/write") : () => { }} style={{
                            position: "fixed",
                            bottom: 40,
                            width: 440,
                            alignSelf: "center",
                            paddingTop: 21,
                            paddingBottom: 21,
                            backgroundColor: noReview ? "#26c1f0" : "#dbdbdb",
                            borderRadius: 6,
                            boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                            color: "#ffffff",
                            fontSize: 21,
                            fontWeight: "bold",
                            textAlign: "center",
                            cursor: noReview ? "pointer" : "auto",
                            fontFamily: "NotoSansCJKkr"
                        }}>첫 후기 작성하고 2천 포인트 받기</div>
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
                    <div style={{
                        width: "72vw",
                        alignSelf: "center",
                        marginTop: "8vw",
                        paddingTop: "8vw",
                        paddingLeft: "8vw",
                        paddingRight: "10vw",
                        paddingBottom: "8vw",

                        backgroundColor: "#010608",
                        borderRadius: 6,
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            color: "#ffffff"
                        }}>아직도 하울프리 사용을 망설이시나요?</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#ffffff",

                            marginTop: "4vw",
                        }}>실제 후기를 확인해보세요.</div>
                    </div>
                    {reviewData.map(item =>
                        <Review
                            item={item}
                            mobile={true}
                        />
                    )}
                    <div onClick={noReview ? () => history.push("/service/write") : () => { }} style={{
                        position: "fixed",
                        bottom: 40,
                        width: "90%",
                        alignSelf: "center",
                        paddingTop: 12,
                        paddingBottom: 12,
                        backgroundColor: noReview ? "#26c1f0" : "#dbdbdb",
                        borderRadius: 6,
                        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                        cursor: noReview ? "pointer" : "auto",
                        fontFamily: "NotoSansCJKkr"
                    }}>첫 후기 작성하고 2천 포인트 받기</div>
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
                marginTop: mobile ? "8vw" : 32,
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
                    maxHeight: mobile ? "20vw" : 80,
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