import React, { useState } from "react";
import styled from "styled-components";
import { db } from '../firebaseConfig'; // Ensure the path is correct
import { collection, addDoc } from "firebase/firestore";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Save the form data to Firestore
            const docRef = await addDoc(collection(db, "contacts"), formData);
            console.log("Document written with ID: ", docRef.id);

            // Send email using EmailJS
            const emailParams = {
                to_name: "SkyWingTravels Team",
                name: formData.name,
                reply_to: formData.email,
                phone: formData.phone,
                message: formData.message
            };

            emailjs.send("service_qe2ypd5", "template_q9azy4x", emailParams, "9SGRaVFDDPl8nl0IR")
                .then(response => {
                    console.log("Email successfully sent!", response.status, response.text);
                    alert("Your message has been sent successfully.");
                })
                .catch(error => {
                    console.error("There was an error sending the email:", error);
                    alert("There was an error sending your message. Please try again later.");
                });

            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("There was an error submitting your form. Please try again.");
        }
    };

    return (
        <Section id="contact">
            <div className="title">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you!</p>
            </div>
            <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number with Country Code"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
            <div className="bottom-upbar">
                <div className="info">
                    <div className="info-item">
                        <div className="icon"><FaEnvelope /></div>
                        <h4>Email</h4>
                        <p>skywing2024travels@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <div className="icon"><FaPhoneAlt /></div>
                        <h4>Phone</h4>
                        <p>+94777551408</p>
                    </div>
                    <div className="info-item">
                        <div className="icon"><FaMapMarkerAlt /></div>
                        <h4>Address</h4>
                        <p>59, Medagamagama, Hanguranketha, Sri Lanka</p>
                    </div>
                </div>
            </div>
            <div className="bottom-bar"></div>
        </Section>
    );
};

// Styled components with enhanced responsiveness
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    padding: 1rem 2rem; /* Increased horizontal padding for small screens */
    box-sizing: border-box;

    .title {
        text-align: center;
        margin-bottom: 2rem;
        h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2d4059;
        }
        p {
            margin-bottom: 1rem;
            font-size: 1.1rem;
            color: #6c757d;
        }

        @media (max-width: 480px) {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: 1rem;
            }
        }
    }

    .contact-form {
        background-color: #f7f8fa;
        padding: 2rem 2.5rem;
        border-radius: 10px;
        box-shadow: rgba(52, 152, 219, 0.4) 0px 8px 20px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto 3rem auto;
        box-sizing: border-box;

        @media (max-width: 768px) {
            padding: 1.5rem 1.5rem;
            max-width: 90%;
        }

        @media (max-width: 480px) {
            padding: 1rem 1rem;
            max-width: 100%;
        }
    }

    .bottom-upbar {
        width: 100%;
        background-color: #b2c7d5;
        padding: 1.5rem 2rem;
        box-sizing: border-box;

        .info {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.5rem;

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
            }

            .info-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                flex: 1 1 200px;
                text-align: center;

                .icon {
                    background-color: #2d4059;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    color: white;
                    font-size: 1.5rem;
                }

                h4 {
                    font-size: 1.2rem;
                    color: #2d4059;
                }

                p {
                    font-size: 1rem;
                    color: #34495e;
                }
            }
        }

        @media (max-width: 480px) {
            padding: 1rem 1rem;

            .info-item {
                .icon {
                    width: 40px;
                    height: 40px;
                    font-size: 1.2rem;
                }

                h4 {
                    font-size: 1rem;
                }

                p {
                    font-size: 0.9rem;
                }
            }
        }
    }

    .bottom-bar {
        width: 100%;
        height: 150px;
        background-color: #2d4059;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%232d4059" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,234.7C672,267,768,245,864,202.7C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;

        @media (max-width: 480px) {
            height: 100px;
        }
    }

    @media (max-width: 480px) {
        padding: 0.5rem 1rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 1rem;
    }

    @media (max-width: 480px) {
        gap: 0.75rem;
    }
`;

const Input = styled.input`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    background-color: #ecf0f1;
    font-family: inherit;
    font-size: 1rem;
    box-sizing: border-box;

    &:focus {
        outline: 2px solid #3498db;
    }

    @media (max-width: 768px) {
        padding: 0.65rem 0.9rem;
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
    }
`;

const Textarea = styled.textarea`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    background-color: #ecf0f1;
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
    min-height: 120px;
    box-sizing: border-box;

    &:focus {
        outline: 2px solid #3498db;
    }

    @media (max-width: 768px) {
        padding: 0.65rem 0.9rem;
        font-size: 0.95rem;
        min-height: 100px;
    }

    @media (max-width: 480px) {
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
        min-height: 80px;
    }
`;

const Button = styled.button`
    padding: 0.75rem 2rem;
    background-color: #2d4059;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-size: 1rem;
    width: 100%;
    max-width: 200px;
    box-sizing: border-box;

    &:hover {
        background-color: #3498db;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 0.65rem 1.8rem;
        font-size: 0.95rem;
        max-width: 180px;
    }

    @media (max-width: 480px) {
        padding: 0.5rem 1.5rem;
        font-size: 0.9rem;
        max-width: 150px;
    }
`;

export default Contact;
