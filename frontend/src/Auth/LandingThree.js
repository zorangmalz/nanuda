import React,{useReducer} from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BsHeart } from "react-icons/bs"
import {IoChatbubbleOutline} from "react-icons/io5"

export default function LandingThree() {

   
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
                                누다와 함께
                            </div>
                            <div style={{marginLeft:5,color:"#2dd9d3", fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>똑똑한 소비생활</div>
                        
                            </div>
                            <div style={{
                                marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>시작해볼까요?</div>
                            </div>
                            <div style={{marginTop:32,marginLeft:20,display:"flex",flexDirection:"row"}}>
                            <div style={{fontSize:32,fontWeight:500}}>100,000 명</div>
                            <div style={{marginTop:7,fontSize:24}}>의 사람들이</div>
                            </div>
                            <div style={{marginTop:32,marginLeft:20,display:"flex",flexDirection:"row"}}>
                            <div style={{fontSize:32,fontWeight:500}}>200,000 개</div>
                            <div style={{marginTop:7,fontSize:24}}>의 상품을</div>
                            </div>
                            <div style={{marginTop:32,marginLeft:20,display:"flex",flexDirection:"row"}}>
                            <div style={{fontSize:32,fontWeight:500}}>똑똑하게 분할 결제</div>
                            <div style={{marginTop:7,fontSize:24,fontWeight:"normal"}}>하고</div>
                            </div>
                            <div style={{marginTop:7,marginLeft:20,fontSize:24}}>있습니다</div>
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
                                누다와 함께
                            </div>
                            <div style={{marginLeft:5,color:"#2dd9d3", fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>똑똑한 소비생활</div>
                        
                            </div>
                            <div style={{
                                marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>시작해볼까요?</div>
                            </div>
                            <div style={{marginTop:32,marginLeft:20,display:"flex",flexDirection:"row"}}>
                            <div style={{fontSize:32,fontWeight:500}}>100,000 명</div>
                            <div style={{marginTop:7,fontSize:24}}>의 사람들이</div>
                            </div>
                            <div style={{marginTop:32,marginLeft:20,display:"flex",flexDirection:"row"}}>
                            <div style={{fontSize:32,fontWeight:500}}>200,000 개</div>
                            <div style={{marginTop:7,fontSize:24}}>의 상품을</div>
                            </div>
                            <div style={{marginTop:32,marginLeft:20,display:"flex",flexDirection:"row"}}>
                            <div style={{fontSize:32,fontWeight:500}}>똑똑하게 분할 결제</div>
                            <div style={{marginTop:7,fontSize:24,fontWeight:"normal"}}>하고</div>
                            </div>
                            <div style={{marginTop:7,marginLeft:20,fontSize:24}}>있습니다</div>
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
                            }}>시작하기</div></div>                        </div>
                    
                
            </Mobile>
        </>
    )
}