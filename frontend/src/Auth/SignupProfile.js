import React, { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import styled from "styled-components"
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";
import { useHistory,useLocation } from "react-router";

export default function SignupProfile() {
    const history = useHistory()
    const location = useLocation()
    
    var uid
    var email
    useEffect(()=>{
        try{
            uid = {uid:location.state.uid}
            email = {email:location.state.email}
            window.localStorage.setItem("uid",JSON.stringify(uid))
            window.localStorage.setItem("email",JSON.stringify(email))

        }catch(err){
            console.log(err)
        }
    })
    //약관 동의
    const [personal, setPersonal] = useState(false)
    const [service, setService] = useState(false)
    const [veri, setVeri] = useState(false)
    const [market, setMarket] = useState(false)
    const [enc,setEnc]=useState("")

    function getInfo(){
        fetch("https://wishdeal.link/checkplus_main", {
            method: "GET",      
        })
        .then(res => res.json())
            .then(res => {
              console.log(res)
              setEnc(res.sEncData)
              
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getInfo()
    
    },[])
    function fnPopup(){
        console.log(enc)
		window.open('', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
        try{
            document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
            document.form_chk.target = "popupChk";
            document.form_chk.submit();
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(()=>{
        setTimeout(()=>{
            check()
        },1000)
    })
    function check(){
        console.log("checking")
        await fetch("https://haulfree.link/niceCheck/", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
           
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.data === true) {
history.replace("/")          }
            }).catch(err => {
                console.log(err)
            })
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

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="회원정보" goBack={true} />
                        <div style={{
                             fontFamily: "NotoSansCJKkr",
                             fontSize: 21,
                             fontWeight: "bold",
                             color: "#010608",
                             marginLeft: 20,
                             marginTop: 32,
                        }}>
                            원활한 서비스 이용을 위해 <br /> 본인인증을 완료해주세요.
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",

                            width: 440,
                            paddingTop: 12,
                            paddingBottom: 12,
                            marginTop: 32,
                            border: "1px solid rgba(1, 6, 8, 0.2)",
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
                                color={personal && service && veri && market ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    marginLeft: 8,
                                    cursor: "pointer",
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#010608",
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
                                color={personal ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#010608",
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
                                color={service ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#010608",
                                marginLeft: 8,
                            }}>1/n <span style={{
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
                                color={veri ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#010608",
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
                                color={market ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#010608",
                                marginLeft: 8,
                            }}>마케팅 정보 수신 동의(선택)</div>
                        </div>
                        <form name="form_chk" method="post">
                            <input type="hidden" name="m" value="checkplusService" />
                            <input type="hidden" name="EncodeData" value={enc} />
                            <div style={{
                                width: 440,
                                paddingTop: 15,
                                paddingBottom: 15,
                                marginTop: 32,
                                borderRadius: 6,
                                backgroundColor: personal && service && veri ? "#26c1f0" : "#dbdbdb",
                                alignSelf: "center",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#ffffff",
                                cursor: "pointer",
                                textAlign: "center",
                                marginLeft: 20,
                            }} onClick={personal && service && veri ? fnPopup : () => {}}>본인인증하기</div>
                        </form>
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
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#010608",
                        marginLeft: "5vw",
                        marginTop: "8vw",
                    }}>
                        원활한 서비스 이용을 위해 <br /> 본인인증을 완료해주세요.
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",

                        width: "90vw",
                        paddingTop: "3vw",
                        paddingBottom: "3vw",
                        marginTop: "8vw",
                        border: "1px solid rgba(1, 6, 8, 0.2)",
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
                            color={personal && service && veri && market ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
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
                            color: "#010608",
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
                            color={personal ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#010608",
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
                            color={service ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#010608",
                            marginLeft: "2vw",
                        }}>1/n <span style={{
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
                            color={veri ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#010608",
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
                            color={market ? "#26c1f0" : "rgba(1, 6, 8, 0.6)"}
                            size={16}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 14,
                            color: "#010608",
                            marginLeft: "2vw",
                        }}>마케팅 정보 수신 동의 (선택)</div>
                    </div>
                    <form name="form_chk" method="post">
                        <input type="hidden" name="m" value="checkplusService" />
                        <input type="hidden" name="EncodeData" value={enc} />
                        <div style={{
                            width: "90vw",
                            paddingTop: 12,
                            paddingBottom: 12,
                            marginTop: 24,
                            borderRadius: 6,
                            backgroundColor: personal && service && veri ? "#26c1f0" : "#dbdbdb",
                            alignSelf: "center",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#ffffff",
                            cursor: "pointer",
                            textAlign: "center",
                            marginLeft: "5vw"
                        }} onClick={personal && service && veri ? fnPopup : () => { }}>본인인증하기</div>
                    </form>
                </div>
            </Mobile>
        </>
    )
}

export const Title = styled.div`
    width: 440px;
    font-family: "NotoSansCJKkr";
    font-size: 21px;
    font-weight: bold;
    color: #010608;
    margin-top: 32px;
    margin-left: 20px;
`;

export const MTitle = styled.div`
    width: 90vw;
    font-family: "NotoSansCJKkr";
    font-size: 16px;
    font-weight: bold;
    color: #010608;
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
            backgroundColor: number === standard ? "#010608" : "#ffffff",
            border: number === standard ? "1px solid #010608" : "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 16,
            fontWeight: number === standard ? "bold" : "normal",
            color: number === standard ? "#ffffff" : "rgba(1, 6, 8, 0.8)",
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
            backgroundColor: number === standard ? "#010608" : "#ffffff",
            border: number === standard ? "1px solid #010608" : "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 12,
            fontWeight: number === standard ? "bold" : "normal",
            color: number === standard ? "#ffffff" : "rgba(1, 6, 8, 0.8)",
            textAlign: "center",
        }}>{text}</div>
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
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                    outline: 0,

                    fontSize: fontSize,
                    fontFamily: "NotoSansCJKkr",
                    color: "#010608",
                }}
            />
        </>
    )
}