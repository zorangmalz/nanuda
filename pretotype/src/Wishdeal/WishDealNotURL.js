import React, { useReducer, useState, useEffect, useRef } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useHistory, useLocation } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import AWS from "aws-sdk";

const AWS_ACCESS_KEY = "AKIAYPG3AAD4HBHACKPU"
const AWS_SECRET_KEY = "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"
const S3_BUCKET = "nanuda-product-image"
const REGION = "ap-northeast-2"

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
})

const imageBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION
})

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

const Button = ({ onClick, state, number, content }) => {
    return (
        <div onClick={onClick} style={{
            width: 95,
            marginRight: 20,
            borderRadius: 6,
            border: state === number ? "1px solid #010608" : "1px solid #dfdfdf",
            backgroundColor: state === number ? "#010608" : "#ffffff",
            paddingTop: 10,
            paddingBottom: 10,
            cursor: "pointer",
            fontSize: 16,
            fontWeight: state === number ? "bold" : "normal",
            color: state === number ? "#ffffff" : "#010608",
            opacity: state === number ? 1 : 0.8,
            textAlign: "center",
        }}>{content}</div>
    )
}

const MButton = ({ onClick, state, number, content }) => {
    return (
        <div onClick={onClick} style={{
            width: 90,
            marginRight: "5vw",
            borderRadius: 6,
            border: state === number ? "1px solid #010608" : "1px solid #dfdfdf",
            backgroundColor: state === number ? "#010608" : "#ffffff",
            paddingTop: "2vw",
            paddingBottom: "2vw",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: state === number ? "bold" : "normal",
            color: state === number ? "#ffffff" : "#010608",
            opacity: state === number ? 1 : 0.8,
            textAlign: "center",
        }}>{content}</div>
    )
}

