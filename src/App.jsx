import React, { useState, useEffect } from 'react'
import CardGallery from './CardGallery'

function App() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
        <h1>Family NFT Cards</h1>
      </header>
      <main className="app-content">
        <CardGallery />
      </main>
    </div>
  )
}

export default App