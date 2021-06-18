import React, { useEffect, useState } from "react";
import logoS from "./images/logoS.png"
import user from "./images/users.png"
import { IoIosArrowBack } from "react-icons/io";
import { BsX } from "react-icons/bs"
import { useHistory } from "react-router";
import styled from "styled-components";
import kakao from "./images/kkt cs.png"
import mainlogo from "./images/mainlogo.png"
import "./css/haulfree.css"

export default function WebIntro() {
    let history = useHistory()
    return (
        <>
            <div style={{
                width: "50%",
                minWidth: 480,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                position: "relative"
            }}>
                <div style={{
                    position: "fixed",
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",

                    width: 440,
                    marginRight: 20,
                    height: "100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <img onClick={() => history.replace("/")} alt="" src={logoS} style={{
                        width: 72,
                        height: 72,
                        cursor: "pointer"
                    }} />
                    <div style={{
                        marginTop: 32,
                        marginBottom: 32,
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>1/n</div>
                    <div style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#010608",
                        marginBottom: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        <span style={{
                            color: "#26c1f0"
                        }}>똑똑한 소비</span>
                        를 하는 <br />당신을 위한
                        <span style={{
                            color: "#26c1f0"
                        }}> 분할결제 서비스</span>
                    </div>
                    <div style={{
                        fontSize: 21,
                        color: "#010608",
                        marginBottom: 32,
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        1/n는 <br />
                        원하는 상품을 신용등급 상관없이 누구나 <br />
                        분할결제 할 수 있게 도와주는 서비스입니다.
                    </div>
                    <div style={{
                        cursor: "pointer",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#010608",
                        textDecorationLine: "underline",
                        fontFamily: "NotoSansCJKkr"
                    }}>1/n는 신용카드와 무엇이 다른가요?</div>
                </div>
            </div>
        </>
    )
}

export function Header({ content, goBack, goX }) {
    let history = useHistory()
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #dfdfdf",
            justifyContent: "center",
            paddingTop: 15,
            paddingBottom: 15,
            position: "relative",
        }}>
            {goBack ? <IoIosArrowBack size={24} color="#010608" onClick={() => history.goBack()} style={{
                position: "absolute",
                left: 20,
                cursor: "pointer"
            }} /> : <></>}
            {goX ? <BsX size={32} color="#010608" onClick={() => history.goBack()} style={{
                position: "absolute",
                left: 20,
                cursor: "pointer"
            }} /> : <></>}
            <div style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",
                alignSelf: "center",
                justifyContent: "center",
                fontFamily: "NotoSansCJKkr"
            }}>{content}</div>
        </div>
    )
}

export function MHeader({ content, goBack, goX }) {
    let history = useHistory()
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #dfdfdf",
            justifyContent: "center",
            paddingTop: 15,
            paddingBottom: 15,
            position: "relative",
        }}>
            {goBack ? <IoIosArrowBack size={24} color="#010608" onClick={() => history.goBack()} style={{
                position: "absolute",
                left: "5vw",
                cursor: "pointer"
            }} /> : <></>}
            {goX ? <BsX size={24} color="#010608" onClick={() => history.goBack()} style={{
                position: "absolute",
                left: "5vw",
                cursor: "pointer"
            }} /> : <></>}
            <div style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",
                alignSelf: "center",
                justifyContent: "center",
                fontFamily: "NotoSansCJKkr"
            }}>{content}</div>
        </div>
    )
}

