import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";

export default function PaymentAddAccount() {
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="결제 계좌 등록" goBack={true} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>계좌번호를 입력해주세요.</div>
                        <input placeholder="계좌번호를 입력해주세요 (-제외)"
                            style={{
                                marginTop: 16,
                                alignSelf: "center",
                                outline: 0,
                                border: 0,
                                paddingBottom: 8,
                                width: 440,
                                borderBottom: "1px solid rgba(1, 6, 8, 0.4)",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#010608",
                            }}
                        />
                        <StandardButton
                            marginTop={32}
                            text="다음"
                            onClick={() => history.push("/paymentaccountveri")}
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
                }}>
                    <MHeader content="결제 계좌 등록" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",

                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>계좌번호를 입력해주세요.</div>
                    <input placeholder="계좌번호를 입력해주세요 (-제외)"
                        style={{
                            marginTop: "4vw",
                            alignSelf: "center",
                            outline: 0,
                            border: 0,
                            paddingBottom: 8,
                            width: "90vw",
                            borderBottom: "1px solid rgba(1, 6, 8, 0.4)",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            color: "#010608",
                        }}
                    />
                    <MStandardButton
                        marginTop={16}
                        text="다음"
                        onClick={() => history.push("/paymentaccountveri")}
                        state={true}
                    />
                </div>
            </Mobile>
        </>
    )
}