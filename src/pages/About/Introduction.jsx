import React from 'react';
import PageHeading from '../../components/PageHeading';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <section id="about_introduction">
      <div className="content">
        <PageHeading heading="Introduction" text1="About Us" text2="Introduction" />

        <div className="flex flex-col items-start gap-6 space-x-10 sm:gap-0 lg:mt-10 lg:flex-row 2xl:space-x-16">
          {/* Left Image */}
          <div className="h-80 w-full md:h-[400px] lg:h-[560px] 2xl:h-[620px] 2xl:w-1/2">
            <img
              src="/images/carousel_img2.jpg"
              alt="About"
              className="h-full w-full rounded-sm object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Text */}
          <div className="w-full space-y-6 text-justify 2xl:w-1/2">
            <p>
              <strong>Topa International Education Center</strong> was established in 2004 with the
              aim to facilitate and assist Nepalese students to study abroad in various countries,
              especially in Japan. Topa International is a professional education consulting service
              provider in the areas of educational consultancy and provides professional counseling
              and information to the aspirant of abroad studies.
            </p>

            <p>
              Since its inception, Topa International has grown significantly and achieved many
              success stories over the years. It has provided its services to thousands of students
              since its establishment. In 2022, Topa International re-branded in terms of its
              location and office environment with efficient services to students and institutions
              in Japan which reflect our professionalism and dedication to provide reliable
              information to the students and institutions of various countries including Japan.
            </p>

            <p>
              The main reason for our success is the student’s appreciation of efforts, quality
              education appreciated by abroad institutions developed by Topa International and its
              highly experienced team. We make sure that our counselors provide end-to-end
              individualized guidance and support for each student from the word go.
            </p>

            <p>
              Since its inception, Topa International have successfully placed 8000+ students to
              study in Japan at various colleges and fulfilling their aspirations of studying
              abroad. We at Topa International make sure that our counselors provide end to end
              individualized guidance and support for each student from the word go. Starting with
              course selection, fee structure, an education program to making applications to the
              institutions, we ensure that every step is meticulously taken care of to perfection.
            </p>
            <p>
              After a brief introduction, also check our{' '}
              <Link className="text-cta-red hover:text-cta-hover font-bold" to={'/services'}>
                Services
              </Link>{' '}
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
