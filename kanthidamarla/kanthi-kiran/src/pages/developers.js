import { graphql } from 'gatsby';
import React from 'react';
import NamesList from '../components/NamesList';

export default function developers({ data }) {
  const names = data.Names.nodes;
  return (
    <div>
      <h1>Contact Them For Any Project</h1>
      <NamesList names={names} />
    </div>
  );
}
export const query = graphql`
  query {
    Names: allSanityName {
      nodes {
        name
        id
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
