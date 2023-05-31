import styled from 'styled-components';

export const ReviewsContainer = styled.div`
 margin: 80px auto;
  text-align: left;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 80px;
`;

export const ReviewsTitle = styled.h2`
text-align: center;
cursor: pointer;
&:hover {
    color: #b54f4f;
  }

`;


export const ReviewAuthor = styled.a`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  text-align: left;
`;

