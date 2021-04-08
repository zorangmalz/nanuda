import React, { useReducer } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BsFillStarFill } from "react-icons/bs"

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

export default function Write() {
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
                            justifyContent: "space-between",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",

                                width: 480,
                            }}>
                                <Header content="나눠본 사람들" />
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginTop: 32,
                                    marginLeft: 20,
                                }}>나누다 서비스 만족도는 어느정도인가요?</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginLeft: 20,
                                    marginTop: 18,
                                }}>
                                    <BsFillStarFill onClick={onOne} color={number > 0 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                    <BsFillStarFill onClick={onTwo} color={number > 1 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                    <BsFillStarFill onClick={onThree} color={number > 2 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                    <BsFillStarFill onClick={onFour} color={number > 3 ? "#fad94f" : "#dfdfdf"} size={42} style={{ marginRight: 5, cursor: "pointer" }} />
                                    <BsFillStarFill onClick={onFive} color={number > 4 ? "#fad94f" : "#dfdfdf"} size={42} style={{ cursor: "pointer" }} />
                                </div>
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginTop: 36,
                                    marginLeft: 20,
                                }}>나누다 서비스 이용 후기를 작성해주세요!</div>
                                <textarea cols="10" rows="5" value="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                                    outline: 0,
                                    border: 0,
                                    width: 408,
                                    padding: 16,
                                    borderRadius: 6,
                                    backgroundColor: "#f2f3f8",
                                    minHeight: 180,
                                    marginLeft: 20,
                                    marginTop: 16,
                                    resize: "none"
                                }} />
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginTop: 32,
                                    marginLeft: 20,
                                }}>더 나은 서비스를 위한 의견을 말씀해주세요.</div>
                                <textarea cols="10" rows="5" value="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                                    outline: 0,
                                    border: 0,
                                    width: 408,
                                    padding: 16,
                                    borderRadius: 6,
                                    backgroundColor: "#f2f3f8",
                                    minHeight: 180,
                                    marginLeft: 20,
                                    marginTop: 16,
                                    resize: "none"
                                }} />
                            </div>
                            <div style={{
                                width: 440,
                                marginLeft: 20,
                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#2dd8d3",
                                borderRadius: 6,
                                cursor: "pointer",

                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "#ffffff",
                                marginTop: 32,
                                marginBottom: 40,
                            }}>작성 완료</div>
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        width: "100%",
                    }}>
                        <Header content="나눠본 사람들" />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: "5%",
                        }}>나누다 서비스 만족도는 어느정도인가요?</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: "5%",
                            marginTop: 18,
                        }}>
                            <BsFillStarFill onClick={onOne} color={number > 0 ? "#fad94f" : "#dfdfdf"} size={32} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onTwo} color={number > 1 ? "#fad94f" : "#dfdfdf"} size={32} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onThree} color={number > 2 ? "#fad94f" : "#dfdfdf"} size={32} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onFour} color={number > 3 ? "#fad94f" : "#dfdfdf"} size={32} style={{ marginRight: 5, cursor: "pointer" }} />
                            <BsFillStarFill onClick={onFive} color={number > 4 ? "#fad94f" : "#dfdfdf"} size={32} style={{ cursor: "pointer" }} />
                        </div>
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 36,
                            marginLeft: "5%",
                        }}>나누다 서비스 이용 후기를 작성해주세요!</div>
                        <textarea cols="10" rows="5" value="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                            outline: 0,
                            border: 0,
                            width: "82%",
                            padding: "4%",
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: "5%",
                            marginTop: 16,
                            resize: "none"
                        }} />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: "5%",
                        }}>더 나은 서비스를 위한 의견을 말씀해주세요.</div>
                        <textarea cols="10" rows="5" value="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                            outline: 0,
                            border: 0,
                            width: "82%",
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: "5%",
                            marginTop: 16,
                            resize: "none"
                        }} />
                    </div>
                    <div style={{
                        width: "90%",
                        marginLeft: "5%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        backgroundColor: "#2dd8d3",
                        borderRadius: 6,
                        cursor: "pointer",

                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#ffffff",
                        marginTop: 24,
                        marginBottom: 20,
                    }}>작성 완료</div>
                </div>
            </Mobile>
        </>
    )
}