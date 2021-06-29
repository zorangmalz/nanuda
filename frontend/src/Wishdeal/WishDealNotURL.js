import React, { useReducer, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { Default, Mobile } from "../App";
import { Header, MHeader, StandardButton, MStandardButton } from "../Style";
import { BiPlusCircle } from "react-icons/bi"

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

export default function WishDealNotURL() {
    const location = useLocation()
    const getUrl = location.state.url

    const [highPrice, setHighPrice] = useState(true)

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

    const [Einputs, setEInputs] = useState({
        Eprice: "",
        Eetc: "",
    })

    const [next, setNext] = useState(false)
    const [inp, setInp] = useState({
        option: "",
        ship: "",
    })
    const { option, ship } = inp
    const onChange = (e) => {
        const { value, name } = e.target
        setInp({
            ...inp,
            [name]: value
        })
    }

    useEffect(() => {
        if (Number(Einputs.Eprice) < 30000) {
            if (Einputs.Eprice === "") {
                setHighPrice(true)
            } else {
                setHighPrice(false)
            }
        } else {
            setHighPrice(true)
        }
    }, [Einputs.Eprice])

    useEffect(() => {
        if (Einputs.Eprice != "") {
            if (number && numberB > 1) {
                if (number === 2 && numberB === 5) {
                    if (option && ship != "") {
                        if (Einputs.Eprice >= 30000) {
                            setNext(true)
                        } else {
                            setNext(false)
                        }

                    } else {
                        setNext(false)
                    }
                }
                if (number === 2 && numberB < 5) {
                    if (option != "") {
                        if (Einputs.Eprice >= 30000) {
                            setNext(true)
                        } else {
                            setNext(false)
                        }

                    } else {
                        setNext(false)
                    }
                }
                if (number === 3 && numberB === 5) {
                    if (ship != "") {
                        if (Einputs.Eprice >= 30000) {
                            setNext(true)
                        } else {
                            setNext(false)
                        }

                    } else {
                        setNext(false)
                    }
                }
                if (number === 3 && numberB < 5) {
                    if (Einputs.Eprice >= 30000) {
                        setNext(true)
                    } else {
                        setNext(false)
                    }
                }
            }
        } else {
            setNext(false)
        }
    }, [Einputs, number, numberB, option, ship, highPrice])

    function NextPage() {
        const lst = []
        lst.push(Einputs, number, option, numberB, ship)
        history.push("/ordersheet", { param: lst, addInfo: "", url: getUrl, image: "" })
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                    }}>
                        <Header content="상품 정보 작성" goBack={true} />
                        <ETCForm
                            highPrice={highPrice}
                            input={Einputs}
                            setInput={setEInputs}
                            mobile={false}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>옵션에 따른 추가 가격이 있나요?</div>
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
                                mobile={false}
                            />
                            <Button
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="없음"
                                mobile={false}
                            />
                        </div>
                        {number === 2 ?
                            <>
                                <input
                                    placeholder="추가 비용을 입력해주세요."
                                    name="option"
                                    value={option}
                                    onChange={onChange}
                                    style={{
                                        width: 408,
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: 16,
                                        marginLeft: 20,

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        color: "#010608",
                                        padding: 16,
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>배송비는 얼마인가요?</div>
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
                                mobile={false}
                            />
                            <Button
                                onClick={onTWO}
                                state={numberB}
                                number={3}
                                content="2,500"
                                mobile={false}
                            />
                            <Button
                                onClick={onFIVE}
                                state={numberB}
                                number={4}
                                content="5,000"
                                mobile={false}
                            />
                            <Button
                                onClick={onEXT}
                                state={numberB}
                                number={5}
                                content="기타"
                                mobile={false}
                            />
                        </div>
                        {numberB === 5 ?
                            <>
                                <input
                                    placeholder="추가 비용을 입력해주세요."
                                    name="ship"
                                    value={ship}
                                    onChange={onChange}
                                    style={{
                                        width: 408,
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: 16,
                                        marginLeft: 20,

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        color: "#010608",
                                        padding: 16,
                                        borderRadius: 6,
                                    }}
                                />
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
                            color: "#010608",
                        }}>
                            <div>* 가격, 입력 정보가 상이한 경우 혹은 품절인 경우 주문이 취소될 수 있습니다.</div>
                            <div style={{ marginTop: 4 }}>* 입력한 정보 외에 추가 금액이 붙는 경우 2차 결제일에 청구됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 만약 추가금액으로 인해 한도를 넘어가는 경우 주문이 취소됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 교환 환불은 불가능합니다.</div>
                        </div>
                        <StandardButton
                            marginTop={32}
                            text="다음"
                            onClick={next ? NextPage : () => {}}
                            state={next}
                            marginBottom={40}
                        />
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
                        <ETCForm
                            highPrice={highPrice}
                            input={Einputs}
                            setInput={setEInputs}
                            mobile={true}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>옵션에 따른 추가 가격이 있나요?</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <Button
                                onClick={onYES}
                                state={number}
                                number={2}
                                content="있음"
                                mobile={true}
                            />
                            <Button
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="없음"
                                mobile={true}
                            />
                        </div>
                        {number === 2 ?
                            <>
                                <input
                                    placeholder="추가 비용을 입력해주세요."
                                    name="option"
                                    value={option}
                                    onChange={onChange}
                                    style={{
                                        width: "82vw",
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: "4vw",
                                        marginLeft: "5vw",

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        color: "#010608",
                                        padding: "4vw",
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>배송비는 얼마인가요?</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <Button
                                onClick={onX}
                                state={numberB}
                                number={2}
                                content="없음"
                                mobile={true}
                            />
                            <Button
                                onClick={onTWO}
                                state={numberB}
                                number={3}
                                content="2,500"
                                mobile={true}
                            />
                            <Button
                                onClick={onFIVE}
                                state={numberB}
                                number={4}
                                content="5,000"
                                mobile={true}
                            />
                            <Button
                                onClick={onEXT}
                                state={numberB}
                                number={5}
                                content="기타"
                                mobile={true}
                            />
                        </div>
                        {numberB === 5 ?
                            <>
                                <input
                                    placeholder="추가 비용을 입력해주세요."
                                    name="ship"
                                    value={ship}
                                    onChange={onChange}
                                    style={{
                                        width: "82vw",
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: "4vw",
                                        marginLeft: "5vw",

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        color: "#010608",
                                        padding: "4vw",
                                        borderRadius: 6,
                                    }}
                                />
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
                            color: "#010608",
                        }}>
                            <div>* 가격, 입력 정보가 상이한 경우 혹은 품절인 경우 주문이 취소될 수 있습니다.</div>
                            <div style={{ marginTop: 4 }}>* 입력한 정보 외에 추가 금액이 붙는 경우 2차 결제일에 청구됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 만약 추가금액으로 인해 한도를 넘어가는 경우 주문이 취소됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 교환 환불은 불가능합니다.</div>
                        </div>
                        <MStandardButton
                            marginTop={"8vw"}
                            text="다음"
                            onClick={next ? NextPage : () => {}}
                            state={next}
                            marginBottom={"10vw"}
                        />
                    </div>
                </div>
            </Mobile>
        </>
    )
}

const Button = ({ onClick, state, number, content, mobile }) => {
    return (
        <div onClick={onClick} style={{
            width: mobile ? 90 : 95,
            marginRight: mobile ? "5vw" : 20,
            borderRadius: 6,
            backgroundColor: state === number ? "#010608" : "#f2f3f8",
            paddingTop: mobile ? "2vw" : 10,
            paddingBottom: mobile ? "2vw" : 10,
            cursor: "pointer",
            fontSize: mobile ? 14 : 16,
            fontWeight: state === number ? "bold" : "normal",
            color: state === number ? "#ffffff" : "rgba(1, 6, 8, 0.4)",
            opacity: state === number ? 1 : 0.8,
            textAlign: "center",
        }}>{content}</div>
    )
}

function ETCForm({ brand, input, setInput, highPrice, mobile }) {
    const { Eprice, Eetc } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <>
            <div style={{
                width: mobile ? "100vw" : 480,
                height: mobile ? "45vw" : 212,
                backgroundColor: "#f2f3f8",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <BiPlusCircle size={mobile ? 28 : 32} color="#010608" style={{ cursor: "pointer" }} />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    marginTop: mobile ? "8vw" : 32,
                }}>상품 정보를 알 수 있는 사진을 추가해주세요.</div>
            </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 16 : 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: mobile ? "4vw" : 16,
                marginLeft: mobile ? "5vw" : 20,
            }}>상품의 가격은 얼마인가요?</div>
            <input
                placeholder="상품 가격을 입력해주세요.(필수)"
                name="Eprice"
                value={Eprice}
                onChange={onChange}
                style={{
                    width: mobile ? "82vw" : 408,
                    outline: 0,
                    border: "1px solid rgba(1, 6, 8, 0.2)",
                    marginTop: mobile ? "4vw" : 16,
                    marginLeft: mobile ? "5vw" : 20,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    padding: mobile ? "4vw" : 16,
                    borderRadius: 6,
                }}
            />
            {highPrice === true ?
                <div></div>
                :
                <div style={{ color: "#f72b2b", fontSize: mobile ? 14 : 16, marginLeft: mobile ? "5vw" : 20, marginTop: mobile ? "1vw" : 4 }}>최소 주문금액은 30,000원부터 입니다 </div>
            }
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 16 : 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: mobile ? "8vw" : 32,
                marginLeft: mobile ? "5vw" : 20,
            }}>상품의 옵션이 있다면 입력해주세요.</div>
            <input
                placeholder="색상, 사이즈 같은 추가 옵션을 입력해주세요."
                name="Eetc"
                value={Eetc}
                onChange={onChange}
                style={{
                    marginTop: mobile ? "4vw" : 16,
                    width: mobile ? "82vw" : 408,
                    padding: mobile ? "4vw" : 16,
                    marginLeft: mobile ? "5vw" : 20,
                    outline: 0,
                    border: "1px solid rgba(1, 6, 8, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    borderRadius: 6,
                }}
            />
        </>
    )
}