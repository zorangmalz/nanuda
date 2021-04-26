import React, { useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { RiArrowRightSLine } from "react-icons/ri"
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

export default function ReviewSelect() {
    const [number, dispatch] = useReducer(reducer, 0);
    const onOne = () => {
        dispatch({ type: 'ONE' });
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
                            justifyContent: "space-between",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <div>
                                <Header content="리뷰 작성" goBack={true} />
                                <div style={{
                                    marginTop: 32,
                                    marginLeft: 20,
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>리뷰를 작성할 상품을 골라주세요.</div>
                                <Product
                                    name="삼배옷 컬랙션, White, 95"
                                    current={210000}
                                    sale={70000}
                                />
                            </div>
                            <div onClick={() => history.push("/reviewwrite")} style={{
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
                    justifyContent: "space-between",
                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <div>
                        <MHeader content="리뷰 작성" goBack={true} />
                        <div style={{
                            marginTop: 28,
                            marginLeft: "5vw",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            fontFamily: "NotoSansCJKkr"
                        }}>리뷰를 작성할 상품을 골라주세요.</div>
                        <MProduct
                            name="삼배옷 컬랙션, White, 95"
                            current={210000}
                            sale={70000}
                        />
                    </div>
                    <div onClick={() => history.push("/reviewwrite")} style={{
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

function Product({ name, current, sale }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            cursor: "pointer"
        }}>
            <div style={{
                marginTop: 16,
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{
                    width: 96,
                    height: 96,
                    backgroundColor: "#dfdfdf",
                    marginLeft: 20,
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 14, fontFamily: "AvenirNext", marginBottom: 8 }}>{name}</div>
                    <div style={{ fontSize: 14, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>{current} 원</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>{sale} 원에 획득 완료!</div>
                </div>
            </div>
            <RiArrowRightSLine color="#dfdfdf" size={42} style={{ marginRight: 20, cursor: "pointer" }} />
        </div>
    )
}

function MProduct({ name, current, sale }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            cursor: "pointer"
        }}>
            <div style={{
                marginTop: 12,
                display: "flex",
                flexDirection: "row"
            }}>
                <div style={{
                    width: 80,
                    height: 80,
                    backgroundColor: "#dfdfdf",
                    marginLeft: "5vw",
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: 12,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 12, fontFamily: "AvenirNext", marginBottom: 4 }}>{name}</div>
                    <div style={{ fontSize: 12, opacity: 0.6, textDecoration: "line-through", marginBottom: 4 }}>{current} 원</div>
                    <div style={{ fontSize: 14, fontWeight: "bold", color: "#051a1a", marginBottom: 4 }}>{sale} 원에 획득 완료!</div>
                </div>
            </div>
            <RiArrowRightSLine color="#dfdfdf" size={36} style={{ marginRight: "5vw", cursor: "pointer" }} />
        </div>
    )
}