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
                                onExploreMore={() => handleExploreMore({
                                    title: "Mirissa",
                                    details: "Mirissa, a hidden gem on Sri Lanka’s southern coast, is renowned for its idyllic " +
                                        "beaches, vibrant nightlife, and rich marine biodiversity. The beach is famed for its" +
                                        " breathtaking sunsets that paint the sky in vibrant hues of orange and pink, making" +
                                        " it a perfect spot for evening strolls or romantic dinners by the sea. Visitors can " +
                                        "embark on unforgettable whale watching tours that operate from November to April," +
                                        " providing an opportunity to witness majestic blue whales and playful dolphins " +
                                        "in their natural habitat. Apart from whale watching, Mirissa offers a plethora" +
                                        " of activities, including snorkeling, surfing, and diving, with numerous schools" +
                                        " offering equipment rentals and guided excursions. The area is also dotted with " +
                                        "cozy beach shacks and upscale restaurants serving fresh seafood and local delicacies. " +
                                        "For those seeking relaxation, the calm waters and soft sands of Mirissa provide an " +
                                        "idyllic backdrop for sunbathing or indulging in spa treatments at beachfront resorts." +
                                        " As the sun sets, the beach comes alive with beach parties and live music, ensuring a" +
                                        " lively atmosphere that captivates visitors."
                                })}
                            />
                            <LocationCard
                                image={unawatuna}
                                title="Unawatuna"
                                description="Relax at one of Sri Lanka's most popular beaches with golden sands and vibrant nightlife."
                                onExploreMore={() => handleExploreMore({
                                    title: "Unawatuna",
                                    details: "Unawatuna is a picturesque beach destination located just a few kilometers " +
                                        "from Galle, known for its golden sands and turquoise waters. The beach is protected " +
                                        "by a coral reef, creating a tranquil swimming area that is perfect for families and " +
                                        "novice snorkelers. Unawatuna is not only famous for its natural beauty but also for " +
                                        "its vibrant nightlife, with numerous bars and restaurants offering live music and dance " +
                                        "parties. Adventurous travelers can explore the nearby coral reefs, teeming with colorful " +
                                        "fish and marine life, or take a diving course at one of the local dive shops. For those " +
                                        "interested in culture, the Japanese Peace Pagoda, located on a hill overlooking the" +
                                        " beach, offers stunning panoramic views and a serene atmosphere. Additionally, visitors " +
                                        "can indulge in delicious local cuisine, ranging from fresh seafood to traditional Sri " +
                                        "Lankan dishes, at the many beachfront eateries. The area also features a number of " +
                                        "boutique hotels and guesthouses, providing comfortable accommodations with stunning " +
                                        "ocean views. With its unique blend of relaxation, adventure, and vibrant culture, " +
                                        "Unawatuna is a must-visit destination for beach lovers."
                                })}
                            />
                            <LocationCard
                                image={hikkaduwa}
                                title="Hikkaduwa"
                                description="Explore the coral reefs and enjoy exciting water sports at this lively beach destination."
                                onExploreMore={() => handleExploreMore({
                                    title: "Hikkaduwa",
                                    details: "Hikkaduwa is a bustling beach town renowned for its stunning coral reefs and" +
                                        " energetic atmosphere. This lively destination is a haven for water sports enthusiasts," +
                                        " offering a wide range of activities including surfing, snorkeling, and diving. " +
                                        "The Hikkaduwa National Park, a UNESCO World Heritage Site, is home to vibrant coral " +
                                        "gardens and diverse marine life, making it a popular spot for both beginners and" +
                                        " experienced divers. Several dive schools in the area offer courses and guided tours, " +
                                        "ensuring that visitors can fully experience the underwater beauty. The beach itself is " +
                                        "lined with trendy cafes, lively bars, and restaurants, where visitors can savor " +
                                        "delicious seafood while enjoying the ocean views. In the evenings, Hikkaduwa transforms " +
                                        "into a party hotspot, with beach parties, live music, and vibrant nightlife drawing" +
                                        " locals and tourists alike. Beyond the beach, visitors can explore nearby attractions" +
                                        " such as the Turtle Hatchery, where they can learn about sea turtle conservation and" +
                                        " even participate in releasing baby turtles into the ocean. With its unique blend of " +
                                        "adventure, relaxation, and vibrant culture, Hikkaduwa promises an unforgettable beach" +
                                        " experience."
                                })}
                            />
                            <LocationCard
                                image={pasikuda}
                                title="Pasikuda"
                                description="Famous for its shallow waters and beautiful beaches, perfect for a relaxing getaway."
                                onExploreMore={() => handleExploreMore({
                                    title: "Pasikuda",
                                    details: "Pasikuda is celebrated for its pristine beaches and shallow turquoise waters, " +
                                        "making it one of the best beach destinations in Sri Lanka for relaxation and family " +
                                        "outings. Located on the east coast, Pasikuda boasts a stunning stretch of coastline " +
                                        "with soft white sands and warm waters that are perfect for swimming. The calm and shallow" +
                                        " waters make it an ideal spot for families with young children, providing a safe " +
                                        "environment for splashing and playing. Visitors can indulge in various water activities" +
                                        " such as kayaking, windsurfing, and snorkeling, with many local operators offering " +
                                        "equipment rentals and guided tours. The area is also known for its picturesque views, " +
                                        "especially during sunrise and sunset, which create breathtaking backdrops for " +
                                        "photography. In addition to beach activities, Pasikuda is surrounded by lush greenery" +
                                        " and offers opportunities for exploring nearby villages and learning about the local" +
                                        " culture. Visitors can savor delicious Sri Lankan cuisine at beachfront restaurants " +
                                        "and enjoy the laid-back atmosphere that Pasikuda is famous for. For those seeking a " +
                                        "tranquil escape, the area provides several luxury resorts and charming guesthouses that" +
                                        " offer beachfront access and stunning views of the ocean. With its combination of " +
                                        "natural beauty, water activities, and serene ambiance, Pasikuda is a perfect destination" +
                                        " for a relaxing getaway."
                                })}
                            />
                        </CardContainer>
                    </Category>


                    <Category title="Aqua Adventures">
                        <CardContainer>
                            <LocationCard
                                image={kalpitiya}
                                title="Kalpitiya"
                                description="Dive into thrilling water sports—surfing, snorkeling, and whale watching."
                                onExploreMore={() => handleExploreMore({
                                    title: "Kalpitiya",
                                    details: "Kalpitiya is a hotspot for water sports, including kitesurfing, snorkeling, and" + " dolphin watching. With its stunning lagoons and sandy beaches, it offers a perfect escape for adventure seekers. The region is known for its vibrant marine life, making it an ideal spot for snorkeling and scuba diving enthusiasts. Visitors can also take boat trips to see pods of dolphins and enjoy the pristine beauty of the surrounding nature."
                                })}
                            />
                            <LocationCard
                                image={whaleWatching}
                                title="Trincomalee"
                                description="Spot majestic blue whales and playful dolphins as they swim in the tranquil waters of Trincomalee, a top whale-watching spot."
                                onExploreMore={() => handleExploreMore({
                                    title: "Trincomalee",
                                    details: "Trincomalee offers incredible opportunities for whale watching, especially from May to October. It is known for its clear waters and stunning beaches, such as Nilaveli and Uppuveli. In addition to whale watching, visitors can explore historical sites, such as Fort Frederick and Koneswaram Temple, or relax on the beautiful beaches while enjoying fresh seafood from local restaurants."
                                })}
                            />
                            <LocationCard
                                image={snorkeling}
                                title="Hikkaduwa"
                                description="Explore vibrant coral reefs and swim among tropical fish in Hikkaduwa's crystal-clear waters, perfect for snorkeling enthusiasts."
                                onExploreMore={() => handleExploreMore({
                                    title: "Hikkaduwa",
                                    details: "Hikkaduwa is a snorkeling paradise known for its beautiful coral reefs and rich marine life. The calm, warm waters make it an ideal spot for beginners and experienced snorkelers alike. Visitors can also enjoy glass-bottom boat rides, diving adventures, and explore the nearby Hikkaduwa National Park, which is home to a variety of marine species, including sea turtles and colorful fish."
                                })}
                            />
                            <LocationCard
                                image={jetSkiing}
                                title="Bentota"
                                description="Experience the thrill of jet skiing on the Bentota River and ocean, a hub for exciting water sports and scenic coastal views."
                                onExploreMore={() => handleExploreMore({
                                    title: "Bentota",
                                    details: "Bentota is famous for its water sports, including jet skiing, banana boat rides, and parasailing. The picturesque Bentota River and the beach provide a stunning backdrop for adventure activities. Visitors can also relax on the sandy shores or visit the nearby turtle hatchery to learn about sea turtle conservation efforts. The area is well-known for its luxurious resorts and vibrant nightlife."
                                })}
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Island Escapades">
                        <CardContainer>
                            <LocationCard
                                image={pigeonIsland}
                                title="Pigeon Island"
                                description="Discover the secluded beauty and vibrant marine life at Pigeon Island, famous for snorkeling and coral reefs."
                                onExploreMore={() => handleExploreMore({
                                    title: "Pigeon Island",
                                    details: "Pigeon Island is renowned for its stunning coral reefs and clear waters, making it a premier snorkeling destination. The island is home to a variety of marine species, including colorful fish and sea turtles. Visitors can enjoy guided snorkeling tours and explore the vibrant underwater ecosystems while also relaxing on its pristine beaches."
                                })}
                            />
                            <LocationCard
                                image={delftIsland}
                                title="Delft Island"
                                description="Explore the untouched beauty and historical significance of Delft Island, known for its wild ponies and colonial heritage."
                                onExploreMore={() => handleExploreMore({
                                    title: "Delft Island",
                                    details: "Delft Island is a serene getaway known for its scenic landscapes and rich history. The island features wild ponies roaming freely, adding to its charm. Visitors can explore ancient churches and ruins, enjoy picturesque views of the ocean, and learn about the island's colonial past while experiencing its unique culture."
                                })}
                            />
                            <LocationCard
                                image={katchatheevu}
                                title="Katchatheevu"
                                description="An island of historical importance, featuring stunning coastal scenery and vibrant religious festivals."
                                onExploreMore={() => handleExploreMore({
                                    title: "Katchatheevu",
                                    details: "Katchatheevu is famous for its stunning coastal scenery and is a site of significant cultural and religious importance. The island hosts vibrant religious festivals, attracting pilgrims and tourists alike. Visitors can explore the beautiful beaches, experience local traditions, and enjoy the tranquil environment that this island offers."
                                })}
                            />
                            <LocationCard
                                image={madolDoova}
                                title="Madol Doova"
                                description="A literary gem and serene island, Madol Doova offers a tranquil escape amidst lush greenery and quiet waters."
                                onExploreMore={() => handleExploreMore({
                                    title: "Madol Doova",
                                    details: "Madol Doova is celebrated for its natural beauty and its connection to Sri Lankan literature. This tranquil island is surrounded by serene waters and lush greenery, making it an ideal spot for relaxation and exploration. Visitors can enjoy boat rides, explore the picturesque landscapes, and immerse themselves in the stories inspired by this charming location."
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Heritage Harbors">
                        <CardContainer>
                            <LocationCard
                                image={negomboHabour}
                                title="Negombo"
                                description="Experience the coastal life and traditions at Negombo's vibrant beaches."
                                onExploreMore={() => handleExploreMore({
                                    title: "Negombo",
                                    details: "Negombo is a bustling coastal town renowned for its rich fishing heritage and beautiful beaches. Just a short drive from Colombo, it offers a perfect getaway for travelers. The town is famous for its vibrant fish market, where you can witness local fishermen bringing in their catch each morning. Enjoy a boat ride on the tranquil lagoon, where you can spot various bird species and experience the stunning sunset views. Negombo also boasts several historical churches, such as St. Mary's Church, and lively local festivals, offering visitors an immersive cultural experience."
                                })}
                            />
                            <LocationCard
                                image={beruwalaHarbour}
                                title="Beruwala"
                                description="Enjoy the peaceful beaches and rich cultural heritage of Beruwala."
                                onExploreMore={() => handleExploreMore({
                                    title: "Beruwala",
                                    details: "Beruwala is a picturesque coastal town famous for its pristine beaches and rich cultural history. The area is known for its historical significance as one of the earliest Muslim settlements in Sri Lanka, reflected in its architecture and local customs. Visit the famous Beruwala Lighthouse, which offers breathtaking views of the coastline. The town is also an ideal spot for water sports, including jet skiing and banana boat rides. Enjoy a leisurely day on the beach, where you can relax under palm trees or explore nearby cultural sites, including ancient mosques and traditional fishing villages."
                                })}
                            />
                            <LocationCard
                                image={galleFort}
                                title="Galle Fort"
                                description="Explore the historical Galle Fort, a UNESCO World Heritage site with stunning coastal views."
                                onExploreMore={() => handleExploreMore({
                                    title: "Galle Fort",
                                    details: "Galle Fort is a UNESCO World Heritage site known for its remarkable blend of architectural styles and rich history. Built by the Portuguese in the 16th century and later fortified by the Dutch, the fort showcases cobblestone streets, colonial buildings, and charming boutiques. Visit the National Maritime Museum to learn about the area’s maritime history and the Galle Lighthouse for panoramic views of the Indian Ocean. As you wander through the fort, you can enjoy local cuisine at waterfront cafes, making it a perfect spot for history buffs and food lovers alike."
                                })}
                            />
                            <LocationCard
                                image={hikkaduwaHarbour}
                                title="Hikkaduwa Heritage"
                                description="Experience the local culture and heritage while enjoying the scenic beaches."
                                onExploreMore={() => handleExploreMore({
                                    title: "Hikkaduwa Heritage",
                                    details: "Hikkaduwa Heritage is a vibrant beach destination that offers a perfect combination of relaxation and cultural immersion. Known for its stunning coral reefs, Hikkaduwa is a haven for snorkeling and diving enthusiasts who wish to explore the rich marine biodiversity. The local craft markets showcase traditional Sri Lankan handicrafts, allowing you to take home unique souvenirs. In addition to water sports, visitors can enjoy beachside yoga sessions or partake in local cooking classes to learn about Sri Lankan cuisine. The town also hosts lively nightlife with beachfront bars and restaurants that offer a taste of local flavors."
                                })}
                            />

                        </CardContainer>
                    </Category>
                </Categories>

                {/* Displaying selected location details */}
                {selectedLocation && (
                    <DetailsContainer ref={detailsRef}>
                        <h2>{selectedLocation.title}</h2>
                        <p>{selectedLocation.details}</p>
                        <CloseButton onClick={handleCloseDetails}>Close</CloseButton>z
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