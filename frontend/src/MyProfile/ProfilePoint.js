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
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res != null && res != undefined) {
                    setEntirePoint(res["point_entire"])
                    var array = []
                    for (var i = 0; i < res["point_list"].length; i++) {
                        array.push({
                            "date": res["point_list"][i].date.slice(0, 10),
                            "content": res["point_list"][i].content,
                            "point": res["point_list"][i].add_or_sub ? res["point_list"][i].point : res["point_list"][i].point * (-1)
                        })
                    }
                    setPointList(pointList.concat(array))
                    console.log(pointList)
                }
            })
            .catch(err => console.log(err))
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
                        {pointList.length > 0 ? 
                            pointList.map((item) => {
                                return <PointList 
                                    date={item.date}
                                    content={item.content}
                                    price={item.point}
                                />
                            })
                            :
                            <></>
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
                    {pointList.length > 0 ?
                        pointList.map((item) => {
                            return <PointList
                                date={item.date}
                                content={item.content}
                                price={item.point}
                            />
                        })
                        :
                        <></>
                    }
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