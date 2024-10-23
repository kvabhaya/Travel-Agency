import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    const [active, setActive] = useState(1);

    return (
        <Section id="contact">
            {/* Title Section */}
            <div className="title">
                <h2>Contact</h2>
                <p>Any questions or remarks? Just write us a message!</p>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form">
                <form>
                    <input type="email" placeholder="Enter a valid email address" required />
                    <input type="text" placeholder="Enter your Name" required />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Bottom UpBar with Info Section */}
            <div className="bottom-upbar">
                <div className="info">
                    <div className="info-item">
                        <div className="info-email">
                            <div className="icon">
                                <FaEnvelope/>
                            </div>
                            <h4>Email</h4>
                            <p>contact@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-loca">
                            <div className="icon">
                                <FaMapMarkerAlt/>
                            </div>
                            <h4>Location</h4>
                            <p>Sri Lanka</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-con">
                            <div className="icon">
                                <FaPhoneAlt/>
                            </div>
                            <h4>Contact</h4>
                            <p>+94771234567</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottom-bar"></div>
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    position: relative;

    .title {
        text-align: center;
        margin-bottom: 0.5rem;

        h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2d4059;
        }

        p {
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
            color: #6c757d;
        }
    }

    .contact-form {
        background-color: #f7f8fa;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: rgba(52, 152, 219, 0.4) 0px 8px 20px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 22rem;

        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;

            input {
                padding: 0.75rem;
                border: none;
                border-radius: 5px;
                width: 80%;
                background-color: #ecf0f1;
            }

            button {
                padding: 0.75rem 3rem;
                background-color: #2d4059;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                    background-color: #3498db;
                }
            }
        }
    }

    .bottom-upbar {
        position: absolute;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
        height: 150px;
        background-color: #b2c7d5;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        .info {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;

            .info-item {
                display: flex;
                align-items: center;
                gap: 1rem; /* Space between icon and text */
                margin-bottom: 40px;

                .icon {
                    background-color: #2d4059;
                    width: 70px;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    color: white;
                    font-size: 1.5rem;
                    margin-bottom: 50px;
                }

                .text {
                    h4 {
                        font-size: 1.2rem;
                        color: #2d4059;
                        margin-bottom: 0.2rem;
                    }

                    p {
                        font-size: 1rem;
                        color: #34495e;
                    }
                }
            }
        }
    }

    .bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-color: #2d4059;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%232d4059" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,234.7C672,267,768,245,864,202.7C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    @media screen and (max-width: 768px) {
        .contact-form {
            width: 90%;
        }

        .bottom-upbar .info {
            flex-direction: column;
            gap: 1rem;
        }
    }
`;
