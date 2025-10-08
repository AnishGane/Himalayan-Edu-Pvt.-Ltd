import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-3">
      <span className="dot bg-main-indigo h-4 w-4 rounded-full"></span>
      <span className="dot bg-main-indigo h-4 w-4 rounded-full"></span>
      <span className="dot bg-main-indigo h-4 w-4 rounded-full"></span>
    </div>
  );
};

export default Loading;
