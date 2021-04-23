import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { useHistory } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProfileProduct() {
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
                            alignItems: "center",
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="상품 상세 구매 내역" />
                            <ProductState 
                                date="2021.04.13"
                                title="PRADA Model 23-9 limited WHITE, 270mm"
                                price={480000}
                            />
                            <ProductState 
                                date="2021.04.13"
                                title="PRADA Model 23-9 limited WHITE, 270mm"
                                price={480000}
                            />
                            <ProductState 
                                date="2021.04.13"
                                title="PRADA Model 23-9 limited WHITE, 270mm"
                                price={480000}
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
                </div>
            </Mobile>
        </>
    )
}

function ProductState({date, title, price}) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 32,
                paddingBottom: 32,
                width: 440,
                borderBottom: "1px solid rgba(5, 26, 26, 0.2)"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <div style={{
                            width: 120,
                            height: 120,
                            borderRadius: 6,
                            marginRight: 16,
                            backgroundColor: "#000000",
                            color: "#ffffff"
                        }}>상품 그림</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            width: 260,
                            height: 120,
                        }}>
                            <div style={{
                                fontSize: 16,
                                fontFamily: "NotoSansCJKkr",
                                color: "#202426",
                                opacity: 0.6,
                            }}>{date}</div>
                            <div style={{
                                fontSize: 16,
                                color: "#202426",
                                fontFamily: "AvenirNext",
                                lineHeight: 1.5,
                            }}>{title}</div>
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#051a1a",
                                fontFamily: "NotoSansCJKkr"
                            }}>{price}원</div>
                        </div>
                    </div>
                    <MdKeyboardArrowRight size={32} color="rgba(5, 26, 26, 0.4)" />
                </div>
            </div>
        </>
    )
}