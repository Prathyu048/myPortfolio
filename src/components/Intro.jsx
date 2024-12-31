import React from 'react'

const Intro = () => {
  const navigateToHome = () => {
    window.location.href = '/home.js';
  };
  return (
    <div>
      <div className='bg'></div>
      <div className='mypic'></div>
      <h2 id='hello'>Hello,I'm <span>Prathyusha</span>.</h2>
      <h2 id='frontend'>Frontend web developer.</h2>
      <button id='workbtn' onClick={navigateToHome}>View my work </button>
      
      
    </div>
  )
}


export default Intro
