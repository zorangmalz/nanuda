import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";

import { AiOutlineExclamationCircle } from "react-icons/ai";
// import ogs from "open-graph-scraper-lite"


const TypeButton = ({ text, variable, number, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: 95,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 6,
            border: "1px solid rgba(1, 6, 8, 0.2)",
            backgroundColor: variable === number ? "#010608" : "#ffffff",
            marginRight: 16,
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 16,
            color: variable === number ? "#ffffff" : "rgba(1, 6, 8, 0.8)",
            textAlign: "center",
            fontWeight: variable === number ? "bold" : "normal",
        }}>{text}</div>
    )
}

const MTypeButton = ({ text, variable, number, onClick }) => {
    return (
        <div onClick={onClick} style={{
            width: "20vw",
            paddingTop: "3vw",
            paddingBottom: "3vw",
            borderRadius: 6,
            border: "1px solid rgba(1, 6, 8, 0.2)",
            backgroundColor: variable === number ? "#010608" : "#ffffff",
            marginRight: "4vw",
            cursor: "pointer",

            fontFamily: "NotoSansCJKkr",
            fontSize: 14,
            color: variable === number ? "#ffffff" : "rgba(1, 6, 8, 0.8)",
            textAlign: "center",
            fontWeight: variable === number ? "bold" : "normal",
        }}>{text}</div>
    )
}

function reducer(state, action) {
    switch (action.type) {
        case "ELECTRONIC":
            return 1;
        case "FASHION":
            return 2;
        case "LUXURY":
            return 3;
        case "ETC":
            return 4;
        default:
            return 0;
    }
}

