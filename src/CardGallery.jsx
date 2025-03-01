import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';

// Family card data
const cardsData = [
  {
    id: 1,
    name: "Mom",
    type: "Pink Diamond",
    color: "#ff69b4",
    message: "As precious and brilliant as a diamond, your love shapes our family with strength and beauty. Your care and dedication shine in everything you do."
  },
  {
    id: 2,
    name: "Dad",
    type: "Blue Sapphire",
    color: "#0074D9",
    message: "Steadfast and true like a sapphire, you provide wisdom and support that guides our family. Your patience and kindness are our foundation."
  },
  {
    id: 3,
    name: "Zelda",
    type: "Golden Bone",
    color: "#FFD700",
    message: "The most loyal friend and protector, always ready with wagging tail and loving eyes. You bring joy and endless cuddles to our home."
  },
  {
    id: 4,
    name: "Kaia",
    type: "Rainbow Cupcake",
    color: "#FF4081",
    message: "Sweet as a cupcake and colorful as a rainbow, your laughter and creativity brighten our days. You're a wonderful blend of imagination and joy."
  },
  {
    id: 5,
    name: "Aila",
    type: "Crystal Star",
    color: "#9C27B0",
    message: "Shining like a star with your unique sparkle, you light up every room with your spirit. Your kindness and curiosity make you truly special."
  },
  {
    id: 6,
    name: "Gram",
    type: "Silver Heart",
    color: "#9E9E9E",
    message: "Your heart of silver holds endless love and wisdom. Your stories and traditions create a legacy that connects our family through generations."
  },
  {
    id: 7,
    name: "Grandma",
    type: "Emerald Cookie",
    color: "#4CAF50",
    message: "Warm as freshly baked cookies and precious as an emerald, your love and care nourish our souls. Your kitchen is the heart of our family gatherings."
  },
  {
    id: 8,
    name: "Grampsie",
    type: "Golden Watch",
    color: "#FFC107",
    message: "Like your golden watch, you're timeless and reliable. Your wisdom, stories, and gentle guidance help us navigate life's journey."
  },
  {
    id: 9,
    name: "Tia",
    type: "Purple Amethyst",
    color: "#673AB7",
    message: "Rare and beautiful like an amethyst, you bring wisdom and calm to our family. Your thoughtful advice and loving support mean the world to us."
  },
  {
    id: 10,
    name: "Auntie Lolo",
    type: "Teal Seashell",
    color: "#009688",
    message: "Unique and beautiful like a perfect seashell, you bring adventure and joy to our lives. Your laughter and free spirit inspire us all."
  },
  {
    id: 11,
    name: "Uncle Mike",
    type: "Red Ruby",
    color: "#F44336",
    message: "Strong and vibrant like a ruby, your passion for life and family shines through. Your jokes and stories make our gatherings memorable."
  },
  {
    id: 12,
    name: "Tommy",
    type: "Soccer Ball",
    color: "#2196F3",
    message: "Always on the move like your soccer ball, your energy and enthusiasm are contagious. Your playful spirit brings so much happiness to us all."
  },
  {
    id: 13,
    name: "Ronan",
    type: "Football",
    color: "#795548",
    message: "Brave and determined like a true athlete, you tackle challenges with courage. Your kind heart and team spirit make you an amazing cousin."
  },
  {
    id: 14,
    name: "Lincoln",
    type: "Basketball",
    color: "#FF5722",
    message: "You aim high like a basketball star! Your clever ideas and bright smile light up our family gatherings. We love watching you grow and learn."
  }
];

