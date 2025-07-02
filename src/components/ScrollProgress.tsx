import React, { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div 
        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-300"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}