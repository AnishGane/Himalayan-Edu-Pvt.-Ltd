import React from 'react';

import { Link } from 'react-router-dom';
import StyledHeading from '../../components/StyleHeading';
import PageTitle from '../../components/PageTitle';
import MetaTags from '../../components/MetaTags';

const Introduction = () => {
  const title = 'About - Himalayan Educational Group Service Pvt. Ltd.';
  const description = 'Learn more about Himalayan Educational Group Service Pvt. Ltd.';
  const url = 'https://localhost:5173/about/introduction';
  return (
    <>
      <MetaTags title={title} description={description} url={url} />
      <PageTitle title="About - Himalayan Educational Group Service Pvt. Ltd." />
      <section id="about_introduction" className="relative mb-16 p-3.5 md:mt-6 md:p-8 lg:mx-40">
        <StyledHeading text="Introduction" />

        <div className="flex flex-col items-start gap-6 space-x-10 md:gap-10 lg:mt-5 lg:flex-row lg:gap-0 2xl:space-x-16">
          {/* Left Image */}
          <div className="h-64 w-full md:h-96 md:w-1/3 lg:h-[450px] 2xl:h-[500px]">
            <img
              src="https://himalayanedu.imgix.net/images/image_1.webp?auto=format,compress"
              srcSet="
                 https://himalayanedu.imgix.net/images/image_1.webp?w=480&auto=format,compress 480w,
                 https://himalayanedu.imgix.net/images/image_1.webp?w=720&auto=format,compress 720w,
                 https://himalayanedu.imgix.net/images/image_1.webp?w=1080&auto=format,compress 1080w
               "
              sizes="(max-width: 600px) 480px, (max-width: 960px) 720px, 1080px"
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
              <Link
                aria-label="View all services offered by Himalayan Educational Group"
                className="text-cta-red hover:text-cta-hover font-bold"
                to={'/services'}
              >
                Services
              </Link>{' '}
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
