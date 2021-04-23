import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { useHistory } from "react-router";

export default function ProfileProductInfo() {
    //화면 변경
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
                    backgroundColor: "#f2f3f8",
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
                            <Header content="상품 상세 구매 내역" />
                            <ProductInfo 
                                title="PRADA Model 23-9 limited edition berry expensive"
                                price="460,000"
                                name="김현명"
                                number="03770"
                                address="서울 특별시 서대문구 북아현로 1길 17"
                                addressDetail="e편한세상 203동 2104호"
                                phoneNumber="010-4337-6607"
                                deliveryClaim="집 앞"
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
                }}>
                    <Header content="상품 상세 구매 내역" />
                    <MProductInfo
                        title="PRADA Model 23-9 limited edition berry expensive"
                        price="460,000"
                        name="김현명"
                        number="03770"
                        address="서울 특별시 서대문구 북아현로 1길 17"
                        addressDetail="e편한세상 203동 2104호"
                        phoneNumber="010-4337-6607"
                        deliveryClaim="집 앞"
                    />
                </div>
            </Mobile>
        </>
    )
}

function ProductInfo({ img, title, price, name, number, address, addressDetail, phoneNumber, deliveryClaim }) {
    return (
        <>
            <div style={{
                width: 408,
                padding: 16,
                border: "1px solid #dfdfdf",
                backgroundColor: "#ffffff",
                marginTop: 32,
                alignSelf: "center",
                borderRadius: 6,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 16,
                    color: "#202426"
                }}>주문상세</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 16
                }}>
                    <div style={{
                        width: 80,
                        height: 80,
                        marginRight: 10,
                        borderRadius: 6,
                        border: "solid 1px rgba(219, 219, 219, 0.1)",
                        backgroundColor: "#000000"
                    }}></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: 240,
                    }}>
                        <div style={{
                            fontSize: 16,
                            lineHeight: 1.5,
                            color: "#202426",
                            fontFamily: "AvenirNext",
                            marginBottom: 8,
                        }}>{title}</div>
                        <div style={{
                            fontSize: 18,
                            color: "#051a1a",
                            fontFamily: "NotoSansCJKkr",
                            fontWeight: "bold",
                        }}>{price} 원</div>
                    </div>
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    opacity: 0.8,
                    color: "#202426",
                    lineHeight: 1.88,
                    fontSize: 16,
                }}>
                    받는사람 : {name} <br />
                        우편번호 : {number} <br />
                        주소: {address} <br />
                        상세주소 : {addressDetail} <br />
                        연락처 : {phoneNumber} <br />
                        배송 요청사항 : {deliveryClaim} <br />
                </div>
            </div>
        </>
    )
}

function MProductInfo({ img, title, price, name, number, address, addressDetail, phoneNumber, deliveryClaim }) {
    return (
        <>
            <div style={{
                width: "82%",
                padding: "4%",
                border: "1px solid #dfdfdf",
                backgroundColor: "#ffffff",
                marginTop: 32,
                alignSelf: "center",
                borderRadius: 6,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 16,
                    color: "#202426"
                }}>주문상세</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 16
                }}>
                    <div style={{
                        width: 70,
                        height: 70,
                        marginRight: 10,
                        borderRadius: 6,
                        border: "solid 1px rgba(219, 219, 219, 0.1)",
                        backgroundColor: "#000000"
                    }}></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: 180,
                    }}>
                        <div style={{
                            fontSize: 14,
                            lineHeight: 1.5,
                            color: "#202426",
                            fontFamily: "AvenirNext",
                            marginBottom: 8,
                        }}>{title}</div>
                        <div style={{
                            fontSize: 16,
                            color: "#051a1a",
                            fontFamily: "NotoSansCJKkr",
                            fontWeight: "bold",
                        }}>{price} 원</div>
                    </div>
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    opacity: 0.8,
                    color: "#202426",
                    lineHeight: 1.88,
                    fontSize: 14,
                }}>
                    받는사람 : {name} <br />
                        우편번호 : {number} <br />
                        주소: {address} <br />
                        상세주소 : {addressDetail} <br />
                        연락처 : {phoneNumber} <br />
                        배송 요청사항 : {deliveryClaim} <br />
                </div>
            </div>
        </>
    )
}