import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router";

export default function ProfilePaymentFail() {
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
                    }}>
                        <Header content="결제 결과" goX={true} />
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
                            color: "#f72b2b",
                            fontFamily: "NotoSansCJKkr"
                        }}>결제에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                        <div style={{
                            fontSize: 16,
                            color: "#051a1a",
                            opacity: 0.6,
                            marginTop: 16,
                            fontFamily: "NotoSansCJKkr"
                        }}>실패 사유 : 잔액부족</div>
                        <div onClick={() => history.goBack()} style={{
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
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            cursor: "pointer",
                        }}>다시 결제하기</div>
                        <div onClick={() => history.replace("/")} style={{
                            borderRadius: 6,
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            marginTop: 16,
                            backgroundColor: "#ffffff",
                            alignSelf: "center",
                            border: "1px solid rgba(5, 26, 26, 0.2)",

                            textAlign: "center",
                            color: "rgba(5, 26, 26, 0.6)",
                            fontSize: 18,
                            fontFamily: "NotoSansCJKkr",
                            cursor: "pointer",
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
                    height: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="결제 결과" goX={true} />
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
                        color: "#f72b2b",
                        fontFamily: "NotoSansCJKkr"
                    }}>결제에 실패<span style={{ color: "#051a1a" }}>했습니다.</span></div>
                    <div style={{
                        fontSize: 14,
                        color: "#051a1a",
                        opacity: 0.6,
                        marginTop: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>실패 사유 : 잔액부족</div>
                    <div onClick={() => history.goBack()} style={{
                        borderRadius: 6,
                        width: "90%",
                        paddingTop: 12,
                        paddingBottom: 12,
                        marginTop: 28,
                        backgroundColor: "#26c1f0",

                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        cursor: "pointer",
                        textAlign: "center",
                    }}>다시 결제하기</div>
                    <div onClick={() => history.replace("/")} style={{
                        borderRadius: 6,
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        marginTop: 12,
                        backgroundColor: "#ffffff",
                        alignSelf: "center",
                        border: "1px solid rgba(5, 26, 26, 0.2)",

                        textAlign: "center",
                        color: "rgba(5, 26, 26, 0.6)",
                        fontSize: 16,
                        fontFamily: "NotoSansCJKkr",
                        cursor: "pointer",
                    }}>홈으로 돌아가기</div>
                </div>
            </Mobile>
        </>
    )
}