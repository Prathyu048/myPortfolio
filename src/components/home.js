import React from 'react';
import '../App.css';

// Home Component
function Home() {
  const navigateToAbout = () => {
    window.location.href = '/about.js';
  };

  return (
    <section id="home">
      <div className='homecontent'>
        <div className='bg'></div>
        <div className='mypic'></div>
        <div className='intro'>
          <h2 id='hello'>Hello, I'm <span>Prathyusha</span>.</h2>
          <h2 id='frontend'>Web Developer.</h2>
          <button id='workbtn' onClick={navigateToAbout}>View my work </button>
        </div>
      </div>
    </section>
  );
}
export default Home;