export function HomeHeader() {
    let history = useHistory()
    const [log, setLog] = useState(false)
    useEffect(() => {
        test()
    }, [])
    const test = async () => {
        fetch("https://haulfree.link/userInfoName/", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then((response) => (response.json()))
            .then(response => {
                setLog(response.data)

            }).catch(err => {
                console.log(err)
            })

    }

    function profileClick() {
        if (log == true) {
            history.push("/profilemain")
        } else {
            setIsLogin(true)
        }
    }
    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #dfdfdf",
                paddingTop: 15,
                paddingBottom: 15,
                zIndex: 5,
            }}>
                <div style={{
                    width: 100,
                    height: 28,
                }} />
                <img alt="mainlogo" src={mainlogo} style={{
                    width: 32,
                    height: 32
                }} />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",

                    paddingRight: 20,
                    width: 80,
                }}>
                    <img onClick={profileClick} alt="" src={user} style={{
                        width: 28,
                        height: 28,
                        marginLeft: 8,
                        cursor: "pointer"
                    }} />
                </div>
            </div>
            {isLogin ?
                <StandardChoiceModal
                    title="회원가입이 필요한 서비스입니다."
                    content="지금 바로 회원가입하고 다양한 상품을 분할결제 해보세요!"
                    canceltext="취소"
                    onCancelClick={() => setIsLogin(false)}
                    buttontext="회원가입"
                    onClick={() => history.push("/signup")}
                />
                :
                <></>
            }
        </>
    )
}

export function MHomeHeader() {
    let history = useHistory()
    const [log, setLog] = useState("")
    useEffect(() => {
        test()
    }, [])
    const test = async () => {
        fetch("https://haulfree.link/userInfoName/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })

            .then(response => {
                setLog(response.data.data)

            }).catch(err => {
                console.log(err)
            })
    }

    function profileClick() {
        if (log == true) {
            history.push("/profilemain")
        } else {
            setIsLogin(true)
        }
    }
    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #dfdfdf",
                paddingTop: 15,
                paddingBottom: 15,
                zIndex: 5,
            }}>
                <div style={{
                    width: "30vw",
                }} />
                <img alt="mainlogo" src={mainlogo} style={{
                    width: "8vw",
                    height: "8vw"
                }} />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",

                    paddingRight: "5vw",
                    width: "25vw"
                }}>
                    <img onClick={profileClick} alt="" src={user} style={{
                        width: 24,
                        height: 24,
                        marginLeft: 4,
                        cursor: "pointer"
                    }} />
                </div>
            </div>
            {isLogin ?
                <StandardChoiceModal
                    title="회원가입이 필요한 서비스입니다."
                    content="지금 바로 회원가입하고 다양한 상품을 분할결제 해보세요!"
                    canceltext="취소"
                    onCancelClick={() => setIsLogin(false)}
                    buttontext="회원가입"
                    onClick={() => history.push("/signup")}
                    mobile={true}
                />
                :
                <></>
            }
        </>
    )
}

export function HomeBottomTag({ marginTop, marginBottom, bottomRef }) {
    return (
        <div ref={bottomRef} style={{
            width: 440,
            paddingTop: 32,
            paddingBottom: 30,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: marginTop,
            backgroundColor: "#f2f3f8",
            marginBottom: marginBottom,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSizeAdjust: 14,
                        fontWeight: "bold",
                        color: "#010608"
                    }}>고객센터 (카카오톡 채널 상담)</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        opacity: 0.6,
                        color: "#010608",
                        lineHeight: 1.5,
                        marginTop: 8
                    }}>
                        운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                        점심시간 평일 12:30 ~ 1:30
                    </div>
                </div>
                <a href={"http://pf.kakao.com/_zKxbds"} target="_blank" style={{
                    textDecorationLine: "none",
                    WebkitAppearance: "none"
                }}>
                    <img src={kakao} alt="로고" style={{
                        width: 48,
                        height: 48,
                        borderRadius: 6
                    }} />
                </a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginTop: 16,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 이용안내</div>
                    <div onClick={() => window.open('https://www.notion.so/8bd2f5a8861f4a72a3af30f160257055', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>공지사항</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>1/n은 어떤 서비스인가요?</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>자주 묻는 질문</div>
                    <div onClick={() => window.open('https://www.notion.so/c2c73887bb154e9abd312ed70a6cc6f4', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>제휴/파트너쉽 문의</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: 128
                }}>
                    <div style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 정책</div>
                    <div onClick={() => window.open('https://www.notion.so/2fe90eeb1865441fb0a741cc9a860b0a', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>이용약관</div>
                    <div onClick={() => window.open('https://www.notion.so/8917843ebfe54b88a8912949d7fd7bc7', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>개인정보 처리약관</div>
                    <div onClick={() => window.open('https://www.notion.so/65497c24ee6b4d4ab2b63b3830a790f0', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>마케팅수신 약관</div>
                    <div onClick={() => window.open('https://www.notion.so/77771c4f099d457d99366bdc0e0f2e2d', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>분할결제 약관</div>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 32
            }}>
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#fff500",
                    marginRight: 16
                }} />
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#26c1f0",
                    marginRight: 16
                }} />
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#010608",
                    marginRight: 16
                }} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 32
            }}>
                <img src={mainlogo} alt="로고" style={{
                    width: 60,
                    color: "#ffffff"
                }} />
            </div>
            <div style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#010608",
                opacity: 0.6,
                fontFamily: "NotoSansCJKkr",
                marginTop: 12
            }}>(주) 라텔</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                opacity: 0.6,
                lineHeight: 1.8,
                color: "#010608",
                marginTop: 8
            }}>
                사업자 등록번호 278-88-02031 <br />
                대표자 : 김현명, 이지행 <br />

                주소 : 서울특별시 성동구 왕십리로 10길 6, 1204호(성수동 1가, 서울숲비즈포레) <br />
            </div>
            <div style={{
                width: 440,
                opacity: 0.4,
                fontSize: 12,
                color: "#010608",
                fontFamily: "NotoSansCJKkr",
                marginTop: 32
            }}></div>
        </div>
    )
}

