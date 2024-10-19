import React from "react";
import styled from "styled-components";

// Sample images for each location (replace with actual image URLs)
const images = {
    mirissa: "https://example.com/mirissa.jpg",
    unawatuna: "https://example.com/unawatuna.jpg",
    hikkaduwa: "https://example.com/hikkaduwa.jpg",
    kalpitiya: "https://example.com/kalpitiya.jpg",
    whaleWatching: "https://example.com/whale-watching.jpg",
    snorkeling: "https://example.com/snorkeling.jpg",
    surfing: "https://example.com/surfing.jpg",
    diving: "https://example.com/diving.jpg",
    jetSkiing: "https://example.com/jet-skiing.jpg",
    pigeonIsland: "https://example.com/pigeon-island.jpg",
    jaffnaPeninsula: "https://example.com/jaffna-peninsula.jpg",
    delftIsland: "https://example.com/delft-island.jpg",
    negombo: "https://example.com/negombo.jpg",
    beruwala: "https://example.com/beruwala.jpg",
    galleFort: "https://example.com/galle-fort.jpg",
    pasikuda: "https://example.com/pasikuda.jpg",
};

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
                        <LocationCard
                            image={images.mirissa}
                            title="Mirissa"
                            description="Unwind at the beautiful beach known for its stunning sunsets and whale watching."
                        />
                        <LocationCard
                            image={images.unawatuna}
                            title="Unawatuna"
                            description="Relax at one of Sri Lanka's most popular beaches with golden sands and vibrant nightlife."
                        />
                        <LocationCard
                            image={images.hikkaduwa}
                            title="Hikkaduwa"
                            description="Explore the coral reefs and enjoy exciting water sports at this lively beach destination."
                        />
                        <LocationCard
                            image={images.pasikuda}
                            title="Pasikuda"
                            description="Famous for its shallow waters and beautiful beaches, perfect for a relaxing getaway."
                        />
                    </Category>

                    <Category title="Aqua Adventures">
                        <LocationCard
                            image={images.kalpitiya}
                            title="Kalpitiya"
                            description="Dive into thrilling water sports—surfing, snorkeling, and whale watching."
                        />
                        <LocationCard
                            image={images.whaleWatching}
                            title="Whale Watching"
                            description="Experience the wonder of spotting blue whales and dolphins in their natural habitat."
                        />
                        <LocationCard
                            image={images.snorkeling}
                            title="Snorkeling"
                            description="Discover vibrant marine life in crystal-clear waters with exciting snorkeling trips."
                        />
                        <LocationCard
                            image={images.jetSkiing}
                            title="Jet Skiing"
                            description="Feel the adrenaline rush as you ride the waves on a jet ski in Kalpitiya."
                        />
                    </Category>

                    <Category title="Island Escapades">
                        <LocationCard
                            image={images.pigeonIsland}
                            title="Pigeon Island"
                            description="Discover the secluded beauty and vibrant marine life at Pigeon Island."
                        />
                        <LocationCard
                            image={images.jaffnaPeninsula}
                            title="Jaffna Peninsula"
                            description="Experience the unique culture and scenic beauty of Jaffna's coastline."
                        />
                        <LocationCard
                            image={images.delftIsland}
                            title="Delft Island"
                            description="Explore the untouched beauty and historical significance of Delft Island."
                        />
                        <LocationCard
                            image={images.kalpitiya} // Assuming Kalpitiya is also an island location.
                            title="Kalpitiya Island"
                            description="Enjoy the serene beauty and rich marine biodiversity of Kalpitiya Island."
                        />
                    </Category>

                    <Category title="Heritage Harbors">
                        <LocationCard
                            image={images.negombo}
                            title="Negombo"
                            description="Experience the coastal life and traditions at Negombo's vibrant beaches."
                        />
                        <LocationCard
                            image={images.beruwala}
                            title="Beruwala"
                            description="Enjoy the peaceful beaches and rich cultural heritage of Beruwala."
                        />
                        <LocationCard
                            image={images.galleFort}
                            title="Galle Fort"
                            description="Explore the historical Galle Fort, a UNESCO World Heritage site with stunning coastal views."
                        />
                        <LocationCard
                            image={images.hikkaduwa}
                            title="Hikkaduwa Heritage"
                            description="Experience the local culture and heritage while enjoying the scenic beaches."
                        />
                    </Category>
                </Categories>
            </Content>
        </Section>
    );
}

const Section = styled.section`
    padding: 4rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom right, #e0f7fa, #b2ebf2);
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        font-family: "Oswald", sans-serif;
        font-weight: 700;
        font-size: 48px;
        color: #00796b;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-family: "Oswald", sans-serif;
        font-weight: 600;
        font-size: 36px;
        color: #004d40;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.1rem;
        color: #444;
        margin-bottom: 2rem;
        line-height: 1.6;
    }
`;

const Categories = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const CategoryContainer = styled.div`
    background: #ffffff;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
    color: #00796b;
    font-size: 28px;
    margin-bottom: 1rem;
`;

const Category = ({ title, children }) => {
    return (
        <CategoryContainer>
            <CategoryTitle>{title}</CategoryTitle>
            <CardContainer>{children}</CardContainer>
        </CategoryContainer>
    );
};

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
`;

const LocationCard = ({ image, title, description }) => {
    return (
        <Card>
            <CardImage src={image} alt={`${title} Image`} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <ViewMoreButton>View More</ViewMoreButton>
        </Card>
    );
};

const Card = styled.div`
    background: #f9f9f9;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: transform 0.3s;

    ${Card}:hover & {
        transform: scale(1.05);
    }
`;

const CardTitle = styled.h4`
    color: #00796b;
    margin: 1rem 0 0.5rem;
`;

const CardDescription = styled.p`
    color: #555;
    margin: 0.5rem 0 1rem;
`;

const ViewMoreButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #00796b;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #004d40;
        transform: scale(1.05);
    }
`;
