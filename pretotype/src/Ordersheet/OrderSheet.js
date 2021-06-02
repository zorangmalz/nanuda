import React, { useState, useReducer, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";
import { BiPlusCircle } from "react-icons/bi";
import { BasicAddress, MBasicAddress, MNoAddress, NoAddress } from "../MyProfile/ProfileEdit";
import {firestore} from "../firebase"

function reducer(state, action) {
    switch (action.type) {
        case 'TWO':
            return 2;
        case 'THREE':
            return 3;
        case 'FOUR':
            return 4;
        default:
            return state;
    }
}

export default function OrderSheet() {
   
    const [number, dispatch] = useReducer(reducer, 2);

    //기본 배송지 존재 여부
    const[a,setA]=useState("")
    const[b,setB]=useState("")
    const[c,setC]=useState("")
    const[d,setD]=useState("")
    const[e,setE]=useState("")
    const[f,setF]=useState("")
    const item = {
        name: a,
        addressNum: b,
        address: c,
        addressDetail: d,
        phoneNumber: e,
        request:f
    }
    async function addressCheck(){

        try{
            
            console.log(addre)
            if(addre==""){
                setBasicAddress(false)
            }else{
                setBasicAddress(true)
                setA(addre.name)
                setB(addre.addressNum)
                setC(addre.address)
                setD(addre.addressDetail)
                setE(addre.phoneNumber)
                setF(addre.claim)
            }
            
        }catch(err){
            setBasicAddress(false)
        }
        
    }
    useEffect(()=>{
        addressCheck()
    },[])
    const [basicAddress, setBasicAddress] = useState(false)
    

    //분할결제 기간 선택
    const onTwo = () => {
        dispatch({ type: 'TWO' });
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
    };

    //결제 일정,가격 제공
    const [oneDate,setOneDate]=useState("")
    const [oneMoney,setOneMoney]=useState("")
    const [twoDate,setTwoDate]=useState("")
    const [twoMoney,setTwoMoney]=useState("")
    const [threeDate,setThreeDate]=useState("")
    const [threeMoney,setThreeMoney]=useState("")
    const [fourDate,setFourDate]=useState("")
    const [fourMoney,setFourMoney]=useState("")
    
    const paymentDate = [
        {
            num: "1",
            date: oneDate,
            money: oneMoney,
        },
        {
            num: "2",
            date: twoDate,
            money: twoMoney,
        },
    ]

    //결제 성공 시 -> paymentsuccess, 결제 실패 시 -> paymentfail
    let history = useHistory()
    const [payment, setPayment] = useState(true)

    //계좌 등록 여부
    const [register, setRegister] = useState(true);


    //날짜 계산해보기!!
    useEffect(()=>{
        let today=new Date()
        console.log(today.getFullYear(),today.getMonth(),today.getDate())
        if(today.getMonth()===11){
            if(today.getDate()>=28){
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate("1/28")
                setThreeDate("2/28")
                setFourDate("3/28")
            }else{
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate("1/"+today.getDate())
                setThreeDate("2/"+today.getDate())
                setFourDate("3/"+today.getDate())
            }
        }else if(today.getMonth()===10){
            if(today.getDate()>=28){
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate(((today.getMonth()+1)+1)+"/28")
                setThreeDate("1/28")
                setFourDate("2/28")
            }else{
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate(((today.getMonth()+1)+1)+"/"+today.getDate())
                setThreeDate("1/"+today.getDate())
                setFourDate("2/"+today.getDate())
            }
        }else if(today.getMonth()===9){
            if(today.getDate()>=28){
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate(((today.getMonth()+1)+1)+"/28")
                setThreeDate(((today.getMonth()+1)+2)+"/28")
                setFourDate("1/28")
            }else{
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate(((today.getMonth()+1)+1)+"/"+today.getDate())
                setThreeDate(((today.getMonth()+1)+2)+"/"+today.getDate())
                setFourDate("1/"+today.getDate())
            }
        }else{
            if(today.getDate()>=28){
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate(((today.getMonth()+1)+1)+"/28")
                setThreeDate(((today.getMonth()+1)+2)+"/28")
                setFourDate(((today.getMonth()+1)+3)+"/28")
            }else{
                setOneDate((today.getMonth()+1)+"/"+today.getDate())
                setTwoDate(((today.getMonth()+1)+1)+"/"+today.getDate())
                setThreeDate(((today.getMonth()+1)+2)+"/"+today.getDate())
                setFourDate(((today.getMonth()+1)+3)+"/"+today.getDate())
            }
        }
    },[])

    //파라미터 받기
    const location = useLocation()
    const myparam = location.state.param
    const addre=location.state.addInfo
    const getUrl=location.state.url
    const imageUrl=location.state.image
    const [image, setImage] = useState("")
    const [itemDes, setItemDes] = useState("")
    const [orderDes, setOrderDes] = useState("")
    const [price, setPrice] = useState("")
    const [ship,setShip]=useState(0)

    useEffect(() => {
        console.log(myparam,addre,getUrl,imageUrl)
        try
        {
            try{
                setImage(myparam.image.url)
                setItemDes(myparam.title)
            }catch(err){
                setImage(imageUrl)
                setItemDes(myparam.Fname)
            }
            
        if(myparam[6]===2){
            setShip(0)
        }else if(myparam[6]===3){
            setShip(2500)
        }else if(myparam[6]===4){
            setShip(5000)
        }else{
            setShip(myparam[7])
        }
        
        if (myparam[1] === 1) {
            setOrderDes(myparam[3].ELcolor + "   " + myparam[3].ELetc)
            setPrice(Number(myparam[3].ELprice)+Number(myparam[5]))
            
            if(number===2){
                var res=parseInt(parseInt((Number(myparam[3].ELprice)+Number(myparam[5]))/100)/2)
                var left=parseInt((Number(myparam[3].ELprice)+Number(myparam[5]))/100)%2
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney("-")
                setFourMoney("-")
                console.log(res,left)
            }else if(number===3){
                var res=parseInt(parseInt((Number(myparam[3].ELprice)+Number(myparam[5]))/100)/3)
                var left=parseInt((Number(myparam[3].ELprice)+Number(myparam[5])/100))%3
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney(res*100)
                setFourMoney("-")
            }else{
                var res=parseInt(parseInt((Number(myparam[3].ELprice)+Number(myparam[5]))/100)/4)
                var left=parseInt((Number(myparam[3].ELprice)+Number(myparam[5]))/100)%4
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney(res*100)
                setFourMoney(res*100)
            }
        } else if (myparam[1] === 2) {
            setOrderDes(myparam[3].Fcolor + "   " + myparam[3].Fsize + "   " + myparam[3].Fetc)
            setPrice(Number(myparam[3].Fprice)+Number(myparam[5]))
            if(number===2){
                var res=parseInt(parseInt((Number(myparam[3].Fprice)+Number(myparam[5]))/100)/2)
                var left=parseInt((Number(myparam[3].Fprice)+Number(myparam[5])/100))%2
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney("-")
                setFourMoney("-")
            }else if(number===3){
                var res=parseInt(parseInt((Number(myparam[3].Fprice)+Number(myparam[5]))/100)/3)
                var left=parseInt((Number(myparam[3].Fprice)+Number(myparam[5])/100))%3
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney(res*100)
                setFourMoney("-")
            }else{
                var res=parseInt(parseInt((Number(myparam[3].Fprice)+Number(myparam[5]))/100)/4)
                var left=parseInt((Number(myparam[3].Fprice)+Number(myparam[5]))/100)%4
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney(res*100)
                setFourMoney(res*100)
            }
        } else {
            setOrderDes(myparam[3].Eetc)
            setPrice(Number(myparam[3].Eprice)+Number(myparam[5]))
            if(number===2){
                var res=parseInt(parseInt((Number(myparam[3].Eprice)+Number(myparam[5]))/100)/2)
                var left=parseInt((Number(myparam[3].Eprice)+Number(myparam[5]))/100)%2
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney("-")
                setFourMoney("-")
            }else if(number===3){
                var res=parseInt(parseInt((Number(myparam[3].Eprice)+Number(myparam[5]))/100)/3)
                var left=parseInt((Number(myparam[3].Eprice)+Number(myparam[5]))/100)%3
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney(res*100)
                setFourMoney("-")
            }else{
                var res=parseInt(parseInt((Number(myparam[3].Eprice)+Number(myparam[5]))/100)/4)
                var left=parseInt((Number(myparam[3].Eprice)+Number(myparam[5]))/100)%4
                setOneMoney(res*100+left*100)
                setTwoMoney(res*100)
                setThreeMoney(res*100)
                setFourMoney(res*100)
            }
        }
        } catch(err){
            console.log(err)
            console.log(myparam,addre)
            try{
                setImage(myparam.myparam[0].image.url)
                setItemDes(myparam.myparam[0].title)
            }catch(err){
                console.log(imageUrl)
                setImage(myparam.image[0])
                setItemDes(myparam.myparam[0].Fname)
            }
            
            
            if(myparam.myparam[6]===2){
                setShip(0)
            }else if(myparam.myparam[6]===3){
                setShip(2500)
            }else if(myparam.myparam[6]===4){
                setShip(5000)
            }else{
                setShip(myparam.myparam[7])
            }
            if (myparam.myparam[1] === 1) {
                setOrderDes(myparam.myparam[3].ELcolor + "   " + myparam.myparam[3].ELetc)
                setPrice(Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))
                
                if(number===2){
                    var res=parseInt(parseInt((Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))/100)/2)
                    var left=parseInt((Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))/100)%2
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney("-")
                    setFourMoney("-")
                    console.log(res,left)
                }else if(number===3){
                    var res=parseInt(parseInt((Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))/100)/3)
                    var left=parseInt((Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))/100)%3
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney(res*100)
                    setFourMoney("-")
                }else{
                    var res=parseInt(parseInt((Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))/100)/4)
                    var left=parseInt((Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))/100)%4
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney(res*100)
                    setFourMoney(res*100)
                }
            } else if (myparam.myparam[1] === 2) {
                setOrderDes(myparam.myparam[3].Fcolor + "   " + myparam.myparam[3].Fsize + "   " + myparam.myparam[3].Fetc)
                setPrice(Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))
                if(number===2){
                    var res=parseInt(parseInt((Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))/100)/2)
                    var left=parseInt((Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))/100)%2
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney("-")
                    setFourMoney("-")
                }else if(number===3){
                    var res=parseInt(parseInt((Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))/100)/3)
                    var left=parseInt((Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))/100)%3
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney(res*100)
                    setFourMoney("-")
                }else{
                    var res=parseInt(parseInt((Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))/100)/4)
                    var left=parseInt((Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))/100)%4
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney(res*100)
                    setFourMoney(res*100)
                }
            } else {
                setOrderDes(myparam.myparam[3].Eetc)
                setPrice(Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5]))
                if(number===2){
                    var res=parseInt(parseInt((Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5]))/100)/2)
                    var left=parseInt((Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5]))/100)%2
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney("-")
                    setFourMoney("-")
                }else if(number===3){
                    var res=parseInt(parseInt((Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5]))/100)/3)
                    var left=parseInt((Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5]))/100)%3
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney(res*100)
                    setFourMoney("-")
                }else{
                    var res=parseInt(parseInt((Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5]))/100)/4)
                    var left=parseInt((Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5]))/100)%4
                    setOneMoney(res*100+left*100)
                    setTwoMoney(res*100)
                    setThreeMoney(res*100)
                    setFourMoney(res*100)
                }
            }
    }

    }, [number])
    async function order(){
        if(basicAddress&&payment){
            // history.push("paymentsuccess",{myparam:myparam})'
            firestore.collection("User").doc(addre.phoneNumber).collection("Order").add({
                myparam:myparam,
                ship:item,
                option:number,
                schedule:paymentDate,
                url:getUrl,
                image:myparam.image[0],
                orderOrNot:false,
                payOrNot:false,
                secondOrNot:false
            })
            history.push("paymentsuccess",{myparam:myparam,ship:item,image:imageUrl})
        }
    }
    function fix(){
        history.push("address",{param:myparam, url:getUrl,image:imageUrl})
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
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",

                        width: 480,
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="주문서" goBack={true} />
                        <div style={{
                            fontSize: 18,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginBottom: 16,
                            fontFamily: "NotoSansCJKkr"
                        }}>상품정보</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            marginRight: 20,
                            marginLeft: 20,
                        }}>

                            <img src={image} style={{
                                width: 120,
                                heigh: 120,
                                borderRadius: 6,
                                marginRight: 16,
                                objectFit: "cover"
                            }}></img>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start"
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    color: "#202426",
                                    fontFamily: "AvenirNext"
                                }}>{itemDes} <br />
                                    {orderDes}</div>
                                <div style={{
                                    marginTop: 8,
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                            </div>
                        </div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 16,
                            marginBottom: 16,
                        }} />
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            width: 440,
                            marginLeft: 20,
                            marginRight: 20,
                        }}>
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>배송 정보</div>
                            <div onClick={fix} style={{
                                fontSize: 14,
                                opacity: 0.8,
                                color: "#202426",
                                textDecorationLine: "underline",
                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr"
                            }}>배송지 수정</div>
                        </div>
                        {basicAddress ?
                            <BasicAddress item={item} />
                            :
                            <NoAddress myparam={myparam} url={getUrl} image={imageUrl} />
                        }
                       
                        
                        <div style={{
                            fontSize: 18,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 16,
                            fontFamily: "NotoSansCJKkr"
                        }}>분할결제 옵션 선택</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: 20,
                            marginTop: 16
                        }}>
                            <div onClick={onTwo} style={{
                                width: 95,
                                marginRight: 20,
                                borderRadius: 6,
                                border: number === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                                backgroundColor: number === 2 ? "#051a1a" : "#ffffff",
                                paddingTop: 10,
                                paddingBottom: 10,

                                fontSize: 16,
                                fontWeight: number === 2 ? "bold" : "normal",
                                color: number === 2 ? "#ffffff" : "#051a1a",
                                opacity: number === 2 ? 1 : 0.8,
                                textAlign: "center",
                                fontFamily: "NotoSansCJKkr"
                            }}>2회</div>
                            
                        </div>
                        <div style={{
                            padding: 16,
                            width: 408,
                            marginTop: 16,
                            marginLeft: 20,
                            backgroundColor: "#f2f3f8",
                            borderRadius: 6,

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            {paymentDate.map(item =>
                                <div style={{
                                    width: "100%",

                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    marginBottom: 8,
                                }}>
                                    <div style={{
                                        fontSize: 16,
                                        color: "#051a1a",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>
                                        {item.num}차 결제
                                    <span style={{
                                            fontWeight: "bold",
                                            color: "#26c1f0"
                                        }}>({item.date})</span>
                                    </div>
                                    <div style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#202426",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                                </div>
                            )}
                        </div>
                        <div style={{
                            marginTop: 8,
                            fontSize: 14,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#202426",
                            marginBottom: 4,
                            alignSelf: "flex-start",
                            fontFamily: "NotoSansCJKkr"
                        }}>하울프리 팁</div>
                        <div style={{
                            opacity: 0.8,
                            fontSize: 14,
                            color: "#202426",
                            alignSelf: "flex-start",
                            lineHeight: 1.5,
                            fontFamily: "NotoSansCJKkr",
                            marginLeft: 20,
                        }}>
                            주문서를 접수한 이후 카카오톡을 통해 입금 및 주문 확인이 진행됩니다.  <br />
                            결제일로부터 한달 뒤 두번째 결제 금액을 입력해주세요!<br />
                            
                        </div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 16,
                            marginBottom: 16,
                        }} />
                        <div style={{
                            fontSize: 21,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#202426",
                            marginBottom: 12,
                            fontFamily: "NotoSansCJKkr"
                        }}>최종 결제</div>
                        <div style={{
                            marginLeft: 20,
                            marginRight: 20,
                            width: 440,

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>첫 분할결제 금액 : </div>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}> +{oneMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>배송비 : </div>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}> + {ship.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>나누다 포인트 : </div>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>- 10,000 P</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    color: "#f72b2b",
                                    fontFamily: "NotoSansCJKkr"
                                }}>첫만남 기념 1만원 무조건 할인!</div>
                            
                            </div>
                        </div>
                        <div style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 16,
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            이번 달은
                                <span style={{
                                color: "#26c1f0"
                            }}>  {(Number(oneMoney)+Number(ship)-10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
                                 만 결제하세요.
                            </div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 32,
                            marginBottom: 16,
                        }} />
                        <a  target="_blank"  href={"https://www.notion.so/ydot/77771c4f099d457d99366bdc0e0f2e2d"}>
                        <div style={{
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#202426",
                            textDecorationLine: "underline",
                            marginBottom: 8,
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr",
                            cursor: "pointer"
                        }}>분할 결제 약관</div>
                        </a>
                        <a  target="_blank"  href={"https://www.notion.so/ydot/2fe90eeb1865441fb0a741cc9a860b0a"}>
                        <div style={{
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#202426",
                            textDecorationLine: "underline",
                            marginBottom: 8,
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr",
                            cursor: "pointer"
                        }}>하울프리 서비스 이용약관</div>
                        </a>
                        <div style={{
                            width: 440,
                            fontSize: 12,
                            opacity: 0.4,
                            color: "#202426",
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr"
                        }}>* 교환, 반품 및 환불은 구매한 상점의 정책을 따릅니다</div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 16,
                            marginBottom: 12,
                        }} />
                        <div style={{
                            fontSize: 14,
                            opacity: 0.4,
                            color: "#202426",
                            alignSelf: "center",
                            marginBottom: 32,
                            fontFamily: "NotoSansCJKkr",
                            textAlign: "center",
                        }}>위 주문 내용을 확인 하였으며, 본인의 결제와 약관에 동의합니다.</div>
                        {basicAddress? 
                        <div onClick={order} style={{
                            alignSelf: "center",
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#26c1f0",
                            borderRadius: 6,
                            marginBottom: 120,

                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center",

                            cursor: "pointer",
                            fontFamily: "NotoSansCJKkr"
                        }}>주문 신청하기</div>
                        : 
                        <div style={{
                            alignSelf: "center",
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#dbdbdb",
                            borderRadius: 6,
                            marginBottom: 120,

                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center",

                            cursor: "pointer",
                            fontFamily: "NotoSansCJKkr"
                        }}>주문 신청하기</div>
                        }
                        
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100%",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="주문서" goBack={true} />
                    <div style={{
                        fontSize: 16,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: 32,
                        marginBottom: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>상품정보</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",

                        marginLeft: "5%"
                    }}>
                          <img src={image} style={{
                                width: "25vw",
                                heigh: "25vw",
                                borderRadius: 6,
                                marginRight: "4vw",
                                objectFit: "cover"
                            }}></img>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start"
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    color: "#202426",
                                    fontFamily: "AvenirNext"
                                }}>{itemDes} <br />
                                    {orderDes}</div>
                                <div style={{
                                    marginTop: 8,
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#051a1a",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                            </div>
                                            </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "4vw",
                        marginBottom: "4vw",
                    }} />
                    <div style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#202426",
                        fontFamily: "NotoSansCJKkr",
                        marginLeft: "5vw"
                    }}>배송 정보</div>
                    {basicAddress ?
                        <MBasicAddress item={item} />
                        :
                        <MNoAddress myparam={myparam} url={getUrl} image={imageUrl}/>
                    }
                    
                    <div style={{
                        fontSize: 16,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: "8vw",
                        fontFamily: "NotoSansCJKkr"
                    }}>분할결제 옵션 선택</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

                        marginLeft: "5%",
                        marginTop: "4vw"
                    }}>
                        <div onClick={onTwo} style={{
                            width: 80,
                            marginRight: 10,
                            borderRadius: 6,
                            border: number === 2 ? "1px solid #051a1a" : "1px solid #dfdfdf",
                            backgroundColor: number === 2 ? "#051a1a" : "#ffffff",
                            paddingTop: 5,
                            paddingBottom: 5,

                            fontSize: 14,
                            fontWeight: number === 2 ? "bold" : "normal",
                            color: number === 2 ? "#ffffff" : "#051a1a",
                            opacity: number === 2 ? 1 : 0.8,
                            textAlign: "center",
                            fontFamily: "NotoSansCJKkr"
                        }}>2회</div>
                       
                    </div>
                    <div style={{
                        padding: "4%",
                        width: "82%",
                        marginTop: 16,
                        alignSelf: "center",
                        backgroundColor: "#f2f3f8",
                        borderRadius: 6,

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        {paymentDate.map(item =>
                            <div style={{
                                width: "100%",

                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    color: "#051a1a",
                                    fontFamily: "NotoSansCJKkr"
                                }}>
                                    {item.num}차 결제
                                    <span style={{
                                        fontWeight: "bold",
                                        color: "#26c1f0"
                                    }}>({item.date})</span>
                                </div>
                                <div style={{
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#202426",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                            </div>
                        )}
                    </div>
                    <div style={{
                        marginTop: 8,
                        fontSize: 11,
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        color: "#202426",
                        marginBottom: 4,
                        alignSelf: "flex-start",
                        fontFamily: "NotoSansCJKkr"
                    }}>하울프리 팁</div>
                    <div style={{
                        opacity: 0.8,
                        fontSize: 11,
                        marginLeft: "5vw",
                        color: "#202426",
                        alignSelf: "flex-start",
                        lineHeight: 1.5,
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        주문서를 접수한 이후 카카오톡을 통해 입금 및 주문 확인이 진행됩니다.  <br />
                        분할결제 한도에 따라 분할 결제 금액이 바뀔 수 있습니다. <br />
                       
                    </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "4vw",
                        marginBottom: "4vw",
                    }} />
                    <div style={{
                        fontSize: 18,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#202426",
                        marginBottom: "3vw",
                        fontFamily: "NotoSansCJKkr"
                    }}>최종 결제</div>
                    <div style={{
                        width: "90%",
                        alignSelf: "center",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                            marginBottom: 8,
                        }}>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>첫 분할결제 금액 : </div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}> +{oneMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                            marginBottom: 8,
                        }}>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>배송비 : </div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}> + {ship.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                            marginBottom: 8,
                        }}>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>나누다 포인트 : </div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#202426",
                                fontFamily: "NotoSansCJKkr"
                            }}>- 10,000 P</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                        }}>
                            <div style={{
                                fontSize: 12,
                                color: "#f72b2b",
                                fontFamily: "NotoSansCJKkr"
                            }}>첫만남 기념 1만원 무조건 할인!</div>
                    
                        </div>
                    </div>
                    <div style={{
                        width: "90%",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#202426",
                        marginTop: "4vw",
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        이번달은
                                <span style={{
                            color: "#26c1f0"
                        }}> {(Number(oneMoney)+Number(ship)-10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 </span>
                                 만 결제하세요.
                            </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "8vw",
                        marginBottom: "4vw",
                    }} />
                    <a  target="_blank"  href={"https://www.notion.so/ydot/77771c4f099d457d99366bdc0e0f2e2d"}>
                    <div style={{
                        fontSize: 12,
                        opacity: 0.6,
                        color: "#202426",
                        textDecorationLine: "underline",
                        marginBottom: 8,
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>분할 결제 약관</div>
                    </a>
                    <a  target="_blank"  href={"https://www.notion.so/ydot/2fe90eeb1865441fb0a741cc9a860b0a"}>
                    <div style={{
                        fontSize: 12,
                        opacity: 0.6,
                        color: "#202426",
                        textDecorationLine: "underline",
                        marginBottom: 8,
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>하울프리 서비스 이용약관</div>
                    </a>
                    <div style={{
                        width: "90%",
                        fontSize: 10,
                        opacity: 0.4,
                        color: "#202426",
                        alignSelf: "center",
                        fontFamily: "NotoSansCJKkr"
                    }}>* 교환, 반품 및 환불은 구매한 상점의 정책을 따릅니다</div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "4vw",
                        marginBottom: "3vw",
                    }} />
                    <div style={{
                        fontSize: 12,
                        opacity: 0.4,
                        color: "#202426",
                        width: "90%",
                        alignSelf: "center",
                        marginBottom: "8vw",
                        fontFamily: "NotoSansCJKkr",
                        textAlign: "center",
                    }}>위 주문 내용을 확인 하였으며, 본인의 결제와 약관에 동의합니다.</div>
                    {basicAddress? 
                    <div onClick={order} style={{
                        alignSelf: "center",
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#26c1f0",
                        borderRadius: 6,
                        marginBottom: 80,

                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        textAlign: "center",

                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>주문 신청하기</div>
                    : 
                    <div style={{
                        alignSelf: "center",
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#dbdbdb",
                        borderRadius: 6,
                        marginBottom: 80,

                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        textAlign: "center",

                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>주문 신청하기</div>
                    }
                    
                </div>
            </Mobile>
        </div>
    )
}