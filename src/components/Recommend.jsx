import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import destination1 from "../assets/destination1.jpg";
import destination2 from "../assets/destination2.jpg";
import destination3 from "../assets/destination3.jpg";
import destination4 from "../assets/destination4.jpg";
import destination5 from "../assets/destination5.jpg";

export default function Recommend() {
  const navigate = useNavigate(); // Initialize useNavigate

  const data = [
    {
      image: destination1,
      title: "Oceanic Horizons and Coastal Charms",
      description: "Immerse yourself in the beauty of tranquil coastal views and exhilarating ocean activities.",
      link: "/oceans", // Add a link for the Oceans component
    },
    {
      image: destination2,
      title: "Timeless Trails and Extremely Sacred Paths",
      description: "Journey through historical landmarks and sacred sites, experiencing cultural heritage and spiritual significance.",
      link: "/historical",
    },
    {
      image: destination3,
      title: "Emerald Highlands and Scenic Vistas",
      description: "Discover the breathtaking beauty of Sri Lanka's highlands and tea plantations.",
      link: "/emerald",
    },
    {
      image: destination4,
      title: "Wilderness Safaris and Thrill Quests",
      description: "Experience thrilling safaris and adventure sports in Sri Lanka's wilderness.",
      link: "/safaris",
    },
    {
      image: destination5,
      title: "Serene Sanctuaries and Wellness Retreats",
      description: "Find your inner peace in wellness retreats nestled amidst breathtaking natural landscapes.",
      link: "/wellness",
    },
  ];

  return (
      <Section id="recommend">
        <div className="title">
          <h2>Discover Sri Lanka’s Finest Destinations</h2>
          <h4>From coastal escapes to wildlife adventures, explore curated experiences in Sri Lanka</h4>
        </div>
        <div className="destinations">
          {data.map((destination, index) => (
              <div className="destination" key={index}>
                <img src={destination.image} alt={destination.title} />
                <div className="overlay">
                  <h3>{destination.title}</h3>
                  <p>{destination.description}</p>
                  <button
                      className="view-details"
                      onClick={() => {
                        // Navigate to the corresponding link if provided
                        if (destination.link) {
                          navigate(destination.link);
                        }
                      }}
                  >
                    View Details
                  </button>
                </div>
              </div>
          ))}
        </div>
      </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  background-color: #f8f9fa; /* Light background for contrast */

  .title {
    text-align: center;
    animation: fadeIn 1.5s forwards;

    h2 {
      font-family: "Oswald", sans-serif;
      font-weight: 600;
      font-size: 50px;
      color: #333; /* Darker text color */
    }

    h4 {
      font-size: 18px;
      margin-top: 0.5rem;
      color: #666;
    }
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin: 0 20px;
    animation: slideIn 2s forwards;
  }

  .destination {
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    height: 450px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    animation: cardFadeIn 0.8s ease-in-out forwards;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease, opacity 0.5s ease;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.5s ease;

      h3 {
        color: #ffdd57; /* Bright color for title */
        font-size: 1.5rem;
        text-align: center;
        font-weight: bold;
      }

      p {
        color: #ffffff; /* White text for better readability */
        font-size: 1rem;
        text-align: center;
        margin: 10px 0;
      }

      .view-details {
        padding: 10px 20px;
        background-color: #326ddb;
        color: #fff;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 600;
        transition: background-color 0.3s ease;
        border-radius: 10px;

        &:hover {
          background-color: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
        }
      }
    }

    &:hover .overlay {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1200px) {
    .destinations {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .destinations {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 480px) {
    .destinations {
      grid-template-columns: 1fr;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
