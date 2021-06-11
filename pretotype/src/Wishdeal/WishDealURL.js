import React, { useReducer, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, StandardButton, MStandardButton } from "../Style";

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

export default function WishDealURL() {
    const location = useLocation()
    const myparam = location.state.param
    const code = location.state.code
    const des = location.state.des
    const getUrl = location.state.url
    const [stats, setStats] = useState("")
    const [state, setState] = useState(false)
    const [highPrice,setHighPrice]=useState(true)
    useEffect(() => {
        //console.log(myparam, code, des)
        setStats(code)

    }, [])

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

    const [Finputs, setFInputs] = useState({
        Fprice: "",
        Fcolor: "",
        Fetc: "",
        Fsize: ""
    })

    const [ELinputs, setELInputs] = useState({
        ELprice: "",
        ELcolor: "",
        ELetc: ""
    })

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
    useEffect(()=>{
        //console.log(highPrice)
    },[])
    useEffect(()=>{
        if(stats===1){
            if(Number(ELinputs.ELprice)<30000){

                if(ELinputs.ELprice===""){
                    setHighPrice(true)
                }else{
                    setHighPrice(false)
                    //console.log("?")
                }
            }else{
                setHighPrice(true)
                //console.log("There")
            }
        }else if(stats===2){
            if(Number(Finputs.Fprice)<30000){

                if(Finputs.Fprice===""){
                    setHighPrice(true)
                }else{
                    setHighPrice(false)
                    //console.log("?")
                }
            }else{
                setHighPrice(true)
                //console.log("There")
            }
        }else{
            if(Number(Einputs.Eprice)<30000){

                if(Einputs.Eprice===""){
                    setHighPrice(true)
                }else{
                    setHighPrice(false)
                    //console.log("?")
                }
            }else{
                setHighPrice(true)
                //console.log("There")
            }
        }
    },[Finputs.Fprice,ELinputs.ELprice,Einputs.Eprice])

    useEffect(() => {
        
        if (stats === 1) {
          
            if (ELinputs.ELcolor && ELinputs.ELprice != "") {
                if (number && numberB > 1) {
                    if (number === 2 && numberB === 5) {
                        if (option && ship != "") {
                            if(ELinputs.ELprice>30000){
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
                            if(ELinputs.ELprice>30000){
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
                            if(ELinputs.ELprice>30000){
                                setNext(true)
                            }else{
                                setNext(false)
                            }
                            
                        } else {
                            setNext(false)
                        }
                    }
                    if (number === 3 && numberB < 5) {
                        if(ELinputs.ELprice>30000){
                                setNext(true)
                        }else{
                            setNext(false)
                        }
                        
                    }
                }

            } else {
                setNext(false)
            }
        } else if (stats === 2) {
          
            if (Finputs.Fcolor && Finputs.Fsize && Finputs.Fprice != "") {
                if (number && numberB > 1) {
                    if (number === 2 && numberB === 5) {
                        if (option && ship != "") {
if(Finputs.Fprice>30000){
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
                            if(Finputs.Fprice>30000){
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
                            if(Finputs.Fprice>30000){
                            setNext(true)    
                            }else{
                                setNext(false)
                            }
                            
                        } else {
                            setNext(false)
                        }
                    }
                    if (number === 3 && numberB < 5) {
                        if(Finputs.Fprice>30000){
                        setNext(true)    
                        }else{
                            setNext(false)
                        }
                        
                    }
                }

            } else {
                setNext(false)
            }
        } else {
       
            if (Einputs.Eprice != "") {
                if (number && numberB > 1) {
                    if (number === 2 && numberB === 5) {
                        if (option && ship != "") {
                            if(Einputs.Eprice>30000){
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
                            if(Einputs.Eprice>30000){
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
                            if(Einputs.Eprice>30000){
setNext(true)
                            }else{
                                setNext(false)
                            }
                            
                        } else {
                            setNext(false)
                        }
                    }
                    if (number === 3 && numberB < 5) {
                        if(Einputs.Eprice>30000){
setNext(true)
                        }else{
                            setNext(false)
                        }
                        
                    }
                }

            } else {
                setNext(false)
            }
        }

    }, [Finputs, Einputs, ELinputs, number, numberB, option, ship,highPrice])

    function NextPage() {
        const lst = []
        if (stats === 1) {
            lst.push(myparam, code, des, ELinputs, number, option, numberB, ship)
            history.push("/ordersheet", { param: lst ,addInfo:"", url:getUrl,image:""})
        } else if (stats === 2) {
            lst.push(myparam, code, des, Finputs, number, option, numberB, ship)
            history.push("/ordersheet", { param: lst,addInfo:"", url:getUrl,image:"" })
        } else {
            lst.push(myparam, code, des, Einputs, number, option, numberB, ship)
            history.push("/ordersheet", { param: lst,addInfo:"", url:getUrl,image:"" })
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
                    minHeight: "100vh",
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "flex-start",
                        paddingBottom: 50,
                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="상품 정보 작성" goBack={true} />
                        {stats === 1 ?
                            <div>
                                <ElectronicForm
                                highPrice={highPrice}
                                    name={myparam.title}
                                    image={myparam.image.url}
                                    input={ELinputs}
                                    setInput={setELInputs}
                                />
                            </div>
                            :
                            <div></div>
                        }
                        {stats === 2 ?
                            <div>
                                <FashionForm
                                highPrice={highPrice}
                                    name={myparam.title}
                                    image={myparam.image.url}
                                    input={Finputs}
                                    setInput={setFInputs}
                                />
                            </div>
                            :
                            <div></div>
                        }

                        {stats === 4 ?
                            <div>
                                <ETCForm
                                highPrice={highPrice}
                                    name={myparam.title}
                                    image={myparam.image.url}
                                    input={Einputs}
                                    setInput={setEInputs}
                                />
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
                        }}>옵션 선택에 따른 추가 비용이 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                                content="있음"
                            />
                            <Button
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="없음"
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
                                        placeholder="추가 비용을 입력해주세요."
                                        type="number"
                                        name="option"
                                        value={option}
                                        onChange={onChange}
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
                                    }}>원</div>
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
                        }}>배송비가 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                                content="없음"
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
                                content="기타"
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
                                        placeholder="배송비용을 입력해주세요"
                                        type="number"
                                        name="ship"
                                        value={ship}
                                        onChange={onChange}
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
                                    }}>원</div>
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
                            <div>* 가격, 입력 정보가 상이한 경우 혹은 품절인 경우 주문이 취소될 수 있습니다.</div>
                            <div style={{ marginTop: 4 }}>* 입력한 정보 외에 추가 금액이 붙는 경우 2차 결제일에 청구됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 만약 추가금액으로 인해 한도를 넘어가는 경우 주문이 취소됩니다.</div>

                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <div>
                                {next ?
                                    <div id={stats === 1 ? "electronic_click" : stats === 2 ? "fashion_click" : stats === 4 ? "etc_click" : ""} onClick={NextPage} style={{
                                        width: 440,
                                        paddingTop: 16,
                                        paddingBottom: 16,
                                        borderRadius: 6,
                                        backgroundColor: next ? "#26c1f0" : "#dbdbdb",
                                        alignSelf: "center",
                                        cursor: "pointer",
                                        marginTop: 32,

                                        fontSize: 18,
                                        fontWeight: "bold",
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#ffffff",
                                        textAlign: "center"
                                    }}>다음</div>
                                    :
                                    <div id={stats === 1 ? "electronic_click" : stats === 2 ? "fashion_click" : stats === 4 ? "etc_click" : ""} style={{
                                        width: 440,
                                        paddingTop: 16,
                                        paddingBottom: 16,
                                        borderRadius: 6,
                                        backgroundColor: next ? "#26c1f0" : "#dbdbdb",
                                        alignSelf: "center",
                                        cursor: "pointer",
                                        marginTop: 32,

                                        fontSize: 18,
                                        fontWeight: "bold",
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#ffffff",
                                        textAlign: "center"
                                    }}>다음</div>
                                }

                            </div>
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
                        <MHeader content="상품 정보 작성" goBack={true} />
                        {stats === 1 ?
                            <div>
                                <MElectronicForm
                                highPrice={highPrice}
                                    name={myparam.title}
                                    image={myparam.image.url}
                                    input={ELinputs}
                                    setInput={setELInputs}
                                />
                            </div>
                            :
                            <div></div>
                        }
                        {stats === 2 ?
                            <div>
                                <MFashionForm
                                highPrice={highPrice}
                                    name={myparam.title}
                                    image={myparam.image.url}
                                    input={Finputs}
                                    setInput={setFInputs}
                                />
                            </div>
                            :
                            <div></div>
                        }

                        {stats === 4 ?
                            <div>
                                <METCForm
                                highPrice={highPrice}
                                    name={myparam.title}
                                    image={myparam.image.url}
                                    input={Einputs}
                                    setInput={setEInputs}
                                />
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
                        }}>옵션 선택에 따른 추가 비용이 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                                content="있음"
                            />
                            <MButton
                                onClick={onNO}
                                state={number}
                                number={3}
                                content="없음"
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
                                        placeholder="추가 비용을 입력해주세요."
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
                                    }}>원</div>
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
                        }}>배송비가 있나요? <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                                content="없음"
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
                                content="기타"
                            />
                        </div>
                        {numberB === 5 ?
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
                                        placeholder="배송비용을 입력해주세요"
                                        name="ship"
                                        value={ship}
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
                                    }}>원</div>
                                </div>
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
                            <div>* 가격, 입력 정보가 상이한 경우 혹은 품절인 경우 주문이 취소될 수 있습니다.</div>
                            <div style={{ marginTop: 4 }}>* 입력한 정보 외에 추가 금액이 붙는 경우 2차 결제일에 청구됩니다.</div>
                            <div style={{ marginTop: 4 }}>* 만약 추가금액으로 인해 한도를 넘어가는 경우 주문이 취소됩니다.</div>

                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <div>
                                {next ?
                                    <div id={stats === 1 ? "electronic_click" : stats === 2 ? "fashion_click" : stats === 4 ? "etc_click" : ""} onClick={NextPage} style={{
                                        width: "90vw",
                                        paddingTop: "4vw",
                                        paddingBottom: "4vw",
                                        backgroundColor: next ? "#26c1f0" : "#dbdbdb",
                                        alignSelf: "center",
                                        cursor: "pointer",
                                        marginTop: "8vw",
                                        borderRadius: 6,

                                        fontSize: 16,
                                        fontWeight: "bold",
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#ffffff",
                                        textAlign: "center",
                                        marginBottom: "10vw",
                                    }}>다음</div>
                                    :
                                    <div id={stats === 1 ? "electronic_click" : stats === 2 ? "fashion_click" : stats === 4 ? "etc_click" : ""} style={{
                                        width: "90vw",
                                        paddingTop: "4vw",
                                        paddingBottom: "4vw",
                                        backgroundColor: next ? "#26c1f0" : "#dbdbdb",
                                        alignSelf: "center",
                                        cursor: "pointer",
                                        marginTop: "8vw",
                                        borderRadius: 6,

                                        fontSize: 16,
                                        fontWeight: "bold",
                                        fontFamily: "NotoSansCJKkr",
                                        color: "#ffffff",
                                        textAlign: "center",
                                        marginBottom: "10vw",
                                    }}>다음</div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </Mobile>
        </div>
    )
}

