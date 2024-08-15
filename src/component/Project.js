import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Atur workerSrc untuk pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Projects = () => {
  const samplePDF = '/sertifikat_course_123_2132438_140622092338.pdf'; // Path ke PDF

  const PDFContent = ({ file }) => {
    const [loading, setLoading] = useState(true);
    const [numPages, setNumPages] = useState(null);
    const [error, setError] = useState(null);
    const [loadTime, setLoadTime] = useState(0); // State untuk mencatat waktu loading

    const handleLoadSuccess = ({ numPages }) => {
      const endTime = Date.now(); // Catat waktu ketika loading selesai
      setLoadTime((endTime - startTime) / 1000); // Hitung waktu loading dalam detik
      setNumPages(numPages);
      setLoading(false);
    };

    const handleLoadError = (err) => {
      setError(err);
      setLoading(false);
    };

    const startTime = Date.now(); // Mulai mencatat waktu loading

    return (
      <div className="relative w-full h-full">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-200 z-10">
            <div className="loader"></div> {/* Tambahkan animasi loading di sini */}
            <p>Loading... {loadTime > 0 && `(${loadTime.toFixed(2)} detik)`}</p> {/* Tampilkan waktu loading */}
          </div>
        )}
        {error && <p>Error loading PDF: {error.message}</p>}
        <Document
          file={file}
          onLoadSuccess={handleLoadSuccess}
          onLoadError={handleLoadError}
        >
          {numPages && Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    );
  };

  return (
    <div className="w-full h-screen p-0">
      {/* Grid container utama 12 columns */}
      <div className="grid grid-cols-12 gap-6 w-full h-full p-12">
        <h1 className="col-span-12 flex justify-start">Certificate</h1>

        {/* Kolom 1 (8 kolom, 6 baris) dengan PDF */}
        <div className="col-span-8 row-span-6 bg-blue-100 flex items-center justify-center">
          <PDFContent file={samplePDF} />
        </div>

        {/* Kolom 2 (4 kolom, 3 baris) */}
        <div className="col-span-4 row-span-3 bg-red-100 flex items-center justify-center text-2xl font-bold">
          <PDFContent file={samplePDF} />
        </div>

        {/* Kolom 3 (4 kolom, 3 baris) */}
        <div className="col-span-4 row-span-3 bg-green-100 flex items-center justify-center text-2xl font-bold">
          <PDFContent file={samplePDF} />
        </div>

        {/* Kolom 4 (6 kolom, 3 baris) */}
        <div className="col-span-6 row-span-3 bg-yellow-100 flex items-center justify-center text-2xl font-bold">
          <PDFContent file={samplePDF} />
        </div>

        {/* Kolom 5 (6 kolom, 3 baris) */}
        <div className="col-span-6 row-span-3 bg-purple-100 flex items-center justify-center text-2xl font-bold">
          <PDFContent file={samplePDF} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
