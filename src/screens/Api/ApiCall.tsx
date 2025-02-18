import { gql } from '@apollo/client';

export const Get_Location = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
<<<<<<< HEAD
=======
      userrid
>>>>>>> 2b3083ae84e00fa9345e3c28d8227ff742f3f234
    }
  }
`;
