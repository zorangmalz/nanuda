import React, { useState } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";

export default function AlarmPost() {
    let history = useHistory()
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const Mission = () => {
        return (
            <>
                <span> 자세한 사항은 </span>
                <span onClick={() => history.push("/profile/main")} style={{
                    textDecorationLine: "underline",
                    cursor: "pointer",
                    marginLeft: 2,
                    marginRight: 2,
                }}>마이페이지</span>
                <span> 에서 확인해주세요. </span>
            </>
        )
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
                        <Header content="알림" goBack={true} />
                        <Post
                            title="미션에 성공했습니다."
                            date="2020.12.28"
                            content="(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다."
                            type={<Mission />}
                        />
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
                    <MHeader content="알림" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "8vw",
                        marginLeft: "5vw",
                    }}>미션에 성공했습니다</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        opacity: 0.6,
                        color: "#010608",
                        marginTop: "2vw",
                        paddingBottom: "4vw",
                        marginLeft: "5vw",
                        borderBottom: "1px solid rgba(1, 6, 8, 0.4)",
                        width: "90vw",
                        marginBottom: "4vw",
                    }}>2020.12.28</div>
                    <div style={{
                        width: "90vw",
                        minHeight: "50vh",
                        alignSelf: "center",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#010608",
                        lineHeight: 1.5
                    }}>
                        <span>(결제) 4-29일 회원님의 우리은행계좌에서 100,000원이 자동이체되었습니다. 자세한 사항은 </span>
                        <span onClick={() => history.push("/profile/main")} style={{
                            textDecorationLine: "underline",
                            cursor: "pointer",
                            marginLeft: 2,
                            marginRight: 2,
                        }}>마이페이지</span>
                        <span> 에서 확인해주세요. </span>
                    </div>
                </div>
            </Mobile>
        </>
    )
}

const Post = ({ title, date, content, type }) => {
    let history = useHistory()
    return (
        <>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                fontWeight: "bold",
                color: "#010608",
                marginTop: 32,
                marginLeft: 20,
            }}>{title}</div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                opacity: 0.6,
                color: "#010608",
                marginTop: 8,
                paddingBottom: 16,
                marginLeft: 20,
                borderBottom: "1px solid rgba(1, 6, 8, 0.4)",
                width: 440,
                marginBottom: 16,
            }}>{date}</div>
            <div style={{
                width: 440,
                minHeight: "50vh",
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#010608",
                lineHeight: 1.5
            }}>
                <span>{content}</span>
                {type}
            </div>
        </>
    )
}