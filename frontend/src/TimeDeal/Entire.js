import React from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader } from "../Style";
import { useHistory } from "react-router";

export default function TimeDeal() {
    let history = useHistory()

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
                    }}>
                        <Header content="나누다딜" goBack={true} />
                        <div style={{
                            marginTop: 16,
                            width: 440,
                            paddingLeft: 20,
                            paddingRight: 20,

                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}></div>
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