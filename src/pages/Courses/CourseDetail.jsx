import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { motion, AnimatePresence } from 'motion/react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

import { courses } from '../../constants/data';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const matchedCourse = courses.find((c) => c.id === courseId);

  const toggleOutcome = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!matchedCourse) {
    return (
      <div className="mt-10 flex h-[81dvh] w-full items-center justify-center">
        <p className="text-3xl font-bold tracking-wide text-red-600 uppercase">Course not found</p>
      </div>
    );
  }

  return (
    <motion.section
      key={courseId} // ensures animation restarts when route (course) changes
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      id="courses_details"
      className="mx-auto mt-4 mb-12 w-full max-w-5xl rounded-lg bg-gradient-to-br from-gray-50 to-red-50 px-5 py-2 tracking-wide shadow-md md:my-16 md:border md:border-gray-200 md:px-12 md:py-8"
    >
      <div className="max-w-4xl">
        <h1 className="text-main-indigo mb-6 text-4xl font-bold">{matchedCourse.title}</h1>
        <p className="text-charcoal-gray mb-6 text-justify">{matchedCourse.details}</p>

        {/* Duration & Study Time */}
        {matchedCourse?.schedule?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-main-indigo mb-3 text-xl font-semibold">Course Schedule:</h2>
            {matchedCourse.schedule.map((item, index) => (
              <ul key={index} className="list-disc px-8 pl-6 md:px-12">
                {Object.entries(item).map(([key, value]) => (
                  <li key={key} className="text-gray-700">
                    <strong className="capitalize">{key.replace('_', ' ')}:</strong> {value}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}

        {/* Button Links for JLPT, JFT & NAT Course */}
        {matchedCourse?.hasButtonLink === true && matchedCourse?.Levels?.length > 0 && (
          <div className="mb-8 flex w-full max-w-3xl flex-col flex-wrap items-start gap-x-8 gap-y-4 sm:flex-row">
            {matchedCourse.Levels.map((link, index) => (
              <a
                className="bg-main-indigo rounded-sm p-4 text-sm text-white shadow-md"
                href={`#${link.levelId}`}
                onClick={(e) => {
                  e.preventDefault(); // stop auto scroll
                  const target = document.getElementById(link.levelId);
                  if (target) {
                    const yOffset = -144; // for fixed header height in px -(equals to using scroll-mt-36 in tailwind)
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                <button className="cursor-pointer">
                  {link.levelTitle
                    .replace(' Japanese', '')
                    .replace(' Preparation Course', '')
                    .trim()}
                </button>
              </a>
            ))}
          </div>
        )}

        {/* Key Learning Outcomes */}
        {matchedCourse?.Outcomes?.length > 0 && (
          <div className="mb-6">
            <p className="text-main-indigo text-lg font-bold">Key Learning Outcomes:</p>
            <div className="mt-6 max-w-3xl space-y-4">
              {matchedCourse?.Outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="outcome_div overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-colors duration-200 hover:bg-gray-100"
                >
                  <button
                    className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
                    onClick={() => toggleOutcome(index)}
                  >
                    <p className="text-[17px] font-medium text-gray-900" key={index}>
                      {outcome.name}
                    </p>
                    <div className="size-3.5 cursor-pointer">
                      {activeIndex === index ? (
                        <span>
                          <FaMinus />
                        </span>
                      ) : (
                        <span>
                          <FaPlus />
                        </span>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-charcoal-gray px-5 pb-5 text-[15px] leading-relaxed">
                          {outcome.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {matchedCourse?.subDetail && (
          <p className="mb-6 text-gray-700">{matchedCourse.subDetail}</p>
        )}

        {/* Levels of Course a/c to courseId */}
        {matchedCourse?.Levels?.length > 0 && (
          <div className="mb-6 w-full max-w-3xl">
            <h2 className="text-main-indigo mb-3 text-[1.7rem] font-bold">
              Levels of {matchedCourse.title}
            </h2>

            <div className="mt-6 flex w-full flex-col gap-8">
              {matchedCourse.Levels.map((level, index) => (
                <div
                  id={level.levelId}
                  key={index}
                  className="space-y-5 rounded-md border border-gray-300 bg-white px-5 py-8 pl-5 shadow-md md:pr-16"
                >
                  <h3 className="text-[1.275rem] font-bold">{level.levelTitle}</h3>
                  <p className="text-charcoal-gray text-justify">{level.levelDescription}</p>

                  {/* Key Areas */}
                  <div className="space-y-3">
                    <p className="text-lg font-semibold">Key Areas Covered:</p>
                    <ul className="mt-1 list-disc space-y-2 pl-6">
                      {(level.keyAreas || level.KeyAreas)?.map((area, i) => (
                        <li key={i} className="text-charcoal-gray text-[15px]">
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration + Study Time */}
                  <div>
                    {level.courseDuration ? (
                      <p>
                        <span className="font-semibold">Duration:</span>{' '}
                        <span className="text-charcoal-gray text-[15px]">
                          {level.courseDuration || level.CourseDuration}
                        </span>
                      </p>
                    ) : null}

                    {level.studyTime && (
                      <p>
                        <span className="font-semibold">Study Time:</span>
                        <span className="text-charcoal-gray text-[15px]"> {level.studyTime}</span>
                      </p>
                    )}
                  </div>

                  <p className="text-charcoal-gray">{level.levelSubDetails}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-main-indigo mt-6">
          If you're interested feel free to
          <Link className="text-cta-red hover:text-cta-hover ml-1 underline" to="/contact_us">
            contact us
          </Link>
          .
        </p>
      </div>
    </motion.section>
  );
};

export default CourseDetail;
