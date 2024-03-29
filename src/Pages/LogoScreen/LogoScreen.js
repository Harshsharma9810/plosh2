import React, { useState, useEffect } from 'react';
import plosh from "../../components/Images/plosh.png"

function LogoSplashScreen() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      // Redirect to the root URL after 2 seconds
      window.location.href = '/'; // Adjust the URL if your root URL is different
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: showLogo ? 'block' : 'none' }}>
      {/* Your logo image */}
      <img src={plosh} alt="Logo" />
    </div>
  );
}

export default LogoSplashScreen;


