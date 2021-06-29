import React, { useEffect, useState, useReducer } from "react";
import { BsCheck } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Default, Mobile } from "../App";
import { Header, MHeader, StandardButton, MStandardButton, numberWithCommas } from "../Style";
import "../css/haulfree.css"
import { useHistory } from "react-router-dom";

function reducer(state, action) {
    switch (action.type) {
        case "SIMPLE":
            return 1;
        case "PRODUCT":
            return 2;
        case "ERROR":
            return 3;
        case "ETC":
            return 4;
        default:
            return 0;
    }
}

export default function ProfileRefund() {
    //환불 체크하는 요소
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)

    //환불 사유
    const [refund, dispatch] = useReducer(reducer, 0)
    const onSIMPLE = () => {
        dispatch({ type: "SIMPLE" })
        setInputs({ ...inputs, reason: "" })
    }
    const onPRODUCT = () => {
        dispatch({ type: "PRODUCT" })
        setInputs({ ...inputs, reason: "" })
    }
    const onERROR = () => {
        dispatch({ type: "ERROR" })
        setInputs({ ...inputs, reason: "" })
    }
    const onETC = () => {
        dispatch({ type: "ETC" })
        setInputs({ ...inputs, reason: "" })
    }
    const [inputs, setInputs] = useState({
        reason: ""
    })

    const { reason } = inputs

    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const history = useHistory()
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
                    backgroundColor: "#f2f3f8",
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
                        <Header content="반품,환불 신청" goBack={true} />
                        <Product date="2021.04.13" title="PRADA Model 23-9 limited… WHITE, 270mm" price={480000} mobile={false} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 16,
                            marginLeft: 20,
                        }}>어떤 문제가 있었나요?</div>
                        <RefundProblem text="단순 변심" name="reason" value={reason} onChange={onChange} onClick={onSIMPLE} state={refund} num={1} mobile={false} />
                        <RefundProblem text="제품 불량" name="reason" value={reason} onChange={onChange} onClick={onPRODUCT} state={refund} num={2} mobile={false} />
                        <RefundProblem text="오배송" name="reason" value={reason} onChange={onChange} onClick={onERROR} state={refund} num={3} mobile={false} />
                        <RefundProblem text="기타" name="reason" value={reason} onChange={onChange} onClick={onETC} state={refund} num={4} mobile={false} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 32,
                            marginLeft: 20,
                        }}>반품 신청하기전에 꼭 확인해주세요!</div>
                        <RefundCheck state={one} setState={setOne} text={<span>반품, 환불 신청이 완료된 후 카카오톡 고객 센터를 통해 <br /> 1 영업일 내로 안내사항이 전송될 예정입니다. </span> } mobile={false} />
                        <RefundCheck state={two} setState={setTwo} text="위시딜의 경우 구매한 쇼핑몰의 반품, 환불 약관을 따릅니다." mobile={false} />
                        <RefundCheck state={three} setState={setThree} text={<span>반품된 상품을 검수한 후  환불이 승인된 경우 <br /> 결제 금액이 환불됩니다. </span> } mobile={false} />
                        <StandardButton 
                            text="다음"
                            marginTop={32}
                            marginBottom={40}
                            state={one && two && three && reason.length > 0 ? true : false}
                            onClick={() => history.replace("/profile/payment/main")}
                        />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="반품,환불 신청" goBack={true} />
                    <Product date="2021.04.13" title="PRADA Model 23-9 limited… WHITE, 270mm" price={480000} mobile={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: 16,
                        marginLeft: 20,
                    }}>어떤 문제가 있었나요?</div>
                    <RefundProblem text="단순 변심" name="reason" value={reason} onChange={onChange} onClick={onSIMPLE} state={refund} num={1} mobile={true} />
                    <RefundProblem text="제품 불량" name="reason" value={reason} onChange={onChange} onClick={onPRODUCT} state={refund} num={2} mobile={true} />
                    <RefundProblem text="오배송" name="reason" value={reason} onChange={onChange} onClick={onERROR} state={refund} num={3} mobile={true} />
                    <RefundProblem text="기타" name="reason" value={reason} onChange={onChange} onClick={onETC} state={refund} num={4} mobile={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: 32,
                        marginLeft: 20,
                    }}>반품 신청하기전에 꼭 확인해주세요!</div>
                    <RefundCheck state={one} setState={setOne} text={<span>반품, 환불 신청이 완료된 후 카카오톡 고객 센터를 통해 <br /> 1 영업일 내로 안내사항이 전송될 예정입니다. </span>} mobile={true} />
                    <RefundCheck state={two} setState={setTwo} text="위시딜의 경우 구매한 쇼핑몰의 반품, 환불 약관을 따릅니다." mobile={true} />
                    <RefundCheck state={three} setState={setThree} text={<span>반품된 상품을 검수한 후  환불이 승인된 경우 <br /> 결제 금액이 환불됩니다. </span>} mobile={true} />
                    <MStandardButton
                        text="다음"
                        marginTop={"8vw"}
                        marginBottom={"10vw"}
                        state={one && two && three && reason.length > 0 ? true : false}
                        onClick={() => history.replace("/profile/payment/main")}
                    />
                </div>
            </Mobile>
        </>
    )
}


