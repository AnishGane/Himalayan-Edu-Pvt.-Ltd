import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-3">
      <span className="dot bg-main-indigo size-3 rounded-full"></span>
      <span className="dot bg-main-indigo size-3 rounded-full"></span>
      <span className="dot bg-main-indigo size-3 rounded-full"></span>
    </div>
  );
};

export default Loading;
