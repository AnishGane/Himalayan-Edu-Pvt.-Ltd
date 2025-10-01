import React from 'react';
import Title from '../Title';
import TestPrepCard from './TestPrepCard';
import { TestClasses } from '../../constants/data';

const TestPreparation = () => {
  return (
    <section id="home_test_preparation" className="relative">
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
      <div className="top_fade"></div>

      {/* Bottom fade overlay */}
      <div className="bottom_fade"></div>

      {/* Content*/}
      <div className="home_content">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'Test Preparation Classes'}
          heading={'Test Preparation'}
        />

        <div className="wrapper mb-4">
          <article className="article_card">
            {TestClasses.map((test, index) => (
              <TestPrepCard key={index} test={test} />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default TestPreparation;
