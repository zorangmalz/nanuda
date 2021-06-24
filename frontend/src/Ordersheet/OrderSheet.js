import React, { useState, useReducer, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { BiPlusCircle } from "react-icons/bi";
import { BasicAddress, MBasicAddress, MNoAddress, NoAddress } from "../MyProfile/ProfileEdit";
import { authenticate } from "./authenticate";

function reducer(state, action) {
    switch (action.type) {
        case 'TWO':
            return 2;
        case 'THREE':
            return 3;
        case 'FOUR':
            return 4;
        default:
            return state;
    }
}

export default function OrderSheet() {

    const [number, dispatch] = useReducer(reducer, 2);

    //기본 배송지 존재 여부
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [c, setC] = useState("")
    const [d, setD] = useState("")
    const [e, setE] = useState("")
    const [f, setF] = useState("")
    const item = {
        name: a,
        addressNum: b,
        address: c,
        addressDetail: d,
        phoneNumber: e,
        request: f
    }
    async function addressCheck() {
        fetch("https://haulfree.link/checkAddress/", {
            method: "get",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
        }).then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.data === false) {
                    setBasicAddress(false)
                } else {
                    setBasicAddress(true)
                    setA(res.address_name)
                    setB(res.address_number)
                    setC(res.address)
                    setD(res.address_detail)
                    setE(res.address_phone)
                    setF(res.address_claim)
                }
            }).catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        addressCheck()
    }, [])
    const [basicAddress, setBasicAddress] = useState(false)


    //분할결제 기간 선택
    const onTwo = () => {
        dispatch({ type: 'TWO' });
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
    };

    //결제 일정,가격 제공
    const [oneDate, setOneDate] = useState("")
    const [oneMoney, setOneMoney] = useState("")
    const [twoDate, setTwoDate] = useState("")
    const [twoMoney, setTwoMoney] = useState("")
    const [threeDate, setThreeDate] = useState("")
    const [threeMoney, setThreeMoney] = useState("")
    const [fourDate, setFourDate] = useState("")
    const [fourMoney, setFourMoney] = useState("")


    const paymentDate = [
        {
            num: "1",
            date: oneDate,
            money: oneMoney,
        },
        {
            num: "2",
            date: twoDate,
            money: twoMoney,
        },
        {
            num: "3",
            date: threeDate,
            money: threeMoney,
        },
        {
            num: "4",
            date: fourDate,
            money: fourMoney,
        },
    ]

    //결제 성공 시 -> paymentsuccess, 결제 실패 시 -> paymentfail
    let history = useHistory()
    const [payment, setPayment] = useState(true)

    //계좌 등록 여부
    const [register, setRegister] = useState(false);


    //날짜 계산해보기!!
    useEffect(() => {
        let today = new Date()
        if (today.getMonth() === 11) {
            if (today.getDate() >= 28) {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate("1/28")
                setThreeDate("2/28")
                setFourDate("3/28")
            } else {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate("1/" + today.getDate())
                setThreeDate("2/" + today.getDate())
                setFourDate("3/" + today.getDate())
            }
        } else if (today.getMonth() === 10) {
            if (today.getDate() >= 28) {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate(((today.getMonth() + 1) + 1) + "/28")
                setThreeDate("1/28")
                setFourDate("2/28")
            } else {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate(((today.getMonth() + 1) + 1) + "/" + today.getDate())
                setThreeDate("1/" + today.getDate())
                setFourDate("2/" + today.getDate())
            }
        } else if (today.getMonth() === 9) {
            if (today.getDate() >= 28) {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate(((today.getMonth() + 1) + 1) + "/28")
                setThreeDate(((today.getMonth() + 1) + 2) + "/28")
                setFourDate("1/28")
            } else {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate(((today.getMonth() + 1) + 2) + "/" + today.getDate())
                setThreeDate(((today.getMonth() + 1) + 3) + "/" + today.getDate())
                setFourDate("1/" + today.getDate())
            }
        } else {
            if (today.getDate() >= 28) {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate(((today.getMonth() + 1) + 1) + "/28")
                setThreeDate(((today.getMonth() + 1) + 2) + "/28")
                setFourDate(((today.getMonth() + 1) + 3) + "/28")
            } else {
                setOneDate((today.getMonth() + 1) + "/" + today.getDate())
                setTwoDate(((today.getMonth() + 1) + 2) + "/" + today.getDate())
                setThreeDate(((today.getMonth() + 1) + 3) + "/" + today.getDate())
                setFourDate(((today.getMonth() + 1) + 4) + "/" + today.getDate())
            }
        }
    }, [])

    //파라미터 받기
    const location = useLocation()
    const myparam = location.state.param
    const addre = location.state.addInfo
    const getUrl = location.state.url
    const imageUrl = location.state.image
    const [image, setImage] = useState("")
    const [itemDes, setItemDes] = useState("")
    const [orderDes, setOrderDes] = useState("")
    const [price, setPrice] = useState("")
    const [ship, setShip] = useState(0)

    useEffect(() => {
        try {
            //console.log(myparam[0].image.url)
            setImage(myparam[0].image.url)
            setItemDes(myparam[0].title)

        } catch (err) {
            setImage(imageUrl)
            setItemDes(myparam.Fname)
            //console.log("??")
        }
        if (myparam[6] === 2) {
            setShip(0)
        } else if (myparam[6] === 3) {
            setShip(2500)
        } else if (myparam[6] === 4) {
            setShip(5000)
        } else {
            setShip(myparam[7])
        }

        if (myparam[1] === 1) {
            setOrderDes(myparam[3].ELcolor + "   " + myparam[3].ELetc)
            setPrice(Number(myparam[3].ELprice) + Number(myparam[5]))

            if (number === 2) {
                var res = parseInt(parseInt((myparam[3].ELprice) / 100) / 2)
                var left = parseInt((myparam[3].ELprice) / 100) % 2
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney("-")
                setFourMoney("-")
            } else if (number === 3) {
                var res = parseInt(parseInt((myparam[3].ELprice) / 100) / 3)
                var left = parseInt((myparam[3].ELprice) / 100) % 3
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney(res * 100)
                setFourMoney("-")
            } else {
                var res = parseInt(parseInt((myparam[3].ELprice) / 100) / 4)
                var left = parseInt((myparam[3].ELprice) / 100) % 4
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney(res * 100)
                setFourMoney(res * 100)
            }
        } else if (myparam[1] === 2) {
            setOrderDes(myparam[3].Fcolor + "   " + myparam[3].Fsize + "   " + myparam[3].Fetc)
            setPrice(Number(myparam[3].Fprice) + Number(myparam[5]))
            if (number === 2) {
                var res = parseInt(parseInt((myparam[3].Fprice) / 100) / 2)
                var left = parseInt((myparam[3].Fprice) / 100) % 2
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney("-")
                setFourMoney("-")
            } else if (number === 3) {
                var res = parseInt(parseInt((myparam[3].Fprice) / 100) / 3)
                var left = parseInt((myparam[3].Fprice) / 100) % 3
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney(res * 100)
                setFourMoney("-")
            } else {
                var res = parseInt(parseInt((myparam[3].Fprice) / 100) / 4)
                var left = parseInt((myparam[3].Fprice) / 100) % 4
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney(res * 100)
                setFourMoney(res * 100)
            }
        } else {
            setOrderDes(myparam[3].Eetc)
            setPrice(Number(myparam[3].Eprice) + Number(myparam[5]))
            if (number === 2) {
                var res = parseInt(parseInt((Number(myparam[3].Eprice) + Number(myparam[5])) / 100) / 2)
                var left = parseInt((Number(myparam[3].Eprice) + Number(myparam[5])) / 100) % 2
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney("-")
                setFourMoney("-")
            } else if (number === 3) {
                var res = parseInt(parseInt((Number(myparam[3].Eprice) + Number(myparam[5])) / 100) / 3)
                var left = parseInt((Number(myparam[3].Eprice) + Number(myparam[5])) / 100) % 3
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney(res * 100)
                setFourMoney("-")
            } else {
                var res = parseInt(parseInt((Number(myparam[3].Eprice) + Number(myparam[5])) / 100) / 4)
                var left = parseInt((Number(myparam[3].Eprice) + Number(myparam[5])) / 100) % 4
                setOneMoney(res * 100 + left * 100)
                setTwoMoney(res * 100)
                setThreeMoney(res * 100)
                setFourMoney(res * 100)
            }
        }

    }, [number])
    async function order() {
        if (basicAddress && payment) {
            // history.push("paymentsuccess",{myparam:myparam})'

            fetch("https://haulfree.link/checkAddress/", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({
                    params: {
                        myparam: myparam,
                        ship: item,
                        payment: "",
                        option: number,
                        schedule: paymentDate
                    }
                })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.data.data === true) {
                        history.push("payment/success")
                    } else {
                        history.push("payment/fail", { myparam: myparam, ship: item })
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }


    const [bank, setBank] = useState("")
    const [banknum, setBankNum] = useState("")
    const [payId,setPayId]=useState("")
    const getResult = (res) => {
        if (res.PCD_PAY_RST === 'success') {
            var payResult = res;

            // 전달받은 결제 파라미터값을 state에 저장 후  '/react/order_result'로 이동
            console.log(payResult)
            setRegister(true)
            setBank(payResult.PCD_PAY_BANKNAME)
            setBankNum(payResult.PCD_PAY_BANKNUM)
            setPayId(payResult.PCD_PAYER_ID)


        } else {
            // 결제 실패일 경우 알림 메시지
            window.alert(res.PCD_PAY_MSG);
        }

    }

    const handleClick = (e) => {
        e.preventDefault();
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


    function Order() {
        var obj = {}
        authenticate().then((res) => {
            console.log('Auth Result:', { ...res.data });
            // 토큰값 세팅
            obj.PCD_CST_ID = res.data.cst_id;         // 가맹점 인증 후 리턴 받은 cst_id Token
            obj.PCD_CUST_KEY = res.data.custKey;      // 가맹점 인증 후 리턴 받은 custKey Token
            obj.PCD_AUTH_KEY = res.data.AuthKey;      // 가맹점 인증 후 리턴 받은 AuthKey Token
            obj.PCD_PAY_URL = res.data.return_url;    // 가맹점 인증 후 리턴 받은 결제요청 URL
            obj.PCD_PAYER_ID=payId;
            //상품명
            obj.PCD_PAY_GOODS="test";

            obj.PCD_PAYER_NO=""
            obj.PCD_PAYER_EMAIL=""
            obj.PCD_PAY_OID=""
            obj.PCD_PAY_TOTAL="1000"
            obj.PCD_PAY_YEAR="2021"
            obj.PCD_PAY_MONTH="6"

            if (res.data.result !== 'success') return alert(res.data.result_msg);

            // 해당 함수를 불러오려면 cpay.payple.kr 스크립트 추가가 선행 되어야 합니다. /public/index.html
            // 가맹점 인증 후, 토큰 값을 추가 및 PaypleCpayPopup 함수 호출
            fetch("https://wishdeal.link/transferRegular/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: new URLSearchParams({
                    PCD_CST_ID : res.data.cst_id,         // 가맹점 인증 후 리턴 받은 cst_id Token
                    PCD_CUST_KEY : res.data.custKey,      // 가맹점 인증 후 리턴 받은 custKey Token
                    PCD_AUTH_KEY : res.data.AuthKey,      // 가맹점 인증 후 리턴 받은 AuthKey Token
                    PCD_PAY_URL : res.data.return_url,    // 가맹점 인증 후 리턴 받은 결제요청 URL
                    PCD_PAYER_ID:payId,
                    //상품명
                    PCD_PAY_GOODS:"test",
        
                    PCD_PAYER_NO:"",
                    PCD_PAYER_EMAIL:"",
                    PCD_PAY_OID:"",
                    PCD_PAY_TOTAL:"1000",
                    PCD_PAY_YEAR:"2021",
                    PCD_PAY_MONTH:"6",
                })
            })
                .then(response => response.json())
                .then(response => {
                   console.log(response)
                }).catch(err => {
                    console.log(err)
                })
        }).catch((err) => {
            console.error(err)
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
                    backgroundColor: "#f2f3f8"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",

                        width: 480,
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="주문서" goBack={true} />
                        <div style={{
                            fontSize: 18,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 32,
                            marginBottom: 16,
                            fontFamily: "NotoSansCJKkr"
                        }}>상품정보</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            marginRight: 20,
                            marginLeft: 20,
                        }}>

                            <img src={image} style={{
                                width: 120,
                                heigh: 120,
                                borderRadius: 6,
                                marginRight: 16,
                                objectFit: "cover"
                            }}></img>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start"
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    color: "#010608",
                                    fontFamily: "AvenirNext"
                                }}>{itemDes} <br />
                                    {orderDes}</div>
                                <div style={{
                                    marginTop: 8,
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                            </div>
                        </div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 16,
                            marginBottom: 16,
                        }} />
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            width: 440,
                            marginLeft: 20,
                            marginRight: 20,
                        }}>
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>배송 정보</div>
                            <div onClick={() => history.push("/address")} style={{
                                fontSize: 14,
                                opacity: 0.8,
                                color: "#010608",
                                textDecorationLine: "underline",
                                cursor: "pointer",
                                fontFamily: "NotoSansCJKkr"
                            }}>배송지 수정</div>
                        </div>
                        {basicAddress ?
                            <BasicAddress item={item} />
                            :
                            <NoAddress />
                        }
                        <div style={{
                            fontSize: 18,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 16,
                            fontFamily: "NotoSansCJKkr"
                        }}>결제 수단</div>
                        {register ?
                            <div style={{
                                width: 408,
                                alignSelf: "center",
                                padding: 16,
                                borderRadius: 6,
                                border: "1px solid #26c1f0",
                                marginTop: 16,

                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.8,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{bank}{banknum}</div>
                            </div>
                            :
                            <div onClick={handleClick} style={{
                                width: 440,
                                height: 136,
                                border: "1px solid rgba(1, 6, 8, 0.2)",
                                borderRadius: 6,
                                cursor: "pointer",
                                marginTop: 16,

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                alignSelf: "center",
                            }}>
                                <BiPlusCircle size={32} color="rgba(1, 6, 8, 0.6)" />
                                <div style={{
                                    fontFamily: "NotoSansCJKkr",
                                    opacity: 0.6,
                                    fontSize: 16,
                                    color: "#010608",
                                    marginTop: 8,
                                }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                            </div>
                        }
                        <div style={{
                            fontSize: 18,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 16,
                            fontFamily: "NotoSansCJKkr"
                        }}>분할결제 옵션 선택</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                            marginLeft: 20,
                            marginTop: 16
                        }}>
                            <div onClick={onTwo} style={{
                                width: 95,
                                marginRight: 20,
                                borderRadius: 6,
                                border: number === 2 ? "1px solid #010608" : "1px solid #dfdfdf",
                                backgroundColor: number === 2 ? "#010608" : "#ffffff",
                                paddingTop: 10,
                                paddingBottom: 10,

                                fontSize: 16,
                                fontWeight: number === 2 ? "bold" : "normal",
                                color: number === 2 ? "#ffffff" : "#010608",
                                opacity: number === 2 ? 1 : 0.8,
                                textAlign: "center",
                                fontFamily: "NotoSansCJKkr"
                            }}>2회</div>
                            <div onClick={onThree} style={{
                                width: 95,
                                marginRight: 20,
                                borderRadius: 6,
                                border: number === 3 ? "1px solid #010608" : "1px solid #dfdfdf",
                                backgroundColor: number === 3 ? "#010608" : "#ffffff",
                                paddingTop: 10,
                                paddingBottom: 10,

                                fontSize: 16,
                                fontWeight: number === 3 ? "bold" : "normal",
                                color: number === 3 ? "#ffffff" : "#010608",
                                opacity: number === 3 ? 1 : 0.8,
                                textAlign: "center",
                                fontFamily: "NotoSansCJKkr"
                            }}>3회</div>
                            <div onClick={onFour} style={{
                                width: 95,
                                borderRadius: 6,
                                border: number === 4 ? "1px solid #010608" : "1px solid #dfdfdf",
                                backgroundColor: number === 4 ? "#010608" : "#ffffff",
                                paddingTop: 10,
                                paddingBottom: 10,

                                fontSize: 16,
                                fontWeight: number === 4 ? "bold" : "normal",
                                color: number === 4 ? "#ffffff" : "#010608",
                                opacity: number === 4 ? 1 : 0.8,
                                textAlign: "center",
                                fontFamily: "NotoSansCJKkr"
                            }}>4회</div>
                        </div>
                        <div style={{
                            padding: 16,
                            width: 408,
                            marginTop: 16,
                            marginLeft: 20,
                            backgroundColor: "#f2f3f8",
                            borderRadius: 6,

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            {paymentDate.map(item =>
                                <div style={{
                                    width: "100%",

                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    marginBottom: 8,
                                }}>
                                    <div style={{
                                        fontSize: 16,
                                        color: "#010608",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>
                                        {item.num}차 결제
                                    <span style={{
                                            fontWeight: "bold",
                                            color: "#26c1f0"
                                        }}>({item.date})</span>
                                    </div>
                                    <div style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#010608",
                                        fontFamily: "NotoSansCJKkr"
                                    }}>{item.money} 원</div>
                                </div>
                            )}
                        </div>
                        <div style={{
                            marginTop: 8,
                            fontSize: 14,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#010608",
                            marginBottom: 4,
                            alignSelf: "flex-start",
                            fontFamily: "NotoSansCJKkr"
                        }}>1/n 팁!</div>
                        <div style={{
                            opacity: 0.8,
                            fontSize: 14,
                            color: "#010608",
                            alignSelf: "flex-start",
                            lineHeight: 1.5,
                            fontFamily: "NotoSansCJKkr",
                            marginLeft: 20,
                        }}>
                            첫 결제 이후 결제 금액들은 자동결제 됩니다. <br />
                                분할결제 한도에 따라 분할 결제 금액이 바뀔 수 있습니다. <br />
                            <span style={{ textDecorationLine: "underline" }}>더 알아보기</span>
                        </div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 16,
                            marginBottom: 16,
                        }} />
                        <div style={{
                            fontSize: 21,
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: "#010608",
                            marginBottom: 12,
                            fontFamily: "NotoSansCJKkr"
                        }}>최종 결제</div>
                        <div style={{
                            marginLeft: 20,
                            marginRight: 20,
                            width: 440,

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>첫 분할결제 금액 : </div>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}> +{oneMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>배송비 : </div>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}> + {ship} 원</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>1/n 포인트 : </div>
                                <div style={{
                                    fontSize: 16,
                                    opacity: 0.6,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>- 0 P</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    color: "#26c1f0",
                                    fontFamily: "NotoSansCJKkr"
                                }}>사용가능 : 2,000 P</div>
                                <div style={{
                                    fontSize: 14,
                                    color: "#26c1f0",
                                    fontFamily: "NotoSansCJKkr"
                                }}>전액사용</div>
                            </div>
                        </div>
                        <div style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "#010608",
                            marginTop: 16,
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr"
                        }}>
                            이번 달은
                                <span style={{
                                color: "#26c1f0"
                            }}>  {(Number(oneMoney) + Number(ship)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
                                 만 결제하세요.
                            </div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 32,
                            marginBottom: 16,
                        }} />
                        <div style={{
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#010608",
                            textDecorationLine: "underline",
                            marginBottom: 8,
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr",
                            cursor: "pointer"
                        }}>구매조건 확인 및 결제대행 서비스 약관 동의</div>
                        <div style={{
                            fontSize: 14,
                            opacity: 0.6,
                            color: "#010608",
                            textDecorationLine: "underline",
                            marginBottom: 8,
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr",
                            cursor: "pointer"
                        }}>개인정보 제공안내</div>
                        <div style={{
                            width: 440,
                            fontSize: 12,
                            opacity: 0.4,
                            color: "#010608",
                            marginLeft: 20,
                            fontFamily: "NotoSansCJKkr"
                        }}>* 개별 판매자가 등록한 1/n 딜 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 1/n는 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</div>
                        <div style={{
                            height: 1,
                            width: 480,
                            backgroundColor: "#dfdfdf",
                            marginTop: 16,
                            marginBottom: 12,
                        }} />
                        <div style={{
                            fontSize: 14,
                            opacity: 0.4,
                            color: "#010608",
                            alignSelf: "center",
                            marginBottom: 32,
                            fontFamily: "NotoSansCJKkr",
                            textAlign: "center",
                        }}>위 주문 내용을 확인 하였으며, 회원은 본인의 결제에 동의합니다.</div>
                        <div onClick={Order} style={{
                            alignSelf: "center",
                            width: 440,
                            paddingTop: 15,
                            paddingBottom: 15,
                            backgroundColor: "#26c1f0",
                            borderRadius: 6,
                            marginBottom: 120,

                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center",

                            cursor: "pointer",
                            fontFamily: "NotoSansCJKkr"
                        }}>결제하기</div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",

                    width: "100%",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="주문서" goBack={true} />
                    <div style={{
                        fontSize: 16,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: 32,
                        marginBottom: 16,
                        fontFamily: "NotoSansCJKkr"
                    }}>상품정보</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",

                        marginLeft: "5%"
                    }}>
                        <div style={{
                            width: "25vw",
                            height: "25vw",
                            borderRadius: 6,
                            marginRight: "4vw",
                            backgroundColor: "#000000",
                            color: "#ffffff"
                        }}>상품 그림</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start"
                        }}>
                            <div style={{
                                fontSize: 14,
                                color: "#010608",
                                fontFamily: "AvenirNext"
                            }}>PRADA Model 23-9 limited… <br />
                                    WHITE, 270mm</div>
                            <div style={{
                                marginTop: 8,
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>480,000원</div>
                        </div>
                    </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "4vw",
                        marginBottom: "4vw",
                    }} />
                    <div style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#010608",
                        fontFamily: "NotoSansCJKkr",
                        marginLeft: "5vw"
                    }}>배송 정보</div>
                    {basicAddress ?
                        <MBasicAddress item={item} />
                        :
                        <MNoAddress />
                    }
                    <div style={{
                        fontSize: 16,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "8vw",
                        fontFamily: "NotoSansCJKkr"
                    }}>결제 수단</div>
                    {register ?
                        <div style={{
                            width: "82vw",
                            alignSelf: "center",
                            padding: "4vw",
                            borderRadius: 6,
                            border: "1px solid #26c1f0",
                            marginTop: 16,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.8,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>{bank}{banknum}</div>
                        </div>
                        :
                        <div onClick={() => history.push("/paymentaddbank")} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",

                            width: "90vw",
                            height: "30vw",
                            border: "1px solid rgba(1, 6, 8, 0.2)",
                            cursor: "pointer",
                            borderRadius: 6,
                            marginTop: "4vw",
                        }}>
                            <BiPlusCircle size={28} color="rgba(1, 6, 8, 0.6)" />
                            <div style={{
                                fontFamily: "NotoSansCJKkr",
                                opacity: 0.6,
                                fontSize: 14,
                                color: "#010608",
                                marginTop: "2vw",
                            }}>처음 결제하시는군요? 결제를 위한 계좌를 등록해주세요!</div>
                        </div>
                    }
                    <div style={{
                        fontSize: 16,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "8vw",
                        fontFamily: "NotoSansCJKkr"
                    }}>분할결제 옵션 선택</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

                        marginLeft: "5%",
                        marginTop: "4vw"
                    }}>
                        <div onClick={onTwo} style={{
                            width: 80,
                            marginRight: 10,
                            borderRadius: 6,
                            border: number === 2 ? "1px solid #010608" : "1px solid #dfdfdf",
                            backgroundColor: number === 2 ? "#010608" : "#ffffff",
                            paddingTop: 5,
                            paddingBottom: 5,

                            fontSize: 14,
                            fontWeight: number === 2 ? "bold" : "normal",
                            color: number === 2 ? "#ffffff" : "#010608",
                            opacity: number === 2 ? 1 : 0.8,
                            textAlign: "center",
                            fontFamily: "NotoSansCJKkr"
                        }}>2회</div>
                        <div onClick={onThree} style={{
                            width: 80,
                            marginRight: 10,
                            borderRadius: 6,
                            border: number === 3 ? "1px solid #010608" : "1px solid #dfdfdf",
                            backgroundColor: number === 3 ? "#010608" : "#ffffff",
                            paddingTop: 5,
                            paddingBottom: 5,

                            fontSize: 14,
                            fontWeight: number === 3 ? "bold" : "normal",
                            color: number === 3 ? "#ffffff" : "#010608",
                            opacity: number === 3 ? 1 : 0.8,
                            textAlign: "center",
                            fontFamily: "NotoSansCJKkr"
                        }}>3회</div>
                        <div onClick={onFour} style={{
                            width: 80,
                            borderRadius: 6,
                            border: number === 4 ? "1px solid #010608" : "1px solid #dfdfdf",
                            backgroundColor: number === 4 ? "#010608" : "#ffffff",
                            paddingTop: 5,
                            paddingBottom: 5,

                            fontSize: 14,
                            fontWeight: number === 4 ? "bold" : "normal",
                            color: number === 4 ? "#ffffff" : "#010608",
                            opacity: number === 4 ? 1 : 0.8,
                            textAlign: "center",
                            fontFamily: "NotoSansCJKkr"
                        }}>4회</div>
                    </div>
                    <div style={{
                        padding: "4%",
                        width: "82%",
                        marginTop: 16,
                        alignSelf: "center",
                        backgroundColor: "#f2f3f8",
                        borderRadius: 6,

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        {paymentDate.map(item =>
                            <div style={{
                                width: "100%",

                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",

                                marginBottom: 8,
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>
                                    {item.num}차 결제
                                    <span style={{
                                        fontWeight: "bold",
                                        color: "#26c1f0"
                                    }}>({item.date})</span>
                                </div>
                                <div style={{
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#010608",
                                    fontFamily: "NotoSansCJKkr"
                                }}>{item.money} 원</div>
                            </div>
                        )}
                    </div>
                    <div style={{
                        marginTop: 8,
                        fontSize: 12,
                        marginLeft: "5vw",
                        fontWeight: "bold",
                        color: "#010608",
                        marginBottom: 4,
                        alignSelf: "flex-start",
                        fontFamily: "NotoSansCJKkr"
                    }}>1/n 팁!</div>
                    <div style={{
                        opacity: 0.8,
                        fontSize: 12,
                        marginLeft: "5vw",
                        color: "#010608",
                        alignSelf: "flex-start",
                        lineHeight: 1.5,
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        첫 결제 이후 결제 금액들은 자동결제 됩니다. <br />
                        분할결제 한도에 따라 분할 결제 금액이 바뀔 수 있습니다. <br />
                        <span style={{ textDecorationLine: "underline" }}>더 알아보기</span>
                    </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "4vw",
                        marginBottom: "4vw",
                    }} />
                    <div style={{
                        fontSize: 18,
                        marginLeft: "5%",
                        fontWeight: "bold",
                        color: "#010608",
                        marginBottom: "3vw",
                        fontFamily: "NotoSansCJKkr"
                    }}>최종 결제</div>
                    <div style={{
                        width: "90%",
                        alignSelf: "center",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                            marginBottom: 8,
                        }}>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>첫 분할결제 금액 : </div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}> +240,000 원</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                            marginBottom: 8,
                        }}>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>배송비 : </div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}> + 0 원</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                            marginBottom: 8,
                        }}>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>1/n 포인트 : </div>
                            <div style={{
                                fontSize: 14,
                                opacity: 0.6,
                                color: "#010608",
                                fontFamily: "NotoSansCJKkr"
                            }}>- 0 P</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",

                            width: "100%",
                        }}>
                            <div style={{
                                fontSize: 12,
                                color: "#26c1f0",
                                fontFamily: "NotoSansCJKkr"
                            }}>사용가능 : 2,000 P</div>
                            <div style={{
                                fontSize: 12,
                                color: "#26c1f0",
                                fontFamily: "NotoSansCJKkr"
                            }}>전액사용</div>
                        </div>
                    </div>
                    <div style={{
                        width: "90%",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#010608",
                        marginTop: "4vw",
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>
                        이번달은
                                <span style={{
                            color: "#26c1f0"
                        }}> {(Number(oneMoney) + Number(ship)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 </span>
                                 만 결제하세요.
                            </div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "8vw",
                        marginBottom: "4vw",
                    }} />
                    <div style={{
                        fontSize: 12,
                        opacity: 0.6,
                        color: "#010608",
                        textDecorationLine: "underline",
                        marginBottom: 8,
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>구매조건 확인 및 결제대행 서비스 약관 동의</div>
                    <div style={{
                        fontSize: 12,
                        opacity: 0.6,
                        color: "#010608",
                        textDecorationLine: "underline",
                        marginBottom: 8,
                        marginLeft: "5%",
                        fontFamily: "NotoSansCJKkr"
                    }}>개인정보 제공안내</div>
                    <div style={{
                        width: "90%",
                        fontSize: 10,
                        opacity: 0.4,
                        color: "#010608",
                        alignSelf: "center",
                        fontFamily: "NotoSansCJKkr"
                    }}>* 개별 판매자가 등록한 1/n 딜 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 1/n는 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</div>
                    <div style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#dfdfdf",
                        marginTop: "4vw",
                        marginBottom: "3vw",
                    }} />
                    <div style={{
                        fontSize: 12,
                        opacity: 0.4,
                        color: "#010608",
                        width: "90%",
                        alignSelf: "center",
                        marginBottom: "8vw",
                        fontFamily: "NotoSansCJKkr",
                        textAlign: "center",
                    }}>위 주문 내용을 확인 하였으며, 회원은 본인의 결제에 동의합니다.</div>
                    <div onClick={order} style={{
                        alignSelf: "center",
                        width: "90vw",
                        paddingTop: "4vw",
                        paddingBottom: "4vw",
                        backgroundColor: "#26c1f0",
                        borderRadius: 6,
                        marginBottom: 80,

                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        textAlign: "center",

                        cursor: "pointer",
                        fontFamily: "NotoSansCJKkr"
                    }}>결제하기</div>
                </div>
            </Mobile>
        </>
    )
}