import React, { useReducer, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { Default, Mobile } from "../App";
import { Header, MHeader, StandardButton, MStandardButton, imageBucket, S3_BUCKET } from "../Style";
import plus from "../images/plus.png"

function reducerA(state, action) {
    switch (action.type) {
        case 'YES':
            return 2;
        case 'NO':
            return 3;
        default:
            return state;
    }
}


function reducerB(state, action) {
    switch (action.type) {
        case 'X':
            return 2;
        case 'TWO':
            return 3;
        case 'FIVE':
            return 4;
        case 'EXT':
            return 5;
        default:
            return state;
    }
}

export default function WishDealNotURL() {
    const location = useLocation()
    const myparam = []
    const code = location.state.code
    const des = location.state.des
    const getUrl = location.state.url

    const [highPrice, setHighPrice] = useState(true)

    const [number, dispatch] = useReducer(reducerA, 0);
    const onYES = () => {
        dispatch({ type: 'YES' });
    };
    const onNO = () => {
        dispatch({ type: 'NO' });
    };

    const [numberB, dispatchB] = useReducer(reducerB, 0);
    const onX = () => {
        dispatchB({ type: 'X' });
    };
    const onTWO = () => {
        dispatchB({ type: 'TWO' });
    };
    const onFIVE = () => {
        dispatchB({ type: 'FIVE' });
    };
    const onEXT = () => {
        dispatchB({ type: 'EXT' });
    };

    let history = useHistory();

    const [Einputs, setEInputs] = useState({
        Eprice: "",
        Eetc: "",
    })

    const [next, setNext] = useState(false)
    const [inp, setInp] = useState({
        option: "",
        ship: "",
    })
    const { option, ship } = inp
    const onChange = (e) => {
        const { value, name } = e.target
        setInp({
            ...inp,
            [name]: value
        })
    }

    useEffect(() => {
        if (Number(Einputs.Eprice) < 30000) {
            if (Einputs.Eprice === "") {
                setHighPrice(true)
            } else {
                setHighPrice(false)
            }
        } else {
            setHighPrice(true)
        }
    }, [Einputs.Eprice])

    useEffect(() => {
        if (Einputs.Eprice != "") {
            if (number && numberB > 1) {
                if (number === 2 && numberB === 5) {
                    if (option && ship != "") {
                        if (Einputs.Eprice >= 30000) {
                            setNext(true)
                        } else {
                            setNext(false)
                        }

                    } else {
                        setNext(false)
                    }
                }
                if (number === 2 && numberB < 5) {
                    if (option != "") {
                        if (Einputs.Eprice >= 30000) {
                            setNext(true)
                        } else {
                            setNext(false)
                        }

                    } else {
                        setNext(false)
                    }
                }
                if (number === 3 && numberB === 5) {
                    if (ship != "") {
                        if (Einputs.Eprice >= 30000) {
                            setNext(true)
                        } else {
                            setNext(false)
                        }

                    } else {
                        setNext(false)
                    }
                }
                if (number === 3 && numberB < 5) {
                    if (Einputs.Eprice >= 30000) {
                        setNext(true)
                    } else {
                        setNext(false)
                    }
                }
            }
        } else {
            setNext(false)
        }
    }, [Einputs, number, numberB, option, ship, highPrice])

    //User ?????? ??????
    const [userName, setUserName] = useState("")
    useEffect(() => {
        fetch("https://api.1n1n.io/userInfoName/", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        })
            .then(res => res.json())
            .then(res => setUserName(res.name))
            .catch(err => console.log(err))
    }, [])

    //s3??? ????????? ??? URL??? RDS??? ?????? + user_id, product_id??? ????????? ??????
    const [selectedFile, setSelectedFile] = useState([])
    const NextPage = async () => {
        var imageArray;
        const params = {
            ACL: "public-read",
            Body: selectedFile[0],
            Bucket: S3_BUCKET,
            Key: `${userName}/wishdeal/${selectedFile[0].name}`
        }

        imageBucket.putObject(params)
            .on("httpUploadProgress", (evt) => {

            })
            .send((err) => {
                if (err) {
                    console.log(err)
                }
            })
        imageArray = `https://${S3_BUCKET}.s3.ap-northeast-2.amazonaws.com/${userName}/wishdeal/${selectedFile[0].name}`

        const lst = []
        lst.push(myparam, code, des, Einputs, number, option, numberB, ship)
        history.push("/ordersheet", { param: lst, addInfo: "", url: getUrl, image: imageArray })
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
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                    }}>
                        <Header content="?????? ?????? ??????" goBack={true} />
                        <ETCForm
                            highPrice={highPrice}
                            input={Einputs}
                            setInput={setEInputs}
                            selectedFile={selectedFile}
                            setSelectedFile={setSelectedFile}
                            mobile={false}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>????????? ?????? ?????? ????????? ??????????</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: 20,
                            marginTop: 16
                        }}>
                            <Button
                                onClick={onYES}
                                state={number}
                                number={2}
                                content="??????"
                                mobile={false}
                            />
                            <Button
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="??????"
                                mobile={false}
                            />
                        </div>
                        {number === 2 ?
                            <>
                                <input
                                    placeholder="?????? ????????? ??????????????????."
                                    name="option"
                                    value={option}
                                    onChange={onChange}
                                    style={{
                                        width: 408,
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: 16,
                                        marginLeft: 20,

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        color: "#010608",
                                        padding: 16,
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>???????????? ????????????????</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: 20,
                            marginTop: 16
                        }}>
                            <Button
                                onClick={onX}
                                state={numberB}
                                number={2}
                                content="??????"
                                mobile={false}
                            />
                            <Button
                                onClick={onTWO}
                                state={numberB}
                                number={3}
                                content="2,500"
                                mobile={false}
                            />
                            <Button
                                onClick={onFIVE}
                                state={numberB}
                                number={4}
                                content="5,000"
                                mobile={false}
                            />
                            <Button
                                onClick={onEXT}
                                state={numberB}
                                number={5}
                                content="??????"
                                mobile={false}
                            />
                        </div>
                        {numberB === 5 ?
                            <>
                                <input
                                    placeholder="?????? ????????? ??????????????????."
                                    name="ship"
                                    value={ship}
                                    onChange={onChange}
                                    style={{
                                        width: 408,
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: 16,
                                        marginLeft: 20,

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        color: "#010608",
                                        padding: 16,
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,
                            width: 440,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            opacity: 0.4,
                            color: "#010608",
                        }}>
                            <div>* ??????, ?????? ????????? ????????? ?????? ?????? ????????? ?????? ????????? ????????? ??? ????????????.</div>
                            <div style={{ marginTop: 4 }}>* ????????? ?????? ?????? ?????? ????????? ?????? ?????? 2??? ???????????? ???????????????.</div>
                            <div style={{ marginTop: 4 }}>* ?????? ?????????????????? ?????? ????????? ???????????? ?????? ????????? ???????????????.</div>
                            <div style={{ marginTop: 4 }}>* ?????? ????????? ??????????????????.</div>
                        </div>
                        <StandardButton
                            marginTop={32}
                            text="??????"
                            onClick={next ? NextPage : () => {}}
                            state={next}
                            marginBottom={40}
                        />
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
                    minHeight: "100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",

                        width: "100%",
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                    }}>
                        <MHeader content="?????? ?????? ??????" goBack={true} />
                        <ETCForm
                            highPrice={highPrice}
                            input={Einputs}
                            setInput={setEInputs}
                            selectedFile={selectedFile}
                            setSelectedFile={setSelectedFile}
                            mobile={true}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>????????? ?????? ?????? ????????? ??????????</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <Button
                                onClick={onYES}
                                state={number}
                                number={2}
                                content="??????"
                                mobile={true}
                            />
                            <Button
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="??????"
                                mobile={true}
                            />
                        </div>
                        {number === 2 ?
                            <>
                                <input
                                    placeholder="?????? ????????? ??????????????????."
                                    name="option"
                                    value={option}
                                    onChange={onChange}
                                    style={{
                                        width: "82vw",
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: "4vw",
                                        marginLeft: "5vw",

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        color: "#010608",
                                        padding: "4vw",
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>???????????? ????????????????</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <Button
                                onClick={onX}
                                state={numberB}
                                number={2}
                                content="??????"
                                mobile={true}
                            />
                            <Button
                                onClick={onTWO}
                                state={numberB}
                                number={3}
                                content="2,500"
                                mobile={true}
                            />
                            <Button
                                onClick={onFIVE}
                                state={numberB}
                                number={4}
                                content="5,000"
                                mobile={true}
                            />
                            <Button
                                onClick={onEXT}
                                state={numberB}
                                number={5}
                                content="??????"
                                mobile={true}
                            />
                        </div>
                        {numberB === 5 ?
                            <>
                                <input
                                    placeholder="?????? ????????? ??????????????????."
                                    name="ship"
                                    value={ship}
                                    onChange={onChange}
                                    style={{
                                        width: "82vw",
                                        outline: 0,
                                        border: "1px solid rgba(1, 6, 8, 0.2)",
                                        marginTop: "4vw",
                                        marginLeft: "5vw",

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        color: "#010608",
                                        padding: "4vw",
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                            :
                            <></>
                        }
                        <div style={{
                            marginTop: "8vw",
                            marginLeft: "5vw",
                            width: "90vw",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            opacity: 0.4,
                            color: "#010608",
                        }}>
                            <div>* ??????, ?????? ????????? ????????? ?????? ?????? ????????? ?????? ????????? ????????? ??? ????????????.</div>
                            <div style={{ marginTop: 4 }}>* ????????? ?????? ?????? ?????? ????????? ?????? ?????? 2??? ???????????? ???????????????.</div>
                            <div style={{ marginTop: 4 }}>* ?????? ?????????????????? ?????? ????????? ???????????? ?????? ????????? ???????????????.</div>
                            <div style={{ marginTop: 4 }}>* ?????? ????????? ??????????????????.</div>
                        </div>
                        <MStandardButton
                            marginTop={"8vw"}
                            text="??????"
                            onClick={next ? NextPage : () => {}}
                            state={next}
                            marginBottom={"10vw"}
                        />
                    </div>
                </div>
            </Mobile>
        </>
    )
}

const Button = ({ onClick, state, number, content, mobile }) => {
    return (
        <div onClick={onClick} style={{
            width: mobile ? 90 : 95,
            marginRight: mobile ? "5vw" : 20,
            borderRadius: 6,
            backgroundColor: state === number ? "#010608" : "#f2f3f8",
            paddingTop: mobile ? "2vw" : 10,
            paddingBottom: mobile ? "2vw" : 10,
            cursor: "pointer",
            fontSize: mobile ? 14 : 16,
            fontWeight: state === number ? "bold" : "normal",
            color: state === number ? "#ffffff" : "rgba(1, 6, 8, 0.4)",
            opacity: state === number ? 1 : 0.8,
            textAlign: "center",
        }}>{content}</div>
    )
}

function ETCForm({ input, setInput, highPrice, selectedFile, setSelectedFile, mobile }) {
    const { Eprice, Eetc } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    //ImageToS3
    //????????? ????????????
    const inputFile = useRef(null)

    //????????? ?????? ??? ??????
    const [filePath, setFilePath] = useState([])

    const onButtonclick = () => {
        inputFile.current.click()
    }

    //?????? ????????? ?????? ??????
    const handelFileInput = (e) => {
        const files = e.target.files;
        let length;
        if (files.length > 2) {
            length = 3;
        } else {
            length = files.length
        }
        for (let i = 0; i < length; i++) {
            setSelectedFile(selectedFile => [...selectedFile, files[i]])
            setFilePath(filePath => [...filePath, URL.createObjectURL(files[i])])
        }
    }

    return (
        <>
            {filePath.length === 0 ?
                <div onClick={onButtonclick} style={{
                    width: mobile ? "100vw" : 480,
                    height: mobile ? "45vw" : 212,
                    backgroundColor: "#f2f3f8",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}>
                    <input ref={inputFile} onChange={handelFileInput} type="file" style={{
                        display: "none"
                    }} />
                    <img alt="" src={plus} style={{ width: mobile ? 28 : 32, height: mobile ? 28 : 32, cursor: "pointer" }} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: mobile ? 14 : 16,
                        color: "#010608",
                        marginTop: mobile ? "5vw" : 20,
                    }}>?????? ????????? ??? ??? ?????? ????????? ??????????????????.</div>
                </div>
                :
                <></>
            }
            {filePath.length > 0 ?
                <img src={filePath} style={{
                    width: mobile ? "100vw" : 480,
                    height: mobile ? "45vw" : 212,
                    resize: "cover",
                }} />
                :
                <></>
            }
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 16 : 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: mobile ? "4vw" : 16,
                marginLeft: mobile ? "5vw" : 20,
            }}>????????? ????????? ????????????????</div>
            <input
                placeholder="?????? ????????? ??????????????????.(??????)"
                name="Eprice"
                value={Eprice}
                onChange={onChange}
                style={{
                    width: mobile ? "82vw" : 408,
                    outline: 0,
                    border: "1px solid rgba(1, 6, 8, 0.2)",
                    marginTop: mobile ? "4vw" : 16,
                    marginLeft: mobile ? "5vw" : 20,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    padding: mobile ? "4vw" : 16,
                    borderRadius: 6,
                }}
            />
            {highPrice === true ?
                <div></div>
                :
                <div style={{ color: "#f72b2b", fontSize: mobile ? 14 : 16, marginLeft: mobile ? "5vw" : 20, marginTop: mobile ? "1vw" : 4 }}>?????? ??????????????? 30,000????????? ????????? </div>
            }
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 16 : 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: mobile ? "8vw" : 32,
                marginLeft: mobile ? "5vw" : 20,
            }}>????????? ????????? ????????? ??????????????????.</div>
            <input
                placeholder="??????, ????????? ?????? ?????? ????????? ??????????????????."
                name="Eetc"
                value={Eetc}
                onChange={onChange}
                style={{
                    marginTop: mobile ? "4vw" : 16,
                    width: mobile ? "82vw" : 408,
                    padding: mobile ? "4vw" : 16,
                    marginLeft: mobile ? "5vw" : 20,
                    outline: 0,
                    border: "1px solid rgba(1, 6, 8, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    color: "#010608",
                    borderRadius: 6,
                }}
            />
        </>
    )
}