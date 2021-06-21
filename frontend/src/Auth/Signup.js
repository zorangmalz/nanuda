import React from "react";
import { Default, Mobile } from "../App";
import { BottomTag, Header, MBottomTag, MHeader } from "../Style";
import { useHistory } from "react-router";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components"
import Slider from "react-slick"
import bannerOne from "../images/bannerOne.png"
import bannerTwo from "../images/bannerTwo.png"

const My_App_Key = process.env.REACT_APP_KEY

const KaKaoBtn = styled(KakaoLogin)`
    display: inline-block;
    padding: 0;
    width: 440px;
    height: 56px;
    line-height: 44px;
    color: #783c00;
    background-color: #f4e34d;
    border: 1px solid transparent;
    border-radius: 6px;
    
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin-top:32px;
    margin-bottom:492px;
    &:hover {
      box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }
`;

export default function Signup() {
    const kakaoResponse = async (response) => {
        await fetch("https://haulfree.link/rest-auth/kakao/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                params:
                {
                    code: response.response.access_token
                },
            })
        })
        .then(response=>response.json())
            .then(response => {
                if(response.result==="true"){
                    history.replace("/")
                }else{
                    history.push("/signupprofile",{uid:response.uid,email:response.email})
                }
            }).catch(err => {
                console.log(err)
            })
    }
    const kakaoFail = async (res) => {
    }
    let history = useHistory()
    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                        width: 480,
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="회원가입" goBack={true} />
                        <div style={{
                            width: 480,
                            height: 300,
                            marginBottom: 16,
                        }}>
                            <Slider dots={false} arrows={false} autoplaySpeed={3000} autoplay={true} >
                                <div>
                                    <img alt="bannerOne" src={bannerOne} onClick={() => window.open('https://www.notion.so/haulfree/HaulFree-6a3f1f7d342d493193ac59d4319c2100', '_blank')} style={{
                                        width: 480,
                                        cursor: "pointer",
                                    }} />
                                </div>
                                <div>
                                    <img src={bannerTwo} alt="bannerTwo" onClick={() => window.open('https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934', '_blank')} style={{
                                        width: 480,
                                        cursor: "pointer",
                                    }} />
                                </div>
                            </Slider>
                        </div>
                        <KaKaoBtn
                            style={{ width: 440, fontSize: 18, height: 56, color: "#010608", marginBottom: 0 }}
                            token={My_App_Key}
                            onSuccess={kakaoResponse}
                            onFailure={kakaoFail}
                            className="KaKaoBtn"
                        >카카오톡으로 시작하기</KaKaoBtn>
                        <BottomTag marginBottom={0} marginTop={80} />
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
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: "100%",
                        height: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%"
                        }}>
                            <MHeader content="회원가입" goBack={true} />
                            <div style={{ width: "100vw", marginBottom: "3vw" }}>
                                <Slider dots={false} arrows={false} autoplaySpeed={3000} autoplay={true} >
                                    <div>
                                        <img alt="bannerOne" src={bannerOne} onClick={() => window.open('https://www.notion.so/haulfree/HaulFree-6a3f1f7d342d493193ac59d4319c2100', '_blank')} style={{
                                            width: "100vw",
                                            cursor: "pointer",
                                        }} />
                                    </div>
                                    <div>
                                        <img src={bannerTwo} alt="bannerTwo" onClick={() => window.open('https://www.notion.so/ydot/1-2021-06-03-fc5701e698f24bb7ab5cb9068c1e2934', '_blank')} style={{
                                            width: "100vw",
                                            cursor: "pointer",
                                        }} />
                                    </div>
                                </Slider>
                            </div>
                            <KakaoLogin
                                style={{
                                    width: "90vw",
                                    minHeight: 60,
                                    paddingTop: 16,
                                    paddingBottom: 16,
                                    backgroundColor: "#f4e34d",
                                    color: "#010608",
                                    border: "1px solid transparent",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    marginTop: "8vw",
                                    fontFamily: "NotoSansCJKkr",
                                    WebkitAppearance: "none",
                                    borderRadius: 6,
                                }}
                                token={My_App_Key}
                                onSuccess={kakaoResponse}
                                onFail={kakaoFail}
                            >카카오톡으로 시작하기</KakaoLogin>
                        </div>
                        <MBottomTag marginBottom={0} marginTop={"20vw"} />
                    </div>
                </div>
            </Mobile>
        </>
    )
}
