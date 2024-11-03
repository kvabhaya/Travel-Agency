import React, {useRef, useState} from "react";
// import PropTypes from "prop-types";
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
import mirissa1 from "../assets/mirissa1.webp";
import mirissa2 from "../assets/mirissa2.webp";
import mirissa3 from "../assets/mirissa3.jpeg";
import mirissa4 from "../assets/mirissa4.jpeg";
import bentotar1 from "../assets/bentotar1.jpg";
import bentotar2 from "../assets/bentotar2.jpg";
import bentotar3 from "../assets/bentotar3.jpg";
import bentotar4 from "../assets/bentotar4.jpg";
import bentotaspa1 from "../assets/bentotaspa1.jpg";
import bentotaspa2 from "../assets/bentotaspa2.jpg";
import bentotaspa3 from "../assets/bentotaspa3.jpg";
import bentotaspa4 from "../assets/bentotaspa4.jpg";
import neombos1 from "../assets/negombos1.jpeg";
import neombos2 from "../assets/negombos2.jpeg";
import neombos3 from "../assets/negombos3.jpeg";
import neombos4 from "../assets/negombos4.jpeg";
import waligama1 from "../assets/waligama1.jpeg";
import waligama2 from "../assets/waligama2.jpeg";
import waligama3 from "../assets/waligama3.jpeg";
import waligama4 from "../assets/waligama4.jpeg";
import nuwara1 from "../assets/nuwara1.jpeg";
import nuwara2 from "../assets/nuwara2.jpeg";
import nuwara3 from "../assets/nuwara3.jpeg";
import nuwara4 from "../assets/nuwara4.jpeg";
import colombo1 from "../assets/colombo1.jpeg";
import colombo2 from "../assets/colombo2.jpeg";
import colombo3 from "../assets/colombo3.jpeg";
import colombo4 from "../assets/colombo4.jpeg";
import negombo_beach1 from "../assets/negombo_beach.jpeg";
import negombo_beach2 from "../assets/negombo_beach1.jpeg";
import negombo_beach3 from "../assets/negombo_beach2.jpeg";
import negombo_beach4 from "../assets/negombo_beach3.jpeg";
import dambulla1 from "../assets/dambulla1.jpeg";
import dambulla2 from "../assets/dambulla2.jpeg";
import dambulla3 from "../assets/dambulla3.jpeg";
import dambulla4 from "../assets/dambulla4.jpeg";
import yoga1 from "../assets/yoga1.jpeg";
import yoga2 from "../assets/yoga2.jpeg";
import yoga3 from "../assets/yoga3.jpeg";
import yoga4 from "../assets/yoga4.jpeg";
import yogag1 from "../assets/yogag1.jpeg";
import yogag2 from "../assets/yogag2.jpeg";
import yogag3 from "../assets/yogag3.jpeg";
import yogag4 from "../assets/yogag4.jpeg";
import yogae1 from "../assets/yogae1.jpeg";
import yogae2 from "../assets/yogae2.jpeg";
import yogae3 from "../assets/yogae3.jpeg";
import yogae4 from "../assets/yogae4.jpeg";
import yogau1 from "../assets/yogau1.jpeg";
import yogau2 from "../assets/yogau2.jpeg";
import yogau3 from "../assets/yogau3.jpeg";
import yogau4 from "../assets/yogau4.jpeg";
import nuwaraeliyas1 from "../assets/nuwaraEliyas1.jpeg";
import nuwaraeliyas2 from "../assets/nuwaraEliyas2.jpeg";
import nuwaraeliyas3 from "../assets/nuwaraEliyas3.jpeg";
import nuwaraeliyas4 from "../assets/nuwaraEliyas4.jpeg";
import sigiriyas1 from "../assets/sigiriyas1.jpeg";
import sigiriyas2 from "../assets/sigiriyas2.jpeg";
import sigiriyas3 from "../assets/sigiriyas3.jpeg";
import sigiriyas4 from "../assets/sigiriyas4.jpeg";
import tangalle1 from "../assets/tangalle1.jpeg";
import tangalle2 from "../assets/tangalle2.jpeg";
import tangalle3 from "../assets/tangalle3.jpeg";
import tangalle4 from "../assets/tangalle4.jpeg";
import hikkaduwas1 from "../assets/hikkaduwas1.jpeg";
import hikkaduwas2 from "../assets/hikkaduwas2.jpeg";
import hikkaduwas3 from "../assets/hikkaduwas3.jpeg";
import hikkaduwas4 from "../assets/hikkaduwas4.jpeg";

