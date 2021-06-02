import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import { AiOutlineCheck } from "react-icons/ai";
import { MOrderDetail, OrderDetail } from "./PaymentFail";
import { useHistory,useLocation } from "react-router";


export default function PaymentSuccess() {
    //WishDeal인지 여부
    const [wish, setWish] = useState(true)
    const location = useLocation()
    const [img,setImg]=useState("")
    const [title,setTitle]=useState("")
    const [prices,setPrices]=useState("")
    const myparam=location.state.myparam
    const ship = location.state.ship
    useEffect(()=>{
        console.log(myparam,ship)
        try{
setImg(myparam.myparam[0].image.url)
setPrices(Number(myparam.myparam[3].ELprice)+Number(myparam.myparam[5]))
        }catch(err){
            console.log(err)
            console.log(Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))
            console.log(Number(myparam.myparam[3].Fprice),Number(myparam.myparam[5]))
            setImg("")
            setPrices(Number(myparam.myparam[3].Fprice)+Number(myparam.myparam[5]))
        }
    },[])


    //화면 변경
    let history = useHistory()
    function goHome() {
        history.replace("/")
    }
    function goReview() {
        history.push("/review")
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
                        alignItems: "center",
                        justifyContent: "flex-start",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content={wish ? "주문 결과" : "작성 완료"} goX={true} />
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginTop: 32,
                            backgroundColor: "#26c1f0",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <AiOutlineCheck color="#ffffff" size={50} />
                        </div>
                        <div style={{
                            marginTop: 32,
                            fontSize: 21,
                            fontWeight: "bold",
                            color: "#26c1f0",
                            fontFamily: "NotoSansCJKkr",
                        }}>{wish ? "주문" : "작성"}이 완료
                                <span style={{ color: "#051a1a" }}>되었습니다!</span>
                        </div>
                        {myparam.myparam[1]==1 ?
                            <OrderDetail
                            img={img}
                            wishTime={wish}
                            title={myparam.myparam[0].title}
                            price={prices}
                            name={ship.name}
                            number={ship.addressNum}
                            address={ship.address}
                            addressDetail={ship.addressDetail}
                            phoneNumber={ship.phoneNumber}
                            deliveryClaim={ship.request}
                        />
                        : 
                       
                        (myparam.myparam[1]===2 ? 
                            <OrderDetail
                            img={img}
                            wishTime={wish}
                            title={myparam.myparam[0].title}
                            price={prices}
                            name={ship.name}
                            number={ship.addressNum}
                            address={ship.address}
                            addressDetail={ship.addressDetail}
                            phoneNumber={ship.phoneNumber}
                            deliveryClaim={ship.request}
                        />
                        :
                        <OrderDetail
                        img={img}
                            wishTime={wish}
                            title={myparam.myparam[0].title}
                            price={Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5])}
                            name={ship.name}
                            number={ship.addressNum}
                            address={ship.address}
                            addressDetail={ship.addressDetail}
                            phoneNumber={ship.phoneNumber}
                            deliveryClaim={ship.request}
                        />)
                        }
                        
                        <StandardButton
                            text="홈으로 돌아가기"
                            marginTop={32}
                            onClick={() => history.replace("/")}
                            state={true}
                        />
                     
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content={wish ? "주문 결과" : "작성 완료"} goX={true} />
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginTop: 32,
                        backgroundColor: "#26c1f0",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AiOutlineCheck color="#ffffff" size={50} />
                    </div>
                    <div style={{
                        marginTop: 32,
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        fontFamily: "NotoSansCJKkr"
                    }}>{wish ? "주문" : "작성"}이 완료
                        <span style={{ color: "#051a1a" }}>되었습니다!</span>
                    </div>
                    {myparam.myparam[1]==1 ?
                            <MOrderDetail
                            img={img}
                            wishTime={wish}
                            title={myparam.myparam[0].title}
                            price={prices}
                            name={ship.name}
                            number={ship.addressNum}
                            address={ship.address}
                            addressDetail={ship.addressDetail}
                            phoneNumber={ship.phoneNumber}
                            deliveryClaim={ship.request}
                        />
                        : 
                       
                        (myparam.myparam[1]===2 ? 
                            <MOrderDetail
                            img={img}
                            wishTime={wish}
                            title={myparam.myparam[0].title}
                            price={prices}
                            name={ship.name}
                            number={ship.addressNum}
                            address={ship.address}
                            addressDetail={ship.addressDetail}
                            phoneNumber={ship.phoneNumber}
                            deliveryClaim={ship.request}
                        />
                        :
                        <MOrderDetail
                        img={img}
                            wishTime={wish}
                            title={myparam.myparam[0].title}
                            price={Number(myparam.myparam[3].Eprice)+Number(myparam.myparam[5])}
                            name={ship.name}
                            number={ship.addressNum}
                            address={ship.address}
                            addressDetail={ship.addressDetail}
                            phoneNumber={ship.phoneNumber}
                            deliveryClaim={ship.request}
                        />)
                        }
                    <MStandardButton
                        text="홈으로 돌아가기"
                        onClick={() => history.replace("/")}
                        state={true}
                        marginTop={"8vw"}
                    />
                   
                </div>
            </Mobile>
        </div>
    )
}