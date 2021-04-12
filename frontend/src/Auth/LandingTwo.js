import React,{useReducer} from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header } from "../Style";
import { BsHeart } from "react-icons/bs"
import {IoChatbubbleOutline} from "react-icons/io5"

export default function LandingTwo() {

   
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
                                누다에서
                            </div>
                            <div style={{marginLeft:5,color:"#2dd9d3", fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>원하는 기간을 선택</div>
                            
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"
                            }}>
                                하고
                            </div>
                            </div>
                            <div style={{
                                marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",color:"#2dd9d3",fontFamily:"NotoSansCJKkr"
                            }}>
간편하게 분할결제하세요                            </div>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>!</div>
                            </div>
<div style={{marginTop:32,marginLeft:20,fontSize:21,fontWeight:"bold"}}>1. 원하는 상품을 고르고!</div>
                        <div style={{marginTop:16,marginLeft:20,backgroundColor:"#f2f3f8",width:440,height:100,borderRadius:6}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{}}>아이콘 자리</div>
                            
                            <div style={{display:"flex",flexDirection:"column", marginLeft:32,marginTop:20, fontSize:18,fontWeight:500}}>
                                <div>지금 사기엔 비싼 노트북</div>
                                <div style={{marginTop:8,color:"#f72b2b"}}>가격 : 200만원</div>
                            </div>
                            </div>   
                            </div>

                            <div style={{marginTop:32,marginLeft:20,fontSize:21,fontWeight:"bold"}}>2. 분할 결제 옵션 선택하면</div>
                        <div style={{marginTop:16,marginLeft:20,backgroundColor:"#f2f3f8",width:440,height:100,borderRadius:6}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{}}>아이콘 자리</div>
                            
                            <div style={{display:"flex",flexDirection:"column", marginLeft:32,marginTop:20, fontSize:18,fontWeight:500}}>
                                <div>3개월 분할결제 선택 후 25% 결제</div>
                                <div style={{marginTop:8,color:"#2554d5"}}>첫 결제금 : 50 만원</div>
                            </div>
                            </div>   
                            </div>

                            <div style={{marginTop:32,marginLeft:20,fontSize:21,fontWeight:"bold"}}>3. 단돈 50만원에 획득!</div>
                        <div style={{marginTop:16,marginLeft:20,backgroundColor:"#f2f3f8",width:440,height:100,borderRadius:6}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{}}>아이콘 자리</div>
                            
                            <div style={{display:"flex",flexDirection:"column", marginLeft:32,marginTop:37, fontSize:18,fontWeight:"bold"}}>
                                <div>[Web 발신] 택배가 도착했습니다.</div>
                                
                            </div>
                            </div>   
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
                                누다에서
                            </div>
                            <div style={{marginLeft:5,color:"#2dd9d3", fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>원하는 기간을 선택</div>
                            
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"
                            }}>
                                하고
                            </div>
                            </div>
                            <div style={{
                                marginLeft:20,
                                display:"flex",
                                flexDirection:"row"
                            }}>
                            <div style={{fontSize:24,fontWeight:"bold",color:"#2dd9d3",fontFamily:"NotoSansCJKkr"
                            }}>
간편하게 분할결제하세요                            </div>
                            <div style={{fontSize:24,fontWeight:"bold",fontFamily:"NotoSansCJKkr"}}>!</div>
                            </div>
<div style={{marginTop:32,marginLeft:20,fontSize:21,fontWeight:"bold"}}>1. 원하는 상품을 고르고!</div>
                        <div style={{marginTop:16,marginLeft:20,backgroundColor:"#f2f3f8",width:"90%",height:100,borderRadius:6}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{}}>아이콘 자리</div>
                            
                            <div style={{display:"flex",flexDirection:"column", marginLeft:32,marginTop:20, fontSize:18,fontWeight:500}}>
                                <div>지금 사기엔 비싼 노트북</div>
                                <div style={{marginTop:8,color:"#f72b2b"}}>가격 : 200만원</div>
                            </div>
                            </div>   
                            </div>

                            <div style={{marginTop:32,marginLeft:20,fontSize:21,fontWeight:"bold"}}>2. 분할 결제 옵션 선택하면</div>
                        <div style={{marginTop:16,marginLeft:20,backgroundColor:"#f2f3f8",width:"90%",height:100,borderRadius:6}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{}}>아이콘 자리</div>
                            
                            <div style={{display:"flex",flexDirection:"column", marginLeft:32,marginTop:20, fontSize:18,fontWeight:500}}>
                                <div>3개월 분할결제 선택 후 25% 결제</div>
                                <div style={{marginTop:8,color:"#2554d5"}}>첫 결제금 : 50 만원</div>
                            </div>
                            </div>   
                            </div>

                            <div style={{marginTop:32,marginLeft:20,fontSize:21,fontWeight:"bold"}}>3. 단돈 50만원에 획득!</div>
                        <div style={{marginTop:16,marginLeft:20,backgroundColor:"#f2f3f8",width:"90%",height:100,borderRadius:6}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{}}>아이콘 자리</div>
                            
                            <div style={{display:"flex",flexDirection:"column", marginLeft:32,marginTop:37, fontSize:18,fontWeight:"bold"}}>
                                <div>[Web 발신] 택배가 도착했습니다.</div>
                                
                            </div>
                            </div>   
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
                            }}>시작하기</div></div>                        </div>
                    
                
            </Mobile>
        </>
    )
}