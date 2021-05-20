import React from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function Notice() {
    const NoticeData = [
        {
            tag: "결제",
            title: "카드 결제 추가 관련 공지",
            date: "2020.12.28",
        },
        {
            tag: "결제",
            title: "카드 결제 추가 관련 공지",
            date: "2020.12.28",
        },
        {
            tag: "결제",
            title: "카드 결제 추가 관련 공지",
            date: "2020.12.28",
        },
        {
            tag: "결제",
            title: "카드 결제 추가 관련 공지",
            date: "2020.12.28",
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
                    minHeight: "100vh",
                    backgroundColor: "#f2f3f8",
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
                        <Header content="공지사항" goBack={true} />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: 440,
                            marginTop: 32,
                        }}>
                            {NoticeData.map(item => (<NoticeList tag={item.tag} title={item.title} date={item.date} />))}
                        </div>
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
                    alignItems: "center",
                }}>
                    <MHeader content="공지사항" goBack={true} />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "90vw",
                        marginTop: "4vw",
                    }}>
                        {NoticeData.map(item => (<MNoticeList tag={item.tag} title={item.title} date={item.date} />))}
                    </div>
                </div>
            </Mobile>
        </>
    )
}

function NoticeList({ tag, title, date }) {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/noticepost")} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            paddingBottom: 16,
            marginBottom: 16,
            width: 440,
            cursor: "pointer"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#202426",
                fontWeight: "bold",
                marginBottom: 8,
            }}># {tag}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                width: 440,
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426"
                }}>{title}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    color: "#202426",
                }}>{date}</div>
            </div>
        </div>
    )
}

function MNoticeList({ tag, title, date }) {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/noticepost")} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            paddingBottom: "4vw",
            marginBottom: "4vw",
            width: "90vw",
            cursor: "pointer"
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 14,
                color: "#202426",
                fontWeight: "bold",
                marginBottom: "2vw",
            }}># {tag}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                width: "90vw",
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426"
                }}>{title}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                }}>{date}</div>
            </div>
        </div>
    )
}