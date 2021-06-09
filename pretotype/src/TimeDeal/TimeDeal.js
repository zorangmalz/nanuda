import React, { useReducer } from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { Switch, Route, useHistory } from "react-router";
import Entire from "./Entire"

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

const MContainer = styled.div`
    width: 90vw;
    max-width: 90vw;
    height: 10vw;
    padding-left: 5vw;
    padding-right: 5vw;
    border-bottom: 1px solid rgba(5, 26, 26, 0.2);
    background-color: #ffffff;
    overflow: auto;
    position: relative;
    ::-webkit-scrollbar{
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

const Title = ({ text, state, onClick }) => {
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

const MTitle = ({ text, state, onClick }) => {
    return (
        <div onClick={onClick} style={{
            position: "relative",
            bottom: state ? -1 : 0,
            minWidth: "25vw",
            maxWidth: "25vw",
            textAlign: "center",
            verticalAlign: "flex-end",
            fontFamily: "NotoSansCJKkr",
            fontSize: 14,
            fontWeight: state ? "bold" : "normal",
            color: "#051a1a",
            paddingTop: "2vw",
            paddingBottom: "2vw",
            borderBottom: state ? "2px solid rgba(5, 26, 26, 1)" : "0px solid rgba(255, 255, 255, 0)",
            cursor: "pointer",
        }}>{text}</div>
    )
}

function tab(state, action) {
    switch (action.type) {
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
        history.push("/timedeal/entire")
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <Header content="나누다딜" goBack={true} />
                        <Container>
                            <Title onClick={onENTIRE} text="전체 상품" state={tabNum == 0} />
                            <Title onClick={onELECTRONIC} text="전자제품" state={tabNum == 1} />
                            <Title onClick={onFASHION} text="패션" state={tabNum == 2} />
                        </Container>
                        <Switch>
                            <Route exact path="/timedeal/entire" component={Entire} />
                        </Switch>
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
                    <MContainer>
                        <MTitle onClick={onENTIRE} text="전체 상품" state={tabNum == 0} />
                        <MTitle onClick={onELECTRONIC} text="전자제품" state={tabNum == 1} />
                        <MTitle onClick={onFASHION} text="패션" state={tabNum == 2} />
                    </MContainer>
                    <Switch>
                        <Route exact path="/timedeal/entire" component={Entire} />
                    </Switch>
                </div>
            </Mobile>
        </>
    )
}