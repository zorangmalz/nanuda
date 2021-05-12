import React, { useReducer, useState, useEffect } from "react";
import { useHistory ,useLocation} from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

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

const Button = ({ onClick, state, number, content }) => {
    return (
        <div onClick={onClick} style={{
            width: 95,
            marginRight: 20,
            borderRadius: 6,
            border: state === number ? "1px solid #051a1a" : "1px solid #dfdfdf",
            backgroundColor: state === number ? "#051a1a" : "#ffffff",
            paddingTop: 10,
            paddingBottom: 10,
            cursor: "pointer",
            fontSize: 16,
            fontWeight: state === number ? "bold" : "normal",
            color: state === number ? "#ffffff" : "#051a1a",
            opacity: state === number ? 1 : 0.8,
            textAlign: "center",
        }}>{content}</div>
    )
}

const MButton = ({ onClick, state, number, content }) => {
    return (
        <div onClick={onClick} style={{
            width: 90,
            marginRight: "5vw",
            borderRadius: 6,
            border: state === number ? "1px solid #051a1a" : "1px solid #dfdfdf",
            backgroundColor: state === number ? "#051a1a" : "#ffffff",
            paddingTop: "2vw",
            paddingBottom: "2vw",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: state === number ? "bold" : "normal",
            color: state === number ? "#ffffff" : "#051a1a",
            opacity: state === number ? 1 : 0.8,
            textAlign: "center",
        }}>{content}</div>
    )
}

