import React, { useReducer } from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { Switch, Route, useHistory } from "react-router";

const Container = styled.div`
    width: 440px;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid rgba(5, 26, 26, 0.2);
    background-color: #ffffff;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    ::-webkit-scrollbar{
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

const Title = ({text, state, onClick}) => {
    return (
        <div onClick={onClick} style={{
            position: "relative",
            bottom: state ? -1 : 0,
            minWidth: 110,
            maxWidth: 110,
            textAlign: "center",
            verticalAlign: "flex-end",
            fontFamily: "NotoSansCJKkr",
            fontSize: 16,
            fontWeight: state ? "bold" : "normal",
            color: "#051a1a",
            paddingBottom: 8,
            borderBottom: state ? "2px solid rgba(5, 26, 26, 1)" : "0px solid rgba(255, 255, 255, 0)",
            cursor: "pointer",
        }}>{text}</div>
    )
}

function tab(state, action) {
    switch (action.type){
        case "ENTIRE":
            return 0;
        case "ELECTRONIC":
            return 1;
        case "FASHION":
            return 2;
        default: 
            return 0;
    }
}

export default function TimeDeal() {
    let history = useHistory()
    const [tabNum, dispatch] = useReducer(tab, 0)
    const onENTIRE = () => {
        dispatch({ type: "ENTIRE" })
    }
    const onELECTRONIC = () => {
        dispatch({ type: "ELECTRONIC" })
    }
    const onFASHION = () => {
        dispatch({ type: "FASHION" })
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
                            <Header content="나누다딜" goBack={true} />
                            <Container>
                                <Title onClick={onENTIRE} text="전체 상품" state={tabNum == 0} />
                                <Title onClick={onELECTRONIC} text="전자제품" state={tabNum == 1} />
                                <Title onClick={onFASHION} text="패션" state={tabNum == 2} />
                                <Title text="카테1" state={tabNum == 3} />
                                <Title text="카테2" state={tabNum == 4} />
                            </Container>
                            <Switch>
                                <Route exact path="/timedeal/entire" />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <MHeader content="나누다딜" goBack={true} />

                </div>
            </Mobile>
        </>
    )
}