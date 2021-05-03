import React, { useState } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import { InputModule, MTitle } from "../Auth/SignupProfile";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";

export default function ProfileAddressEdit() {
    let history = useHistory()

    //우편번호 입력
    const [addressNum, setAddressNum] = useState("")
    const onAddressNum = (e) => {
        setAddressNum(e.target.value)
    }

    //주소 입력
    const [address, setAddress] = useState("")
    const onAddress = (e) => {
        setAddress(e.target.value)
    }

    //상세주소 입력
    const [addressDetatil, setAddressDetail] = useState("")
    const onAddressDetail = (e) => {
        setAddressDetail(e.target.value)
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

                            width: 480,
                            minHeight: "100vh",
                            backgroundColor: "#ffffff",
                        }}>
                            <Header content="주소 수정" goX={true} />
                            <div style={{
                                marginTop: 32,
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426"
                            }}>거주지 주소를 입력해주세요.</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 16,
                                marginLeft: 20,
                            }}>
                                <InputModule
                                    input={addressNum}
                                    onChange={onAddressNum}
                                    placeholder="우편번호"
                                    width={90}
                                    marginLeft={0}
                                    marginTop={0}
                                    fontSize={16}
                                />
                                <div style={{
                                    paddingTop: 7,
                                    paddingBottom: 7,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginLeft: 20,
                                    borderRadius: 6,
                                    backgroundColor: "#051a1a",

                                    fontFamily: "NotoSansCJKkr",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    cursor: "pointer"
                                }}>우편번호 찾기</div>
                            </div>
                            <InputModule
                                input={address}
                                onChange={onAddress}
                                placeholder="주소"
                                width={440}
                                marginLeft={20}
                                marginTop={16}
                                fontSize={16}
                            />
                            <InputModule
                                input={addressDetatil}
                                onChange={onAddressDetail}
                                placeholder="상세주소"
                                width={440}
                                marginLeft={20}
                                marginTop={16}
                                fontSize={16}
                            />
                            <StandardButton 
                                marginTop={32}
                                text="수정 완료"
                                route="goback"
                            />
                        </div>
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
                    <MHeader content="주소 수정" goX={true} />
                    <MTitle>거주지 주소를 입력해주세요.</MTitle>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 16,
                        marginLeft: 20,
                    }}>
                        <InputModule
                            input={addressNum}
                            onChange={onAddressNum}
                            placeholder="우편번호"
                            width={80}
                            marginLeft={0}
                            marginTop={0}
                            fontSize={12}
                        />
                        <div style={{
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingLeft: 8,
                            paddingRight: 8,
                            marginLeft: 10,
                            borderRadius: 6,
                            backgroundColor: "#051a1a",

                            fontFamily: "NotoSansCJKkr",
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#ffffff",
                            cursor: "pointer"
                        }}>우편번호 찾기</div>
                    </div>
                    <InputModule
                        input={address}
                        onChange={onAddress}
                        placeholder="주소"
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                    <InputModule
                        input={addressDetatil}
                        onChange={onAddressDetail}
                        placeholder="상세주소"
                        width={"90vw"}
                        marginLeft={"5vw"}
                        marginTop={12}
                        fontSize={12}
                    />
                    <MStandardButton
                        marginTop={32}
                        text="수정 완료"
                        route="goback"
                    />
                </div>
            </Mobile>
        </>
    )
}