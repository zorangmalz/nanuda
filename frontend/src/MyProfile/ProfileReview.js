import React, { useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { useHistory } from "react-router";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

function PostThumb({item}) {
    let history = useHistory()
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
        <div style={{
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
    )
}

function MPostThumb({item}) {
    let history = useHistory()
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
    )
}

function ProductList() {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            paddingBottom: 16,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            width: 440,
            alignSelf: "center",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div style={{
                    width: 96,
                    height: 96,
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }}></div>
                <div style={{
                    marginLeft: 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 14, fontFamily: "AvenirNext", marginBottom: 8 }}>삼베옷 컬렉션, White, 95</div>
                    <div style={{ fontSize: 14, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>210,000 원</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>70,000 원에 획득 완료!</div>
                </div>
            </div>
            <MdKeyboardArrowRight style={{
                marginRight: 8,
            }} size={24} color="rgba(5, 26, 26, 0.2)" />
        </div>
    )
}

function MProductList() {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            paddingBottom: 12,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            width: "90vw",
            alignSelf: "center",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div style={{
                    width: "20vw",
                    height: "20vw",
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: 12,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 12, fontFamily: "AvenirNext", marginBottom: 8 }}>삼베옷 컬렉션, White, 95</div>
                    <div style={{ fontSize: 12, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>210,000 원</div>
                    <div style={{ fontSize: 14, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>70,000 원에 획득 완료!</div>
                </div>
            </div>
            <MdKeyboardArrowRight style={{
                marginRight: 4,
            }} size={20} color="rgba(5, 26, 26, 0.2)" />
        </div>
    )
}

export default function ProfileReview() {
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
                    minHeight: "100vh",
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
                            paddingBottom: 40,
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="내 리뷰" goBack={true} />
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                width: 440,
                                columnGap: 20,
                                alignSelf: "center",
                            }}>
                                {reviewData.map(item => (
                                    <PostThumb item={item} />
                                ))}
                            </div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginLeft: 20,
                                marginTop: 32,
                                marginBottom: 16,
                            }}>아직 리뷰를 작성하지 않았어요!</div>
                            <ProductList />
                            <ProductList />
                            <ProductList />
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
                    paddingBottom: 20,
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="내 리뷰" goBack={true} />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        width: "90vw",
                        columnGap: "5vw",
                        alignSelf: "center",
                    }}>
                        {reviewData.map(item => (
                            <MPostThumb item={item} />
                        ))}
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        marginLeft: "5vw",
                        marginTop: 28,
                        marginBottom: 12,
                    }}>아직 리뷰를 작성하지 않았어요!</div>
                    <MProductList />
                    <MProductList />
                    <MProductList />
                </div>
            </Mobile>
        </>
    )
}