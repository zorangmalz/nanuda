import React, { useEffect, useState, useRef } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { BottomTag, Header, MBottomTag, MHeader } from "../Style";
import { IoPersonCircle } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router";
import AWS from "aws-sdk";

const AWS_ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY
const AWS_SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY
const S3_BUCKET = process.env.REACT_APP_S3_IMAGE_BUCKET
const REGION = process.env.REACT_APP_REGION

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
})

const imageBucket = new AWS.S3({
    params: { Bucket: "haulfree-user" },
    region: REGION
})

const MyInfoList = ({ standard, current, limit, path }) => {
    let history = useHistory()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: 110,
        }}>
            {limit ?
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 14,
                        color: "#202426",
                        opacity: 0.6,
                        marginRight: 4,
                    }}>{standard}</div>
                    <AiOutlineQuestionCircle size={16} opacity={0.4} color="#051a1a" />
                </div>
                :
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    color: "#202426",
                    opacity: 0.6,
                }}>{standard}</div>
            }
            <div onClick={() => history.push(path)} style={{
                marginTop: 8,
                fontFamily: "NotoSansCJKkr",
                fontSize: 21,
                fontWeight: "bold",
                color: "#202426",
                cursor: "pointer"
            }}>{current}</div>
        </div>
    )
}

const MMyInfoList = ({ standard, current, limit, path }) => {
    let history = useHistory()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: 80,
        }}>
            {limit ?
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 12,
                        color: "#202426",
                        opacity: 0.6,
                        marginRight: 4,
                    }}>{standard}</div>
                    <AiOutlineQuestionCircle size={10} opacity={0.4} color="#051a1a" />
                </div>
                :
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 10,
                    color: "#202426",
                    opacity: 0.6,
                }}>{standard}</div>
            }
            <div onClick={() => history.push(path)} style={{
                marginTop: 8,
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426",
                cursor: "pointer"
            }}>{current}</div>
        </div>
    )
}

const PayDate = ({ date, name, num, price }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 8,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",

                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#051a1a"
            }}>
                <div style={{
                    marginRight: 16,
                }}>{date}</div>
                <div>{name} ({num}차)</div>
            </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                fontWeight: "bold",
                color: "#202426"
            }}>{price} 원</div>
        </div>
    )
}

const MPayDate = ({ date, name, num, price }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 8,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",

                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                color: "#051a1a"
            }}>
                <div style={{
                    marginRight: "4vw",
                }}>{date}</div>
                <div>{name} ({num}차)</div>
            </div>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 12,
                fontWeight: "bold",
                color: "#202426"
            }}>{price} 원</div>
        </div>
    )
}

const ManageList = ({ name, path }) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/" + path)} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            paddingBottom: 16,
            marginTop: 16,
            cursor: "pointer",
            width: 440,
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 18,
                color: "#202426"
            }}>{name}</div>
            <IoIosArrowForward size={24} color="#dbdbdb" />
        </div>
    )
}

const MManageList = ({ name, path }) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/" + path)} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottom: "1px solid rgba(5, 26, 26, 0.2)",
            paddingBottom: "4vw",
            marginTop: "4vw",
            cursor: "pointer",
            width: "90vw",
            alignSelf: "center",
        }}>
            <div style={{
                fontFamily: "NotoSansCJKkr",
                fontSize: 16,
                color: "#202426"
            }}>{name}</div>
            <IoIosArrowForward size={20} color="#dbdbdb" />
        </div>
    )
}

