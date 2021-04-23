import React, { useState, useReducer } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md"

export default function ProfileEdit() {
    let history = useHistory()
    const onPhoneVerify = () => { }
    const onJobVerify = () => { }
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
                            justifyContent: "space-between",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                            }}>
                                <Header content="내 정보 관리" />
                                <FaUserCircle
                                    size={72}
                                    color="#dbdbdb"
                                    style={{
                                        marginTop: 32,
                                        marginBottom: 32,
                                        alignSelf: "center",
                                        cursor: "pointer"
                                    }}
                                />
                                <div style={{
                                    marginLeft: 20,

                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                }}>
                                    <Profile
                                        title="이름"
                                        content="김현명"
                                        marginRight={20}
                                        width={90}
                                    />
                                    <Profile
                                        title="성별"
                                        content="남자"
                                        marginRight={0}
                                        width={90}
                                    />
                                </div>
                                <Profile
                                    title="생년월일"
                                    content="1995-12-28"
                                    marginRight={0}
                                    width={440}
                                />
                                <ProfileWithButton
                                    title="핸드폰 번호"
                                    content="010-4337-6607"
                                    width={440}
                                    buttonText="재인증"
                                    onClick={onPhoneVerify}
                                />
                                <ProfileWithButton
                                    title="직업"
                                    content="대학생"
                                    width={440}
                                    buttonText="인증하기"
                                    onClick={onJobVerify}
                                />
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    fontFamily: "NotoSansCJKkr",
                                    color: "#202426",
                                    marginLeft: 20,
                                    marginBottom: 16,
                                }}>거주지 주소</div>
                                <div onClick={() => history.push("/profileaddressedit")} style={{
                                    width: 408,
                                    padding: 16,
                                    alignSelf: "center",
                                    border: "1px solid rgba(5, 26, 26, 0.2)",
                                    borderRadius: 6,

                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    cursor: "pointer",
                                }}>
                                    <div style={{
                                        width: 364,
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 18,
                                        color: "#202426",
                                        lineHeight: 1.5,
                                        marginRight: 20,
                                    }}>서울특별시 서대문구 북아현로 1길 17 이편한세상 203동 2104호</div>
                                    <MdKeyboardArrowRight
                                        size={24}
                                        color="rgba(5, 26, 26, 0.4)"
                                    />
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginBottom: 40,
                                marginLeft: 20,
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 14,
                                    color: "#202426",
                                    marginBottom: 8,
                                    cursor: "pointer",
                                    textDecorationLine: "underline"
                                }}>로그아웃</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 14,
                                    color: "#202426",
                                    cursor: "pointer",
                                    textDecorationLine: "underline"
                                }}>회원 탈퇴</div>
                            </div>
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
                        <Header content="내 정보 관리" />
                        <FaUserCircle
                            size={60}
                            color="#dbdbdb"
                            style={{
                                marginTop: 28,
                                marginBottom: 28,
                                alignSelf: "center",
                                cursor: "pointer"
                            }}
                        />
                        <div style={{
                            marginLeft: "5vw",

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                        }}>
                            <MProfile
                                title="이름"
                                content="김현명"
                                marginRight={10}
                                width={80}
                            />
                            <MProfile
                                title="성별"
                                content="남자"
                                marginRight={0}
                                width={80}
                            />
                        </div>
                        <MProfile
                            title="생년월일"
                            content="1995-12-28"
                            marginRight={0}
                            width={"90vw"}
                        />
                        <MProfileWithButton
                            title="핸드폰 번호"
                            content="010-4337-6607"
                            width={"90vw"}
                            buttonText="재인증"
                            onClick={onPhoneVerify}
                        />
                        <MProfileWithButton
                            title="직업"
                            content="대학생"
                            width={"90vw"}
                            buttonText="인증하기"
                            onClick={onJobVerify}
                        />
                        <div style={{
                            fontSize: 14,
                            opacity: 0.6,
                            fontFamily: "NotoSansCJKkr",
                            color: "#202426",
                            marginLeft: "5vw",
                            marginBottom: 12,
                        }}>거주지 주소</div>
                        <div onClick={() => history.push("/profileaddressedit")} style={{
                            width: "82vw",
                            padding: "4vw",
                            alignSelf: "center",
                            border: "1px solid rgba(5, 26, 26, 0.2)",
                            borderRadius: 6,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            cursor: "pointer",
                        }}>
                            <div style={{
                                width: "70vw",
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#202426",
                                lineHeight: 1.5,
                                marginRight: 10,
                            }}>서울특별시 서대문구 북아현로 1길 17 이편한세상 203동 2104호</div>
                            <MdKeyboardArrowRight
                                size={20}
                                color="rgba(5, 26, 26, 0.4)"
                            />
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginBottom: 20,
                        marginLeft: "5vw",
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 12,
                            color: "#202426",
                            marginBottom: 8,
                            cursor: "pointer",
                            textDecorationLine: "underline"
                        }}>로그아웃</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            opacity: 0.6,
                            fontSize: 12,
                            color: "#202426",
                            cursor: "pointer",
                            textDecorationLine: "underline"
                        }}>회원 탈퇴</div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}

const Profile = ({ title, content, marginRight, width }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: 8,
            marginBottom: 16,
            width: width,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            marginRight: marginRight,
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                opacity: 0.6,
                marginBottom: 8
            }}>{title}</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
            }}>{content}</div>
        </div>
    )
}

const MProfile = ({ title, content, marginRight, width }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: 8,
            marginBottom: 12,
            width: width,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            marginRight: marginRight,
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                opacity: 0.6,
                marginBottom: 8
            }}>{title}</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",
            }}>{content}</div>
        </div>
    )
}

const ProfileWithButton = ({ title, content, width, buttonText, onClick }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: 8,
            marginBottom: 16,
            width: width,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                opacity: 0.6,
                marginBottom: 8
            }}>{title}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202426",
                }}>{content}</div>
                <div onClick={onClick} style={{
                    width: 108,
                    paddingTop: 7,
                    paddingBottom: 7,
                    borderRadius: 6,
                    backgroundColor: "#051a1a",

                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#ffffff",
                    textAlign: "center",
                    cursor: "pointer"
                }}>{buttonText}</div>
            </div>
        </div>
    )
}

const MProfileWithButton = ({ title, content, width, buttonText, onClick }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: 8,
            marginBottom: 12,
            width: width,
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                opacity: 0.6,
                marginBottom: 8
            }}>{title}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#202426",
                }}>{content}</div>
                <div onClick={onClick} style={{
                    width: 90,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 6,
                    backgroundColor: "#051a1a",

                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#ffffff",
                    textAlign: "center",
                    cursor: "pointer"
                }}>{buttonText}</div>
            </div>
        </div>
    )
}