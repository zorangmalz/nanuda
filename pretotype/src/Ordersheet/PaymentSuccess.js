import React, { useState, useEffect } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import { AiOutlineCheck } from "react-icons/ai";
import { MOrderDetail, OrderDetail } from "./PaymentFail";
import { useHistory, useLocation } from "react-router";
import airpotone from "../images/airpotone.png"
import ipadlogo from "../images/ipadlogo.png"

export default function PaymentSuccess() {
    //WishDeal인지 여부
    const [wish, setWish] = useState(true)
    const location = useLocation()
    const [img, setImg] = useState("")
    const [title, setTitle] = useState("")
    const [prices, setPrices] = useState("")
    const myparam = location.state.myparam
    const ship = location.state.ship
    const imageUrl = location.state.image
    useEffect(() => {
        //console.log(myparam, ship)
        if (imageUrl != "airpodone" && imageUrl != "ipad") {
            try {
                setImg(myparam.myparam[0].image.url)
                if (myparam.myparam[1] === 1) {
                    setPrices(Number(myparam.myparam[3].ELprice) + Number(myparam.myparam[5]))
                } else if (myparam.mypara[1] === 2) {
                    setPrices(Number(myparam.myparam[3].Fprice) + Number(myparam.myparam[5]))
                } else {
                    setPrices(Number(myparam.myparam[3].Eprice) + Number(myparam.myparam[5]))
                }

            } catch (err) {
                console.log(err)
                //console.log(Number(myparam.myparam[3].Fprice) + Number(myparam.myparam[5]))
                //console.log(Number(myparam.myparam[3].Fprice), Number(myparam.myparam[5]))
                setImg(myparam.image[0])
                setPrices(Number(myparam.myparam[3].Fprice) + Number(myparam.myparam[5]))
            }
        } else if (imageUrl === "airpodone"){
            setImg(airpotone)
            setPrices(125000)
        } else if (imageUrl === "ipad"){
            setImg(ipadlogo)
            setPrices(340750)
        }
    }, [])


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
                                <span style={{ color: "#010608" }}>되었습니다!</span>
                        </div>
                        {imageUrl != "airpodone" && imageUrl != "ipad" ?
                            <OrderDetail
                                img={img}
                                wishTime={wish}
                                title={myparam.myparam[0].title}
                                price={Number(myparam.myparam[3].Eprice) + Number(myparam.myparam[5])}
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
                                title={imageUrl === "airpodone" ? "Apple AirPods Pro 애플 에어팟 프로 1세대 무선충전형" : "Apple iPad Air 4세대 (MYFM2KH/A), Wi-Fi, 64GB, 스페이스그레이"}
                                price={prices}
                                name={ship.name}
                                number={ship.addressNum}
                                address={ship.address}
                                addressDetail={ship.addressDetail}
                                phoneNumber={ship.phoneNumber}
                                deliveryClaim={ship.request}
                            />
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
                    paddingBottom: "8vw",
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
                        width: "90vw",
                        marginTop: "8vw",
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        fontFamily: "NotoSansCJKkr",
                        textAlign: "center",
                    }}>{wish ? "주문" : "작성"}이 완료
                        <span style={{ color: "#010608" }}>되었습니다!</span>
                    </div>
                    {imageUrl != "airpodone" && imageUrl != "ipad" ?
                        <MOrderDetail
                            img={img}
                            wishTime={wish}
                            title={myparam.myparam[0].title}
                            price={Number(myparam.myparam[3].Eprice) + Number(myparam.myparam[5])}
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
                            title={imageUrl === "airpodone" ? "Apple AirPods Pro 애플 에어팟 프로 1세대 무선충전형" : "Apple iPad Air 4세대 (MYFM2KH/A), Wi-Fi, 64GB, 스페이스그레이"}
                            price={prices}
                            name={ship.name}
                            number={ship.addressNum}
                            address={ship.address}
                            addressDetail={ship.addressDetail}
                            phoneNumber={ship.phoneNumber}
                            deliveryClaim={ship.request}
                        />
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