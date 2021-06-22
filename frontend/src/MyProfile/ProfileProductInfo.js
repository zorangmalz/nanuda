import React from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";

export default function ProfileProductInfo() {
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="상품 상세 구매 내역" goBack={true} />
                        <ProductInfo
                            title="PRADA Model 23-9 limited edition berry expensive"
                            price="460,000"
                            name="김현명"
                            orderNum="20200413137223-00-01"
                            number="03770"
                            address="서울 특별시 서대문구 북아현로 1길 17"
                            addressDetail="e편한세상 203동 2104호"
                            phoneNumber="010-4337-6607"
                            deliveryClaim="집 앞"
                            mobile={false}
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
                }}>
                    <MHeader content="상품 상세 구매 내역" goBack={true} />
                    <ProductInfo
                        title="PRADA Model 23-9 limited edition berry expensive"
                        price="460,000"
                        name="김현명"
                        orderNum="20200413137223-00-01"
                        number="03770"
                        address="서울 특별시 서대문구 북아현로 1길 17"
                        addressDetail="e편한세상 203동 2104호"
                        phoneNumber="010-4337-6607"
                        deliveryClaim="집 앞"
                        mobile={true}
                    />
                </div>
            </Mobile>
        </>
    )
}

function ProductInfo({ img, title, price, name, number, orderNum, address, addressDetail, phoneNumber, deliveryClaim, mobile }) {
    return (
        <>
            <div style={{
                width: mobile ? "82vw" : 408,
                padding: mobile ? "4vw" : 16,
                border: "1px solid #26c1f0",
                backgroundColor: "#ffffff",
                marginTop: mobile ? "8vw" : 32,
                alignSelf: "center",
                borderRadius: 6,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    fontWeight: "bold",
                    marginBottom: mobile ? "4vw" : 16,
                    color: "#010608"
                }}>주문상세</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: mobile ? "4vw" : 16
                }}>
                    <img alt="제품" src={img} style={{
                        width: 80,
                        height: 80,
                        marginRight: mobile ? "2.5vw" : 10,
                        borderRadius: 6,
                        border: "solid 1px rgba(219, 219, 219, 0.1)",
                        backgroundColor: "#000000"
                    }} />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: mobile ? "50vw" : 240,
                        height: 80,
                    }}>
                        <div style={{
                            fontSize: mobile ? 14 : 16,
                            lineHeight: 1.5,
                            color: "#010608",
                            fontFamily: "AvenirNext",
                        }}>{title}</div>
                        <div style={{
                            fontSize: mobile ? 16 : 18,
                            color: "#010608",
                            fontFamily: "NotoSansCJKkr",
                            fontWeight: "bold",
                        }}>{price} 원</div>
                    </div>
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.88,
                    fontSize: mobile ? 14 : 16,
                }}>
                    받는사람 : {name} <br />
                    주문번호 : {orderNum} <br />
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