export function BottomTag({ marginTop, marginBottom }) {
    return (
        <div style={{
            width: 440,
            paddingTop: 32,
            paddingBottom: 30,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: marginTop,
            backgroundColor: "#f2f3f8",
            marginBottom: marginBottom,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSizeAdjust: 14,
                        fontWeight: "bold",
                        color: "#010608"
                    }}>고객센터 (카카오톡 채널 상담)</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        opacity: 0.6,
                        color: "#010608",
                        lineHeight: 1.5,
                        marginTop: 8
                    }}>
                        운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                        점심시간 평일 12:30 ~ 13:30
                    </div>
                </div>
                <a href={"http://pf.kakao.com/_zKxbds"} target="_blank" style={{
                    textDecorationLine: "none",
                    WebkitAppearance: "none"
                }}>
                    <img src={kakao} alt="로고" style={{
                        width: 48,
                        height: 48,
                        borderRadius: 6
                    }} /></a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginTop: 16,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 이용안내</div>
                    <div onClick={() => window.open('https://www.notion.so/8bd2f5a8861f4a72a3af30f160257055', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>공지사항</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>1/n은 어떤 서비스인가요?</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>자주 묻는 질문</div>
                    <div onClick={() => window.open('https://www.notion.so/c2c73887bb154e9abd312ed70a6cc6f4', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>제휴/파트너쉽 문의</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: 128
                }}>
                    <div style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 정책</div>
                    <div onClick={() => window.open('https://www.notion.so/2fe90eeb1865441fb0a741cc9a860b0a', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>이용약관</div>
                    <div onClick={() => window.open('https://www.notion.so/8917843ebfe54b88a8912949d7fd7bc7', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>개인정보 처리약관</div>
                    <div onClick={() => window.open('https://www.notion.so/65497c24ee6b4d4ab2b63b3830a790f0', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>마케팅수신 약관</div>
                    <div onClick={() => window.open('https://www.notion.so/77771c4f099d457d99366bdc0e0f2e2d', "_blank")} style={{
                        fontSize: 12,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 8,
                    }}>분할결제 약관</div>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 32
            }}>
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#fff500",
                    marginRight: 16
                }} />
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#26c1f0",
                    marginRight: 16
                }} />
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#010608",
                    marginRight: 16
                }} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 32
            }}>
                <img src={mainlogo} alt="로고" style={{
                    width: 60,
                    color: "#ffffff"
                }} />
            </div>
            <div style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#010608",
                opacity: 0.6,
                fontFamily: "NotoSansCJKkr",
                marginTop: 12
            }}>(주) 라텔</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                opacity: 0.6,
                lineHeight: 1.8,
                color: "#010608",
                marginTop: 8
            }}>
                사업자 등록번호 278-88-02031 <br />
                대표자 : 김현명, 이지행 <br />

                주소 : 서울특별시 성동구 왕십리로 10길 6, 1204호(성수동 1가, 서울숲비즈포레) <br />
            </div>
            <div style={{
                width: 440,
                opacity: 0.4,
                fontSize: 12,
                color: "#010608",
                fontFamily: "NotoSansCJKkr",
                marginTop: 32
            }}></div>
        </div>
    )
}

