import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
          "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle:
          "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
          "Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
          "Find the best hotels and places to visit near you in a single click.",
    },
  ];

  return (
      <Section id="services">
        <div className="title">
          <h2>Services</h2>
          <p>Explore services that cater to your travel needs and make every journey memorable.</p>
        </div>
        <div className="services-grid">
          {data.map((service, index) => (
              <div className="service" key={index}>
                <div className="icon">
                  <img src={service.icon} alt="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.subTitle}</p>
              </div>
          ))}
        </div>
      </Section>
  );
}

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #f0f0f0;

  .title {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: #2d4059;
    }

    p {
      font-size: 1.2rem;
      color: #6a7f9a;
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    justify-content: center;

    @media screen and (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .service {
    padding: 2rem;
    background-color: #bdc3c7;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      transform: translateY(-0.5rem);
      background-color: #c1d5df;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;

      .icon img {
        filter: brightness(0.8);
      }
    }


    .icon img {
      height: 4rem;
      margin-bottom: 1rem;
      
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
      color: #2d4059;
    }

    p {
      font-size: 1rem;
      color: #000000;
    }
  }
`;
