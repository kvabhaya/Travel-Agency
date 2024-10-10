import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
    const [active, setActive] = useState(1);

    return (
        <Section id="contact">
            {/* Title moved outside the box */}
            <div className="title">
                <h2>Contact</h2>
            </div>

            <div className="contact">
                {/* Contact Form and Info moved outside the blue box */}
                <div className="contact-form">
                    <p>Any questions or remarks? Just write us a message!</p>
                    <form>
                        <input type="email" placeholder="Enter a valid email address" required />
                        <input type="text" placeholder="Enter your Name" required />
                        <button type="submit">Submit</button>
                    </form>

                    {/*/!* Info Sections *!/*/}
                    {/*<div className="info-sections">*/}
                    {/*    <div className="info phone">*/}
                    {/*        <div className="icon">📞</div>*/}
                    {/*        <div>*/}
                    {/*            <h3>Phone (Landline)</h3>*/}
                    {/*            <p>+912 3 567 8987</p>*/}
                    {/*            <p>+912 5 252 3336</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
        margin-bottom: 1rem; /* Adjusted space */
        
        h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2d4059;
        }
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1.5rem;

        /* Contact Form styling */
        .contact-form {
            text-align: center;
            background-color: #ecf0f1;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            width: 100%;
            max-width: 600px; /* Limit width */
            margin-bottom: 1.5rem;

            h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
            }

            p {
                margin-bottom: 1.5rem;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                input {
                    padding: 0.75rem;
                    border: none;
                    border-radius: 5px;
                    width: 100%;
                }

                button {
                    padding: 0.75rem;
                    background-color: #2d4059;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;

                    &:hover {
                        transform: translateY(-0.1rem);
                        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
                    }
                }
            }
            &:hover {
                transform: translateY(-0.5rem);
                box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
            }
        }

        /* Info Sections styling */
        .info-sections {
            display: flex;
            gap: 1rem;

            .info {
                display: flex;
                align-items: center;
                background-color: #bdc3c7;
                padding: 1rem;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                transition: all 0.3s ease;
                cursor: pointer;

                &:hover {
                    background-color: #3498db;
                    transform: translateY(-0.5rem);
                }

                .icon {
                    font-size: 2rem;
                    margin-right: 1rem;
                }

                h3 {
                    font-size: 1.5rem;
                }

                p {
                    font-size: 1rem;
                }
            }
        }

        /* Blue Box styling */
        .contacts {
            padding: 2rem;
            background-color: #2980b9; /* Existing blue box color */
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            transition: all 0.3s ease;
            cursor: pointer;
            text-align: center;
            max-width: 600px;
            width: 100%;
            color: white;
            //
            //&:hover {
            //    transform: translateY(-0.5rem);
            //    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
            //}
        }
    }

    @media screen and (max-width: 768px) {
        .info-sections {
            flex-direction: column;
            align-items: center;
        }
    }
`;