function FashionForm({ image, brand, name, input, setInput,highPrice }) {
    useEffect(()=>{
        //console.log(highPrice)
    })
    const { Fprice, Fcolor, Fsize, Fetc } = input

    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <div>
            <div style={{
                width: 480,
                height: 212,

            }}><img style={{
                width: 480,
                height: 212,
                objectFit: "cover"
            }} src={image}></img></div>
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
            }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            
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
                    placeholder="상품 가격"
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
                }}>원</div>
            </div>
            
            {highPrice?
            
            <div></div>
            
             :
             <div style={{color:"#f72b2b",fontSize:16,marginLeft:20,marginTop:5}}>최소 주문금액은 30,000원부터 입니다 </div>
            }
            

            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>색상을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="WHITE, 흰색 등등"
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
                    marginLeft:20,

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
            }}>사이즈를 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="270, 6.5 등등"
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
                    marginLeft:20,

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
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="3cm 깔창 추가해주세요."
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
                    marginLeft:20,

                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#010608",
                }}
            />
        </div>
    )
}

function MFashionForm({ image, brand, name, input, setInput,highPrice }) {
    const { Fprice, Fcolor, Fsize, Fetc } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    return (
        <div>
            <div style={{
                width: "100vw",
                height: "45vw",

            }}><img style={{
                width: "100vw",
                height: "45vw",
                objectFit: "cover"
            }} src={image}></img></div>
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
            }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                    placeholder="상품 가격"
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
                }}>원</div>
            </div>
            {highPrice===true?
            <div></div>
             :
             <div style={{color:"#f72b2b",fontSize:14,marginLeft:20,marginTop:5}}>최소 주문금액은 30,000원부터 입니다 </div>
            }
            

            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>색상을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="WHITE, 흰색 등등"
                name="Fcolor"
                value={Fcolor}
                onChange={onChange}
                style={{
                    marginTop: "4vw",
                    width: "80vw",
                    marginLeft:"5vw",
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
            }}>사이즈를 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="270, 6.5 등등"
                name="Fsize"
                value={Fsize}
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
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="3cm 깔창 추가해주세요."
                name="Fetc"
                value={Fetc}
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

