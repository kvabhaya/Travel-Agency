import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Import images (replace paths with actual image paths)
import yala from "../assets/yala.webp";
import udawalawe from "../assets/udawalawa.avif";
import wilpattu from "../assets/wilpattu.webp";
import minneriya from "../assets/minneriya.webp";
import kumana from "../assets/kumana.avif";
import sinharaja from "../assets/sinharaja.jpeg";
import peakwilderness from "../assets/peak.jpeg";
import Horton from "../assets/hortan.jpeg";
import kitulgala from "../assets/kitulgala.jpeg";
import ellaZiplining from "../assets/ellazipling.jpeg";
import hiking from "../assets/hiking.jpeg";
import nuwaraeliya from "../assets/nuwaraeliya.webp";
import trincomalee from "../assets/trinco.jpeg";
import hikkaduwa from "../assets/coral.jpeg";
import pigeonisland from "../assets/pigoen_island.jpeg";
import unawatuna from "../assets/unawatuna.webp";

export default function Wilderness() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const detailsRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Handle "Explore More" button click
    const handleExploreMore = (location) => {
        setSelectedLocation(location);
        setScrollPosition(window.scrollY);
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleCloseDetails = () => {
        setSelectedLocation(null);
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    };

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
                                onExploreMore={() => handleExploreMore({
                                    title: "Yala National Park",
                                    details: "Embark on an unforgettable safari in Yala National Park, renowned for its rich biodiversity and stunning landscapes. Covering over 979 square kilometers, the park is a haven for wildlife enthusiasts, offering a chance to see leopards, elephants, sloth bears, and numerous bird species in their natural habitats. The park's varied ecosystems, including dry scrub, forests, and wetlands, support a wide range of flora and fauna. Join a guided safari to explore the park’s trails, where you may encounter unique wildlife like the elusive leopard, as well as playful elephant herds and vibrant birdlife such as the endangered black-necked stork. Don’t miss the opportunity to experience Yala's breathtaking sunsets while on your safari adventure."
                                })}
                            />
                            <LocationCard
                                image={udawalawe}
                                title="Udawalawe National Park"
                                description="Experience the beauty of Sri Lanka's elephant population in their natural habitat."
                                onExploreMore={() => handleExploreMore({
                                    title: "Udawalawe National Park",
                                    details: "Experience the beauty of Sri Lanka's elephant population in Udawalawe National Park, a 30,821-hectare sanctuary that is home to over 500 wild elephants. The park features vast open grasslands, scrub forests, and the stunning Udawalawe Reservoir, creating an ideal environment for observing elephants as they graze, bathe, and socialize. Aside from elephants, you might spot water buffalo, sambar deer, and a variety of birds, including the majestic peacock and the rare grey-headed fish eagle. Opt for a morning or evening safari to witness the park come alive with activity, and enjoy the picturesque landscapes that make Udawalawe a top destination for wildlife photography and family-friendly excursions."
                                })}
                            />
                            <LocationCard
                                image={wilpattu}
                                title="Wilpattu National Park"
                                description="Explore the oldest and largest national park in Sri Lanka, known for its lakes and wildlife."
                                onExploreMore={() => handleExploreMore({
                                    title: "Wilpattu National Park",
                                    details: "Explore Wilpattu National Park, the oldest and largest national park in Sri Lanka, covering approximately 1,317 square kilometers of diverse ecosystems. Known for its unique 'villus' (natural lakes), Wilpattu is a biodiversity hotspot, home to leopards, elephants, and a wide range of bird species. With fewer visitors compared to other parks, it offers a tranquil and immersive wildlife experience. Venture on a safari to uncover hidden trails leading to picturesque lakes and dense forests, where you may encounter shy sloth bears and various deer species. Wilpattu's serene environment and spectacular wildlife opportunities make it a must-visit for nature lovers and adventure seekers alike."
                                })}
                            />
                            <LocationCard
                                image={minneriya}
                                title="Minneriya National Park"
                                description="Witness the famous elephant gathering at Minneriya, a truly unique spectacle."
                                onExploreMore={() => handleExploreMore({
                                    title: "Minneriya National Park",
                                    details: "Witness the famous elephant gathering at Minneriya National Park, a remarkable event that takes place during the dry season when hundreds of elephants congregate at the Minneriya Tank. This unique spectacle provides a breathtaking view of elephants in their natural habitat, engaging in playful interactions and socializing with one another. The park also boasts diverse wildlife, including deer, leopards, and various bird species, such as the purple heron and the painted stork. Explore the park’s extensive network of trails, offering scenic views of the lush surroundings and opportunities for birdwatching. Minneriya is not just a wildlife haven; it’s a place where visitors can connect with nature and witness the extraordinary behavior of Sri Lanka's elephant population."
                                })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Nature's Serenades">
                        <CardContainer>
                            <LocationCard
                                image={kumana}
                                title="Kumana Bird Sanctuary"
                                description="Discover Sri Lanka's birdwatching haven, home to diverse species of migratory birds."
                                onExploreMore={() => handleExploreMore({
                                    title: "Kumana Bird Sanctuary",
                                    details: "Discover Sri Lanka's birdwatching haven, Kumana Bird Sanctuary, known for its rich biodiversity and as a vital nesting ground for numerous migratory bird species. Covering approximately 18,149 hectares, the sanctuary features lagoons, marshes, and dry zones, attracting over 200 species of birds, including the rare black-necked stork and several species of herons. Visit during the migratory season (May to September) for the best birdwatching experience, and enjoy guided tours that will enhance your understanding of the avian inhabitants and their habitats. The sanctuary is also home to various mammals and reptiles, making it a unique ecosystem worth exploring."
                                })}
                            />
                            <LocationCard
                                image={sinharaja}
                                title="Sinharaja Forest Reserve"
                                description="A UNESCO World Heritage Site, perfect for trekking and witnessing rich biodiversity."
                                onExploreMore={() => handleExploreMore({
                                    title: "Sinharaja Forest Reserve",
                                    details: "Explore Sinharaja Forest Reserve, a UNESCO World Heritage Site and one of the last remaining rainforests in Sri Lanka. Spanning approximately 11,000 hectares, this biodiverse haven is home to countless endemic species of flora and fauna, including the elusive Sri Lankan leopard and a variety of unique birds, such as the Sri Lanka blue magpie and the white-faced starling. Trekking through the reserve offers an immersive experience, with trails that guide you through lush vegetation, cascading streams, and vibrant wildlife. Engage with knowledgeable local guides who can enhance your adventure by sharing insights into the forest's ecology and conservation efforts."
                                })}
                            />
                            <LocationCard
                                image={peakwilderness}
                                title="Peak Wilderness Sanctuary"
                                description="A breathtaking sanctuary home to rare flora and fauna, ideal for hiking enthusiasts."
                                onExploreMore={() => handleExploreMore({
                                    title: "Peak Wilderness Sanctuary",
                                    details: "Venture into the breathtaking Peak Wilderness Sanctuary, a vast protected area that encompasses a significant portion of the Central Highlands of Sri Lanka. Renowned for its dramatic landscapes, this sanctuary is home to an array of rare flora and fauna, including endemic species like the Sri Lankan tree frog and the purple-faced langur. The sanctuary offers several hiking trails that vary in difficulty, catering to both novice and experienced hikers. Along the way, you’ll encounter stunning waterfalls, panoramic views, and a rich diversity of wildlife. The cool climate and pristine environment make Peak Wilderness a perfect getaway for nature lovers and adventure seekers alike."
                                })}
                            />
                            <LocationCard
                                image={Horton}
                                title="Horton Plains National Park"
                                description="Explore the stunning landscapes and witness the famous World's End cliff."
                                onExploreMore={() => handleExploreMore({
                                    title: "Horton Plains National Park",
                                    details: "Explore Horton Plains National Park, a UNESCO World Heritage Site that offers some of the most breathtaking landscapes in Sri Lanka. Covering over 3,160 hectares, this national park is known for its unique cloud forest ecosystem and diverse wildlife, including the sambar deer and the elusive leopard. The highlight of your visit will be a trek to World's End, where the plateau dramatically drops off to reveal a stunning view of the valley below. The park features several well-marked trails, allowing visitors to enjoy its natural beauty, including the serene Baker's Falls and the vibrant flora along the way. Ideal for nature lovers, photographers, and hikers, Horton Plains is a must-visit destination in Sri Lanka."
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Adventurer's Playground">
                        <CardContainer>
                            <LocationCard
                                image={kitulgala}
                                title="Kitulgala"
                                description="Engage in thrilling white-water rafting in the scenic waters of Kitulgala."
                                onExploreMore={() => handleExploreMore({
                                    title: "Kitulgala",
                                    details: "Engage in thrilling white-water rafting in the scenic waters of Kitulgala, a popular adventure destination located along the Kelani River. Known for its stunning natural beauty, Kitulgala offers rafting experiences that cater to various skill levels, from beginners to experts. In addition to rafting, you can explore the lush rainforest, go birdwatching for endemic species, or visit the nearby Belilena Cave, an archaeological site that dates back thousands of years. The vibrant local culture and welcoming atmosphere make Kitulgala a perfect spot for both adventure seekers and nature lovers."
                                })}
                            />
                            <LocationCard
                                image={ellaZiplining}
                                title="Ella Ziplining"
                                description="Soar over the scenic landscapes of Ella on one of the longest ziplines in Sri Lanka."
                                onExploreMore={() => handleExploreMore({
                                    title: "Ella Ziplining",
                                    details: "Experience the thrill of Ella Ziplining, where you can soar over lush green hills and tea plantations, enjoying breathtaking panoramic views of the surrounding landscapes. The zipline spans approximately 240 meters, making it one of the longest in Sri Lanka, and provides an adrenaline-pumping adventure for visitors. Alongside ziplining, Ella offers numerous hiking trails, including the trek to Little Adam's Peak and the famous Nine Arches Bridge, adding to the adventure-filled experience in this picturesque town. Ella is perfect for those seeking a mix of excitement and natural beauty."
                                })}
                            />
                            <LocationCard
                                image={hiking}
                                title="Hiking in Knuckles Range"
                                description="Explore the breathtaking views and diverse flora and fauna of the Knuckles Mountain Range."
                                onExploreMore={() => handleExploreMore({
                                    title: "Hiking in Knuckles Range",
                                    details: "Explore the breathtaking views and diverse flora and fauna of the Knuckles Mountain Range, a UNESCO World Heritage Site known for its unique ecosystems and stunning landscapes. This mountain range features numerous hiking trails that vary in difficulty, allowing hikers to immerse themselves in the rich biodiversity, including endemic species of plants, birds, and butterflies. The trails lead to breathtaking viewpoints, cascading waterfalls, and traditional villages, offering a glimpse into the local culture. Whether you're a seasoned hiker or a casual nature lover, the Knuckles Range provides an unforgettable outdoor experience."
                                })}
                            />
                            <LocationCard
                                image={nuwaraeliya}
                                title="Nuwara Eliya"
                                description="Known as 'Little England,' enjoy breathtaking hikes and picturesque tea plantations."
                                onExploreMore={() => handleExploreMore({
                                    title: "Nuwara Eliya",
                                    details: "Discover Nuwara Eliya, often referred to as 'Little England' due to its colonial architecture and cool climate, reminiscent of the English countryside. Nestled in the heart of Sri Lanka's tea country, Nuwara Eliya is renowned for its stunning tea plantations, lush gardens, and beautiful landscapes. Visitors can enjoy a variety of activities, including hikes to the scenic Horton Plains, visits to the iconic Gregory Lake, and exploration of the local markets. Don't miss the opportunity to taste the world-famous Ceylon tea and explore the picturesque town that offers a unique blend of nature and history."
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Underwater Frontiers">
                        <CardContainer>
                            <LocationCard
                                image={trincomalee}
                                title="Trincomalee"
                                description="Explore the underwater wonders of Trincomalee with unforgettable snorkeling and diving experiences."
                                onExploreMore={() => handleExploreMore({
                                    title: "Trincomalee",
                                    details: "Explore the underwater wonders of Trincomalee, one of Sri Lanka's premier coastal destinations, renowned for its stunning beaches and crystal-clear waters. The area offers exceptional snorkeling and diving experiences at locations like the famous Pigeon Island, where vibrant coral reefs and diverse marine life await. Discover the historical sites of Fort Frederick and the Koneswaram Temple, or relax on the picturesque Nilaveli Beach. Whether you're an adventure seeker or looking to unwind, Trincomalee has something for everyone."
                                })}
                            />
                            <LocationCard
                                image={hikkaduwa}
                                title="Hikkaduwa"
                                description="Dive into the vibrant coral reefs of Hikkaduwa, teeming with marine life."
                                onExploreMore={() => handleExploreMore({
                                    title: "Hikkaduwa",
                                    details: "Dive into the vibrant coral reefs of Hikkaduwa, a UNESCO-listed marine sanctuary located along Sri Lanka's southwestern coast. Known for its breathtaking underwater ecosystems, Hikkaduwa is perfect for snorkeling, scuba diving, and glass-bottom boat rides. Experience encounters with colorful fish, turtles, and even reef sharks. Beyond the water, explore the lively beachside markets, enjoy fresh seafood at local restaurants, or visit the nearby Hikkaduwa Coral Sanctuary. Hikkaduwa promises a perfect blend of adventure and relaxation."
                                })}
                            />
                            <LocationCard
                                image={pigeonisland}
                                title="Pigeon Island"
                                description="A paradise for divers and snorkelers, known for its stunning coral reefs."
                                onExploreMore={() => handleExploreMore({
                                    title: "Pigeon Island",
                                    details: "Discover the natural beauty of Pigeon Island, a national park known for its pristine beaches and rich marine biodiversity. Located just a short boat ride from Trincomalee, this idyllic spot is a haven for snorkelers and divers, featuring some of the best coral reefs in Sri Lanka. Witness an array of colorful fish, and if you're lucky, catch a glimpse of sea turtles. Pigeon Island is also a great place for relaxing on the beach or enjoying a picnic amidst nature's tranquility."
                                })}
                            />
                            <LocationCard
                                image={unawatuna}
                                title="Unawatuna"
                                description="Famous for its golden beaches and vibrant marine life, perfect for swimming and snorkeling."
                                onExploreMore={() => handleExploreMore({
                                    title: "Unawatuna",
                                    details: "Experience the beauty of Unawatuna, renowned for its golden sandy beaches and crystal-clear waters. This beach destination is ideal for swimming, snorkeling, and sunbathing, with an array of beachside cafes and bars to unwind. Snorkel at the nearby coral reefs to see an abundance of marine life, or take a short boat trip to explore Galle Fort, a UNESCO World Heritage Site. Unawatuna's vibrant atmosphere, combined with its natural beauty, makes it a favorite among locals and tourists alike."
                                })}
                            />

                        </CardContainer>
                    </Category>
                </Categories>

                {/* Display selected location details */}
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
font-size: 16px;
        &:hover {
            background-color: #22042a;
            transform: scale(1.05);
        }
    }
`;


const LocationCard = ({ image, title, description, onExploreMore }) => (
    <Card>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
        <ExploreButton onClick={onExploreMore}>Explore More</ExploreButton>
    </Card>
);

LocationCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onExploreMore: PropTypes.func.isRequired,
};


const ExploreButton = styled.button`
    button {
        background-color: #64167a;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;
        font-size: 1rem;
        font-weight: bold;
    }

    button:hover {
        background-color: #7f1c9a;
        transform: translateY(-2px);
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
    margin-top: 1.5rem;
    background-color: #bd3f3f;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #e45c5c;
        transform: translateY(-2px);
    }
`;