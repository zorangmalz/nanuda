import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";
import Slider from "react-slick"
import wishone from "../images/wishone.png"
import wishtwo from "../images/wishtwo.png"
import wishthree from "../images/wishthree.png"
import Loader from "react-loader-spinner"

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
    const [linkOrNot, setLinkOrNot] = useState(false)
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
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

    const onChange = (e) => {
        setText(e.target.value)
    }

    const ogtag = async () => {
        setLoading(true)
        await fetch("https://wishdeal.link/api", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: new URLSearchParams({
                code: text
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.openGraph)
                setLoading(false)
                history.push({
                    pathname: "/wishdeal/url/success", 
                    state: { param: response.openGraph, des: "", url: text, code: 4 }
                })
            }).catch(err => {
                console.log(err)
                setLoading(false)
                history.push({
                    pathname: "/wishdeal/url/fail", 
                    state: { url: text }
                })
            })
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
                            paddingBottom: 32,
                        }}>
                            <Slider arrows={false} dots={true} autoplay={true} autoplaySpeed={5000} >
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
                        }}>사고 싶은 상품 링크를 입력해주세요</div>
                        {linkOrNot ?
                            <>
                                <div style={{
                                    width: 440,
                                    height: 140,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginTop: 32,

                                }}>
                                    <img style={{
                                        width: 440,
                                        height: 200,
                                        objectFit: "cover"
                                    }} src={image}></img>
                                </div>
                                <div style={{
                                    width: 440,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginTop: 32,
                                    backgroundColor: "#f2f3f8",
                                }}>
                                    <div stlye={{
                                        fontSize: 14,
                                        opacity: 0.6,
                                        color: "#010608",

                                    }}>{url.substr(0, 20)}...</div>
                                    <div style={{
                                        fontWeight: "bold",
                                        marginTop: 8,
                                        fontSize: 14
                                    }}>{title}</div>

                                </div>
                                <div style={{
                                    marginTop: 18,
                                    marginLeft: 46,
                                    fontSize: 14
                                }}> 이 상품이 맞는지 한번 더 확인해주세요.</div>
                                <div style={{
                                    marginTop: 36,
                                    marginLeft: 20,
                                    fontWeight: "bold",
                                    fontSize: 18
                                }}>상품 카테고리를 알려주세요!</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 16
                                }}>
                                    <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                                    <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                                    <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                                    <div style={{ width: 93, height: 74, marginLeft: 20, borderRadius: 6, border: "solid 1px #707070" }}></div>
                                </div>
                            </>
                            :
                            <></>
                        }
                        <input value={text} onChange={onChange} style={{
                            outline: 0,
                            width: 408,
                            padding: 16,
                            border: "1px solid #dddddd",
                            marginLeft: 20,
                            marginTop: 16,
                            marginRight: 20,
                            borderRadius: 6,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            color: "rgba(1, 6, 8, 1)"
                        }}
                            name="text"
                            placeholder="상품 url"
                        />
                        <div id="url_click" onClick={checker ? ogtag : () => { }} style={{
                            borderRadius: 6,
                            width: 440,
                            marginLeft: 20,
                            paddingTop: 15,
                            paddingBottom: 15,

                            marginTop: 32,
                            backgroundColor: checker ? "#26c1f0" : "#dfdfdf",

                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            cursor: checker ? "pointer" : "auto",
                            textAlign: "center",
                        }}>{loading ? <Loading /> : "확인"}</div>
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
                            paddingBottom: "8vw",
                        }}>
                            <Slider arrows={false} dots={true} autoplay={true} autoplaySpeed={5000} >
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
                        {linkOrNot ?
                            <>
                                <img style={{
                                    width: "90vw",
                                    height: "50vw",
                                    objectFit: "cover",
                                    marginLeft: "5vw",
                                    marginRight: "5vw",
                                    marginTop: "8vw",
                                }} src={image} />
                                <div style={{
                                    width: "90vw",
                                    marginLeft: "5vw",
                                    marginRight: "5vw",
                                    marginTop: "8vw",
                                    backgroundColor: "#f2f3f8",
                                }}>
                                    <div stlye={{
                                        fontSize: 12,
                                        opacity: 0.6,
                                        color: "#010608",
                                    }}>{url.substr(0, 20)}...</div>
                                    <div style={{
                                        fontWeight: "bold",
                                        marginTop: "2vw",
                                        fontSize: 12
                                    }}>{title}</div>
                                </div>
                                <div style={{
                                    marginTop: "4vw",
                                    marginLeft: "12vw",
                                    fontSize: 12
                                }}> 이 상품이 맞는지 한번 더 확인해주세요.</div>
                                <div style={{
                                    marginTop: "9vw",
                                    marginLeft: "5vw",
                                    fontWeight: "bold",
                                    fontSize: 16
                                }}>상품 카테고리를 알려주세요!</div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: "4vw"
                                }}>
                                    <div style={{ width: "23vw", height: "18vw", marginLeft: "5vw", borderRadius: 6, border: "solid 1px #707070" }} />
                                    <div style={{ width: "23vw", height: "18vw", marginLeft: "5vw", borderRadius: 6, border: "solid 1px #707070" }} />
                                    <div style={{ width: "23vw", height: "18vw", marginLeft: "5vw", borderRadius: 6, border: "solid 1px #707070" }} />
                                    <div style={{ width: "23vw", height: "18vw", marginLeft: "5vw", borderRadius: 6, border: "solid 1px #707070" }} />
                                </div>
                            </>
                            :
                            <></>
                        }
                        <input value={text} onChange={onChange} style={{
                            outline: 0,
                            width: "82vw",
                            padding: "4vw",
                            border: "1px solid #dddddd",
                            marginLeft: "5vw",
                            marginTop: "4vw",
                            marginRight: "5vw",
                            borderRadius: 6,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            color: "rgba(1, 6, 8, 1)"
                        }}
                            name="text"
                            placeholder="상품 url"
                        />
                        <div id="url_click" onClick={checker ? ogtag : () => { }} style={{
                            borderRadius: 6,
                            width: "90vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            alignSelf: "center",

                            marginTop: "8vw",
                            backgroundColor: checker ? "#26c1f0" : "#dfdfdf",

                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            cursor: checker ? "pointer" : "auto",
                            textAlign: "center",
                        }}>{loading ? <Loading /> : "확인"}</div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}