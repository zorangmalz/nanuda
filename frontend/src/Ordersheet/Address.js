import React, { useReducer, useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader, StandardButton, MStandardButton, InputModule, MInputModule } from "../Style";
import { BsCheck } from "react-icons/bs"
import DaumPostCode from 'react-daum-postcode';
import { useHistory } from "react-router-dom";

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

export default function Address() {
    const history = useHistory()
    const [modal, setModal] = useState(false)
    //우편번호 입력


    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();

    const [number, dispatch] = useReducer(reducer, 0);
    const onOne = () => {
        dispatch({ type: 'ONE' });
        setInputs({
            ...inputs,
            claim: "문 앞"
        })
    };
    const onTwo = () => {
        dispatch({ type: 'TWO' });
        setInputs({
            ...inputs,
            claim: "직접 받고 부재시 문앞"
        })
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
        setInputs({
            ...inputs,
            claim: "경비실"
        })
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
        setInputs({
            ...inputs,
            claim: "택배함"
        })
    };
    const onFive = () => {
        dispatch({ type: 'FIVE' });
    };

    const [inputs, setInputs] = useState({
        name: "",
        addressNum: "",
        address: "",
        addressDetail: "",
        phoneNumber: "",
        claim: "",
    })
    const { name, addressNum, address, addressDetail, phoneNumber, claim } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const [addressType, setAddressType] = useState(0)

    function Daum({ setVisible }) {
        const handleComplete = (data) => {
            let fullAddress = data.address;
            let extraAddress = "";

            if (data.addressType === "R") {
                if (data.bname !== "") {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== "") {
                    extraAddress +=
                        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
            }
            // setIsZoneCode(data.zonecode);
            // setIsAddress(fullAddress);
            setInputs({
                ...inputs,
                addressNum: data.zonecode,
                address: fullAddress
            })
            // setInputs({
            //     ...inputs,
            //     address:fullAddress
            // })

            setVisible(false)
            setAddressType(4)
        };

        return (
            <div style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "100vh",
            }}>
                <div onClick={() => setVisible(false)} style={{
                    position: "absolute",
                    top: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#000000",
                    opacity: 0.4,
                    zIndex: 5,
                }} />
                <div style={{
                    zIndex: 7,
                    width: 340,
                    height: 376,
                    paddingTop: 30,
                    paddingBottom: 40,
                    paddingRight: 30,
                    paddingLeft: 30,
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <DaumPostCode onComplete={handleComplete} />
                </div>
            </div>

        )
    }

    const [next, setNext] = useState(false)

    function check() {
        if (inputs.address && inputs.addressDetail && inputs.addressNum && inputs.claim && inputs.name && inputs.phoneNumber != "") {
            setNext(true)
        } else {
            setNext(false)
        }
    }

    useEffect(() => {
        check()
    }, [inputs.address, inputs.addressDetail, inputs.addressNum, inputs.claim, inputs.name, inputs.phoneNumber])

    async function send() {
        console.log(inputs.address, inputs.addressDetail, inputs.addressNum, inputs.claim, inputs.name, inputs.phoneNumber)
        await fetch("https://api.1n1n.io/order/address", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                address_number: inputs.addressNum,
                address: inputs.address,
                address_detail: inputs.addressDetail,
                temp_receiver: inputs.name,
                temp_phone_number: inputs.phoneNumber,
                temp_claim: inputs.claim,
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.data) {
                    history.goBack()
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <Default>
                {modal ?
                    <Daum setVisible={setModal} ></Daum>
                    :
                    <></>
                }

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

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                        paddingBottom: 40,
                    }}>
                        <Header content="배송정보 수정" goBack={true} />
                        <div style={{
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 44,
                            fontFamily: "NotoSansCJKkr",
                            marginBottom: 16,
                        }}>받는 사람은 누구인가요?</div>
                        <InputModule
                            type={1}
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="이름 혹은 별명"
                            width={440}
                        />
                        <div style={{
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 18,
                            fontFamily: "NotoSansCJKkr",
                            marginBottom: 16,
                        }}>연락처를 입력해주세요.</div>
                        <InputModule
                            type={1}
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={onChange}
                            placeholder="핸드폰 번호 11자리"
                            width={440}
                        />
                        <div style={{
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 18,
                            fontFamily: "NotoSansCJKkr",
                            marginBottom: 16,
                        }}>주소를 입력해주세요.</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <InputModule
                                type={addressType}
                                name="addressNum"
                                value={addressNum}
                                onChange={onChange}
                                placeholder="우편번호"
                                width={210}
                            />
                            <div onClick={() => setModal(true)} style={{
                                cursor: "pointer",
                                width: 100,
                                paddingTop: 16,
                                paddingBottom: 16,
                                backgroundColor: "#010608",
                                borderRadius: 6,
                                marginLeft: 20,

                                fontSize: 14,
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "#ffffff",
                                fontFamily: "NotoSansCJKkr",
                                marginBottom: 16,
                            }}>우편번호 찾기</div>
                        </div>
                        <InputModule
                            type={addressType}
                            name="address"
                            value={address}
                            onChange={onChange}
                            placeholder="주소"
                            width={440}
                        />
                        <InputModule
                            type={1}
                            name="addressDetail"
                            value={addressDetail}
                            onChange={onChange}
                            placeholder="상세 주소 입력"
                            width={440}
                        />
                        <div style={{
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 16,
                            marginBottom: 16,
                            fontFamily: "NotoSansCJKkr"
                        }}>배송 요청사항</div>
                        <ClaimFormat
                            onClick={onOne}
                            number={number}
                            num={1}
                            text="문 앞"
                        />
                        <ClaimFormat
                            onClick={onTwo}
                            number={number}
                            num={2}
                            text="직접 받고 부재시 문앞"
                        />
                        <ClaimFormat
                            onClick={onThree}
                            number={number}
                            num={3}
                            text="경비실"
                        />
                        <ClaimFormat
                            onClick={onFour}
                            number={number}
                            num={4}
                            text="택배함"
                        />
                        <ClaimFormat
                            onClick={onFive}
                            number={number}
                            num={5}
                            text="기타"
                        />
                        {number === 5 ? <><input name="claim" value={claim} onChange={onChange} placeholder="장소 입력 (필수)" style={{
                            outline: 0,
                            borderTop: 0,
                            borderLeft: 0,
                            borderRight: 0,
                            borderBottom: "1px solid #dfdfdf",

                            width: 408,
                            paddingBottom: 8,

                            fontSize: 16,
                            color: "#010608",
                            marginLeft: 52,
                        }} />
                            <div style={{
                                fontSize: 14,
                                color: "#f72b2b",
                                marginTop: 8,
                                marginLeft: 52,
                                fontFamily: "NotoSansCJKkr"
                            }}>필수 입력 정보입니다.</div></> : <></>}
                        <StandardButton
                            marginTop={50}
                            onClick={next ? send : () => {}}
                            state={next}
                            text={"수정완료"}
                            marginBottom={40}
                        />
                    </div>
                </div>
            </Default>
            <Mobile>
                {modal ?
                    <Daum setVisible={setModal} ></Daum>
                    :
                    <></>
                }

                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                    paddingBottom: "10vw"
                }}>
                    <MHeader content="배송정보 수정" goBack={true} />
                    <div style={{
                        marginLeft: "5vw",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "10vw",
                        fontFamily: "NotoSansCJKkr",
                        marginBottom: "4vw",
                    }}>받는 사람은 누구인가요?</div>
                    <MInputModule
                        type={1}
                        name="name"
                        value={name}
                        onChange={onChange}
                        placeholder="이름 혹은 별명"
                        width={"90vw"}
                    />
                    <div style={{
                        marginLeft: "5vw",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "4.5vw",
                        fontFamily: "NotoSansCJKkr",
                        marginBottom: "4vw",
                    }}>연락처를 입력해주세요.</div>
                    <MInputModule
                        type={1}
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={onChange}
                        placeholder="핸드폰 번호 11자리"
                        width={"90vw"}
                    />
                    <div style={{
                        marginLeft: "5vw",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "4.5vw",
                        fontFamily: "NotoSansCJKkr",
                        marginBottom: "4vw",
                    }}>주소를 입력해주세요.</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <MInputModule
                            type={addressType}
                            name="addressNum"
                            value={addressNum}
                            onChange={onChange}
                            placeholder="우편번호"
                            width={"45vw"}
                        />
                        <div onClick={() => setModal(true)} style={{
                            cursor: "pointer",
                            width: "25vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            backgroundColor: "#010608",
                            borderRadius: 6,

                            fontSize: 12,
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#ffffff",
                            fontFamily: "NotoSansCJKkr",
                            marginBottom: "4vw",
                        }}>우편번호 찾기</div>
                    </div>
                    <MInputModule
                        type={addressType}
                        name="address"
                        value={address}
                        onChange={onChange}
                        placeholder="주소"
                        width="90vw"
                    />
                    <MInputModule
                        type={1}
                        name="addressDetail"
                        value={addressDetail}
                        onChange={onChange}
                        placeholder="상세 주소 입력"
                        width="90vw"
                    />
                    <div style={{
                        marginLeft: "5vw",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "4vw",
                        marginBottom: "4vw",
                        fontFamily: "NotoSansCJKkr"
                    }}>배송 요청사항</div>
                    <ClaimFormat
                        onClick={onOne}
                        number={number}
                        num={1}
                        text="문 앞"
                        mobile={true}
                    />
                    <ClaimFormat
                        onClick={onTwo}
                        number={number}
                        num={2}
                        text="직접 받고 부재시 문앞"
                        mobile={true}
                    />
                    <ClaimFormat
                        onClick={onThree}
                        number={number}
                        num={3}
                        text="경비실"
                        mobile={true}
                    />
                    <ClaimFormat
                        onClick={onFour}
                        number={number}
                        num={4}
                        text="택배함"
                        mobile={true}
                    />
                    <ClaimFormat
                        onClick={onFive}
                        number={number}
                        num={5}
                        text="기타"
                        mobile={true}
                    />
                    {number === 5 ? <><input name="claim" value={claim} onChange={onChange} placeholder="장소 입력 (필수)" style={{
                        outline: 0,
                        borderTop: 0,
                        borderLeft: 0,
                        borderRight: 0,
                        borderBottom: "1px solid #dfdfdf",

                        width: "82%",
                        paddingBottom: 8,

                        fontSize: 16,
                        color: "#010608",
                        marginLeft: "13%",
                        fontFamily: "NotoSansCJKkr"
                    }} />
                        <div style={{
                            fontSize: 14,
                            color: "#f72b2b",
                            marginTop: 8,
                            marginLeft: "13%",
                            fontFamily: "NotoSansCJKkr"
                        }}>필수 입력 정보입니다.</div></> : <></>}
                    <MStandardButton
                        marginTop={"8vw"}
                        onClick={next ? send : () => {}}
                        state={next}
                        text={"수정완료"}
                        marginBottom={"10vw"}
                    />
                </div>
            </Mobile>
        </>
    )
}

function ClaimFormat({ onClick, number, num, text, mobile }) {
    return (
        <div onClick={onClick} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            marginLeft: mobile ? "5vw" : 20,
            cursor: "pointer",
            marginBottom: mobile ? "4vw" : 16,
        }}>
            <BsCheck size={mobile ? 20 : 24} color={number === num ? "#26c1f0" : "rgba(32, 36, 38, 0.6)"} />
            <div style={{
                fontSize: mobile ? 14 : 16,
                opacity: 0.6,
                color: "#010608",
                marginLeft: mobile ? "2vw" : 8,
                fontFamily: "NotoSansCJKkr"
            }}>{text}</div>
        </div>
    )
}