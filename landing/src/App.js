import React, { useEffect, useState } from 'react';
import './App.css';
import landing from "./image/landing.jpeg"
import mobile from "./image/mobile.png"
import { BsCheck } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import { useMediaQuery } from "react-responsive";
import firebase from "firebase/app"
import "firebase/firestore"
import ReactGA from "react-ga"

const firebaseConfig = {
  apiKey: "AIzaSyArWcW0DI-nS2sz_5DqGztVmmklLBYH_Dk",
  authDomain: "nanuda-5cebc.firebaseapp.com",
  projectId: "nanuda-5cebc",
  storageBucket: "nanuda-5cebc.appspot.com",
  messagingSenderId: "342342892771",
  appId: "1:342342892771:web:0dc6ab81ae5da1bf4d19d6",
  measurementId: "G-MSNQ317X9L"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore()

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 451 })
  return isNotMobile ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 450 })
  return isMobile ? children : null
}

function App() {
  const [modal, setModal] = useState(false)
  const [complete, setComplete] = useState(false)
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
  })

  const { name, phone } = inputs

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const addMember = () => {
    db.collection("Landing").add({
      name: name,
      phone: phone
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    setComplete(true)
  }

  const [personal, setPersonal] = useState(false)
  const [market, setMarket] = useState(false)

  useEffect(() => {
    ReactGA.initialize("G-7SBH01QPTQ", { debug: true })
    const pathName = window.location.pathname;
    ReactGA.set({ page: pathName });
    ReactGA.pageview(pathName);
  }, [])
  return (
    <>
      <Mobile>
        <div style={{
          width: "100vw",
          height: "100vh",
        }}>
          {modal ?
            <div style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              backgroundColor: "rgba(5, 26, 26, 0.6)",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}>
              <div style={{
                width: "95vw",
                paddingTop: "5vw",
                paddingBottom: "8vw",
                backgroundColor: "#ffffff",
                borderRadius: 10,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 3,
              }}>
                {!complete ?
                  <>
                    <div style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "95vw",
                    }}>
                      <AiOutlineClose onClick={() => setModal(false)} style={{ cursor: "pointer", marginRight: "25vw", marginLeft: "5vw" }} size={16} color="#051a1a" />
                      <div style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#051a1a",
                        marginTop: "3vw",
                      }}>하울 프리 사전등록</div>
                    </div>
                    <input onChange={onChange} name="name" value={name} placeholder="이름을 알려주세요!" style={{
                      width: "72vw",
                      paddingLeft: "4vw",
                      paddingRight: "4vw",
                      outline: 0,
                      paddingTop: "5vw",
                      paddingBottom: "5vw",
                      borderRadius: 16,
                      marginTop: "8vw",
                      border: "1px solid rgba(5, 26, 26, 0.2)",

                      fontSize: 12,
                      color: "#202426",
                    }} />
                    <input onChange={onChange} name="phone" value={phone} placeholder="휴대폰 번호를 입력해주세요!" style={{
                      width: "72vw",
                      paddingLeft: "4vw",
                      paddingRight: "4vw",
                      outline: 0,
                      paddingTop: "5vw",
                      paddingBottom: "5vw",
                      borderRadius: 16,
                      marginTop: "4vw",
                      border: "1px solid rgba(5, 26, 26, 0.2)",

                      fontSize: 12,
                      color: "#202426",
                    }} />
                    <div style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "80vw",
                      marginTop: "5vw",
                    }}>
                      <BsCheck onClick={() => setPersonal(!personal)} style={{ cursor: "pointer" }} size={16} color={personal ? "#2dd9d3" : "#dbdbdb"} />
                      <div style={{
                        fontSize: 12,
                        color: "#202426",
                        marginLeft: 8,
                      }}>개인정보 수집에 동의합니다.</div>
                    </div>
                    <div style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "80vw",
                      marginTop: "2vw",
                    }}>
                      <BsCheck onClick={() => setMarket(!market)} style={{ cursor: "pointer" }} size={16} color={market ? "#2dd9d3" : "#dbdbdb"} />
                      <div style={{
                        fontSize: 12,
                        color: "#202426",
                        marginLeft: 8,
                      }}>마케팅 정보 수신에 동의합니다.</div>
                    </div>
                    <div onClick={inputs.name.length > 0 && inputs.phone.length > 0 && personal && market ? addMember : () => alert("이름과 휴대폰 번호를 입력해주세요")} style={{
                      width: "85vw",
                      paddingTop: "5vw",
                      paddingBottom: "5vw",
                      backgroundColor: inputs.name.length > 0 && inputs.phone.length > 0 && personal && market ? "#051a1a" : "#dbdbdb",

                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#ffffff",
                      borderRadius: 16,
                      marginTop: "8vw",
                    }}>완료</div>
                  </>
                  :
                  <>
                    <div style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#051a1a",
                    }}>사전 등록이 완료되었습니다.</div>
                    <div style={{
                      fontSize: 12,
                      color: "#051a1a",
                      marginTop: "4vw",
                    }}>서비스 출시 이후 카카오톡을 통해 알려드릴게요!</div>
                    <div onClick={() => {
                      setModal(false)
                      setComplete(false)
                    }} style={{
                      width: "85vw",
                      paddingTop: "5vw",
                      paddingBottom: "5vw",
                      backgroundColor: "#051a1a",

                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#ffffff",
                      borderRadius: 16,
                      marginTop: "8vw",
                    }}>완료</div>
                  </>
                }
              </div>
            </div>
            :
            <></>
          }
          <div style={{
            width: "100vw",
            position: "relative",
          }}>
            <div style={{
              width: "100vw",
              paddingTop: "4vw",
              paddingBottom: "4vw",
              zIndex: 1,
              position: "absolute",
              top: 0,
            }}>
              <div style={{
                fontSize: 18,
                color: "#ffffff",
                marginLeft: "9vw",
              }}>Haul Free</div>
            </div>
            <img alt="배경이미지" src={mobile} style={{ width: "100vw" }} />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "12vw",
          }}>
            <div style={{
              fontSize: 21,
              fontWeight: "bold",
              color: "#051a1a",
            }}>#Experience Now #Pay Later</div>
            <div style={{
              width: "82vw",
              fontSize: 16,
              color: "#051a1a",
              marginTop: "4vw",
              lineHeight: 1.5,
              marginBottom: "4vw",
            }}>너무 높은 가격 때문에 망설이지 마세요! 하울프리가 도와줄게요!
      무이자 분할결제를 통해 당신의 소비생활에 자유를 선사하세요.</div>
            <button id="track" onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Click Button",
                label: "Home_Page"
              })
              setModal(true)
            }} style={{
              width: "82vw",
              paddingTop: "3vw",
              paddingBottom: "3vw",
              backgroundColor: "#051a1a",
              cursor: "pointer",
              
              textAlign: "center",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: "bold",
              borderRadius: 16,
              outline: 0,
            }}>사전등록하고 1만원 쿠폰받기</button>
          </div>
          <div style={{
            marginTop: "20vw",
            width: "82vw",
            paddingLeft: "9vw",
            paddingRight: "9vw",
            borderTop: "1px solid rgba(5, 26, 26, 0.2)",
            paddingTop: "4vw",
            paddingBottom: "8vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            alignSelf: "center",
          }}>
            <div style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#051a1a",
              marginBottom: "2vw"
            }}>(주) 라텔</div>
            <div style={{
              fontSize: 12,
              color: "#051a1a",
              marginBottom: "2vw"
            }}>대표자: 김현명, 이지행</div>
            <div style={{
              fontSize: 12,
              color: "#051a1a",
              marginBottom: "2vw"
            }}>법인 등록번호 : 110111-7882784</div>
            <div style={{
              fontSize: 12,
              color: "#051a1a",
            }}>주소 : 서울특별시 종로구 성균관로 35길 38  킹고 스타트업 스페이스 306호</div>
          </div>
        </div>
      </Mobile>
      <Default>
        <div style={{
          width: "100vw",
        }}>
          {modal ?
            <div style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              backgroundColor: "rgba(5, 26, 26, 0.6)",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}>
              <div style={{
                width: 460,
                paddingTop: 20,
                paddingBottom: 32,
                backgroundColor: "#ffffff",
                borderRadius: 10,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 3,
              }}>
                {!complete ? <>
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 420,
                  }}>
                    <AiOutlineClose onClick={() => setModal(false)} style={{cursor: "pointer", marginRight: 110}} size={24} color="#051a1a" />
                    <div style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#051a1a",
                      marginTop: 12,
                    }}>하울 프리 사전등록</div>
                  </div>
                  <input onChange={onChange} name="name" value={name} placeholder="이름을 알려주세요!" style={{
                    width: 308,
                    paddingLeft: 16,
                    paddingRight: 16,
                    outline: 0,
                    paddingTop: 19,
                    paddingBottom: 19,
                    borderRadius: 16,
                    marginTop: 32,
                    border: "1px solid rgba(5, 26, 26, 0.2)",

                    fontSize: 16,
                    color: "#202426",
                  }} />
                  <input onChange={onChange} name="phone" value={phone} placeholder="휴대폰 번호를 입력해주세요!" style={{
                    width: 308,
                    paddingLeft: 16,
                    paddingRight: 16,
                    outline: 0,
                    paddingTop: 19,
                    paddingBottom: 19,
                    borderRadius: 16,
                    marginTop: 16,
                    border: "1px solid rgba(5, 26, 26, 0.2)",

                    fontSize: 16,
                    color: "#202426",
                  }} />
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 320,
                    marginTop: 20,
                  }}>
                    <BsCheck onClick={() => setPersonal(!personal)} style={{ cursor: "pointer" }} size={24} color={personal ? "#2dd9d3" : "#dbdbdb"} />
                    <div style={{
                      fontSize: 14,
                      color: "#202426",
                      marginLeft: 8,
                    }}>개인정보 수집에 동의합니다.</div>
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 320,
                    marginTop: 8,
                  }}>
                    <BsCheck onClick={() => setMarket(!market)} style={{ cursor: "pointer" }} size={24} color={market ? "#2dd9d3" : "#dbdbdb"} />
                    <div style={{
                      fontSize: 14,
                      color: "#202426",
                      marginLeft: 8,
                    }}>마케팅 정보 수신에 동의합니다.</div>
                  </div>
                  <div onClick={inputs.name.length > 0 && inputs.phone.length > 0 && personal && market ? addMember : () => alert("이름과 휴대폰 번호를 입력해주세요")} style={{
                    width: 340,
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: inputs.name.length > 0 && inputs.phone.length > 0 && personal && market ? "#051a1a" : "#dbdbdb",

                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#ffffff",
                    borderRadius: 16,
                    marginTop: 32,
                    cursor: "pointer"
                  }}>완료</div>
                </>
                  :
                  <>
                    <div style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#051a1a",
                    }}>사전 등록이 완료되었습니다.</div>
                    <div style={{
                      fontSize: 16,
                      color: "#051a1a",
                      marginTop: 16,
                    }}>서비스 출시 이후 카카오톡을 통해 알려드릴게요!</div>
                    <div onClick={() => {
                      setModal(false)
                      setComplete(false)
                    }} style={{
                      width: 340,
                      paddingTop: 20,
                      paddingBottom: 20,
                      backgroundColor: "#051a1a",

                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#ffffff",
                      borderRadius: 16,
                      marginTop: 32,
                      cursor: "pointer"
                    }}>완료</div>
                  </>
                }
              </div>
            </div>
            :
            <></>
          }
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw"
          }}>
            <div style={{
              width: "50vw",
            }}>
              <img alt="배경이미지" src={landing} style={{ width: "50vw" }} />
              <div style={{
                width: "100vw",
                paddingTop: 12,
                paddingBottom: 12,
                zIndex: 1,
                position: "absolute",
                top: 0,
              }}>
                <div style={{
                  fontSize: 24,
                  color: "#ffffff",
                  marginLeft: "16vw",
                }}>Haul Free</div>
              </div>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              width: "40vw",
              paddingLeft: "10vw",
              backgroundColor: "#ffffff"
            }}>
              <div style={{
                fontSize: 36,
                fontWeight: "bold",
                color: "#051a1a",
              }}>#Experience Now #Pay Later</div>
              <div style={{
                fontSize: 21,
                color: "#051a1a",
                marginTop: 32,
                lineHeight: 1.5,
                marginBottom: 48,
              }}>너무 높은 가격 때문에 망설이지 마세요! 하울프리가 도와줄게요! <br />
      무이자 분할결제를 통해 당신의 소비생활에 자유를 선사하세요.</div>
              <button id="track" onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Click Button",
                  label: "Home_Page"
                })
                setModal(true)
              }} style={{
                width: 340,
                paddingTop: 22,
                paddingBottom: 22,
                backgroundColor: "#051a1a",
                cursor: "pointer",
                
                textAlign: "center",
                color: "#ffffff",
                fontSize: 21,
                fontWeight: "bold",
                borderRadius: 16,
                outline: 0,
              }}>사전등록하고 1만원 쿠폰받기</button>
            </div>
          </div>
          <div style={{
            width: "100vw",
            paddingTop: 32,
            paddingBottom: 32,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
          }}>
            <div style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#051a1a",
              marginRight: "5vw",
            }}>(주) 라텔</div>
            <div style={{
              fontSize: 14,
              color: "#051a1a",
              marginRight: "5vw",
            }}>대표자: 김현명, 이지행</div>
            <div style={{
              fontSize: 14,
              color: "#051a1a",
              marginRight: "5vw",
            }}>법인 등록번호 : 110111-7882784</div>
            <div style={{
              fontSize: 14,
              color: "#051a1a",
            }}>주소 : 서울특별시 종로구 성균관로 35길 38  킹고 스타트업 스페이스 306호</div>
          </div>
        </div>
      </Default>
    </>
  );
}

export default App;
