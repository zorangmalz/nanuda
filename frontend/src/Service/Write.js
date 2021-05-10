import React, { useEffect, useReducer, useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { BsFillStarFill } from "react-icons/bs"
import { useHistory } from "react-router";

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
    let history = useHistory()
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
    
    //이용후기 및 의견 작성
    const [inputs, setInputs] = useState({
        after: "",
        opinion: "",
    })
    const { after, opinion } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    async function putServiceReview () {
        var data = {
            service_score: number, service_content: after, service_opinion: opinion
        }
        console.log(data)
        const proxy = "https://cors-anywhere.herokuapp.com/"
        await fetch(proxy + "http://127.0.0.1:8000/servicereview/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json',
                "Authrization": localStorage.getItem("access_token"),
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.token) {
                    localStorage.setItem("wtw-token", response.token);
                    history.push("/servicereview")
                } else if (!response.token) {
                    alert("올바른 회원이 아닙니다")
                }
            }).catch(err => console.log(err))
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
                                <Header content="나눠본 사람들" goBack={true} />
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginTop: 32,
                                    marginLeft: 20,
                                    fontFamily: "NotoSansCJKkr"
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
                                    fontFamily: "NotoSansCJKkr"
                                }}>나누다 서비스 이용 후기를 작성해주세요!</div>
                                <textarea onChange={onChange} name="after" value={after} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
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
                                    fontFamily: "NotoSansCJKkr"
                                }} />
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginTop: 32,
                                    marginLeft: 20,
                                    fontFamily: "NotoSansCJKkr"
                                }}>더 나은 서비스를 위한 의견을 말씀해주세요.</div>
                                <textarea onChange={onChange} name="opinion" value={opinion} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
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
                                    fontFamily: "NotoSansCJKkr"
                                }} />
                            </div>
                            <div onClick={putServiceReview} style={{
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
                                fontFamily: "NotoSansCJKkr"
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
                        <MHeader content="나눠본 사람들" goBack={true} />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: "5%",
                            fontFamily: "NotoSansCJKkr"
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
                            fontFamily: "NotoSansCJKkr"
                        }}>나누다 서비스 이용 후기를 작성해주세요!</div>
                        <textarea onChange={onChange} name="after" value={after} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                            outline: 0,
                            border: 0,
                            width: "82%",
                            padding: "4%",
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: "5%",
                            marginTop: 16,
                            resize: "none",
                            fontFamily: "NotoSansCJKkr"
                        }} />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: "5%",
                            fontFamily: "NotoSansCJKkr"
                        }}>더 나은 서비스를 위한 의견을 말씀해주세요.</div>
                        <textarea onChange={onChange} name="opinion" value={opinion} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                            outline: 0,
                            border: 0,
                            width: "82%",
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: "5%",
                            marginTop: 16,
                            resize: "none",
                            fontFamily: "NotoSansCJKkr"
                        }} />
                    </div>
                    <div onClick={() => history.push("/servicereview")} style={{
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
                        fontFamily: "NotoSansCJKkr"
                    }}>작성 완료</div>
                </div>
            </Mobile>
        </>
    )
}