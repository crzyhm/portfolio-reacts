import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/Herosection';
import IconBoxes from './component/IconBoxes';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IconBoxes />
      <Project />
      {/* Konten lainnya */}
    </div>
  );
}

export default App;