export function MHomeBottomTag({ marginTop, marginBottom, bottomRef }) {
    return (
        <div ref={bottomRef} style={{
            width: "90%",
            paddingTop: "5%",
            paddingBottom: "5%",
            paddingLeft: "5%",
            paddingRight: "5%",
            marginTop: marginTop,
            backgroundColor: "#f2f3f8",
            marginBottom: marginBottom,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSizeAdjust: 12,
                        fontWeight: "bold",
                        color: "#010608"
                    }}>고객센터 (카카오톡 채널 상담)</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 10,
                        opacity: 0.6,
                        color: "#010608",
                        lineHeight: 1.5,
                        marginTop: 8
                    }}>
                        운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                        점심시간 평일 12:30 ~ 1:30
                    </div>
                </div>
                <a href={"http://pf.kakao.com/_zKxbds"} target="_blank" style={{
                    textDecorationLine: "none",
                    WebkitAppearance: "none"
                }}>
                    <img src={kakao} alt="로고" style={{
                        width: 36,
                        height: 36,
                        borderRadius: 6
                    }} />
                </a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginTop: 12,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 이용안내</div>
                    <div onClick={() => window.open('https://www.notion.so/8bd2f5a8861f4a72a3af30f160257055', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>공지사항</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>1/n은 어떤 서비스인가요?</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>자주 묻는 질문</div>
                    <div onClick={() => window.open('https://www.notion.so/c2c73887bb154e9abd312ed70a6cc6f4', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>제휴/파트너쉽 문의</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "30%"
                }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 정책</div>
                    <div onClick={() => window.open('https://www.notion.so/2fe90eeb1865441fb0a741cc9a860b0a', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>이용약관</div>
                    <div onClick={() => window.open('https://www.notion.so/8917843ebfe54b88a8912949d7fd7bc7', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>개인정보 처리약관</div>
                    <div onClick={() => window.open('https://www.notion.so/65497c24ee6b4d4ab2b63b3830a790f0', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>마케팅수신 약관</div>
                    <div onClick={() => window.open('https://www.notion.so/77771c4f099d457d99366bdc0e0f2e2d', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>분할결제 약관</div>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 24
            }}>
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#fff500",
                    marginRight: 12
                }} />
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#26c1f0",
                    marginRight: 12
                }} />
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#010608",
                    marginRight: 12
                }} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 24
            }}>
                <img src={mainlogo} alt="로고" style={{
                    width: "15vw",
                    color: "#ffffff"
                }} />
            </div>
            <div style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#010608",
                opacity: 0.6,
                fontFamily: "NotoSansCJKkr",
                marginTop: 10
            }}>(주) 라텔</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                opacity: 0.6,
                lineHeight: 1.8,
                color: "#010608",
                marginTop: 6
            }}>
                사업자 등록번호 278-88-02031 <br />
                대표자 : 김현명, 이지행 <br />

                주소 : 서울특별시 성동구 왕십리로 10길 6, 1204호(성수동 1가, 서울숲비즈포레) <br />
            </div>
            <div style={{
                width: "90%",
                opacity: 0.4,
                fontSize: 12,
                color: "#010608",
                fontFamily: "NotoSansCJKkr",
                marginTop: 28
            }}></div>
        </div>
    )
}

