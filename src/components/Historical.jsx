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
import oldParliament from "../assets/old.jpeg";
import mosque from "../assets/mosque.jpg";
import church from"../assets/church.jpeg";
import ramadhan from "../assets/ramadhan.jpeg";
import christmas from "../assets/christmas.jpeg";
import anu1 from "../assets/anu1.jpeg";
import anu2 from "../assets/anu2.jpeg";
import anu3 from "../assets/anu3.jpeg";
import anu4 from "../assets/anu4.jpeg";
import pol1 from "../assets/polon1.jpeg";
import pol2 from "../assets/polon2.jpeg";
import pol3 from "../assets/polon3.jpeg";
import pol4 from "../assets/polon4.jpeg";
import sigiri1 from "../assets/polon1.jpeg";
import sigiri2 from "../assets/polon2.jpeg";
import sigiri3 from "../assets/polon3.jpeg";
import sigiri4 from "../assets/polon4.jpeg";
import temp1 from "../assets/tooth1.jpeg";
import temp2 from "../assets/tooth2.jpeg";
import temp3 from "../assets/tooth3.jpeg";
import temp4 from "../assets/tooth4.jpeg";
import basilca1 from "../assets/basilca1.jpeg";
import basilca2 from "../assets/basilca2.jpeg";
import basilca3 from "../assets/basilca3.jpeg";
import basilca4 from "../assets/basilca4.jpeg";
import jami1 from "../assets/jami1.jpeg";
import jami2 from "../assets/jami2.jpeg";
import jami3 from "../assets/jami3.jpeg";
import jami4 from "../assets/jami4.jpeg";
import kat1 from "../assets/kataragama1.jpeg";
import kat2 from "../assets/kataragama2.jpeg";
import kat3 from "../assets/kataragama3.jpeg";
import kat4 from "../assets/kataragama4.jpeg";
import nallur1 from "../assets/nallur1.jpeg";
import nallur2 from "../assets/nallur2.jpeg";
import nallur3 from "../assets/nallur3.jpeg";
import nallur4 from "../assets/nallur4.jpeg";
import fort1 from "../assets/gallefort1.jpeg";
import fort2 from "../assets/gallefort2.jpeg";
import fort3 from "../assets/gallefort3.jpeg";
import fort4 from "../assets/gallefort4.jpeg";
import jaffna1 from "../assets/jaffna1.jpeg";
import jaffna2 from "../assets/jaffna2.jpeg";
import jaffna3 from "../assets/jaffna3.jpeg";
import jaffna4 from "../assets/jaffna4.jpeg";
import hos1 from "../assets/dutch1.jpeg";
import hos2 from "../assets/dutch2.jpeg";
import hos3 from "../assets/dutch3.jpeg";
import hos4 from "../assets/dutch4.jpeg";
import kan1 from "../assets/kandy1.jpeg";
import kan2 from "../assets/kandy2.jpeg";
import kan3 from "../assets/kandy3.jpeg";
import kan4 from "../assets/kandy4.jpeg";
import par1 from "../assets/parli1.jpeg";
import par2 from "../assets/parli2.jpeg";
import par3 from "../assets/parli3.jpeg";
import par4 from "../assets/parli4.jpeg";
import pera1 from "../assets/esala1.jpeg";
import pera2 from "../assets/esala2.jpeg";
import pera3 from "../assets/esala3.jpeg";
import pera4 from "../assets/esala4.jpeg";
import pon1 from "../assets/thai1.jpeg";
import pon2 from "../assets/thai2.jpeg";
import pon3 from "../assets/thai3.jpeg";
import pon4 from "../assets/thai4.jpeg";
import ves1 from "../assets/vesak1.jpeg";
import ves2 from "../assets/vesak2.jpeg";
import ves3 from "../assets/vesak3.jpeg";
import ves4 from "../assets/vesaak4.jpeg";
import eid1 from "../assets/eid1.jpeg";
import eid2 from "../assets/eid2.jpeg";
import eid3 from "../assets/eid3.jpeg";
import eid4 from "../assets/eid4.jpeg";
import chris1 from "../assets/christ1.jpeg";
import chris2 from "../assets/christ2.jpeg";
import chris3 from "../assets/christ3.jpeg";
import chris4 from "../assets/christ4.jpeg";
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
                                onExploreMore={() => handleExploreMore({
                                    title: "Anuradhapura",
                                    details: "Anuradhapura, one of the ancient capitals of Sri Lanka, is known for its remarkable archaeological sites and sacred relics. The city is famous for the Sri Maha Bodhi, a sacred fig tree believed to be a sapling from the original Bodhi tree under which Buddha attained enlightenment. Visitors can explore the massive stupas, such as Jetavanaramaya and Ruwanwelisaya, showcasing ancient architectural brilliance. Anuradhapura's rich history spans over two millennia, making it a vital cultural and religious center for Buddhists, with numerous monasteries and temples to discover.",
                                    images: [anu1, anu2, anu3, anu4]
                                })}
                                large
                            />
                            <LocationCard
                                image={polonnaruwa}
                                title="Polonnaruwa"
                                description="Explore the well-preserved ruins of Sri Lanka's medieval capital."
                                onExploreMore={() => handleExploreMore({
                                    title: "Polonnaruwa",
                                    details: "Polonnaruwa, once the second capital of Sri Lanka, is renowned for its exceptionally preserved ruins dating back to the 12th century. The ancient city is a UNESCO World Heritage site, offering visitors a glimpse into the medieval architecture and urban planning of the era. Highlights include the impressive Gal Vihara, with its massive rock-cut Buddha statues, and the well-maintained Royal Palace complex. The city's picturesque landscapes, adorned with lakes and gardens, make it a peaceful destination for history enthusiasts and nature lovers alike.",
                                    images: [pol1,pol2,pol3,pol4]
                                })}
                            />
                            <LocationCard
                                image={sigiriya}
                                title="Sigiriya"
                                description="Climb the iconic rock fortress, a masterpiece of ancient engineering."
                                onExploreMore={() => handleExploreMore({
                                    title: "Sigiriya",
                                    details: "Sigiriya, also known as Lion Rock, is one of Sri Lanka's most iconic landmarks and a UNESCO World Heritage site. This ancient rock fortress rises nearly 200 meters above the surrounding plains and features stunning frescoes, gardens, and water features that showcase the ingenuity of ancient engineering. As you climb the steep steps to the summit, you'll be rewarded with breathtaking panoramic views of the lush countryside. The site is steeped in history, with legends of kings, battles, and the artistic legacy of the past, making it a must-visit for those interested in culture and adventure.",
                                    images: [sigiri1,sigiri2,sigiri3,sigiri4]
                                })}
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
                                onExploreMore={() => handleExploreMore({
                                    title: "Temple of the Tooth",
                                    details: "The Temple of the Tooth, or Sri Dalada Maligawa, is a UNESCO World Heritage site located in Kandy. It houses the sacred relic of the tooth of the Buddha, which is of immense religious significance to Buddhists worldwide. The temple complex features beautiful architecture, intricate carvings, and serene surroundings by the Kandy Lake. Visitors can witness daily rituals and ceremonies, especially during the Esala Perahera, a grand procession celebrating the relic, showcasing traditional dancers, drummers, and beautifully adorned elephants.",
                                    images: [temp1,temp2,temp3,temp4]
                                })}
                            />
                            <LocationCard
                                image={church}
                                title="Basilica of Our Lady of Lanka"
                                description="An iconic Roman Catholic basilica, renowned for its spiritual significance and beautiful hilltop views."
                                onExploreMore={() => handleExploreMore({
                                    title: "Basilica of Our Lady of Lanka",
                                    details: "The Basilica of Our Lady of Lanka, located in the picturesque city of Bolawatta, is a significant Roman Catholic pilgrimage site. Known for its stunning Gothic architecture, the basilica offers breathtaking views of the surrounding landscape. It houses many miraculous statues and hosts numerous religious events, especially during the annual feast of Our Lady of Lanka. The serene atmosphere and stunning stained-glass windows make it a perfect place for reflection and prayer.",
                                    images: [basilca1,basilca2,basilca3,basilca4]
                                })}
                            />
                            <LocationCard
                                image={mosque}
                                title="Jami Ul-Alfar Mosque"
                                description="A striking red-and-white mosque in Colombo, known for its unique Indo-Saracenic architecture and cultural importance."
                                onExploreMore={() => handleExploreMore({
                                    title: "Jami Ul-Alfar Mosque",
                                    details: "Jami Ul-Alfar Mosque, also known as the Red Mosque, is one of Colombo's most iconic landmarks, famous for its stunning Indo-Saracenic architectural style characterized by its vibrant red and white stripes. Built in 1909, it serves as a place of worship and a cultural hub for the Muslim community. The mosque features intricate carvings, beautiful minarets, and a spacious prayer hall. Visitors can admire its unique architecture and learn about the cultural significance of Islam in Sri Lanka.",
                                    images: [jami1,jami2,jami3,jami4]
                                })}
                            />
                            <LocationCard
                                image={kataragamaTemple}
                                title="Kataragama Temple"
                                description="A sacred site for Buddhists and Hindus, known for its vibrant festivals and rituals."
                                onExploreMore={() => handleExploreMore({
                                    title: "Kataragama Temple",
                                    details: "Kataragama Temple is a revered site for both Buddhists and Hindus, located in the southeastern region of Sri Lanka. The temple complex is famous for its multicultural festivals, particularly the annual Kataragama Esala Perahera, where devotees participate in vibrant rituals and processions. The temple is dedicated to God Skanda and features several shrines and altars, attracting pilgrims from various faiths. The spiritual ambiance and the surrounding natural beauty make it a unique pilgrimage destination.",
                                    images: [kat1,kat2,kat3,kat4]
                                })}
                            />
                            <LocationCard
                                image={nallurKovil}
                                title="Nallur Kandaswamy Kovil"
                                description="A prominent Hindu temple in Jaffna, known for its beautiful architecture and vibrant festivals."
                                onExploreMore={() => handleExploreMore({
                                    title: "Nallur Kandaswamy Kovil",
                                    details: "Nallur Kandaswamy Kovil, situated in Jaffna, is one of the most important Hindu temples in Sri Lanka, dedicated to Lord Murugan. The temple is renowned for its stunning Dravidian architecture, colorful sculptures, and elaborate rituals. It hosts the grand annual festival, which attracts thousands of devotees, featuring processions, traditional music, and dance performances. The temple's vibrant atmosphere and spiritual significance make it a must-visit for those exploring the cultural richness of the region.",
                                    images: [nallur1,nallur2,nallur3,nallur4]
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Colonial Echoes">
                        <CardContainer>
                            <LocationCard
                                image={galleFort}
                                title="Galle Fort"
                                description="Discover the preserved grandeur of this UNESCO World Heritage site with its colonial architecture."
                                onExploreMore={() => handleExploreMore({
                                    title: "Galle Fort",
                                    details: "Galle Fort, built in the 16th century by the Portuguese and later expanded by the Dutch, is a UNESCO World Heritage site located on the southwestern coast of Sri Lanka. The fort is renowned for its well-preserved colonial architecture, including imposing ramparts, historic buildings, and charming cobblestone streets. Visitors can explore the picturesque lighthouse, the old churches, and museums that showcase the fort's rich maritime history. The fort also offers stunning views of the Indian Ocean and is a vibrant area with cafes, shops, and art galleries.",
                                    images: [fort1,fort2,fort3,fort4]
                                })}
                            />
                            <LocationCard
                                image={jaffnaDutchFort}
                                title="Jaffna Dutch Fort"
                                description="Explore the historic fort offering insights into the colonial past of Jaffna."
                                onExploreMore={() => handleExploreMore({
                                    title: "Jaffna Dutch Fort",
                                    details: "The Jaffna Dutch Fort, built in the 17th century, is a significant historical landmark that showcases the colonial history of the Jaffna Peninsula. This fort features impressive ramparts, a moat, and remnants of old buildings that reflect its strategic importance during colonial times. Visitors can stroll along the fort walls, enjoy panoramic views of the surrounding area, and learn about the fort's role in the defense of Jaffna against various colonial powers. The fort is also a popular site for cultural events and gatherings.",
                                    images: [jaffna1,jaffna2,jaffna3,jaffna4]
                                })}
                                large
                            />
                            <LocationCard
                                image={colomboHospital}
                                title="Colombo's Dutch Hospital"
                                description="Visit the historic hospital turned shopping and dining precinct."
                                onExploreMore={() => handleExploreMore({
                                    title: "Colombo's Dutch Hospital",
                                    details: "Colombo's Dutch Hospital, originally built in the 17th century, served as a hospital during the Dutch colonial period. Today, it has been beautifully restored and transformed into a vibrant shopping and dining precinct. Visitors can explore a variety of boutiques, cafes, and restaurants that offer a mix of local and international cuisine. The architecture of the hospital reflects the Dutch colonial style, with arched doorways, terracotta tiles, and a charming courtyard, making it a perfect spot to relax and enjoy the atmosphere of historic Colombo.",
                                    images: [hos1,hos2,hos3,hos4]
                                })}
                            />
                            <LocationCard
                                image={kandy}
                                title="Kandy"
                                description="Home to the Temple of the Tooth and colonial buildings that reflect the town's rich history."
                                onExploreMore={() => handleExploreMore({
                                    title: "Kandy",
                                    details: "Kandy, located in the central highlands of Sri Lanka, is known for its rich cultural heritage and stunning natural beauty. It is home to the Temple of the Tooth, which houses a sacred relic of the Buddha. The city is surrounded by lush hills and features picturesque lakes, botanical gardens, and colonial-era buildings. Visitors can explore the vibrant local markets, witness traditional Kandyan dance performances, and enjoy the serene atmosphere of this UNESCO World Heritage site. Kandy is also famous for its annual Esala Perahera festival, which celebrates the sacred tooth relic with elaborate processions.",
                                    images: [kan1,kan2,kan3,kan4]
                                })}
                            />
                            <LocationCard
                                image={oldParliament}
                                title="Old Parliament Building"
                                description="An architectural marvel of colonial times, reflecting the political history of Sri Lanka."
                                onExploreMore={() => handleExploreMore({
                                    title: "Old Parliament Building",
                                    details: "The Old Parliament Building, located in Colombo, is an architectural masterpiece designed in the Neoclassical style and completed in 1930. It served as the seat of the Parliament of Ceylon until 1983. The building is notable for its grand columns, intricate plasterwork, and spacious chambers, reflecting the political history and evolution of governance in Sri Lanka. Visitors can admire the building's impressive façade and learn about its historical significance through guided tours that highlight key events in the country's parliamentary history.",
                                    images: [par1,par2,par3,par4]
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Cultural Celebrations">
                        <CardContainer>
                            <LocationCard
                                image={kandyFestival}
                                title="Kandy Esala Perahera"
                                description="Immerse in the vibrant festivities of this grand cultural event held in Kandy."
                                onExploreMore={() => handleExploreMore({
                                    title: "Kandy Esala Perahera",
                                    details: "The Kandy Esala Perahera is one of Sri Lanka's most spectacular and revered festivals, held annually in July or August. This grand event is a celebration of the sacred tooth relic of the Buddha, which is paraded through the streets of Kandy. The festival features a dazzling display of traditional dancers, drummers, and elegantly adorned elephants. The vibrant procession includes beautifully decorated floats, religious rituals, and cultural performances, creating a mesmerizing atmosphere that attracts thousands of local and international visitors. Participating in the Esala Perahera offers a unique insight into Sri Lankan culture and spirituality.",
                                    images: [pera1,pera2,pera3,pera4]
                                })}
                            />
                            <LocationCard
                                image={pongol}
                                title="Thai Pongal Festival"
                                description="A multi-day harvest festival celebrated by Tamil people in Sri Lanka."
                                onExploreMore={() => handleExploreMore({
                                    title: "Thai Pongal Festival",
                                    details: "Thai Pongal is a significant harvest festival celebrated by the Tamil community in Sri Lanka, typically observed from January 13 to 16. The festival is a time of gratitude to the sun god and nature for the bountiful harvest. Families gather to prepare special dishes, particularly 'Pongal,' a sweet rice dish cooked with milk and jaggery. Homes are adorned with colorful kolam (rice flour patterns) at the entrance, and traditional music and dance fill the air. Thai Pongal fosters community spirit and familial bonds, with joyous gatherings, cultural performances, and rituals that celebrate abundance and togetherness.",
                                    images: [pon1,pon2,pon3,pon4]
                                })}
                            />
                            <LocationCard
                                image={vesak}
                                title="Vesak Festival"
                                description="Celebrate the birth, enlightenment, and death of Buddha with colorful lanterns and festivities."
                                onExploreMore={() => handleExploreMore({
                                    title: "Vesak Festival",
                                    details: "Vesak, also known as Buddha Purnima, is the most important Buddhist festival celebrated in Sri Lanka, usually occurring in May. This festival marks the birth, enlightenment, and death of Siddhartha Gautama, the Buddha. The streets are illuminated with vibrant lanterns and decorated with flags, while devotees engage in acts of kindness, including giving alms and sharing food with the less fortunate. Temples are adorned with flowers, and special prayers and rituals are held. The festival culminates in colorful processions, cultural performances, and the release of sky lanterns, symbolizing the spreading of wisdom and compassion.",
                                    images: [ves1,ves2,ves3,ves4]
                                })}
                            />
                            <LocationCard
                                image={ramadhan}
                                title="Eid al-Fitr"
                                description="Mark the end of Ramadan with family gatherings, charity, and festive meals celebrated by Sri Lanka’s Muslim community."
                                onExploreMore={() => handleExploreMore({
                                    title: "Eid al-Fitr",
                                    details: "Eid al-Fitr is a joyous celebration marking the end of Ramadan, the holy month of fasting for Muslims in Sri Lanka and around the world. This festival typically takes place after the sighting of the new moon, leading to communal prayers at mosques, followed by festive gatherings with family and friends. Traditional dishes are prepared, and special sweets like 'Kheer' and 'Baklava' are served. Giving of 'Zakat' (charity) is a significant aspect of Eid, emphasizing compassion and community support. The celebrations often include wearing new clothes, exchanging gifts, and sharing meals, creating an atmosphere of unity and joy.",
                                    images: [eid1,eid2,eid3,eid4]
                                })}
                            />
                            <LocationCard
                                image={christmas}
                                title="Christmas"
                                description="Experience Christmas in Sri Lanka with joyous celebrations, decorations, and gatherings marking the birth of Jesus Christ."
                                onExploreMore={() => handleExploreMore({
                                    title: "Christmas",
                                    details: "Christmas in Sri Lanka is celebrated with great enthusiasm, particularly among the Christian community. The festive season begins in early December, with beautiful decorations adorning homes, churches, and public spaces. Midnight mass on Christmas Eve is a cherished tradition, followed by family gatherings and festive meals that include local delicacies and traditional sweets. Carol singing and community events create a lively atmosphere, with many participating in charitable activities to help those in need. The blend of Western customs and local traditions makes Christmas in Sri Lanka a unique and heartwarming experience.",
                                    images: [chris1,chris2,chris3,chris4]
                                })}
                            />

                        </CardContainer>
                    </Category>
                </Categories>

                {/* Displaying selected location details */}
                {selectedLocation && (
                    <DetailsContainer ref={detailsRef}>
                        <DescriptionContainer>
                            <h2>{selectedLocation.title}</h2>
                            <p>{selectedLocation.details}</p>
                        </DescriptionContainer>
                        <ImagesContainer>
                            {selectedLocation.images.map((image, index) => (
                                <Image key={index} src={image} alt={`${selectedLocation.title} ${index + 1}`} />
                            ))}
                        </ImagesContainer>
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
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    padding: 2rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    gap: 2rem;
    position: relative;

    /* Stack items in a column on smaller screens */
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`;

const DescriptionContainer = styled.div`
    flex: 1;
    padding-right: 1rem;

    h2 {
        font-size: 1.8rem;
        color: #2c3e50;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        color: #555;
        line-height: 1.7;
        text-align: justify;
    }

    /* Adjust padding on smaller screens */
    @media (max-width: 768px) {
        padding-right: 0;
    }
`;

const ImagesContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns for equal sizing */
    gap: 1rem;
    padding-left: 1rem;

    /* Switch to single column on smaller screens */
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding-left: 0;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05); /* Slight zoom effect */
    }
`;

const CloseButton = styled.button`
    position: absolute;
    bottom: 1rem;
    left: 25%;
    transform: translateX(-50%);
    background: #e74c3c;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 2rem; /* Make button longer */
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s;

    &:hover {
        background: #c0392b;
    }

    /* Center button for smaller screens */
    @media (max-width: 768px) {
        position: static;
        margin: 1rem auto 0;
        transform: none;
    }
`;