// Generate reliable canvas illustrations that work on all devices including iOS
const generateCardImage = (name, type, color) => {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  
  // Background - dark gradient
  const gradient = ctx.createLinearGradient(0, 0, 200, 200);
  gradient.addColorStop(0, '#1a1a2e');
  gradient.addColorStop(1, '#16213e');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 200, 200);
  
  // Draw shape based on type
  ctx.fillStyle = color;
  
  if (type.includes('Diamond') || type.includes('Gem') || type.includes('Ruby') || type.includes('Sapphire') || type.includes('Amethyst')) {
    // Diamond shape
    ctx.beginPath();
    ctx.moveTo(100, 40);
    ctx.lineTo(140, 100);
    ctx.lineTo(100, 160);
    ctx.lineTo(60, 100);
    ctx.closePath();
    ctx.fill();
    
    // Highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.moveTo(100, 40);
    ctx.lineTo(140, 100);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.fill();
  } 
  else if (type.includes('Ball') || type.includes('Cookie') || type.includes('Heart')) {
    // Circle or ball
    ctx.beginPath();
    ctx.arc(100, 100, 60, 0, Math.PI * 2);
    ctx.fill();
    
    // Details for sports balls
    if (type.includes('Soccer')) {
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(100, 70, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(70, 110, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(130, 110, 15, 0, Math.PI * 2);
      ctx.fill();
    } else if (type.includes('Basket')) {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(100, 100, 60, 0, Math.PI * 2);
      ctx.moveTo(40, 100);
      ctx.lineTo(160, 100);
      ctx.stroke();
    }
  }
  else if (type.includes('Bone')) {
    // Bone shape
    ctx.beginPath();
    ctx.moveTo(60, 70);
    ctx.lineTo(70, 60);
    ctx.lineTo(85, 70);
    ctx.lineTo(115, 70);
    ctx.lineTo(130, 60);
    ctx.lineTo(140, 70);
    ctx.lineTo(140, 85);
    ctx.lineTo(130, 95);
    ctx.lineTo(115, 85);
    ctx.lineTo(85, 85);
    ctx.lineTo(70, 95);
    ctx.lineTo(60, 85);
    ctx.closePath();
    ctx.fill();
  }
  else if (type.includes('Star')) {
    // Star shape
    ctx.beginPath();
    const spikes = 5;
    const outerRadius = 60;
    const innerRadius = 30;
    
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / spikes;
      const x = 100 + radius * Math.sin(angle);
      const y = 100 + radius * Math.cos(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.closePath();
    ctx.fill();
  }
  else if (type.includes('Cupcake')) {
    // Cupcake base
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(70, 100, 60, 60);
    
    // Frosting
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(70, 100);
    ctx.quadraticCurveTo(100, 50, 130, 100);
    ctx.closePath();
    ctx.fill();
    
    // Cherry
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(100, 70, 10, 0, Math.PI * 2);
    ctx.fill();
  }
  else if (type.includes('Watch')) {
    // Watch band
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(70, 60, 20, 80);
    ctx.fillRect(110, 60, 20, 80);
    
    // Watch face
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(100, 100, 35, 0, Math.PI * 2);
    ctx.fill();
    
    // Watch details
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI * 2);
    ctx.moveTo(100, 75);
    ctx.lineTo(100, 100);
    ctx.lineTo(115, 100);
    ctx.stroke();
  }
  else if (type.includes('Seashell')) {
    // Seashell shape
    ctx.beginPath();
    ctx.moveTo(60, 140);
    ctx.quadraticCurveTo(100, 60, 140, 140);
    ctx.closePath();
    ctx.fill();
    
    // Shell lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx.moveTo(60 + i * 15, 140);
      ctx.quadraticCurveTo(100, 60 + i * 15, 140 - i * 15, 140);
    }
    ctx.stroke();
  }
  else {
    // Default circle
    ctx.beginPath();
    ctx.arc(100, 100, 60, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Add sparkle effect
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.arc(70, 70, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(130, 80, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1.0;
  
  // Text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, 100, 40);
  
  // Type
  ctx.font = 'italic 16px Arial';
  ctx.fillText(type, 100, 170);
  
  return canvas.toDataURL('image/png');
};

// Particle component for sparkle effects
const Particles = ({ active, color }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth || 300;
    const containerHeight = container.offsetHeight || 400;
    
    // Clear existing particles
    container.innerHTML = '';
    particlesRef.current = [];
    
    // Only create particles if the card is active
    if (active) {
      // Create particles
      for (let i = 0; i < 20; i++) {
        createParticle(container, containerWidth, containerHeight, color);
      }
    }
    
    return () => {
      if (container) {
        container.innerHTML = '';
      }
      particlesRef.current = [];
    };
  }, [active, color]);
  
  const createParticle = (container, width, height, color) => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const x = Math.random() * width;
    const y = Math.random() * height;
    
    // Random size
    const size = Math.random() * 6 + 2;
    
    // Set styles
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color || '#ffffff';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    
    // Add animation
    const duration = Math.random() * 3 + 2;
    particle.style.animation = `float ${duration}s ease-in-out infinite`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(particle);
    particlesRef.current.push(particle);
    
    return particle;
  };
  
  return (
    <div 
      ref={containerRef} 
      className={`particles-container ${active ? 'active' : ''}`}
    ></div>
  );
};

// Card component
const Card3D = ({ name, type, color, isSelected, message }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const [cardImage, setCardImage] = useState('');
  const [{ rotateX, rotateY, scale, opacity }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    opacity: 0,
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  
  useEffect(() => {
    // Generate image for all cards using canvas (works on all devices)
    setCardImage(generateCardImage(name, type, color));
    
    // Fade in the card
    api.start({ opacity: 1 });
    
    // Reset rotation when selection changes
    if (!isSelected) {
      api.start({ rotateX: 0, rotateY: 0, scale: 1 });
    }
  }, [isSelected, api, name, color, type]);
  
  // Set up touch gesture handlers
  const bind = useGesture({
    onDrag: ({ movement: [mx, my], down }) => {
      if (isSelected) {
        api.start({
          rotateY: down ? mx / 5 : 0,
          rotateX: down ? -my / 10 : 0,
          scale: down ? 1.1 : 1
        });
      }
    },
    onMove: ({ xy: [px, py] }) => {
      if (isSelected && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateXValue = ((py - centerY) / 30);
        const rotateYValue = ((px - centerX) / 20);
        
        api.start({
          rotateX: rotateXValue,
          rotateY: rotateYValue
        });
      }
    },
    onClick: () => {
      if (isSelected) {
        setFlipped(state => !state);
      }
    },
    onMouseLeave: () => {
      if (isSelected) {
        api.start({
          rotateX: 0,
          rotateY: 0,
          scale: 1
        });
      }
    }
  });

  return (
    <animated.div
      ref={cardRef}
      className={`card-3d-container ${isSelected ? 'selected' : ''}`}
      style={{
        transform: isSelected 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})` 
          : 'perspective(1000px)',
        opacity
      }}
      {...bind()}
    >
      <div className={`card-3d ${flipped ? 'flipped' : ''}`} style={{ background: `linear-gradient(135deg, ${color}88, ${color}44)` }}>
        <div className="card-front">
          <div className="card-glow" style={{ backgroundColor: color }}></div>
          <Particles color={color} active={isSelected} />
          <div className="card-image-container">
            {cardImage && (
              <img 
                src={cardImage} 
                alt={name} 
                className="card-image" 
              />
            )}
          </div>
          <div className="card-content">
            <h2 className="card-name">{name}</h2>
            <p className="card-type">{type}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-content">
            <h3>For {name}</h3>
            <p className="card-message">{message || "Special NFT Card for a special person."}</p>
            <div className="card-info">
              <p>Type: {type}</p>
              <p>Collection: Family Edition</p>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

// Main gallery component
const CardGallery = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  
  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <div className="gallery-container">
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <motion.div 
            key={card.id} 
            className={`card-wrapper ${selectedCard === index ? 'selected' : ''}`}
            onClick={() => handleCardClick(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5
            }}
            whileHover={{ 
              scale: selectedCard === index ? 1 : 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <Card3D 
              name={card.name} 
              type={card.type}
              color={card.color}
              isSelected={selectedCard === index}
              message={card.message}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardGallery;