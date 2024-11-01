import React, { useRef, useState } from "react";
import styled from "styled-components";

// Importing images for each location
import nuwaraEliya from "../assets/nuwaraEliyas.webp";
import ella from "../assets/ella.webp";
import haputale from "../assets/haputale.webp";
import hortonPlains from "../assets/hortan.jpeg";
import adamsPeak from "../assets/adams.jpeg";
import ellaRock from "../assets/ellarock.jpeg";
import knucklesRange from "../assets/knuckles.webp";
import ravanaFalls from "../assets/ravana.jpeg";
import diyalumaFalls from "../assets/diyaluma.jpeg";
import bambarakandaFalls from "../assets/bambarakanda.jpeg";
import kandyToEllaTrain from "../assets/kandy to ella.jpeg";
import matara from "../assets/matara.jpeg";

// Reusable Location Card Component
const LocationCard = ({ image, title, description, onExploreMore }) => {
    return (
        <Card>
            <CardImage src={image} alt={title} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <ExploreNowButton onClick={onExploreMore}>Explore More</ExploreNowButton>
        </Card>
    );
};

// Reusable Category Component
const Category = ({ title, children }) => {
    return (
        <CategoryContainer>
            <CategoryTitle>{title}</CategoryTitle>
            {children}
        </CategoryContainer>
    );
};

