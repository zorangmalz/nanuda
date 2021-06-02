import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import axios from "axios"
import Loader from "react-loader-spinner"
import OpengraphReactComponent from "opengraph-react"

export default function WishDealDefault() {

    const [loading,setLoading]=useState(false)
    function Loading(){
        return(
            
                <Loader
                type="Oval"
                color="#ffffff"
                height={20}
                width={20}
                timeout={10000}
                >

                </Loader>
            
        )
    }
    let history = useHistory();
    
    const [text, setText] = useState("")
    const onChange = (e) => {
        console.log(e.target)		//이벤트가 발생한 타겟의 요소를 출력
        console.log(e.target.value)	//이벤트가 발생한 타겟의 Value를 출력
        setText(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
        console.log(text)
    }
    const [checker,setChecker]=useState(false)
    function check(){
        if(text.length>5){
            setChecker(true)
        }else{
            setChecker(false)
        }
    }
    useEffect(()=>{
        check()
    },[text])
    const ogtag = async () => {
        setLoading(true)
        let response = await axios.get(
            "http://3.35.166.77:3002/api",
            {  params:
                {
                    code: text
                },
            }
            );
            console.log(response.data.openGraph)
            
                if (response.data.error == true) {
                    setLoading(false)
                    history.push("wishdealnoturl")
                } else {
                    setLoading(false)
                    history.push("wishdeal", { info: response.data.openGraph,url:text })

                }
            

    }

    return (
        <div>
            <Default>
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

                        width: 480,
                        height: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="위시딜" goBack={true} />
                        <div style={{
                            marginLeft: 20,
                            marginTop: 32,
                            fontWeight: "bold",
                            fontSize: 18
                        }}>사고 싶은 상품 링크를 입력해주세요!</div>
                      
                            <div>
                                <div>
                                    <div
                                        style={{
                                            marginTop: 16,
                                            marginLeft: 20,
                                            marginRight: 20
                                        }}>
                                        <input onChange={onChange} style={{
                                            outline: 0,
                                            width: 440,
                                            height: 26,
                                            border: "0px solid #ffffff"
                                        }}
                                            name="link"
                                            placeholder="링크"
                                        >
                                        </input>
                                        <div style={{ width: 438, marginTop: 7, height: 0, border: "solid 1px #f2f3f8" }}></div>
                                    </div>

                                </div>
                                {checker?
                                 <div onClick={ogtag} style={{
                                    borderRadius: 6,
                                    width: 440,
                                    marginLeft: 20,
                                    paddingTop: 15,
                                    paddingBottom: 15,
                                    alignSelf: "center",

                                    marginTop: 32,
                                    backgroundColor: "#26c1f0",

                                    color: "#ffffff",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}>{loading? <Loading></Loading>:"확인"}</div>
                                :
                                <div style={{
                                    borderRadius: 6,
                                    width: 440,
                                    marginLeft: 20,
                                    paddingTop: 15,
                                    paddingBottom: 15,
                                    alignSelf: "center",

                                    marginTop: 32,
                                    backgroundColor: "#dbdbdb",

                                    color: "#ffffff",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}>{loading? <Loading></Loading>:"확인"}</div>

                                }
                               
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
                        <MHeader content="위시딜" goBack={true} />
                        <div style={{
                            marginLeft: "5vw",
                            marginTop: "8vw",
                            fontWeight: "bold",
                            fontSize: 16
                        }}>사고 싶은 상품 링크를 입력해주세요!</div>
                        <div>
                            <div
                                style={{
                                    marginTop: "4vw",
                                    marginLeft: "5vw",
                                    marginRight: "5vw"
                                }}>
                                <input onChange={onChange} style={{
                                    outline: 0,
                                    width: "90%",
                                    height: 26,
                                    border: "0px solid #ffffff"
                                }}
                                    name="link"
                                    placeholder="링크"
                                >
                                </input>
                                <div style={{ width: "90vw", marginTop: 8, height: 1, backgroundColor: "#f2f3f8" }}></div>
                            </div>
                        </div>
                        {checker?
                        <div onClick={ogtag} style={{
                            borderRadius: 6,
                            width:"90vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            alignSelf: "center",

                            marginTop: 32,
                            backgroundColor: "#26c1f0",

                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            cursor: "pointer",
                            textAlign: "center",
                        }}>{loading? <Loading></Loading>:"확인"}</div>
                        :
                        <div style={{
                            borderRadius: 6,
                            width:"90vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            alignSelf: "center",

                            marginTop: 32,
                            backgroundColor: "#dbdbdb",

                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            cursor: "pointer",
                            textAlign: "center",
                        }}>{loading? <Loading></Loading>:"확인"}</div>
                        }
                        
                            </div>
                </div>
            </Mobile>
        </div>
    )
}