import React from 'react';
import Title from '../Title';
// import TestPrepCard from './TestPrepCard';
import { TestClasses } from '../../constants/data';
import GridCard from '../GridCard';

const TestPreparation = () => {
  return (
    <section
      id="home_test_preparation "
      className="bg-section-bg relative w-full overflow-x-hidden pt-8 pb-12 2xl:px-40"
    >
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
          backgroundSize: '20px 30px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
        }}
      />

      {/* Top fade overlay */}
      <div className="top_fade pointer-events-none absolute top-0 left-0 z-10 h-20 w-full bg-gradient-to-b from-white to-transparent"></div>

      {/* Bottom fade overlay */}
      <div className="bottom_fade pointer-events-none absolute bottom-0 left-0 z-10 h-14 w-full bg-gradient-to-t from-white to-transparent"></div>

      {/* Content*/}
      <div className="home_content relative z-20 w-full px-3">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'Test Preparation Classes'}
          heading={'Test Preparation'}
        />

        <div className="wrapper relative z-30 mt-6 mb-4 w-full rounded-lg bg-gradient-to-br from-gray-50 to-red-50 md:mt-2 md:border md:border-gray-200 md:p-6">
          <article className="article_card grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {TestClasses.map((test, index) => (
              <GridCard key={index} cardData={test} />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default TestPreparation;
