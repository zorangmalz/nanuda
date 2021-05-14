import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { BottomTag, Header, MBottomTag, MHeader } from "../Style";
import { useHistory } from "react-router";

export default function Login() {
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
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="로그인" goBack={true} />
                        {/* 배너 넣어야됨 */}
                        <div style={{
                            marginLeft: 20,
                            marginTop: 32,
                            width: 440,

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#f4e34d",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            카카오톡으로 로그인하기
                              </div>
                        <div style={{
                            marginLeft: 20,
                            marginTop: 16,
                            width: 440,

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#c45545",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            구글로 로그인하기
                              </div>
                        <BottomTag
                            marginTop={140}
                            marginBottom={0}
                        />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    justifyContent: "flex-start",

                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="로그인" goBack={true} />
                    <div style={{
                        marginLeft: "5vw",
                        marginTop: "8vw",
                        width: "90%",

                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#f4e34d",
                        borderRadius: 6,
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        카카오톡으로 로그인하기
                              </div>
                    <div style={{
                        marginLeft: "5vw",
                        marginTop: "4vw",
                        width: "90%",

                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#c45545",
                        borderRadius: 6,
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        구글로 로그인하기
                              </div>
                    <MBottomTag
                        marginTop={70}
                        marginBottom={0}
                    />
                </div>
            </Mobile>
        </>
    )
}
