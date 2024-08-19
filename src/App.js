import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/Herosection';
import IconBoxes from './component/IconBoxes';
import Projects from './component/Project';
import CardGrid from './component/CardGrid';
import Sertifikat from './component/sertifikat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IconBoxes />
      <CardGrid />
      <Projects />
      <Sertifikat/>
      <Navbar />

      {/* Konten lainnya */}
    </div>
  );
}

export default App;