export function MBottomTag({ marginTop, marginBottom }) {
    return (
        <div style={{
            width: "90%",
            paddingTop: "5%",
            paddingBottom: "5%",
            paddingLeft: "5%",
            paddingRight: "5%",
            marginTop: marginTop,
            backgroundColor: "#f2f3f8",
            marginBottom: marginBottom,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSizeAdjust: 12,
                        fontWeight: "bold",
                        color: "#010608"
                    }}>고객센터 (카카오톡 채널 상담)</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 10,
                        opacity: 0.6,
                        color: "#010608",
                        lineHeight: 1.5,
                        marginTop: 8
                    }}>
                        운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                        점심시간 평일 12:30 ~ 13:30
                    </div>
                </div>
                <a href={"http://pf.kakao.com/_zKxbds"} target="_blank" style={{
                    textDecorationLine: "none",
                    WebkitAppearance: "none"
                }}>
                    <img src={kakao} alt="로고" style={{
                        width: 36,
                        height: 36,
                        borderRadius: 6
                    }} />
                </a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginTop: 12,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 이용안내</div>
                    <div onClick={() => window.open('https://www.notion.so/8bd2f5a8861f4a72a3af30f160257055', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>공지사항</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>1/n은 어떤 서비스인가요?</div>
                    <div onClick={() => window.open('https://www.notion.so/HaulFree-6a3f1f7d342d493193ac59d4319c2100', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>자주 묻는 질문</div>
                    <div onClick={() => window.open('https://www.notion.so/c2c73887bb154e9abd312ed70a6cc6f4', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>제휴/파트너쉽 문의</div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "30%"
                }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr"
                    }}>서비스 정책</div>
                    <div onClick={() => window.open('https://www.notion.so/2fe90eeb1865441fb0a741cc9a860b0a', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>이용약관</div>
                    <div onClick={() => window.open('https://www.notion.so/8917843ebfe54b88a8912949d7fd7bc7', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>개인정보 처리약관</div>
                    <div onClick={() => window.open('https://www.notion.so/65497c24ee6b4d4ab2b63b3830a790f0', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>마케팅수신 약관</div>
                    <div onClick={() => window.open('https://www.notion.so/77771c4f099d457d99366bdc0e0f2e2d', "_blank")} style={{
                        fontSize: 10,
                        opacity: 0.8,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",

                        cursor: "pointer",
                        marginTop: 6,
                    }}>분할결제 약관</div>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 24
            }}>
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#fff500",
                    marginRight: 12
                }} />
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#26c1f0",
                    marginRight: 12
                }} />
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#010608",
                    marginRight: 12
                }} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 24
            }}>
                <img src={mainlogo} alt="로고" style={{
                    width: "15vw",
                    color: "#ffffff"
                }} />
            </div>
            <div style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#010608",
                opacity: 0.6,
                fontFamily: "NotoSansCJKkr",
                marginTop: 10
            }}>(주) 라텔</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                opacity: 0.6,
                lineHeight: 1.8,
                color: "#010608",
                marginTop: 6
            }}>
                사업자 등록번호 278-88-02031 <br />
                대표자 : 김현명, 이지행 <br />

                주소 : 서울특별시 성동구 왕십리로 10길 6, 1204호(성수동 1가, 서울숲비즈포레) <br />
            </div>
            <div style={{
                width: "90%",
                opacity: 0.4,
                fontSize: 12,
                color: "#010608",
                fontFamily: "NotoSansCJKkr",
                marginTop: 28
            }}></div>
        </div>
    )
}