export default function WishDealURL() {
    const location=useLocation()
    const myparam=location.state.param
    const code=location.state.code
    const des=location.state.des
    const [stats,setStats]=useState("")
    useEffect(()=>{
        console.log(myparam,code,des)
        setStats(code)

    },[])
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
                    minHeight: "100vh",
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
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="상품 정보 작성" goBack={true} />
                            {stats===1?
                            <>
                            <ElectronicForm 
                            name={myparam.ogTitle}
                            image={myparam.ogImage.url}
                            ></ElectronicForm>
                            </>
                            :
                            <></>
                            }
                            {stats===2?
                            <>
                            <FashionForm 
                            name={myparam.ogTitle}
                            image={myparam.ogImage.url}
                            ></FashionForm>
                            </>
                            :
                            <></>
                            }
                            {stats===3?
                            <>
                            <FoodForm 
                            name={myparam.ogTitle}
                            image={myparam.ogImage.url}
                            ></FoodForm>
                            </>
                            :
                            <></>
                            }
                            {stats===4?
                            <>
                             <ETCForm
                                name={myparam.ogTitle}
                                image={myparam.ogImage.url}
                            /></>
                            :
                            <></>
                            }
                           
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",

                                marginTop: 32,
                                marginLeft: 20,
                            }}>옵션 선택에 따른 추가 비용이 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 16
                            }}>
                                <Button 
                                    onClick={onYES}
                                    state={number}
                                    number={2}
                                    content="있음"
                                />
                                <Button 
                                    onClick={onNO}
                                    state={number}
                                    number={3}
                                    content="없음"
                                />
                            </div>
                            {number === 2 ?
                                <>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",

                                        marginTop: 16,
                                        marginLeft: 20,
                                        paddingBottom: 8,
                                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                        width: 240,
                                    }}>
                                        <input
                                            placeholder="추가 비용을 입력해주세요."
                                            style={{
                                                width: 210,
                                                outline: 0,
                                                border: 0,

                                                fontFamily: "NotoSansCJKkr",
                                                fontSize: 16,
                                                color: "#202426"
                                            }}
                                        />
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            color: "#202426"
                                        }}>원</div>
                                    </div>
                                </>
                                :
                                <></>
                            }
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",

                                marginTop: 32,
                                marginLeft: 20,
                            }}>배송비가 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                marginLeft: 20,
                                marginTop: 16
                            }}>
                                <Button 
                                    onClick={onX}
                                    state={numberB}
                                    number={2}
                                    content="없음"
                                />
                                <Button 
                                    onClick={onTWO}
                                    state={numberB}
                                    number={3}
                                    content="2,500"
                                />
                                <Button 
                                    onClick={onFIVE}
                                    state={numberB}
                                    number={4}
                                    content="5,000"
                                />
                                <Button 
                                    onClick={onEXT}
                                    state={numberB}
                                    number={5}
                                    content="기타"
                                />
                            </div>
                            {numberB === 5 ?
                                <>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",

                                        marginTop: 16,
                                        marginLeft: 20,
                                        paddingBottom: 8,
                                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                        width: 240,
                                    }}>
                                        <input
                                            placeholder="배송비용을 입력해주세요"
                                            style={{
                                                width: 220,
                                                outline: 0,
                                                border: 0,

                                                fontFamily: "NotoSansCJKkr",
                                                fontSize: 16,
                                                color: "#202426"
                                            }}
                                        />
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            color: "#202426"
                                        }}>원</div>
                                    </div>
                                </>
                                :
                                <></>
                            }
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                width: 440,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.4,
                                color: "#202426",
                            }}>
                                <div>* 가격, 입력 정보가 상이한 경우 혹은 품절인 경우 주문이 취소될 수 있습니다.</div>
                                <div style={{ marginTop: 4 }}>* 입력한 정보 외에 추가 금액이 붙는 경우 2차 결제일에 청구됩니다.</div>
                                <div style={{ marginTop: 4 }}>* 만약 추가금액으로 인해 한도를 넘어가는 경우 주문이 취소됩니다.</div>
                                <div style={{ marginTop: 4 }}>* 교환 환불은 불가능합니다.</div>
                            </div>
                            <div onClick={() => history.push("/ordersheet")} style={{
                                borderRadius: 8,
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                alignSelf: "center",
                                marginTop: 32,
                                backgroundColor: "#2dd9d3",
                                
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center",
                                marginBottom: 150,
                                cursor: "pointer",
                            }}>다음</div>
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
                    minHeight: "100vh",
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
                        <MHeader content="상품 정보 작성" goBack={true} />
                        {stats===1?
                            <>
                            <MElectronicForm 
                            name={myparam.ogTitle}
                            image={myparam.ogImage.url}
                            ></MElectronicForm>
                            </>
                            :
                            <></>
                            }
                            {stats===2?
                            <>
                            <MFashionForm 
                            name={myparam.ogTitle}
                            image={myparam.ogImage.url}
                            ></MFashionForm>
                            </>
                            :
                            <></>
                            }
                            {stats===3?
                            <>
                            <MFoodForm 
                            name={myparam.ogTitle}
                            image={myparam.ogImage.url}
                            ></MFoodForm>
                            </>
                            :
                            <></>
                            }
                            {stats===4?
                            <>
                             <METCForm
                                name={myparam.ogTitle}
                                image={myparam.ogImage.url}
                            /></>
                            :
                            <></>
                            }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>옵션 선택에 따른 추가 비용이 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <MButton
                                onClick={onYES}
                                state={number}
                                number={2}
                                content="있음"
                            />
                            <MButton
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="없음"
                            />
                        </div>
                        {number === 2 ?
                            <>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    marginTop: "4vw",
                                    marginLeft: "5vw",
                                    paddingBottom: "2vw",
                                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                    width: "50vw",
                                }}>
                                    <input
                                        placeholder="추가 비용을 입력해주세요."
                                        style={{
                                            width: "45vw",
                                            outline: 0,
                                            border: 0,

                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 14,
                                            color: "#202426"
                                        }}
                                    />
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        color: "#202426"
                                    }}>원</div>
                                </div>
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>배송비가 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <MButton
                                onClick={onX}
                                state={numberB}
                                number={2}
                                content="없음"
                            />
                            <MButton
                                onClick={onTWO}
                                state={numberB}
                                number={3}
                                content="2,500"
                            />
                            <MButton
                                onClick={onFIVE}
                                state={numberB}
                                number={4}
                                content="5,000"
                            />
                            <MButton
                                onClick={onEXT}
                                state={numberB}
                                number={5}
                                content="기타"
                            />
                        </div>
                        {numberB === 5 ?
                            <>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    marginTop: "4vw",
                                    marginLeft: "5vw",
                                    paddingBottom: "2vw",
                                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                                    width: "50vw",
                                }}>
                                    <input
                                        placeholder="배송비용을 입력해주세요"
                                        style={{
                                            width: "45vw",
                                            outline: 0,
                                            border: 0,

                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 14,
                                            color: "#202426"
                                        }}
                                    />
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        color: "#202426"
                                    }}>원</div>
                                </div>
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            marginTop: "8vw",
                            marginLeft: "5vw",
                            width: "90vw",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            opacity: 0.4,
                            color: "#202426",
                        }}>
                            <div>* 가격, 입력 정보가 상이한 경우 혹은 품절인 경우 주문이 취소될 수 있습니다.</div>
                            <div style={{ marginTop: 4 }}>* 입력한 정보 외에 추가 금액이 붙는 경우 2차 결제일에 청구됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 만약 추가금액으로 인해 한도를 넘어가는 경우 주문이 취소됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 교환 환불은 불가능합니다.</div>
                        </div>
                        <div onClick={() => history.push("/ordersheet")} style={{
                            borderRadius: 8,
                            width: "90vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            alignSelf: "center",
                            marginTop: "8vw",
                            backgroundColor: "#2dd9d3",

                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 80,
                            cursor: "pointer",
                        }}>다음</div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}

