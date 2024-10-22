import React from "react";
import styled from "styled-components";

// Importing images from assets
import mirissa from "../assets/mirissa.avif";
import unawatuna from "../assets/unawatuna.webp";
import hikkaduwa from "../assets/hikkaduwa.avif";
import kalpitiya from "../assets/kalpitiya.avif";
import whaleWatching from "../assets/whaleWatching.avif";
import snorkeling from "../assets/snorkeling.avif";
import jetSkiing from "../assets/jetskiing.avif";
import pigeonIsland from "../assets/piggoen_island.jpg";
import delftIsland from "../assets/delft.avif";
import katchatheevu from "../assets/kalptiya_island.webp";
import negomboHabour from "../assets/negombo_habour.webp";
import beruwalaHarbour from "../assets/beruwala_harbour.webp";
import galleFort from "../assets/galle_fort.avif";
import pasikuda from "../assets/pasikuda.webp";
import hikkaduwaHarbour from "../assets/hikkaduwaHarbour.jpg";
import madolDoova from "../assets/madolDuwa.jpeg";

export default function Oceans() {
    return (
        <Section id="oceans">
            <Content>
                <h1>Discover the Wonders of Sri Lanka's Oceans</h1>
                <h2>Oceanic Horizons and Coastal Charms</h2>
                <p>
                    Experience the beauty of pristine beaches, tranquil coastal views, and exhilarating ocean activities. Whether you're looking to relax by the shore, indulge in water sports, or explore marine life, Sri Lanka offers an unforgettable coastal experience.
                </p>

                <Categories>
                    <Category title="Tropical Shores">
                        <CardContainer>
                            <LocationCard
                                image={mirissa}
                                title="Mirissa"
                                description="Unwind at the beautiful beach known for its stunning sunsets and whale watching."
                            />
                            <LocationCard
                                image={unawatuna}
                                title="Unawatuna"
                                description="Relax at one of Sri Lanka's most popular beaches with golden sands and vibrant nightlife."
                            />
                            <LocationCard
                                image={hikkaduwa}
                                title="Hikkaduwa"
                                description="Explore the coral reefs and enjoy exciting water sports at this lively beach destination."
                            />
                            <LocationCard
                                image={pasikuda}
                                title="Pasikuda"
                                description="Famous for its shallow waters and beautiful beaches, perfect for a relaxing getaway."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Aqua Adventures">
                        <CardContainer>
                            <LocationCard
                                image={kalpitiya}
                                title="Kalpitiya"
                                description="Dive into thrilling water sports—surfing, snorkeling, and whale watching."
                            />
                            <LocationCard
                                image={whaleWatching}
                                title="Trincomalee"
                                description="Spot majestic blue whales and playful dolphins as they swim in the tranquil waters of Trincomalee, a top whale-watching spot."
                            />
                            <LocationCard
                                image={snorkeling}
                                title="Hikkaduwa"
                                description="Explore vibrant coral reefs and swim among tropical fish in Hikkaduwa's crystal-clear waters, perfect for snorkeling enthusiasts."
                            />
                            <LocationCard
                                image={jetSkiing}
                                title="Bentota"
                                description="Experience the thrill of jet skiing on the Bentota River and ocean, a hub for exciting water sports and scenic coastal views."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Island Escapades">
                        <CardContainer>
                            <LocationCard
                                image={pigeonIsland}
                                title="Pigeon Island"
                                description="Discover the secluded beauty and vibrant marine life at Pigeon Island, famous for snorkeling and coral reefs."
                            />
                            <LocationCard
                                image={delftIsland}
                                title="Delft Island"
                                description="Explore the untouched beauty and historical significance of Delft Island, known for its wild ponies and colonial heritage."
                            />
                            <LocationCard
                                image={katchatheevu}
                                title="Katchatheevu"
                                description="An island of historical importance, featuring stunning coastal scenery and vibrant religious festivals."
                            />
                            <LocationCard
                                image={madolDoova}
                                title="Madol Doova"
                                description="A literary gem and serene island, Madol Doova offers a tranquil escape amidst lush greenery and quiet waters."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Heritage Harbors">
                        <CardContainer>
                            <LocationCard
                                image={negomboHabour}
                                title="Negombo"
                                description="Experience the coastal life and traditions at Negombo's vibrant beaches."
                            />
                            <LocationCard
                                image={beruwalaHarbour}
                                title="Beruwala"
                                description="Enjoy the peaceful beaches and rich cultural heritage of Beruwala."
                            />
                            <LocationCard
                                image={galleFort}
                                title="Galle Fort"
                                description="Explore the historical Galle Fort, a UNESCO World Heritage site with stunning coastal views."
                            />
                            <LocationCard
                                image={hikkaduwaHarbour}
                                title="Hikkaduwa Heritage"
                                description="Experience the local culture and heritage while enjoying the scenic beaches."
                            />
                        </CardContainer>
                    </Category>
                </Categories>
            </Content>
        </Section>
    );
}

const Section = styled.section`
    padding: 4rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom, #e6f7ff, #f9f9f9);
    animation: fadeIn 1s ease-in-out; /* Add animation for the section */
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 800;
        font-size: 48px;
        color: #2c3e50;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
            font-size: 36px; /* Reduce size for tablets */
        }

        @media (max-width: 480px) {
            font-size: 28px; /* Further reduce for mobile */
        }
    }

    h2 {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 36px;
        color: #34495e;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 28px; /* Reduce size for tablets */
        }

        @media (max-width: 480px) {
            font-size: 24px; /* Further reduce for mobile */
        }
    }

    p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 2rem;
        line-height: 1.7;

        @media (max-width: 768px) {
            font-size: 1rem; /* Reduce size for tablets */
        }

        @media (max-width: 480px) {
            font-size: 0.9rem; /* Further reduce for mobile */
        }
    }
`;
const Categories = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 768px) {
        gap: 2rem; /* Reduce gap for mobile */
    }
`;

const CategoryContainer = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
    color: #2c3e50;
    font-size: 32px;
    margin-bottom: 1rem;
    font-weight: 700;
    text-transform: uppercase;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap; /* Allow cards to wrap on smaller screens */

    @media (max-width: 768px) {
        justify-content: center; /* Center cards on mobile */
    }

    @media (max-width: 480px) {
        gap: 0.5rem; /* Reduce gap on very small screens */
    }
`;

const Card = styled.div`
    background: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s, box-shadow 0.3s;
    flex: 1; /* Allow cards to grow equally */

    &:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
    transition: transform 0.3s ease-in-out;

    ${Card}:hover & {
        transform: scale(1.05); /* Scale image on hover */
    }
`;

const CardTitle = styled.h4`
    color: #2c3e50;
    margin: 0.75rem 0 0.5rem;
    font-size: 22px;
    font-weight: 600;
`;

const CardDescription = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 1rem;
`;

const ExploreNowButton = styled.button`
    background: #5b7d9f;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease, transform 0.3s, box-shadow 0.3s; /* Added transition for box-shadow */

    &:hover {
        background: #34495e; /* Darken button on hover */
        transform: scale(1.05); /* Scale button on hover */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
    }
`;

const LocationCard = ({ image, title, description }) => (
    <Card>
        <CardImage src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ExploreNowButton>Explore Now</ExploreNowButton>
    </Card>
);

const Category = ({ title, children }) => (
    <CategoryContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <CardContainer>{children}</CardContainer>
    </CategoryContainer>
);
