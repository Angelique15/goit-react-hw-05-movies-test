import React from 'react';
import { LoaderOverlay, LoaderSpinner } from '../styles/Loader';


const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderSpinner />
    </LoaderOverlay>
  );
};

export default Loader;
