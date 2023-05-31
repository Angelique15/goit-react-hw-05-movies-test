import styled from 'styled-components';

export const CastContainer = styled.div`
  text-align: center;
`;

export const CastTitle = styled.h2`
  color: #333;
  cursor: Pointer;

  &:hover {
    color: #c66c6c
  }
`;

export const CastList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastItem = styled.li`
  margin: 10px;
  text-align: center;
`;

export const CastImage = styled.img`
  width: 200px;
  height: auto;
  margin: 30px;
`;
