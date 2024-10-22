import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Importing images from assets (replace these with actual image paths)
import yala from "../assets/yala.webp";
 import udawalawe from "../assets/udawalawa.avif";
 import wilpattu from "../assets/wilpattu.webp";
 import minneriya from "../assets/minneriya.webp";
 import kumana from "../assets/kumana.avif";
import sinharaja from "../assets/sinharaja.jpeg";
import peakwilderness from "../assets/peak.jpeg";
import Horton from "../assets/hortan.jpeg"
 import kitulgala from "../assets/kitulgala.jpeg";
 import ellaZiplining from "../assets/ellazipling.jpeg";
 import hiking from "../assets/hiking.jpeg";
import nuwaraeliya from "../assets/nuwaraeliya.webp"
 import trincomalee from "../assets/trinco.jpeg";
 import hikkaduwa from "../assets/coral.jpeg";
 import pigeonisland from "../assets/pigoen_island.jpeg";
 import unawatuna from "../assets/unawatuna.webp";

export default function Wilderness() {
    return (
        <Section id="wilderness">
            <Content>
                <h1>Thrill Quests & Wilderness Safaris</h1>
                <h2>Explore the Wild Heartlands</h2>
                <p>
                    Dive into nature’s untamed beauty and experience the wild side of Sri Lanka. From majestic elephants to adrenaline-pumping adventures, discover the diverse and thrilling experiences Sri Lanka has to offer.
                </p>

                <Categories>
                    <Category title="Wild Heartlands">
                        <CardContainer large>
                            <LocationCard
                                 image={yala}
                                title="Yala National Park"
                                description="Embark on an unforgettable safari in Yala, home to leopards, elephants, and a vast array of wildlife."
                                large
                            />
                            <LocationCard
                                 image={udawalawe}
                                title="Udawalawe National Park"
                                description="Experience the beauty of Sri Lanka's elephant population in their natural habitat."
                            />
                            <LocationCard
                                 image={wilpattu}
                                title="Wilpattu National Park"
                                description="Explore the oldest and largest national park in Sri Lanka, known for its lakes and wildlife."
                            />
                            <LocationCard
                                 image={minneriya}
                                title="Minneriya National Park"
                                description="Witness the famous elephant gathering at Minneriya, a truly unique spectacle."
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Nature's Serenades">
                        <CardContainer>
                            <LocationCard
                                 image={kumana}
                                title="Kumana Bird Sanctuary"
                                description="Discover Sri Lanka's birdwatching haven, home to diverse species of migratory birds."
                            />
                            <LocationCard
                                image={sinharaja}
                                title="Sinharaja Forest Reserve"
                                description="A UNESCO World Heritage Site, perfect for trekking and witnessing rich biodiversity."
                            />
                            <LocationCard
                                image={peakwilderness}
                                title="Peak Wilderness Sanctuary"
                                description="A breathtaking sanctuary home to rare flora and fauna, ideal for hiking enthusiasts."
                            />
                            <LocationCard
                                image={Horton}
                                title="Horton Plains National Park"
                                description="Explore the stunning landscapes and witness the famous World's End cliff."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Adventurer's Playground">
                        <CardContainer>
                            <LocationCard
                                 image={kitulgala}
                                title="Kitulgala"
                                description="Engage in thrilling white-water rafting in the scenic waters of Kitulgala."
                                large
                            />
                            <LocationCard
                                 image={ellaZiplining}
                                title="Ella Ziplining"
                                description="Soar over the scenic landscapes of Ella on one of the longest ziplines in Sri Lanka."
                            />
                            <LocationCard
                                image={hiking}
                                title="Hiking in Knuckles Range"
                                description="Explore the breathtaking views and diverse flora and fauna of the Knuckles Mountain Range."
                            />
                            <LocationCard
                                image={nuwaraeliya}
                                title="Nuwara Eliya"
                                description="Known as 'Little England,' enjoy breathtaking hikes and picturesque tea plantations."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Underwater Frontiers">
                        <CardContainer>
                            <LocationCard
                                image={trincomalee}
                                title="Trincomalee"
                                description="Explore the underwater wonders of Trincomalee with unforgettable snorkeling and diving experiences."
                                large
                            />
                            <LocationCard
                                 image={hikkaduwa}
                                title="Hikkaduwa"
                                description="Dive into the vibrant coral reefs of Hikkaduwa, teeming with marine life."
                            />
                            <LocationCard
                                image={pigeonisland}
                                title="Pigeon Island"
                                description="A paradise for divers and snorkelers, known for its stunning coral reefs."
                            />
                            <LocationCard
                                image={unawatuna}
                                title="Unawatuna"
                                description="Famous for its golden beaches and vibrant marine life, perfect for swimming and snorkeling."
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
    background: linear-gradient(to bottom, #eae3ee, #d74ad7);
    animation: fadeIn 1s ease-in-out;

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
    gap: 2rem;
`;

const CategoryContainer = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
    color: #2c3e50;
    font-size: 32px;
    margin-bottom: 1rem;
    font-weight: 700;
    text-transform: uppercase;
`;

const Category = ({ title, children }) => (
    <CategoryContainer>
        <CategoryTitle>{title}</CategoryTitle>
        {children}
    </CategoryContainer>
);

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    justify-items: center;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 250px;
    max-width: 300px;
    text-align: center;

    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    img {
        border-radius: 10px;
        width: 100%;
        height: 150px;
        object-fit: cover;
        margin-bottom: 0.5rem;
        transition: transform 0.3s ease;
    }

    img:hover {
        transform: scale(1.05);
    }

    h4 {
        margin: 0.5rem 0;
        color: #2c3e50;
        font-size: 24px;
        font-weight: 600;
    }

    p {
        color: #555;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        flex-grow: 1;
    }

    button {
        background-color: #64167a;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #22042a;
            transform: scale(1.05);
        }
    }
`;

function LocationCard({ image, title, description, large }) {
    return (
        <Card imageOnLeft={large}>
            {image && <img src={image} alt={title} />}
            <h4>{title}</h4>
            <p>{description}</p>
            <button>View Details</button>
        </Card>
    );
}

LocationCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    large: PropTypes.bool,
};
