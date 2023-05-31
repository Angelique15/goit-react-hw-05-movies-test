import styled from 'styled-components';

export const MoviesContainer = styled.div`
  margin-left: 200px;
  max-width: 500px;
  margin-top: 30px;
`;

export const MoviesTitle = styled.h2`
color: #b54f4f;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const SearchForm = styled.form`
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
width: 70%;
font-size: 16px;
  font-size: max(16px, 1em);
  padding: 5px;
  margin-right: 10px;
  outline: none;
  background-color: #cfbfbf;
  caret-color: #f7f7f8;
  color: #fff;
  padding: 7px 10px;
  border: 2px solid transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.16);
  }

  &:focus {
    border: 2px solid #e5c2c2;
    background-color: #e5cdcd;
  }
`;

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #e5c2c2;
  color: #b54f4f;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 35px;
`;

export const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .movie-image {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }

  .movie-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .movie-overview {
    display: none;
  }

  a.expanded {
    .movie-overview {
      display: block;
      margin-top: 5px;
    }
  }
`;