function ElectronicForm({ image, brand, name, input, setInput,highPrice }) {
    const { ELprice, ELcolor, ELetc } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    return (
        <div>
            <div style={{
                width: 480,
                height: 212,

            }}><img style={{
                width: 480,
                height: 212,
                objectFit: "cover"
            }} src={image}></img></div>
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
            }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                    placeholder="상품 가격"
                    type="number"
                    name="ELprice"
                    value={ELprice}
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
                }}>원</div>
            </div>
            {highPrice===true?
            <div></div>
             :
             <div style={{color:"#f72b2b",fontSize:16,marginLeft:20,marginTop:5}}>최소 주문금액은 30,000원부터 입니다 </div>
            }
            
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>색상을 입력해주세요.</div>
            <input
                placeholder="WHITE, 흰색 등등"
                name="ELcolor"
                value={ELcolor}
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
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="램 32 기가, 마우스 추가해주세요 등"
                name="ELetc"
                value={ELetc}
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

function MElectronicForm({ image, brand, name, input, setInput,highPrice }) {
    const { ELprice, ELcolor, ELetc } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    return (
        <div>
            <div style={{
                width: "100vw",
                height: "45vw",

            }}><img style={{
                width: "100vw",
                height: "45vw",
                objectFit: "cover"
            }} src={image}></img></div>
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
            }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                    placeholder="상품 가격"
                    type="number"
                    name="ELprice"
                    value={ELprice}
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
                }}>원</div>
            </div>
            {highPrice===true?
            <div></div>
             :
             <div style={{color:"#f72b2b",fontSize:14,marginLeft:20,marginTop:5}}>최소 주문금액은 30,000원부터 입니다 </div>
            }
            

            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>색상을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
            <input
                placeholder="WHITE, 흰색 등등"
                name="ELcolor"
                value={ELcolor}
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
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="램 32 기가, 마우스 추가해주세요 등"
                name="ELetc"
                value={ELetc}
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

