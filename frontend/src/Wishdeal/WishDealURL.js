import React, { useReducer } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";

function reducerA(state, action) {
    switch (action.type) {
        case 'YES':
            return 2;
        case 'NO':
            return 3;
        default:
            return state;
    }
}


function reducerB(state, action) {
    switch (action.type) {
        case 'X':
            return 2;
        case 'TWO':
            return 3;
        case 'FIVE':
            return 4;
        case 'EXT':
            return 5;
        default:
            return state;
    }
}

export default function WishDealURL() {
    const [number, dispatch] = useReducer(reducerA, 0);
    const onYES = () => {
        dispatch({ type: 'YES' });
    };
    const onNO = () => {
        dispatch({ type: 'NO' });
    };

    const [numberB, dispatchB] = useReducer(reducerB, 0);
    const onX = () => {
        dispatchB({ type: 'X' });
    };
    const onTWO = () => {
        dispatchB({ type: 'TWO' });
    };
    const onFIVE = () => {
        dispatchB({ type: 'FIVE' });
    };
    const onEXT = () => {
        dispatchB({ type: 'EXT' });
    };

    let history = useHistory();


    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    minHeight:"100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <WebIntro />
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
                        minHeight:"100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="상품 정보 작성" goBack={true} />
                        <div style={{
                            width:480,
                            height:212,
                            backgroundColor:"#cbd5ff"
                        }}>
                            </div>

                        
                        <div style={{
                            marginTop:16,
                            marginLeft:20,
                            fontsize:18,
                            fontWeight:"normal",
                            fontFamily:"AvenirNext",
                            opacity:0.8}}>PRADA Model 23-9 limited edition berry expensive</div>
                        <div style={{
                            marginTop:16,
                            marginLeft:20,
                            fontSize:24,
                            fontWeight:"bold",
                            fontFamily:"NotoSansCJKkr"
                        }}>480,000 원</div>
                        <div style={{
                            marginTop:8,
                            marginLeft:20,
                            fontSize:14,
                            opacity:0.8,
                            textDecorationLine: "underline"
                        }}>가격이 다른가요?</div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>색상을 입력해주세요.</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                <input style={{
                                    outline:0,
                                    width:"90%",
                                    height:26,
                                    border:"0px solid #ffffff",
                                    }}
                                name="link"
                                placeholder="WHITE, 흰색 등등"
                                >
                                </input>
                                <div style={{width:438,marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>사이즈를 입력해주세요.</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                <input style={{
                                    outline:0,
                                    width:"90%",
                                    height:26,
                                    border:"0px solid #ffffff"
                                    }}
                                name="link"
                                placeholder="270, 6.5 등등"
                                >
                                </input>
                                <div style={{width:438,marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>기타 옵션을 입력해주세요.</div></div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                <input style={{
                                    outline:0,
                                    width:"90%",
                                    height:26,
                                    border:"0px solid #ffffff"
                                    }}
                                name="link"
                                placeholder="3cm 깔창 추가해주세요."
                                >
                                </input>
                                <div style={{width:438,marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>옵션 선택에 따른 추가 비용이 있나요?</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 16
                            }}>
                                <div onClick={onYES} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: number === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: number === 2 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: number === 2 ? "bold" : "normal",
                                    color: number === 2 ? "#ffffff" : "#051a1a",
                                    opacity: number === 2 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>있음</div>
                                <div onClick={onNO} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: number === 3 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: number === 3 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: number === 3 ? "bold" : "normal",
                                    color: number === 3 ? "#ffffff" : "#051a1a",
                                    opacity: number === 3 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>없음</div>
                               
                            </div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                 <div style={{
                                     display:"flex",
                                     flexDirection:"row"
                                 }}>
                                <input style={{
                                    outline:0,
                                    width:210,
                                    height:26,
                                    border:"0px solid #ffffff",
                                    
                                    }}
                                name="link"
                                placeholder="추가 비용을 입력해주세요."
                                >
                                </input>
                                <div style={{
                                    fontWeight:"bold",
                                    fontsize:16,
                                    marginLeft:48
                                }}>원</div>
                                </div>                    
                                <div style={{width:278,marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>배송비가 있나요?</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 16
                            }}>
                                <div onClick={onX} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 2 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 2 ? "bold" : "normal",
                                    color: numberB === 2 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 2 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>없음</div>
                                <div onClick={onTWO} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 3 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 3 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 3 ? "bold" : "normal",
                                    color: numberB === 3 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 3 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>2,500</div>
                               <div onClick={onFIVE} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 4 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 4 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 4 ? "bold" : "normal",
                                    color: numberB === 4 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 4 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>5,000</div>
                                <div onClick={onEXT} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 5 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 5 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 5 ? "bold" : "normal",
                                    color: numberB === 5 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 5 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>기타</div>
                            </div>
                            <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                 <div style={{
                                     display:"flex",
                                     flexDirection:"row"
                                 }}>
                                <input style={{
                                    outline:0,
                                    width:210,
                                    height:26,
                                    border:"0px solid #ffffff",
                                    
                                    }}
                                name="link"
                                placeholder="배송비용을 입력해주세요."
                                >
                                </input>
                                <div style={{
                                    fontWeight:"bold",
                                    fontsize:16,
                                    marginLeft:48
                                }}>원</div>
                                </div>                    
                                <div style={{width:278,marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div onClick={() => history.push("/ordersheet")} style={{
                            borderRadius: 8,
                            width: 440,
                            height: 56,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 32,
                            backgroundColor: "#2dd9d3",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            marginBottom:150,
                            cursor: "pointer",
                        }}><div style={{
                            color: "#ffffff",
                            fontSize: 18,
                           fontWeight: "bold",
                        }}>다음</div></div>
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
                    minHeight:"100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        
                        justifyContent: "flex-start",

                        width: "100%",
                        minHeight:"100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <Header content="상품 정보 작성" goBack={true} />
                        <div style={{
                            width:"100%",
                            height:212,
                            backgroundColor:"#cbd5ff"
                        }}>
                            </div>

                        
                        <div style={{
                            marginTop:16,
                            marginLeft:20,
                            fontsize:18,
                            fontWeight:"normal",
                            fontFamily:"AvenirNext",
                            opacity:0.8}}>PRADA Model 23-9 limited edition berry expensive</div>
                        <div style={{
                            marginTop:16,
                            marginLeft:20,
                            fontSize:24,
                            fontWeight:"bold",
                            fontFamily:"NotoSansCJKkr"
                        }}>480,000 원</div>
                        <div style={{
                            marginTop:8,
                            marginLeft:20,
                            fontSize:14,
                            opacity:0.8,
                            textDecorationLine: "underline"
                        }}>가격이 다른가요?</div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>색상을 입력해주세요.</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                <input style={{
                                    outline:0,
                                    width:"90%",
                                    height:26,
                                    border:"0px solid #ffffff",
                                    }}
                                name="link"
                                placeholder="WHITE, 흰색 등등"
                                >
                                </input>
                                <div style={{width:"90%",marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>사이즈를 입력해주세요.</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                <input style={{
                                    outline:0,
                                    width:"90%",
                                    height:26,
                                    border:"0px solid #ffffff"
                                    }}
                                name="link"
                                placeholder="270, 6.5 등등"
                                >
                                </input>
                                <div style={{width:"90%",marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>기타 옵션을 입력해주세요.</div></div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                <input style={{
                                    outline:0,
                                    width:"90%",
                                    height:26,
                                    border:"0px solid #ffffff"
                                    }}
                                name="link"
                                placeholder="3cm 깔창 추가해주세요."
                                >
                                </input>
                                <div style={{width:"90%",marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>옵션 선택에 따른 추가 비용이 있나요?</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 16
                            }}>
                                <div onClick={onYES} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: number === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: number === 2 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: number === 2 ? "bold" : "normal",
                                    color: number === 2 ? "#ffffff" : "#051a1a",
                                    opacity: number === 2 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>있음</div>
                                <div onClick={onNO} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: number === 3 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: number === 3 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: number === 3 ? "bold" : "normal",
                                    color: number === 3 ? "#ffffff" : "#051a1a",
                                    opacity: number === 3 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>없음</div>
                               
                            </div>
                        <div>
                            <div
                             style={{
                                 marginTop:16,
                                marginLeft:20,
                                marginRight:20
                                                 }}>
                                 <div style={{
                                     display:"flex",
                                     flexDirection:"row"
                                 }}>
                                <input style={{
                                    outline:0,
                                    width:210,
                                    height:26,
                                    border:"0px solid #ffffff",
                                    
                                    }}
                                name="link"
                                placeholder="추가 비용을 입력해주세요."
                                >
                                </input>
                                <div style={{
                                    fontWeight:"bold",
                                    fontsize:16,
                                    marginLeft:48
                                }}>원</div>
                                </div>                    
                                <div style={{width:278,marginTop:7,height:0,border:"solid 1px #f2f3f8"}}></div>
                            </div>
                            
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            marginLeft:20,
                            marginTop:32,
                            fontWeight:"bold"
                        }}>
                        <div>배송비가 있나요?</div><div style={{color:"#f72b2b"}}>(필수)</div></div>
                        <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 16
                            }}>
                                <div onClick={onX} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 2 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 2 ? "bold" : "normal",
                                    color: numberB === 2 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 2 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>없음</div>
                                <div onClick={onTWO} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 3 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 3 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 3 ? "bold" : "normal",
                                    color: numberB === 3 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 3 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>2,500</div>
                               <div onClick={onFIVE} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 4 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 4 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 4 ? "bold" : "normal",
                                    color: numberB === 4 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 4 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>5,000</div>
                                <div onClick={onEXT} style={{
                                    width: 95,
                                    marginRight: 20,
                                    borderRadius: 6,
                                    border: numberB === 5 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                    backgroundColor: numberB === 5 ? "#051a1a" : "#ffffff",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor:"pointer",
                                    fontSize: 16,
                                    fontWeight: numberB === 5 ? "bold" : "normal",
                                    color: numberB === 5 ? "#ffffff" : "#051a1a",
                                    opacity: numberB === 5 ? 1 : 0.8,
                                    textAlign: "center",
                                }}>기타</div>
                        </div>
                        <div>
                            <div
                                style={{
                                    marginTop: 16,
                                    marginLeft: 20,
                                    marginRight: 20
                                }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <input style={{
                                        outline: 0,
                                        width: 210,
                                        height: 26,
                                        border: "0px solid #ffffff",

                                    }}
                                        name="link"
                                        placeholder="배송비용을 입력해주세요."
                                    >
                                    </input>
                                    <div style={{
                                        fontWeight: "bold",
                                        fontsize: 16,
                                        marginLeft: 48
                                    }}>원</div>
                                </div>
                                <div style={{ width: 278, marginTop: 8, height: 0, border: "solid 1px #f2f3f8" }}></div>
                            </div>
                        </div>
                        <div onClick={() => history.push("/ordersheet")} style={{
                            borderRadius: 8,
                            width: "90%",
                            paddingTop: "4%",
                            paddingBottom: "4%",
                            marginLeft: "5%",
                            marginRight: "5%",
                            marginTop: 32,
                            backgroundColor: "#2dd9d3",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#ffffff",
                            marginBottom: 120
                        }}><div style={{
                            color: "#ffffff",
                            fontSize: 18,
                           fontWeight: "bold",
                        }}>다음</div></div>
                    </div>
                </div>
                
            </Mobile>
        </>
    )
}