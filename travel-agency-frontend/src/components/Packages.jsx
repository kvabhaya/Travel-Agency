// import React from "react";
// import styled from "styled-components";
// export default function Packages() {
//     return (
//         <Section id="packages">
//             <div className="title">
//                 <h2>Packages</h2>
//             </div>
//
//         </Section>
//     );
// }
//
// const Section = styled.section`
//   margin: 5rem 0;
//   .title {
//     text-align: center;
//     margin-bottom: 2rem;
//   }
//
//   @media screen and (min-width: 280px) and (max-width: 768px) {
//     .packages {
//       flex-direction: column;
//       margin: 0;
//
//     }
//   }
// `;
import React, { useState } from "react";
import styled from "styled-components";

export default function Packages() {
    const packages = [
        {
            title: "The Weekend Break",
            description: "A short weekend getaway to refresh yourself.",
        },
        {
            title: "The Package Holiday",
            description: "A complete holiday package with everything included.",
        },
        {
            title: "The Group Tour",
            description: "A fun-filled tour with a group of people to enjoy with.",
        },
        {
            title: "Long Term Slow Travel",
            description: "Enjoy a relaxed, long-term travel experience at your own pace.",
        },
    ];

    const [active, setActive] = useState(1);

    return (
        <Section id="packages">
            <div className="title">
                <h2>Packages</h2>
            </div>
            <div className="packages">
                {packages.map((pkg, index) => (
                    <div
                        className={`package ${active === index + 1 ? "active" : ""}`}
                        key={index}
                        onClick={() => setActive(index + 1)}
                    >
                        <h3>{pkg.title}</h3>
                        <p>{pkg.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

const Section = styled.section`
  padding: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .packages {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .package {
      padding: 2rem;
      background-color: aliceblue;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      h3 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        color: #555;
      }
    }
    .active {
      border: 2px solid #8338ec;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
