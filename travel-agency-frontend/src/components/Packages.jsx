import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function Packages() {
    const packages = [
        {
            title: "Golden Package",
            description: "The ultimate luxury travel experience with premium services.",
            logo: "https://t4.ftcdn.net/jpg/04/45/63/69/360_F_445636937_VnBUZ8NVUYD6kzZ3MxweB3e9R3Og95je.jpg",
            price: "$5000",
            images: [
                "https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3JpbGFua2F8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1557251662-02d346591108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3JpbGFua2F8ZW58MHx8MHx8fDA%3D"
            ],
            details: "This package includes luxury hotel stays, first-class flights, gourmet dining, and more."
        },
        {
            title: "Adventurer’s Escape",
            description: "A thrilling journey packed with outdoor adventures and exploration.",
            logo: "https://img.freepik.com/premium-vector/vintage-adventure-logo-background_23-2148137257.jpg",
            price: "$3000",
            images: [
                "https://images.unsplash.com/photo-1689144637994-5f62045b02ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNyaWxhbmthfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1546209189-247948bf5dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNyaWxhbmthfGVufDB8fDB8fHww"
            ],
            details: "This package includes hiking, camping, and adventure sports in thrilling destinations."
        },
        {
            title: "Cultural Discovery Tour",
            description: "Immerse yourself in the rich culture and history of exotic destinations.",
            logo: "https://static.wixstatic.com/media/c8fad6_03f3b65f367848d2bd10f45585c3a9e2~mv2.png/v1/fill/w_266,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c8fad6_03f3b65f367848d2bd10f45585c3a9e2~mv2.png",
            price: "$4000",
            images: [
                "https://images.unsplash.com/photo-1689144638193-e6396d13e9d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNyaWxhbmthfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1689144637920-6892e99e5fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNyaWxhbmthfGVufDB8fDB8fHww"
            ],
            details: "This package includes guided tours, cultural events, and local cuisine experiences."
        },
        {
            title: "Relaxation Retreat",
            description: "A peaceful getaway designed for relaxation and rejuvenation.",
            logo: "https://thumbs.dreamstime.com/b/wellness-yoga-pose-people-tree-healthy-life-relaxation-beauty-spa-concept-design-yoga-pose-people-tree-healthy-life-wellness-116717613.jpg",
            price: "$3500",
            images: [
                "https://images.unsplash.com/photo-1689144638474-10e1656d6d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNyaWxhbmthfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNyaWxhbmthfGVufDB8fDB8fHww"
            ],
            details: "This package includes spa treatments, yoga classes, and scenic retreats."
        },
    ];

    const [active, setActive] = useState(null);
    const detailsRef = useRef(null);

    // Scroll to the details section when a package is clicked
    useEffect(() => {
        if (active !== null && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [active]);

    return (
        <Section id="packages">
            <div className="title">
                <h2>Packages</h2>
                <p>Choose a package that best suits your travel desires and dreams.</p>
            </div>
            <div className="packages">
                {packages.map((pkg, index) => (
                    <div
                        className={`package ${active === index ? "active" : ""}`}
                        key={index}
                        onClick={() => setActive(index)}
                    >
                        <img src={pkg.logo} alt={`${pkg.title} logo`} className="logo" />
                        <h3>{pkg.title}</h3>
                        <p>{pkg.description}</p>
                    </div>
                ))}
            </div>

            {active !== null && (
                <div className="package-details" ref={detailsRef}>
                    <h2>{packages[active].title}</h2>
                    <p>{packages[active].details}</p>
                    <p><strong>Price:</strong> {packages[active].price}</p>
                    <div className="images">
                        {packages[active].images.map((img, index) => (
                            <img key={index} src={img} alt={`${packages[active].title} image ${index + 1}`} />
                        ))}
                    </div>
                </div>
            )}
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
                color: #000000;
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

    .package-details {
        margin-top: 4rem;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

        h2 {
            font-size: 2.5rem;
            color: #2d4059;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.2rem;
            color: #2d4059;
            margin-bottom: 1rem;
        }

        .images {
            display: flex;
            gap: 1rem;
            img {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 10px;
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
