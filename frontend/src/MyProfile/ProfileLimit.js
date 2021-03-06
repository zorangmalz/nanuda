import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Default, Mobile } from "../App";
import { Header, MHeader, numberWithCommas } from "../Style";

export default function ProfileLimit() {
    const history = useHistory()

    //현재 유저 정보
    const [user, setUser] = useState({
        name: "",
        limit: 0,
    })

    useEffect(() => {
        fetch('https://api.1n1n.io/userinfo/', {
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
                    name: response.name,
                    limit: response.limit,
                })
            })
            .catch(err => console.log(err))
    }, [])

    const [jobExist, setJobExist] = useState(false)
    useEffect(() => {
        fetch('https://api.1n1n.io/user/mission', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include"
        })
            .then(res => res.json())
            .then(res => {
                if (res != null && res != undefined) {
                    res.forEach(item => {
                        if (item.mission_type === "job") {
                            setJobExist(true)
                        }
                    })
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
                        <Header content="미션" goBack={true} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 32,
                            marginLeft: 20,
                        }}>{user.name}님의 총 한도</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 32,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 16,
                            marginBottom: 16,
                            marginLeft: 20,
                        }}>{numberWithCommas(user.limit)} 원</div>
                        <Progressbar width={440} percent={percentCalculator(user.limit, 300000)} />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#26c1f0",

                            marginTop: 8,
                            marginRight: 20,
                            alignSelf: "flex-end",
                        }}>총한도 : 300,000 원</div>
                        <div style={{
                            width: 408,
                            marginTop: 16,
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            alignSelf: "center",

                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#010608"
                            }}>1/n 팁!</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                opacity: 0.8,
                                color: "#010608",
                                marginTop: 4,
                            }}>현재 한도 금액은 최대 분할결제가 가능한 금액을 의미합니다. <br />
                                예를 들어 60만원 짜리 상품을 구매하는 경우 30만원을 선결제 후 <br />
                                나머지 30만원을 2~4 분할 결제 할 수 있습니다. <br />
                                분할결제를 완료한 만큼 한도가 회복됩니다. </div>
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#20246",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>한도 증가 미션</div>
                        {!jobExist ?
                            <MissionForm
                                title="직업 인증하기"
                                content="한도 10만원 증가"
                                ongoing={true}
                                onClick={() => history.push("/profile/verification/main")}
                                mobile={false}
                            />
                            :
                            <></>
                        }
                        <div style={{
                            width: 408,
                            height: 120,
                            padding: "0px 16px",
                            borderRadius: 6,
                            border: "1px solid #25c1f0",
                            backgroundColor: "#ffffff",
                            marginTop: 16,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",
                        }}>
                            <div style={{
                                width: 72,
                                height: 72,
                                borderRadius: 36,
                                backgroundColor: "#f2f3f8"
                            }} />
                            <div style={{ marginLeft: 16 }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    marginBottom: 8,
                                }}>추가 예정</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 14,
                                    color: "#010608"
                                }}>다양한 미션을 준비하고 있어요.</div>
                            </div>
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#20246",

                            marginTop: 32,
                            marginLeft: 20,
                        }}>완료된 미션</div>
                        {!jobExist ?
                            <div style={{
                                width: 408,
                                height: 120,
                                padding: "0px 16px",
                                borderRadius: 6,
                                border: "1px solid #25c1f0",
                                backgroundColor: "#ffffff",
                                marginTop: 16,

                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                alignSelf: "center",
                            }}>
                                <div style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: 36,
                                    backgroundColor: "#fff500"
                                }} />
                                <div style={{ marginLeft: 16 }}>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        marginBottom: 8,
                                    }}>완료한 미션이 없습니다.</div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        opacity: 0.6,
                                        fontSize: 14,
                                        color: "#010608"
                                    }}>미션을 수행하고 한도를 늘려보세요.</div>
                                </div>
                            </div>
                            :
                            <MissionForm
                                title="직업 인증하기"
                                content="한도 10만원 증가"
                                ongoing={false}
                                onClick={() => history.push("/profile/verification/main")}
                                mobile={false}
                            />
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
                    <MHeader content="미션" goBack={true} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: 28,
                        marginLeft: "5vw",
                    }}>{user.name}님의 총 한도</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: 14,
                        marginBottom: 14,
                        marginLeft: "5vw",
                    }}>{numberWithCommas(user.limit)} 원</div>
                    <Progressbar width="90vw" percent={percentCalculator(user.limit, 300000)} />
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#26c1f0",

                        marginTop: 4,
                        marginRight: "5vw",
                        alignSelf: "flex-end",
                    }}>총한도 : 300,000 원</div>
                    <div style={{
                        width: "82vw",
                        marginTop: 12,
                        padding: "4vw",
                        borderRadius: 6,
                        backgroundColor: "#f2f3f8",
                        alignSelf: "center",

                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#010608"
                        }}>1/n 팁!</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            opacity: 0.8,
                            color: "#010608",
                            marginTop: 4,
                        }}>현재 한도 금액은 최대 분할결제가 가능한 금액을 의미합니다.
                            예를 들어 60만원 짜리 상품을 구매하는 경우 30만원을 선결제 후
                            나머지 30만원을 2~4 분할 결제 할 수 있습니다.
                            분할결제를 완료한 만큼 한도가 회복됩니다. </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#20246",

                        marginTop: 28,
                        marginLeft: "5vw",
                    }}>한도 증가 미션</div>
                    {!jobExist ?
                        <MissionForm
                            title="직업 인증하기"
                            content="한도 10만원 증가"
                            ongoing={true}
                            onClick={() => history.push("/profile/verification/main")}
                            mobile={true}
                        />
                        :
                        <></>
                    }
                    <div style={{
                        width: "82vw",
                        height: 90,
                        paddingLeft: "4vw",
                        paddingRight: "4vw",
                        borderRadius: 6,
                        border: "1px solid #25c1f0",
                        backgroundColor: "#ffffff",
                        marginTop: 12,

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                    }}>
                        <div style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: "#f2f3f8"
                        }} />
                        <div style={{ marginLeft: 12 }}>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#010608",
                                marginBottom: 4,
                            }}>추가 예정</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 12,
                                color: "#010608"
                            }}>다양한 미션을 준비하고 있어요.</div>
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#20246",

                        marginTop: 28,
                        marginLeft: "5vw",
                    }}>완료된 미션</div>
                    {!jobExist ?
                        <div style={{
                            width: "82vw",
                            height: 90,
                            paddingLeft: "4vw",
                            paddingRight: "4vw",
                            borderRadius: 6,
                            border: "1px solid #25c1f0",
                            backgroundColor: "#ffffff",
                            marginTop: 12,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",
                            marginBottom: "5vw",
                        }}>
                            <div style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: "#fff500"
                            }} />
                            <div style={{ marginLeft: 12 }}>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    marginBottom: 4,
                                }}>완료한 미션이 없습니다.</div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 12,
                                    color: "#010608"
                                }}>미션을 수행하고 한도를 늘려보세요.</div>
                            </div>
                        </div>
                        :
                        <MissionForm
                            title="직업 인증하기"
                            content="한도 10만원 증가"
                            ongoing={false}
                            onClick={() => history.push("/profile/verification/main")}
                            mobile={true}
                        />
                    }
                </div>
            </Mobile>
        </>
    )
}

