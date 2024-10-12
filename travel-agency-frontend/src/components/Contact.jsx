
import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
    const [active, setActive] = useState(1);

    return (
        <Section id="contact">
            {/* Title moved outside the box */}
            <div className="title">
                <h2>Contact Us</h2>
                <p>Any questions or remarks? Just write us a message!</p>
            </div>

            <div className="contact">
                {/* Contact Form */}
                <div className="contact-form">
                    <form>
                        <input type="email" placeholder="Enter a valid email address" required />
                        <input type="text" placeholder="Enter your Name" required />
                        <button type="submit">Submit</button>
                    </form>
                    {/* Info Sections */}
                    <div className="info-sections">
                        <div className="info phone">
                            {/*<div className="icon">📞</div>*/}
                            <div>
                                <h3>PHONE (LANDLINE)</h3>
                                <p>+912 3 567 8987</p>
                                <p>+912 5 252 3336</p>
                            </div>
                        </div>
                        <div className="info mail">
                            {/*<div className="icon">📍</div>*/}
                            <div>
                                <h3>EMAIL</h3>
                                <p>kkkkkkkkk@gmail.com</p>
                                <p>kkkkkkkkk@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/* Wavy Bar */}
                    <WavyBar>
                        <svg viewBox="0 0 1440 320">
                            <path
                                fill="#2d4059"  /* Changed Wavy bar color */
                                fillOpacity="1"
                                d="M0,96L48,106.7C96,117,192,139,288,170.7C384,203,480,245,576,234.7C672,224,768,160,864,138.7C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ></path>
                        </svg>
                    </WavyBar>
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: white;

    .title {
        text-align: center;
        margin-bottom: 2rem;

        h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2d4059;
        }

        p {
            font-size: 1.1rem;
            color: #6c757d;
        }
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;

        .contact-form {
            background-color: #f7f8fa;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: rgba(52, 152, 219, 0.4) 0px 8px 20px;
            width: 100%;
            max-width: 600px;
            margin-bottom: 0; /* Remove bottom margin to bring contact form closer to info sections */

            form {
                display: flex;
                gap: 1rem;
                justify-content: center;

                input {
                    padding: 0.75rem;
                    border: none;
                    border-radius: 5px;
                    width: 45%;
                    background-color: #ecf0f1;
                }

                button {
                    padding: 0.75rem 2rem;
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
    }

    .info-sections {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 1200px;
        margin-top: 50px; /* Reduce margin-top to bring the info sections closer to the form */
        margin-bottom: -100px;
        flex: 1;

        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #bdc3c7;
            padding: 1rem;
            border-radius: 10px;
            width: 30%;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            transition: all 0.3s ease;

            &:hover {
                background-color: #d0e0e7;
                transform: translateY(-0.5rem);
            }

            .icon {
                font-size: 2.5rem;
                margin-bottom: 0.5rem;
            }

            h3 {
                font-size: 1.3rem;
                margin-bottom: 0.5rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .info-sections {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .contact-form form {
            flex-direction: column;

            input {
                width: 100%;
            }
        }
    }
`;

const WavyBar = styled.div`
    width: 100%;
    margin-top: 0; /* Removed margin-top to make the wavy bar closer to info sections */
    display: flex;
    margin-bottom: 0;
    svg {
        display: block;
        width: 100%;
        height: auto;
    }
`;
