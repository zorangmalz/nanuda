import React,{useReducer} from "react";
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
                            <Header content="나눠산 사람들" />
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        width: 32,
                                        height: 32,
                                        backgroundColor: "#f2f3f8",
                                        marginTop: 32,
                                        marginLeft: 20,
                                        borderRadius: 16
                                    }}>
                                    </div>
                                    <div style={{
                                        marginTop: 38,
                                        marginLeft: 8,
                                        fontFamily: "AvenirNext",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>나누다홀릭</div>
                                </div>
                                <div style={{
                                    width: 32,
                                    height: 32,
                                    backgroundColor: "#f2f3f8",
                                    marginTop: 32,
                                    marginRight: 20,
                                    borderRadius: 16
                                }}>
                                </div>
                            </div>

                            <div style={{ width: 480, height: 500, backgroundColor: "#2dd9d3", marginTop: 8 }}></div>

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
                                    display:"flex",
                                    flexDirection:"column"
                                }}>
                                    <div style={{ fontSize: 14, fontFamily: "AvenirNext", marginBottom: 8 }}>삼베옷 컬렉션, White, 95</div>
                                    <div style={{ fontSize: 14, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>210,000 원</div>
                                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>70,000 원에 획득 완료!</div>
                                    <div style={{ fontSize: 14, color:"#26c1f0",fontWeight:"bold", }}>10 명이 따라 샀어요!</div>
                                </div>
                            </div>
                            <div style={{
                                marginTop:16,
                                width:480,
                                border:"0.5px solid #051a1a",
                                opacity:0.2
                            }}></div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
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
                                        width: 32,
                                        height: 32,
                                        backgroundColor: "#f2f3f8",
                                        marginTop: 32,
                                        marginRight: 20,
                                        borderRadius: 16
                                    }}>
                                    </div>
                            </div>
                            <div style={{
                                marginTop:16,
                                marginLeft:20,
                                width:440,
                                fontSize:14,
                            }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                            <div style={{
                                marginLeft:20,
                                marginTop:4,
                                fontSize:12,
                                opacity:0.8
                            }}> 2021.03.30 </div>
                            <div style={{
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
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>위시딜 신청하기</div></div>
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

                            width: 480,
                            
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="나눠산 사람들" />
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <div style={{
                                        width: 32,
                                        height: 32,
                                        backgroundColor: "#f2f3f8",
                                        marginTop: 32,
                                        marginLeft: 20,
                                        borderRadius: 16
                                    }}>
                                    </div>
                                    <div style={{
                                        marginTop: 38,
                                        marginLeft: 8,
                                        fontFamily: "AvenirNext",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>나누다홀릭</div>
                                </div>
                                <div style={{
                                    width: 32,
                                    height: 32,
                                    backgroundColor: "#f2f3f8",
                                    marginTop: 32,
                                    marginRight: 20,
                                    borderRadius: 16
                                }}>
                                </div>
                            </div>

                            <div style={{ width: "100%", height: 500, backgroundColor: "#2dd9d3", marginTop: 8 }}></div>

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
                                    display:"flex",
                                    flexDirection:"column"
                                }}>
                                    <div style={{ fontSize: 14, fontFamily: "AvenirNext", marginBottom: 8 }}>삼베옷 컬렉션, White, 95</div>
                                    <div style={{ fontSize: 14, opacity: 0.6, textDecoration: "line-through", marginBottom: 8 }}>210,000 원</div>
                                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#051a1a", marginBottom: 8 }}>70,000 원에 획득 완료!</div>
                                    <div style={{ fontSize: 14, color:"#26c1f0",fontWeight:"bold", }}>10 명이 따라 샀어요!</div>
                                </div>
                            </div>
                            <div style={{
                                marginTop:16,
                                width:"100%",
                                border:"0.5px solid #051a1a",
                                opacity:0.2
                            }}></div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
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
                                        width: 32,
                                        height: 32,
                                        backgroundColor: "#f2f3f8",
                                        marginTop: 32,
                                        marginRight: 20,
                                        borderRadius: 16
                                    }}>
                                    </div>
                            </div>
                            <div style={{
                                marginTop:16,
                                marginLeft:20,
                                width:"90%",
                                fontSize:14,
                            }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</div>
                            <div style={{
                                marginLeft:20,
                                marginTop:4,
                                fontSize:12,
                                opacity:0.8
                            }}> 2021.03.30 </div>
                            <div style={{
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
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>위시딜 신청하기</div></div>
                        </div>
                    </div>
                
            </Mobile>
        </>
    )
}