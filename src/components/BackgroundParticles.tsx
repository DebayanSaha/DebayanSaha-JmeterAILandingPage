import React from 'react';

export function BackgroundParticles() {
  const particles = Array.from({ length: 50 }, () => ({
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
    size: `${Math.random() * 8 + 2}px`,
    duration: `${Math.random() * 10 + 5}s`,
  }));

  return (
    <div className="background-animation">
      <div className="wave-background"></div>
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `float ${p.duration}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}