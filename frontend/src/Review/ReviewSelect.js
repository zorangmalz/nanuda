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
                                mobile={false}
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
                        <Product
                            name="삼배옷 컬랙션, White, 95"
                            current={210000}
                            sale={70000}
                            border={true}
                            mobile={false}
                        />
                    </div>
                </div>
            </Mobile>
        </>
    )
}

export function Product({ img, name, current, sale, border, mobile }) {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/reviewwrite")} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: mobile ? "5vw" : 20,

            cursor: "pointer",
            paddingBottom: border ? 16 : 0,
            borderBottom: border ? "1px solid rgba(1, 6, 8, 0.2)" : 0,
            width: mobile ? "90vw" : 440,
        }}>
            <div style={{
                marginTop: mobile ? "4vw" : 16,
                display: "flex",
                flexDirection: "row",
            }}>
                <img alt="상품" src={img} style={{
                    width: mobile ? 80 : 96,
                    height: mobile ? 80 : 96,
                    backgroundColor: "#dfdfdf",
                    borderRadius: 6
                }} />
                <div style={{
                    marginLeft: mobile ? 12 : 14,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ fontSize: mobile ? 12 : 14, fontFamily: "AvenirNext", marginBottom: mobile ? "2vw" : 8 }}>{name}</div>
                    <div style={{ fontSize: mobile ? 12 : 14, opacity: 0.6, textDecoration: "line-through", marginBottom: mobile ? "2vw" : 8 }}>{numberWithCommas(current)} 원</div>
                    <div style={{ fontSize: mobile ? 14 : 16, fontWeight: "bold", color: "#010608", marginBottom: mobile ? "2vw" : 8 }}>{numberWithCommas(sale)} 원에 획득 완료!</div>
                </div>
            </div>
            <RiArrowRightSLine color="#dfdfdf" size={mobile ? 20 : 24} style={{ cursor: "pointer" }} />
        </div>
    )
}