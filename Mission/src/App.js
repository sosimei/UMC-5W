import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import PopularPage from './components/PopularPage';
import NowPlayingPage from './components/NowPlayingPage';
import TopRatedPage from './components/TopRatedPage';
import UpComingPage from './components/UpComing';
import MovieDetailPage from './components/MovieDetailPage';
import SignupPage from './components/SingupPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComingPage />} />
        <Route path="/movie/:title" element={<MovieDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
