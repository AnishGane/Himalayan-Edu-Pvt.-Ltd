import React from 'react';
import { Link } from 'react-router-dom';

import { GiJapaneseBridge } from 'react-icons/gi';
import { FaCheck } from 'react-icons/fa6';

import StyledHeading from '../../components/StyleHeading';
import { courses } from '../../constants/data';
import PageTitle from '../../components/PageTitle';
import MetaTags from '../../components/MetaTags';

const Courses = () => {
  const title = 'Courses - Himalayan Educational Group Service Pvt. Ltd.';
  const description =
    'Embark on your Japanese learning journey with Himalayan Educational Group. Explore beginner to advanced courses, master grammar, vocabulary, and real-world conversation skills.';
  const url = 'https://himalayan-edu-pvt-ltd.vercel.app/courses';

  return (
    <>
      <MetaTags title={title} description={description} url={url} />
      <PageTitle title="Courses - Himalayan Educational Group Service Pvt. Ltd." />
      <section
        id="courses"
        className="mt-4 mb-6 w-full p-3.5 md:mt-6 md:mb-20 md:p-8 2xl:px-40"
        aria-labelledby="courses-heading"
      >
        <div className="top_section mb-6 max-w-3xl md:mb-14">
          <StyledHeading text={'What We Offer'} />
          <p className="mt-3 text-justify leading-relaxed text-slate-800">
            Embark on your Japanese learning journey with us, where every course level offers a
            carefully structured path from essential communication skills to advanced fluency. At
            each stage, you'll build and refine your vocabulary, master fundamental and intermediate
            grammar concepts, and develop practical conversation skills tailored to real-world
            scenarios with listening, reading and writing practices.
          </p>
        </div>

        {/* Courses Cards */}
        <div
          className="bottom_section w-full rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 px-2 py-4 md:mt-10 md:p-6"
          role="list"
          aria-label="Available Courses"
        >
          {/* Top 3 cards */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
            {courses.slice(0, 3).map((course, index) => (
              <div
                key={index}
                role="region"
                aria-labelledby={`course-title-${index}`}
                className="flex flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-white px-2 py-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="flex flex-col items-center gap-2">
                  <GiJapaneseBridge className="text-main-indigo size-16" aria-hidden="true" />
                  <h3
                    id={`course-title-${index}`}
                    className="text-main-indigo text-center text-lg font-bold tracking-wide"
                  >
                    {course.title}
                  </h3>
                  <div className="bg-cta-red h-[2px] w-10 rounded-full"></div>
                </div>

                <div
                  className="flex min-h-[140px] w-full flex-col gap-3 px-4 text-left"
                  id={`course-details-${index}`}
                >
                  {course?.courseDetails?.map((detail, i) => (
                    <p
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-slate-700"
                      key={i}
                    >
                      <FaCheck className="mt-1 size-4 shrink-0 text-green-700" aria-hidden="true" />
                      {detail}
                    </p>
                  ))}
                </div>

                <Link aria-label="Read More" to={`/courses/${course.id}`}>
                  <button
                    className="bg-cta-red cursor-pointer rounded-sm px-7 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-red-700"
                    aria-labelledby={`course-title-${index}`}
                    aria-describedby={`course-details-${index}`}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Second row (2 cards half-width each) */}
          <div className="mt-6 flex flex-col items-center gap-8 md:mt-12 lg:flex-row lg:justify-center">
            {courses.slice(3, 5).map((course, index) => (
              <div
                key={index}
                role="region"
                aria-labelledby={`course-title-${index + 3}`}
                className="flex w-full flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-white px-2 py-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8 lg:w-1/2"
              >
                <div className="flex flex-col items-center gap-2">
                  <GiJapaneseBridge className="text-main-indigo size-16" aria-hidden="true" />
                  <h3
                    id={`course-title-${index + 3}`}
                    className="text-main-indigo text-center text-lg font-bold tracking-wide"
                  >
                    {course.title}
                  </h3>
                  <div className="bg-cta-red h-[2px] w-10 rounded-full"></div>
                </div>

                <div
                  className="flex min-h-[100px] w-full flex-col gap-3 px-4 text-left"
                  id={`course-details-${index + 3}`}
                >
                  {course?.courseDetails?.map((detail, i) => (
                    <p
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-slate-700"
                      key={i}
                    >
                      <FaCheck className="mt-1 size-4 shrink-0 text-green-700" aria-hidden="true" />
                      {detail}
                    </p>
                  ))}
                </div>

                <Link aria-label="Read More" to={`/courses/${course.id}/`}>
                  <button
                    className="bg-cta-red rounded-sm px-7 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-red-700"
                    aria-labelledby={`course-title-${index + 3}`}
                    aria-describedby={`course-details-${index + 3}`}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Remaining cards (if any) */}
          {courses.length > 5 && (
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
              {courses.slice(5).map((course, index) => (
                <div
                  key={index}
                  role="region"
                  aria-labelledby={`course-title-${index + 5}`}
                  className="flex flex-col items-center gap-y-6 rounded-2xl border border-gray-300 bg-white px-2 py-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                >
                  <div className="flex flex-col items-center gap-2">
                    <GiJapaneseBridge className="text-main-indigo size-16" aria-hidden="true" />
                    <h3
                      id={`course-title-${index + 5}`}
                      className="text-main-indigo text-center text-lg font-bold tracking-wide"
                    >
                      {course.title}
                    </h3>
                    <div className="bg-cta-red h-[2px] w-10 rounded-full"></div>
                  </div>

                  <div
                    className="flex min-h-[140px] w-full flex-col gap-3 px-4 text-left"
                    id={`course-details-${index + 5}`}
                  >
                    {course?.courseDetails?.map((detail, i) => (
                      <p
                        className="flex items-start gap-2 text-[15px] leading-relaxed text-slate-700"
                        key={i}
                      >
                        <FaCheck
                          className="mt-1 size-4 shrink-0 text-green-700"
                          aria-hidden="true"
                        />
                        {detail}
                      </p>
                    ))}
                  </div>

                  <Link aria-label="Read More" to={`/courses/${course.id}/`}>
                    <button
                      className="bg-cta-red rounded-sm px-7 py-4 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-red-700"
                      aria-labelledby={`course-title-${index + 5}`}
                      aria-describedby={`course-details-${index + 5}`}
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;
