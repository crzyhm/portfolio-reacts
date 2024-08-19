// Projects.js
import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const Projects = () => (
  <div id='project' className="w-full h-screen p-0">
    <div className="grid grid-cols-12 gap-6 w-full h-full p-12">
      <a className="text-xl font-bold text-gray-800 col-span-12 flex justify-start">Projects</a>

      {/* Kolom 1 (8 kolom, 6 baris) dengan Skeleton Loader */}
      <div className="skeleton-box col-span-8 row-span-6 bg-blue-100 flex items-center justify-center">
        <SkeletonLoader />
      </div>

      {/* Kolom 2 (4 kolom, 3 baris) */}
      <div className="skeleton-box col-span-4 row-span-3 bg-red-100 flex items-center justify-center text-2xl font-bold">
        <SkeletonLoader />
      </div>

      {/* Kolom 3 (4 kolom, 3 baris) */}
      <div className="skeleton-box col-span-4 row-span-3 bg-green-100 flex items-center justify-center text-2xl font-bold">
        <SkeletonLoader />
      </div>

      {/* Kolom 4 (6 kolom, 3 baris) */}
      <div className="skeleton-box col-span-6 row-span-2 bg-yellow-100 flex items-center justify-center text-2xl font-bold">
        <SkeletonLoader />
      </div>

      {/* Kolom 5 (6 kolom, 3 baris) */}
      <div className="skeleton-box col-span-6 row-span-2 bg-purple-100 flex items-center justify-center text-2xl font-bold">
        <SkeletonLoader />
      </div>
    </div>
  </div>
);

export default Projects;
