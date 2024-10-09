import React, { useState } from "react";
import styled from "styled-components";

export default function Packages() {
    const packages = [
        {
            title: "Golden Package",
            description: "The ultimate luxury travel experience with premium services.",
            logo: "https://t4.ftcdn.net/jpg/04/45/63/69/360_F_445636937_VnBUZ8NVUYD6kzZ3MxweB3e9R3Og95je.jpg",
        },
        {
            title: "Adventurer’s Escape",
            description: "A thrilling journey packed with outdoor adventures and exploration.",
            logo: "https://img.freepik.com/premium-vector/vintage-adventure-logo-background_23-2148137257.jpg",
        },
        {
            title: "Cultural Discovery Tour",
            description: "Immerse yourself in the rich culture and history of exotic destinations.",
            logo: "https://static.wixstatic.com/media/c8fad6_03f3b65f367848d2bd10f45585c3a9e2~mv2.png/v1/fill/w_266,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c8fad6_03f3b65f367848d2bd10f45585c3a9e2~mv2.png",
        },
        {
            title: "Relaxation Retreat",
            description: "A peaceful getaway designed for relaxation and rejuvenation.",
            logo: "https://thumbs.dreamstime.com/b/wellness-yoga-pose-people-tree-healthy-life-relaxation-beauty-spa-concept-design-yoga-pose-people-tree-healthy-life-wellness-116717613.jpg",
        },
    ];

    const [active, setActive] = useState(1);

    return (
        <Section id="packages">
            <div className="title">
                <h2>Packages</h2>
                <p>Choose a package that best suits your travel desires and dreams.</p>
            </div>
            <div className="packages">
                {packages.map((pkg, index) => (
                    <div
                        className={`package ${active === index + 1 ? "active" : ""}`}
                        key={index}
                        onClick={() => setActive(index + 1)}
                    >
                        <img src={pkg.logo} alt={`${pkg.title} logo`} className="logo" />
                        <h3>{pkg.title}</h3>
                        <p>{pkg.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

const Section = styled.section`
    padding: 5rem 2rem;
    background-color: #f0f0f0;

    .title {
        text-align: center;
        margin-bottom: 3rem;

        h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2d4059; 
        }

        p {
            font-size: 1.2rem;
            color: #6a7f9a; 
        }
    }

    .packages {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        justify-content: center;

        .package {
            padding: 2rem;
            background-color: #bdc3c7;
            border-radius: 20px; 
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            transition: all 0.3s ease;
            cursor: pointer;
            text-align: center;
            &:hover {
                transform: translateY(-0.5rem);
                background-color: #2980b9; 
                box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
            }

            .logo {
                width: 120px;
                height: 120px;
                object-fit: cover;
                margin-bottom: 1rem;
                border-radius: 50%;
                border: 2px solid #40c4ff; 
            }

            h3 {
                margin-bottom: 1rem;
                font-size: 1.8rem;
                color: #2d4059; 
            }

            p {
                font-size: 1rem;
                color: #000000
            }
        }

        .active {
            background-color: #2d4059; 
            color: white;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 25px;
            transform: translateY(-0.8rem);

            .logo {
                border: 3px solid white;
            }

            h3 {
                color: white;
            }

            p {
                color: #f1f1f1; 
            }
        }
    }

    @media screen and (max-width: 1080px) {
        .packages {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 720px) {
        .packages {
            grid-template-columns: 1fr;
        }
    }
`;