export function LateBox() {
    return (
        <div style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(1, 6, 8, 0.2)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: 440,
                height: 588,
                borderRadius: 6,
                backgroundColor: "#ffffff",
                border: "1px solid rgba(1, 6, 8, 0.2)",
            }}>
                <BsX size={24} color="#010608" style={{
                    marginTop: 8,
                    marginLeft: 8,
                }} />
                <div style={{
                    marginTop: 8,
                    marginLeft: 40,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#010608",
                }}>연체료와 미결제 금액은 무엇인가요?</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 18,
                    color: "#010608",
                    marginLeft: 40,
                    marginTop: 16,
                }}>1. 연체료란</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.5,
                    marginTop: 16,
                    marginLeft: 40,
                }}>
                    연체료는 약속된 기한까지 분할결제 금액을 납부하지 않는 <br />
                    경우 발생하는 금액입니다.(예시 : 통장 잔액 부족) <br />
                    납부일을 넘기면 자동으로 10,000원의 연체료가 발생합니다. <br />
                    연체료의 총합은 구매 금액의 25%를 초과할 수 없습니다.
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 18,
                    color: "#010608",
                    marginLeft: 40,
                    marginTop: 16,
                }}>1. 연체료란</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.5,
                    marginTop: 16,
                    marginLeft: 40,
                }}>
                    미결제 금액은 이전 차수의 분할결제에서 납부하지 않은 금액과 연체료의 합입니다. 미결제 금액은 다음 분할납부 결제일에 합산되어 자동이체 됩니다. <br />
                    예를 들어 10만원을 납부하지 못한경우 다음 결제일의 미결제 금액은 11만원(분할결제 금액 10만원 + 연체료 1만원)입니다. 따라서 다음달 결제일의 결제 금액은 21만원(다음달 분할결제 금액 10만원 + 미결제 금액 11만원)입니다.
                </div>
            </div>
        </div>
    )
}

export function LimitBox() {
    return (
        <div style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(1, 6, 8, 0.2)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: 440,
                height: 588,
                borderRadius: 6,
                backgroundColor: "#ffffff",
                border: "1px solid rgba(1, 6, 8, 0.2)",
            }}>
                <BsX size={24} color="#010608" style={{
                    marginTop: 8,
                    marginLeft: 8,
                }} />
                <div style={{
                    marginTop: 8,
                    marginLeft: 40,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 21,
                    fontWeight: "bold",
                    color: "#010608",
                }}>연체료와 미결제 금액은 무엇인가요?</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 18,
                    color: "#010608",
                    marginLeft: 40,
                    marginTop: 16,
                }}>1. 연체료란</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.5,
                    marginTop: 16,
                    marginLeft: 40,
                }}>
                    연체료는 약속된 기한까지 분할결제 금액을 납부하지 않는 <br />
                    경우 발생하는 금액입니다.(예시 : 통장 잔액 부족) <br />
                    납부일을 넘기면 자동으로 10,000원의 연체료가 발생합니다. <br />
                    연체료의 총합은 구매 금액의 25%를 초과할 수 없습니다.
                </div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 18,
                    color: "#010608",
                    marginLeft: 40,
                    marginTop: 16,
                }}>1. 연체료란</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    opacity: 0.8,
                    color: "#010608",
                    lineHeight: 1.5,
                    marginTop: 16,
                    marginLeft: 40,
                }}>
                    미결제 금액은 이전 차수의 분할결제에서 납부하지 않은 금액과 연체료의 합입니다. 미결제 금액은 다음 분할납부 결제일에 합산되어 자동이체 됩니다. <br />
                    예를 들어 10만원을 납부하지 못한경우 다음 결제일의 미결제 금액은 11만원(분할결제 금액 10만원 + 연체료 1만원)입니다. 따라서 다음달 결제일의 결제 금액은 21만원(다음달 분할결제 금액 10만원 + 미결제 금액 11만원)입니다.
                </div>
            </div>
        </div>
    )
}

export function StandardButton({ marginTop, text, onClick, state }) {
    return (
        <>
            <div onClick={onClick} style={{
                width: 440,
                paddingTop: 16,
                paddingBottom: 16,
                borderRadius: 6,
                backgroundColor: state ? "#26c1f0" : "#dbdbdb",
                alignSelf: "center",
                cursor: state ? "pointer" : "auto",
                marginTop: marginTop,

                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "NotoSansCJKkr",
                color: "#ffffff",
                textAlign: "center"
            }}>{text}</div>
        </>
    )
}

export function MStandardButton({ marginTop, text, onClick, state }) {
    return (
        <div onClick={onClick} style={{
            width: "90vw",
            paddingTop: "4vw",
            paddingBottom: "4vw",
            backgroundColor: state ? "#26c1f0" : "#dbdbdb",
            alignSelf: "center",
            cursor: state ? "pointer" : "auto",
            marginTop: marginTop,
            borderRadius: 6,

            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "NotoSansCJKkr",
            color: "#ffffff",
            textAlign: "center"
        }}>{text}</div>
    )
}

