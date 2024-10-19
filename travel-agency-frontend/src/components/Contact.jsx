import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
    const [active, setActive] = useState(1);

    return (
        <Section id="contact">
            {/* Title Section */}
            <div className="title">
                <h2>Contact Us</h2>
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

            {/* Info Section */}
            <div className="info-section">
                <div className="info">
                    <div className="icon"></div>
                    <div>
                        <h3>EMAIL</h3>
                        <p>Running Guide</p>
                        <p>Workouts</p>
                    </div>
                </div>
                <div className="info">
                    <div className="icon">📞</div>
                    <div>
                        <h3>PHONE (LANDLINE)</h3>
                        <p>+912 3 567 8987</p>
                        <p>+912 5 252 3336</p>
                    </div>
                </div>
                <div className="info">
                    <div className="icon">📍</div>
                    <div>
                        <h3>OUR OFFICE LOCATION</h3>
                        <p>The Interior Design Studio Company</p>
                        <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
                    </div>
                </div>
            </div>

            {/* Bottom UpBar */}
            <div className="bottom-upbar"></div>

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

    .contact-form {
        background-color: #f7f8fa;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: rgba(52, 152, 219, 0.4) 0px 8px 20px;
        width: 100%;
        max-width: 600px;
        margin-bottom: 2rem;

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

    .info-section {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 1200px;
        margin-bottom: 4rem;

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
            flex: 1;

            .icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            h3 {
                font-size: 1.3rem;
                margin-bottom: 0.5rem;
            }

            p {
                font-size: 1rem;
            }

            &:hover {
                background-color: #d0e0e7;
                transform: translateY(-0.5rem);
            }
        }
    }

    /* Bottom UpBar */

    .bottom-upbar {
        position: absolute;
        bottom: 70px; /* Adjust the spacing from the bottom bar */
        left: 50%;
        transform: translateX(-50%); /* Center horizontally */
        width: 95%; /* Adjust width if necessary */
        height: 250px; /* Adjust the height as needed */
        background-color: #b2c7d5; /* Same background color */
        justify-content: center;
        text-align: center;
        z-index: 1;
    }


    /* Bottom Bar */

    .bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px; /* Adjust the height as needed */
        background-color: #2d4059; /* Same background color */
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%232d4059" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,234.7C672,267,768,245,864,202.7C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
    }


    @media screen and (max-width: 768px) {
        .info-section {
            flex-direction: column;
            gap: 1.5rem;
        }
    }
`;