export default function WishDealNotURL() {
    const [number, dispatch] = useReducer(reducerA, 0);

    const location = useLocation()
    // const myparam = location.state.param
    // const code = location.state.code
    // const des = location.state.des
    const getUrl = location.state.url
    const [stats, setStats] = useState("")
    const [state, setState] = useState(false)
    const [highPrice, setHighPrice] = useState(true)

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

    const [Finputs, setFInputs] = useState({
        Fprice: "",
        Fcolor: "",
        Fetc: "",
        Fsize: "",
        Fname: ""
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
        //console.log(highPrice)
    }, [])
    useEffect(() => {

        if (Number(Finputs.Fprice) < 30000) {

            if (Finputs.Fprice === "") {
                setHighPrice(true)
            } else {
                setHighPrice(false)
                //console.log("?")
            }
        } else {
            setHighPrice(true)
            //console.log("There")
        }

    }, [Finputs.Fprice])
    const [checker,setChecker]=useState(false)
    const [imageUrl,setImageUrl]=useState(false)
    useEffect(() => {
        //console.log("checking")
        if (Finputs.Fcolor && Finputs.Fsize && Finputs.Fprice != "" &&highPrice&&imageUrl) {
            if (number && numberB > 1) {
                if (number === 2 && numberB === 5) {
                    if (option && ship != "") {
                        if(Finputs.Fprice>30000 && filePath.length>0){
                            setNext(true)
                        }else{
                            setNext(false)
                        }
                        
                    } else {
                        setNext(false)
                    }
                }
                if (number === 2 && numberB < 5) {
                    if (option != "") {
                        if(Finputs.Fprice>30000 && filePath.length>0){
                            setNext(true)
                        }else{
                            setNext(false)
                        }
                    } else {
                        setNext(false)
                    }
                }
                if (number === 3 && numberB === 5) {
                    if (ship != "") {
                        if(Finputs.Fprice>30000 && filePath.length>0){
                            setNext(true)
                        }else{
                            setNext(false)
                        }
                    } else {
                        setNext(false)
                    }
                }
                if (number === 3 && numberB < 5) {
                    if(Finputs.Fprice>30000 && filePath.length>0){
                        setNext(true)
                    }else{
                        setNext(false)
                    }
                }
            }
        } else {
            setNext(false)
        }
        //console.log(highPrice,imageUrl)
    }, [Finputs, number, numberB, option, ship,imageUrl,checker,highPrice])

    
    //ImageToS3
    //????????? ????????????
    const [progress, setProgress] = useState(0)

    //????????? ????????????
    const inputFile = useRef(null)

    //????????? ?????? ??? ??????
    const [selectedFile, setSelectedFile] = useState([])
    const [filePath, setFilePath] = useState([])
    
    const onButtonClick = () => {
        inputFile.current.click()
        setImageUrl(true)
        setChecker(true)
    }

    //????????? ?????? ??????
    const handelFileInput = (e) => {
        setChecker(true)
        const files = e.target.files;
        setSelectedFile(selectedFile => [...selectedFile, files[0]])
        setFilePath(filePath => [...filePath, URL.createObjectURL(files[0])])
    }

    //s3??? ?????????
    
    const uploadFile = async () => {
        //console.log("uploading")
        var imageArray = []
        const params = {
            ACL: "public-read",
            Body: selectedFile[0],
            Bucket: S3_BUCKET,
            Key: selectedFile[0].name
        }

        await imageBucket.putObject(params)
            .on("httpUploadProgress", (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
                //console.log(progress)
            })
            .send((err) => {
                if (err) {
                    console.log(err)
                }
            })
        imageArray.push(`https://${S3_BUCKET}.s3.ap-northeast-2.amazonaws.com/${selectedFile[0].name}`)
        
        //console.log(imageArray)
        const lst = []
        

        lst.push("", 2, "", Finputs, number, option, numberB, ship)
        history.push("/ordersheet", { param: lst, addInfo: "", url: getUrl,image:imageArray })
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
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="?????? ?????? ??????" goBack={true} />
                        <ETCForm
                            filePath={filePath}
                            inputFile={inputFile}
                            onButtonClick={onButtonClick}
                            handelFileInput={handelFileInput}
                            highPrice={highPrice}
                            input={Finputs}
                            setInput={setFInputs}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>?????? ????????? ?????? ?????? ????????? ?????????? <span style={{ color: "#f72b2b" }}>(??????)</span></div>
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
                            />
                            <Button
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="??????"
                            />
                        </div>
                        {number === 2 ?
                            <div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    marginTop: 16,
                                    marginLeft: 20,
                                    paddingBottom: 8,
                                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                                    width: 240,
                                }}>
                                    <input
                                        placeholder="?????? ????????? ??????????????????."
                                        style={{
                                            width: 210,
                                            outline: 0,
                                            border: 0,

                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 16,
                                            color: "#010608"
                                        }}
                                    />
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608"
                                    }}>???</div>
                                </div>
                            </div>
                            :
                            <div></div>
                        }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>???????????? ?????????? <span style={{ color: "#f72b2b" }}>(??????)</span></div>
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
                            />
                            <Button
                                onClick={onTWO}
                                state={numberB}
                                number={3}
                                content="2,500"
                            />
                            <Button
                                onClick={onFIVE}
                                state={numberB}
                                number={4}
                                content="5,000"
                            />
                            <Button
                                onClick={onEXT}
                                state={numberB}
                                number={5}
                                content="??????"
                            />
                        </div>
                        {numberB === 5 ?
                            <div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    marginTop: 16,
                                    marginLeft: 20,
                                    paddingBottom: 8,
                                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                                    width: 240,
                                }}>
                                    <input
                                        placeholder="??????????????? ??????????????????"
                                        style={{
                                            width: 220,
                                            outline: 0,
                                            border: 0,

                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 16,
                                            color: "#010608"
                                        }}
                                    />
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608"
                                    }}>???</div>
                                </div>
                            </div>
                            :
                            <div></div>
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
                        {next?
                        <div id="nourl_click" onClick={uploadFile} style={{
                            borderRadius: 8,
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            alignSelf: "center",
                            marginTop: 32,
                            backgroundColor: "#26c1f0",

                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 150,
                            cursor: "pointer",
                        }}>??????</div>
                         :
                         <div id="nourl_click" style={{
                            borderRadius: 8,
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            alignSelf: "center",
                            marginTop: 32,
                            backgroundColor: "#dbdbdb",

                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 150,
                            cursor: "pointer",
                        }}>??????</div>
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
                        <METCForm
                            filePath={filePath}
                            onButtonClick={onButtonClick}
                            inputFile={inputFile}
                            handelFileInput={handelFileInput}
                            highPrice={highPrice}
                            input={Finputs}
                            setInput={setFInputs}
                        />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>?????? ????????? ?????? ?????? ????????? ?????????? <span style={{ color: "#f72b2b" }}>(??????)</span></div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <MButton
                                onClick={onYES}
                                state={number}
                                number={2}
                                content="??????"
                            />
                            <MButton
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="??????"
                            />
                        </div>
                        {number === 2 ?
                            <div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    marginTop: "4vw",
                                    marginLeft: "5vw",
                                    paddingBottom: "2vw",
                                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                                    width: "50vw",
                                }}>
                                    <input
                                        placeholder="?????? ????????? ??????????????????."
                                        type="number"
                                        name="option"
                                        value={option}
                                        onChange={onChange}
                                        style={{
                                            width: "45vw",
                                            outline: 0,
                                            border: 0,

                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 14,
                                            color: "#010608"
                                        }}
                                    />
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        color: "#010608"
                                    }}>???</div>
                                </div>
                            </div>
                            :
                            <div></div>
                        }
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: "8vw",
                            marginLeft: "5vw",
                        }}>???????????? ?????????? <span style={{ color: "#f72b2b" }}>(??????)</span></div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: "5vw",
                            marginTop: "4vw"
                        }}>
                            <MButton
                                onClick={onX}
                                state={numberB}
                                number={2}
                                content="??????"
                            />
                            <MButton
                                onClick={onTWO}
                                state={numberB}
                                number={3}
                                content="2,500"
                            />
                            <MButton
                                onClick={onFIVE}
                                state={numberB}
                                number={4}
                                content="5,000"
                            />
                            <MButton
                                onClick={onEXT}
                                state={numberB}
                                number={5}
                                content="??????"
                            />
                        </div>
                        {numberB === 5 ?
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                marginTop: "4vw",
                                marginLeft: "5vw",
                                paddingBottom: "2vw",
                                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                                width: "50vw",
                            }}>
                                <input

                                    name="ship"
                                    value={ship}
                                    onChange={onChange}
                                    placeholder="??????????????? ??????????????????"
                                    type="number"
                                    style={{
                                        width: "45vw",
                                        outline: 0,
                                        border: 0,

                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 14,
                                        color: "#010608"
                                    }}
                                />
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#010608"
                                }}>???</div>
                            </div>
                            :
                            <div></div>
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
                        {next? 
                         <div id="nourl_click" onClick={uploadFile} style={{
                            borderRadius: 8,
                            width: "90vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            alignSelf: "center",
                            marginTop: "8vw",
                            backgroundColor: "#26c1f0",

                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 80,
                            cursor: "pointer",
                        }}>??????</div>
                        : 
                        <div id="nourl_click" style={{
                            borderRadius: 8,
                            width: "90vw",
                            paddingTop: "4vw",
                            paddingBottom: "4vw",
                            alignSelf: "center",
                            marginTop: "8vw",
                            backgroundColor: "#dbdbdb",

                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 80,
                            cursor: "pointer",
                        }}>??????</div>
                        }
                       
                    </div>
                </div>
            </Mobile>
        </div>
    )
}

