import React from "react";
import styled from "styled-components";


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
 import Badulla from "../assets/badulla.jpeg";

// Reusable Location Card Component
const LocationCard = ({ image, title, description }) => {
    return (
        <Card>
            <CardImage src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <ExploreNowButton>Explore Now</ExploreNowButton>
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
                            />
                            <LocationCard
                                image={ella}
                                title="Ella"
                                description="Walk through the picturesque Ella tea estates, famous for their scenic vistas and the Nine Arches Bridge."
                            />
                            <LocationCard
                                 image={haputale}
                                title="Haputale"
                                description="Visit Haputale, a serene location known for its panoramic views and surrounding tea estates."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Summit Adventures">
                        <CardContainer>
                            <LocationCard
                                image={hortonPlains}
                                title="Horton Plains"
                                description="Hike across the breathtaking plateau of Horton Plains, leading to the famous World's End drop."
                            />
                            <LocationCard
                                image={adamsPeak}
                                title="Adam's Peak"
                                description="Challenge yourself with a trek up Adam's Peak, a sacred pilgrimage site offering spectacular sunrise views."
                            />
                            <LocationCard
                                 image={ellaRock}
                                title="Ella Rock"
                                description="Conquer the Ella Rock trail and enjoy panoramic views of the surrounding valleys and mountains."
                            />
                            <LocationCard
                                 image={knucklesRange}
                                title="Knuckles Range"
                                description="Explore the rugged Knuckles Range, a UNESCO World Heritage site known for its biodiversity and hiking trails."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Cascade Spectacles">
                        <CardContainer>
                            <LocationCard
                                 image={ravanaFalls}
                                title="Ravana Falls"
                                description="Marvel at the cascading beauty of Ravana Falls, one of the most popular and picturesque waterfalls in Ella."
                            />
                            <LocationCard
                                 image={diyalumaFalls}
                                title="Diyaluma Falls"
                                description="Visit the majestic Diyaluma Falls, Sri Lanka's second-highest waterfall, offering stunning views and natural pools."
                            />
                            <LocationCard
                                image={bambarakandaFalls}
                                title="Bambarakanda Falls"
                                description="Witness the towering Bambarakanda Falls, Sri Lanka's tallest waterfall, nestled within lush greenery."
                            />
                        </CardContainer>
                    </Category>

                    <Category title="Train of Tranquility">
                        <CardContainer>
                            <LocationCard
                                 image={kandyToEllaTrain}
                                title="Kandy to Ella"
                                description="Take the scenic train ride from Kandy to Ella, a journey through misty mountains, lush tea estates, and iconic bridges."
                            />
                            <LocationCard
                                image={Badulla}
                                title="Badulla to Colombo"
                                description="Experience the scenic ride from Badulla to Colombo, passing through lush forests and rolling hills."
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
    background: linear-gradient(to bottom, #e0ffe0, #256725);
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

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 36px;
    color: #34495e;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.7;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
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

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1;

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
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #219150;
    }
`;
