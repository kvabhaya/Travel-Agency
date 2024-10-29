import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Importing images from assets (replace these with actual image paths)
import anuradhapura from "../assets/anuradhapura.webp";
import polonnaruwa from "../assets/polonnaruwa.webp";
import sigiriya from "../assets/sigiriya.webp";
import templeOfTooth from "../assets/dhaladha.jpg";
import galleFort from "../assets/galle_fort_1.webp";
import jaffnaDutchFort from "../assets/jaffna.webp";
import colomboHospital from "../assets/colombo.webp";
import kandyFestival from "../assets/kandy.avif";
import pongol from "../assets/pongol.jpeg";
import vesak from "../assets/vesak.jpeg";
import kataragamaTemple from "../assets/kataragama.jpeg";
import nallurKovil from "../assets/nallur.webp";
import kandy from "../assets/nuwara.jpeg";
import oldParliament from "../assets/old.jpeg"
import mosque from "../assets/mosque.jpg"
import church from"../assets/church.jpeg"
import ramadhan from "../assets/ramadhan.jpeg"
import christmas from "../assets/christmas.jpeg"

export default function Historical() {
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
                                onExploreMore={() => handleExploreMore({ title: "Anuradhapura", details: "Anuradhapura is famous for its well-preserved ruins." })}
                                large
                            />
                            <LocationCard
                                image={polonnaruwa}
                                title="Polonnaruwa"
                                description="Explore the well-preserved ruins of Sri Lanka's medieval capital."
                                onExploreMore={() => handleExploreMore({ title: "Polonnaruwa", details: "Polonnaruwa showcases stunning ancient architecture." })}
                            />
                            <LocationCard
                                image={sigiriya}
                                title="Sigiriya"
                                description="Climb the iconic rock fortress, a masterpiece of ancient engineering."
                                onExploreMore={() => handleExploreMore({ title: "Sigiriya", details: "Sigiriya is renowned for its rock fortress and frescoes." })}
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
                                onExploreMore={() => handleExploreMore({ title: "Temple of the Tooth", details: "This temple is a UNESCO World Heritage site." })}
                            />
                            <LocationCard
                                image={church}
                                title="Basilica of Our Lady of Lanka"
                                description="An iconic Roman Catholic basilica, renowned for its spiritual significance and beautiful hilltop views."
                                onExploreMore={() => handleExploreMore({ title: "Basilica of Our Lady of Lanka", details: "This basilica is a major pilgrimage site." })}
                            />
                            <LocationCard
                                image={mosque}
                                title="Jami Ul-Alfar Mosque"
                                description="A striking red-and-white mosque in Colombo, known for its unique Indo-Saracenic architecture and cultural importance."
                                onExploreMore={() => handleExploreMore({ title: "Jami Ul-Alfar Mosque", details: "This mosque is known for its architectural beauty." })}
                            />
                            <LocationCard
                                image={kataragamaTemple}
                                title="Kataragama Temple"
                                description="A sacred site for Buddhists and Hindus, known for its vibrant festivals and rituals."
                                onExploreMore={() => handleExploreMore({ title: "Kataragama Temple", details: "Kataragama is significant for its multicultural festivals." })}
                            />
                            <LocationCard
                                image={nallurKovil}
                                title="Nallur Kandaswamy Kovil"
                                description="A prominent Hindu temple in Jaffna, known for its beautiful architecture and vibrant festivals."
                                onExploreMore={() => handleExploreMore({ title: "Nallur Kovil", details: "This temple is celebrated for its annual festival." })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Colonial Echoes">
                        <CardContainer>
                            <LocationCard
                                image={galleFort}
                                title="Galle Fort"
                                description="Discover the preserved grandeur of this UNESCO World Heritage site with its colonial architecture."
                                onExploreMore={() => handleExploreMore({ title: "Galle Fort", details: "Galle Fort is known for its historic charm." })}
                            />
                            <LocationCard
                                image={jaffnaDutchFort}
                                title="Jaffna Dutch Fort"
                                description="Explore the historic fort offering insights into the colonial past of Jaffna."
                                onExploreMore={() => handleExploreMore({ title: "Jaffna Dutch Fort", details: "This fort provides a glimpse into Jaffna's history." })}
                                large
                            />
                            <LocationCard
                                image={colomboHospital}
                                title="Colombo's Dutch Hospital"
                                description="Visit the historic hospital turned shopping and dining precinct."
                                onExploreMore={() => handleExploreMore({ title: "Dutch Hospital", details: "This site is now a vibrant shopping area." })}
                            />
                            <LocationCard
                                image={kandy}
                                title="Kandy"
                                description="Home to the Temple of the Tooth and colonial buildings that reflect the town's rich history."
                                onExploreMore={() => handleExploreMore({ title: "Kandy", details: "Kandy is a cultural hub of Sri Lanka." })}
                            />
                            <LocationCard
                                image={oldParliament}
                                title="Old Parliament Building"
                                description="An architectural marvel of colonial times, reflecting the political history of Sri Lanka."
                                onExploreMore={() => handleExploreMore({ title: "Old Parliament Building", details: "This building showcases colonial architecture." })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Cultural Celebrations">
                        <CardContainer>
                            <LocationCard
                                image={kandyFestival}
                                title="Kandy Esala Perahera"
                                description="Immerse in the vibrant festivities of this grand cultural event held in Kandy."
                                onExploreMore={() => handleExploreMore({ title: "Kandy Esala Perahera", details: "This festival is a colorful display of culture." })}
                            />
                            <LocationCard
                                image={pongol}
                                title="Thai Pongal Festival"
                                description="A multi-day harvest festival celebrated by Tamil people in Sri Lanka."
                                onExploreMore={() => handleExploreMore({ title: "Thai Pongal Festival", details: "Pongal is celebrated with joyous family gatherings." })}
                            />
                            <LocationCard
                                image={vesak}
                                title="Vesak Festival"
                                description="Celebrate the birth, enlightenment, and death of Buddha with colorful lanterns and festivities."
                                onExploreMore={() => handleExploreMore({ title: "Vesak Festival", details: "Vesak is marked by special decorations and events." })}
                            />
                            <LocationCard
                                image={ramadhan}
                                title="Eid al-Fitr"
                                description="Mark the end of Ramadan with family gatherings, charity, and festive meals celebrated by Sri Lanka’s Muslim community."
                                onExploreMore={() => handleExploreMore({ title: "Eid al-Fitr", details: "Eid al-Fitr is celebrated with community and family." })}
                            />
                            <LocationCard
                                image={christmas}
                                title="Christmas"
                                description="Experience Christmas in Sri Lanka with joyous celebrations, decorations, and gatherings marking the birth of Jesus Christ."
                                onExploreMore={() => handleExploreMore({ title: "Christmas", details: "Christmas celebrations include festive meals and events." })}
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

const Section = styled.section`
    padding: 4rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom, #fff3e6, #604e36);
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
        box-shadow: 0 12px 24px rgb(147, 120, 89);
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
        background-color: #a88259;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;
font-size: 16px;
        &:hover {
            background-color: #493b2c;
            transform: scale(1.05);
        }
    }
`;

const LocationCard = ({ image, title, description, onExploreMore }) => (
    <Card onClick={onExploreMore}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <ExploreButton onClick={onExploreMore}>Explore More</ExploreButton>
    </Card>
);

const ExploreButton = styled.button`
    background-color: #604e36; /* Change color as needed */
    color: #fff; /* Text color */
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4a3b2a; /* Darker shade on hover */
    }
`;


LocationCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onExploreMore: PropTypes.func.isRequired,
    large: PropTypes.bool,
};

LocationCard.defaultProps = {
    large: false,
};

Category.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

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