function FashionForm({ filePath, onButtonClick, inputFile, handelFileInput, brand, name, input, setInput, highPrice }) {
    useEffect(() => {
        //console.log(highPrice)
    })
    const { Fprice, Fcolor, Fsize, Fetc, Fname } = input

    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <div>
            {filePath.length > 0 ?
                <img src={filePath[0]} alt="?????? ?????????"
                    style={{
                        width: 480,
                    }}
                />
                :
                <div onClick={onButtonClick} style={{
                    width: 480,
                    height: 212,
                    backgroundColor: "#f2f3f8",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}>
                    <input ref={inputFile} onChange={handelFileInput} type="file" style={{
                        display: "none"
                    }} />
                    <BsPlusCircle size={36} color="#010608" />
                    <div style={{
                        marginTop: 24,
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        columnGap: "#010608"
                    }}>?????? ????????? ??? ??? ?????? ????????? ??????????????????.</div>
                </div>
            }
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 16,
                marginLeft: 20,
            }}>?????? ????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <input
                placeholder="????????????"
                name="Fname"
                value={Fname}
                onChange={onChange}
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                    marginLeft: 20,
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#010608",
                }}
            />

            <div style={{
                marginTop: 16,
                marginLeft: 20,
                fontFamily: "AvenirNext",
                fontWeight: "bold",
                fontSize: 21,
            }}>

                {brand}</div>
            <div style={{
                marginTop: 16,
                marginLeft: 20,
                fontsize: 18,
                fontWeight: "normal",
                fontFamily: "AvenirNext",
                opacity: 0.8
            }}>{name}</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 16,
                marginLeft: 20,
            }}>????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                marginTop: 16,
                marginLeft: 20,
                paddingBottom: 8,
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                width: 210,
            }}>
                <input
                    placeholder="?????? ??????"
                    type="number"
                    name="Fprice"
                    value={Fprice}
                    onChange={onChange}
                    style={{
                        width: 190,
                        outline: 0,
                        border: 0,

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "#010608"
                    }}
                />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#010608"
                }}>???</div>
            </div>

            {highPrice ?

                <div></div>

                :
                <div style={{ color: "#f72b2b", fontSize: 16, marginLeft: 20, marginTop: 5 }}>?????? ??????????????? 30,000????????? ????????? </div>
            }


            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <input
                placeholder="WHITE, ?????? ??????"
                name="Fcolor"
                value={Fcolor}
                onChange={onChange}
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                    marginLeft: 20,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#010608",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>???????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <input
                placeholder="270, 6.5 ??????"
                name="Fsize"
                value={Fsize}
                onChange={onChange}
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                    marginLeft: 20,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#010608",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>?????? ????????? ??????????????????. </div>
            <input
                placeholder="3cm ?????? ??????????????????."
                name="Fetc"
                value={Fetc}
                onChange={onChange}
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                    marginLeft: 20,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#010608",
                }}
            />
        </div>
    )
}

