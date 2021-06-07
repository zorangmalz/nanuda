import React from "react";
import styled from "styled-components";
import { Default, Mobile } from "../App";
import { BannerContainer, MBannerContainer } from "../Style";
import { useHistory } from "react-router";
import smallbanner from "../images/smallbanner.png";
import { MTimeShop, TimeShop } from "../Home/Home";

export default function Entire() {
    let history = useHistory()

    return (
        <>
            <Default>
                <div style={{
                    display: "flex",
                    flexDirection: "column",

                    width: 480,
                    minHeight: "90vh",
                    backgroundColor: "#ffffff",
                }}>
                    <BannerContainer marginTop="16px" >
                        <img style={{ marginRight: 16 }} src={smallbanner} alt="광고배너" />
                        <img style={{ marginRight: 16 }} src={smallbanner} alt="광고배너" />
                    </BannerContainer>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        width: 440,
                        columnGap: 20,
                        alignSelf: "center",
                        marginTop: 32,
                    }}>
                        <TimeShop
                            title="애플"
                            sub="Apple AirPods Pro 
                                애플 에어팟 프로 2세대 무선충전형"
                            twoPrice="130000"
                            fourPrice="65000"
                            stock={2}
                        />
                        <TimeShop
                            title="애플"
                            sub="Apple iPad Air Sky Blue
                                10.9형 iPad Air Wi-Fi 스카이 블루"
                            twoPrice="360750"
                            fourPrice="180375"
                            stock={0}
                        />
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
                    <MBannerContainer marginTop="4vw" >
                        <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbanner} alt="광고배너" />
                        <img style={{ marginRight: "4vw", width: "67vw" }} src={smallbanner} alt="광고배너" />
                    </MBannerContainer>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        width: "90vw",
                        columnGap: "5vw",
                        alignSelf: "center",
                        marginTop: "8vw",
                    }}>
                        <MTimeShop
                            title="애플"
                            sub="Apple AirPods Pro 
                                애플 에어팟 프로 2세대 무선충전형"
                            twoPrice="130000"
                            fourPrice="65000"
                            stock={2}
                        />
                        <MTimeShop
                            title="애플"
                            sub="Apple iPad Air Sky Blue
                                10.9형 iPad Air Wi-Fi 스카이 블루"
                            twoPrice="360750"
                            fourPrice="180375"
                            stock={0}
                        />
                    </div>
                </div>
            </Mobile>
        </>
    )
}