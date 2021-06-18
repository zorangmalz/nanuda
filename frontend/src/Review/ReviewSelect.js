import React, { useEffect, useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, numberWithCommas } from "../Style";
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
    useEffect(() => {

    }, [])
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <div>
                            <Header content="리뷰 작성" goBack={true} />
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>리뷰를 작성할 상품을 골라주세요.</div>
                            <Product
                                name="삼배옷 컬랙션, White, 95"
                                current={210000}
                                sale={70000}
                                border={true}
                            />
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
                            color: "#010608",
                            fontFamily: "NotoSansCJKkr"
                        }}>리뷰를 작성할 상품을 골라주세요.</div>
                        <MProduct
                            name="삼배옷 컬랙션, White, 95"
                            current={210000}
                            sale={70000}
                            border={true}
                        />
                    </div>
                </div>
            </Mobile>
        </>
    )
}

export function Product({ name, current, sale, border }) {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 20,

            cursor: "pointer",
            paddingBottom: border ? 16 : 0,
            borderBottom: border ? "1px solid rgba(1, 6, 8, 0.2)" : 0,
            width: 440,
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
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 14, fontFamily: "AvenirNext", marginBottom: 8 }}>{name}</div>
                    <div style={{ fontSize: 14, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>{numberWithCommas(current)} 원</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#010608", marginBottom: 8 }}>{numberWithCommas(sale)} 원에 획득 완료!</div>
                </div>
            </div>
            <RiArrowRightSLine color="#dfdfdf" size={24} style={{ cursor: "pointer" }} />
        </div>
    )
}

export function MProduct({ name, current, sale, border }) {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 20,

            cursor: "pointer",
            paddingBottom: border ? "4vw" : 0,
            borderBottom: border ? "1px solid rgba(1, 6, 8, 0.2)" : 0,
            width: "90vw",
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
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: 12,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: 12, fontFamily: "AvenirNext", marginBottom: 4 }}>{name}</div>
                    <div style={{ fontSize: 12, opacity: 0.6, textDecoration: "line-through", marginBottom: 4 }}>{numberWithCommas(current)} 원</div>
                    <div style={{ fontSize: 14, fontWeight: "bold", color: "#010608", marginBottom: 4 }}>{numberWithCommas(sale)} 원에 획득 완료!</div>
                </div>
            </div>
            <RiArrowRightSLine color="#dfdfdf" size={20} style={{ cursor: "pointer" }} />
        </div>
    )
}