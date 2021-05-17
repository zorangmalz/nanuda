import React, { useState } from 'react';
import './App.css';
import landing from "./image/landing.jpeg"
import { BsCheck } from "react-icons/bs"
import { useMediaQuery } from "react-responsive";

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
    password: "",
  })

  const { name, password } = inputs

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(inputs)
  }
  return (
    <>
      <Mobile>
        <div style={{
          width: "100vw",
          height: "100vh",
        }}>
          <img alt="배경이미지" src={landing} style={{ width: "100vw", height: "70vh" }} />
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
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#051a1a",
                      marginTop: "3vw",
                    }}>하울 프리 사전등록</div>
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
                    <input onChange={onChange} name="password" value={password} placeholder="휴대폰 번호를 입력해주세요!" style={{
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
                      <BsCheck size={16} color="#2dd9d3" />
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
                      <BsCheck size={16} color="#2dd9d3" />
                      <div style={{
                        fontSize: 12,
                        color: "#202426",
                        marginLeft: 8,
                      }}>마케팅 정보 수신에 동의합니다.</div>
                    </div>
                    <div onClick={() => setComplete(true)} style={{
                      width: "85vw",
                      paddingTop: "5vw",
                      paddingBottom: "5vw",
                      backgroundColor: inputs.name.length > 0 && inputs.password.length > 0 ? "#051a1a" : "#dbdbdb",

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
            paddingTop: "4vw",
            paddingBottom: "4vw",
            zIndex: 1,
            position: "absolute",
            top: 0,
          }}>
            <div style={{
              fontSize: 20,
              color: "#ffffff",
              marginLeft: "5vw",
            }}>Haul Free</div>
          </div>
          <div style={{
            marginLeft: "5vw",
            top: "10vh",
            position: "absolute",
          }}>
            <div style={{
              width: "70vw",
              fontSize: 28,
              fontWeight: "bold",
              color: "#ffffff",
            }}>#Experience Now #Pay Later</div>
            <div style={{
              width: "90vw",
              fontSize: 16,
              color: "#ffffff",
              marginTop: "4vw",
              lineHeight: 1.5
            }}>너무 높은 가격 때문에 망설이지 마세요! 하울프리가 도와줄게요!
      무이자 분할결제를 통해 당신의 소비생활에 자유를 선사하세요.</div>
            <div onClick={() => setModal(true)} style={{
              width: "85vw",
              paddingTop: "5vw",
              paddingBottom: "5vw",
              backgroundColor: "#051a1a",
              cursor: "pointer",
              marginTop: "8vw",
              textAlign: "center",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "bold",
              borderRadius: 16,
              marginLeft: "2.5vw",
            }}>사전등록하고 1만원 쿠폰받기</div>
          </div>
          <div style={{
            width: "90vw",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            paddingTop: "4vw",
            paddingBottom: "4vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#ffffff",
          }}>
            <div style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#051a1a",
            }}>(주) 라텔</div>
            <div style={{
              fontSize: 12,
              color: "#051a1a",
            }}>대표자: 김현명, 이지행</div>
            <div style={{
              fontSize: 12,
              color: "#051a1a",
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
          minHeight: "100vh",
        }}>
          <img alt="배경이미지" src={landing} style={{ width: "100vw", height: "90vh" }} />
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
                {!complete ? <><div style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "#051a1a",
                  marginTop: 12,
                }}>하울 프리 사전등록</div>
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
                  <input onChange={onChange} name="password" value={password} placeholder="휴대폰 번호를 입력해주세요!" style={{
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
                    <BsCheck size={24} color="#2dd9d3" />
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
                    <BsCheck size={24} color="#2dd9d3" />
                    <div style={{
                      fontSize: 14,
                      color: "#202426",
                      marginLeft: 8,
                    }}>마케팅 정보 수신에 동의합니다.</div>
                  </div>
                  <div onClick={() => {
                    setComplete(true)
                  }} style={{
                    width: 340,
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: inputs.name.length > 0 && inputs.password.length > 0 ? "#051a1a" : "#dbdbdb",

                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#ffffff",
                    borderRadius: 16,
                    marginTop: 32,
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
          <div style={{
            marginLeft: "16vw",
            top: "16vh",
            position: "absolute",
          }}>
            <div style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "#ffffff",
            }}>#Experience Now #Pay Later</div>
            <div style={{
              fontSize: 24,
              color: "#ffffff",
              marginTop: 16,
              lineHeight: 1.5
            }}>너무 높은 가격 때문에 망설이지 마세요! 하울프리가 도와줄게요! <br />
      무이자 분할결제를 통해 당신의 소비생활에 자유를 선사하세요.</div>
            <div onClick={() => setModal(true)} style={{
              width: 340,
              paddingTop: 22,
              paddingBottom: 22,
              backgroundColor: "#051a1a",
              cursor: "pointer",
              marginTop: 32,
              textAlign: "center",
              color: "#ffffff",
              fontSize: 21,
              fontWeight: "bold",
              borderRadius: 16,
            }}>사전등록하고 1만원 쿠폰받기</div>
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