function MFashionForm({ filePath, onButtonClick, inputFile, handelFileInput, brand, name, input, setInput, highPrice }) {
    const { Fprice, Fcolor, Fsize, Fetc, Fname } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    return (
        <div>
            {filePath.length > 0 ?
                <img src={filePath[0]} alt="?????? ?????????"
                    style={{
                        width: "100vw",
                    }}
                />
                :
                <div onClick={onButtonClick} style={{
                    width: "100vw",
                    height: "45vw",
                    backgroundColor: "#f2f3f8",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}>
                    <input ref={inputFile} onChange={handelFileInput} type="file" style={{
                        display: "none"
                    }} />
                    <BsPlusCircle size={24} color="#010608" />
                    <div style={{
                        marginTop: 24,
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        columnGap: "#010608"
                    }}>?????? ????????? ??? ??? ?????? ????????? ??????????????????.</div>
                </div>
            }
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 16,
                marginLeft: 20,
            }}>?????? ????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <input
                placeholder="????????????"
                name="Fname"
                value={Fname}
                onChange={onChange}
                style={{
                    marginTop: 16,
                    width: "95vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                    marginLeft: 20,
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#010608",

                }}
            />

            <div style={{
                marginTop: 16,
                marginLeft: 20,
                fontFamily: "AvenirNext",
                fontWeight: "bold",
                fontSize: 21,
            }}>

                {brand}</div>
            <div style={{
                marginTop: "4vw",
                marginLeft: "5vw",
                fontsize: 16,
                fontWeight: "normal",
                fontFamily: "AvenirNext",
                opacity: 0.8
            }}>{name}</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "4vw",
                marginLeft: "5vw",
            }}>????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                marginTop: "4vw",
                marginLeft: "5vw",
                paddingBottom: "2vw",
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                width: "45vw",
            }}>
                <input
                    placeholder="?????? ??????"
                    type="number"
                    name="Fprice"
                    value={Fprice}
                    onChange={onChange}
                    style={{
                        width: "40vw",
                        outline: 0,
                        border: 0,

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#010608"
                    }}
                />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#010608"
                }}>???</div>
            </div>
            {highPrice === true ?
                <div></div>
                :
                <div style={{ color: "#f72b2b", fontSize: 14, marginLeft: 20, marginTop: 5 }}>?????? ??????????????? 30,000????????? ????????? </div>
            }


            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <input
                placeholder="WHITE, ?????? ??????"
                name="Fcolor"
                value={Fcolor}
                onChange={onChange}
                style={{
                    marginTop: "4vw",
                    width: "80vw",
                    marginLeft: "5vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: "2vw",
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#010608",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>???????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <input
                placeholder="270, 6.5 ??????"
                name="Fsize"
                value={Fsize}
                onChange={onChange}
                style={{
                    marginTop: "4vw",
                    width: "80vw",
                    marginLeft: "5vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#010608",
                }}
            />
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>?????? ????????? ??????????????????. </div>
            <input
                placeholder="3cm ?????? ??????????????????."
                name="Fetc"
                value={Fetc}
                onChange={onChange}
                style={{
                    marginTop: "4vw",
                    width: "80vw",
                    marginLeft: "5vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#010608",
                }}
            />
        </div>
    )
}

