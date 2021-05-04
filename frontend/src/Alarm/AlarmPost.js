import React from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function AlarmPost() {
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
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="알림" goBack={true} />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 32,
                                marginLeft: 20,
                            }}>카드 결제 추가 관련 공지</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                opacity: 0.6,
                                color: "#202426",
                                marginTop: 8,
                                paddingBottom: 16,
                                marginLeft: 20,
                                borderBottom: "1px solid rgba(5, 26, 26, 0.4)",
                                width: 440,
                                marginBottom: 16,
                            }}>2020.12.28</div>
                            <div style={{
                                width: 440,
                                minHeight: "50vh",
                                alignSelf: "center",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426",
                                lineHeight: 1.5
                            }}>
                                <span>(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 </span>
                                <span onClick={() => history.push("/profilemain")} style={{
                                    textDecorationLine: "underline",
                                    cursor: "pointer",
                                    marginLeft: 2,
                                    marginRight: 2,
                                }}>마이페이지</span>
                                <span> 에서 확인해주세요. </span>
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
                    <MHeader content="알림" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>미션에 성공했습니다</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        opacity: 0.6,
                        color: "#202426",
                        marginTop: "2vw",
                        paddingBottom: "4vw",
                        marginLeft: "5vw",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.4)",
                        width: "90vw",
                        marginBottom: "4vw",
                    }}>2020.12.28</div>
                    <div style={{
                        width: "90vw",
                        minHeight: "50vh",
                        alignSelf: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#202426",
                        lineHeight: 1.5
                    }}>
                        <span>(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 </span>
                        <span onClick={() => history.push("/profilemain")} style={{
                            textDecorationLine: "underline",
                            cursor: "pointer",
                            marginLeft: 2,
                            marginRight: 2,
                        }}>마이페이지</span>
                        <span> 에서 확인해주세요. </span>
                    </div>
                </div>
            </Mobile>
        </>
    )
}