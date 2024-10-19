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
            title: "Platinum Package",
            description: "The ultimate luxury travel experience with premium services.",
            logo: logo1,
            images: [img1, img6, img2, img3, img4, img5],
            details: "This package includes luxury hotel stays, first-class flights, gourmet dining, and more.",
            destinations: [
                {
                    name: "Oceanic Horizons",
                    price: `${(1200 * conversionRate).toLocaleString()} LKR`,
                    place: "Maldives",
                    accommodations: "5-star hotel, Private Beach Villa",
                    details: "Experience the serene beauty of the Maldives with crystal-clear waters and luxurious amenities.",
                    image: img1,
                },
                {
                    name: "Timeless Trails",
                    price: `${(900 * conversionRate).toLocaleString()} LKR`,
                    place: "Switzerland",
                    accommodations: "Mountain Lodge, Spa Access",
                    details: "A scenic journey through the Swiss Alps with stunning views and world-class accommodations.",
                    image: img2,
                },
                {
                    name: "Emerald Highlands",
                    price: `${(1000 * conversionRate).toLocaleString()} LKR`,
                    place: "New Zealand",
                    accommodations: "Luxury Cabin, Adventure Tours",
                    details: "Explore the breathtaking landscapes of New Zealand with adventure-packed tours and luxury lodging.",
                    image: img3,
                },
            ],
        },
        {
            title: "Golden Package",
            description: "Immerse yourself in the rich culture and history of exotic destinations.",
            logo: logo3,
            images: [img13, img14, img15, img16, img17, img18],
            details: "This package includes guided tours, cultural events, and local cuisine experiences.",
            destinations: [
                {
                    name: "Wilderness Safaris",
                    price: `${(1100 * conversionRate).toLocaleString()} LKR`,
                    place: "South Africa",
                    accommodations: "Safari Lodge, Wildlife Tours",
                    details: "Join guided safaris and explore the wildlife of Africa while staying in a luxurious safari lodge.",
                    image: img13,
                },
                {
                    name: "Tranquil Wellness Retreats",
                    price: `${(950 * conversionRate).toLocaleString()} LKR`,
                    place: "Bali, Indonesia",
                    accommodations: "Wellness Resort, Spa Treatments",
                    details: "Relax and rejuvenate at a peaceful wellness resort with a focus on health and wellbeing.",
                    image: img14,
                },
            ],
        },
        {
            title: "Diamond Package",
            description: "A peaceful getaway designed for relaxation and rejuvenation.",
            logo: logo4,
            price: `${(3500 * conversionRate).toLocaleString()} LKR`,
            images: [img19, img20, img21, img22, img23, img24],
            details: "This package includes spa treatments, yoga classes, and scenic retreats.",
            destinations: [
                {
                    name: "Serene Sanctuaries",
                    price: `${(1000 * conversionRate).toLocaleString()} LKR`,
                    place: "Japan",
                    accommodations: "Ryokan, Onsen Access",
                    details: "Unwind in the tranquil Japanese countryside, enjoying traditional ryokan stays and hot spring baths.",
                    image: img19,
                },
                {
                    name: "Island Adventures",
                    price: `${(1200 * conversionRate).toLocaleString()} LKR`,
                    place: "Hawaii, USA",
                    accommodations: "Beach Resort, Water Sports",
                    details: "Enjoy island life with water sports and relaxing beachside stays at a luxurious resort.",
                    image: img20,
                },
            ],
        },
        {
            title: "Silver Package",
            description: "A thrilling journey packed with outdoor adventures and exploration.",
            logo: logo2,
            price: `${(3000 * conversionRate).toLocaleString()} LKR`,
            images: [img7, img8, img9, img10, img11, img12],
            details: "This package includes hiking, camping, and adventure sports in thrilling destinations.",
            destinations: [
                {
                    name: "Mountain Treks",
                    price: `${(800 * conversionRate).toLocaleString()} LKR`,
                    place: "Nepal",
                    accommodations: "Trekking Lodge, Adventure Camp",
                    details: "Hike through the rugged beauty of the Himalayas, experiencing the thrill of mountain adventures.",
                    image: img7,
                },
                {
                    name: "Coastal Journeys",
                    price: `${(850 * conversionRate).toLocaleString()} LKR`,
                    place: "Australia",
                    accommodations: "Coastal Camp, Surfing Lessons",
                    details: "Explore the Australian coastline with camping and surfing experiences in beautiful natural surroundings.",
                    image: img8,
                },
            ],
        },
    ];

    const [activePackage, setActivePackage] = useState(null);
    const [activeDestination, setActiveDestination] = useState(null);
    const detailsRef = useRef(null);

    useEffect(() => {
        if (activePackage !== null && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [activePackage, activeDestination]);

    useEffect(() => {
        if (activeDestination && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [activeDestination]);

    const handleDestinationClick = (destination) => {
        setActiveDestination(destination);
    };

    return (
        <Section id="packages">
            <div className="title">
                <h2>Packages</h2>
                <p>Choose a package that best suits your travel desires and dreams.</p>
            </div>
            <div className="packages">
                {packages.map((pkg, index) => (
                    <div
                        className={`package ${activePackage === index ? "active" : ""}`}
                        key={index}
                        onClick={() => {
                            setActivePackage(index);
                            setActiveDestination(null);
                        }}
                    >
                        <img src={pkg.logo} alt={`${pkg.title} logo`} className="logo" />
                        <h3>{pkg.title}</h3>
                        <p>{pkg.description}</p>
                    </div>
                ))}
            </div>

            {activePackage !== null && (
                <div className="package-details" ref={detailsRef}>
                    <h2>{packages[activePackage].title}</h2>
                    <p>{packages[activePackage].details}</p>
                    <div className="images">
                        {packages[activePackage].images.map((img, index) => (
                            <img key={index} src={img} alt={`${packages[activePackage].title} image ${index + 1}`} />
                        ))}
                    </div>
                    <h3>Destinations</h3>
                    <div className="destinations">
                        {packages[activePackage].destinations.map((destination, index) => (
                            <button
                                key={index}
                                onClick={() => handleDestinationClick(destination)}
                                className={`destination-button ${activeDestination === destination ? "selected" : ""}`}
                            >
                                {destination.name}
                            </button>
                        ))}
                    </div>
                    {activeDestination && (
                        <div className="destination-details">
                            <h4>Destination: {activeDestination.name}</h4>
                            <p><strong>Price:</strong> {activeDestination.price}</p>
                            <p><strong>Place:</strong> {activeDestination.place}</p>
                            <p><strong>Accommodations:</strong> {activeDestination.accommodations}</p>
                            <p>{activeDestination.details}</p>
                            <img src={activeDestination.image} alt={activeDestination.name} className="destination-image" />
                        </div>
                    )}
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
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
                width: 100px;
                height: 100px;
                object-fit: cover;
                margin-bottom: 1rem;
                border-radius: 50%;
                border: 2px solid #40c4ff;
            }

            h3 {
                margin-bottom: 1rem;
                font-size: 1.5rem;
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
            font-size: 2rem;
            color: #2d4059;
            margin-bottom: 1rem;
            text-align: center;
        }

        p {
            font-size: 1rem;
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
                width: 200px;
                height: 150px;
                object-fit: cover;
                border-radius: 10px;
            }
        }
        
        h3{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #023e8a;
        }

        .destinations {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            gap: 1rem;

            .destination-button {
                padding: 0.75rem 1.5rem;
                font-size: 1rem;
                background-color: #2d4059;
                color: white;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;

                &:hover {
                    background-color: #2980b9;
                }

                &.selected {
                    background-color: #e74c3c;
                }
            }
        }

        .destination-details {
            margin-top: 2rem;
            padding: 1.5rem;
            background-color: #ecf0f1;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

            h4 {
                font-size: 1.5rem;
                color: #34495e;
                margin-bottom: 1rem;
                text-align: center;
            }

            p {
                font-size: 1rem;
                color: #34495e;
                margin-bottom: 0.75rem;
                text-align: center;

                strong {
                    font-weight: bold;
                    color: #2d4059;
                }
            }

            .destination-image {
                width: 100%;
                max-width: 300px;
                height: 200px;
                object-fit: cover;
                margin-top: 1rem;
                border-radius: 15px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
`;

