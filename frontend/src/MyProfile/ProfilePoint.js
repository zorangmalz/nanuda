import React, { useEffect, useState } from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader, numberWithCommas } from "../Style";

export default function ProfilePoint() {
    const [pointList, setPointList] = useState([])
    const [entirePoint, setEntirePoint] = useState(0)
    useEffect(() => {
        setPointList([])
        fetch('https://haulfree.link/userpoint', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res)
            res.json()
        })
        .then(res => {
            console.log(res)
            setEntirePoint(res.point_entire)
            // var array = []
            // for(var i = 0; i < res.length; i++) {
            //     array.push({
            //         "date": res[i].date,
            //         "content": res[i].content,
            //         "add_or_sub": res[i].add_or_sub,
            //         "point": res[i].point
            //     })
            // }
            // setPointList(pointList.concat(array))
            // console.log(pointList)
        })
        .catch(err =>  console.log(err))
    }, [])
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

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="1/n 포인트" goBack={true} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>1/n 포인트</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 32,
                            fontWeight: "bold",
                            color: "#010608",

                            width: 440,
                            marginTop: 16,
                            paddingBottom: 32,
                            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                            alignSelf: "center",
                        }}>{numberWithCommas(entirePoint)} 원</div>
                        <PointList date="2021.04.13" content="결제시 사용" price={-10000} />
                        <PointList date="2021.04.13" content="따라사기 보상 적립" price={200} />
                        <PointList date="2021.04.13" content="가입보상 적립" price={10000} />
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
                    <MHeader content="1/n 포인트" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",

                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>1/n 포인트</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#010608",

                        width: "90vw",
                        marginTop: "4vw",
                        paddingBottom: "8vw",
                        borderBottom: "1px solid rgba(1, 6, 8, 0.2)",
                        alignSelf: "center",
                    }}>{numberWithCommas(entirePoint)} 원</div>
                    <MPointList date="2021.04.13" content="결제시 사용" price={-10000} />
                    <MPointList date="2021.04.13" content="따라사기 보상 적립" price={200} />
                    <MPointList date="2021.04.13" content="가입보상 적립" price={10000} />
                </div>
            </Mobile>
        </>
    )
}

function PointList({ date, content, price }) {
    return (
        <div style={{
            width: 440,
            marginTop: 16,
            paddingBottom: 16,
            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                opacity: 0.6,
                fontSize: 16,
                color: "#20246",
            }}>{date}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 8,
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#010608",
                }}>{content}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: price > 0 ? "#26c1f0" : "#f72b2b"
                }}>{price > 0 ? "+" + price + " 원" : price + " 원"}</div>
            </div>
        </div>
    )
}

function MPointList({ date, content, price }) {
    return (
        <div style={{
            width: "90vw",
            marginTop: "4vw",
            paddingBottom: "4vw",
            borderBottom: "1px solid rgba(1, 6, 8, 0.2)",

            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                opacity: 0.6,
                fontSize: 14,
                color: "#20246",
            }}>{date}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 8,
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#010608",
                }}>{content}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: price > 0 ? "#26c1f0" : "#f72b2b"
                }}>{price > 0 ? "+" + price + " 원" : price + " 원"}</div>
            </div>
        </div>
    )
}