import React, { useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { BsFillStarFill, BsPlusCircle } from "react-icons/bs"
import { useHistory } from "react-router";

function reducer(state, action) {
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
    const [numberB, dispatchB] = useReducer(reducer, 0);
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
                            <Header content="리뷰 작성" goBack={true} />
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
                                <BsFillStarFill onClick={onOneB} color={numberB > 0 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onTwoB} color={numberB > 1 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onThreeB} color={numberB > 2 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFourB} color={numberB > 3 ? "#fad94f" : "#dfdfdf"} size={28} style={{ marginRight: 5, cursor: "pointer" }} />
                                <BsFillStarFill onClick={onFiveB} color={numberB > 4 ? "#fad94f" : "#dfdfdf"} size={28} style={{ cursor: "pointer" }} />
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
                                <ImagePut />
                                <ImagePut />
                                <ImagePut />
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
                            <div onClick={() => history.push("/reviewsuccess")} style={{
                                borderRadius: 6,
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                marginTop: 40,
                                marginBottom: 50,
                                backgroundColor: "#2dd9d3",
                                alignSelf: "center",

                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                                cursor: "pointer",
                                textAlign: "center"
                            }}>다음</div>
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
                    <MHeader content="리뷰 작성" goBack={true} />
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        fontFamily: "NotoSansCJKkr"
                    }}>리뷰를 작성할 상품을 골라주세요.</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <div style={{
                            marginTop: 16,
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <div style={{
                                width: "20vw",
                                height: "20vw",
                                backgroundColor: "#dfdfdf",
                                marginLeft: 20,
                                borderRadius: 6
                            }}></div>
                            <div style={{
                                marginLeft: 8,
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <div style={{ fontSize: 12, fontFamily: "AvenirNext", marginBottom: 8 }}>삼베옷 컬렉션, White, 95</div>
                                <div style={{ fontSize: 12, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>210,000 원</div>
                                <div style={{ fontSize: 14, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>70,000 원에 획득 완료!</div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>제품 사용은 만족스러웠나요? </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 20,
                        marginTop: 12,
                    }}>
                        <BsFillStarFill onClick={onOneB} color={numberB > 0 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onTwoB} color={numberB > 1 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onThreeB} color={numberB > 2 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onFourB} color={numberB > 3 ? "#fad94f" : "#dfdfdf"} size={24} style={{ marginRight: 5, cursor: "pointer" }} />
                        <BsFillStarFill onClick={onFiveB} color={numberB > 4 ? "#fad94f" : "#dfdfdf"} size={24} style={{ cursor: "pointer" }} />
                    </div>
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>사진을 첨부해주세요.(최대 3장)</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <MImagePut />
                        <MImagePut />
                        <MImagePut />
                    </div>
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16
                    }}>후기를 작성해주세요.</div>
                    <textarea cols="10" rows="5" placeholder="상품에 대한 품질, 사용 후 만족도를 말씀해주세요!" style={{
                        outline: 0,
                        border: 0,
                        width: "82vw",
                        padding: "4vw",
                        borderRadius: 6,
                        backgroundColor: "#f2f3f8",
                        minHeight: 180,
                        marginTop: 16,
                        resize: "none",
                        alignSelf: "center",
                    }} />
                    <div onClick={() => history.push("/reviewsuccess")} style={{
                        borderRadius: 6,
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        marginTop: 20,
                        marginBottom: 20,
                        backgroundColor: "#2dd9d3",
                        alignSelf: "center",

                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "bold",
                        cursor: "pointer",
                        textAlign: "center"
                    }}>다음</div>
                </div>
            </Mobile>
        </>
    )
}

function ImagePut() {
    return (
        <div style={{
            marginLeft: 20,
            marginTop: 16,
            width: 120,
            height: 120,
            borderRadius: 6,
            backgroundColor: "#f2f3f8",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            cursor: "pointer"
        }}>
            <BsPlusCircle size={24} color="#051a1a" />
        </div>
    )
}

function MImagePut() {
    return (
        <div style={{
            marginLeft: "5vw",
            marginTop: "4vw",
            width: "25vw",
            height: "25vw",
            borderRadius: 6,
            backgroundColor: "#f2f3f8",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            cursor: "pointer"
        }}>
            <BsPlusCircle size={16} color="#051a1a" />
        </div>
    )
}