function FashionForm({ image, brand, name, price, color, size, etc }) {
    
    return (
        <>
            <div style={{
                width: 480,
                height: 212,
                
            }}><img style={{
                                            width: 480,
                                            height: 212,
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 21,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,
                        fontsize: 18,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: 16,
                        marginLeft: 20,
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: 16,
                        marginLeft: 20,
                        paddingBottom: 8,
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: 210,
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: 190,
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
                    
            
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>색상을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="WHITE, 흰색 등등"
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>사이즈를 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="270, 6.5 등등"
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="3cm 깔창 추가해주세요."
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
        </>
    )
}

function MFashionForm({ image, brand, name, price, color, size, etc }) {
    
    return (
        <>
            <div style={{
                width: "100vw",
                height: "45vw",
                
            }}><img style={{
                                            width: "100vw",
                                            height: "45vw",
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",
                        fontsize: 16,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                        paddingBottom: "2vw",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: "45vw",
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: "40vw",
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
                
                
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>색상을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="WHITE, 흰색 등등"
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: "2vw",
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>사이즈를 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="270, 6.5 등등"
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="3cm 깔창 추가해주세요."
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
        </>
    )
}

function ElectronicForm({ image, brand, name, price, count, etc }) {
    
    return (
        <>
            <div style={{
                width: 480,
                height: 212,
                
            }}><img style={{
                                            width: 480,
                                            height: 212,
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 21,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,
                        fontsize: 18,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: 16,
                        marginLeft: 20,
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: 16,
                        marginLeft: 20,
                        paddingBottom: 8,
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: 210,
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: 190,
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>색상을 입력해주세요.</div>
            <input
                placeholder="WHITE, 흰색 등등"
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="램 32 기가, 마우스 추가해주세요 등"
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
        </>
    )
}

function MElectronicForm({ image, brand, name, price, count, etc }) {
    
    return (
        <>
            <div style={{
                width: "100vw",
                height: "45vw",
                
            }}><img style={{
                                            width: "100vw",
                                            height: "45vw",
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",
                        fontsize: 16,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                        paddingBottom: "2vw",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: "45vw",
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: "40vw",
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
                
                
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>색상을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="WHITE, 흰색 등등"
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="램 32 기가, 마우스 추가해주세요 등"
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
        </>
    )
}

function FoodForm({ image, brand, name, price, count, etc }) {
    
    return (
        <>
            <div style={{
                width: 480,
                height: 212,
                
            }}><img style={{
                                            width: 480,
                                            height: 212,
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 21,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,
                        fontsize: 18,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: 16,
                        marginLeft: 20,
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: 16,
                        marginLeft: 20,
                        paddingBottom: 8,
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: 210,
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: 190,
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
                
                
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>개수를 입력해주세요.</div>
            <input
                placeholder="숫자 입력"
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="하나는 딸기맛, 하나는 포도맛으로 해주세요."
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
        </>
    )
}

function MFoodForm({ image, brand, name, price, count, etc }) {
    
    return (
        <>
            <div style={{
                width: "100vw",
                height: "45vw",
                
            }}><img style={{
                                            width: "100vw",
                                            height: "45vw",
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",
                        fontsize: 16,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                        paddingBottom: "2vw",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: "45vw",
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: "40vw",
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
                
                
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>개수를 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="숫자 입력"
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="하나는 딸기맛, 하나는 포도맛으로 해주세요."
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
        </>
    )
}

function ETCForm({ image, brand, name, price, etc }) {
    
    return (
        <>
            <div style={{
                width: 480,
                height: 212,
                
            }}><img style={{
                                            width: 480,
                                            height: 212,
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 21,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: 16,
                        marginLeft: 20,
                        fontsize: 18,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: 16,
                        marginLeft: 20,
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: 16,
                        marginLeft: 20,
                        paddingBottom: 8,
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: 210,
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: 190,
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
               
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",

                marginTop: 32,
                marginLeft: 20,
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="하나는 딸기맛, 하나는 포도맛으로 해주세요."
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}
            />
        </>
    )
}

function METCForm({ image, brand, name, price, etc }) {
    
    return (
        <>
            <div style={{
                width: "100vw",
                height: "45vw",
                
            }}><img style={{
                                            width: "100vw",
                                            height: "45vw",
                                            objectFit: "cover"
                                        }} src={image}></img></div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",

                        fontFamily: "AvenirNext",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}>{brand}</div>
                    <div style={{
                        marginTop: "4vw",
                        marginLeft: "5vw",
                        fontsize: 16,
                        fontWeight: "normal",
                        fontFamily: "AvenirNext",
                        opacity: 0.8
                    }}>{name}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                        paddingBottom: "2vw",
                        borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                        width: "45vw",
                    }}>
                        <input
                            placeholder="상품 가격"
                            style={{
                                width: "40vw",
                                outline: 0,
                                border: 0,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#202426"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#202426"
                        }}>원</div>
                    </div>
                
                
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="하나는 딸기맛, 하나는 포도맛으로 해주세요."
                style={{
                    marginTop: "4vw",
                    width: "90vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}
            />
        </>
    )
}