import styled, { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid green;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;


