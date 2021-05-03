import React, { useReducer, useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import { BsFillStarFill, BsUpload } from "react-icons/bs"
import { useHistory } from "react-router";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Product, MProduct } from "./ReviewSelect";

function reducer(state, action) {
    switch (action.type) {
        case 'ONE':
            return 1;
        case 'TWO':
            return 2;
        case 'THREE':
            return 3;
        case 'FOUR':
            return 4;
        case 'FIVE':
            return 5;
        default:
            return state;
    }
}

export default function ReviewPost() {
    const [number, dispatch] = useReducer(reducer, 0);
    const onOne = () => {
        dispatch({ type: 'ONE' });
    };
    const onTwo = () => {
        dispatch({ type: 'TWO' });
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
    };
    const onFive = () => {
        dispatch({ type: 'FIVE' });
    };

    let history = useHistory()

    const [mine, setMine] = useState(false)
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
                            paddingBottom: 40,
                        }}>
                            <Header content="나눠산 사람들" goBack={true} />
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 32 }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <div style={{
                                        width: 32,
                                        height: 32,
                                        backgroundColor: "#f2f3f8",
                                        marginLeft: 20,
                                        borderRadius: 16
                                    }}>
                                    </div>
                                    <div style={{
                                        marginLeft: 8,
                                        fontFamily: "AvenirNext",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>나누다홀릭</div>
                                </div>
                                {mine ?
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        opacity: 0.6,
                                        fontSize: 14,
                                        color: "#202426",
                                        textDecorationLine: "underline",
                                        marginRight: 20,
                                        cursor: "pointer",
                                    }}>삭제하기</div>
                                    :
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        opacity: 0.6,
                                        fontSize: 14,
                                        color: "#202426",
                                        textDecorationLine: "underline",
                                        marginRight: 20,
                                        cursor: "pointer"
                                    }}>신고하기</div>
                                }
                            </div>

                            <div style={{ width: 480, height: 500, backgroundColor: "#2dd9d3", marginTop: 8 }}></div>

                            <Product
                                name="삼배옷 컬랙션, White, 95"
                                current={210000}
                                sale={70000}
                                border={false}
                            />
                            <div style={{
                                marginTop: 16,
                                width: 480,
                                border: "0.5px solid #051a1a",
                                opacity: 0.2
                            }}></div>
                            <div style={{
                                marginLeft: 20,
                                marginTop: 16,
                                fontSize: 12,
                                opacity: 0.6,
                                fontFamily: "NotoSansCJKkr",
                                color: "#202426",
                            }}> 2021.03.30 </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: 20,
                                marginTop: 8
                            }}>
                                <BsFillStarFill onClick={onOne} color={number > 0 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onTwo} color={number > 1 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onThree} color={number > 2 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFour} color={number > 3 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFive} color={number > 4 ? "#fad94f" : "#dfdfdf"} size={28} style={{ cursor: "pointer" }} />
                            </div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#26c1f0",
                                marginLeft: 20,
                                marginTop: 32,
                            }}>좋았어요!</div>
                            <div style={{
                                marginTop: 8,
                                marginLeft: 20,
                                width: 440,
                                fontSize: 14,
                                lineHeight: 1.5
                            }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#f72b2b",
                                marginLeft: 20,
                                marginTop: 32,
                            }}>별로였어요.</div>
                            <div style={{
                                marginTop: 8,
                                marginLeft: 20,
                                width: 440,
                                fontSize: 14,
                                lineHeight: 1.5
                            }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 16,
                                marginLeft: 20,
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
                            <StandardButton 
                                marginTop={30}
                                text="위시딜 신청하기"
                                route="/wishdeal"
                            />
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
                    paddingBottom: "5vw"
                }}>
                    <Header content="나눠산 사람들" goBack={true} />
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <div style={{
                                width: 28,
                                height: 28,
                                backgroundColor: "#f2f3f8",
                                marginLeft: "5vw",
                                borderRadius: 14
                            }}>
                            </div>
                            <div style={{
                                marginLeft: 5,
                                fontFamily: "AvenirNext",
                                fontWeight: "bold",
                                fontSize: 12
                            }}>나누다홀릭</div>
                        </div>
                        {mine ?
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#202426",
                                textDecorationLine: "underline",
                                marginRight: "5vw",
                                cursor: "pointer",
                            }}>삭제하기</div>
                            :
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#202426",
                                textDecorationLine: "underline",
                                marginRight: "5vw",
                                cursor: "pointer"
                            }}>신고하기</div>
                        }
                    </div>

                    <div style={{ width: "100vw", height: "105vw", backgroundColor: "#2dd9d3", marginTop: 8 }}></div>

                    <MProduct
                        name="삼배옷 컬랙션, White, 95"
                        current={210000}
                        sale={70000}
                        border={false}
                    />
                    <div style={{
                        marginTop: 12,
                        width: "100vw",
                        border: "0.5px solid #051a1a",
                        opacity: 0.2
                    }}></div>
                    <div style={{
                        marginLeft: "5vw",
                        marginTop: "4vw",
                        fontSize: 10,
                        opacity: 0.6,
                        fontFamily: "NotoSansCJKkr",
                        color: "#202426",
                    }}> 2021.03.30 </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "5vw",
                        marginTop: 12
                    }}>
                        <BsFillStarFill onClick={onOne} color={number > 0 ? "#fad94f" : "#dfdfdf"} size={20} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onTwo} color={number > 1 ? "#fad94f" : "#dfdfdf"} size={20} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onThree} color={number > 2 ? "#fad94f" : "#dfdfdf"} size={20} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onFour} color={number > 3 ? "#fad94f" : "#dfdfdf"} size={20} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onFive} color={number > 4 ? "#fad94f" : "#dfdfdf"} size={20} style={{ cursor: "pointer" }} />
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>좋았어요!</div>
                    <div style={{
                        marginTop: "2vw",
                        marginLeft: "5vw",
                        width: "90vw",
                        fontSize: 12,
                        lineHeight: 1.5
                    }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#f72b2b",
                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>별로였어요.</div>
                    <div style={{
                        marginTop: "2vw",
                        marginLeft: "5vw",
                        width: "90vw",
                        fontSize: 12,
                        lineHeight: 1.5
                    }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        {like === 0 ? <AiOutlineLike onClick={onLike} size={20} color="#051a1a" /> : like === 1 ? <AiFillLike onClick={onReset} size={20} color="#051a1a" /> : <AiOutlineLike onClick={onLike} size={20} color="#051a1a" />}
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#202426",
                            marginLeft: 4,
                            marginRight: 8,
                        }}>100</div>
                        {like === 0 ? <AiOutlineDislike onClick={onDislike} size={20} color="#051a1a" /> : like === 2 ? <AiFillDislike onClick={onReset} size={20} color="#051a1a" /> : <AiOutlineDislike onClick={onDislike} size={20} color="#051a1a" />}
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#202426",
                            marginLeft: 4,
                        }}>100</div>
                    </div>
                    <MStandardButton 
                        marginTop={20}
                        text="위시딜 신청하기"
                        route="/wishdeal"
                    />
                </div>
            </Mobile>
        </>
    )
}