import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation'; 
import Loader from './Loader';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const Home = React.lazy(() => import('./Home'));
const Movies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const App = () => {
  useEffect(() => {
    const lightbox = new SimpleLightbox('.movie-link');
    lightbox.on('show.simplelightbox', () => {
      document.body.style.overflow = 'hidden';
    });
    lightbox.on('closed.simplelightbox', () => {
      document.body.style.overflow = 'auto';
    });
  }, []);

  return (
    <Router>
      <Navigation /> {/* Agregar el componente Navigation */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;







