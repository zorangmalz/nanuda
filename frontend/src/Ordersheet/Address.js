import React, { useReducer, useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { BsCheck } from "react-icons/bs"
import DaumPostCode from 'react-daum-postcode';

function reducer(state, action) {
    switch (action.type) {
        case 'ONE':
            return 1;
        case 'TWO':
            return 2;
        case 'THREE':
            return 3;
        case 'FOUR':
            return 4;
        case 'FIVE':
            return 5;
        default:
            return state;
    }
}

export default function Address() {
    const [modal,setModal]=useState(false)
      //우편번호 입력
  
  
      const [isAddress, setIsAddress] = useState("");
      const [isZoneCode, setIsZoneCode] = useState();
  
  
      function Daum({setVisible}){
      const handleComplete = (data) => {
          console.log(data)
          let fullAddress = data.address;
          let extraAddress = "";
      
          if (data.addressType === "R") {
            if (data.bname !== "") {
              extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
              extraAddress +=
                extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
          }
          setIsZoneCode(data.zonecode);
          setIsAddress(fullAddress);
          setVisible(false)
        };
      
          return(
              <div style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100vw",
                  height: "100vh",
              }}>
                  <div onClick={() => setVisible(false)} style={{
                      position: "absolute",
                      top: 0,
                      width: "100vw",
                      height: "100vh",
                      backgroundColor: "#000000",
                      opacity: 0.4,
                      zIndex: 5,
                  }} />
                  <div style={{
                      zIndex: 7,
                      width: 340,
                      height: 376,
                      paddingTop: 30,
                      paddingBottom: 40,
                      paddingRight: 30,
                      paddingLeft: 30,
                      backgroundColor: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                  }}>
                      <DaumPostCode onComplete={handleComplete}/>
      </div>
      </div>
      
          )
      }

      

    const [number, dispatch] = useReducer(reducer, 0);
    const onOne = () => {
        dispatch({ type: 'ONE' });
        setInputs({
            ...inputs,
            claim: "문 앞"
        })
    };
    const onTwo = () => {
        dispatch({ type: 'TWO' });
        setInputs({
            ...inputs,
            claim: "직접 받고 부재시 문앞"
        })
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
        setInputs({
            ...inputs,
            claim: "경비실"
        })
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
        setInputs({
            ...inputs,
            claim: "택배함"
        })
    };
    const onFive = () => {
        dispatch({ type: 'FIVE' });
    };

    const [inputs, setInputs] = useState({
        name: "",
        addressNum: "",
        address: "",
        addressDetail: "",
        phoneNumber: "",
        claim: "",
    })
    const { name, addressNum, address, addressDetail, phoneNumber, claim } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    
    return (
        <>
            <Default>
            {modal ?
                <Daum setVisible={setModal} ></Daum>
                :
                <></>
                }
                
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
                            <Header content="배송정보 수정" goBack={true} />
                            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 44,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>받는 사람</div>
            <input name="name" value={name} onChange={onChange} placeholder="이름 혹은 별명" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 230,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>주소</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
            }}>
                <input name="addressNum" value={addressNum} onChange={onChange} placeholder="우편번호" style={{
                    outline: 0,
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: "1px solid #dfdfdf",

                    width: 90,
                    paddingBottom: 8,

                    fontSize: 16,
                    color: "#202426",
                    marginRight: 20,
                    fontFamily: "NotoSansCJKkr"
                }} />
                <div onClick={()=>setModal(true)} style={{
                    cursor: "pointer",
                    width: 100,
                    padding: 8,
                    backgroundColor: "#051a1a",
                    borderRadius: 6,

                    fontSize: 14,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    fontFamily: "NotoSansCJKkr"
                }}>우편번호 찾기</div>
            </div>
            <input name="address" value={address} onChange={onChange} placeholder="주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 440,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <input name="addressDetail" value={addressDetail} onChange={onChange} placeholder="상세주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 440,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>연락처</div>
            <input name="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="핸드폰 번호 11자리" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 440,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>배송 요청사항</div>
            <div onClick={onOne} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 1 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>문 앞</div>
            </div>
            <div onClick={onTwo} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 2 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>직접 받고 부재시 문앞</div>
            </div>
            <div onClick={onThree} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 3 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>경비실</div>
            </div>
            <div onClick={onFour} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 4 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>택배함</div>
            </div>
            <div onClick={onFive} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 5 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>기타</div>
            </div>
            {number === 5 ? <><input name="claim" value={claim} onChange={onChange} placeholder="장소 입력 (필수)" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 408,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: 52,
            }} />
            <div style={{
                fontSize: 14,
                color: "#f72b2b",
                marginTop: 8,
                marginLeft: 52,
                fontFamily: "NotoSansCJKkr"
            }}>필수 입력 정보입니다.</div></> : <></>}
            <div onClick={} style={{
                width: 440,
                borderRadius: 6,
                alignSelf: "center",
                marginTop: 32,
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor: "#2dd9d3",
                cursor: "pointer",
                textAlign: "center",

                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
                fontFamily: "NotoSansCJKkr"
            }}>수정완료</div>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
            {modal ?
                <Daum setVisible={setModal} ></Daum>
                :
                <></>
                }
                
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="배송정보 수정" goBack={true} />
                    <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 44,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>받는 사람</div>
            <input name="name" value={name} onChange={onChange} placeholder="이름 혹은 별명" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: "5%",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>주소</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "5%",
            }}>
                <input name="addressNum" value={addressNum} onChange={onChange} placeholder="우편번호" style={{
                    outline: 0,
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: "1px solid #dfdfdf",

                    width: "30%",
                    paddingBottom: 8,

                    fontSize: 16,
                    color: "#202426",
                    marginRight: 20,
                    fontFamily: "NotoSansCJKkr"
                }} />
                <div onClick={()=>setModal(true)} style={{
                    cursor: "pointer",
                    width: 100,
                    padding: 8,
                    backgroundColor: "#051a1a",
                    borderRadius: 6,

                    fontSize: 14,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    fontFamily: "NotoSansCJKkr"
                }}>우편번호 찾기</div>
            </div>
            <input name="address" value={address} onChange={onChange} placeholder="주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <input name="addressDetail" value={addressDetail} onChange={onChange} placeholder="상세주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: "5%",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>연락처</div>
            <input name="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="핸드폰 번호 11자리" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: "5%",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>배송 요청사항</div>
            <div onClick={onOne} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 1 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>문 앞</div>
            </div>
            <div onClick={onTwo} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 2 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>직접 받고 부재시 문앞</div>
            </div>
            <div onClick={onThree} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 3 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>경비실</div>
            </div>
            <div onClick={onFour} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 4 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>택배함</div>
            </div>
            <div onClick={onFive} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 5 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>기타</div>
            </div>
            {number === 5 ? <><input name="claim" value={claim} onChange={onChange} placeholder="장소 입력 (필수)" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "82%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: "13%",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                fontSize: 14,
                color: "#f72b2b",
                marginTop: 8,
                marginLeft: "13%",
                fontFamily: "NotoSansCJKkr"
            }}>필수 입력 정보입니다.</div></> : <></>}
            <div style={{
                width: "90%",
                borderRadius: 6,
                alignSelf: "center",
                marginTop: 32,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: "#2dd9d3",
                cursor: "pointer",
                textAlign: "center",

                fontSize: 16,
                fontWeight: "bold",
                color: "#ffffff",
                fontFamily: "NotoSansCJKkr"
            }}>수정완료</div>
                </div>
            </Mobile>
        </>
    )
}

