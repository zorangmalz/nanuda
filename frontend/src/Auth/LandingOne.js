import React,{useReducer} from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BsHeart } from "react-icons/bs"
import {IoChatbubbleOutline} from "react-icons/io5"

export default function LandingOne() {

   
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

                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="나누다 시작하기" />
                            <div style={{

marginTop:32,
marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"
                            }}>
                                사고싶은게 있는데  
                            </div>
                            <div style={{marginLeft:5,color:"#2dd9d3", fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>너무 큰 금액</div>
                            </div>
                            <div style={{
                                marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",color:"#2dd9d3",fontFamily:"NotoSansCJKkr"
                            }}>
                                때문에 고민  
                            </div>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>한 경험이 있나요?</div>
                            </div>

                            <div style={{marginTop:32,marginLeft:172,backgroundColor:"#f2f3f8",width:288,height:80,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>아.. 노트북이 꼭 필요한데 ㅠㅠ</div>
<div style={{marginTop:4,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>지금 사면 생활비가 너무 부족해... </div>
                            </div>
                            <div style={{border:"solid 1px rgba(0,0,0,0.12)",marginTop:32,marginLeft:20,backgroundColor:"#ffffff",width:288,height:56,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>그냥 나눠서 결제하면 되는거 아니야?</div>

                            </div>
                            <div style={{marginTop:32,marginLeft:172,backgroundColor:"#f2f3f8",width:288,height:80,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>신용카드도 없는데 어떻게 그렇게 하는</div>
<div style={{marginTop:4,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>거야? </div>
                            </div>
                            <div style={{border:"solid 1px rgba(0,0,0,0.12)",marginTop:32,marginLeft:20,backgroundColor:"#ffffff",width:288,height:80,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>나누다에서 나눠서 결제해!</div>
<div style={{marginTop:4,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>할부 이자 없이 구매할 수 있어 ㅎㅎ </div>
                            </div>
                            <div style={{width:440,marginLeft:20,marginTop:32,height:56,backgroundColor:"#D4F7F6",boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)",borderRadius:10}}>
                                <div style={{marginTop:20,marginLeft:16,fontWeight:"bold",fontSize:16,opacity:1,color:"#202426",fontFamily:"NotoSansCJKkr"}}>지금 가입하고 신용등급, 할부이자 상관없이 분할 결제해봐!</div>
                            </div>
                            <div style={{
                                position:"fixed",
                                zIndex:5,
                                bottom:76,
                                borderRadius: 8,
                                width: 440,
                                height: 56,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 52,
                                backgroundColor: "#2dd9d3",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>시작하기</div></div>
                        </div>
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
                            <Header content="나눠산 사람들" />
                          
                            <div style={{

marginTop:32,
marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"
                            }}>
                                사고싶은게 있는데  
                            </div>
                            <div style={{marginLeft:5,color:"#2dd9d3", fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>너무 큰 금액</div>
                            </div>
                            <div style={{
                                marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",color:"#2dd9d3",fontFamily:"NotoSansCJKkr"
                            }}>
                                때문에 고민  
                            </div>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>한 경험이 있나요?</div>
                            </div>
                            <div style={{marginTop:32,marginRight:20,backgroundColor:"#f2f3f8",width:288,height:80,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>아.. 노트북이 꼭 필요한데 ㅠㅠ</div>
<div style={{marginTop:4,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>지금 사면 생활비가 너무 부족해... </div>
</div>
                            <div style={{border:"solid 1px rgba(0,0,0,0.12)",marginTop:32,marginLeft:20,backgroundColor:"#ffffff",width:288,height:56,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>그냥 나눠서 결제하면 되는거 아니야?</div>

                            </div>
                            <div style={{marginTop:32,marginLeft:172,backgroundColor:"#f2f3f8",width:288,height:80,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>신용카드도 없는데 어떻게 그렇게 하는</div>
<div style={{marginTop:4,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>거야? </div>
                            </div>
                            <div style={{border:"solid 1px rgba(0,0,0,0.12)",marginTop:32,marginLeft:20,backgroundColor:"#ffffff",width:288,height:80,borderRadius:10,boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)"}}>
<div style={{marginTop:20,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>나누다에서 나눠서 결제해!</div>
<div style={{marginTop:4,marginLeft:16,fontSize:16,fontFamily:"NotoSansCJKkr"}}>할부 이자 없이 구매할 수 있어 ㅎㅎ </div>
                            </div>
                            <div style={{width:"100%",marginLeft:20,marginTop:32,height:56,backgroundColor:"#D4F7F6",boxShadow:"0 3px 6px 0 rgba(38, 37, 37, 0.12)",borderRadius:10}}>
                                <div style={{marginTop:20,marginLeft:16,fontWeight:"bold",fontSize:16,opacity:1,color:"#202426",fontFamily:"NotoSansCJKkr"}}>지금 가입하고 신용등급, 할부이자 상관없이 분할 결제해봐!</div>
                            </div>
                            <div style={{
                                position:"fixed",
                                zIndex:5,
                                bottom:76,
                                borderRadius: 8,
                                width: "90%",
                                height: 56,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 52,
                                backgroundColor: "#2dd9d3",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}><div style={{
                                color: "#ffffff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>시작하기</div></div>

                        </div>
                    
                
            </Mobile>
        </>
    )
}