export default function ProfileMain() {
    const [nickModal, setNickModal] = useState(false)

    const [input, setInput] = useState({
        nickname: ""
    })
    const { nickname } = input
    const onChange = (e) => {
        const { value, name } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    //현재 유저 정보
    const [user, setUser] = useState({
        nickname: "",
        user_email: "",
        limit: 0,
        point: 0,
        review: 0,
        product: 0,
        uid: "",
        profile: ""
    })

    useEffect(() => {
        fetch('userinfo/', {
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
                    nickname: response.nickname,
                    user_email: response.user_email,
                    limit: response.limit,
                    point: response.point,
                    uid: response.uid,
                    profile: response.profile
                })
            })
            .catch(err => console.log(err))
    }, [])

    //닉네임 변경
    async function NicknameChange() {
        await fetch('userinfo/', {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                nickname: input.nickname,
                user_email: "jinsung1048@nate.com"
            })
        })
            .then(response => response.json())
            .then(response => {
                setUser({
                    ...user,
                    nickname: input.nickname
                })
                setNickModal(false)
            }).catch(err => {
                console.log(err)
                setNickModal(false)
            })
    }

    //ImageToS3
    //이미지 진행상황
    const [progress, setProgress] = useState(0)

    //이미지 컴포넌트
    const inputFile = useRef(null)

    //이미지 저장 및 경로
    const [selectedFile, setSelectedFile] = useState([])
    const [filePath, setFilePath] = useState([])

    const onButtonclick = () => {
        inputFile.current.click()
    }

    //이미지 경로 저장
    const handelFileInput = (e) => {
        const files = e.target.files;
        setSelectedFile(selectedFile => [...selectedFile, files[0]])
        setFilePath(filePath => [...filePath, URL.createObjectURL(files[0])])
    }

    useEffect(() => {
        if (filePath.length > 0) {
            uploadFile()
        }
    }, [filePath])

    //s3로 업로드 후 URL을 RDS에 삽입 + user_id, product_id는 추후에 수정
    const uploadFile = async () => {
        var image;
        const params = {
            ACL: "public-read",
            Body: selectedFile[0],
            Bucket: "haulfree-user",
            Key: `${user.uid}/${selectedFile[0].name}`
        }

        imageBucket.putObject(params)
            .on("httpUploadProgress", (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) {
                    console.log(err)
                }
            })
        image = `https://haulfree-user.s3.ap-northeast-2.amazonaws.com/${user.uid}/${selectedFile[0].name}`
        await fetch('userinfo/', {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                profile: image,
                user_email: "jinsung1048@nate.com"
            })
        })
            .then(response => response.json())
            .then(response => {
                setUser({
                    ...user,
                    profile: response.profile
                })
            }).catch(err => {
                console.log(err)
            })
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
                        {nickModal ?
                            <>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 480,
                                    height: "100vh",
                                    position: "fixed",
                                    top: 0,
                                    zIndex: 2,
                                }}>
                                    <div style={{
                                        width: 300,
                                        paddingTop: 16,
                                        borderRadius: 6,
                                        backgroundColor: "#ffffff",

                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        zIndex: 2,
                                    }}>
                                        <div style={{
                                            fontFamily: "NotoSansCJKKR",
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            color: "#051a1a",
                                            marginBottom: 16,
                                        }}>변경할 닉네임을 입력해주세요.</div>
                                        <input value={nickname} name="nickname" onChange={onChange} placeholder="영문, 한글, 숫자 포함 8자리 이내" style={{
                                            width: 252,
                                            paddingTop: 7,
                                            paddingBottom: 7,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            borderRadius: 10,

                                            fontFamily: "NotoSansCJKKR",
                                            fontSize: 14,
                                            color: "#202426",
                                            marginBottom: 22,
                                            backgroundColor: "rgba(118, 118, 128, 0.12)",
                                            outline: 0,
                                            border: 0,
                                        }} />
                                        <div onClick={NicknameChange} style={{
                                            cursor: "pointer",
                                            width: 300,
                                            paddingTop: 14,
                                            paddingBottom: 14,
                                            backgroundColor: "#26c1f0",
                                            textAlign: "center",
                                            borderBottomLeftRadius: 6,
                                            borderBottomRightRadius: 6,

                                            fontFamily: "NotoSansCJKKR",
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            color: "#ffffff"
                                        }}>확인</div>
                                    </div>
                                </div>
                                <div style={{
                                    width: 480,
                                    height: "100vh",
                                    position: "fixed",
                                    top: 0,
                                    backgroundColor: "rgba(5, 26, 26, 0.4)",
                                    zIndex: 1
                                }} />
                            </>
                            :
                            <></>
                        }
                        <Header content="마이페이지" goBack={true} />
                        <div style={{
                            paddingTop: 32,
                            paddingBottom: 32,
                            paddingLeft: 20,
                            paddingRight: 20,

                            width: 440,
                            backgroundColor: "rgba(38, 193, 240, 0.2)",

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 16
                            }}>
                                {user.profile.length > 0 ?
                                    <>
                                        <img src={user.profile} alt="프로필 사진" style={{
                                            width: 72,
                                            height: 72,
                                            borderRadius: 36,
                                        }} />
                                    </>
                                    :
                                    <>
                                        <div onClick={onButtonclick} style={{
                                            borderRadius: 6,
                                            cursor: "pointer",

                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <input multiple ref={inputFile} onChange={handelFileInput} type="file" style={{
                                                display: "none"
                                            }} />
                                            <IoPersonCircle size={72} color="#dbdbdb" style={{ objectFit: "contain" }} />
                                        </div>
                                    </>
                                }
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    marginLeft: 16
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <div style={{
                                            fontFamily: "NotoSansCJKkr",
                                            fontSize: 21,
                                            fontWeight: "bold",
                                            color: "#202426",
                                            marginRight: 4,
                                        }}>{user.nickname}</div>
                                        <BsPencil onClick={() => setNickModal(true)} style={{
                                            cursor: "pointer"
                                        }} size={15} color="rgba(5, 26, 26, 0.6)" />
                                    </div>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 16,
                                        opacity: 0.6,
                                        color: "#202426",
                                    }}>{user.user_email}</div>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: 440,
                            }}>
                                <MyInfoList standard="나누다 한도" current={user.limit} limit={true} path="/profilelimit" />
                                <MyInfoList standard="나누다 포인트" current={user.point} limit={false} path="profilepoint" />
                                <MyInfoList standard="내 리뷰" current={user.review} limit={false} path="/profilereview" />
                                <MyInfoList standard="내가 구매한 상품" current={user.product} limit={false} path="/profileproduct" />
                            </div>
                        </div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 18,
                            color: "#202426",
                            marginTop: 16,
                            marginLeft: 20
                        }}>이번달 총 결제 금액</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 32,
                            color: "#202426",
                            marginTop: 8,
                            marginLeft: 20,
                            marginBottom: 16
                        }}>300,000 원</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "center",

                            width: 408,
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f3",
                            marginBottom: 16,
                        }}>
                            <PayDate date="04/01" name="Prada Berry Expensive…" num={1} price={240000} />
                            <PayDate date="04/11" name="Product 2" num={2} price={60000} />
                            <PayDate date="04/21" name="Product 3" num={3} price="-" />
                            <PayDate date="04/29" name="Product 4" num={4} price="-" />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 8,
                            }}>나누다 팁!</div>
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 14,
                                color: "#202426",
                                opacity: 0.8,
                                marginTop: 4,
                            }}>첫 결제 이후 분할결제 금액은 결제일에 자동결제 됩니다.</div>
                        </div>
                        <ManageList name="내 정보 관리" path="profileedit" />
                        <ManageList name="분할결제 스케쥴" path="profilepayment" />
                        <ManageList name="결제 수단 관리" path="addaccount" />
                        <ManageList name="상품 구매 내역" path="profileproduct" />
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
                    {nickModal ?
                        <>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100vw",
                                height: "100vh",
                                position: "fixed",
                                top: 0,
                                zIndex: 2,
                            }}>
                                <div style={{
                                    width: "75vw",
                                    paddingTop: "4vw",
                                    borderRadius: 6,
                                    backgroundColor: "#ffffff",

                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    zIndex: 2,
                                }}>
                                    <div style={{
                                        fontFamily: "NotoSansCJKKR",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#051a1a",
                                        marginBottom: "4vw",
                                    }}>변경할 닉네임을 입력해주세요.</div>
                                    <input value={nickname} name="nickname" onChange={onChange} placeholder="영문, 한글, 숫자 포함 8자리 이내" style={{
                                        width: "60vw",
                                        paddingTop: "2vw",
                                        paddingBottom: "2vw",
                                        paddingLeft: "2vw",
                                        paddingRight: "2vw",
                                        borderRadius: 10,

                                        fontFamily: "NotoSansCJKKR",
                                        fontSize: 12,
                                        color: "#202426",
                                        marginBottom: "5vw",
                                        backgroundColor: "rgba(118, 118, 128, 0.12)",
                                        outline: 0,
                                        border: 0,
                                    }} />
                                    <div onClick={NicknameChange} style={{
                                        cursor: "pointer",
                                        width: "75vw",
                                        paddingTop: "3vw",
                                        paddingBottom: "3vw",
                                        backgroundColor: "#26c1f0",
                                        textAlign: "center",
                                        borderBottomLeftRadius: 6,
                                        borderBottomRightRadius: 6,

                                        fontFamily: "NotoSansCJKKR",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#ffffff"
                                    }}>확인</div>
                                </div>
                            </div>
                            <div style={{
                                width: "100vw",
                                height: "100vh",
                                position: "fixed",
                                top: 0,
                                backgroundColor: "rgba(5, 26, 26, 0.4)",
                                zIndex: 1
                            }} />
                        </>
                        :
                        <></>
                    }
                    <MHeader content="마이페이지" goBack={true} />
                    <div style={{
                        paddingTop: "8vw",
                        paddingBottom: "8vw",
                        paddingLeft: "5vw",
                        paddingRight: "5vw",

                        width: "90vw",
                        backgroundColor: "rgba(38, 193, 240, 0.2)",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 12
                        }}>
                            {user.profile.length > 0 ?
                                <>
                                    <img src={user.profile} alt="프로필 사진" style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 30,
                                    }} />
                                </>
                                :
                                <>
                                    <div onClick={onButtonclick} style={{
                                        borderRadius: 6,
                                        cursor: "pointer",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <input multiple ref={inputFile} onChange={handelFileInput} type="file" style={{
                                            display: "none"
                                        }} />
                                        <IoPersonCircle size={60} color="#dbdbdb" style={{ objectFit: "contain" }} />
                                    </div>
                                </>
                            }
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                marginLeft: "4vw"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <div style={{
                                        fontFamily: "NotoSansCJKkr",
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        color: "#202426",
                                        marginRight: 4,
                                    }}>{user.nickname}</div>
                                    <BsPencil onClick={() => setNickModal(true)} size={12} color="rgba(5, 26, 26, 0.6)" />
                                </div>
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#202426",
                                }}>{user.user_email}</div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "90vw",
                        }}>
                            <MMyInfoList standard="나누다 한도" current={user.limit} limit={true} path="/profilelimit" />
                            <MMyInfoList standard="나누다 포인트" current={user.point} limit={false} path="profilepoint" />
                            <MMyInfoList standard="내 리뷰" current={user.review} limit={false} path="/profilereview" />
                            <MMyInfoList standard="내가 구매한 상품" current={user.product} limit={false} path="/profileproduct" />
                        </div>
                    </div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 16,
                        color: "#202426",
                        marginTop: "4vw",
                        marginLeft: "5vw"
                    }}>이번달 총 결제 금액</div>
                    <div style={{
                        fontFamily: "NotoSansCJKkr",
                        fontSize: 28,
                        color: "#202426",
                        marginTop: "2vw",
                        marginLeft: "5vw",
                        marginBottom: "4vw"
                    }}>300,000 원</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "center",

                        width: "82vw",
                        padding: "4vw",
                        borderRadius: 6,
                        backgroundColor: "#f2f3f3",
                        marginBottom: "4vw",
                    }}>
                        <MPayDate date="04/01" name="Prada Berry Expensive…" num={1} price={240000} />
                        <MPayDate date="04/11" name="Product 2" num={2} price={60000} />
                        <MPayDate date="04/21" name="Product 3" num={3} price="-" />
                        <MPayDate date="04/29" name="Product 4" num={4} price="-" />
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 8,
                        }}>나누다 팁!</div>
                        <div style={{
                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            color: "#202426",
                            opacity: 0.8,
                            marginTop: 4,
                        }}>첫 결제 이후 분할결제 금액은 결제일에 자동결제 됩니다.</div>
                    </div>
                    <MManageList name="내 정보 관리" path="profileedit" />
                    <MManageList name="분할결제 스케쥴" path="profilepayment" />
                    <MManageList name="결제 수단 관리" path="addaccount" />
                    <MManageList name="상품 구매 내역" path="profileproduct" />
                    <MBottomTag marginTop={60} marginBottom={0} />
                </div>
            </Mobile>
        </>
    )
}