export default function EmeraldHighlands() {
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
        <Section id="emerald-highlands">
            <Content>
                <h1>Discover the Wonders of Sri Lanka's Highlands</h1>
                <h2>Emerald Highlands & Scenic Vistas</h2>
                <p>
                    Embark on an unforgettable journey through Sri Lanka’s breathtaking
                    highlands, where lush tea plantations, misty mountains, cascading
                    waterfalls, and serene train rides offer a peaceful retreat amidst
                    nature’s beauty.
                </p>

                <Categories>
                    <Category title="Tea Leaf Trails">
                        <CardContainer>
                            <LocationCard
                                image={nuwaraEliya}
                                title="Nuwara Eliya"
                                description="Explore the rolling tea plantations of Nuwara Eliya, known for its cool climate and colonial charm."
                                onExploreMore={() => handleExploreMore({
                                    title: "Nuwara Eliya",
                                    details: "Nuwara Eliya, often referred to as 'Little England,' is a picturesque town nestled in the heart of Sri Lanka's hill country. Renowned for its cool climate, lush tea plantations, and stunning landscapes, it serves as a popular retreat for both locals and tourists. Visitors can enjoy a stroll around Lake Gregory, explore the vibrant local markets, and visit the historic Colonial-era buildings that dot the town. The surrounding tea estates offer guided tours where you can learn about tea production and sample some of the finest Ceylon tea. Don’t miss the opportunity to visit the iconic Pedro Tea Estate and enjoy breathtaking views from the Hakgala Botanical Gardens."
                                })}
                            />
                            <LocationCard
                                image={ella}
                                title="Ella"
                                description="Walk through the picturesque Ella tea estates, famous for their scenic vistas and the Nine Arches Bridge."
                                onExploreMore={() => handleExploreMore({
                                    title: "Ella",
                                    details: "Ella is a charming town known for its stunning natural beauty and laid-back atmosphere. Surrounded by lush green hills and tea plantations, it is a hiker's paradise with popular trails like Little Adam's Peak and the challenging Ella Rock, both offering breathtaking panoramic views. The iconic Nine Arches Bridge, a marvel of engineering, is a must-see, often featured in photographs for its stunning architecture amidst the greenery. Ella also boasts waterfalls such as Ravana Falls, where visitors can take a refreshing dip. The vibrant local markets and cozy cafes add to the town's charm, making it a perfect spot for relaxation and exploration."
                                })}
                            />
                            <LocationCard
                                image={haputale}
                                title="Haputale"
                                description="Visit Haputale, a serene location known for its panoramic views and surrounding tea estates."
                                onExploreMore={() => handleExploreMore({
                                    title: "Haputale",
                                    details: "Haputale is a tranquil town perched high in the hills, offering some of the most breathtaking views in Sri Lanka. The town serves as an excellent base for exploring the surrounding tea estates, where visitors can enjoy guided tours and learn about tea production processes. A highlight of Haputale is the Lipton’s Seat, a viewpoint established by Sir Thomas Lipton, offering a stunning panoramic view of the lush valleys and tea plantations below. The area is also home to the serene Dambatenne Tea Factory, where visitors can sample exquisite Ceylon tea. Haputale's cool climate and peaceful environment make it an ideal destination for those looking to escape the hustle and bustle of city life."
                                })}
                            />

                        </CardContainer>
                    </Category>

                    <Category title="Summit Adventures">
                        <CardContainer>
                            <LocationCard
                                image={hortonPlains}
                                title="Horton Plains"
                                description="Hike across the breathtaking plateau of Horton Plains, leading to the famous World's End drop."
                                onExploreMore={() => handleExploreMore({
                                    title: "Horton Plains",
                                    details: "Horton Plains National Park is a stunning highland plateau, home to a variety of flora and fauna. The trek to World's End offers breathtaking views of the steep cliffs plunging into the valley below, especially at sunrise. The park features unique ecosystems, including montane forests and grasslands, making it a biodiversity hotspot. Along the way, you can explore the beautiful Baker's Falls and the tranquil Nature Trails, ideal for birdwatching and enjoying the rich natural scenery."
                                })}
                            />
                            <LocationCard
                                image={adamsPeak}
                                title="Adam's Peak"
                                description="Challenge yourself with a trek up Adam's Peak, a sacred pilgrimage site offering spectacular sunrise views."
                                onExploreMore={() => handleExploreMore({
                                    title: "Adam's Peak",
                                    details: "Adam's Peak (Sri Pada) is a revered pilgrimage site for multiple religions, featuring a prominent footprint at its summit. The trek is an invigorating experience, typically undertaken at night to reach the summit by dawn for spectacular sunrise views over the surrounding hills and valleys. The route is lined with shrines and resting points, where pilgrims share stories and traditions. The landscape varies from lush rainforests to rocky outcrops, making this hike both a spiritual journey and a visual feast."
                                })}
                            />
                            <LocationCard
                                image={ellaRock}
                                title="Ella Rock"
                                description="Conquer the Ella Rock trail and enjoy panoramic views of the surrounding valleys and mountains."
                                onExploreMore={() => handleExploreMore({
                                    title: "Ella Rock",
                                    details: "Ella Rock is a popular hiking destination known for its stunning views and natural beauty. The trail takes you through tea plantations and dense forests, culminating in breathtaking panoramas of the Ella Gap and surrounding hills. The hike can be challenging, but the rewarding views at the summit make it worthwhile. Along the way, keep an eye out for diverse wildlife and vibrant local flora. It’s also a great opportunity to explore the nearby village of Ella, famous for its laid-back atmosphere and welcoming community."
                                })}
                            />
                            <LocationCard
                                image={knucklesRange}
                                title="Knuckles Range"
                                description="Explore the rugged Knuckles Range, a UNESCO World Heritage site known for its biodiversity and hiking trails."
                                onExploreMore={() => handleExploreMore({
                                    title: "Knuckles Range",
                                    details: "The Knuckles Range is a UNESCO World Heritage site that boasts stunning landscapes and rich biodiversity. The hiking trails vary in difficulty, offering options for both novice and experienced hikers. The area is famous for its unique ecosystems, where you can encounter rare flora and fauna, including endemic species. The scenic views from the peaks, lush green valleys, and cascading waterfalls provide a stunning backdrop for exploration. The range is also culturally significant, with traditional villages and local customs that add to the adventure."
                                })}
                            />
                        </CardContainer>
                    </Category>


                    <Category title="Cascade Spectacles">
                        <CardContainer>
                            <LocationCard
                                image={ravanaFalls}
                                title="Ravana Falls"
                                description="Marvel at the cascading beauty of Ravana Falls, one of the most popular and picturesque waterfalls in Ella."
                                onExploreMore={() => handleExploreMore({
                                    title: "Ravana Falls",
                                    details: "Ravana Falls is a stunning waterfall located near Ella, renowned for its enchanting beauty and rich legends. The waterfall cascades over rocks into a natural pool, making it a popular spot for photography and relaxation. Surrounded by lush greenery, this site is not only visually appealing but also steeped in local folklore, believed to be linked to the epic Ramayana. Visitors can enjoy swimming in the pools or simply take in the serene atmosphere while hiking through the surrounding trails."
                                })}
                            />
                            <LocationCard
                                image={diyalumaFalls}
                                title="Diyaluma Falls"
                                description="Visit the majestic Diyaluma Falls, Sri Lanka's second-highest waterfall, offering stunning views and natural pools."
                                onExploreMore={() => handleExploreMore({
                                    title: "Diyaluma Falls",
                                    details: "Diyaluma Falls is an awe-inspiring natural wonder, plunging down 220 meters, making it the second-highest waterfall in Sri Lanka. The cascading water forms natural pools at its base, perfect for a refreshing swim. The surrounding landscape offers breathtaking views, especially from the top of the falls, which can be accessed via a short hike. Diyaluma is also a great spot for adventure seekers, with opportunities for cliff diving and enjoying the surrounding hiking trails. The serene atmosphere combined with the natural beauty makes it a must-visit destination."
                                })}
                            />
                            <LocationCard
                                image={bambarakandaFalls}
                                title="Bambarakanda Falls"
                                description="Witness the towering Bambarakanda Falls, Sri Lanka's tallest waterfall, nestled within lush greenery."
                                onExploreMore={() => handleExploreMore({
                                    title: "Bambarakanda Falls",
                                    details: "Bambarakanda Falls stands as the tallest waterfall in Sri Lanka, cascading down a height of 263 meters. Nestled in the heart of the Badulla district, this majestic waterfall is surrounded by dense forests and tea plantations, providing a stunning backdrop for nature lovers. The falls can be accessed via a scenic trek, offering various viewpoints along the way. The area is rich in biodiversity, making it an excellent spot for birdwatching and exploring the local flora. Visitors can enjoy the cool mist and tranquil ambiance, making it a perfect getaway for relaxation and adventure."
                                })}
                            />
                        </CardContainer>
                    </Category>


                    <Category title="Train of Tranquility">
                        <CardContainer>
                            <LocationCard
                                image={kandyToEllaTrain}
                                title="Kandy to Ella"
                                description="Take the scenic train ride from Kandy to Ella, a journey through misty mountains, lush tea estates, and iconic bridges."
                                onExploreMore={() => handleExploreMore({
                                    title: "Kandy to Ella Train",
                                    details: "Embark on one of the most picturesque train journeys in the world, traveling from Kandy to Ella. This 7-hour ride winds through the heart of Sri Lanka's tea country, where you can enjoy stunning views of rolling hills covered in vibrant green tea plantations. The train passes through quaint villages, cascading waterfalls, and iconic landmarks such as the Nine Arches Bridge. As you relax in the vintage coaches, you'll be treated to a blend of natural beauty and local culture, making this experience a highlight of any trip to Sri Lanka. Be sure to capture the breathtaking scenery as you traverse misty mountains and lush valleys."
                                })}
                            />
                            <LocationCard
                                image={matara}
                                title="Beliatta to Colombo"
                                description="Journey through Sri Lanka's stunning landscapes from Beliatta to Colombo, featuring coastal views, historic towns, and vibrant local culture."
                                onExploreMore={() => handleExploreMore({
                                    title: "Beliatta to Colombo",
                                    details: "Experience the enchanting train ride from Beliatta to Colombo, where the journey is as delightful as the destination. This route offers breathtaking views of the Indian Ocean, charming coastal towns, and glimpses of local life. Along the way, you'll pass through historical sites, such as ancient temples and colonial architecture, reflecting Sri Lanka's rich heritage. The train travels through picturesque landscapes, including lush fields and palm-fringed beaches, providing an immersive experience of the country's diverse scenery. Whether you're a local or a tourist, this journey promises to be a memorable exploration of Sri Lanka’s vibrant culture and natural beauty."
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
    background: linear-gradient(to bottom, #e0ffe0, #256725);
    animation: fadeIn 1s ease-in-out;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative; /* Enable absolute positioning for child elements */

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;
const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ExploreNowButton = styled.button`
    background: #46d984;
    color: #fff;
    padding: 0.5rem 1rem;
    width:250px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%); /* Center the button horizontally */

    &:hover {
        background: #219150;
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

