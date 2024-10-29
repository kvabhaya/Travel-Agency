import React, { useState, useRef } from "react";
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
    const [selectedLocation, setSelectedLocation] = useState(null);
    const detailsRef = useRef(null); // Create a ref for the details container
    const [scrollPosition, setScrollPosition] = useState(0); // Store the scroll position

    const handleExploreMore = (location) => {
        setSelectedLocation(location);
        setScrollPosition(window.scrollY);

        // Scroll to the details container if it exists
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleCloseDetails = () => {
        setSelectedLocation(null);
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    };


    return (
        <Section id="oceans">
            <Content>
                <h1>Discover the Wonders of Sri Lanka's Oceans</h1>
                <h2>Oceanic Horizons and Coastal Charms</h2>
                <p>
                    Experience the beauty of pristine beaches, tranquil coastal views, and exhilarating ocean
                    activities. Whether you're looking to relax by the shore, indulge in water sports, or explore marine
                    life, Sri Lanka offers an unforgettable coastal experience.
                </p>

                <Categories>
                    <Category title="Tropical Shores">
                        <CardContainer>
                            <LocationCard
                                image={mirissa}
                                title="Mirissa"
                                description="Unwind at the beautiful beach known for its stunning sunsets and whale watching."
                                onExploreMore={() => handleExploreMore({ title: "Mirissa", details: "Mirissa is renowned for its picturesque beaches, whale watching tours, and vibrant nightlife." })}
                            />
                            <LocationCard
                                image={unawatuna}
                                title="Unawatuna"
                                description="Relax at one of Sri Lanka's most popular beaches with golden sands and vibrant nightlife."
                                onExploreMore={() => handleExploreMore({ title: "Unawatuna", details: "Unawatuna is famous for its beautiful beach, excellent diving spots, and lively atmosphere." })}
                            />
                            <LocationCard
                                image={hikkaduwa}
                                title="Hikkaduwa"
                                description="Explore the coral reefs and enjoy exciting water sports at this lively beach destination."
                                onExploreMore={() => handleExploreMore({ title: "Hikkaduwa", details: "Hikkaduwa is a vibrant beach town known for its coral reefs and water sports activities." })}
                            />
                            <LocationCard
                                image={pasikuda}
                                title="Pasikuda"
                                description="Famous for its shallow waters and beautiful beaches, perfect for a relaxing getaway."
                                onExploreMore={() => handleExploreMore({ title: "Pasikuda", details: "Pasikuda is known for its calm waters and pristine beaches, ideal for relaxation and family outings." })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Aqua Adventures">
                        <CardContainer>
                            <LocationCard
                                image={kalpitiya}
                                title="Kalpitiya"
                                description="Dive into thrilling water sports—surfing, snorkeling, and whale watching."
                                onExploreMore={() => handleExploreMore({ title: "Kalpitiya", details: "Kalpitiya is a hotspot for water sports, including kitesurfing and dolphin watching." })}
                            />
                            <LocationCard
                                image={whaleWatching}
                                title="Trincomalee"
                                description="Spot majestic blue whales and playful dolphins as they swim in the tranquil waters of Trincomalee, a top whale-watching spot."
                                onExploreMore={() => handleExploreMore({ title: "Trincomalee", details: "Trincomalee offers incredible opportunities for whale watching and is known for its stunning beaches." })}
                            />
                            <LocationCard
                                image={snorkeling}
                                title="Hikkaduwa"
                                description="Explore vibrant coral reefs and swim among tropical fish in Hikkaduwa's crystal-clear waters, perfect for snorkeling enthusiasts."
                                onExploreMore={() => handleExploreMore({ title: "Hikkaduwa", details: "Hikkaduwa is a snorkeling paradise with rich marine life and beautiful coral reefs." })}
                            />
                            <LocationCard
                                image={jetSkiing}
                                title="Bentota"
                                description="Experience the thrill of jet skiing on the Bentota River and ocean, a hub for exciting water sports and scenic coastal views."
                                onExploreMore={() => handleExploreMore({ title: "Bentota", details: "Bentota is famous for its water sports, including jet skiing and banana boat rides." })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Island Escapades">
                        <CardContainer>
                            <LocationCard
                                image={pigeonIsland}
                                title="Pigeon Island"
                                description="Discover the secluded beauty and vibrant marine life at Pigeon Island, famous for snorkeling and coral reefs."
                                onExploreMore={() => handleExploreMore({ title: "Pigeon Island", details: "Pigeon Island is a great destination for snorkeling and experiencing marine biodiversity." })}
                            />
                            <LocationCard
                                image={delftIsland}
                                title="Delft Island"
                                description="Explore the untouched beauty and historical significance of Delft Island, known for its wild ponies and colonial heritage."
                                onExploreMore={() => handleExploreMore({ title: "Delft Island", details: "Delft Island is known for its scenic beauty and historical sites, including old churches." })}
                            />
                            <LocationCard
                                image={katchatheevu}
                                title="Katchatheevu"
                                description="An island of historical importance, featuring stunning coastal scenery and vibrant religious festivals."
                                onExploreMore={() => handleExploreMore({ title: "Katchatheevu", details: "Katchatheevu is a beautiful island with a rich cultural heritage and stunning views." })}
                            />
                            <LocationCard
                                image={madolDoova}
                                title="Madol Doova"
                                description="A literary gem and serene island, Madol Doova offers a tranquil escape amidst lush greenery and quiet waters."
                                onExploreMore={() => handleExploreMore({ title: "Madol Doova", details: "Madol Doova is famous for its scenic beauty and is featured in many literary works." })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Heritage Harbors">
                        <CardContainer>
                            <LocationCard
                                image={negomboHabour}
                                title="Negombo"
                                description="Experience the coastal life and traditions at Negombo's vibrant beaches."
                                onExploreMore={() => handleExploreMore({ title: "Negombo", details: "Negombo is known for its fishing industry and beautiful beaches." })}
                            />
                            <LocationCard
                                image={beruwalaHarbour}
                                title="Beruwala"
                                description="Enjoy the peaceful beaches and rich cultural heritage of Beruwala."
                                onExploreMore={() => handleExploreMore({ title: "Beruwala", details: "Beruwala is famous for its beautiful beaches and cultural sites." })}
                            />
                            <LocationCard
                                image={galleFort}
                                title="Galle Fort"
                                description="Explore the historical Galle Fort, a UNESCO World Heritage site with stunning coastal views."
                                onExploreMore={() => handleExploreMore({ title: "Galle Fort", details: "Galle Fort is a UNESCO World Heritage site known for its colonial architecture and history." })}
                            />
                            <LocationCard
                                image={hikkaduwaHarbour}
                                title="Hikkaduwa Heritage"
                                description="Experience the local culture and heritage while enjoying the scenic beaches."
                                onExploreMore={() => handleExploreMore({ title: "Hikkaduwa Heritage", details: "Hikkaduwa Heritage offers insights into local culture alongside its beautiful beaches." })}
                            />
                        </CardContainer>
                    </Category>
                </Categories>

                {/* Displaying selected location details */}
                {selectedLocation && (
                    <DetailsContainer ref={detailsRef}>
                        <h2>{selectedLocation.title}</h2>
                        <p>{selectedLocation.details}</p>
                        <CloseButton onClick={handleCloseDetails}>Close</CloseButton>
                    </DetailsContainer>
                )}
            </Content>
        </Section>
    );
}

const LocationCard = ({image, title, description, onExploreMore}) => {
    return (
        <Card>
            <CardImage src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <ExploreMoreButton onClick={onExploreMore}>Explore More</ExploreMoreButton>
        </Card>
    );
};

const Category = ({title, children }) => (
    <CategoryContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <CardContainer>{children}</CardContainer>
    </CategoryContainer>
);

const Section = styled.section`
    padding: 4rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom, #e6f7ff, #223156);
    animation: fadeIn 1s ease-in-out; /* Add animation for the section */
`;

const Content = styled.div`
    max-width: 1300px;
    margin: 0 auto;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 800;
        font-size: 48px;
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 36px;
        color: #34495e;
        margin-bottom: 1rem;
        
    }

    p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 2rem;
        line-height: 1.7;

    }
`;

const Categories = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const CategoryContainer = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h4`
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
`;

const Card = styled.div`
    background: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s, box-shadow 0.3s;
    flex: 1;
    position: relative; /* Set relative positioning for absolute child elements */
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

const CardTitle = styled.h5`
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

const ExploreMoreButton = styled.button`
    background: #5b7d9f;
    color: white;
    padding: 0.5rem 1rem;
    width: 250px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    position: absolute;
    bottom: 1rem; /* Position button near the bottom */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    transition: background 0.3s ease, transform 0.3s, box-shadow 0.3s;

    &:hover {
        background: #34495e;
        transform: translate(-50%, -5%);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const DetailsContainer = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
    background: #e74c3c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 1rem;
    &:hover {
        background: #c0392b;
    }
`;