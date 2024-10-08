import React from "react";
import styled from "styled-components";
export default function Packages() {
    return (
        <Section id="packages">
            <div className="title">
                <h2>Packages</h2>
            </div>

        </Section>
    );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
    
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      flex-direction: column;
      margin: 0;
      
    }
  }
`;
