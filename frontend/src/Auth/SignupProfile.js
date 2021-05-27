import React, { useState, useReducer, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import styled from "styled-components"
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";


export const Title = styled.div`
    width: 440px;
    font-family: "NotoSansCJKkr";
    font-size: 18px;
    font-weight: bold;
    color: #202426;
    margin-top: 32px;
    margin-left: 20px;
`;

export const MTitle = styled.div`
    width: 90vw;
    font-family: "NotoSansCJKkr";
    font-size: 16px;
    font-weight: bold;
    color: #202426;
    margin-top: 28px;
    margin-left: 5vw;
`;

export const Button = ({ text, number, standard, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: 95,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 6,
            backgroundColor: number === standard ? "#051a1a" : "#ffffff",
            border: number === standard ? "1px solid #051a1a" : "1px solid rgba(5, 26, 26, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 16,
            fontWeight: number === standard ? "bold" : "normal",
            color: number === standard ? "#ffffff" : "rgba(5, 26, 26, 0.8)",
            textAlign: "center",
        }}>{text}</div>
    )
}

export const MButton = ({ text, number, standard, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: "20vw",
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 6,
            backgroundColor: number === standard ? "#051a1a" : "#ffffff",
            border: number === standard ? "1px solid #051a1a" : "1px solid rgba(5, 26, 26, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 12,
            fontWeight: number === standard ? "bold" : "normal",
            color: number === standard ? "#ffffff" : "rgba(5, 26, 26, 0.8)",
            textAlign: "center",
        }}>{text}</div>
    )
}

function reducer(state, action) {
    switch (action.type) {
        case "STUDENT":
            return 1;
        case "EMPLOY":
            return 2;
        case "HOUSE":
            return 3;
        case "READY":
            return 4;
        case "SELF":
            return 5;
        case "ETC":
            return 6;
        default:
            return 0;
    }

}

