import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import { BottomTag, Header, MBottomTag, MHeader } from "../Style";
import { useHistory } from "react-router";
import KakaoLogin from "react-kakao-login";
import axios from "axios"
import styled from "styled-components"

const GOOGLE_APP_KEY = process.env.REACT_APP_KEY_GOOGLE
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
    const responseGoogle = async (response) => {
        console.log("come")
        console.log(response, "here")

        let res = await axios.post(
            "http://15.164.94.36:8000/rest-auth/google/",
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
        console.log("fullResponsㄴe",response)
        console.log(response.response.access_token)
        fetch("https://haulfree.link/rest-auth/kakao/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials:"include",
            body:JSON.stringify({
                params:
                {
                    code: response.response.access_token
                },
            })

        })
            
            .then(response => {
                console.log(response)
              if(response.data==="success"){
                  history.replace("/signupprofile")
              }
              
            }).catch(err=>{
                console.log(err)
            })
        // let res = await axios.post(
        //     "http://15.164.94.36:8000/rest-auth/kakao/",
        //     {
        //         params:
        //         {
        //             code: response.response.access_token
        //         },
        //     },
        //     { withCredentials: true }
        // );
        // console.log(res)
        // if (res.data === "success") {
        //     history.replace("/signupprofile")
        // }
    }
    const kakaoFail = async (res) => {
        console.log("failed")
    }
    let history = useHistory()

    const test = async () => {
        console.log("come")
        let response = await axios.get(
            "http://15.164.94.36:8000/userInfoName/",
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
                        alignItems: "center",
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%"
                        }}>
                            <Header content="회원가입" goBack={true} />
                            {/* 배너 넣어야됨 */}
                            <KaKaoBtn
                            style={{width:440, fontSize:18,height:56,color:"#051a1a"}}
                                token={My_App_Key}
                                onSuccess={kakaoResponse}
                                onFailure={kakaoFail}
                                className="KaKaoBtn"
                            >카카오톡으로 시작하기</KaKaoBtn>
                        </div>
                        <BottomTag marginBottom={0} />
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
                            <KakaoLogin
                                style={{
                                    width: "90vw",
                                    minHeight: 60,
                                    paddingTop: 16,
                                    paddingBottom: 16,
                                    backgroundColor: "#f4e34d",
                                    color: "#051a1a",
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
                        <MBottomTag marginBottom={0} marginTop={"40vw"} />
                    </div>
                </div>
            </Mobile>
        </>
    )
}
