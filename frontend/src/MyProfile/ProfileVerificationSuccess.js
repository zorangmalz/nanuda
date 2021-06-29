import React from "react";
import { Default, Mobile } from "../App";
import { Header, MHeader, StandardButton, MStandardButton } from "../Style";
import { AiOutlineCheck } from "react-icons/ai";
import { useHistory } from "react-router";

export default function ProfileVerificationSuccess() {
    //화면 변경
    let history = useHistory()
    function goHome() {
        history.replace("/")
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
                        <Header content="미션 결과" goX={true} />
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
                        }}>미션이 완료
                                <span style={{ color: "#010608" }}>되었습니다!</span>
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            opacity: 0.8,
                            color: "#010608",
                            marginTop: 8,
                            textAlign: "center",
                        }}>검토 후 승인 여부를 알림을 통해 알려드릴게요.</div>
                        <StandardButton 
                            marginTop={32}
                            text="홈으로"
                            onClick={goHome}
                            state={true}
                            marginBottom={40}
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
                    <MHeader content="미션 결과" goX={true} />
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
                        marginTop: "8vw",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#26c1f0",
                        fontFamily: "NotoSansCJKkr"
                    }}>미션이 완료
                        <span style={{ color: "#010608" }}>되었습니다!</span>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#010608",
                        marginTop: "2vw",
                        textAlign: "center",
                    }}>검토 후 승인 여부를 알림을 통해 알려드릴게요.</div>
                    <MStandardButton
                        marginTop={"8vw"}
                        text="홈으로"
                        onClick={goHome}
                        state={true}
                        marginBottom={"10vw"}
                    />
                </div>
            </Mobile>
        </>
    )
}