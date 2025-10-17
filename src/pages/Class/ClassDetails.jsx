import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { classes } from '../../constants/data';
import PageTitle from '../../components/PageTitle';
import MetaTags from '../../components/MetaTags';

const ClassDetails = () => {
  const { classId } = useParams();
  const matchedClass = classes.find((c) => c.id === classId);
  const title = `${matchedClass.title} - Himalayan Educational Group Service Pvt. Ltd.`;
  const description = matchedClass.description;
  const url = `https://himalayan-edu-pvt-ltd.vercel.app/class/${matchedClass.id}`;
  return (
    <>
      <MetaTags title={title} description={description} url={url} />
      <PageTitle title={`${matchedClass.title} - Himalayan Educational Group Service Pvt. Ltd.`} />
      <section
        id="class_details"
        className="mx-auto mt-4 mb-12 w-full max-w-5xl rounded-lg from-gray-50 to-red-50 px-5 py-2 tracking-wide md:my-16 md:border md:border-gray-200 md:bg-gradient-to-br md:px-12 md:py-8 md:shadow-md"
      >
        <div className="min-h-[80dvh]">
          <h1 className="text-main-indigo mb-4 text-4xl font-bold">{matchedClass.title}</h1>
          <p className="text-charcoal-gray text-justify">{matchedClass.description}</p>
          <p className="text-charcoal-gray mt-8">
            If interested, you can{' '}
            <Link
              aria-label="contact us"
              to={'/contact-us'}
              className="text-cta-red hover:text-cta-hover cursor-pointer underline"
            >
              contact us
            </Link>
            &nbsp;for more details.
          </p>
        </div>
      </section>
    </>
  );
};

export default ClassDetails;