function Product({ img, date, title, price, mobile }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: mobile ? "8vw" : 32,
                paddingBottom: mobile ? "4vw" : 16,
                width: mobile ? "90vw" : 440,
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                marginLeft: mobile ? "5vw" : 20
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <img alt="상품" src={img} style={{
                            width: mobile ? 80 : 120,
                            height: mobile ? 80 : 120,
                            borderRadius: 6,
                            marginRight: mobile ? "4vw" : 16,
                            backgroundColor: "#000000",
                            color: "#ffffff"
                        }} />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            width: mobile ? 165 : 260,
                            height: mobile ? 80 : 120,
                        }}>
                            <div style={{
                                fontSize: mobile ? 14 : 16,
                                fontFamily: "NotoSansCJKkr",
                                color: "#010608",
                                opacity: 0.6,
                            }}>{date}</div>
                            <div style={{
                                fontSize: mobile ? 14 : 16,
                                color: "#010608",
                                fontFamily: "AvenirNext",
                                lineHeight: 1.5,
                            }}>{title}</div>
                            <div style={{
                                fontSize: mobile ? 16 : 18,
                                fontWeight: "bold",
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>{numberWithCommas(price)}원</div>
                        </div>
                    </div>
                    <MdKeyboardArrowRight size={mobile ? 24 : 32} color="rgba(1, 6, 8, 0.4)" />
                </div>
            </div>
        </>
    )
}

function RefundProblem({ text, value, onChange, name, state, num, onClick, mobile }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",

                width: mobile ? "90vw" : 440,
                marginTop: mobile ? "4vw" : 16,
                cursor: "pointer",
                marginLeft: mobile ? "5vw" : 20,
            }}>
                <BsCheck onClick={onClick} size={mobile ? 20 : 24} color={state === num ? "#26c1f0" : "rgba(32, 36, 38, 0.6)"} style={{ marginTop: mobile ? "0.5vw" : 2 }} />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    marginLeft: mobile ? "2vw" : 8,
                    opacity: 0.6,
                }}>{text}</div>
            </div>
            {state === num ?
                <textarea
                    className="input-module"
                    placeholder="상세 사유를 작성해주세요.(최대 100자)"
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={{
                        width: mobile ? "82vw" : 408,
                        height: mobile ? "20vw" : 80,
                        padding: mobile ? "4vw" : 16,
                        backgroundColor: "#f2f3f8",
                        borderRadius: 6,
                        marginTop: mobile ? "4vw" : 16,
                        marginLeft: mobile ? "5vw" : 20,
                        fontFamily: "NotoSansCJKkr",
                        fontSize: mobile ? 14 : 16,
                        color: "#010608",
                        outline: 0,
                        border: 0,
                    }}
                />
                :
                <></>
            }
        </>
    )
}

function RefundCheck({ state, setState, text, mobile }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",

            width: mobile ? "90vw" : 440,
            marginTop: mobile ? "4vw" : 16,
            cursor: "pointer",
            marginLeft: mobile ? "5vw" : 20,
        }}>
            <BsCheck onClick={() => setState(!state)} size={mobile ? 20 : 24} color={state ? "#26c1f0" : "rgba(32, 36, 38, 0.6)"} style={{ marginTop: mobile ? "1.5vw" : 6 }} />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 14 : 16,
                lineHeight: 1.88,
                textAlign: "left",
                color: "#010608",
                marginLeft: mobile ? "2vw" : 8,
            }}>{text}</div>
        </div>
    )
}