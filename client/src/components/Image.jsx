import React, { useState, useEffect } from 'react';
import './BackgroundImage.css';

function BackgroundImage({ children }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after 3 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`background-image ${showContent ? 'show-content' : ''}`}>
      {children}
    </div>
  );
}

export default BackgroundImage;
