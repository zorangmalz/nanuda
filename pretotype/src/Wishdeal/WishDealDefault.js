import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import axios from "axios"
import Loader from "react-loader-spinner"
import OpengraphReactComponent from "opengraph-react"
import Slider from "react-slick"
import wishone from "../images/wishone.png"
import wishtwo from "../images/wishtwo.png"
import wishthree from "../images/wishthree.png"

export default function WishDealDefault() {
    const [loading, setLoading] = useState(false)
    function Loading() {
        return (

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
        //console.log(e.target)		//이벤트가 발생한 타겟의 요소를 출력
        //console.log(e.target.value)	//이벤트가 발생한 타겟의 Value를 출력
        setText(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
        //console.log(text)
    }
    const [checker, setChecker] = useState(false)
    function check() {
        if (text.length > 5) {
            setChecker(true)
        } else {
            setChecker(false)
        }
    }
    useEffect(() => {
        check()
    }, [text])
    const ogtag = async () => {
        setLoading(true)
        try {
            let response = await axios.get(
                "http://52.78.132.237:3002/api",
                {
                    params:
                    {
                        code: text
                    },
                }
            );
            //console.log(response.data.openGraph)
            //console.log("hererererer",response)
            if (response.data.error == true) {
                setLoading(false)
                history.push("wishdealnoturl")
            } else {
                setLoading(false)
                history.push("wishdealurl", { param: response.data.openGraph, des: "", url: text, code: 4 })

            }
        } catch (err) {
            console.log(err)
            setLoading(false)
            history.push("wishdealnoturl", { url: text })
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
                            width: 440,
                            paddingTop: 32,
                            paddingLeft: 20,
                            paddingRight: 20,
                            borderBottom: "1px solid #dddddd",
                            paddingBottom: 16,
                        }}>
                            <Slider className="desktop-slick-dots" arrows={false} dots={false} autoplay={true} autoplaySpeed={3000} >
                                <div style={{
                                    width: 440,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}>
                                    <div style={{
                                        width: 440,
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginBottom: 16,
                                        textAlign: "left"
                                    }}>1. 다양한 쇼핑몰에서 사고싶은 상품의 링크를 입력해주세요!</div>
                                    <img alt="wishone" style={{ marginLeft: 60 }} src={wishone} />
                                </div>
                                <div style={{
                                    width: 440,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start"
                                }}>
                                    <div style={{
                                        width: 440,
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginBottom: 42,
                                        textAlign: "left"
                                    }}>2. 가격과 원하는 옵션을 선택해 주문서를 작성해주세요!</div>
                                    <img alt="wishtwo" style={{ marginLeft: 60 }} src={wishtwo} />
                                </div>
                                <div style={{
                                    width: 440,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start"
                                }}>
                                    <div style={{
                                        width: 440,
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginBottom: 8,
                                        textAlign: "left"
                                    }}>3. 반절만 결제하고 원하는 상품 Get!!</div>
                                    <img alt="wishthree" style={{ marginLeft: 50 }} src={wishthree} />
                                </div>
                            </Slider>
                        </div>
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
                            {checker ?
                                <div id="url_click" onClick={ogtag} style={{
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
                                }}>{loading ? <Loading></Loading> : "확인"}</div>
                                :
                                <div id="url_click" style={{
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
                                }}>{loading ? <Loading></Loading> : "확인"}</div>

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
                            width: "90vw",
                            paddingTop: "8vw",
                            paddingLeft: "5vw",
                            paddingRight: "5vw",
                            borderBottom: "1px solid #dddddd",
                            paddingBottom: "4vw",
                        }}>
                            <Slider className="desktop-slick-dots" arrows={false} dots={false} autoplay={true} autoplaySpeed={3000} >
                                <div style={{
                                    width: "90vw",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}>
                                    <div style={{
                                        width: "90vw",
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginBottom: "4vw",
                                        textAlign: "left"
                                    }}>1. 다양한 쇼핑몰에서 사고싶은 상품의 링크를 입력해주세요!</div>
                                    <img alt="wishone" style={{ marginLeft: "15vw", width: "60vw" }} src={wishone} />
                                </div>
                                <div style={{
                                    width: "90vw",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start"
                                }}>
                                    <div style={{
                                        width: "90vw",
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginBottom: "10vw",
                                        textAlign: "left"
                                    }}>2. 가격과 원하는 옵션을 선택해 주문서를 작성해주세요!</div>
                                    <img alt="wishtwo" style={{ width: "70vw", marginLeft: "12vw" }} src={wishtwo} />
                                </div>
                                <div style={{
                                    width: "90vw",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start"
                                }}>
                                    <div style={{
                                        width: "90vw",
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginBottom: "4vw",
                                        textAlign: "left"
                                    }}>3. 반절만 결제하고 원하는 상품 Get!!</div>
                                    <img alt="wishthree" style={{ marginLeft: "10vw", width: "70vw" }} src={wishthree} />
                                </div>
                            </Slider>
                        </div>
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
                        {checker ?
                            <div id="url_click" onClick={ogtag} style={{
                                borderRadius: 6,
                                width: "90vw",
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
                            }}>{loading ? <Loading></Loading> : "확인"}</div>
                            :
                            <div id="url_click" style={{
                                borderRadius: 6,
                                width: "90vw",
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
                            }}>{loading ? <Loading></Loading> : "확인"}</div>
                        }

                    </div>
                </div>
            </Mobile>
        </div>
    )
}