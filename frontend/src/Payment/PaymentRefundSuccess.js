import React from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router";

export default function PaymentRefundSuccess() {
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
                        <Header content="신청 완료" goX={true} />
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginTop: 32,
                            backgroundColor: "#f72b2b",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <AiOutlineClose color="#ffffff" size={50} />
                        </div>
                        <div style={{
                            marginTop: 32,
                            fontSize: 21,
                            fontWeight: "bold",
                            color: "#26c1f0",
                            fontFamily: "NotoSansCJKkr"
                        }}>반품, 환불 신청이 완료<span style={{ color: "#010608" }}>되었습니다!</span></div>
                        <div onClick={() => history.replace("/")} style={{
                            borderRadius: 6,
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            marginTop: 32,
                            backgroundColor: "#26c1f0",
                            alignSelf: "center",

                            textAlign: "center",
                            color: "#ffffff",
                            fontSize: 18,
                            fontFamily: "NotoSansCJKkr",
                            cursor: "pointer",
                        }}>홈으로</div>
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
                    height: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="신청 완료" goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#f72b2b",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AiOutlineClose color="#ffffff" size={50} />
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        fontFamily: "NotoSansCJKkr"
                    }}>반품, 환불 신청이 완료<span style={{ color: "#010608" }}>되었습니다.</span></div>
                    <div onClick={() => history.replace("/")} style={{
                        borderRadius: 6,
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        marginTop: "8vw",
                        backgroundColor: "#26c1f0",
                        alignSelf: "center",

                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: 16,
                        fontFamily: "NotoSansCJKkr",
                        cursor: "pointer",
                    }}>홈으로</div>
                </div>
            </Mobile>
        </>
    )
}