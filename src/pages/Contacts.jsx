import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import StyledHeading from '../components/StyleHeading';
import PageTitle from '../components/PageTitle';

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

      // Hide error message after 4 seconds
      setTimeout(() => setStatus(null), 4000);
    }
  };

  // Function to render status message
  const sendMessage = () => {
    if (status === 'success')
      return <p className="font-semibold text-green-600">✅ Message sent — thank you!</p>;
    if (status === 'error')
      return <p className="font-semibold text-red-600">❌ Oops! Something went wrong.</p>;
    return null;
  };

  return (
    <>
      <PageTitle title="Learn Japanese with Himalayan Educational Group Service Pvt. Ltd." />
      <section id="contact" className="w-full px-4 py-8 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <div className="contact_content w-full lg:pb-10 2xl:mx-auto 2xl:max-w-6xl">
          <StyledHeading text={'Contact Us'} />

          {/* Form container */}
          <div className="form_container mt-6 w-full">
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-5">
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row md:gap-16">
                <input
                  name="full_name"
                  className="text-main-indigo bg-zen-gray w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:py-6"
                  placeholder="Full Name *"
                  required
                />
                <input
                  name="user_email"
                  className="text-main-indigo bg-zen-gray mt-4 w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:mt-0 md:py-6"
                  type="email"
                  placeholder="Your Email Address *"
                  required
                />
              </div>

              {/* Subject & Phone */}
              <div className="flex flex-col md:flex-row md:gap-16">
                <input
                  name="phone_number"
                  className="text-main-indigo bg-zen-gray w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:py-6"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                />
                <input
                  name="subject"
                  className="text-main-indigo bg-zen-gray mt-4 w-full flex-1 border border-gray-400 px-6 py-4 outline-none focus:bg-transparent focus:shadow-md md:mt-0 md:py-6"
                  type="text"
                  placeholder="Subject *"
                  required
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                className="bg-zen-gray w-full border border-gray-400 px-6 py-4 outline-none focus:shadow-md md:py-6"
                placeholder="Write a Message *"
                required
                style={{
                  resize: 'none',
                }}
                rows={5}
                maxLength={200}
                minLength={15}
              />

              <button
                className="bg-cta-red hover:bg-cta-hover mx-auto mt-2 mb-6 w-fit cursor-pointer rounded-sm px-9 py-4 tracking-wide text-white transition-colors outline-none"
                type="submit"
              >
                {status === 'sending' ? 'Sending…' : 'SUBMIT'}
              </button>

              {/* Status message */}
              <div className="mb-6">{sendMessage()}</div>
            </form>
          </div>

          <div className="map_container w-full overflow-hidden rounded-sm border border-gray-300 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4134831958713!2d85.38285237615378!3d27.673612526977266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb058a73f99739%3A0x41f1148aae4502c5!2sHimalayan%20Educational%20Group%20Service!5e0!3m2!1sen!2snp!4v1760509673165!5m2!1sen!2snp"
              className="h-[460px] w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