function AddressInput() {
    const [number, dispatch] = useReducer(reducer, 0);
    const onOne = () => {
        dispatch({ type: 'ONE' });
        setInputs({
            ...inputs,
            claim: "문 앞"
        })
    };
    const onTwo = () => {
        dispatch({ type: 'TWO' });
        setInputs({
            ...inputs,
            claim: "직접 받고 부재시 문앞"
        })
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
        setInputs({
            ...inputs,
            claim: "경비실"
        })
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
        setInputs({
            ...inputs,
            claim: "택배함"
        })
    }; 
    const onFive = () => {
        dispatch({ type: 'FIVE' });
    };

    const [inputs, setInputs] = useState({
        name: "",
        addressNum: "",
        address: "",
        addressDetail: "",
        phoneNumber: "",
        claim: "",
    })
    const { name, addressNum, address, addressDetail, phoneNumber, claim } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    return (
        <>
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 44,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>받는 사람</div>
            <input name="name" value={name} onChange={onChange} placeholder="이름 혹은 별명" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 230,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>주소</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
            }}>
                <input name="addressNum" value={addressNum} onChange={onChange} placeholder="우편번호" style={{
                    outline: 0,
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: "1px solid #dfdfdf",

                    width: 90,
                    paddingBottom: 8,

                    fontSize: 16,
                    color: "#202426",
                    marginRight: 20,
                    fontFamily: "NotoSansCJKkr"
                }} />
                <div style={{
                    cursor: "pointer",
                    width: 100,
                    padding: 8,
                    backgroundColor: "#051a1a",
                    borderRadius: 6,

                    fontSize: 14,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    fontFamily: "NotoSansCJKkr"
                }}>우편번호 찾기</div>
            </div>
            <input name="address" value={address} onChange={onChange} placeholder="주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 440,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <input name="addressDetail" value={addressDetail} onChange={onChange} placeholder="상세주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 440,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>연락처</div>
            <input name="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="핸드폰 번호 11자리" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 440,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: 20,
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>배송 요청사항</div>
            <div onClick={onOne} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 1 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>문 앞</div>
            </div>
            <div onClick={onTwo} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 2 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>직접 받고 부재시 문앞</div>
            </div>
            <div onClick={onThree} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 3 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>경비실</div>
            </div>
            <div onClick={onFour} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 4 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>택배함</div>
            </div>
            <div onClick={onFive} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: 20,
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 5 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>기타</div>
            </div>
            {number === 5 ? <><input name="claim" value={claim} onChange={onChange} placeholder="장소 입력 (필수)" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: 408,
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: 52,
            }} />
            <div style={{
                fontSize: 14,
                color: "#f72b2b",
                marginTop: 8,
                marginLeft: 52,
                fontFamily: "NotoSansCJKkr"
            }}>필수 입력 정보입니다.</div></> : <></>}
            <div style={{
                width: 440,
                borderRadius: 6,
                alignSelf: "center",
                marginTop: 32,
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor: "#2dd9d3",
                cursor: "pointer",
                textAlign: "center",

                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
                fontFamily: "NotoSansCJKkr"
            }}>수정완료</div>
        </>
    )
}

