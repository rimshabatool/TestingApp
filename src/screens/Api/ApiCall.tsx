import { gql } from '@apollo/client';

export const Get_Location = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
      sara data
    }
  }
`;
