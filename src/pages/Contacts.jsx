import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import StyledHeading from '../components/StyleHeading';
import PageTitle from '../components/PageTitle';
import Loading from '../components/Loading';
import MetaTags from '../components/MetaTags';

const Contacts = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.current.reset();

      // Hide success message after 4 seconds
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const sendMessage = () => {
    if (status === 'success')
      return (
        <p role="status" aria-live="polite" className="font-semibold text-green-600">
          ✅ Message sent — thank you!
        </p>
      );
    if (status === 'error')
      return (
        <p role="alert" aria-live="assertive" className="font-semibold text-red-600">
          ❌ Oops! Something went wrong.
        </p>
      );
    return null;
  };
  const title = 'Contact Us - Himalayan Educational Group Service Pvt. Ltd.';
  const description =
    'Get in touch with Himalayan Educational Group Service Pvt. Ltd. for any inquiries or feedback.';
  const url = 'https://localhost:5173/contact-us';

  return (
    <>
      <MetaTags title={title} description={description} url={url} />
      <PageTitle title="Learn Japanese with Himalayan Educational Group Service Pvt. Ltd." />
      <section
        id="contact"
        className="w-full px-4 py-8 sm:px-10 md:px-20 lg:px-32 xl:px-40"
        aria-labelledby="contact-heading"
      >
        <div className="contact_content w-full lg:pb-10 2xl:mx-auto 2xl:max-w-6xl">
          <StyledHeading id="contact-heading" text="Contact Us" />

          {/* Contact Form */}
          <div className="form_container mt-6 w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 gap-5"
              aria-describedby="form-instructions"
            >
              <p id="form-instructions" className="sr-only">
                All fields marked with * are required.
              </p>

              {/* Name & Email */}
              <div className="flex flex-col md:flex-row md:gap-16">
                <label htmlFor="full_name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  className="text-main-indigo bg-zen-gray w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:py-6"
                  placeholder="Full Name *"
                  required
                  aria-required="true"
                />
                <label htmlFor="user_email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  className="text-main-indigo bg-zen-gray mt-4 w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:mt-0 md:py-6"
                  type="email"
                  placeholder="Your Email Address *"
                  required
                  aria-required="true"
                />
              </div>

              {/* Phone & Subject */}
              <div className="flex flex-col md:flex-row md:gap-16">
                <label htmlFor="phone_number" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone_number"
                  name="phone_number"
                  className="text-main-indigo bg-zen-gray w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:py-6"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  aria-required="true"
                />
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="text-main-indigo bg-zen-gray mt-4 w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:mt-0 md:py-6"
                  type="text"
                  placeholder="Subject *"
                  required
                  aria-required="true"
                />
              </div>

              {/* Message */}
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-zen-gray w-full border border-gray-400 px-6 py-4 outline-none focus:shadow-md md:py-6"
                placeholder="Write a Message *"
                required
                aria-required="true"
                rows={5}
                maxLength={200}
                minLength={15}
                style={{ resize: 'none' }}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                aria-label="Submit contact form"
                disabled={status === 'sending'}
                className="bg-cta-red hover:bg-cta-hover mx-auto mt-2 mb-6 w-fit cursor-pointer rounded-sm px-9 py-4 font-semibold tracking-wide text-white transition-colors outline-none"
              >
                {status === 'sending' ? 'Sending…' : 'SUBMIT'}
              </button>

              {/* Status Message */}
              <div className="mb-6">{sendMessage()}</div>
            </form>
          </div>

          {/* Google Map */}
          <Suspense fallback={<Loading />}>
            <div
              className="map_container w-full overflow-hidden rounded-sm border border-gray-300 shadow-md"
              role="region"
              aria-label="Our location on Google Maps"
            >
              <iframe
                title="Himalayan Educational Group Service location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4134831958713!2d85.38285237615378!3d27.673612526977266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb058a73f99739%3A0x41f1148aae4502c5!2sHimalayan%20Educational%20Group%20Service!5e0!3m2!1sen!2snp!4v1760509673165!5m2!1sen!2snp"
                className="h-[460px] w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Contacts;
