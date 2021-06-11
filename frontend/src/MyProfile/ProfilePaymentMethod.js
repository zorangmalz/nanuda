import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function ProfilePaymentMethod() {
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
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="결제 계좌 관리" goBack={true} />
                        <RegisterForm
                            bank="우리"
                            account="1002-550-568544"
                            marginBottom={16}
                            marginTop={0}
                        />
                        <div onClick={() => history.push("/paymentaddbank")} style={{
                            width: 440,
                            height: 136,
                            border: "1px solid rgba(1, 6, 8, 0.2)",
                            borderRadius: 6,
                            cursor: "pointer",

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                        }}>
                            <BiPlusCircle size={64} color="rgba(1, 6, 8, 0.6)" />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 16,
                                color: "#010608",
                                marginTop: 8,
                            }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
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
                    <MHeader content="결제 계좌 관리" goBack={true} />
                    <MRegisterForm
                        bank="우리"
                        account="1002-550-568544"
                        marginBottom={8}
                        marginTop={0}
                    />
                    <div onClick={() => history.push("/paymentaddbank")} style={{
                        width: "76vw",
                        padding: "5vw 7vw",
                        border: "1px solid rgba(1, 6, 8, 0.2)",
                        borderRadius: 6,
                        cursor: "pointer",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}>
                        <BiPlusCircle size={48} color="rgba(1, 6, 8, 0.6)" />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 12,
                            color: "#010608",
                            marginTop: 4,
                        }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}

export const RegisterForm = ({ bank, account, marginBottom, marginTop }) => {
    return (
        <>
            <div style={{
                width: 440,
                backgroundColor: "#26c1f0",
                alignSelf: "center",
                height: 136,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: marginBottom,
                borderRadius: 6,
                marginTop: marginTop
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: 20,
                    marginLeft: 20,
                }}>{bank}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: 4,
                    marginLeft: 20,
                }}>{account}</div>
            </div>
        </>
    )
}

export const MRegisterForm = ({ bank, account, marginBottom, marginTop }) => {
    return (
        <>
            <div style={{
                width: "90vw",
                backgroundColor: "#26c1f0",
                alignSelf: "center",
                height: 100,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: marginBottom,
                borderRadius: 6,
                marginTop: marginTop
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: "5vw",
                    marginLeft: "5vw",
                }}>{bank}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: 4,
                    marginLeft: "5vw",
                }}>{account}</div>
            </div>
        </>
    )
}