function ETCForm({ filePath, onButtonClick, inputFile, handelFileInput, brand, name, input, setInput,highPrice }) {
    const { Eprice, Eetc } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    return (
        <div>
            {filePath.length > 0 ?
                <img src={filePath[0]} alt="?????? ?????????"
                    style={{
                        width: 480,
                    }}
                />
                :
                <div onClick={onButtonClick} style={{
                    width: 480,
                    height: 212,
                    backgroundColor: "#f2f3f8",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}>
                    <input ref={inputFile} onChange={handelFileInput} type="file" style={{
                        display: "none"
                    }} />
                    <BsPlusCircle size={36} color="#010608" />
                    <div style={{
                        marginTop: 24,
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        columnGap: "#010608"
                    }}>?????? ????????? ??? ??? ?????? ????????? ??????????????????.</div>
                </div>
            }
            <div style={{
                marginTop: 16,
                marginLeft: 20,

                fontFamily: "AvenirNext",
                fontWeight: "bold",
                fontSize: 21,
            }}>{brand}</div>
            <div style={{
                marginTop: 16,
                marginLeft: 20,
                fontsize: 18,
                fontWeight: "normal",
                fontFamily: "AvenirNext",
                opacity: 0.8
            }}>{name}</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 16,
                marginLeft: 20,
            }}>????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                marginTop: 16,
                marginLeft: 20,
                paddingBottom: 8,
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                width: 210,
            }}>
                <input
                    placeholder="?????? ??????"
                    type="number"
                    name="Eprice"
                    value={Eprice}
                    onChange={onChange}
                    style={{
                        width: 190,
                        outline: 0,
                        border: 0,

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "#010608"
                    }}
                />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#010608"
                }}>???</div>
            </div>
            {highPrice===true?
            <div></div>
             :
             <div style={{color:"#f72b2b",fontSize:16,marginLeft:20,marginTop:5}}>?????? ??????????????? 30,000????????? ????????? </div>
            }
            
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>?????? ????????? ??????????????????. </div>
            <input
                placeholder="ex) ????????? ?????????, ????????? ??????????????? ????????????."
                name="Eetc"
                value={Eetc}
                onChange={onChange}
                style={{
                    marginTop: 16,
                    width: 440,
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                    marginLeft:20,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#010608",
                }}
            />
        </div>
    )
}

function METCForm({ filePath, onButtonClick, inputFile, handelFileInput, brand, name, input, setInput,highPrice }) {
    const { Eprice, Eetc } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    return (
        <div>
            {filePath.length > 0 ?
                <img src={filePath[0]} alt="?????? ?????????"
                    style={{
                        width: "100vw",
                    }}
                />
                :
                <div onClick={onButtonClick} style={{
                    width: "100vw",
                    height: "45vw",
                    backgroundColor: "#f2f3f8",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}>
                    <input ref={inputFile} onChange={handelFileInput} type="file" style={{
                        display: "none"
                    }} />
                    <BsPlusCircle size={24} color="#010608" />
                    <div style={{
                        marginTop: 24,
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        columnGap: "#010608"
                    }}>?????? ????????? ??? ??? ?????? ????????? ??????????????????.</div>
                </div>
            }
            <div style={{
                marginTop: "4vw",
                marginLeft: "5vw",

                fontFamily: "AvenirNext",
                fontWeight: "bold",
                fontSize: 18,
            }}>{brand}</div>
            <div style={{
                marginTop: "4vw",
                marginLeft: "5vw",
                fontsize: 16,
                fontWeight: "normal",
                fontFamily: "AvenirNext",
                opacity: 0.8
            }}>{name}</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "4vw",
                marginLeft: "5vw",
            }}>????????? ??????????????????. <span style={{ color: "#f72b2b" }}>(??????)</span></div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                marginTop: "4vw",
                marginLeft: "5vw",
                paddingBottom: "2vw",
                borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                width: "45vw",
            }}>
                <input
                    placeholder="?????? ??????"
                    type="number"
                    name="Eprice"
                    value={Eprice}
                    onChange={onChange}
                    style={{
                        width: "40vw",
                        outline: 0,
                        border: 0,

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#010608"
                    }}
                />
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#010608"
                }}>???</div>
            </div>
            {highPrice===true?
          <div></div>
             :
             <div style={{color:"#f72b2b",fontSize:14,marginLeft:20,marginTop:5}}>?????? ??????????????? 30,000????????? ????????? </div>
            }
            

            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>?????? ????????? ??????????????????. </div>
            <input
                placeholder="ex) ????????? ?????????, ????????? ??????????????? ????????????."
                name="Eetc"
                value={Eetc}
                onChange={onChange}
                style={{
                    marginTop: "4vw",
                    width: "80vw",
                    marginLeft:"5vw",
                    alignSelf: "center",
                    outline: 0,
                    border: 0,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#010608",
                }}
            />
        </div>
    )
}
