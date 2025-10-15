import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { classes } from '../../constants/data';

const ClassDetails = () => {
  const { classId } = useParams();
  const matchedClass = classes.find((c) => c.id === classId);
  return (
    <section
      id="class_details"
      className="wide mx-auto mt-4 mb-12 w-full max-w-5xl rounded-lg bg-gradient-to-br from-gray-50 to-red-50 px-5 py-2 shadow-md md:my-16 md:border md:border-gray-200 md:px-12 md:py-8"
    >
      <div className="min-h-[80dvh]">
        <h1 className="text-main-indigo mb-4 text-4xl font-bold">{matchedClass.title}</h1>
        <p className="text-charcoal-gray text-justify">{matchedClass.description}</p>
        <p className="text-charcoal-gray mt-8">
          If interested, you can{' '}
          <Link
            to={'/contact-us'}
            className="text-cta-red hover:text-cta-hover cursor-pointer underline"
          >
            contact us
          </Link>{' '}
          for more details.
        </p>
      </div>
    </section>
  );
};

export default ClassDetails;