//이름 중간 마스킹하기
export function NameMask(strName) {
    if (strName.length > 2) {
        var originName = strName.split('');
        originName.forEach(function (name, i) {
            if (i === 0 || i === originName.length - 1) return;
            originName[i] = '*';
        });
        var joinName = originName.join();
        return joinName.replace(/,/g, '');
    } else {
        var pattern = /.$/; // 정규식
        return strName.replace(pattern, '*');
    }
};

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: "center";
    align-self: "center";

    width: 440px;
    margin-top: ${props => props.marginTop || 0};
    overflow: auto;
    margin-left: 20px;

    ::-webkit-scrollbar{
        display: none;
    }
`

export const MBannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: "center";
    align-self: "center";

    width: 90vw;
    margin-top: ${props => props.marginTop || 0};
    overflow: auto;
    margin-left: 5vw;

    ::-webkit-scrollbar{
        display: none;
    }
`

export function MTopBanner({ img, title, content, backgroundColor, link }) {
    return (

        <div style={{
            width: "100vw",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: 230,
        }}>
            {/* <img src={topbanner} height="250" style={{ objectFit: "cover", minWidth: 300 }} />
                <div style={{ position: "absolute", zIndex: 1, top: 0, width: "100vw", minWidth: 300, height: 250, background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))" }} /> */}
            <a href={link} target="_blank" style={{
                textDecorationLine: "none",
                WebkitAppearance: "none"
            }}>
                <div style={{
                    position: "absolute",
                    zIndex: 1,
                    top: 0,
                    width: "100vw",
                    paddingBottom: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                }}>
                    <img src={img} style={{
                        width: "100vw",
                        objectFit: "contain",
                    }} />
                </div>

            </a>
        </div>

    )
}

export function TopBanner({ img, title, content, backgroundColor, link }) {
    return (

        <div style={{
            width: 480,

            height: 300,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: backgroundColor
        }}>
            {/* vlog 리영자 디자인 */}
            {/* <img src={topbanner} height="418" style={{objectFit: "cover", minWidth: 1060}} />
                <div style={{position: "absolute", zIndex: 1, top: 0, width: "100vw", minWidth: 1060, height: 418, background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))"}} /> */}
            <a href={link} target="_blank" style={{
                textDecorationLine: "none",
                WebkitAppearance: "none"
            }}>
                <div style={{
                    width: 480,
                    height: 300,
                    paddingBottom: 62,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                }}>
                    <img src={img} alt="" style={{
                        width: 480,
                        objectFit: "contain",
                    }} />
                </div>
                {/* <div style={{
                        position: "absolute",
                        zIndex: 2,
                        top: 144,
                        width: "56vw",
                        minWidth: 1060,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            width: 445,
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#ffffff",
                            marginBottom: 20,
                        }}>{title}</div>
                        <div style={{
                            width: 300,
                            fontSize: 36,
                            fontWeight: "bold",
                            color: "#ffffff",
                        }}>{content}</div>
                    </div> */}
            </a>
        </div>

    )
}

export function InputModule({ name, value, onChange, placeholder, width, type }) {
    return (
        <>
            <input className="input-module" name={name} disabled={type === 4 ? true : false} value={value} onChange={onChange} placeholder={placeholder} style={{
                backgroundColor: type === 4 ? "#eeeeee" : "#ffffff",

                width: width - 16,
                paddingLeft: 16,
                paddingTop: 16,
                paddingBottom: 16,

                fontSize: 16,
                color: type === 4 ? "rgba(1, 6, 8, 0.6)" : "#010608",
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr",
                marginBottom: 16,
            }} />
        </>
    )
}

