import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Default, Mobile } from "../App";
import { Header, MHeader } from "../Style";
import { authenticate } from "../Ordersheet/authenticate";
import plus from "../images/plus.png"

export default function ProfilePaymentMethod() {
    let history = useHistory()
    const [bank, setBank] = useState("")
    const [banknum, setBankNum] = useState("")
    const [payId, setPayId] = useState("")
    const [bankOrNot, setBankOrNot] = useState(false)
    function bankCheck() {
        fetch("https://haulfree.link/bankCheck", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.data === false) {

                } else {
                    console.log(res)
                    setBank(res.bank)
                    setBankNum(res.account)
                    setPayId(res.billing)
                    setBankOrNot(true)

                }
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        bankCheck()
    }, [])

    function change() {
        authenticate().then((res) => {
            const obj = {};
            console.log('Auth Result:', { ...res.data });
            // 토큰값 세팅
            obj.PCD_CST_ID = res.data.cst_id;         // 가맹점 인증 후 리턴 받은 cst_id Token
            obj.PCD_CUST_KEY = res.data.custKey;      // 가맹점 인증 후 리턴 받은 custKey Token
            obj.PCD_AUTH_KEY = res.data.AuthKey;      // 가맹점 인증 후 리턴 받은 AuthKey Token
            obj.PCD_PAY_URL = res.data.return_url;    // 가맹점 인증 후 리턴 받은 결제요청 URL
            obj.PCD_PAYER_ID = payId;
            //상품명
            obj.PCD_PAY_GOODS = "test";

            obj.PCD_PAYER_NO = ""
            obj.PCD_PAYER_EMAIL = ""
            obj.PCD_PAY_OID = ""
            obj.PCD_PAY_TOTAL = "1000"
            obj.PCD_PAY_YEAR = "2021"
            obj.PCD_PAY_MONTH = "6"

            if (res.data.result !== 'success') return alert(res.data.result_msg);

            // 해당 함수를 불러오려면 cpay.payple.kr 스크립트 추가가 선행 되어야 합니다. /public/index.html
            // 가맹점 인증 후, 토큰 값을 추가 및 PaypleCpayPopup 함수 호출
            fetch("https://wishdeal.link/puserDel/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    "Host": "https://testcpay.payple.kr",
                    "Cache-Control": "no-cache"
                },

                body: new URLSearchParams({
                    PCD_CST_ID: res.data.cst_id,         // 가맹점 인증 후 리턴 받은 cst_id Token
                    PCD_CUST_KEY: res.data.custKey,      // 가맹점 인증 후 리턴 받은 custKey Token
                    PCD_AUTH_KEY: res.data.AuthKey,      // 가맹점 인증 후 리턴 받은 AuthKey Token
                    PCD_PAY_URL: res.data.return_url,    // 가맹점 인증 후 리턴 받은 결제요청 URL
                    cst_id: "",
                    custKey: "",
                    AuthKey: "",
                    PCD_PAYER_ID: payId
                })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response.PCD_PAY_RST == "success") {
                        handleClick()
                    } else {
                        console.log("error")
                    }
                }).catch(err => {
                    console.log(err)
                })
        }).catch((err) => {
            console.error(err)
        })


    }
    function uploadBank(a, b, c) {
        fetch("https://haulfree.link/bankUpload/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                params: {
                    bank: a,
                    bankAccount: b,
                    billingKey: c
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.data === true) {
                    console.log("good")
                } else {
                    console.log("bad")
                }
                change()
            }).catch(err => {
                console.log(err)
            })

    }

    const handleClick = (e) => {

        const obj = {};
        /*
         *  공통 설정
         */
        obj.PCD_CPAY_VER = "1.0.1"		             // (필수) 결제창 버전 (Default : 1.0.1)
        obj.PCD_PAY_TYPE = "transfer"			             // (필수) 결제 방법 (transfer | card)
        obj.PCD_PAY_WORK = "AUTH";			             // (필수) 결제요청 업무구분 (AUTH : 본인인증+계좌등록, CERT: 본인인증+계좌등록+결제요청등록(최종 결제승인요청 필요), PAY: 본인인증+계좌등록+결제완료)
        obj.PCD_CARD_VER = '01';			     // DEFAULT: 01 (01: 정기결제 플렛폼, 02: 일반결제 플렛폼), 카드결제 시 필수
        obj.PCD_PAYER_AUTHTYPE = "sms";				     // (선택) [간편결제/정기결제] 본인인증 방식 (sms : 문자인증 | pwd : 패스워드 인증)



        obj.payple_auth_file = '';	                                 // 인증파일경로 /절대경로/payple_auth_file (node.js => [app.js] app.post('/pg/auth', ...) {..}

        obj.callbackFunction = getResult;

        /*
         *  빌링키 등록 (pay_work === 'AUTH')
         */

        obj.PCD_PAYER_NO = ""					  // (선택) 가맹점 회원 고유번호 (결과전송 시 입력값 그대로 RETURN)
        obj.PCD_PAYER_NAME = ""				  // (선택) 결제자 이름
        obj.PCD_PAYER_HP = ""					  // (선택) 결제자 휴대폰 번호
        obj.PCD_PAYER_EMAIL = "N"				  // (선택) 결제자 Email
        obj.PCD_TAXSAVE_FLAG = "N"				  // (선택) 현금영수증 발행여부
        obj.PCD_REGULER_FLAG = "N"				  // (선택) 정기결제 여부 (Y|N)
        obj.PCD_SIMPLE_FLAG = "N"				  // (선택) 간편결제 여부 (Y|N)

        /*
         *  최초결제 및 단건(일반,비회원)결제
         */

        // 결제창에 보낼 Object Set
        console.log('Object Set:', obj);

        // 가맹점 인증
        authenticate().then((res) => {
            console.log('Auth Result:', { ...res.data });
            // 토큰값 세팅
            obj.PCD_CST_ID = res.data.cst_id;         // 가맹점 인증 후 리턴 받은 cst_id Token
            obj.PCD_CUST_KEY = res.data.custKey;      // 가맹점 인증 후 리턴 받은 custKey Token
            obj.PCD_AUTH_KEY = res.data.AuthKey;      // 가맹점 인증 후 리턴 받은 AuthKey Token
            obj.PCD_PAY_URL = res.data.return_url;    // 가맹점 인증 후 리턴 받은 결제요청 URL

            if (res.data.result !== 'success') return alert(res.data.result_msg);

            // 해당 함수를 불러오려면 cpay.payple.kr 스크립트 추가가 선행 되어야 합니다. /public/index.html
            // 가맹점 인증 후, 토큰 값을 추가 및 PaypleCpayPopup 함수 호출
            window.PaypleCpayPopup(obj);
        }).catch((err) => {
            console.error(err)
        })
    }
    const getResult = (res) => {
        if (res.PCD_PAY_RST === 'success') {
            var payResult = res;

            // 전달받은 결제 파라미터값을 state에 저장 후  '/react/order_result'로 이동
            console.log(payResult)
            setBank(payResult.PCD_PAY_BANKNAME)
            setBankNum(payResult.PCD_PAY_BANKNUM)
            uploadBank(payResult.PCD_PAY_BANKNAME, payResult.PCD_PAY_BANKNUM, payResult.PCD_PAYER_ID)

        } else {
            // 결제 실패일 경우 알림 메시지
            window.alert(res.PCD_PAY_MSG);
        }

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


                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="결제 계좌 관리" goBack={true} />
                        {bankOrNot ?
                            <>
                                <RegisterForm
                                    bank={bank}
                                    account={banknum}
                                    marginBottom={16}
                                    marginTop={32}
                                />
                                <div onClick={handleClick} style={{
                                    width: 440,
                                    paddingTop: 16,
                                    paddingBottom: 16,
                                    borderRadius: 6,

                                    alignSelf: "center",
                                    cursor: "pointer",
                                    marginTop: 32,
                                    border: "solid 1px #051a1a",

                                    fontSize: 18,
                                    fontWeight: "bold",
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.2,
                                    textAlign: "center"
                                }}>결제수단 변경하기</div>
                            </>
                            :
                            <div style={{
                                width: 440,
                                height: 136,
                                border: "1px solid rgba(1, 6, 8, 0.2)",
                                borderRadius: 6,
                                cursor: "pointer",

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                alignSelf: "center",
                            }}>
                                <img alt="" src={plus} style={{ width: 64, height: 64}} />
                                <div onClick={handleClick} style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 16,
                                    color: "#010608",
                                    marginTop: 8,
                                }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                            </div>

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
                    <MHeader content="결제 계좌 관리" goBack={true} />
                    {bankOrNot ?
                        <>
                            <MRegisterForm
                                bank={bank}
                                account={banknum}
                                marginBottom={16}
                                marginTop={32}
                            />
                            <div onClick={handleClick} style={{
                                width: "90vw",
                                paddingTop: "4vw",
                                paddingBottom: "4vw",
                                borderRadius: 6,

                                alignSelf: "center",
                                cursor: "pointer",
                                marginTop: 32,
                                border: "solid 1px #051a1a",

                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.2,
                                textAlign: "center"
                            }}>결제수단 변경하기</div>
                        </>
                        :
                        <div style={{
                            width: "76vw",
                            padding: "5vw 7vw",
                            border: "1px solid rgba(1, 6, 8, 0.2)",
                            borderRadius: 6,
                            cursor: "pointer",

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                        }}>
                            <img alt="" src={plus} style={{ width: 64, height: 64}} />
                            <div onClick={handleClick} style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 16,
                                color: "#010608",
                                marginTop: 8,
                            }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                        </div>

                    }

                </div>
            </Mobile>
        </>
    )
}

export const RegisterForm = ({ bank, account, marginBottom, marginTop }) => {
    return (
        <>
            <div style={{
                width: 440,
                backgroundColor: "#26c1f0",
                alignSelf: "center",
                height: 136,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: marginBottom,
                borderRadius: 6,
                marginTop: marginTop
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: 20,
                    marginLeft: 20,
                }}>{bank}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: 4,
                    marginLeft: 20,
                }}>{account}</div>
            </div>
        </>
    )
}

export const MRegisterForm = ({ bank, account, marginBottom, marginTop }) => {
    return (
        <>
            <div style={{
                width: "90vw",
                backgroundColor: "#26c1f0",
                alignSelf: "center",
                height: 100,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: marginBottom,
                borderRadius: 6,
                marginTop: marginTop
            }}>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: "5vw",
                    marginLeft: "5vw",
                }}>{bank}</div>
                <div style={{
                    fontFamily: "NotoSansCJKkr",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: 4,
                    marginLeft: "5vw",
                }}>{account}</div>
            </div>
        </>
    )
}