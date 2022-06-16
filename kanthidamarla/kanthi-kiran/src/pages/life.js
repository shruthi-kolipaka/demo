import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

// const GridStyle = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//   grid-gap: 10rem;
//   grid-auto-rows: 300px auto auto;
// `;
// const picsStyle = styled.div`
//   display: grid;
//   @supports not (grid-template-rows: subgrid) {
//     grid-template-rows: 1fr auto auto;
//   }
//   grid-template-rows: subgrid;
//   grid-row: span 3;
//   grid-gap: 1rem;
//   h3,
//   p {
//     margin: 0;
//   }
// `;

export default function Lifes({ data }) {
  const life = data.Life.nodes;
  return (
    <div className="row">
      {life.map((lif) => (
        <div className="col-lg-4">
          <Img fluid={lif.image.asset.fluid} />
          <h3>{lif.name}</h3>
          <p>{lif.description}</p>
        </div>
      ))}
    </div>
  );
}

export const query = graphql`
  query {
    Life: allSanityLife {
      nodes {
        id
        description
        name
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
