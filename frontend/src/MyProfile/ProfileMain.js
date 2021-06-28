import React, { useEffect, useState } from "react";
import { Default, Mobile } from "../App";
import { BottomTag, Header, MBottomTag, MHeader, numberWithCommas } from "../Style";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import airpod from "../images/airpod.png"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "../css/haulfree.css";

export default function ProfileMain() {
    const history = useHistory()

    //현재 유저 정보
    const [user, setUser] = useState({
        name: "",
        user_email: "",
        limit: 0,
        point: 0,
        review: 0,
        product: 0,
        uid: "",
        profile: ""
    })

    useEffect(() => {
        fetch('https://haulfree.link/userinfo/', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
                setUser({
                    ...user,
                    user_email: response.user_email,
                    name: response.name,
                    limit: response.limit,
                    point: response.point_entire,
                })
            })
            .catch(err => console.log(err))
    }, [])
    const [item,setItem]=useState([])
    async function getSchedule(){
        fetch('https://haulfree.link/order/profile', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(response => {
               console.log(response)
               setItem(response)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        getSchedule()
    },[])
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
                    backgroundColor: "#f2f3f8",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="마이페이지" goBack={true} />
                        <div style={{
                            marginTop: 32,
                            width: 440,
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginBottom: 16,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start"
                            }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 21,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    marginBottom: 8,
                                }}>안녕하세요 {user.name}님!</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#010608",
                                }}>{user.user_email}</div>
                            </div>
                            <MdKeyboardArrowRight onClick={() => history.push("/profile/edit")} style={{
                                cursor: "pointer"
                            }} size={24} color="rgba(1, 6, 8, 0.6)" />
                        </div>
                        <div style={{
                            width: 440,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 8,
                            paddingBottom: 8,
                            backgroundColor: "#010608",

                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <ProfileInfo title="위시딜 한도" data={user.limit} unit="원" onClick={() => history.push('/profile/limit')} />
                            <ProfileInfo title="하울딜 찬스" data={1} unit="회" chance={true} />
                            <ProfileInfo title="포인트" data={user.point} unit="P" onClick={() =>  history.push('/profile/point')} />
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>분할결제 진행중인 상품</div>
                        {item.map(item=>{
                            <OngoingProduct 
                            img={item.wish_image}
                            date="2021.03.13"
                            title={item.wish_title}
                            participateNum={3}
                            participateDate="5/13"
                            complete={false}
                        />
                        })}
                        
                    
                        <ManageList name="결제 수단 관리" path="profile/payment/main" />
                        <ManageList name="상품 구매 내역" path="profile/product/main" />
                        <ManageList name="내 리뷰" path="profile/review" />
                        <BottomTag marginTop={120} marginBottom={0} />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="마이페이지" goBack={true} />
                    <div style={{
                        marginTop: "8vw",
                        width: "90vw",
                        paddingLeft: "5vw",
                        paddingRight: "5vw",
                        marginBottom: "4vw",

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#010608",
                                marginBottom: 8,
                            }}>안녕하세요 {user.name}님!</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#010608",
                            }}>{user.user_email}</div>
                        </div>
                        <MdKeyboardArrowRight onClick={() => history.push("/profile/edit")} style={{
                            cursor: "pointer"
                        }} size={20} color="rgba(1, 6, 8, 0.6)" />
                    </div>
                    <div style={{
                        width: "90vw",
                        paddingLeft: "5vw",
                        paddingRight: "5vw",
                        paddingTop: "2vw",
                        paddingBottom: "2vw",
                        backgroundColor: "#010608",

                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <ProfileInfo title="위시딜 한도" data={user.limit} unit="원" mobile={true} onClick={() => history.push('/profile/limit')}  />
                        <ProfileInfo title="하울딜 찬스" data={1} unit="회" mobile={true} chance={true} />
                        <ProfileInfo title="포인트" data={user.point} unit="P" mobile={true} onClick={() =>  history.push('/profile/point')} />
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",

                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>분할결제 진행중인 상품</div>
                    <MOngoingProduct
                        img={airpod}
                        date="2021.03.13"
                        title="Apple AirPods Pro 
                            애플 에어팟 프로 1세대 무선충전형"
                        participateNum={3}
                        participateDate="5/13"
                        complete={false}
                    />
                    <MOngoingProduct
                        img={airpod}
                        date="2021.03.13"
                        title="Apple AirPods Pro 
                            애플 에어팟 프로 1세대 무선충전형"
                        participateNum={2}
                        participateDate="4/13"
                        complete={true}
                    />
                    <ManageList name="결제 수단 관리" path="profile/payment/main" mobile={true} />
                    <ManageList name="상품 구매 내역" path="profile/product/main" mobile={true} />
                    <ManageList name="내 리뷰" path="profile/review" mobile={true} />
                    <MBottomTag marginTop={60} marginBottom={0} />
                </div>
            </Mobile>
        </>
    )
}