function ETCForm({ image, brand, name, input, setInput,highPrice }) {
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
            <div style={{
                width: 480,
                height: 212,

            }}><img style={{
                width: 480,
                height: 212,
                objectFit: "cover"
            }} src={image}></img></div>
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
            }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                    placeholder="상품 가격"
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
                }}>원</div>
            </div>
            {highPrice===true?
            <div></div>
             :
             <div style={{color:"#f72b2b",fontSize:16,marginLeft:20,marginTop:5}}>최소 주문금액은 30,000원부터 입니다 </div>
            }
            
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",

                marginTop: 32,
                marginLeft: 20,
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="ex) 하나는 딸기맛, 하나는 포도맛으로 해주세요."
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

function METCForm({ image, brand, name, input, setInput,highPrice }) {
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
            <div style={{
                width: "100vw",
                height: "45vw",

            }}><img style={{
                width: "100vw",
                height: "45vw",
                objectFit: "cover"
            }} src={image}></img></div>
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
            }}>가격을 입력해주세요. <span style={{ color: "#f72b2b" }}>(필수)</span></div>
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
                    placeholder="상품 가격"
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
                }}>원</div>
            </div>
            {highPrice===true?
          <div></div>
             :
             <div style={{color:"#f72b2b",fontSize:14,marginLeft:20,marginTop:5}}>최소 주문금액은 30,000원부터 입니다 </div>
            }
            

            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#010608",

                marginTop: "8vw",
                marginLeft: "5vw",
            }}>기타 옵션을 입력해주세요. </div>
            <input
                placeholder="ex) 하나는 딸기맛, 하나는 포도맛으로 해주세요."
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