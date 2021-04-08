import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";

export default function WishDeal() {

    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
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
                            height: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="위시딜" />
                            <div style={{
                                marginLeft: 20,
                                marginTop: 32,
                                fontWeight: "bold",
                                fontSize: 18
                            }}>사고싶은 상품 링크를 입력해주세요!</div>
                            <div>
                                <div
                                    style={{
                                        marginTop: 16,
                                        marginLeft: 20,
                                        marginRight: 20
                                    }}>
                                    <input style={{
                                        width: 440,
                                        height: 26,
                                        border: "0px solid #ffffff"
                                    }}
                                        name="link"
                                        placeholder="링크"
                                    >
                                    </input>
                                    <div style={{ width: 438, marginTop: 7, height: 0, border: "solid 1px #f2f3f8" }}></div>
                                </div>

                            </div>
                            <div style={{
                                width: 440,
                                height: 212,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 32,
                                backgroundColor: "#f2f3f8",
                            }}></div>
                            <div style={{
                                marginTop: 18,
                                marginLeft: 46,
                                fontSize: 14
                            }}> 이 상품이 맞는지 한번 더 확인해주세요.</div>
                            <div style={{
                                marginTop: 36,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontSize: 18
                            }}>상품 카테고리를 알려주세요!</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 16
                            }}>
                                <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                                <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                                <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                                <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        marginTop: 16,
                                        marginLeft: 20,
                                        marginRight: 20
                                    }}>
                                    <input style={{
                                        width: 440,
                                        height: 26,
                                        border: "0px solid #ffffff"

                                    }}
                                        name="ext"
                                        placeholder="기타 항목을 입력해주세요."
                                    >
                                    </input>
                                    <div style={{ width: 438, marginTop: 7, height: 0, border: "solid 1px #f2f3f8" }}></div>
                                </div>

                            </div>
                            <div style={{
                                borderRadius: 8,
                                width: 440,
                                height: 56,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 32,
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
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "flex-start",

                        width: "100%",
                        height: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="위시딜" />
                        <div style={{
                            marginLeft: 20,
                            marginTop: 32,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>사고싶은 상품 링크를 입력해주세요!</div>
                        <div>
                            <div
                                style={{
                                    marginTop: 16,
                                    marginLeft: 20,
                                    marginRight: 20
                                }}>
                                <input style={{
                                    width: "90%",
                                    height: 26,
                                    border: "0px solid #ffffff"
                                }}
                                    name="link"
                                    placeholder="링크"
                                >
                                </input>
                                <div style={{ width: 438, marginTop: 7, height: 0, border: "solid 1px #f2f3f8" }}></div>
                            </div>

                        </div>
                        <div style={{
                            width: "90%",
                            height: 212,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 32,
                            backgroundColor: "#f2f3f8",
                        }}></div>
                        <div style={{
                            marginTop: 18,
                            marginLeft: 46,
                            fontSize: 14
                        }}> 이 상품이 맞는지 한번 더 확인해주세요.</div>
                        <div style={{
                            marginTop: 36,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>상품 카테고리를 알려주세요!</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 16
                        }}>
                            <div style={{ width: "18%", height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                            <div style={{ width: "18%", height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                            <div style={{ width: "18%", height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                            <div style={{ width: "18%", height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                        </div>
                        <div>
                            <div
                                style={{
                                    marginTop: 16,
                                    marginLeft: 20,
                                    marginRight: 20
                                }}>
                                <input style={{
                                    width: "90%",
                                    height: 26,
                                    border: "0px solid #ffffff"

                                }}
                                    name="ext"
                                    placeholder="기타 항목을 입력해주세요."
                                >
                                </input>
                                <div style={{ width: 438, marginTop: 7, height: 0, border: "solid 1px #f2f3f8" }}></div>
                            </div>

                        </div>
                        <div style={{
                            borderRadius: 8,
                            width: "90%",
                            height: 56,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 32,
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
                    </div>
                </div>
            </Mobile>
        </>
    )
}