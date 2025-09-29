import React from 'react';

const Title = ({ subheading, heading, className }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* subheading div */}
      <div className="mb-2 flex items-center gap-2 sm:mb-0">
        <div className="h-2 w-2 bg-[#f32f2fee]"></div>
        <h4 className="text-[1rem] font-semibold">{subheading}</h4>
      </div>
      {/* heading div */}
      <h1
        className={`mb-4 text-[1.875rem] font-bold text-slate-900 sm:mb-8 md:text-[2.1rem] lg:text-5xl ${className}`}
      >
        {heading}
      </h1>
    </div>
  );
};

export default Title;
