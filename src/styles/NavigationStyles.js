import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #cfbfbf;
  box-shadow:  15px 15px 30px #c0a7a7,
             -15px -15px 30px #ffe3e3;
`;

export const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 5px;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #c66c6c;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #b54f4f;
    }
  }

  ${({ active }) => active && `
    a {
      color: #b54f4f;
    }
  `}
`;




