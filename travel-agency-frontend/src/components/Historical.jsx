import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Importing images from assets (replace these with actual image paths)
import anuradhapura from "../assets/anuradhapura.webp";
import polonnaruwa from "../assets/polonnaruwa.webp";
import sigiriya from "../assets/sigiriya.webp";
import templeOfTooth from "../assets/dhaladha.jpg";
import adamsPeak from "../assets/adhams.jpeg";
import dambulla from "../assets/dambulla.webp";
import galleFort from "../assets/galle_fort_1.webp";
import jaffnaDutchFort from "../assets/jaffna.webp";
import colomboHospital from "../assets/colombo.webp";
import kandyFestival from "../assets/kandy.avif";
import pongol from "../assets/pongol.jpeg";
import vesak from "../assets/vesak.jpeg";
import buddhaStatue from "../assets/giant.jpeg";
import kataragamaTemple from "../assets/kataragama.jpeg";
import nallurKovil from "../assets/nallur.webp";
import nuwaraEliya from "../assets/nuwaraeliya.webp";
import kandy from "../assets/nuwara.jpeg";
import oldParliament from "../assets/old.jpeg"
export default function Historical() {
    return (
        <Section id="historical">
            <Content>
                <h1>Explore Sri Lanka's Rich Heritage</h1>
                <h2>Timeless Trails & Sacred Paths</h2>
                <p>
                    Journey through the heart of Sri Lanka’s history, where ancient civilizations, sacred sites, and vibrant cultures await. From the majestic ruins of ancient kingdoms to the spiritual sanctuaries, discover the stories that shaped this beautiful island.
                </p>

                <Categories>
                    <Category title="Ancient Kingdoms">
                        <CardContainer large>
                            <LocationCard
                                image={anuradhapura}
                                title="Anuradhapura"
                                description="Embark on a journey through the historic ruins of this ancient capital, a UNESCO World Heritage site."
                                large
                            />
                            <LocationCard
                                image={polonnaruwa}
                                title="Polonnaruwa"
                                description="Explore the well-preserved ruins of Sri Lanka's medieval capital."
                            />
                            <LocationCard
                                image={sigiriya}
                                title="Sigiriya"
                                description="Climb the iconic rock fortress, a masterpiece of ancient engineering."
                                large
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Sacred Sanctuaries">
                        <CardContainer small>
                            <LocationCard
                                image={templeOfTooth}
                                title="Temple of the Tooth"
                                description="Visit the sacred Buddhist temple housing the relic of the tooth of Buddha."
                            />
                            <LocationCard
                                image={adamsPeak}
                                title="Adam's Peak"
                                description="A revered pilgrimage site, known for its stunning views and sacred footprint."
                                large
                            />
                            <LocationCard
                                image={dambulla}
                                title="Dambulla Cave Temple"
                                description="Marvel at the impressive rock temples filled with ancient Buddha statues and murals."
                            />
                            {/*<LocationCard*/}
                            {/*    image={buddhaStatue}*/}
                            {/*    title="Giant Buddha Statue"*/}
                            {/*    description="Visit the enormous Buddha statue in Bodh Gaya, a symbol of peace and reverence."*/}
                            {/*/>*/}
                            <LocationCard
                                image={kataragamaTemple}
                                title="Kataragama Temple"
                                description="A sacred site for Buddhists and Hindus, known for its vibrant festivals and rituals."
                            />
                            <LocationCard
                                image={nallurKovil}
                                title="Nallur Kandaswamy Kovil"
                                description="A prominent Hindu temple in Jaffna, known for its beautiful architecture and vibrant festivals."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Colonial Echoes">
                        <CardContainer>
                            <LocationCard
                                image={galleFort}
                                title="Galle Fort"
                                description="Discover the preserved grandeur of this UNESCO World Heritage site with its colonial architecture."
                            />
                            <LocationCard
                                image={jaffnaDutchFort}
                                title="Jaffna Dutch Fort"
                                description="Explore the historic fort offering insights into the colonial past of Jaffna."
                                large
                            />
                            <LocationCard
                                image={colomboHospital}
                                title="Colombo's Dutch Hospital"
                                description="Visit the historic hospital turned shopping and dining precinct."
                            />
                            {/*<LocationCard*/}
                            {/*    image={nuwaraEliya}*/}
                            {/*    title="Nuwara Eliya"*/}
                            {/*    description="Known as 'Little England', this town showcases colonial-era architecture and beautiful gardens."*/}
                            {/*/>*/}
                            <LocationCard
                                image={kandy}
                                title="Kandy"
                                description="Home to the Temple of the Tooth and colonial buildings that reflect the town's rich history."
                            />
                            <LocationCard
                                image={oldParliament} // make sure to import the corresponding image
                                title="Old Parliament Building"
                                description="An architectural marvel of colonial times, reflecting the political history of Sri Lanka."
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Cultural Celebrations">
                        <CardContainer large>
                            <LocationCard
                                image={kandyFestival}
                                title="Kandy Esala Perahera"
                                description="Immerse in the vibrant festivities of this grand cultural event held in Kandy."
                                large
                            />
                            <LocationCard
                                image={pongol}
                                title="Thai Pongal Festival"
                                description="A multi-day harvest festival celebrated by Tamil people in Sri Lanka."
                            />
                            <LocationCard
                                image={vesak}
                                title="Vesak Festival"
                                description="Celebrate the birth, enlightenment, and death of Buddha with colorful lanterns and festivities."
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
    background: linear-gradient(to bottom, #fff3e6, #f9f9f9);
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
    gap: 2rem; /* Reduced gap to 2rem */
`;

const CategoryContainer = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 1rem; /* Reduced padding to 1rem */
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
    grid-template-columns: ${({ large }) => (large ? 'repeat(auto-fill, minmax(300px, 1fr))' : 'repeat(auto-fill, minmax(200px, 1fr))')};
    gap: 1rem; /* Adjust the gap between cards */
    justify-items: center;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 12px;
    padding: 1rem; /* Reduced padding */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 200px; /* Adjusted min-height */
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
        margin-bottom: 0.5rem; /* Reduced margin */
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
        margin-bottom: 0.5rem; /* Reduced margin */
        font-size: 1rem;
        flex-grow: 1;
    }

    button {
        background-color: #2c3e50;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #34495e;
            transform: scale(1.05);
        }
    }
`;

function LocationCard({ image, title, description, large }) {
    return (
        <Card imageOnLeft={large}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
            <button>Explore More</button>
        </Card>
    );
}

LocationCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    large: PropTypes.bool,
};

Category.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
