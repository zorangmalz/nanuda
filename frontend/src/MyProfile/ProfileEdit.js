import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import { Header, MHeader, InputModule, MInputModule, StandardChoiceModal } from "../Style";
import { MdKeyboardArrowRight } from "react-icons/md"
import { BiPlusCircle } from "react-icons/bi";

export default function ProfileEdit() {
    let history = useHistory()

    const onChange = (e) => {
        const { value, name } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    //현재 유저 정보
    const [user, setUser] = useState({
        name: "",
        user_email: "",
        phone_number: ""
    }) 

    const { name, user_email, phone_number } = user

    useEffect(() => {
        fetch('https://haulfree.link/userinfo/', {
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
                setUser({
                    ...user,
                    user_email: response.user_email,
                    name: response.name,
                    phone_number: response.phone_number,
                })
            })
            .catch(err => console.log(err))
    }, [])

    const [logoutModal, setLogoutModal] = useState(false)
    function logout() {
        localStorage.clear()
        fetch("https://haulfree.link/logout/", {
            method: "post",      
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
        .then(res => res.json())
            .then(res => {
              console.log(res)
              if(res.success===true){
                history.replace('/')
              }
              
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
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        {logoutModal ? 
                            <StandardChoiceModal 
                                title="로그아웃 하시겠습니까?"
                                content=""
                                canceltext="취소"
                                buttontext="로그아웃"
                                onCancelClick={() => setLogoutModal(false)}
                                onClick={logout}
                            />
                            :
                            <></>
                        }
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                        }}>
                            <Header content="내 정보 관리" goBack={true} />
                            <Title marginTop="32px" >이름</Title>
                            <InputModule
                                name="name"
                                value={name}
                                onChange={onChange}
                                placeholder="이름"
                                type={4}
                                width={440}
                            />
                            <Title marginTop="16px" >휴대폰번호</Title>
                            <InputModule
                                name="phone_number"
                                value={phone_number}
                                onChange={onChange}
                                placeholder="휴대폰 번호"
                                type={4}
                                width={440}
                            />
                            <div style={{
                                width: 440,
                                alignSelf: "center",
                                paddingTop: 15,
                                paddingBottom: 15,
                                border: "1px solid rgba(1, 6, 8, 0.2)",
                                borderRadius: 6,
                                marginTop: 16,

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                color: "rgba(1, 6, 8, 0.6)",
                                cursor: "pointer",
                                textAlign: "center"
                            }}>본인인증하고 정보 변경하기</div>
                            <Title marginTop="32px" >이메일주소</Title>
                            <InputModule
                                name="user_email"
                                value={user_email}
                                onChange={onChange}
                                placeholder="이메일 주소"
                                type={4}
                                width={440}
                            />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginBottom: 40,
                            marginLeft: 20,
                        }}>
                            <Small marginBottom="8px" onClick={() => setLogoutModal(true)} >로그아웃</Small>
                            <Small onClick={() => history.push("/profiledelete")}>회원 탈퇴</Small>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}>
                        {logoutModal ? 
                            <StandardChoiceModal 
                                title="로그아웃 하시겠습니까?"
                                content=""
                                canceltext="취소"
                                buttontext="로그아웃"
                                onCancelClick={() => setLogoutModal(false)}
                                onClick={logout}
                                mobile={true}
                            />
                            :
                            <></>
                        }
                        <MHeader content="내 정보 관리" goBack={true} />
                        <Title marginTop="8vw" fontSize="16px">이름</Title>
                        <MInputModule
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="이름"
                            type={4}
                            width={"90vw"}
                        />
                        <Title marginTop="4vw" fontSize="16px">휴대폰번호</Title>
                        <MInputModule
                            name="phone_number"
                            value={phone_number}
                            onChange={onChange}
                            placeholder="휴대폰 번호"
                            type={4}
                            width={"90vw"}
                        />
                        <div style={{
                            width: "90vw",
                            alignSelf: "center",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            border: "1px solid rgba(1, 6, 8, 0.2)",
                            borderRadius: 6,
                            marginTop: "4vw",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            color: "rgba(1, 6, 8, 0.6)",
                            cursor: "pointer",
                            textAlign: "center"
                        }}>본인인증하고 정보 변경하기</div>
                        <Title marginTop="8vw" fontSize="16px">이메일주소</Title>
                        <MInputModule
                            name="user_email"
                            value={user_email}
                            onChange={onChange}
                            placeholder="이메일 주소"
                            type={4}
                            width={"90vw"}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginBottom: "10vw",
                        marginLeft: "5vw",
                    }}>
                        <Small fontSize="12px" marginBottom="2vw" onClick={() => setLogoutModal(true)} >로그아웃</Small>
                        <Small fontSize="12px" onClick={() => history.push("/profiledelete")}>회원 탈퇴</Small>
                    </div>
                </div>
            </Mobile>
        </>
    )
}

