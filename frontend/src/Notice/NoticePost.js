import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function NoticePost() {
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
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="공지사항" goBack={true} />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 32,
                                marginLeft: 20,
                            }}># 결제</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 16,
                                marginLeft: 20,
                            }}>카드 결제 추가 관련 공지</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 8,
                                width: 440,
                                alignSelf: "center",
                                borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                paddingBottom: 16,
                                marginBottom: 16,
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426",
                                }}>작성자 : 나누다팀</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426"
                                }}>2020.12.28</div>
                            </div>
                            <div style={{
                                width: 440,
                                minHeight: "50vh",
                                alignSelf: "center",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426",
                                lineHeight: 1.5
                            }}>
                                안녕하세요 나누다 여러분? <br />
                                기존 계좌결제 뿐만 아니라 카드 결제까지 되면 얼마나 좋을까 <br />
                                생각하셨죠? <br /> <br />

                                그래서 저희가 준비했습니다. <br />
                                이제부터 나누다에 체크카드를 등록해 편하게 사용할 수 있습니다
                            </div>
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
                    <MHeader content="공지사항" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 28,
                        marginLeft: "5vw",
                    }}># 결제</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 14,
                        marginLeft: "5vw",
                    }}>카드 결제 추가 관련 공지</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 8,
                        width: "90vw",
                        alignSelf: "center",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        paddingBottom: "4vw",
                        marginBottom: "4vw",
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#202426",
                        }}>작성자 : 나누다팀</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#202426"
                        }}>2020.12.28</div>
                    </div>
                    <div style={{
                        width: "90vw",
                        minHeight: "50vh",
                        alignSelf: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#202426",
                        lineHeight: 1.5
                    }}>
                        안녕하세요 나누다 여러분?
                        기존 계좌결제 뿐만 아니라 카드 결제까지 되면 얼마나 좋을까
                        생각하셨죠? <br /> <br />

                        그래서 저희가 준비했습니다.
                        이제부터 나누다에 체크카드를 등록해 편하게 사용할 수 있습니다
                    </div>
                </div>
            </Mobile>
        </>
    )
}