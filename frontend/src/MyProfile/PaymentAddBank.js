import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function PaymentAddBank() {
    const bank = [
        { name: "농협" }, { name: "농협" }, { name: "농협" },
        { name: "농협" }, { name: "농협" }, { name: "농협" },
        { name: "농협" }, { name: "농협" }, { name: "농협" },
        { name: "농협" }, { name: "농협" }, { name: "농협" },
        { name: "농협" }, { name: "농협" }, { name: "농협" },
    ]
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
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: 20,
                            marginBottom: 16,
                        }}>은행을 선택해주세요.</div>
                        <div style={{
                            width: 440,
                            display: "grid",
                            gridTemplateColumns: "136px 136px 136px",
                            rowGap: 16,
                            columnGap: 16,
                            alignSelf: "center",
                        }}>
                            {bank.map(item => <Bank
                                name={item.name}
                            />)}
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
                    <MHeader content="결제 계좌 등록" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        marginBottom: "4vw",
                    }}>은행을 선택해주세요.</div>
                    <div style={{
                        width: "90vw",
                        display: "grid",
                        gridTemplateColumns: "27vw 27vw 27vw",
                        rowGap: "4vw",
                        columnGap: "4vw",
                        alignSelf: "center",
                    }}>
                        {bank.map(item => <MBank
                            name={item.name}
                        />)}
                    </div>
                </div>
            </Mobile>
        </>
    )
}

const Bank = ({ name }) => {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/paymentaddaccount")} style={{
            width: 136,
            height: 72,
            borderRadius: 6,
            backgroundColor: "#f2f3f8",
            cursor: "pointer",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: 32,
                height: 32,
                backgroundColor: "#f72b2b",
            }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#202426",
                marginTop: 4,
            }}>{name}</div>
        </div>
    )
}

const MBank = ({ name }) => {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/paymentaddaccount")} style={{
            width: "27vw",
            height: "18vw",
            borderRadius: 6,
            backgroundColor: "#f2f3f8",
            cursor: "pointer",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: "8vw",
                height: "8vw",
                backgroundColor: "#f72b2b",
            }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#202426",
                marginTop: 4,
            }}>{name}</div>
        </div>
    )
}