import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import StyledHeading from '../../components/StyleHeading';
import { faqData } from '../../constants/data';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="faq_content">
        <StyledHeading text="Frequently Asked Questions" />

        {/* FAQ List */}
        <div className="faq_list">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <button onClick={() => toggleFAQ(index)}>
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="faq_icon" />
                  <h3>{faq.question}</h3>
                </div>

                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="cursor-pointer text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="faq_answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="cta">
          <p>Still have questions? We’d love to help.</p>
          <motion.a href="/contact-us" whileHover={{ scale: 1.025 }} whileTap={{ scale: 1 }}>
            Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
