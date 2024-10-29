import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Importing images from assets (replace these with actual image paths)
 import bentota from "../assets/bentota.jpeg";
 import negombo from "../assets/negombo.jpeg";
 import weligama from "../assets/weligama.jpeg";
 import kandy from "../assets/kandyayur.jpeg";
import yogak from "../assets/yogak.jpeg";
 import yogag from "../assets/yogag.jpeg";
 import yogae from "../assets/yogae.jpeg";
 import yogau from "../assets/yogau.jpeg"
 import nuwaras from "../assets/nuwaras.jpeg";
 import sigiriyas from "../assets/spas.jpeg";
import tangalle from "../assets/spat.jpeg";
import hikkaduwa from "../assets/hikkaduwas.jpeg";
import bentotas from "../assets/bentotas.jpeg"
 import colombo from "../assets/colombow.jpeg";
import negomboBeach from "../assets/negombos.jpeg";
import dambulla from "../assets/dambullas.jpeg";

export default function SereneSanctuaries() {
    return (
        <Section id="serene-sanctuaries">
            <Content>
                <h1>Serene Sanctuaries & Wellness Retreats</h1>
                <h2>Find Your Oasis of Tranquility</h2>
                <p>
                    Discover the perfect escape to rejuvenate your mind, body, and soul. Sri Lanka offers a plethora of wellness retreats, each designed to provide a holistic experience that nurtures peace and well-being.
                </p>

                <Categories>
                    <Category title="Ayurvedic Escapes">
                        <CardContainer>
                            <LocationCard
                                 image={bentota}
                                title="Ayurveda Resorts in Bentota"
                                description="Rejuvenate at premier Ayurveda resorts surrounded by nature."
                                cardSize="large"
                            />
                            <LocationCard
                                 image={negombo}
                                title="Ayurveda Resorts in Negombo"
                                description="Experience traditional healing in the coastal charm of Negombo."
                                cardSize="medium"
                            />
                            <LocationCard
                                 image={weligama}
                                title="Ayurveda Resorts in Weligama"
                                description="Enjoy tranquil treatments with stunning sea views."
                                cardSize="medium"
                            />
                            <LocationCard
                                 image={kandy}
                                title="Ayurveda Retreats in Kandy"
                                description="Explore the healing arts surrounded by the beauty of the hill country."
                                cardSize="small"
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Spiritual Sojourns">
                        <CardContainer>
                            <LocationCard
                                 image={yogak}
                                title="Yoga Retreats in Kandy"
                                description="Find peace and balance amidst the scenic beauty of Kandy."
                                cardSize="medium"
                            />
                            <LocationCard
                                 image={yogag}
                                title="Meditation Retreats in Galle"
                                description="Reconnect with your inner self in the historic town of Galle."
                                cardSize="large"
                            />
                            <LocationCard
                                 image={yogae}
                                title="Wellness Retreats in Ella"
                                description="Breathe in serenity in the lush hills of Ella."
                                cardSize="medium"
                            />
                            <LocationCard
                                image={yogau}
                                title="Holistic Retreats in Unawatuna"
                                description="Unwind with yoga and meditation by the beach."
                                cardSize="small"
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Spa Havens">
                        <CardContainer>
                            <LocationCard
                                 image={nuwaras}
                                title="Luxurious Spas in Nuwara Eliya"
                                description="Indulge in luxurious spa treatments amid beautiful landscapes."
                                cardSize="large"
                            />
                            <LocationCard
                                 image={sigiriyas}
                                title="Spa Resorts in Sigiriya"
                                description="Experience relaxation with views of the ancient rock fortress."
                                cardSize="medium"
                            />
                            <LocationCard
                                 image={tangalle}
                                title="Spa Retreats in Tangalle"
                                description="Relax in coastal resorts offering rejuvenating spa therapies."
                                cardSize="small"
                            />
                            <LocationCard
                                 image={hikkaduwa}
                                title="Spa Retreats in Hikkaduwa"
                                description="Pamper yourself at beachfront spas known for their wellness treatments."
                                cardSize="medium"
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Holistic Healing">
                        <CardContainer>
                            <LocationCard
                                 image={bentotas}
                                title="Bentota Traditional Ayurvedic Therapies"
                                description="Experience authentic Ayurvedic treatments across the island."
                                cardSize="medium"
                            />
                            <LocationCard
                                image={colombo}
                                title="Wellness Centers in Colombo"
                                description="Explore wellness options in the heart of the city."
                                cardSize="medium"
                            />
                            <LocationCard
                                 image={negomboBeach}
                                title="Beachfront Wellness Retreats in Negombo"
                                description="Revitalize your spirit at beachfront wellness centers."
                                cardSize="small"
                            />
                            <LocationCard
                                 image={dambulla}
                                title="Wellness Retreats in Dambulla"
                                description="Find tranquility and holistic healing in the historical city of Dambulla."
                                cardSize="medium"
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
    background: linear-gradient(to bottom, #eae3ee, #067265);
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
    min-height: ${(props) => (props.cardSize === "large" ? "350px" : props.cardSize === "medium" ? "250px" : "200px")};
    max-width: 300px;
    text-align: center;
    position: relative;

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
        font-size: 1.5rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
        margin-bottom: 2rem;
    }

    button {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        border: none;
        width: 250px;
        border-radius: 8px;
        font-size: 16px;
        background-color: #1b9d93;
        color: white;
        
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
        background-color: #0b380b;

    }
`;


const LocationCard = ({ image, title, description, cardSize }) => (
    <Card cardSize={cardSize}>
        {image && <img src={image} alt={title} />}
        <h4>{title}</h4>
        <p>{description}</p>
        <button>Explore More</button>
    </Card>
);

LocationCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cardSize: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
};

Category.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
