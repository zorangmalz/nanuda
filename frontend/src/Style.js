import React from "react";

export default function WebIntro() {
    return (
        <>
            <div style={{
                width: "50%",
                minWidth: 500,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
            }}>
                <div style={{
                    position: "fixed",
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",

                    width: 440,
                    marginRight: 20,
                    height: "100%",
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        width: 72,
                        height: 72,
                        backgroundColor: "#ffffff"
                    }}>로고</div>
                    <div style={{
                        marginTop: 32,
                        marginBottom: 32,
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#051a1a"
                    }}>나누다</div>
                    <div style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#202426",
                        marginBottom: 16,
                    }}>
                        <span style={{
                            color: "#2dd9d3"
                        }}>똑똑한 소비</span>
                    를 하는 <br />당신을 위한
                    <span style={{
                            color: "#2dd9d3"
                        }}>분할결제 서비스</span>
                    </div>
                    <div style={{
                        fontSize: 21,
                        color: "#202426",
                        marginBottom: 32
                    }}>
                        나누다는 <br />
                    원하는 상품을 신용등급 상관없이 누구나 <br />
                    분할결제 할 수 있게 도와주는 서비스입니다.
                </div>
                    <div style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",
                        textDecorationLine: "underline"
                    }}>나누다는 신용카드와 무엇이 다른가요?</div>
                </div>
            </div>
        </>
    )
}

export function Header({ content }) {
    return (
        <div style={{
            width: "100%",
            height: 56,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #dfdfdf",
            justifyContent: "center",
            paddingTop: 15,
            paddingBottom: 15,
        }}>
            <div style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#051a1a",
                alignSelf: "center",
                justifyContent: "center",
            }}>{content}</div>
        </div>
    )
}