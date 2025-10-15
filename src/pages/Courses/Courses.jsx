import React from 'react';
import { Link } from 'react-router-dom';

import { GiJapaneseBridge } from 'react-icons/gi';
import { FaCheck } from 'react-icons/fa6';

import StyledHeading from '../../components/StyleHeading';
import { courses } from '../../constants/data';

const Courses = () => {
  return (
    <section id="courses" className="mt-12 mb-20 w-full px-3 2xl:px-40">
      <div className="top_section mb-14 max-w-3xl">
        <StyledHeading text={'What We Offer'} />
        <p className="mt-3 text-justify leading-relaxed text-slate-800">
          Embark on your Japanese learning journey with us, where every course level offers a
          carefully structured path from essential communication skills to advanced fluency. At each
          stage, you'll build and refine your vocabulary, master fundamental and intermediate
          grammar concepts, and develop practical conversation skills tailored to real-world
          scenarios with listening, reading and writing practices.
        </p>
      </div>

      {/* Courses Cards */}
      <div className="bottom_section mt-10 w-full rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 p-6">
        {/* Top 3 cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col items-center gap-2">
                <GiJapaneseBridge className="text-main-indigo size-16" />
                <h3 className="text-main-indigo text-center text-lg font-bold tracking-wide">
                  {course.title}
                </h3>
                <div className="bg-cta-red h-[2px] w-10 rounded-full"></div>
              </div>

              <div className="flex min-h-[140px] w-full flex-col gap-3 px-4 text-left">
                {course?.courseDetails?.map((detail, i) => (
                  <p
                    className="flex items-start gap-2 text-[15px] leading-relaxed text-slate-700"
                    key={i}
                  >
                    <FaCheck className="mt-1 size-4 shrink-0 text-green-700" />
                    {detail}
                  </p>
                ))}
              </div>

              <Link to={`/courses/${course.id}`}>
                <button className="bg-cta-red cursor-pointer rounded-sm px-7 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-red-700">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Second row (2 cards half-width each) */}
        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
          {courses.slice(3, 5).map((course, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:w-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <GiJapaneseBridge className="text-main-indigo size-16" />
                <h3 className="text-main-indigo text-center text-lg font-bold tracking-wide">
                  {course.title}
                </h3>
                <div className="bg-cta-red h-[2px] w-10 rounded-full"></div>
              </div>

              <div className="flex min-h-[100px] w-full flex-col gap-3 px-4 text-left">
                {course?.courseDetails?.map((detail, i) => (
                  <p
                    className="flex items-start gap-2 text-[15px] leading-relaxed text-slate-700"
                    key={i}
                  >
                    <FaCheck className="mt-1 size-4 shrink-0 text-green-700" />
                    {detail}
                  </p>
                ))}
              </div>

              <Link to={`/courses/${course.id}/`}>
                <button className="bg-cta-red rounded-sm px-7 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-red-700">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Remaining cards (if any) */}
        {courses.length > 5 && (
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(5).map((course, index) => (
              <div
                key={index}
                className="bg- flex flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center gap-2">
                  <GiJapaneseBridge className="text-main-indigo size-16" />
                  <h3 className="text-main-indigo text-center text-lg font-bold tracking-wide">
                    {course.title}
                  </h3>
                  <div className="bg-cta-red h-[2px] w-10 rounded-full"></div>
                </div>

                <div className="flex min-h-[140px] w-full flex-col gap-3 px-4 text-left">
                  {course?.courseDetails?.map((detail, i) => (
                    <p
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-slate-700"
                      key={i}
                    >
                      <FaCheck className="mt-1 size-4 shrink-0 text-green-700" />
                      {detail}
                    </p>
                  ))}
                </div>

                <Link to={`/courses/${course.id}/`}>
                  <button className="bg-cta-red rounded-sm px-7 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-red-700">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
