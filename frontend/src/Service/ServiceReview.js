import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, NameMask } from "../Style";

export default function ServiceReview() {
    //Get Review Data
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        setReviewData([])
        fetch("/servicereview/", {
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
            })
    }, [])

    let history = useHistory()
    const [noReview, setNoReview] = useState(true)

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

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                            paddingBottom: reviewData.length > 3 ? 150 : 0,
                        }}>
                            <Header content="나눠본 사람들" goBack={true} />
                            <div style={{
                                width: 440,
                                height: 150,
                                alignSelf: "center",
                                marginTop: 32,

                                backgroundColor: "#051a1a",
                                borderRadius: 6,
                            }}>
                                <div style={{
                                    marginLeft: 32,
                                    marginTop: 32,

                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 18,
                                    color: "#ffffff"
                                }}>아직도 나누다 사용을 망설이시나요?</div>
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
                                />
                            )}
                            <div onClick={() => history.push("/servicewrite")} style={{
                                position: "fixed",
                                bottom: 40,
                                width: 440,
                                alignSelf: "center",
                                paddingTop: 21,
                                paddingBottom: 21,
                                backgroundColor: "#26c1f0",
                                borderRadius: 6,
                                boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                                color: "#ffffff",
                                fontSize: 21,
                                fontWeight: "bold",
                                textAlign: "center",
                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr"
                            }}>{noReview ? "첫 후기 작성하고 2천 포인트 받기" : "나누다 사용후기 작성하기"}</div>
                        </div>
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

                        backgroundColor: "#051a1a",
                        borderRadius: 6,
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            color: "#ffffff"
                        }}>아직도 나누다 사용을 망설이시나요?</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#ffffff",

                            marginTop: "4vw",
                        }}>실제 후기를 확인해보세요.</div>
                    </div>
                    {reviewData.map(item =>
                        <MReview
                            item={item}
                        />
                    )}
                    <div onClick={() => history.push("/servicewrite")} style={{
                        position: "fixed",
                        bottom: 40,
                        width: "90%",
                        alignSelf: "center",
                        paddingTop: 12,
                        paddingBottom: 12,
                        backgroundColor: "#26c1f0",
                        borderRadius: 6,
                        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",

                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>{noReview ? "첫 후기 작성하고 2천 포인트 받기" : "나누다 사용후기 작성하기"}</div>
                </div>
            </Mobile>
        </>
    )
}

function Review({ item }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age/10)
    var gender = item.user_gender === 0 ? "남성" : "여성"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
    return (
        <>
            <div style={{
                width: 408,
                padding: 16,
                height: 138,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                marginTop: 32,
                borderRadius: 6,
            }}>
                <div style={{
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#26c1f0",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{score}/5.0</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginBottom: 8,
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{maskingName}({age}0대 {gender})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr"
                }}>{content}</div>
            </div>
        </>
    )
}

function MReview({ item }) {
    var maskingName = NameMask(item.user_name)
    var age = parseInt(item.user_age/10)
    var gender = item.user_gender === 0 ? "남성" : "여성"
    var score = item.service_score
    var content = item.service_content
    var date = item.service_date.slice(0, 10)
    return (
        <>
            <div style={{
                width: "82vw",
                padding: "4vw",
                height: "32vw",
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "center",
                marginTop: "8vw",
                borderRadius: 6,
            }}>
                <div style={{
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#26c1f0",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{score}/5.0</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                    width: "100%",
                    marginBottom: "2vw",
                }}>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{maskingName}({age}0대 {gender})</div>
                    <div style={{
                        opacity: 0.4,
                        color: "#202426",
                        fontSize: 14,
                        fontFamily: "NotoSansCJKkr"
                    }}>{date}</div>
                </div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    lineHeight: 1.5,
                    fontFamily: "NotoSansCJKkr"
                }}>{content}</div>
            </div>
        </>
    )
}