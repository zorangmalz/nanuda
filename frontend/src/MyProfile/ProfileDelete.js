import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import { Header, MHeader, StandardButton, MStandardButton, StandardModal, StandardChoiceModal } from "../Style";

export default function ProfileDelete() {
    let history = useHistory()
    const [agree, setAgree] = useState(false)

    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteFinalModal, setDeleteFinalModal] = useState(false)
    const [payFinish, setPayFinish] = useState(true)

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

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="회원탈퇴" goBack={true} />
                        <div style={{
                            marginTop: 32,
                            marginLeft: 20,

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 21,
                            fontWeight: "bold",
                            color: "#010608",
                            lineHeight: 1.43,
                        }}>
                            잠깐! 회원탈퇴하면 다음과 같은 <br />
                            혜택이 사라져요
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            opacity: 0.8,
                            color: "#010608",

                            marginTop: 16,
                            marginLeft: 20,
                        }}>
                            <div style={{ marginBottom: 8 }}>1. 나누다 포인트가 사라져요.</div>
                            <div>2. 더이상 자유로운 분할결제가 불가능해요.</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: 20,
                            marginTop: 16,
                        }}>
                            <BsCheck
                                onClick={() => setAgree(!agree)}
                                style={{
                                    cursor: "pointer",
                                }}
                                size={24}
                                color={agree ? "#26c1f0" : "#dbdbdb"}
                            />
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                color: "#010608",
                                marginLeft: 8,
                            }}>위 내용에 동의합니다.</div>
                        </div>
                        <StandardButton
                            marginTop={32}
                            text="탈퇴하기"
                            onClick={agree ? () => setDeleteModal(true) : () => {}}
                            state={agree}
                        />
                        {deleteModal && payFinish ?
                            <StandardChoiceModal
                                title="탈퇴하시겠습니까?"
                                content="더이상 자유로운 분할결제를 할 수 없습니다."
                                canceltext="취소"
                                buttontext="탈퇴하기"
                                onCancelClick={() => setDeleteModal(false)}
                                onClick={() => {
                                    setDeleteModal(false)
                                    setDeleteFinalModal(true)
                                }}
                            />
                            :
                            <></>
                        }
                        {deleteModal && !payFinish ?
                            <StandardModal
                                title="기존 분할결제를 완료해주세요."
                                content={`잔여 분할결제를 완료하지 않으면 ${"\n"}
                                    탈퇴할 수 없습니다.`}
                                buttontext="확인"
                                onClick={() => setDeleteModal(false)}
                            />
                            :
                            <></>
                        }
                        {deleteFinalModal ?
                            <StandardModal
                                title="탈퇴 완료"
                                content={`탈퇴가 완료되었습니다. ${"\n"}
                            감사합니다.`}
                                buttontext="확인"
                                onClick={() => {
                                    setDeleteFinalModal(false)
                                    history.push("/")
                                }}
                            />
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

                    width: "100vw",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="회원탈퇴" goBack={true} />
                    <div style={{
                        marginTop: "8vw",
                        marginLeft: "5vw",

                        fontFamily: "NotoSansCJKkr",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#010608",
                        lineHeight: 1.43,
                    }}>
                        잠깐! 회원탈퇴하면 다음과 같은 <br />
                        혜택이 사라져요
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#010608",

                        marginTop: "4vw",
                        marginLeft: "5vw",
                    }}>
                        <div style={{ marginBottom: 4 }}>1. 나누다 포인트가 사라져요.</div>
                        <div>2. 더이상 자유로운 분할결제가 불가능해요.</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

                        marginLeft: "5vw",
                        marginTop: "4vw",
                    }}>
                        <BsCheck
                            onClick={() => setAgree(!agree)}
                            style={{
                                cursor: "pointer",
                            }}
                            size={20}
                            color={agree ? "#26c1f0" : "#dbdbdb"}
                        />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            fontFamily: "NotoSansCJKkr",
                            color: "#010608",
                            marginLeft: "2vw",
                        }}>위 내용에 동의합니다.</div>
                    </div>
                    <MStandardButton
                        marginTop={"8vw"}
                        text="탈퇴하기"
                        onClick={agree ? () => setDeleteModal(true) : () => {}}
                        state={agree}
                    />
                    {deleteModal && payFinish ?
                        <StandardChoiceModal
                            title="탈퇴하시겠습니까?"
                            content="더이상 자유로운 분할결제를 할 수 없습니다."
                            canceltext="취소"
                            buttontext="탈퇴하기"
                            onCancelClick={() => setDeleteModal(false)}
                            onClick={() => {
                                setDeleteModal(false)
                                setDeleteFinalModal(true)
                            }}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                    {deleteModal && !payFinish ?
                        <StandardModal
                            title="기존 분할결제를 완료해주세요."
                            content={`잔여 분할결제를 완료하지 않으면 ${"\n"}
                                    탈퇴할 수 없습니다.`}
                            buttontext="확인"
                            onClick={() => setDeleteModal(false)}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                    {deleteFinalModal ?
                        <StandardModal
                            title="탈퇴 완료"
                            content={`탈퇴가 완료되었습니다. ${"\n"}
                            감사합니다.`}
                            buttontext="확인"
                            onClick={() => {
                                setDeleteFinalModal(false)
                                history.push("/")
                            }}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                </div>
            </Mobile>
        </>
    )
}