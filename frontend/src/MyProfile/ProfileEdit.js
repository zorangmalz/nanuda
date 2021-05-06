import React, { useState } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md"
import { BiPlusCircle } from "react-icons/bi";

export default function ProfileEdit() {
    let history = useHistory()
    const onPhoneVerify = () => { }
    const onJobVerify = () => { }
    const [basicAddress, setBasicAddress] = useState(true)
    const item = {
        name: "김현명",
        addressNum: "03770",
        address: "서울 특별시 서대문구 북아현로 1길 17",
        addressDetail: "e편한세상 203동 2104호",
        phoneNumber: "010-4337-6607",
        request: "배송 요청사항: 집앞"
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
                                <Header content="내 정보 관리" goBack={true} />
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
                                }}>기본 배송지</div>
                                {basicAddress ? 
                                    <BasicAddress 
                                        item={item}
                                    />
                                    :
                                    <NoAddress />
                                }
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
                                <div onClick={() => history.push("/profiledelete")} style={{
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
                        <MHeader content="내 정보 관리" goBack={true} />
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
                        }}>기본 배송지</div>
                        {basicAddress ?
                            <MBasicAddress item={item} />
                            :
                            <MNoAddress />
                        }
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
            border: "1px solid #2dd9d3"
        }}>
            <div>
                <div style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.name}</div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressNum}</div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.address}</div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressDetail}</div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.phoneNumber}</div>
                <div style={{
                    fontSize: 16,
                    color: "#202426",
                    fontFamily: "NotoSansCJKkr"
                }}>{item.request}</div>
            </div>
            <MdKeyboardArrowRight 
                size={24}
                color="rgba(5, 26, 26, 0.2)"
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
            border: "1px solid #2dd9d3"
        }}>
            <div>
                <div style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.name}</div>
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressNum}</div>
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.address}</div>
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.addressDetail}</div>
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    marginBottom: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>{item.phoneNumber}</div>
                <div style={{
                    fontSize: 14,
                    color: "#202426",
                    fontFamily: "NotoSansCJKkr"
                }}>{item.request}</div>
            </div>
            <MdKeyboardArrowRight 
                size={20}
                color="rgba(5, 26, 26, 0.2)"
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
            border: "1px solid rgba(5, 26, 26, 0.2)",
            cursor: "pointer",
            borderRadius: 6,
            marginTop: 16,
        }}>
            <BiPlusCircle 
                size={32}
                color="rgba(5, 26, 26, 0.6)"
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                opacity: 0.6,
                color: "#202426",
                marginTop: 8,
            }}>빠른 결제를 위해 기본 배송지를 설정해주세요.</div>
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
            border: "1px solid rgba(5, 26, 26, 0.2)",
            cursor: "pointer",
            borderRadius: 6,
            marginTop: "4vw",
        }}>
            <BiPlusCircle 
                size={28}
                color="rgba(5, 26, 26, 0.6)"
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                opacity: 0.6,
                color: "#202426",
                marginTop: "2vw",
            }}>빠른 결제를 위해 기본 배송지를 설정해주세요.</div>
        </div>
    )
}