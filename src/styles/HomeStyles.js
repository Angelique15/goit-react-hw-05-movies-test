import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  margin: 50px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #b54f4f;
`;

export const SearchForm = styled.form`
  margin-top: 20px;
`;



export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin: 30px;
  text-align: center;
  width: 200px;
`;

export const MovieLink = styled(Link)`
  color: #666;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

export const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${scaleAnimation} 0.3s forwards;
  }
`;


