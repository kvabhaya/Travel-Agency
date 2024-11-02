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
                to_name: "SkyWingTravels Team", // Placeholder for the recipient name in the template
                name: formData.name,
                reply_to: formData.email,  // Ensure the parameter matches the template variable
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
                });

            // Reset form after submission
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error("Error adding document: ", error);
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
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="phone"
                        placeholder="Your Phone Number with Country Code"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
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
// Styled components
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Full height of the viewport */
    background-color: #f0f0f0;
    position: relative;
    overflow: hidden;

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
    }

    .contact-form {
        background-color: #f7f8fa;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: rgba(52, 152, 219, 0.4) 0px 8px 20px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 3rem; /* Space below */
    }

    .bottom-upbar {
        width: 100%;
        background-color: #b2c7d5;
        z-index: 1;
        padding: 1rem;

        .info {
            display: flex;
            justify-content: space-around; /* Space items evenly */
            align-items: center;
            flex-wrap: wrap; /* Allow wrapping on smaller screens */

            .info-item {
                display: flex;
                align-items: center;
                gap: 0.5rem; /* Smaller gap */
                flex: 1 1 200px; /* Flex grow, shrink, and basis for responsive behavior */
                text-align: center; /* Center text */
                margin: 1rem; /* Margin for spacing */

                .icon {
                    background-color: #2d4059;
                    width: 50px; /* Adjust size */
                    height: 50px; /* Adjust size */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    color: white;
                    font-size: 1.2rem; /* Smaller icon size */
                }

                h4 {
                    font-size: 1.2rem;
                    color: #2d4059;
                }

                p {
                    font-size: 0.9rem; /* Smaller text */
                    color: #34495e;
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
        .title h2 {
            font-size: 2rem; /* Adjust font size for smaller screens */
        }
        .title p {
            font-size: 1rem; /* Adjust font size for smaller screens */
        }
    }
`;

// Styled input components
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

const Input = styled.input`
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    width: 90%; /* Responsive width */
    max-width: 500px; /* Maximum width for input fields */
    background-color: #ecf0f1;
    font-family: inherit;
    font-size: 1rem;
`;

const Textarea = styled.textarea`
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    width: 90%; /* Responsive width */
    max-width: 500px; /* Maximum width for input fields */
    background-color: #ecf0f1;
    font-family: inherit;
    font-size: 1rem;
    resize: none; /* Prevent resizing */
`;

const Button = styled.button`
    padding: 0.75rem 2rem; /* Adjust button padding */
    background-color: #2d4059;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #3498db;
    }
`;

export default Contact;
