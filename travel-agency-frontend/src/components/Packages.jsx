import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function Packages() {

    const conversionRate = 325;

    const packages = [
        {
            title: "Golden Package",
            description: "The ultimate luxury travel experience with premium services.",
            logo: "https://t4.ftcdn.net/jpg/04/45/63/69/360_F_445636937_VnBUZ8NVUYD6kzZ3MxweB3e9R3Og95je.jpg",
            price: `${(5000 * conversionRate).toLocaleString()} LKR`,
            images: [
                "https://cms.luxuryhotel.com/assets/0ae4d64c-8d2f-4d36-913f-cf56429ef0bc?fit=cover&width=360&height=360&quality=85&format=webp",
                "https://q-xx.bstatic.com/xdata/images/hotel/max500/459229976.jpg?k=521078b4c2a7f6f0cf37e9458fa993a1f8960fdc39d02fdc0e0a65e69acabff2&o="
            ],
            details: "This package includes luxury hotel stays, first-class flights, gourmet dining, and more."
        },
        {
            title: "Adventurer’s Escape",
            description: "A thrilling journey packed with outdoor adventures and exploration.",
            logo: "https://img.freepik.com/premium-vector/vintage-adventure-logo-background_23-2148137257.jpg",
            price: `${(3000 * conversionRate).toLocaleString()} LKR`,
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSZs5zhD6YHF2nwzW6_a6S_UIOCgWOmgEOA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPx0-xUJfGx-BE7NeHJrpCk-RKVLmcVJ5aKQ&s"
            ],
            details: "This package includes hiking, camping, and adventure sports in thrilling destinations."
        },
        {
            title: "Cultural Discovery Tour",
            description: "Immerse yourself in the rich culture and history of exotic destinations.",
            logo: "https://static.wixstatic.com/media/c8fad6_03f3b65f367848d2bd10f45585c3a9e2~mv2.png/v1/fill/w_266,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c8fad6_03f3b65f367848d2bd10f45585c3a9e2~mv2.png",
            price: `${(4000 * conversionRate).toLocaleString()} LKR`,
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8xaVcLvT0Twm3KUbAh559d_x0NTyFyGtNQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGke0pIfevh6AViAdTc06ncY6fHw4r4R_3tQ&s"
            ],
            details: "This package includes guided tours, cultural events, and local cuisine experiences."
        },
        {
            title: "Relaxation Retreat",
            description: "A peaceful getaway designed for relaxation and rejuvenation.",
            logo: "https://thumbs.dreamstime.com/b/wellness-yoga-pose-people-tree-healthy-life-relaxation-beauty-spa-concept-design-yoga-pose-people-tree-healthy-life-wellness-116717613.jpg",
            price: `${(3500 * conversionRate).toLocaleString()} LKR`,
            images: [
                "data:image/jpeg;base64,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",
                "data:image/jpeg;base64,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"
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
                    {/* Add the Book Now button */}
                    <div className="book-now">
                        <button>Book Now</button>
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
        background: linear-gradient(145deg, #ffffff, #f2f6ff);
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        color: #34495e;

        h2 {
            font-size: 2.5rem;
            color: #2d4059;
            margin-bottom: 1rem;
            text-align: center;
        }

        p {
            font-size: 1.2rem;
            color: #34495e;
            margin-bottom: 1rem;
            text-align: center;
        }

        .price {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .images {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            img {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 10px;
                transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                border: 3px solid transparent;

                &:hover {
                    transform: scale(1.1);
                    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
                    border-color: #2980b9;
                }
            }
        }

        /* Style for Book Now button */
        .book-now {
            margin-top: 2rem;
            display: flex;
            justify-content: center;

            button {
                background-color: #2980b9;
                color: white;
                padding: 0.75rem 2rem;
                border: none;
                border-radius: 5px;
                font-size: 1.2rem;
                cursor: pointer;
                transition: background-color 0.3s ease;

                &:hover {
                    background-color: #1b6393;
                }
            }
        }

        @media screen and (max-width: 1080px) {
            padding: 1rem;

            h2 {
                font-size: 2rem;
            }

            p {
                font-size: 1rem;
            }

            .images {
                img {
                    width: 120px;
                    height: 120px;
                }
            }
        }

        @media screen and (max-width: 720px) {
            padding: 1rem;

            h2 {
                font-size: 1.8rem;
            }

            p {
                font-size: 0.9rem;
            }

            .images {
                img {
                    width: 100px;
                    height: 100px;
                }
            }

            .book-now {
                button {
                    font-size: 1rem;
                    padding: 0.5rem 1.5rem;
                }
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
