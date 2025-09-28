import React from 'react';

const Title = ({ subheading, heading }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* subheading div */}
      <div className="mb-2 flex items-center gap-2 sm:mb-0">
        <div className="h-2 w-2 bg-[#f32f2fee]"></div>
        <h4 className="text-[1.1rem] font-semibold">{subheading}</h4>
      </div>
      {/* heading div */}
      <h1 className="mb-4 text-[1.875rem] leading-9 font-bold text-slate-900 sm:mb-8 md:text-[2.1rem] md:leading-12 lg:text-5xl lg:leading-14">
        {heading}
      </h1>
    </div>
  );
};

export default Title;