function Progressbar({ width, percent }) {
    return (
        <div style={{
            width: width,
            height: 8,
            borderRadius: 12,
            backgroundColor: "#dbdbdb",
            alignSelf: "center",
        }}>
            <div style={{
                width: percent + "%",
                height: 8,
                borderRadius: 12,
                backgroundColor: "#26c1f0"
            }} />
        </div>
    )
}

function percentCalculator(a, b) {
    return (a * 100 / b).toFixed(0)
}

function MissionForm({ title, content, ongoing, onClick, mobile }) {
    return (
        <div style={{
            width: mobile ? "82vw" : 408,
            height: mobile ? 90 : 120,
            padding: mobile ? "0vw 4vw" : "0px 16px",
            borderRadius: 6,
            border: "1px solid #25c1f0",
            backgroundColor: "#ffffff",
            marginTop: mobile ? "4vw" : 16,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "center",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div style={{
                    width: mobile ? 60 : 72,
                    height: mobile ? 26 : 48,
                    backgroundColor: "#26f0b0"
                }} />
                <div style={{ marginLeft: mobile ? "4vw" : 16 }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: mobile ? 14 : 16,
                        fontWeight: "bold",
                        color: "#010608",
                        marginBottom: mobile ? "2vw" : 8,
                    }}>{title}</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        opacity: 0.6,
                        fontSize: mobile ? 12 : 14,
                        color: "#010608"
                    }}>{content}</div>
                </div>
            </div>
            {ongoing ?
                <div onClick={onClick} style={{
                    padding: mobile ? "2vw 3.5vw" : "8px 14px",
                    borderRadius: 6,
                    backgroundColor: "#010608",

                    fontFamily: "NotoSansCJKkr",
                    fontSize: mobile ? 12 : 14,
                    fontWeight: "bold",
                    color: "#ffffff",
                    textAlign: "center",

                    cursor: "pointer",
                }}>진행 가능</div>
                :
                <></>
            }
        </div>
    )
}