export default function WishDeal() {
    let history = useHistory();
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("                                        ")
    const [title, setTitle] = useState("")
    const [state, setState] = useState(false)
    const location = useLocation()
    const myparam = location.state.info
    const getUrl=location.state.url
    useEffect(() => {
        try{
            setImage(myparam.image.url)
        }catch(err){
            console.log(err)
            setImage("")
        }
        try{
            setUrl(myparam.url)
        }catch(err){
            console.log(err)
            setUrl(getUrl)
        }
        try{
            setTitle(myparam.title)
        }catch(err){
            console.log(err)
            setTitle("")
        }
    }, [])

    const [type, dispatch] = useReducer(reducer, 0)

    const onElectronic = () => {
        dispatch({ type: "ELECTRONIC" })
        setState(true)
    }
    const onFashion = () => {
        dispatch({ type: "FASHION" })
        setState(true)
    }
    const onLuxury = () => {
        dispatch({ type: "LUXURY" })
        setState(true)
    }
    const onETC = () => {
        dispatch({ type: "ETC" })
    }
    const [text, setText] = useState('')

    const onChange = (e) => {
        //console.log(e.target)		//???????????? ????????? ????????? ????????? ??????
        //console.log(e.target.value)	//???????????? ????????? ????????? Value??? ??????
        setText(e.target.value)		//????????? ????????? value????????? {text} ??????
        setState(true)
    }


    function move() {
        //console.log(type)
        if (type === 0) {
            //console.log("0")
        } else if (type == 1) {
            history.push("/wishdealurl", { param: myparam, code: 1, des: text,url:getUrl })
        } else if (type == 2) {
            history.push("/wishdealurl", { param: myparam, code: 2, des: text,url:getUrl })
        } else if (type == 3) {
            history.push("/wishdealurl", { param: myparam, code: 3, des: text,url:getUrl })
        } else if (type == 4) {
            history.push("/wishdealurl", { code: 4, param: myparam, des: text,url:getUrl })
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
                        <Header content="?????????" goBack={true} />
                        <div style={{
                            marginLeft: 20,
                            marginTop: 32,
                            fontWeight: "bold",
                            fontSize: 18,
                            fontFamily: "NotoSansCJKkr",
                            color: "#010608",
                        }}>?????? ????????? ??????????????????</div>
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

                            }}>{getUrl.substr(0, 20)}...</div>
                            <div style={{
                                fontWeight: "bold",
                                marginTop: 8,
                                fontSize: 14
                            }}>{title}</div>

                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 20,
                            marginTop: 16,
                        }}>
                            <AiOutlineExclamationCircle size={16} color="#010608" />
                            <div style={{
                                marginLeft: 8,
                                fontSize: 14,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>??? ????????? ????????? ?????? ??? ??????????????????.</div>
                        </div>
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            fontWeight: "bold",
                            fontSize: 18,
                            fontFamily: "NotoSansCJKkr",
                            color: "#010608",
                        }}>?????? ??????????????? ???????????????!</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 16,
                            marginLeft: 20,
                        }}>
                            <TypeButton
                                text="????????????"
                                variable={type}
                                number={1}
                                onClick={onElectronic}
                            />
                            <TypeButton
                                text="??????&??????"
                                variable={type}
                                number={2}
                                onClick={onFashion}
                            />
                            <TypeButton
                                text="??????"
                                variable={type}
                                number={4}
                                onClick={onETC}
                            />
                        </div>
                        {type === 4 ? <input
                            onChange={onChange}

                            placeholder="?????? ????????? ??????????????????. (??????)"
                            style={{
                                paddingBottom: 8,
                                marginTop: 16,
                                width: 440,
                                outline: 0,
                                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                                borderTop: 0,
                                borderLeft: 0,
                                borderRight: 0,
                                alignSelf: "center",

                                fontFamily: "NotoSansCJKkr",
                                fontSize: 16,
                                color: "#010608"
                            }}
                        /> : <div></div>}
                        {state ?
                            <div id="category_click" onClick={move} style={{
                                width: 440,
                                paddingTop: 16,
                                paddingBottom: 16,
                                borderRadius: 6,
                                backgroundColor: "#26c1f0",
                                alignSelf: "center",
                                cursor: "pointer",
                                marginTop: 32,

                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                color: "#ffffff",
                                textAlign: "center"
                            }}>??????</div>
                            :
                            <div id="category_click" style={{
                                width: 440,
                                paddingTop: 16,
                                paddingBottom: 16,
                                borderRadius: 6,
                                backgroundColor: "#dbdbdb",
                                alignSelf: "center",

                                marginTop: 32,

                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                color: "#ffffff",
                                textAlign: "center"
                            }}>??????</div>
                        }

                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    justifyContent: "flex-start",

                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="?????????" goBack={true} />
                    <div style={{
                        marginLeft: "5vw",
                        marginTop: "8vw",
                        fontWeight: "bold",
                        fontSize: 16,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",
                    }}>?????? ????????? ??????????????????.</div>
                    <div style={{
                        width: "90%",
                        height: 140,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 32,

                    }}>
                        <img style={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover"
                        }} src={image}></img>
                    </div>
                    <div style={{
                        width: "90%",
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 32,
                        backgroundColor: "#f2f3f8",
                    }}>
                        <div stlye={{
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#010608",

                        }}>{getUrl.substr(0, 20)}...</div>
                        <div style={{
                            fontWeight: "bold",
                            marginTop: 8,
                            fontSize: 14
                        }}>{title}</div>

                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "5vw",
                        marginTop: "4vw",
                    }}>
                        <AiOutlineExclamationCircle size={12} color="#010608" />
                        <div style={{
                            marginLeft: 8,
                            fontSize: 12,
                            color: "#010608",
                            fontFamily: "NotoSansCJKkr"
                        }}>??? ????????? ????????? ?????? ??? ??????????????????.</div>
                    </div>
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        fontSize: 16,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",
                    }}>?????? ??????????????? ???????????????!</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        <MTypeButton
                            text="????????????"
                            variable={type}
                            number={1}
                            onClick={onElectronic}
                        />
                        <MTypeButton
                            text="??????&??????"
                            variable={type}
                            number={2}
                            onClick={onFashion}
                        />
                        <MTypeButton
                            text="??????"
                            variable={type}
                            number={4}
                            onClick={onETC}
                        />
                    </div>
                    {type === 4 ? <input
                        onChange={onChange}
                        placeholder="?????? ????????? ??????????????????. (??????)"
                        style={{
                            paddingBottom: "2vw",
                            marginTop: "4vw",
                            width: "90vw",
                            outline: 0,
                            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                            borderTop: 0,
                            borderLeft: 0,
                            borderRight: 0,
                            alignSelf: "center",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            color: "#010608"
                        }}
                    /> : <div></div>}
                  {state? 
                    <div id="category_click" onClick={move} style={{
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#26c1f0",
                        alignSelf: "center",
                        cursor: "pointer",
                        marginTop: 32,
                        borderRadius: 6,

                        fontSize: 16,
                        fontWeight: "bold",
                        fontFamily: "NotoSansCJKkr",
                        color: "#ffffff",
                        textAlign: "center"
                    }}>??????</div>
                  : 
                  <div id="category_click" style={{
                    width: "90vw",
                    paddingTop: "4vw",
                    paddingBottom: "4vw",
                    backgroundColor: "#dbdbdb",
                    alignSelf: "center",
                    cursor: "pointer",
                    marginTop: 32,
                    borderRadius: 6,

                    fontSize: 16,
                    fontWeight: "bold",
                    fontFamily: "NotoSansCJKkr",
                    color: "#ffffff",
                    textAlign: "center"
                }}>??????</div>
                  }
                </div>
            </Mobile>
        </div>
    )
}