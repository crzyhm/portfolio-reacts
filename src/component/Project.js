import React from 'react';

const IconBoxes = () => {
  return (
    <div className="w-full h-screen p-0">
       
      {/* Grid container utama 12 columns */}
      <div className="grid grid-cols-12 gap-6 w-full h-full p-12">
      <h1 className='col-span-12'>Project</h1>
        {/* Kolom 1 (6 kolom, 6 baris) */}
        <div className="col-span-8 row-span-6 bg-blue-100 flex items-center justify-center text-2xl font-bold">
          <p className="text-center">Content 1</p>
        </div>
        
        {/* Kolom 2 (4 kolom, 3 baris) */}
        <div className="col-span-4 row-span-3 bg-red-100 flex items-center justify-center text-2xl font-bold">
          <p className="text-center">Content 2</p>
        </div>
        
        {/* Kolom 3 (4 kolom, 3 baris) */}
        <div className="col-span-4 row-span-3 bg-green-100 flex items-center justify-center text-2xl font-bold">
          <p className="text-center">Content 3</p>
        </div>
        
        {/* Kolom 4 (5 kolom, 3 baris) */}
        <div className="col-span-6 row-span-3 bg-yellow-100 flex items-center justify-center text-2xl font-bold">
          <p className="text-center">Content 4</p>
        </div>
        
        {/* Kolom 5 (5 kolom, 3 baris) */}
        <div className="col-span-6 row-span-3 bg-purple-100 flex items-center justify-center text-2xl font-bold">
          <p className="text-center">Content 5</p>
        </div>
        
      </div>
    </div>
  );
};

export default IconBoxes;
