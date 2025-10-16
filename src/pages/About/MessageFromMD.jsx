import React from 'react';

import StyledHeading from '../../components/StyleHeading';

const MessageFromMD = () => {
  return (
    <section id="about_messageMD" className="relative p-3.5 md:mt-6 md:p-8 lg:mx-40">
      {/* Title */}
      <StyledHeading text={'Message from MD'} />

      <div className="flex flex-col items-start gap-6 space-x-10 sm:gap-0 lg:mt-6 lg:flex-row 2xl:space-x-16">
        {/* Image */}
        <div className="mb-2 flex w-full flex-shrink-0 justify-center sm:justify-start md:mt-2 md:mb-6 lg:w-1/3">
          <img
            title="Our Managing Director"
            src="/images/carousel_img1.jpg"
            alt="Managing Director"
            className="h-[400px] w-full rounded-sm object-cover"
            loading="lazy"
          />
        </div>

        {/* Message Body */}
        <div className="w-full space-y-4 text-justify text-slate-800">
          <p className="mb-7">
            <strong>Dear Students and Parents,</strong>
          </p>
          <p>
            It gives me great pleasure to welcome you to the Topa International Education Center
            (TIEC). As Managing Director (MD) of TIEC, I am privileged to be a part of the abroad
            education industry today. Understanding the competitive environment, we strive to
            facilitate excellent educational options for the personal growth and career fulfillment
            of students aspiring to study abroad.
          </p>
          <p>
            With more than a decade of experience in the field of overseas education consultancy, I
            have realized that it is one of the most volatile industries in the world and most
            specifically in Nepal. We provide vital service to obtain admission to popular courses
            in premium institutions, colleges, and universities overseas; extending an adaptable
            service package that ensures complete support and guidance right from pre-application
            processes.
          </p>
          <p>
            Our highly dedicated and committed team strives to achieve excellence in the field of
            overseas educational consultancy and I am honored to be the leader of this team. The
            success of our organization, ever since it was established in 2004, can be attributed to
            our ability to continually identify and respond to the changing demands across the
            ever-expanding international education sector.
          </p>
          <p>
            With a keen focus on quality education, we are steadfast in our path, giving assistance
            and aid to students for attaining meritorious heights. We work closely to serve students
            in fulfilling their academic dreams through a cost-effective package and professional
            guidance. We look forward to answering your queries and ensure effective assistance for
            your education, overseas.
          </p>
          <p className="mb-6">
            At last but not the list, I personally studied in Japan and obtained N2 level and I am
            as an Instructor since I came back to Nepal in 2006. I personally know the life style of
            cities of Japan and closely observed the education system which encourage me to
            facilitate Nepalese student to study in Japan. The Japanese language is interesting and
            I love to teach language whenever I got the chance. So join me where I will be
            personally facilitate you for language and study in Japan.
          </p>
          <div className="mb-16 space-y-1 md:mb-8">
            <p className="font-bold">Pramila Puri</p>
            <p className="font-semibold">Managing Director</p>
            <p className="text-sm">N2 Level Language Instructor and Counselor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromMD;
