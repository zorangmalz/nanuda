import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { useHistory } from "react-router";
import { AiFillStar } from "react-icons/ai";
import nodata from "../images/nodata.png";

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
                            {reviewData.length === 0 ?
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    minHeight: "60vh",
                                    width: "100%",
                                }}>
                                    <img 
                                        src={nodata}
                                    />
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 24,
                                        fontWeight: "bold",
                                        marginTop: 32,
                                        marginBottom: 8,
                                        color: "#202426"
                                    }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 18,
                                        opacity: 0.6,
                                        color: "#202426"
                                    }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                                </div>
                                :
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
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                marginTop: 8,
                                            }}>
                                                <AiFillStar size={16} color="#fad94f" />
                                                <div style={{
                                                    fontFamily: "NotoSansCJKkr",
                                                    fontSize: 14,
                                                    fontWeight: "bold",
                                                    color: "#051a1a",
                                                    marginLeft: 4,
                                                }}>4.5</div>
                                            </div>
                                            <div style={{
                                                fontSize: 14,
                                                opacity: 0.8,
                                                marginTop: 8,
                                                width: 210,
                                                fontFamily: "NotoSansCJKkr"
                                            }}>{item.content}</div>
                                            <div style={{
                                                color: "#26c1f0",
                                                marginTop: 4,
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                fontFamily: "NotoSansCJKkr"
                                            }}>{item.follow}원에 획득 완료</div>
                                        </div>
                                    )}
                                </div>
                            }
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
                    <MHeader content="나눠산 사람들" goBack={true} />
                    <div style={{
                        width: "90vw",
                        height: "30vw",
                        marginTop: "6vw",
                        alignSelf: "center",
                        backgroundColor: "#cb1a86",
                        borderRadius: 6
                    }}>
                        <div style={{
                            fontSize: 14,
                            color: "#ffffff",
                            marginLeft: "7vw",
                            marginTop: "7vw"
                        }}>다른 사람들은 어떤걸 샀을까?</div>
                        <div style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#ffffff",
                            marginTop: "3.5vw",
                            marginLeft: "7vw"
                        }}>뽐뿌가 왔다면 위시딜!</div>
                    </div>
                    {reviewData.length === 0 ?
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "60vh",
                            width: "100%",
                        }}>
                            <img
                                src={nodata}
                                style={{
                                    width: "50vw"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 20,
                                fontWeight: "bold",
                                marginTop: "8vw",
                                marginBottom: "2vw",
                                color: "#202426"
                            }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426"
                            }}>아직 작성한 리뷰가 없어요 ㅠㅠ</div>
                        </div>
                        :
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
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        marginTop: 8,
                                    }}>
                                        <AiFillStar size={12} color="#fad94f" />
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            color: "#051a1a",
                                            marginLeft: 4,
                                        }}>4.5</div>
                                    </div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        marginTop: 8,
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.content}</div>
                                    <div style={{
                                        color: "#26c1f0",
                                        marginTop: 4,
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.follow}원에 획득 완료</div>
                                </div>
                            )}
                        </div>
                    }
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