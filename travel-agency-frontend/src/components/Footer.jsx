import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <FooterContainer>
            <span>Copyright &copy; {year} TechYoke. All rights reserved</span>
            <ul className="links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">About</a></li>
                <li><a href="#recommend">Destination</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="social__links">
                <li><BsFacebook /></li>
                <li><AiFillInstagram /></li>
                <li><BsLinkedin /></li>
            </ul>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #d0d8ff;
    border-radius: 0.5rem;
    padding: 2.5rem;
    flex-wrap: wrap;

    span {
        flex-basis: 100%;
        text-align: center;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    ul {
        display: flex;
        list-style-type: none;
        gap: 2rem;

        li {
            padding: 0.5rem;

            a {
                text-decoration: none;
                color: black;
                font-weight: 500;
                transition: 0.3s ease-in-out;

                &:hover {
                    color: #302ce9;
                }
            }

            svg {
                font-size: 1.5rem;
                transition: 0.3s ease-in-out;

                &:hover {
                    color: #302ce9;
                }
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1024px) {
        flex-direction: column;
        gap: 2rem;

        ul {
            flex-direction: column;
            align-items: center;
        }

        .social__links {
            flex-direction: row;
            gap: 1rem;
        }
    }
`;
