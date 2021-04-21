import React, { useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BsCheck, BsFillStarFill } from "react-icons/bs"
import { useHistory } from "react-router";

function reducer(state, action) {
    switch (action.type) {
        case 'ONE':
            return 1;
        case 'TWO':
            return 2;
        case 'THREE':
            return 3;
        default:
            return state;
    }
}

function reducerB(state, action) {
    switch (action.type) {
        case 'ONEB':
            return 1;
        case 'TWOB':
            return 2;
        case 'THREEB':
            return 3;
        case 'FOURB':
            return 4;
        case 'FIVEB':
            return 5;
        default:
            return state;
    }
}


export default function ReviewWrite() {
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

    const [numberB, dispatchB] = useReducer(reducerB, 0);
    const onOneB = () => {
        dispatchB({ type: 'ONEB' });
    };
    const onTwoB = () => {
        dispatchB({ type: 'TWOB' });
    };
    const onThreeB = () => {
        dispatchB({ type: 'THREEB' });
    };
    const onFourB = () => {
        dispatchB({ type: 'FOURB' });
    };
    const onFiveB = () => {
        dispatchB({ type: 'FIVEB' });
    };

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
                            <Header content="리뷰 작성" />
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>리뷰를 작성할 상품을 골라주세요.</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <div style={{
                                    marginTop: 16,
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        width: 96,
                                        height: 96,
                                        backgroundColor: "#dfdfdf",
                                        marginLeft: 20,
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
                                <BsCheck onClick={onOne} color={number === 1 ? "#2dd9d3" : "#dfdfdf"} size={42} style={{ marginRight: 20, marginTop: 37, cursor: "pointer" }} />
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <div style={{
                                    marginTop: 16,
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        width: 96,
                                        height: 96,
                                        backgroundColor: "#dfdfdf",
                                        marginLeft: 20,
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
                                <BsCheck onClick={onTwo} color={number === 2 ? "#2dd9d3" : "#dfdfdf"} size={42} style={{ marginRight: 20, marginTop: 37, cursor: "pointer" }} />
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <div style={{
                                    marginTop: 16,
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        width: 96,
                                        height: 96,
                                        backgroundColor: "#dfdfdf",
                                        marginLeft: 20,
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
                                <BsCheck onClick={onThree} color={number === 3 ? "#2dd9d3" : "#dfdfdf"} size={42} style={{ marginRight: 20, marginTop: 37, cursor: "pointer" }} />
                            </div>
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontSize: 18
                            }}>제품 사용은 만족스러웠나요? </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: 20,
                                marginTop: 18,
                            }}>
                                <BsFillStarFill onClick={onOneB} color={numberB > 0 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onTwoB} color={numberB > 1 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onThreeB} color={numberB > 2 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFourB} color={numberB > 3 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFiveB} color={numberB > 4 ? "#fad94f" : "#dfdfdf"} size={42} style={{ cursor: "pointer" }} />
                            </div>
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontSize: 18
                            }}>사진을 첨부해주세요.(최대 3장)</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <div style={{
                                    marginLeft: 20,
                                    marginTop: 16,
                                    width: 120,
                                    height: 120,
                                    borderRadius: 6,
                                    backgroundColor: "#dfdfdf"
                                }}> </div>
                                <div style={{
                                    marginLeft: 20,
                                    marginTop: 16,
                                    width: 120,
                                    height: 120,
                                    borderRadius: 6,
                                    backgroundColor: "#dfdfdf"
                                }}> </div>
                                <div style={{
                                    marginLeft: 20,
                                    marginTop: 16,
                                    width: 120,
                                    height: 120,
                                    borderRadius: 6,
                                    backgroundColor: "#dfdfdf"
                                }}> </div>
                            </div>
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontSize: 18
                            }}>후기를 작성해주세요.</div>
                            <textarea cols="10" rows="5" placeholder="상품에 대한 품질, 사용 후 만족도를 말씀해주세요!" style={{
                                outline: 0,
                                border: 0,
                                width: 408,
                                padding: 16,
                                borderRadius: 6,
                                backgroundColor: "#f2f3f8",
                                minHeight: 180,
                                marginLeft: 20,
                                marginTop: 16,
                                resize: "none",
                            }} />
                            <div onClick={() => history.push("/review")} style={{
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
                                marginBottom: 50,
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>작성 완료</div></div>
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

                    backgroundColor: "#f2f3f8"
                }}>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "flex-start",

                        width: "100%",
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="리뷰 작성" />
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202426",
                            fontFamily: "NotoSansCJKkr"
                        }}>리뷰를 작성할 상품을 골라주세요.</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <div style={{
                                marginTop: 16,
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <div style={{
                                    width: 96,
                                    height: 96,
                                    backgroundColor: "#dfdfdf",
                                    marginLeft: 20,
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
                            <BsCheck onClick={onOne} color={number === 1 ? "#2dd9d3" : "#dfdfdf"} size={42} style={{ marginRight: 20, marginTop: 37, cursor: "pointer" }} />
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <div style={{
                                marginTop: 16,
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <div style={{
                                    width: 96,
                                    height: 96,
                                    backgroundColor: "#dfdfdf",
                                    marginLeft: 20,
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
                            <BsCheck onClick={onTwo} color={number === 2 ? "#2dd9d3" : "#dfdfdf"} size={42} style={{ marginRight: 20, marginTop: 37, cursor: "pointer" }} />
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <div style={{
                                marginTop: 16,
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <div style={{
                                    width: 96,
                                    height: 96,
                                    backgroundColor: "#dfdfdf",
                                    marginLeft: 20,
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
                            <BsCheck onClick={onThree} color={number === 3 ? "#2dd9d3" : "#dfdfdf"} size={42} style={{ marginRight: 20, marginTop: 37, cursor: "pointer" }} />
                        </div>
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>제품 사용은 만족스러웠나요? </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 20,
                            marginTop: 18,
                        }}>
                            <BsFillStarFill onClick={onOneB} color={numberB > 0 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onTwoB} color={numberB > 1 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onThreeB} color={numberB > 2 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onFourB} color={numberB > 3 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onFiveB} color={numberB > 4 ? "#fad94f" : "#dfdfdf"} size={42} style={{ cursor: "pointer" }} />
                        </div>
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>사진을 첨부해주세요.(최대 3장)</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <div style={{
                                marginLeft: 20,
                                marginTop: 16,
                                width: 100,
                                height: 100,
                                borderRadius: 6,
                                backgroundColor: "#dfdfdf"
                            }}> </div>
                            <div style={{
                                marginLeft: 20,
                                marginTop: 16,
                                width: 100,
                                height: 100,
                                borderRadius: 6,
                                backgroundColor: "#dfdfdf"
                            }}> </div>
                            <div style={{
                                marginLeft: 20,
                                marginTop: 16,
                                width: 100,
                                height: 100,
                                borderRadius: 6,
                                backgroundColor: "#dfdfdf"
                            }}> </div>
                        </div>
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>후기를 작성해주세요.</div>
                        <textarea cols="10" rows="5" placeholder="상품에 대한 품질, 사용 후 만족도를 말씀해주세요!" style={{
                            outline: 0,
                            border: 0,
                            width: "82%",
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 180,
                            marginLeft: 20,
                            marginTop: 16,
                            resize: "none"
                        }} />
                        <div onClick={() => history.push("/review")} style={{
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
                            cursor: "pointer",
                        }}><div style={{
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>작성 완료</div></div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}