import React from "react";
import styled from "styled-components";

export default function Contact() {
    return (
        <Section id="contact">
            <div className="title">
                <h2>Contact </h2>
            </div>
            {/*<div className="contact-bar">*/}
            {/*    <form>*/}
            {/*        <input type="text" placeholder="Enter your name" />*/}
            {/*        <input type="email" placeholder="Enter your email" />*/}
            {/*        <textarea placeholder="Enter your message"></textarea>*/}
            {/*        <button type="submit">Send Message</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </Section>
    );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .contact-bar {
    display: flex;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input, textarea {
        width: 300px;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
      button {
        padding: 0.7rem 1.5rem;
        border: none;
        background-color: #302ce9;
        color: white;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #d0d8ff;
          color: #302ce9;
        }
      }
    }
  }
`;
