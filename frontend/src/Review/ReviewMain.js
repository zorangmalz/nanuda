import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { BsHeart } from "react-icons/bs"
import { IoChatbubbleOutline } from "react-icons/io5"
import { useHistory } from "react-router";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

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

    const [like, setLike] = useState(0)
    function onLike() {
        setLike(1)
    }
    function onDislike() {
        setLike(2)
    }
    function onReset() {
        setLike(0)
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
                            <Header content="나눠산 사람들" goBack={true} />
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
                                    <div style={{
                                        marginLeft: 20,
                                        marginTop: 32,
                                        cursor: "pointer"
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}>
                                            <div style={{
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
                                        <div onClick={() => history.push("/reviewpost")} style={{
                                            width: 210,
                                            height: 210,
                                            borderRadius: 6,
                                            backgroundColor: "#f2f3f8",
                                            marginTop: 8
                                        }} />
                                        <div style={{
                                            color: "#26c1f0",
                                            marginTop: 8,
                                            fontSize: 14,
                                            fontWeight: "bold"
                                        }}>{item.follow}명이 따라 샀어요!</div>
                                        <div style={{
                                            fontSize: 14,
                                            opacity: 0.8,
                                            marginTop: 4,
                                            width: 210
                                        }}>{item.content}</div>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginTop: 8,
                                        }}>
                                            {like === 0 ? <AiOutlineLike onClick={onLike} size={24} color="#051a1a" /> : like === 1 ? <AiFillLike onClick={onReset} size={24} color="#051a1a" /> : <AiOutlineLike onClick={onLike} size={24} color="#051a1a" />}
                                            <div style={{
                                                fontFamily: "NotoSansCJKkr",
                                                fontSize: 14,
                                                color: "#202426",
                                                marginLeft: 8,
                                                marginRight: 12,
                                            }}>100</div>
                                            {like === 0 ? <AiOutlineDislike onClick={onDislike} size={24} color="#051a1a" /> : like === 2 ? <AiFillDislike onClick={onReset} size={24} color="#051a1a" /> : <AiOutlineDislike onClick={onDislike} size={24} color="#051a1a" />}
                                            <div style={{
                                                fontFamily: "NotoSansCJKkr",
                                                fontSize: 14,
                                                color: "#202426",
                                                marginLeft: 8,
                                            }}>100</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div onClick={() => history.push("/reviewselect")} style={{
                                position: "fixed",
                                zIndex: 5,
                                bottom: 0,
                                borderRadius: 8,
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                alignSelf: "center",
                                backgroundColor: "#2dd9d3",

                                textAlign: "center",
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                                cursor: "pointer",
                                marginBottom: 30,
                            }}>리뷰 작성하기</div>
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
                    <Header content="나눠산 사람들" goBack={true} />
                    <div style={{
                        width: "90vw",
                        height: "30vw",
                        marginTop: 24,
                        alignSelf: "center",
                        backgroundColor: "#cb1a86",
                        borderRadius: 6
                    }}>
                        <div style={{
                            fontSize: 16,
                            color: "#ffffff",
                            marginLeft: 28,
                            marginTop: 28
                        }}>다른 사람들은 어떤걸 샀을까?</div>
                        <div style={{
                            fontSize: 22,
                            fontWeight: "bold",
                            color: "#ffffff",
                            marginTop: 14,
                            marginLeft: 28
                        }}>뽐뿌가 왔다면 위시딜!</div>
                    </div>
                    <div style={{
                        display: "grid",
                        width: "90vw",
                        gridTemplateColumns: "1fr 1fr",
                        marginBottom: 50,
                        alignSelf: "center",
                        columnGap: "5vw",
                    }}>
                        {reviewData.map(item =>
                            <div style={{
                                marginTop: 16,
                                cursor: "pointer"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}>
                                    <div style={{
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
                                    width: "42vw",
                                    height: "42vw",
                                    borderRadius: 6,
                                    backgroundColor: "#f2f3f8",
                                    marginTop: 8
                                }} />
                                <div style={{
                                    color: "#26c1f0",
                                    marginTop: 8,
                                    fontSize: 12,
                                    fontWeight: "bold"
                                }}>{item.follow}명이 따라 샀어요!</div>
                                <div style={{
                                    fontSize: 12,
                                    opacity: 0.8,
                                    marginTop: 4,
                                    width: "42vw"
                                }}>{item.content}</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 8,
                                }}>
                                    {like === 0 ? <AiOutlineLike onClick={onLike} size={20} color="#051a1a" /> : like === 1 ? <AiFillLike onClick={onReset} size={20} color="#051a1a" /> : <AiOutlineLike onClick={onLike} size={20} color="#051a1a" />}
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 12,
                                        color: "#202426",
                                        marginLeft: 8,
                                        marginRight: 12,
                                    }}>100</div>
                                    {like === 0 ? <AiOutlineDislike onClick={onDislike} size={20} color="#051a1a" /> : like === 2 ? <AiFillDislike onClick={onReset} size={20} color="#051a1a" /> : <AiOutlineDislike onClick={onDislike} size={20} color="#051a1a" />}
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 12,
                                        color: "#202426",
                                        marginLeft: 8,
                                    }}>100</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onClick={() => history.push("/reviewselect")} style={{
                        position: "fixed",
                        zIndex: 5,
                        bottom: 0,
                        borderRadius: 8,
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        alignSelf: "center",
                        backgroundColor: "#2dd9d3",

                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginBottom: 30,
                    }}>리뷰 작성하기</div>
                </div>
            </Mobile>
        </>
    )
}