function MAddressInput() {
    const [number, dispatch] = useReducer(reducer, 0);
    const onOne = () => {
        dispatch({ type: 'ONE' });
        setInputs({
            ...inputs,
            claim: "문 앞"
        })
    };
    const onTwo = () => {
        dispatch({ type: 'TWO' });
        setInputs({
            ...inputs,
            claim: "직접 받고 부재시 문앞"
        })
    };
    const onThree = () => {
        dispatch({ type: 'THREE' });
        setInputs({
            ...inputs,
            claim: "경비실"
        })
    };
    const onFour = () => {
        dispatch({ type: 'FOUR' });
        setInputs({
            ...inputs,
            claim: "택배함"
        })
    };
    const onFive = () => {
        dispatch({ type: 'FIVE' });
    };

    const [inputs, setInputs] = useState({
        name: "",
        addressNum: "",
        address: "",
        addressDetail: "",
        phoneNumber: "",
        claim: "",
    })
    const { name, addressNum, address, addressDetail, phoneNumber, claim } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    return (
        <>
            <div style={{
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 44,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>받는 사람</div>
            <input name="name" value={name} onChange={onChange} placeholder="이름 혹은 별명" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: "5%",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>주소</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "5%",
            }}>
                <input name="addressNum" value={addressNum} onChange={onChange} placeholder="우편번호" style={{
                    outline: 0,
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: "1px solid #dfdfdf",

                    width: "30%",
                    paddingBottom: 8,

                    fontSize: 16,
                    color: "#202426",
                    marginRight: 20,
                    fontFamily: "NotoSansCJKkr"
                }} />
                <div style={{
                    cursor: "pointer",
                    width: 100,
                    padding: 8,
                    backgroundColor: "#051a1a",
                    borderRadius: 6,

                    fontSize: 14,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    fontFamily: "NotoSansCJKkr"
                }}>우편번호 찾기</div>
            </div>
            <input name="address" value={address} onChange={onChange} placeholder="주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <input name="addressDetail" value={addressDetail} onChange={onChange} placeholder="상세주소" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginTop: 16,
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: "5%",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>연락처</div>
            <input name="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="핸드폰 번호 11자리" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "90%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                alignSelf: "center",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                marginLeft: "5%",
                fontSize: 18,
                fontWeight: "bold",
                color: "#202426",
                marginTop: 16,
                marginBottom: 16,
                fontFamily: "NotoSansCJKkr"
            }}>배송 요청사항</div>
            <div onClick={onOne} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 1 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>문 앞</div>
            </div>
            <div onClick={onTwo} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 2 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>직접 받고 부재시 문앞</div>
            </div>
            <div onClick={onThree} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 3 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>경비실</div>
            </div>
            <div onClick={onFour} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 4 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>택배함</div>
            </div>
            <div onClick={onFive} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                marginLeft: "5%",
                cursor: "pointer",
                marginBottom: 16,
            }}>
                <BsCheck size={24} color={number === 5 ? "#2dd9d3" : "rgba(32, 36, 38, 0.6)"} />
                <div style={{
                    fontSize: 16,
                    opacity: 0.6,
                    color: "#202426",
                    marginLeft: 8,
                    fontFamily: "NotoSansCJKkr"
                }}>기타</div>
            </div>
            {number === 5 ? <><input name="claim" value={claim} onChange={onChange} placeholder="장소 입력 (필수)" style={{
                outline: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "1px solid #dfdfdf",

                width: "82%",
                paddingBottom: 8,

                fontSize: 16,
                color: "#202426",
                marginLeft: "13%",
                fontFamily: "NotoSansCJKkr"
            }} />
            <div style={{
                fontSize: 14,
                color: "#f72b2b",
                marginTop: 8,
                marginLeft: "13%",
                fontFamily: "NotoSansCJKkr"
            }}>필수 입력 정보입니다.</div></> : <></>}
            <div style={{
                width: "90%",
                borderRadius: 6,
                alignSelf: "center",
                marginTop: 32,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: "#2dd9d3",
                cursor: "pointer",
                textAlign: "center",

                fontSize: 16,
                fontWeight: "bold",
                color: "#ffffff",
                fontFamily: "NotoSansCJKkr"
            }}>수정완료</div>
        </>
    )
}