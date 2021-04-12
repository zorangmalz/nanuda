import React, { useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BsHeart } from "react-icons/bs"
import { IoChatbubbleOutline } from "react-icons/io5"

export default function SingupComplete() {


    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: "#f2f3f8"
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
                            <Header content="나누다 시작하기" />

                            <div style={{
                                marginTop: 32, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                            }}>
                                회원가입을 축하합니다!                            </div>
                            <div style={{
                                marginTop: 8, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                            }}>
                                몇가지 정보를 입력해주시면                           </div>
                            <div style={{
                                marginTop: 8, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                            }}>
                                다음과 같은 추가 혜택이 있어요!!                            </div>
                            <div style={{ marginTop: 32, marginLeft: 20, backgroundColor: "#f2f3f8", width: 440, height: 100, borderRadius: 6 }}>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{}}>아이콘 자리</div>

                                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, marginTop: 37, fontSize: 18, fontWeight: 500 }}>
                                        <div>분할결제 한도가 30만원으로 늘어나요.</div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: 16, marginLeft: 20, backgroundColor: "#f2f3f8", width: 440, height: 100, borderRadius: 6 }}>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{}}>아이콘 자리</div>

                                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, marginTop: 37, fontSize: 18, fontWeight: 500 }}>
                                        <div>연체료 1회를 면제해드려요.</div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: 16, marginLeft: 20, backgroundColor: "#f2f3f8", width: 440, height: 100, borderRadius: 6 }}>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{}}>아이콘 자리</div>

                                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, marginTop: 37, fontSize: 18, fontWeight: 500 }}>
                                        <div>더 좋은 서비스를 제공받을 수 있어요.</div>

                                    </div>
                                </div>
                            </div>
                            <div style={{

                                borderRadius: 8,
                                width: 440,
                                height: 56,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 52,
                                backgroundColor: "#2dd9d3",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>다음</div></div>
                            <div style={{ marginLeft: 201, marginTop: 16, opacity: 0.6, fontSize: 14, textDecorationLine: "underline", }}>다음에 할게요</div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <Header content="나눠산 사람들" />

                    <div style={{
                        marginTop: 32, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                    }}>
                        회원가입을 축하합니다!                            </div>
                    <div style={{
                        marginTop: 8, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                    }}>
                        몇가지 정보를 입력해주시면                           </div>
                    <div style={{
                        marginTop: 8, marginLeft: 20, fontSize: 21, fontWeight: "bold", fontFamily: "NotoSansCJKkr"
                    }}>
                        다음과 같은 추가 혜택이 있어요!!                            </div>
                    <div style={{ marginTop: 32, marginLeft: 20, backgroundColor: "#f2f3f8", width: "90%", height: 100, borderRadius: 6 }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{}}>아이콘 자리</div>

                            <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, marginTop: 37, fontSize: 15, fontWeight: 500 }}>
                                <div>분할결제 한도가 30만원으로 늘어나요.</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 16, marginLeft: 20, backgroundColor: "#f2f3f8", width: "90%", height: 100, borderRadius: 6 }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{}}>아이콘 자리</div>
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, marginTop: 37, fontSize: 15, fontWeight: 500 }}>
                                <div>연체료 1회를 면제해드려요.</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 16, marginLeft: 20, backgroundColor: "#f2f3f8", width: "90%", height: 100, borderRadius: 6 }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{}}>아이콘 자리</div>
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: 32, marginTop: 37, fontSize: 15, fontWeight: 500 }}>
                                <div>더 좋은 서비스를 제공받을 수 있어요.</div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        borderRadius: 8,
                        width: "90%",
                        height: 56,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 52,
                        backgroundColor: "#2dd9d3",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}><div style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>다음</div></div>
                    <div style={{ marginTop: 16, opacity: 0.6, fontSize: 14, textDecorationLine: "underline", }}>다음에 할게요</div>          </div>
            </Mobile>
        </>
    )
}