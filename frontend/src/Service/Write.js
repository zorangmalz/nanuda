import React, { useEffect, useReducer, useState } from "react";
import { Default, Mobile } from "../App";
import WebIntro, { Header, MHeader, MStandardButton, StandardButton } from "../Style";
import { useHistory } from "react-router";
import ReactStars from "react-rating-stars-component";

export default function Write() {
    let history = useHistory()
    const [number, setNumber] = useState(0);

    //이용후기 및 의견 작성
    const [inputs, setInputs] = useState({
        after: "",
        opinion: "",
    })
    const { after, opinion } = inputs
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const [userId,setUserId]=useState("")    
    const [user,setUser]=useState("")
    async function putServiceReview() {
        
        var data = {
            service_score: number, service_content: after, service_opinion: opinion, user_id:user
        }
        fetch("https://haulfree.link/servicereviewornot/",{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials:"include",

        })
            .then(response => response.json())
            .then(response => {
                setUser(response.data.id)
            }).catch(err=>{
                console.log(err)
            })
    
        
        console.log(data)
        await fetch("https://haulfree.link/servicereview/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                history.replace("/servicereview")
            }).catch(err => console.log(err))
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
        setNumber(newRating)
    };
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
                        justifyContent: "space-between",

                        width: 480,
                        minHeight: "100vh",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",

                            width: 480,
                        }}>
                            <Header content="나눠본 사람들" goBack={true} />
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 32,
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr"
                            }}>나누다 서비스 만족도는 어느정도인가요?</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: 20,
                                marginTop: 12,
                            }}>
                                <ReactStars
                                    color="#dbdbdb"
                                    count={5}
                                    onChange={ratingChanged}
                                    size={42}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 36,
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr"
                            }}>나누다 서비스 이용 후기를 작성해주세요!</div>
                            <textarea onChange={onChange} name="after" value={after} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                                outline: 0,
                                border: 0,
                                width: 408,
                                padding: 16,
                                borderRadius: 6,
                                backgroundColor: "#f2f3f8",
                                minHeight: 180,
                                marginLeft: 20,
                                marginTop: 16,
                                resize: "none",
                                fontFamily: "NotoSansCJKkr"
                            }} />
                            <div style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#202426",
                                marginTop: 32,
                                marginLeft: 20,
                                fontFamily: "NotoSansCJKkr"
                            }}>더 나은 서비스를 위한 의견을 말씀해주세요.</div>
                            <textarea onChange={onChange} name="opinion" value={opinion} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                                outline: 0,
                                border: 0,
                                width: 408,
                                padding: 16,
                                borderRadius: 6,
                                backgroundColor: "#f2f3f8",
                                minHeight: 180,
                                marginLeft: 20,
                                marginTop: 16,
                                resize: "none",
                                fontFamily: "NotoSansCJKkr"
                            }} />
                        </div>
                        <StandardButton
                            onClick={putServiceReview}
                            marginTop={32}
                            text="작성 완료"
                            state={inputs.after.length > 0 && inputs.opinion.length > 0 ? true : false}
                        />
                        <div style={{ marginBottom: 40 }} />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#ffffff",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",

                        width: "100%",
                    }}>
                        <MHeader content="나눠본 사람들" goBack={true} />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: "5%",
                            fontFamily: "NotoSansCJKkr"
                        }}>나누다 서비스 만족도는 어느정도인가요?</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: "5%",
                            marginTop: 8,
                        }}>
                            <ReactStars
                                color="#dbdbdb"
                                count={5}
                                onChange={ratingChanged}
                                size={32}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 36,
                            marginLeft: "5%",
                            fontFamily: "NotoSansCJKkr"
                        }}>나누다 서비스 이용 후기를 작성해주세요!</div>
                        <textarea onChange={onChange} name="after" value={after} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                            outline: 0,
                            border: 0,
                            width: "82%",
                            padding: "4%",
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: "5%",
                            marginTop: 16,
                            resize: "none",
                            fontFamily: "NotoSansCJKkr"
                        }} />
                        <div style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#202426",
                            marginTop: 32,
                            marginLeft: "5%",
                            fontFamily: "NotoSansCJKkr"
                        }}>더 나은 서비스를 위한 의견을 말씀해주세요.</div>
                        <textarea onChange={onChange} name="opinion" value={opinion} cols="10" rows="5" placeholder="정성스럽게 작성해주시면.. 사랑합니다 ❤️" style={{
                            outline: 0,
                            border: 0,
                            width: "82%",
                            padding: 16,
                            borderRadius: 6,
                            backgroundColor: "#f2f3f8",
                            minHeight: 100,
                            marginLeft: "5%",
                            marginTop: 16,
                            resize: "none",
                            fontFamily: "NotoSansCJKkr"
                        }} />
                    </div>
                    <MStandardButton
                        onClick={putServiceReview}
                        marginTop={32}
                        text="작성 완료"
                        state={inputs.after.length > 0 && inputs.opinion.length > 0 ? true : false}
                    />
                    <div style={{ marginBottom: "10vw" }} />
                </div>
            </Mobile>
        </>
    )
}