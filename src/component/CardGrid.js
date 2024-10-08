import React from 'react';
import Card from './Card'; // Import the Card component

const CardGrid = () => {
  return (
    <div className="my-8 p-4 lg:p-8 flex items-center justify-center">
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card
          number="01"
          title="WEBSITE DEVELOPER"
          description="Web development involves creating and maintaining websites and web applications. It combines coding skills with design principles to build user-friendly, functional, and visually appealing online experiences. Effective web development requires proficiency in languages like HTML, CSS, and JavaScript, as well as a keen understanding of user experience and responsive design."
        />
        
        {/* Card 2 */}
        <Card
          number="02"
          title="GRAPHIC DESIGN"
          description="Graphic design involves creating visual content to communicate messages through typography, imagery, color, and layout. It is used in various media including print, digital, and advertising to engage audiences and enhance brand identity. Effective graphic design combines creativity with technical skills to deliver impactful and visually appealing designs."
        />

        {/* Card 3 */}
        <Card
          number="03"
          title="USER EXPERIENCE"
          description="User experience (UX) design focuses on improving the usability, accessibility, and pleasure of interacting with a product. It involves researching and understanding user needs, designing user flows, and testing prototypes to ensure that users have a smooth and enjoyable experience. UX design aims to create products that are not only functional but also intuitive and engaging."
        />
      </div>
    </div>
  );
};

export default CardGrid;
