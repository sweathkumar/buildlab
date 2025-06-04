import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import OverviewPage from './components/OverviewPage';
import UpcomingPage from './components/UpcomingPage';
import SocialPage from './components/SocialPage';
import AboutPage from './components/AboutPage';
import ChatSection from './components/ChatSection';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setPage] = useState('home');
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return <ChatSection setShowChat={setShowChat} />;
  }

  return (
    <div>
      <Navbar setPage={setPage} currentPage={currentPage} setShowChat={setShowChat} />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'overview' && <OverviewPage />}
      {currentPage === 'upcoming' && <UpcomingPage />}
      {currentPage === 'social' && <SocialPage />}
      {currentPage === 'about' && <AboutPage />}
      <Footer />
    </div>
  );
};

export default App;