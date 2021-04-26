import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { AiOutlineCheck } from "react-icons/ai";
import { MOrderDetail, OrderDetail } from "./PaymentFail";
import { useHistory } from "react-router";

export default function PaymentSuccess() {
    //WishDeal인지 여부
    const [wish, setWish] = useState(true)

    //화면 변경
    let history = useHistory()
    function goHome() {
        history.push("/")
    }
    function goReview() {
        history.push("/review")
    }
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
                            alignItems: "center",
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content={wish ? "주문 결과" : "작성 완료"} goX={true} />
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                marginTop: 32,
                                backgroundColor: "#2dd9d3",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <AiOutlineCheck color="#ffffff" size={50} />
                            </div>
                            <div style={{
                                marginTop: 32,
                                fontSize: 21,
                                fontWeight: "bold",
                                color: "#2dd9d3",
                                fontFamily: "NotoSansCJKkr",
                            }}>{wish ? "주문" : "작성"}이 완료
                                <span style={{ color: "#051a1a" }}>되었습니다!</span>
                            </div>
                            <OrderDetail 
                                wishTime={wish}
                                title="PRADA Model 23-9 limited edition berry expensive"
                                price="460,000"
                                name="김현명"
                                number="03770"
                                address="서울 특별시 서대문구 북아현로 1길 17"
                                addressDetail="e편한세상 203동 2104호"
                                phoneNumber="010-4337-6607"
                                deliveryClaim="집 앞"
                            />
                            <div onClick={goHome} style={{
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#2dd9d3",
                                borderRadius: 6,
                                marginTop: 32,

                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#ffffff",
                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr"
                            }}>홈으로</div>
                            <div onClick={goReview} style={{
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#ffffff",
                                borderRadius: 6,
                                marginTop: 16,
                                border: "1px solid #dfdfdf",

                                textAlign: "center",
                                fontSize: 18,
                                opacity: 0.6,
                                color: "#051a1a",
                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr",
                            }}>내 리뷰 확인하기</div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content={wish ? "주문 결과" : "작성 완료"} goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#2dd9d3",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AiOutlineCheck color="#ffffff" size={50} />
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#2dd9d3",
                        fontFamily: "NotoSansCJKkr"
                    }}>{wish ? "주문" : "작성"}이 완료
                        <span style={{ color: "#051a1a" }}>되었습니다!</span>
                    </div>
                    <MOrderDetail
                        wishTime={wish}
                        title="PRADA Model 23-9 limited edition berry expensive"
                        price="460,000"
                        name="김현명"
                        number="03770"
                        address="서울 특별시 서대문구 북아현로 1길 17"
                        addressDetail="e편한세상 203동 2104호"
                        phoneNumber="010-4337-6607"
                        deliveryClaim="집 앞"
                    />
                    <div onClick={goHome} style={{
                        width: "90%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        backgroundColor: "#2dd9d3",
                        borderRadius: 6,
                        marginTop: 32,

                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>홈으로</div>
                    <div onClick={goReview} style={{
                        width: "90%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        backgroundColor: "#ffffff",
                        borderRadius: 6,
                        marginTop: 8,
                        border: "1px solid #dfdfdf",

                        textAlign: "center",
                        fontSize: 16,
                        opacity: 0.6,
                        color: "#051a1a",
                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr",
                    }}>내 리뷰 확인하기</div>
                </div>
            </Mobile>
        </>
    )
}