import React from 'react';

const PageHeading = ({ heading, text1, text2 }) => {
  return (
    <>
      {/* Header */}
      <div className="content_header">
        <h1>{heading}</h1>
        <p>
          {text1} <span className="px-1"> &gt;</span> {text2}
        </p>
      </div>
    </>
  );
};

export default PageHeading;
