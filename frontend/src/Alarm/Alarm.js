import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import point from "../images/point.png"

export default function Alarm() {
    const data = [
        {
            read: false,
            title: "3차 결제가 완료되었습니다.",
            content: "(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 마이페이지에서 확인해주세요.",
            date: "2021-04-26 12:00"
        },
        {
            read: true,
            title: "3차 결제가 완료되었습니다.",
            content: "(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 마이페이지에서 확인해주세요.",
            date: "2021-04-26 12:00"
        },
        {
            read: false,
            title: "3차 결제가 완료되었습니다.",
            content: "(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 마이페이지에서 확인해주세요.",
            date: "2021-04-26 12:00"
        },
        {
            read: false,
            title: "3차 결제가 완료되었습니다.",
            content: "(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 마이페이지에서 확인해주세요.",
            date: "2021-04-26 12:00"
        },
        {
            read: true,
            title: "3차 결제가 완료되었습니다.",
            content: "(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 마이페이지에서 확인해주세요.",
            date: "2021-04-26 12:00"
        },
    ]
    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: "#f2f3f8"
                }}>
                    <WebIntro />
                    {/* 절반을 나눔 */}
                    <div style={{
                        width: "50%",
                        minWidth: 480,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="알림" goBack={true} />
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                alignSelf: "center",

                                width: 440,
                                marginTop: 32,
                                marginBottom: 32,
                            }}>
                                <div style={{
                                    width: 210,
                                    paddingTop: 12,
                                    paddingBottom: 12,
                                    border: "1px solid rgba(5, 26, 26, 0.2)",
                                    cursor: "pointer",
                                    borderRadius: 6,

                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    color: "rgba(5, 26, 26, 0.8)",
                                    textAlign: "center"
                                }}>전체 삭제</div>
                                <div style={{
                                    width: 210,
                                    paddingTop: 12,
                                    paddingBottom: 12,
                                    backgroundColor: "#051a1a",
                                    cursor: "pointer",
                                    borderRadius: 6,

                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    color: "#ffffff",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}>전체 읽음</div>
                            </div>
                            {data.map(item => <AlarmButton 
                                read={item.read}
                                title={item.title}
                                content={item.content}
                                date={item.date}
                            />)}
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="알림" goBack={true} />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        alignSelf: "center",

                        width: "90vw",
                        marginTop: "8vw",
                        marginBottom: "8vw",
                    }}>
                        <div style={{
                            width: "40vw",
                            paddingTop: "3vw",
                            paddingBottom: "3vw",
                            border: "1px solid rgba(5, 26, 26, 0.2)",
                            cursor: "pointer",
                            borderRadius: 6,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            color: "rgba(5, 26, 26, 0.8)",
                            textAlign: "center"
                        }}>전체 삭제</div>
                        <div style={{
                            width: "40vw",
                            paddingTop: "3vw",
                            paddingBottom: "3vw",
                            backgroundColor: "#051a1a",
                            cursor: "pointer",
                            borderRadius: 6,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 14,
                            color: "#ffffff",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}>전체 읽음</div>
                    </div>
                    {data.map(item => <MAlarmButton
                        read={item.read}
                        title={item.title}
                        content={item.content}
                        date={item.date}
                    />)}
                </div>
            </Mobile>
        </>
    )
}

const AlarmButton = ({ read, title, content, date }) => {
    return (
        <>
            <div style={{
                width: 440,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                marginTop: 16,

                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                alignSelf: "center",
            }}>
                <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: read ? "#ffffff" : "#2dd9d3",
                    marginTop: 8,
                    marginRight: 16,
                }} />
                <div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#051a1a",
                        marginBottom: 8,
                        opacity: read ? 0.6 : 1,
                        width: 410
                    }}>{title}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        opacity: read ? 0.4 : 0.6,
                        width: 410,
                        color: "#051a1a",
                        marginBottom: 8,
                    }}>{content}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        opacity: 0.6,
                        width: 410,
                        color: "#051a1a",
                    }}>{date}</div>
                </div>
            </div>
        </>
    )
}

const MAlarmButton = ({ read, title, content, date }) => {
    return (
        <>
            <div style={{
                width: "90vw",
                paddingBottom: "4vw",
                borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
                marginTop: "4vw",

                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                alignSelf: "center",
            }}>
                <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: read ? "#ffffff" : "#2dd9d3",
                    marginTop: 8,
                    marginRight: 16,
                }} />
                <div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#051a1a",
                        marginBottom: 8,
                        opacity: read ? 0.6 : 1,
                        width: "82vw"
                    }}>{title}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        opacity: read ? 0.4 : 0.6,
                        width: "82vw",
                        color: "#051a1a",
                        marginBottom: 8,
                    }}>{content}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        opacity: 0.6,
                        width: "82vw",
                        color: "#051a1a",
                    }}>{date}</div>
                </div>
            </div>
        </>
    )
}