const Small = styled.div`
    font-family: 'NotoSansCJKkr';
    opacity: 0.6;
    font-size: ${props => props.fontSize || "14px"};
    color: #010608;
    cursor: pointer;
    text-decoration-line: underline;
    margin-bottom: ${props => props.marginBottom || "0px"};
`

const Title = styled.div`
    font-family: 'NotoSansCJKkr';
    font-size: ${props => props.fontSize || "18px"};
    font-weight: bold;
    color: #010608;
    margin-top: ${props => props.marginTop || "0px"};
    margin-bottom: 16px;
    margin-left: 20px;
`;

export const BasicAddress = ({ item }) => {
    return (
        <div style={{
            width: 408,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 16,
            padding: 16,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            borderRadius: 6,
            border: "1px solid #26c1f0"
        }}>
            <div>
                <div style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.name}</div>
                <div style={{
                    fontSize: 16,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressNum}</div>
                <div style={{
                    fontSize: 16,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.address}</div>
                <div style={{
                    fontSize: 16,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressDetail}</div>
                <div style={{
                    fontSize: 16,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.phoneNumber}</div>
                <div style={{
                    fontSize: 16,
                    color: "#010608",
                    fontFamily: "NotoSansCJKkr"
                }}>{item.request}</div>
            </div>
            <MdKeyboardArrowRight
                size={24}
                color="rgba(1, 6, 8, 0.2)"
            />
        </div>
    )
}

export const MBasicAddress = ({ item }) => {
    return (
        <div style={{
            width: "82vw",
            marginLeft: "5vw",
            marginRight: "5vw",
            marginTop: "4vw",
            padding: "4vw",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            borderRadius: 6,
            border: "1px solid #26c1f0"
        }}>
            <div>
                <div style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.name}</div>
                <div style={{
                    fontSize: 14,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressNum}</div>
                <div style={{
                    fontSize: 14,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.address}</div>
                <div style={{
                    fontSize: 14,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressDetail}</div>
                <div style={{
                    fontSize: 14,
                    color: "#010608",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.phoneNumber}</div>
                <div style={{
                    fontSize: 14,
                    color: "#010608",
                    fontFamily: "NotoSansCJKkr"
                }}>{item.request}</div>
            </div>
            <MdKeyboardArrowRight
                size={20}
                color="rgba(1, 6, 8, 0.2)"
            />
        </div>
    )
}

export const NoAddress = () => {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/address")} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",

            width: 440,
            height: 136,
            border: "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer",
            borderRadius: 6,
            marginTop: 16,
        }}>
            <BiPlusCircle
                size={32}
                color="rgba(1, 6, 8, 0.6)"
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                opacity: 0.6,
                color: "#010608",
                marginTop: 8,
            }}>배송지를 입력해주세요.</div>
        </div>
    )
}

export const MNoAddress = () => {
    let history = useHistory()
    return (
        <div onClick={() => history.push("/address")} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",

            width: "90vw",
            height: "30vw",
            border: "1px solid rgba(1, 6, 8, 0.2)",
            cursor: "pointer",
            borderRadius: 6,
            marginTop: "4vw",
        }}>
            <BiPlusCircle
                size={28}
                color="rgba(1, 6, 8, 0.6)"
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                opacity: 0.6,
                color: "#010608",
                marginTop: "2vw",
            }}>배송지를 입력해주세요.</div>
        </div>
    )
}