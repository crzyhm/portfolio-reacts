import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="relative p-4 bg-white shadow-lg rounded-lg">
      {/* PDF Preview */}
      <div className="w-full h-80 overflow-auto">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          {numPages ? `1 of ${numPages}` : 'Loading...'}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
