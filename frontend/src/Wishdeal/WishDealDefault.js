import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import axios from "axios"

export default function WishDealDefault() {
    let history = useHistory();
    const [linkOrNot, setLinkOrNot] = useState(false)
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [url, setUrl] = useState("")
    const onChange = (e) => {
        setText(e.target.value)
    }
    const ogtag = async () => {

         let response = await axios.post(
            "https://haulfree.link:3001/api",
            {
                params:
                {
                    code: text
                },
            },
            { withCredentials: true }
        );
        console.log(response)
        if (response.data.error == true) {
            history.push("wishdealnoturl")
        } else {
            history.push("wishdeal", { info: response.data.results })
            setLinkOrNot(true)
            setImage(response.data.results.ogImage.url)
            setTitle(response.data.results.ogTitle)
            setDes(response.data.results.ogDescription)
            setUrl(response.data.results.ogUrl)
        }

//         fetch("https://haulfree.link/api", {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             credentials:"include",
//             body:JSON.stringify({
//                 params:
//                 {
//                     code: text
//                 },
//             })

//         })
            
//            .then(response => response.json())
//  .then(response => {
//                 if (response.data.error == true) {
//                     history.push("wishdealnoturl")
//                 } else {
//                     history.push("wishdeal", { info: response.data.results })
//                     setLinkOrNot(true)
//                     setImage(response.data.results.ogImage.url)
//                     setTitle(response.data.results.ogTitle)
//                     setDes(response.data.results.ogDescription)
//                     setUrl(response.data.results.ogUrl)
//                 }
//             }).catch(err=>{
//                 console.log(err)
//             })
      
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
                                        color: "#202426",

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
                                <div>
                                    <div
                                        style={{
                                            marginTop: 16,
                                            marginLeft: 20,
                                            marginRight: 20
                                        }}>
                                        <input style={{
                                            outline: 0,
                                            width: 440,
                                            height: 26,
                                            border: "0px solid #ffffff"

                                        }}
                                            name="text"
                                            placeholder="기타 항목을 입력해주세요."
                                        >
                                        </input>
                                        <div style={{ width: 438, marginTop: 7, height: 0, border: "solid 1px #f2f3f8" }}></div>
                                    </div>

                                </div>
                                <div onClick={() => history.push("/wishdealurl")} style={{
                                    borderRadius: 6,
                                    width: 440,
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
                                }}>확인</div>
                            </>
                            :
                            <>
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
                                <div onClick={ogtag} style={{
                                    borderRadius: 6,
                                    width: 440,
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
                                }}>확인</div>
                            </>
                        }
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
                                <input style={{
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
                        <div onClick={ogtag} style={{
                            borderRadius: 8,
                            width: "90vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            alignSelf: "center",

                            marginTop: 24,
                            backgroundColor: "#26c1f0",

                            textAlign: "center",
                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}>확인</div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}