const ProfileInfo = ({ title, data, unit, mobile, chance, onClick }) => {
    const [chanceInfo, setChanceInfo] = useState(false)
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: mobile ? "90vw" : 440,
            paddingTop: mobile ? "2vw" : 8,
            paddingBottom: mobile ? "2vw" : 8,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div onClick={onClick} style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 14 : 16,
                    color: "#ffffff",
                    marginRight: mobile ? "1vw" : 4,
                    cursor: "pointer"
                }}>{title}</div>
                {chance ?
                    <>
                        <AiOutlineExclamationCircle onClick={() => setChanceInfo(!chanceInfo)} color="#ffffff" size={mobile ? 16 : 20} style={{ cursor: "pointer" }} />
                        <div data-tooltip-text="THIS IS TOOLTIP!!" className="arrow_box" />
                    </>
                    :
                    <></>
                }
            </div>
            <div onClick={onClick} style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 18 : 21,
                fontWeight: "bold",
                color: "#ffffff",
                cursor: "pointer"
            }}>{numberWithCommas(data)} {unit}</div>
        </div>
    )
}

const OngoingProduct = ({ img, date, title, participateDate, participateNum, complete }) => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                width: 440,
                height: 120,
                marginTop: 16,
                marginLeft: 20,
            }}>
                <img alt="product" src={img} style={{ width: 120 }} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",

                    height: 120,
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        fontSize: 16,
                        color: "#010608",
                    }}>{date}</div>
                    <div style={{
                        maxWidth: 260,
                        fontSize: 16,
                        color: "#010608",
                    }}>{title}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        color: "#26c1f0",
                        fontWeight: "bold",
                    }}>{participateNum}차 결제 예정 ({participateDate})</div>
                </div>
                <MdKeyboardArrowRight size={28} color="#010608" />
            </div>
            {complete ?
                <div style={{ marginBottom: 16 }} />
                :
                <div style={{
                    width: 440,
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#f72b2b",
                    marginLeft: 20,
                    letterSpacing: -0.35,
                    marginTop: 16,
                }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>
            }
        </>
    )
}

const MOngoingProduct = ({ img, date, title, participateDate, participateNum, complete }) => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                width: "90vw",
                height: "25vw",
                marginTop: "4vw",
                marginLeft: "5vw",
            }}>
                <img alt="product" src={img} style={{ width: "25vw" }} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",

                    height: "25vw",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        fontSize: 14,
                        color: "#010608",
                    }}>{date}</div>
                    <div style={{
                        maxWidth: "55vw",
                        fontSize: 14,
                        color: "#010608",
                    }}>{title}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "#26c1f0",
                        fontWeight: "bold",
                    }}>{participateNum}차 결제 예정 ({participateDate})</div>
                </div>
                <MdKeyboardArrowRight size={24} color="#010608" />
            </div>
            {complete ? 
                <div style={{ marginBottom: "4vw" }} />
                :
                <div style={{
                    width: "90vw",
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 12,
                    color: "#f72b2b",
                    marginLeft: "5vw",
                    letterSpacing: -0.35,
                    marginTop: "4vw",
                }}>7-29일까지 결제를 완료하지 않으면 추심이 진행됩니다. 결제를 서둘러주세요.</div>
            }
        </>
    )
}

const ManageList = ({ name, path, mobile }) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/" + path)} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
            paddingBottom: mobile ? "4vw" : 16,
            marginTop: mobile ? "4vw" : 16,
            cursor: "pointer",
            width: mobile ? "90vw" : 440,
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: mobile ? 16 : 18,
                color: "#010608"
            }}>{name}</div>
            <IoIosArrowForward size={mobile ? 20 : 24} color="#dbdbdb" />
        </div>
    )
}