import React from "react";
import styled from "styled-components";
import homeImage1 from "../assets/hero1.jpg";
import homeImage2 from "../assets/hero2.jpg";
import homeImage3 from "../assets/hero3.jpg";
import homeImage4 from "../assets/hero4.jpg";
import homeImage5 from "../assets/hero5.jpg";

export default function Hero() {
    return (
        <Section id="hero">
            <div className="background">
                <div className="image image1"></div>
                <div className="image image2"></div>
                <div className="image image3"></div>
                <div className="image image4"></div>
                <div className="image image5"></div>
            </div>
            <div className="content">
                <div className="title">
                    <h1>Journey Through Beauty</h1>
                    <p>
                        A captivating exploration of the island's rich landscapes, vibrant culture,
                        and historic treasures. From golden beaches to misty highlands, this journey
                        uncovers the wonders of Sri Lanka, offering an unforgettable experience.
                    </p>
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
    position: relative;
    margin-top: 1rem;
    width: 100%;
    height: 80vh;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .image {
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            z-index: 1;
            filter: brightness(40%);
            border-radius: 25px;
            animation: fadeImage ease-in-out 25s infinite;
            
        }

        .image1 {
            background-image: url(${homeImage1});
            animation-delay: 0s;
        }
        .image2 {
            background-image: url(${homeImage2});
            animation-delay: 5s;
        }
        .image3 {
            background-image: url(${homeImage3});
            animation-delay: 10s;
        }
        .image4 {
            background-image: url(${homeImage4});
            animation-delay: 15s;
        }
        .image5 {
            background-image: url(${homeImage5});
            animation-delay: 20s;
        }
    }

    .content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        opacity: 0;
        animation: fadeIn 1s ease-in-out 0.5s forwards;

        .title {
            color: white;

            h1 {
                font-size: 3rem;
                letter-spacing: 0.2rem;
                animation: textFadeIn 1s ease-in-out 0.5s forwards;
            }

            p {
                text-align: center;
                padding: 0 30vw;
                margin-top: 0.5rem;
                font-size: 1.2rem;
                animation: textFadeIn 1s ease-in-out 0.7s forwards;
            }
        }
    }

    @keyframes fadeImage {
        0%, 20% {
            opacity: 1;
            z-index: 2;
        }
        21%, 100% {
            opacity: 0;
            z-index: 1;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes textFadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 980px) {
        height: 60vh;

        .content {
            .title {
                h1 {
                    font-size: 2rem;
                }
                p {
                    font-size: 1rem;
                    padding: 0 5vw;
                }
            }
        }
    }
`;
