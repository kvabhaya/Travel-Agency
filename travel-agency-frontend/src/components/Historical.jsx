import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import styled from "styled-components";

// Importing images from assets (replace these with actual image paths)
// import anuradhapura from "../assets/anuradhapura.avif";
// import polonnaruwa from "../assets/polonnaruwa.avif";
// import sigiriya from "../assets/sigiriya.avif";
// import templeOfTooth from "../assets/temple_of_tooth.avif";
// import adamsPeak from "../assets/adams_peak.avif";
// import dambulla from "../assets/dambulla.avif";
// import galleFort from "../assets/galle_fort.avif";
// import jaffnaDutchFort from "../assets/jaffna_dutch_fort.avif";
// import colomboHospital from "../assets/colombo_dutch_hospital.avif";
// import kandyFestival from "../assets/kandy_festival.avif";
// import duruthuFestival from "../assets/duruthu_perahera.avif";

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
                        <CardContainer>
                            <LocationCard
                                // image={anuradhapura}
                                title="Anuradhapura"
                                description="Embark on a journey through the historic ruins of this ancient capital, a UNESCO World Heritage site."
                            />
                            <LocationCard
                                // image={polonnaruwa}
                                title="Polonnaruwa"
                                description="Explore the well-preserved ruins of Sri Lanka's medieval capital."
                            />
                            <LocationCard
                                // image={sigiriya}
                                title="Sigiriya"
                                description="Climb the iconic rock fortress, a masterpiece of ancient engineering."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Sacred Sanctuaries">
                        <CardContainer>
                            <LocationCard
                                // image={templeOfTooth}
                                title="Temple of the Tooth"
                                description="Visit the sacred Buddhist temple housing the relic of the tooth of Buddha."
                            />
                            <LocationCard
                                // image={adamsPeak}
                                title="Adam's Peak"
                                description="A revered pilgrimage site, known for its stunning views and sacred footprint."
                            />
                            <LocationCard
                                // image={dambulla}
                                title="Dambulla Cave Temple"
                                description="Marvel at the impressive rock temples filled with ancient Buddha statues and murals."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Colonial Echoes">
                        <CardContainer>
                            <LocationCard
                                // image={galleFort}
                                title="Galle Fort"
                                description="Discover the preserved grandeur of this UNESCO World Heritage site with its colonial architecture."
                            />
                            <LocationCard
                                // image={jaffnaDutchFort}
                                title="Jaffna Dutch Fort"
                                description="Explore the historic fort offering insights into the colonial past of Jaffna."
                            />
                            <LocationCard
                                // image={colomboHospital}
                                title="Colombo's Dutch Hospital"
                                description="Visit the historic hospital turned shopping and dining precinct."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Cultural Celebrations">
                        <CardContainer>
                            <LocationCard
                                // image={kandyFestival}
                                title="Kandy Esala Perahera"
                                description="Immerse in the vibrant festivities of this grand cultural event held in Kandy."
                            />
                            <LocationCard
                                // image={duruthuFestival}
                                title="Duruthu Perahera"
                                description="Experience the colorful procession celebrating the arrival of Buddha in Sri Lanka."
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
    gap: 4rem;
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
    flex-wrap: wrap;
`;

const Card = styled.div`
    background: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s, box-shadow 0.3s;
    flex: 1 1 calc(33% - 1rem); /* Responsive sizing */
    min-width: 250px; /* Ensure a minimum width for better layout */

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
        transform: scale(1.05);
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
    background: #2c3e50;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease, transform 0.3s, box-shadow 0.3s;

    &:hover {
        background: #34495e;
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const LocationCard = ({ image, title, description }) => {
    return (
        <Card>
            <CardImage src={image || "/path/to/default-image.jpg"} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <ExploreNowButton>Explore Now</ExploreNowButton>
        </Card>
    );
};

LocationCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const Category = ({ title, children }) => (
    <CategoryContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <CardContainer>{children}</CardContainer>
    </CategoryContainer>
);

Category.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
