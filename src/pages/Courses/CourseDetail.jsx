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
        <p className="wide text-3xl font-bold text-red-600 uppercase">Course not found</p>
      </div>
    );
  }

  return (
    <section id="courses_details">
      <div className="max-w-4xl">
        <h1>{matchedCourse.title}</h1>
        <p className="text-charcoal-gray mb-6 text-justify">{matchedCourse.details}</p>

        {matchedCourse.schedule.map((item, index) => (
          <ul key={index}>
            {Object.keys(item).map((key) => (
              <li key={index} className="mb-2">
                <strong className="capitalize">{key.replace('_', ' ')}:</strong> {item[key]}
              </li>
            ))}
          </ul>
        ))}

        <div className="mb-6">
          <p className="text-lg font-bold">Key Learning Outcomes:</p>
          <div className="mt-6 max-w-3xl space-y-4">
            {matchedCourse.Outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="outcome_div"
              >
                <button onClick={() => toggleOutcome(index)}>
                  <p key={index}>{outcome.name}</p>
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

        <p>{matchedCourse.subDetail}</p>
        <p className="mt-6">
          If you're interested feel free to
          <Link className="text-cta-red hover:text-cta-hover ml-1 underline" to="/contact_us">
            contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default CourseDetail;