export default function SignupProfile() {

    useEffect(() => {
        test()
    }, [])

    const test = async () => {
        console.log("come")
        fetch("https://haulfree.link/userInfoName/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials:"include",
           

        })
            
            .then(response => {
                setInputs({
                    ...inputs,
                    name: response.data.name,
                    email: response.data.email
                })
              
            }).catch(err=>{
                console.log(err)
            })
     
    }

    const [number, dispatch] = useReducer(reducer, 0)
    const onStudent = () => {
        dispatch({ type: "STUDENT" })
    }
    const onEmploy = () => {
        dispatch({ type: "EMPLOY" })
    }
    const onHouse = () => {
        dispatch({ type: "HOUSE" })
    }
    const onReady = () => {
        dispatch({ type: "READY" })
    }
    const onSelf = () => {
        dispatch({ type: "SELF" })
    }
    const onEtc = () => {
        dispatch({ type: "ETC" })
    }

    //input요소
    const [inputs, setInputs] = useState({
        name: "",
        cellPhone: "",
        email: "",
        job: ""
    })
    const { name, cellPhone, email, job } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    //약관 동의
    const [personal, setPersonal] = useState(false)
    const [service, setService] = useState(false)
    const [veri, setVeri] = useState(false)
    const [market, setMarket] = useState(false)
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

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="회원정보" goBack={true} />
                        <Title>이름</Title>
                        <InputModule
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="당신의 이름은 무엇인가요?"
                            width={440}
                            marginLeft={20}
                            marginTop={16}
                            fontSize={16}
                        />
                        <Title>이메일 주소</Title>
                        <InputModule
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="이메일 주소를 입력해주세요."
                            width={440}
                            marginLeft={20}
                            marginTop={16}
                            fontSize={16}
                        />
                        <Title>현재 직업은 무엇인가요?</Title>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            width: 440,
                            alignSelf: "center",
                            marginTop: 16,
                            rowGap: 16,
                        }}>
                            <Button
                                text="대학생"
                                number={number}
                                standard={1}
                                onClick={onStudent}
                            />
                            <Button
                                text="직장인"
                                number={number}
                                standard={2}
                                onClick={onEmploy}
                            />
                            <Button
                                text="주부"
                                number={number}
                                standard={3}
                                onClick={onHouse}
                            />
                            <Button
                                text="취준생"
                                number={number}
                                standard={4}
                                onClick={onReady}
                            />
                            <Button
                                text="자영업"
                                number={number}
                                standard={5}
                                onClick={onSelf}
                            />
                            <Button
                                text="기타"
                                number={number}
                                standard={6}
                                onClick={onEtc}
                            />
                        </div>
                        <InputModule
                            name="job"
                            value={job}
                            onChange={onChange}
                            placeholder="현재 직업을 입력해주세요."
                            width={440}
                            marginLeft={20}
                            marginTop={16}
                            fontSize={16}
                        />
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",

                            width: 440,
                            paddingTop: 12,
                            paddingBottom: 12,
                            marginTop: 32,
                            border: "1px solid rgba(5, 26, 26, 0.2)",
                            borderRadius: 6,
                        }}>
                            <BsCheck
                                onClick={() => {
                                    if (personal || service || veri || market) {
                                        setPersonal(false)
                                        setService(false)
                                        setVeri(false)
                                        setMarket(false)
                                    } else {
                                        setPersonal(true)
                                        setService(true)
                                        setVeri(true)
                                        setMarket(true)
                                    }
                                }}
                                size={24}
                                color={personal && service && veri && market ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                                style={{
                                    marginLeft: 8,
                                    cursor: "pointer",
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginLeft: 8,
                            }}>전체 약관 동의</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 28,
                            marginTop: 16,
                        }}>
                            <BsCheck
                                onClick={() => setPersonal(!personal)}
                                size={24}
                                color={personal ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#202426",
                                marginLeft: 8,
                            }}><span style={{
                                textDecorationLine: "underline",
                                marginRight: 2,
                            }}>개인정보 처리약관</span> 동의 (필수)</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 28,
                            marginTop: 8,
                        }}>
                            <BsCheck
                                onClick={() => setService(!service)}
                                size={24}
                                color={service ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#202426",
                                marginLeft: 8,
                            }}>나누다 <span style={{
                                textDecorationLine: "underline",
                                marginRight: 2,
                            }}>서비스 이용약관</span> 동의 (필수)</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 28,
                            marginTop: 8,
                        }}>
                            <BsCheck
                                onClick={() => setVeri(!veri)}
                                size={24}
                                color={veri ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#202426",
                                marginLeft: 8,
                            }}>
                                <span style={{
                                    textDecorationLine: "underline",
                                    marginRight: 2,
                                }}>휴대폰 본인확인 서비스</span>
                                    동의 (필수)</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 28,
                            marginTop: 8,
                        }}>
                            <BsCheck
                                onClick={() => setMarket(!market)}
                                size={24}
                                color={market ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#202426",
                                marginLeft: 8,
                            }}>마케팅 정보 수신 동의(선택)</div>
                        </div>
                        <div style={{
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            marginTop: 32,
                            borderRadius: 6,
                            backgroundColor: "#26c1f0",
                            alignSelf: "center",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#ffffff",
                            cursor: "pointer",
                            textAlign: "center"
                        }}>본인인증하기</div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="회원정보" goBack={true} />
                    <MTitle>이름</MTitle>
                    <InputModule
                        name="name"
                        value={name}
                        onChange={onChange}
                        placeholder="당신의 이름은 무엇인가요?"
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                    <MTitle>이메일 주소</MTitle>
                    <InputModule
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="이메일 주소를 입력해주세요."
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                    <MTitle>현재 직업은 무엇인가요?</MTitle>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        width: "90vw",
                        alignSelf: "center",
                        marginTop: 12,
                        rowGap: 12,
                    }}>
                        <MButton
                            text="대학생"
                            number={number}
                            standard={1}
                            onClick={onStudent}
                        />
                        <MButton
                            text="직장인"
                            number={number}
                            standard={2}
                            onClick={onEmploy}
                        />
                        <MButton
                            text="주부"
                            number={number}
                            standard={3}
                            onClick={onHouse}
                        />
                        <MButton
                            text="취준생"
                            number={number}
                            standard={4}
                            onClick={onReady}
                        />
                        <MButton
                            text="자영업"
                            number={number}
                            standard={5}
                            onClick={onSelf}
                        />
                        <MButton
                            text="기타"
                            number={number}
                            standard={6}
                            onClick={onEtc}
                        />
                    </div>
                    <InputModule
                        name="job"
                        value={job}
                        onChange={onChange}
                        placeholder="현재 직업을 입력해주세요."
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",

                        width: "90vw",
                        paddingTop: "3vw",
                        paddingBottom: "3vw",
                        marginTop: "8vw",
                        border: "1px solid rgba(5, 26, 26, 0.2)",
                        borderRadius: 6,
                    }}>
                        <BsCheck
                            onClick={() => {
                                if (personal || service || veri || market) {
                                    setPersonal(false)
                                    setService(false)
                                    setVeri(false)
                                    setMarket(false)
                                } else {
                                    setPersonal(true)
                                    setService(true)
                                    setVeri(true)
                                    setMarket(true)
                                }
                            }}
                            color={personal && service && veri && market ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                            size={16}
                            style={{
                                marginLeft: 8,
                                cursor: "pointer",
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginLeft: 8,
                        }}>전체 약관 동의</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "7vw",
                        marginTop: "4vw",
                    }}>
                        <BsCheck
                            onClick={() => setPersonal(!personal)}
                            color={personal ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426",
                            marginLeft: "2vw",
                        }}><span style={{
                            textDecorationLine: "underline",
                            marginRight: 2,
                        }}>개인정보 처리약관</span> 동의 (필수)</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "7vw",
                        marginTop: "2vw",
                    }}>
                        <BsCheck
                            onClick={() => setService(!service)}
                            color={service ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426",
                            marginLeft: "2vw",
                        }}>나누다 <span style={{
                            textDecorationLine: "underline",
                            marginRight: 2,
                        }}>서비스 이용약관</span> 동의 (필수)</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "7vw",
                        marginTop: "2vw",
                    }}>
                        <BsCheck
                            onClick={() => setVeri(!veri)}
                            color={veri ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426",
                            marginLeft: "2vw",
                        }}><span style={{
                            textDecorationLine: "underline",
                            marginRight: 2,
                        }}>휴대폰 본인확인 서비스</span> 동의 (필수)</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "7vw",
                        marginTop: "2vw",
                    }}>
                        <BsCheck
                            onClick={() => setMarket(!market)}
                            color={market ? "#26c1f0" : "rgba(5, 26, 26, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#202426",
                            marginLeft: "2vw",
                        }}>마케팅 정보 수신 동의 (선택)</div>
                    </div>
                    <div style={{
                        width: "90vw",
                        paddingTop: 12,
                        paddingBottom: 12,
                        marginTop: 24,
                        borderRadius: 6,
                        backgroundColor: "#26c1f0",
                        alignSelf: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#ffffff",
                        cursor: "pointer",
                        textAlign: "center"
                    }}>본인인증하기</div>
                </div>
            </Mobile>
        </>
    )
}

export function InputModule({ name, value, onChange, placeholder, width, marginLeft, marginTop, fontSize }) {
    return (
        <>
            <input
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    width: width,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    paddingBottom: 8,
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                    outline: 0,

                    fontSize: fontSize,
                    fontFamily: "NotoSansCJKkr",
                    color: "#202426",
                }}
            />
        </>
    )
}