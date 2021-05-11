import React, { useEffect, useReducer } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import axios from "axios"
import { AiOutlineExclamationCircle } from "react-icons/ai";
// import ogs from "open-graph-scraper-lite"


const TypeButton = ({ text, variable, number, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: 95,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 6,
            border: "1px solid rgba(5, 26, 26, 0.2)",
            backgroundColor: variable === number ? "#051a1a" : "#ffffff",
            marginRight: 16,
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 16,
            color: variable === number ? "#ffffff" : "rgba(5, 26, 26, 0.8)",
            textAlign: "center",
            fontWeight: variable === number ? "bold" : "normal",
        }}>{text}</div>
    )
}

const MTypeButton = ({ text, variable, number, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: "20vw",
            paddingTop: "3vw",
            paddingBottom: "3vw",
            borderRadius: 6,
            border: "1px solid rgba(5, 26, 26, 0.2)",
            backgroundColor: variable === number ? "#051a1a" : "#ffffff",
            marginRight: "4vw",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 14,
            color: variable === number ? "#ffffff" : "rgba(5, 26, 26, 0.8)",
            textAlign: "center",
            fontWeight: variable === number ? "bold" : "normal",
        }}>{text}</div>
    )
}

function reducer(state, action) {
    switch (action.type) {
        case "ELECTRONIC":
            return 1;
        case "FASHION":
            return 2;
        case "LUXURY":
            return 3;
        case "ETC":
            return 4;
        default:
            return 0;
    }
}

export default function WishDeal() {
    let history = useHistory();

    // useEffect(()=>{
    //     const options = { url: 'https://www.gucci.com/kr/ko/pr/women/womens-handbags/womens-hobos-shoulder-bags/gucci-horsebit-1955-small-shoulder-bag-p-6454541DB0G1000/' };
    //     ogs(options, (error, results, response) => {
    //       console.log('error:', error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
    //       console.log('results:', results); // This contains all of the Open Graph results
    //       console.log('response:', response); // This contains the HTML of page
    //     });
    // },[])

    const ogtag = async (url) => {
        let res = await axios.post(
            "http://localhost:3001/api",
            {
                params:
                {
                    code: url
                },
            }
        );
        console.log(res)
    }
    useEffect(() => {
        ogtag("https://store.musinsa.com/app/goods/1149329?loc=goods_rank")
    }, [])

    const [type, dispatch] = useReducer(reducer, 0)
    const onElectronic = () => {
        dispatch({ type: "ELECTRONIC" })
    }
    const onFashion = () => {
        dispatch({ type: "FASHION" })
    }
    const onLuxury = () => {
        dispatch({ type: "LUXURY" })
    }
    const onETC = () => {
        dispatch({ type: "ETC" })
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
                    height: "100vh",
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
                            height: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="위시딜" goBack={true} />
                            <div style={{
                                marginLeft: 20,
                                marginTop: 32,
                                fontWeight: "bold",
                                fontSize: 18,
                                fontFamily: "NotoSansCJKkr",
                                color: "#202426",
                            }}>사고싶은 상품 링크를 입력해주세요!</div>
                            <input
                                name="link"
                                placeholder="링크"
                                style={{
                                    paddingBottom: 8,
                                    marginTop: 16,
                                    width: 440,
                                    outline: 0,
                                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    alignSelf: "center"
                                }}
                            />
                            <div style={{
                                width: 440,
                                height: 212,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 16,
                                backgroundColor: "#f2f3f8",
                            }} />
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: 20,
                                marginTop: 16,
                            }}>
                                <AiOutlineExclamationCircle size={16} color="#202426" />
                                <div style={{
                                    marginLeft: 8,
                                    fontSize: 14,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>이 상품이 맞는지 한번 더 확인해주세요.</div>
                            </div>
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontWeight: "bold",
                                fontSize: 18,
                                fontFamily: "NotoSansCJKkr",
                                color: "#202426",
                            }}>상품 카테고리를 알려주세요!</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 16,
                                marginLeft: 20,
                            }}>
                                <TypeButton
                                    text="전자기기"
                                    variable={type}
                                    number={1}
                                    onClick={onElectronic}
                                />
                                <TypeButton
                                    text="패션"
                                    variable={type}
                                    number={2}
                                    onClick={onFashion}
                                />
                                <TypeButton
                                    text="명품"
                                    variable={type}
                                    number={3}
                                    onClick={onLuxury}
                                />
                                <TypeButton
                                    text="기타"
                                    variable={type}
                                    number={4}
                                    onClick={onETC}
                                />
                            </div>
                            {type === 4 ? <input
                                placeholder="기타 항목을 입력해주세요. (필수)"
                                style={{
                                    paddingBottom: 8,
                                    marginTop: 16,
                                    width: 440,
                                    outline: 0,
                                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    alignSelf: "center",

                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    color: "#202426"
                                }}
                            /> : <></>}
                            <StandardButton
                                text="다음"
                                route="/wishdealurl"
                                marginTop={32}
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
                    height: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <Header content="위시딜" goBack={true} />
                    <div style={{
                        marginLeft: "5vw",
                        marginTop: "8vw",
                        fontWeight: "bold",
                        fontSize: 16,
                        fontFamily: "NotoSansCJKkr",
                        color: "#202426",
                    }}>사고싶은 상품 링크를 입력해주세요!</div>
                    <input
                        name="link"
                        placeholder="링크"
                        style={{
                            paddingBottom: "2vw",
                            marginTop: "4vw",
                            width: "90vw",
                            outline: 0,
                            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                            borderTop: 0,
                            borderLeft: 0,
                            borderRight: 0,
                            alignSelf: "center"
                        }}
                    />
                    <div style={{
                        width: "90vw",
                        height: "50vw",
                        marginTop: "4vw",
                        alignSelf: "center",
                        backgroundColor: "#f2f3f8",
                    }} />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "5vw",
                        marginTop: "4vw",
                    }}>
                        <AiOutlineExclamationCircle size={12} color="#202426" />
                        <div style={{
                            marginLeft: 8,
                            fontSize: 12,
                            color: "#202426",
                            fontFamily: "NotoSansCJKkr"
                        }}>이 상품이 맞는지 한번 더 확인해주세요.</div>
                    </div>
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16,
                        fontFamily: "NotoSansCJKkr",
                        color: "#202426",
                    }}>상품 카테고리를 알려주세요!</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        <MTypeButton
                            text="전자기기"
                            variable={type}
                            number={1}
                            onClick={onElectronic}
                        />
                        <MTypeButton
                            text="패션"
                            variable={type}
                            number={2}
                            onClick={onFashion}
                        />
                        <MTypeButton
                            text="명품"
                            variable={type}
                            number={3}
                            onClick={onLuxury}
                        />
                        <MTypeButton
                            text="기타"
                            variable={type}
                            number={4}
                            onClick={onETC}
                        />
                    </div>
                    {type === 4 ? <input
                        placeholder="기타 항목을 입력해주세요. (필수)"
                        style={{
                            paddingBottom: "2vw",
                            marginTop: "4vw",
                            width: "90vw",
                            outline: 0,
                            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                            borderTop: 0,
                            borderLeft: 0,
                            borderRight: 0,
                            alignSelf: "center",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            color: "#202426"
                        }}
                    /> : <></>}
                    <MStandardButton
                        text="다음"
                        route="/wishdealurl"
                        marginTop={"8vw"}
                    />
                </div>
            </Mobile>
        </>
    )
}