import React from 'react';
import Title from '../Title';
import TestPrepCard from './TestPrepCard';
import { TestClasses } from '../../constants/data';

const TestPreparation = () => {
  return (
    <section id="home_test_preparation" className="relative">
      {/*  Diagonal Cross Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top fade overlay */}
      <div className="top_fade"></div>

      {/* Bottom fade overlay */}
      <div className="bottom_fade"></div>

      {/* Content*/}
      <div className="content">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'Test Preparation Classes'}
          heading={'Test Preparation'}
        />

        <div className="wrapper">
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
