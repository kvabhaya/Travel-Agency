import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";
import img19 from "../assets/img19.jpeg";
import img20 from "../assets/img20.jpeg";
import img21 from "../assets/img21.jpeg";
import img22 from "../assets/img22.jpeg";
import img23 from "../assets/img23.jpeg";
import img24 from "../assets/img24.jpeg";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.avif";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";


export default function Packages() {

    const conversionRate = 325;

    const packages = [
        {
            title: "Golden Package",
            description: "The ultimate luxury travel experience with premium services.",
            logo: logo1,
            price: `${(5000 * conversionRate).toLocaleString()} LKR`,
            images: [img1, img6   , img2, img3, img4, img5],
            details: "This package includes luxury hotel stays, first-class flights, gourmet dining, and more."
        },
        {
            title: "Adventurer’s Escape",
            description: "A thrilling journey packed with outdoor adventures and exploration.",
            logo: logo2,
            price: `${(3000 * conversionRate).toLocaleString()} LKR`,
            images: [img7, img8, img9, img10, img11, img12],
            details: "This package includes hiking, camping, and adventure sports in thrilling destinations."
        },
        {
            title: "Cultural Discovery Tour",
            description: "Immerse yourself in the rich culture and history of exotic destinations.",
            logo: logo3,
            price: `${(4000 * conversionRate).toLocaleString()} LKR`,
            images: [img13, img14, img15, img16, img17, img18],
            details: "This package includes guided tours, cultural events, and local cuisine experiences."
        },
        {
            title: "Relaxation Retreat",
            description: "A peaceful getaway designed for relaxation and rejuvenation.",
            logo: logo4,
            price: `${(3500 * conversionRate).toLocaleString()} LKR`,
            images: [img19, img20, img21, img22, img23, img24],
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
