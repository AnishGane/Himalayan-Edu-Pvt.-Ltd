import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import StyledHeading from '../../components/StyleHeading';
import { faqData } from '../../constants/data';
import { useDisableMotion } from '../../hooks/useDisableMotion';
import PageTitle from '../../components/PageTitle';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useDisableMotion();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <PageTitle title="Frequently Asked Questions - Himalayan Educational Group Service Pvt. Ltd." />
      <section
        id="faq"
        className="relative p-3.5 md:mt-6 md:p-8 lg:mx-40"
        aria-labelledby="faq-heading"
      >
        <div className="faq_content mx-auto max-w-4xl">
          <StyledHeading text="Frequently Asked Questions" id="faq-heading" />

          {/* FAQ List */}
          <div className="faq_list mt-6 space-y-4 md:mt-8" role="list">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  whileHover={isMobile ? {} : { scale: 1.01 }}
                  transition={isMobile ? {} : { type: 'spring', stiffness: 200, damping: 15 }}
                  className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-colors duration-200 hover:bg-gray-100"
                  role="listitem"
                >
                  <button
                    className="flex w-full items-center justify-between p-5 text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <FaQuestionCircle
                        className="faq_icon text-cta-red text-xl"
                        aria-hidden="true"
                      />
                      <h3 className="font-medium text-gray-900 md:text-lg">{faq.question}</h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="cursor-pointer text-gray-500" aria-hidden="true" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                        id={`faq-content-${index}`}
                        role="region"
                        aria-labelledby={`faq-header-${index}`}
                      >
                        <p className="faq_answer px-12 pb-5 text-[13px] leading-relaxed text-gray-700 md:text-[15px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="cta mt-16 mb-8 text-center">
            <p className="mb-3 text-gray-700">Still have questions? We’d love to help.</p>
            <motion.a
              href="/contact-us"
              className="bg-cta-red hover:bg-cta-hover inline-block rounded-sm px-8 py-3 font-medium text-white shadow-md transition-all"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 1 }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