export default function SereneSanctuaries() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const detailsRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

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
                                onExploreMore={() => handleExploreMore({
                                    title: "Ayurveda Resorts in Bentota",
                                    details: "Discover the peaceful ambiance and wellness treatments at Bentota's top Ayurveda resorts. Nestled along the serene coast, these resorts offer a perfect blend of traditional Ayurvedic therapies and modern comforts. Indulge in rejuvenating treatments, yoga sessions, and meditation practices while enjoying stunning views of the Indian Ocean. Whether you seek relaxation or holistic healing, Bentota's Ayurveda resorts provide personalized programs tailored to your needs, ensuring a transformative experience.",
                                    images: [bentotar1,bentotar2,bentotar3,bentotar4]

                                })}
                            />
                            <LocationCard
                                image={negombo}
                                title="Ayurveda Resorts in Negombo"
                                description="Experience traditional healing in the coastal charm of Negombo."
                                onExploreMore={() => handleExploreMore({
                                    title: "Ayurveda Resorts in Negombo",
                                    details: "Enjoy holistic healing therapies with a view of the coast in Negombo. Known for its vibrant fishing community, Negombo is home to Ayurveda resorts that offer authentic Ayurvedic treatments. Engage in therapeutic massages, herbal baths, and dietary consultations while being enveloped in the coastal breeze. The proximity to beautiful beaches allows you to unwind after your treatments, making Negombo an ideal destination for relaxation and rejuvenation.",
                                    images: [neombos1, neombos2, neombos3, neombos4]
                                })}
                            />
                            <LocationCard
                                image={weligama}
                                title="Ayurveda Resorts in Weligama"
                                description="Enjoy tranquil treatments with stunning sea views."
                                onExploreMore={() => handleExploreMore({
                                    title: "Ayurveda Resorts in Weligama",
                                    details: "Rejuvenate your body and soul with seaside Ayurveda treatments in Weligama. Famous for its surf beaches, Weligama also hosts renowned Ayurveda resorts where you can experience the healing power of nature. With expert therapists, indulge in various treatments, including aromatherapy and wellness consultations, all while enjoying breathtaking views of the ocean. Experience the harmony of mind and body as you soak in the tranquil ambiance and soothing sounds of the waves.",
                                    images: [waligama1, waligama2, waligama3, waligama4]
                                })}
                            />
                            <LocationCard
                                image={kandy}
                                title="Ayurveda Retreats in Kandy"
                                description="Explore the healing arts surrounded by the beauty of the hill country."
                                onExploreMore={() => handleExploreMore({
                                    title: "Ayurveda Retreats in Kandy",
                                    details: "Connect with nature and explore Ayurvedic therapies in the hills of Kandy, a UNESCO World Heritage Site. The lush greenery and cool climate provide the perfect backdrop for rejuvenating retreats. Participate in Ayurvedic workshops, herbal medicine preparation, and serene yoga sessions. Many retreats also offer guided tours to explore the rich culture and history of Kandy, including visits to the Temple of the Tooth and beautiful botanical gardens, enhancing your wellness journey.",
                                    images: [nuwara1, nuwara2, nuwara3, nuwara4]
                                })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Spiritual Sojourns">
                        <CardContainer>
                            <LocationCard
                                image={yogak}
                                title="Yoga Retreats in Kandy"
                                description="Find peace and balance amidst the scenic beauty of Kandy."
                                onExploreMore={() => handleExploreMore({
                                    title: "Yoga Retreats in Kandy",
                                    details: "Achieve inner harmony surrounded by the beauty of Kandy's landscapes. Nestled in the heart of Sri Lanka's hill country, Kandy offers a tranquil setting for yoga retreats. Participants can engage in daily yoga sessions led by experienced instructors, focusing on various styles such as Hatha, Vinyasa, and Yin Yoga. Enjoy breathtaking views of the surrounding hills and the serene Kandy Lake, while also exploring local attractions such as the Temple of the Tooth and lush botanical gardens during your free time.",
                                    images: [yoga1, yoga2, yoga3, yoga4]
                                })}
                            />
                            <LocationCard
                                image={yogag}
                                title="Meditation Retreats in Galle"
                                description="Reconnect with your inner self in the historic town of Galle."
                                onExploreMore={() => handleExploreMore({
                                    title: "Meditation Retreats in Galle",
                                    details: "Explore meditative practices in the historic and serene town of Galle. This retreat offers a perfect blend of meditation, mindfulness, and local culture. Participate in guided meditation sessions that enhance self-awareness and emotional balance while enjoying the calming sound of waves crashing on the shore. Explore Galle's rich history by visiting its iconic lighthouse, ancient fortifications, and charming streets, making your meditation experience both enriching and memorable.",
                                    images: [yogag1, yogag2, yogag3, yogag4]
                                })}
                            />
                            <LocationCard
                                image={yogae}
                                title="Wellness Retreats in Ella"
                                description="Breathe in serenity in the lush hills of Ella."
                                onExploreMore={() => handleExploreMore({
                                    title: "Wellness Retreats in Ella",
                                    details: "Experience peaceful wellness retreats in Ella's lush, green surroundings. Known for its breathtaking landscapes, Ella provides an ideal environment for rejuvenation and relaxation. Enjoy daily yoga and meditation sessions, alongside holistic wellness treatments such as Ayurvedic therapies and herbal baths. Take time to explore nearby attractions, such as the Nine Arches Bridge and Little Adam's Peak, creating a perfect balance between physical activity and relaxation.",
                                    images: [yogae1, yogae2, yogae3, yogae4]
                                })}
                            />
                            <LocationCard
                                image={yogau}
                                title="Holistic Retreats in Unawatuna"
                                description="Unwind with yoga and meditation by the beach."
                                onExploreMore={() => handleExploreMore({
                                    title: "Holistic Retreats in Unawatuna",
                                    details: "Relax by the beach with holistic yoga and meditation sessions. Unawatuna's sandy shores and clear blue waters set the stage for a transformative retreat experience. Engage in daily yoga practices tailored to all levels, alongside meditation sessions that focus on mindfulness and self-discovery. Indulge in healthy meals prepared with fresh, local ingredients, and take advantage of opportunities for beach activities, ensuring a holistic approach to wellness and relaxation.",
                                    images: [yogau1, yogau2, yogau3, yogau4]
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Spa Havens">
                        <CardContainer>
                            <LocationCard
                                image={nuwaras}
                                title="Luxurious Spas in Nuwara Eliya"
                                description="Indulge in luxurious spa treatments amid beautiful landscapes."
                                onExploreMore={() => handleExploreMore({
                                    title: "Luxurious Spas in Nuwara Eliya",
                                    details: "Treat yourself to a luxury spa experience in the cool highlands of Nuwara Eliya. Known as 'Little England,' this charming town offers a serene environment perfect for relaxation. Experience world-class spa treatments using natural products inspired by the region's lush greenery and rich biodiversity. Enjoy personalized services such as aromatherapy massages, facials, and body scrubs, all while soaking in stunning views of tea plantations and misty mountains.",
                                    images: [nuwaraeliyas1, nuwaraeliyas2, nuwaraeliyas3, nuwaraeliyas4]
                                })}
                            />
                            <LocationCard
                                image={sigiriyas}
                                title="Spa Resorts in Sigiriya"
                                description="Experience relaxation with views of the ancient rock fortress."
                                onExploreMore={() => handleExploreMore({
                                    title: "Spa Resorts in Sigiriya",
                                    details: "Relax in spa resorts with magnificent views of Sigiriya. Nestled at the base of the iconic Sigiriya Rock Fortress, these resorts provide a unique blend of history and luxury. Enjoy rejuvenating spa therapies that incorporate local traditions and herbs, along with breathtaking views of the surrounding landscape. Engage in yoga sessions and guided meditation, making it an ideal retreat for both mind and body.",
                                    images: [sigiriyas1, sigiriyas2, sigiriyas3, sigiriyas4]
                                })}
                            />
                            <LocationCard
                                image={tangalle}
                                title="Spa Retreats in Tangalle"
                                description="Relax in coastal resorts offering rejuvenating spa therapies."
                                onExploreMore={() => handleExploreMore({
                                    title: "Spa Retreats in Tangalle",
                                    details: "Unwind in coastal Tangalle with soothing spa therapies. Known for its pristine beaches and tranquil environment, Tangalle is perfect for those seeking relaxation by the ocean. Indulge in treatments that combine traditional Ayurvedic techniques with modern wellness practices, including massages, body wraps, and detox programs. After your spa experience, enjoy the serene beach atmosphere or explore the vibrant marine life through snorkeling and diving.",
                                    images: [tangalle1, tangalle2, tangalle3, tangalle4]
                                })}
                            />
                            <LocationCard
                                image={hikkaduwa}
                                title="Spa Retreats in Hikkaduwa"
                                description="Pamper yourself at beachfront spas known for their wellness treatments."
                                onExploreMore={() => handleExploreMore({
                                    title: "Spa Retreats in Hikkaduwa",
                                    details: "Enjoy beachside spa treatments in Hikkaduwa's relaxing atmosphere. Renowned for its vibrant coral reefs and clear waters, Hikkaduwa offers the perfect backdrop for a rejuvenating spa retreat. Treat yourself to a variety of wellness therapies, including seaweed wraps, herbal baths, and relaxing massages, all tailored to enhance your well-being. Unwind in a serene setting while listening to the soothing sounds of the ocean, making your spa experience truly memorable.",
                                    images: [hikkaduwas1, hikkaduwas2, hikkaduwas3, hikkaduwas4]
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Holistic Healing">
                        <CardContainer>
                            <LocationCard
                                image={bentotas}
                                title="Bentota Traditional Ayurvedic Therapies"
                                description="Experience authentic Ayurvedic treatments across the island."
                                onExploreMore={() => handleExploreMore({
                                    title: "Bentota Traditional Ayurvedic Therapies",
                                    details: "Receive traditional Ayurvedic treatments in the calm setting of Bentota. Known for its serene beaches and lush surroundings, Bentota is an ideal place to immerse yourself in holistic healing. Enjoy personalized therapies designed to restore balance and harmony to your body and mind, including herbal massages, detoxifying treatments, and rejuvenating body scrubs using natural ingredients. Experience the tranquil ambiance that enhances relaxation and rejuvenation.",
                                    images: [bentotaspa1,bentotaspa2,bentotaspa3,bentotaspa4]
                                })}
                            />
                            <LocationCard
                                image={colombo}
                                title="Wellness Centers in Colombo"
                                description="Explore wellness options in the heart of the city."
                                onExploreMore={() => handleExploreMore({
                                    title: "Wellness Centers in Colombo",
                                    details: "Discover diverse wellness treatments in the vibrant city of Colombo. These centers offer a range of services, from modern fitness programs to traditional healing therapies. Indulge in rejuvenating massages, yoga sessions, and nutritional counseling tailored to your individual needs. Enjoy the convenience of accessing top-tier wellness facilities while being surrounded by the dynamic culture and bustling life of the city.",
                                    images: [colombo1, colombo2, colombo3, colombo4]
                                })}
                            />
                            <LocationCard
                                image={negomboBeach}
                                title="Beachfront Wellness Retreats in Negombo"
                                description="Revitalize your spirit at beachfront wellness centers."
                                onExploreMore={() => handleExploreMore({
                                    title: "Beachfront Wellness Retreats in Negombo",
                                    details: "Experience refreshing wellness therapies by the sea in Negombo. Nestled along stunning coastlines, these retreats provide a perfect escape for relaxation and rejuvenation. Engage in holistic wellness programs that include Ayurvedic treatments, yoga classes, and meditation sessions while enjoying the sound of the waves. Let the calming sea breeze enhance your wellness journey, making it a revitalizing experience for your body and mind.",
                                    images: [negombo_beach1, negombo_beach2, negombo_beach3, negombo_beach4]
                                })}
                            />
                            <LocationCard
                                image={dambulla}
                                title="Wellness Retreats in Dambulla"
                                description="Find tranquility and holistic healing in the historical city of Dambulla."
                                onExploreMore={() => handleExploreMore({
                                    title: "Wellness Retreats in Dambulla",
                                    details: "Relax and heal in Dambulla's tranquil wellness retreats. Surrounded by the rich cultural heritage and stunning rock formations of Dambulla, these retreats offer a serene atmosphere for holistic healing. Experience a blend of traditional therapies and modern wellness practices designed to promote physical and mental well-being. Enjoy meditation, herbal treatments, and wellness consultations tailored to your needs, all while soaking in the historical ambiance of this UNESCO World Heritage Site.",
                                    images: [dambulla1, dambulla2, dambulla3, dambulla4]
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
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    transition: background 0.3s ease, transform 0.3s, box-shadow 0.3s;

    &:hover {
        background: #34495e;
        transform: translate(-50%, -5%);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

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