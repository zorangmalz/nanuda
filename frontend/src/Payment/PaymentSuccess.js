import React from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";
import { AiOutlineCheck } from "react-icons/ai";
import { useHistory } from "react-router";

export default function PaymentSuccess() {
    //화면 변경
    let history = useHistory()
    function goHome() {
        history.replace("/")
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="결제 결과" goX={true} />
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginTop: 32,
                            backgroundColor: "#26c1f0",

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
                            color: "#26c1f0",
                            fontFamily: "NotoSansCJKkr",
                        }}>결제가 완료
                                <span style={{ color: "#010608" }}>되었습니다!</span>
                        </div>
                        <div onClick={goHome} style={{
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#26c1f0",
                            borderRadius: 6,
                            marginTop: 72,

                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#ffffff",
                            cursor: "pointer",
                            fontFamily: "NotoSansCJKkr"
                        }}>홈으로 돌아가기</div>
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
                    <MHeader content="결제 결과" goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#26c1f0",

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
                        color: "#26c1f0",
                        fontFamily: "NotoSansCJKkr"
                    }}>결제가 완료
                        <span style={{ color: "#010608" }}>되었습니다!</span>
                    </div>
                    <div onClick={goHome} style={{
                        width: "90%",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#26c1f0",
                        borderRadius: 6,
                        marginTop: 32,

                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>홈으로 돌아가기</div>
                </div>
            </Mobile>
        </>
    )
}