import React,{useState,useEffect} from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import point from "../images/point.png"
import { useHistory } from "react-router";

export default function SingupComplete() {
    let history = useHistory()

    const [userData,setUserData]=useState("")
    const [safariOrNot,setSafariOrNot]=useState(true)
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;

function isSafariBrowser(){
    if (is_safari){
        if (is_chrome){  // Chrome seems to have both Chrome and Safari userAgents
            setSafariOrNot(true)
            console.log("this is chrome")}
        else{
     setSafariOrNot(false)
     console.log("this is safari")}
    }
    
}
useEffect(()=>{
    isSafariBrowser()
},[])
    useEffect(()=>{
        var code = document.location.href.split("complete")
        if(code[1].length>2){
            var realCode=code[1].split("EncodeData=")
            var message = realCode[1].replace(/%2B/gi,"+")
            // if(safariOrNot){
                fetch("https://wishdeal.link/checkplus_success", {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    method: "POST",    
                    body:new URLSearchParams({
                        EncodeData:message
                    })
                })
                .then(res => res.json())
                    .then(res => {
                    console.log(res)
                      setUserData(res)
                      
                    }).catch(err => {
                        console.log(err)
                    })
                // }else{
                //     console.log("GET!@@@")
                //     fetch("https://wishdeal.link/checkplus_success?EncodeData="+message, {
                //         headers: {
                //             'Content-Type': 'application/x-www-form-urlencoded',
                //             'Accept': 'application/json'
                //         },
                //         method: "GET",    
                       
                //     })
                //     .then(res => res.json())
                //         .then(res => {
                //           setUserData(res)
                          
                //         }).catch(err => {
                //             console.log(err)
                //         })
                
                // }
                
         
        }
    },[])

    
    async function send() {
        var realEmail=window.localStorage.getItem("email")
        var realuid=window.localStorage.getItem("uid")
        console.log(realEmail,realuid)
        await fetch("https://haulfree.link/niceMain/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                params:
                {
                    gender:parseInt(userData.gender),
                    name:userData.name,
                    birthdate:userData.birthdate,
                    nationalinfo:userData.nationalinfo,
                    mobileno:userData.mobileno,
                    mobileco:userData.mobileco,
                    email:JSON.parse(realEmail).email,
                    uid: String(JSON.parse(realuid).uid)
                },
            })

        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.data === true) {
console.log("true")                }
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(()=>{
        if(userData){
            console.log(userData)
            send()
        }
    },[userData])

    function closewindow(){
        window.close()
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
                        <Header content="회원가입 완료" goBack={true} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            lineHeight: 1.5,
                            alignSelf: "center",
                            marginBottom: 32,
                        }}>
                            회원가입을 축하합니다! <br />
                                작은 선물을 준비했어요.
                            </div>
                        <img
                            src={point}
                            alt="포인트"
                            style={{
                                alignSelf: "center",
                            }}
                        />
                        <StandardButton
                            text="1/n 시작하기"
                            marginTop={32}
                            onClick={closewindow}
                            state={true}
                            marginBottom={40}
                        />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="회원가입 완료" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#010608",

                        marginTop: "8vw",
                        lineHeight: 1.5,
                        alignSelf: "center",
                        marginBottom: "8vw",
                    }}>
                        회원가입을 축하합니다! <br />
                                작은 선물을 준비했어요.
                            </div>
                    <img
                        src={point}
                        alt="포인트"
                        style={{
                            alignSelf: "center",
                            width: "70vw",
                        }}
                    />
                    <MStandardButton
                        text="1/n 시작하기"
                        marginTop={"8vw"}
                        onClick={closewindow}
                        state={true}
                        marginBottom={"10vw"}
                    />
                </div>
            </Mobile>
        </>
    )
}