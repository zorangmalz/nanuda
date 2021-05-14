import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import Slider from "react-slick";
import { BsBookmark, BsUpload } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { useHistory } from "react-router";
import googleLogin from "./googleLogin"
import GoogleLogin from 'react-google-login';
import KakaoLogin from "react-kakao-login";
import axios from "axios"
import dotenv from "dotenv"


export default function Signup() {
    const GOOGLE_APP_KEY = process.env.REACT_APP_KEY_GOOGLE
    const My_App_Key = process.env.REACT_APP_KEY


    const responseGoogle = async (response) => {
        console.log("come")
        console.log(response, "here")

        let res = await axios.post(
            "http://localhost:8000/rest-auth/google/",
            {
                params:
                {
                    code: response
                },

            },
            { withCredentials: true }
        )
        console.log(res)
        if (res.data === "success") {
            history.replace("./signupprofile")
        }
    }
    useEffect(() => {
        console.log("왜", My_App_Key, GOOGLE_APP_KEY)
    }, [])

    const kakaoResponse = async (response) => {
        // console.log("fullResponse",response)
        // console.log(response.response.access_token)
        let res = await axios.post(
            "http://localhost:8000/rest-auth/kakao/",
            {
                params:
                {
                    code: response.response.access_token
                },
            },
            { withCredentials: true }
        );
        console.log(res)
        if (res.data === "success") {
            history.replace("/signupprofile")
        }
    }
    const kakaoFail = async (res) => {
        console.log("failed")
    }
    let history = useHistory()

    const test = async () => {
        console.log("come")
        let response = await axios.get(
            "http://localhost:8000/userInfoName/",
            { withCredentials: true }
        )
        console.log(response)
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
                        paddingBottom: 20,
                    }}>
                        <Header content="회원가입" goBack={true} />
                        {/* 배너 넣어야됨 */}
                        <KakaoLogin
                            token={My_App_Key}
                            onSuccess={kakaoResponse}
                            onFailure={kakaoFail}
                            className="KakaoLogin"
                        >카카오톡으로 시작하기</KakaoLogin>
                        <a href={"https://kauth.kakao.com/oauth/authorize?client_id=4fb67e3c47027d004aa591828f76d364&redirect_uri=http://localhost:8000/rest-auth/kakao&response_type=code"} target="_blank">
                            <div style={{
                                marginLeft: 20,
                                marginTop: 32,
                                width: 440,

                                paddingTop: 15,
                                paddingBottom: 15,
                                backgroundColor: "#f4e34d",
                                borderRadius: 6,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr"
                            }}>
                                카카오톡으로 시작하기
                              </div>
                        </a>
                        <div style={{
                            marginLeft: 20,
                            marginTop: 16,
                            width: 440,

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#f4e34d",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            네이버로 시작하기
                              </div>
                        <div onClick={test} style={{
                            marginLeft: 20,
                            marginTop: 16,
                            width: 440,

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#4a67ad",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            페이스북으로 시작하기
                              </div>
                        <div onClick={responseGoogle} style={{
                            marginLeft: 20,
                            marginTop: 16,
                            width: 440,

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#c45545",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            구글로 시작하기
                              </div>
                        <GoogleLogin
                            clientId={GOOGLE_APP_KEY}
                            buttonText="구글로 시작하기"
                            accessType="offline"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}

                        />
                        <div style={{
                            width: 440,
                            paddingTop: 32,
                            paddingBottom: 30,
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: 200,
                            backgroundColor: "#f2f3f8"
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
                                        color: "#051a1a"
                                    }}>고객센터 (카카오톡 채널 상담)</div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSizeAdjust: 12,
                                        opacity: 0.6,
                                        color: "#202426",
                                        lineHeight: 1.5,
                                        marginTop: 8
                                    }}>
                                        운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                                            점심시간 평일 12:30 ~ 1:30
                                        </div>
                                </div>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                    backgroundColor: "#fff500"
                                }} />
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
                                        color: "#051a1a",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>서비스 이용안내</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>공지사항</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>나누다는 어떤 서비스인가요?</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>자주 묻는 질문</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

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
                                        color: "#051a1a",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>서비스 정책</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>이용약관</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>개인정보 처리약관</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>마케팅수신 약관</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

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
                                    backgroundColor: "#051a1a",
                                    marginRight: 16
                                }} />
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 32
                            }}>
                                <div style={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: "#000000",
                                    color: "#ffffff"
                                }}>로고</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 21,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginLeft: 16
                                }}>나누다</div>
                            </div>
                            <div style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#051a1a",
                                opacity: 0.6,
                                fontFamily: "NotoSansCJKkr",
                                marginTop: 12
                            }}>(주) 나누다 홀딩스</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.6,
                                lineHeight: 1.8,
                                color: "#051a1a",
                                marginTop: 8
                            }}>
                                사업자 등록번호 123-12-12345 <br />
                                    대표자 : 김현명, 이지행 <br />
                                    통신판매업 신고번호 : 제2021-서울종로-2302호 <br />
                                    주소 : 서울특별시 종로구 성균관로 35길 38  킹고 스타트업 스페이스 306호 <br />
                            </div>
                            <div style={{
                                width: 440,
                                opacity: 0.4,
                                fontSize: 12,
                                color: "#051a1a",
                                fontFamily: "NotoSansCJKkr",
                                marginTop: 32
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.</div>
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
                    height: "100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "flex-start",

                        width: "100%",
                        height: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <MHeader content="회원가입" goBack={true} />
                        <div style={{
                            marginLeft: 20,
                            marginTop: 32,
                            width: "90%",

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#f4e34d",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            카카오톡으로 시작하기
                              </div>
                        <div style={{
                            marginLeft: 20,
                            marginTop: 16,
                            width: "90%",

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#f4e34d",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            네이버로 시작하기
                              </div>
                        <div style={{
                            marginLeft: 20,
                            marginTop: 16,
                            width: "90%",

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#4a67ad",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            페이스북으로 시작하기
                              </div>
                        <div style={{
                            marginLeft: 20,
                            marginTop: 16,
                            width: "90%",

                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#c45545",
                            borderRadius: 6,
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            구글로 시작하기
                              </div>
                        <div style={{
                            width: "90%",
                            paddingTop: 32,
                            paddingBottom: 30,
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: 200,
                            backgroundColor: "#f2f3f8"
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
                                        color: "#051a1a"
                                    }}>고객센터 (카카오톡 채널 상담)</div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSizeAdjust: 12,
                                        opacity: 0.6,
                                        color: "#202426",
                                        lineHeight: 1.5,
                                        marginTop: 8
                                    }}>
                                        운영시간  평일 11:00 ~ 18:00 (토 -일, 공휴일 휴무) <br />
                                            점심시간 평일 12:30 ~ 1:30
                                        </div>
                                </div>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                    backgroundColor: "#fff500"
                                }} />
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
                                        color: "#051a1a",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>서비스 이용안내</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>공지사항</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>나누다는 어떤 서비스인가요?</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>자주 묻는 질문</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

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
                                        color: "#051a1a",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>서비스 정책</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>이용약관</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>개인정보 처리약관</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

                                        cursor: "pointer",
                                        marginTop: 8,
                                    }}>마케팅수신 약관</div>
                                    <div style={{
                                        fontSize: 12,
                                        opacity: 0.8,
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#202426",

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
                                    backgroundColor: "#051a1a",
                                    marginRight: 16
                                }} />
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 32
                            }}>
                                <div style={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: "#000000",
                                    color: "#ffffff"
                                }}>로고</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 21,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    marginLeft: 16
                                }}>나누다</div>
                            </div>
                            <div style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#051a1a",
                                opacity: 0.6,
                                fontFamily: "NotoSansCJKkr",
                                marginTop: 12
                            }}>(주) 나누다 홀딩스</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.6,
                                lineHeight: 1.8,
                                color: "#051a1a",
                                marginTop: 8
                            }}>
                                사업자 등록번호 123-12-12345 <br />
                                    대표자 : 김현명, 이지행 <br />
                                    통신판매업 신고번호 : 제2021-서울종로-2302호 <br />
                                    주소 : 서울특별시 종로구 성균관로 35길 38  킹고 스타트업 스페이스 306호 <br />
                            </div>
                            <div style={{
                                width: "90%",
                                opacity: 0.4,
                                fontSize: 12,
                                color: "#051a1a",
                                fontFamily: "NotoSansCJKkr",
                                marginTop: 32
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.</div>
                        </div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}
