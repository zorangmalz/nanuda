import React, { useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BsHeart } from "react-icons/bs"
import { IoChatbubbleOutline } from "react-icons/io5"
import { useHistory } from "react-router";

export default function ReviewMain() {
    let history = useHistory()
    const reviewData = [
        {
            id: "CVIANAN_123",
            pic: "#f2f3f8",
            like: 100,
            reply: 100,
            content: "타임딜로 빠르게 구매했어요!! 여자친구가 진짜 좋아해요",
            follow: 10
        }, {
            id: "CVIANAN_123",
            pic: "#f2f3f8",
            like: 100,
            reply: 100,
            content: "타임딜로 빠르게 구매했어요!! 여자친구가 진짜 좋아해요",
            follow: 10
        }, {
            id: "CVIANAN_123",
            pic: "#f2f3f8",
            like: 100,
            reply: 100,
            content: "타임딜로 빠르게 구매했어요!! 여자친구가 진짜 좋아해요",
            follow: 10
        }, {
            id: "CVIANAN_123",
            pic: "#f2f3f8",
            like: 100,
            reply: 100,
            content: "타임딜로 빠르게 구매했어요!! 여자친구가 진짜 좋아해요",
            follow: 10
        }, {
            id: "CVIANAN_123",
            pic: "#f2f3f8",
            like: 100,
            reply: 100,
            content: "타임딜로 빠르게 구매했어요!! 여자친구가 진짜 좋아해요",
            follow: 10
        },
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
                            <Header content="나눠산 사람들" />
                            <div style={{
                                width: 440,
                                height: 150,
                                marginTop: 32,
                                marginLeft: 20,
                                backgroundColor: "#cb1a86",
                                borderRadius: 6

                            }}>
                                <div style={{
                                    fontSize: 18,
                                    color: "#ffffff",
                                    marginLeft: 32,
                                    marginTop: 32
                                }}>다른 사람들은 어떤걸 샀을까?</div>
                                <div style={{
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    marginTop: 16,
                                    marginLeft: 32
                                }}>뽐뿌가 왔다면 위시딜!</div>
                            </div>
                            <div style={{
                                display: "grid",
                                flexDirection: "row",
                                width: 240,
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gridTemplateColumns: "1fr 1fr",
                                marginBottom: 100,
                            }}>
                                {reviewData.map(item =>
                                    <div onClick={() => history.push("/reviewpost")} style={{
                                        marginLeft: 20,
                                        marginTop: 32,
                                        cursor: "pointer"
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}> <div style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            backgroundColor: item.pic
                                        }}>
                                            </div>
                                            <div style={{
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                marginLeft: 8,
                                                marginTop: 6
                                            }}>{item.id} </div>
                                        </div>
                                        <div style={{
                                            width: 210,
                                            height: 210,
                                            borderRadius: 6,
                                            backgroundColor: "#f2f3f8",
                                            marginTop: 8
                                        }}> </div>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row"
                                        }}>
                                            <div style={{
                                                width: 24,
                                                height: 24,
                                                marginTop: 11
                                            }}>
                                                <BsHeart></BsHeart>
                                            </div>
                                            <div style={{ marginTop: 11, marginLeft: 4, fontSize: 14, fontWeight: "bold" }}>{item.like}</div>
                                            <div style={{
                                                width: 24,
                                                height: 24,
                                                marginTop: 11,
                                                marginLeft: 10
                                            }}>
                                                <IoChatbubbleOutline></IoChatbubbleOutline>
                                            </div>
                                            <div style={{ marginTop: 11, fontSize: 14, fontWeight: "bold" }}>{item.reply}</div>
                                        </div>
                                        <div style={{
                                            fontSize: 14,
                                            opacity: 0.8,
                                            marginTop: 16,
                                            width: 210
                                        }}>{item.content}</div>
                                        <div style={{
                                            color: "#26c1f0",
                                            marginTop: 4,
                                            fontSize: 14,
                                            fontWeight: "bold"
                                        }}>{item.follow}명이 따라 샀어요!</div>
                                    </div>
                                )}
                            </div>
                            <div onClick={() => history.push("/reviewwrite")} style={{
                                position: "fixed",
                                zIndex: 5,
                                bottom: 0,
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
                                cursor: "pointer",
                                marginBottom: 30,
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>리뷰 작성하기</div></div>
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
                        width: "90%",
                        height: 150,
                        marginTop: 32,
                        marginLeft: 20,
                        backgroundColor: "#cb1a86",
                        borderRadius: 6
                    }}>
                        <div style={{
                            fontSize: 18,
                            color: "#ffffff",
                            marginLeft: 32,
                            marginTop: 32
                        }}>다른 사람들은 어떤걸 샀을까?</div>
                        <div style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "#ffffff",
                            marginTop: 16,
                            marginLeft: 32
                        }}>뽐뿌가 왔다면 위시딜!</div>
                    </div>
                    <div style={{
                        display: "grid",
                        flexDirection: "row",
                        width: "90%",
                        marginLeft: "5%",
                        aspectRatio: 1,
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gridTemplateColumns: "1fr 1fr",
                        marginBottom: 100,
                    }}>
                        {reviewData.map(item =>
                            <div style={{
                                marginLeft: "5%",
                                marginTop: 24,
                                width: "42.5vw",
                                cursor: "pointer"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",

                                }}> <div style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: 14,
                                    backgroundColor: item.pic
                                }}>
                                    </div>
                                    <div style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        marginLeft: 8,
                                        marginTop: 6
                                    }}>{item.id} </div>
                                </div>

                                <div onClick={() => history.push("/reviewpost")} style={{
                                    width: "42.5vw",
                                    height: "42.5vw",
                                    borderRadius: 6,
                                    backgroundColor: "#f2f3f8",
                                    marginTop: 8
                                }}> </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 8,
                                    width: "42.5vw",
                                }}>
                                    <BsHeart size={16} />
                                    <div style={{ marginLeft: 4, fontSize: 12, fontWeight: "bold", marginRight: 10 }}>{item.like}</div>
                                    <IoChatbubbleOutline size={16} />
                                    <div style={{ fontSize: 12, fontWeight: "bold", marginLeft: 4 }}>{item.reply}</div>
                                </div>
                                <div style={{
                                    fontSize: 12,
                                    opacity: 0.8,
                                    marginTop: 12,
                                    width: "100%"
                                }}>{item.content}</div>
                                <div style={{
                                    color: "#26c1f0",
                                    marginTop: 4,
                                    fontSize: 12,
                                    fontWeight: "bold"
                                }}>{item.follow}명이 따라 샀어요!</div>
                            </div>
                        )}
                    </div>
                    <div onClick={() => history.push("/reviewwrite")} style={{
                        position: "fixed",
                        zIndex: 5,
                        bottom: 20,
                        borderRadius: 8,
                        width: "90%",
                        paddingTop: "4%",
                        paddingBottom: "4%",
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginTop: 52,
                        backgroundColor: "#2dd9d3",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}><div style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>리뷰 작성하기</div></div>
                </div>
            </Mobile>
        </>
    )
}