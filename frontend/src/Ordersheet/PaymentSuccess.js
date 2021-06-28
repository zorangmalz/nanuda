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
    const myparam = location.state.myparam
    const ship = location.state.ship
    const orderid = location.state.orderid
    const [image,setImage]=useState("")
    const [itemDes,setItemDes]=useState("")
    const [price,setPrice]=useState("")
    const [order,setOrder]=useState("")
    const [shipDetail,setShipDetail]=useState("")
    useEffect(()=>{
        console.log(myparam,ship,orderid)
        setOrder(orderid)
        setImage(myparam[0].image.url)
        setItemDes(myparam[0].title)
        setShipDetail(ship)
        setPrice(Number(myparam[3].Eprice) + Number(myparam[5]))
    },[])
    
    //화면 변경
    let history = useHistory()
    function goHome() {
        history.replace("/")
    }
    function goReview() {
        history.push("/review/main")
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
                                <span style={{ color: "#010608" }}>되었습니다!</span>
                        </div>
                        <OrderDetail
                            wishTime={wish}
                            title={itemDes}
                            price={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                            name={shipDetail.name}
                            orderNum={order}
                            number={shipDetail.addressNum}
                            address={shipDetail.address}
                            addressDetail={shipDetail.addressDetail}
                            phoneNumber={shipDetail.phoneNumber}
                            deliveryClaim={shipDetail.request}
                            img={image}
                        />
                        <StandardButton
                            text="홈으로"
                            marginTop={32}
                            onClick={() => history.replace("/")}
                            state={true}
                        />
                        <div onClick={goReview} style={{
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#ffffff",
                            borderRadius: 6,
                            marginTop: 16,
                            border: "1px solid #dfdfdf",

                            textAlign: "center",
                            fontSize: 18,
                            opacity: 0.6,
                            color: "#010608",
                            cursor: "pointer",
                            fontFamily: "NotoSansCJKkr",
                        }}>분할결제 스케쥴 확인하기</div>
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
                        <span style={{ color: "#010608" }}>되었습니다!</span>
                    </div>
                    <MOrderDetail
                        wishTime={wish}
                        title={itemDes}
                        price={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                        name={shipDetail.name}
                        orderNum={order}
                        number={shipDetail.addressNum}
                        address={shipDetail.address}
                        addressDetail={shipDetail.addressDetail}
                        phoneNumber={shipDetail.phoneNumber}
                        deliveryClaim={shipDetail.request}
                        img={image}
                    />
                    <MStandardButton
                        text="홈으로"
                        onClick={() => history.replace("/")}
                        state={true}
                        marginTop={"8vw"}
                    />
                    <div onClick={() => history.push("/review/main")} style={{
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#ffffff",
                        alignSelf: "center",
                        cursor: "pointer",
                        marginTop: "4vw",
                        marginBottom: "4vw",
                        borderRadius: 6,
                        border: "1px solid #dfdfdf",

                        fontSize: 16,
                        opacity: 0.6,
                        fontFamily: "NotoSansCJKkr",
                        color: "#010608",
                        textAlign: "center"
                    }}>분할결제 스케쥴 확인하기</div>
                </div>
            </Mobile>
        </>
    )
}