export function MInputModule({ name, value, onChange, placeholder, width, type }) {
    return (
        <>
            <input className="input-module" name={name} disabled={type === 4 ? true : false} value={value} onChange={onChange} placeholder={placeholder} style={{
                backgroundColor: type === 4 ? "#eeeeee" : "#ffffff",

                width: width - "4vw",
                paddingLeft: "4vw",
                paddingTop: "4vw",
                paddingBottom: "4vw",

                fontSize: 14,
                color: type === 4 ? "rgba(1, 6, 8, 0.6)" : "#010608",
                marginLeft: "5vw",
                marginRight: "5vw",
                fontFamily: "NotoSansCJKkr",
                marginBottom: "4vw",
            }} />
        </>
    )
}

export function StandardModal({ title, content, buttontext, onClick, mobile }) {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            width: mobile ? "100vw" : 480,
            height: "100vh",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)"
        }}>
            <div style={{
                width: mobile ? "75vw" : 300,
                paddingTop: mobile ? "4vw" : 16,
                backgroundColor: "#ffffff",
                borderRadius: 6,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div style={{
                    maxWidth: mobile ? "68vw" : 268,
                    textAlign: "center",
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    fontWeight: "bold",
                    color: "#010608",
                    marginBottom: mobile ? "4vw" : 16,
                }}>{title}</div>
                <div style={{
                    maxWidth: mobile ? "68vw" : 268,
                    minHeight: mobile ? "10.5vw" : 42,
                    maxHeight: mobile ? "12.5vw" : 50,
                    textAlign: "center",
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 12 : 14,
                    color: "#010608",
                    marginBottom: mobile ? "4vw" : 16,
                }}>{content}</div>
                <div onClick={onClick} style={{
                    width: mobile ? "75vw" : 300,
                    paddingTop: mobile ? "3.5vw" : 14,
                    paddingBottom: mobile ? "3.5vw" : 14,
                    backgroundColor: "#26c1f0",
                    cursor: "pointer",
                    textAlign: "center",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 12 : 14,
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                }}>{buttontext}</div>
            </div>
        </div>
    )
}

export function StandardChoiceModal({ title, content, canceltext, onCancelClick, buttontext, onClick, mobile }) {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            width: mobile ? "100vw" : 480,
            height: "100vh",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 10
        }}>
            <div style={{
                width: mobile ? "75vw" : 300,
                paddingTop: mobile ? "4vw" : 16,
                backgroundColor: "#ffffff",
                borderRadius: 6,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div style={{
                    maxWidth: mobile ? "68vw" : 268,
                    textAlign: "center",
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    fontWeight: "bold",
                    color: "#010608",
                    marginBottom: mobile ? "4vw" : 16,
                }}>{title}</div>
                <div style={{
                    maxWidth: mobile ? "68vw" : 268,
                    minHeight: mobile ? "10.5vw" : 42,
                    maxHeight: mobile ? "12.5vw" : 50,
                    textAlign: "center",
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 12 : 14,
                    color: "#010608",
                    marginBottom: mobile ? "4vw" : 16,
                }}>{content}</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",

                    width: mobile ? "75vw" : 300,
                }}>
                    <div onClick={onCancelClick} style={{
                        width: mobile ? "37.5vw" : 150,
                        paddingTop: mobile ? "3.5vw" : 14,
                        paddingBottom: mobile ? "3.5vw" : 14,
                        backgroundColor: "#f2f3f8",
                        cursor: "pointer",
                        textAlign: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: mobile ? 12 : 14,
                        color: "rgba(1, 6, 8, 0.6)",
                        borderBottomLeftRadius: 6,
                    }}>{canceltext}</div>
                    <div onClick={onClick} style={{
                        width: mobile ? " 37.5vw" : 150,
                        paddingTop: mobile ? "3.5vw" : 14,
                        paddingBottom: mobile ? "3.5vw" : 14,
                        backgroundColor: "#26c1f0",
                        cursor: "pointer",
                        textAlign: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: mobile ? 12 : 14,
                        color: "#ffffff",
                        fontWeight: "bold",
                        borderBottomRightRadius: 6,
                    }}>{buttontext}</div>
                </div>
            </div>
        </div>
    )
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function urlCheck(url){
    //url 유효성 검사
    let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    
    //올바른 url이 맞다면 해당 url로 이동
    if(regex.test(url)){
        return true
    } else {
        return false
    }
  }