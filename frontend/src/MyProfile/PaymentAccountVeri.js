import React, { useReducer, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";

function reducer(state, action) {
    switch (action.type) {
        case "SK":
            return 1;
        case "KT":
            return 2;
        case "LG":
            return 3;
        case "SKA":
            return 4;
        case "KTA":
            return 5;
        case "LGA":
            return 6;
        default:
            return 0;
    }
}

export default function PaymentAccountVeri() {
    const [number, dispatch] = useReducer(reducer, 0)
    const onSK = () => { dispatch({ type: "SK" }) }
    const onKT = () => { dispatch({ type: "KT" }) }
    const onLG = () => { dispatch({ type: "LG" }) }
    const onSKA = () => { dispatch({ type: "SKA" }) }
    const onKTA = () => { dispatch({ type: "KTA" }) }
    const onLGA = () => { dispatch({ type: "LGA" }) }

    //약관 동의
    const [self, setSelf] = useState(false)
    const [pay, setPay] = useState(false)

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
                            marginTop: 32,
                            marginLeft: 20,
                            color: "#010608",
                        }}>통신사를 선택해주세요.</div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "136px 136px 136px",
                            rowGap: 16,
                            columnGap: 16,
                            alignSelf: "center",
                            marginTop: 16,
                        }}>
                            <Telecom
                                text="SK"
                                number={number}
                                compare={1}
                                onClick={onSK}
                            />
                            <Telecom
                                text="KT"
                                number={number}
                                compare={2}
                                onClick={onKT}
                            />
                            <Telecom
                                text="LGU+"
                                number={number}
                                compare={3}
                                onClick={onLG}
                            />
                            <Telecom
                                text="SK 알뜰폰"
                                number={number}
                                compare={4}
                                onClick={onSKA}
                            />
                            <Telecom
                                text="KT 알뜰폰"
                                number={number}
                                compare={5}
                                onClick={onKTA}
                            />
                            <Telecom
                                text="LG U+ 알뜰폰"
                                number={number}
                                compare={6}
                                onClick={onLGA}
                            />
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            marginTop: 32,
                            marginLeft: 20,
                            color: "#010608",
                        }}>휴대폰 번호를 입력해주세요.</div>
                        <input placeholder="휴대폰 번호를 입력해주세요 (-제외)"
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
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",

                            width: 440,
                            paddingTop: 12,
                            paddingBottom: 12,
                            marginTop: 32,
                            border: "1px solid rgba(1, 6, 8, 0.2)",
                            borderRadius: 6,
                        }}>
                            <BsCheck
                                onClick={() => {
                                    if (self || pay) {
                                        setSelf(false)
                                        setPay(false)
                                    } else {
                                        setSelf(true)
                                        setPay(true)
                                    }
                                }}
                                size={24}
                                color={self && pay ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    marginLeft: 8,
                                    cursor: "pointer",
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#010608",
                                marginLeft: 8,
                            }}>전체 약관 동의</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 28,
                            marginTop: 16,
                        }}>
                            <BsCheck
                                onClick={() => setSelf(!self)}
                                size={24}
                                color={self ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#010608",
                                marginLeft: 8,
                                textDecorationLine: "underline"
                            }}>본인확인 서비스 동의 (필수)</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 28,
                            marginTop: 8,
                        }}>
                            <BsCheck
                                onClick={() => setPay(!pay)}
                                size={24}
                                color={pay ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#010608",
                                marginLeft: 8,
                            }}>간편결제 서비스 동의 (필수)</div>
                        </div>
                        <StandardButton
                            text="다음"
                            marginTop={32}
                            onClick={() => history.push("/paymentars")}
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
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        color: "#010608",
                    }}>통신사를 선택해주세요.</div>
                    <div style={{
                        width: "90vw",
                        display: "grid",
                        gridTemplateColumns: "27vw 27vw 27vw",
                        rowGap: "4vw",
                        columnGap: "4vw",
                        alignSelf: "center",
                    }}>
                        <MTelecom
                            text="SK"
                            number={number}
                            compare={1}
                            onClick={onSK}
                        />
                        <MTelecom
                            text="KT"
                            number={number}
                            compare={2}
                            onClick={onKT}
                        />
                        <MTelecom
                            text="LGU+"
                            number={number}
                            compare={3}
                            onClick={onLG}
                        />
                        <MTelecom
                            text="SK 알뜰폰"
                            number={number}
                            compare={4}
                            onClick={onSKA}
                        />
                        <MTelecom
                            text="KT 알뜰폰"
                            number={number}
                            compare={5}
                            onClick={onKTA}
                        />
                        <MTelecom
                            text="LG U+ 알뜰폰"
                            number={number}
                            compare={6}
                            onClick={onLGA}
                        />
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        color: "#010608",
                    }}>휴대폰 번호를 입력해주세요.</div>
                    <input placeholder="휴대폰 번호를 입력해주세요 (-제외)"
                        style={{
                            marginTop: "4vw",
                            alignSelf: "center",
                            outline: 0,
                            border: 0,
                            paddingBottom: "2vw",
                            width: "90vw",
                            borderBottom: "1px solid rgba(1, 6, 8, 0.4)",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            color: "#010608",
                        }}
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",

                        width: "90vw",
                        paddingTop: "3vw",
                        paddingBottom: "3vw",
                        marginTop: "8vw",
                        border: "1px solid rgba(1, 6, 8, 0.2)",
                        borderRadius: 6,
                    }}>
                        <BsCheck
                            onClick={() => {
                                if (self || pay) {
                                    setSelf(false)
                                    setPay(false)
                                } else {
                                    setSelf(true)
                                    setPay(true)
                                }
                            }}
                            size={16}
                            color={self && pay ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                            style={{
                                marginLeft: 8,
                                cursor: "pointer",
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",
                            marginLeft: 8,
                        }}>전체 약관 동의</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "7vw",
                        marginTop: "4vw",
                    }}>
                        <BsCheck
                            onClick={() => setSelf(!self)}
                            size={16}
                            color={self ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#010608",
                            marginLeft: "2vw",
                            textDecorationLine: "underline"
                        }}>본인확인 서비스 동의 (필수)</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "7vw",
                        marginTop: "2vw",
                    }}>
                        <BsCheck
                            onClick={() => setPay(!pay)}
                            size={16}
                            color={pay ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#010608",
                            marginLeft: "2vw",
                        }}>간편결제 서비스 동의 (필수)</div>
                    </div>
                    <MStandardButton
                        text="다음"
                        marginTop={"8vw"}
                        onClick={() => history.push("/paymentars")}
                        state={true}
                    />
                </div>
            </Mobile>
        </>
    )
}

const Telecom = ({ text, number, compare, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: 136,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 6,
            border: "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 16,
            fontWeight: "bold",
            lineHeight: 1.88,
            textAlign: "center",
            color: number === compare ? "#ffffff" : "rgba(1, 6, 8, 0.8)",
            backgroundColor: number === compare ? "#010608" : "#ffffff"
        }}>{text}</div>
    )
}

const MTelecom = ({ text, number, compare, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: "27vw",
            paddingTop: "3vw",
            paddingBottom: "3vw",
            borderRadius: 6,
            border: "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 14,
            fontWeight: "bold",
            lineHeight: 1.88,
            textAlign: "center",
            color: number === compare ? "#ffffff" : "rgba(1, 6, 8, 0.8)",
            backgroundColor: number === compare ? "#010608" : "#ffffff"
        }}>{text}</div>
    )
}