import React from 'react';

const Sertifikat = () => (
  <div id='Sertifikat' className="w-full p-0">
    <div className="grid grid-cols-12 gap-6 w-full h-full p-12">
      <a className="text-xl font-bold text-gray-800 col-span-12 flex justify-start">Sertifikat</a>

      {/* Kolom 1 (8 kolom, 6 baris) */}
      <div className="col-span-8 row-span-6 bg-blue-100 flex items-center justify-center">
        <img src="/sertifikat_course_123_2132438_140622092338_page-0001.jpg" alt="Course 123 Certificate" className="object-cover h-full w-full" />
      </div>

      {/* Kolom 2 (4 kolom, 3 baris) */}
      <div className="col-span-4 row-span-3 bg-red-100 flex items-center justify-center">
        <img src="/sertifikat_course_251_2132438_280423000911_page-0001.jpg" alt="Course 251 Certificate" className="object-cover h-full w-full" />
      </div>

      {/* Kolom 3 (4 kolom, 3 baris) */}
      <div className="col-span-4 row-span-3 bg-green-100 flex items-center justify-center">
        <img src="/sertifikat_course_256_2132438_240622154723_page-0001.jpg" alt="Course 256 Certificate" className="object-cover h-full w-full" />
      </div>

      {/* Kolom 4 (6 kolom, 3 baris) */}
      <div className="col-span-6 row-span-3 bg-yellow-100 flex items-center justify-center">
        <img src="/sertifikat_course_403_2132438_160822073638-23_page-0001.jpg" alt="Course 403 Certificate" className="object-cover h-full w-full" />
      </div>

      {/* Kolom 5 (6 kolom, 3 baris) */}
      <div className="col-span-6 row-span-3 bg-purple-100 flex items-center justify-center">
        <img src="/sertifikat_course_261_2132438_070523093542-17-page-001.jpg" alt="Course 123 Certificate Duplicate" className="object-cover h-full w-full" />
      </div>
    </div>
  </div>
);

export default Sertifikat;
