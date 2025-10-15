import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import StyledHeading from '../components/StyleHeading';

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
    <section id="contact">
      <div className="contact_content">
        <StyledHeading text={'Contact Us'} />

        {/* Form container */}
        <div className="form_container mt-6 w-full">
          <form ref={form} onSubmit={sendEmail}>
            {/* Name & Email */}
            <div>
              <input name="full_name" placeholder="Full Name *" required />
              <input name="user_email" type="email" placeholder="Your Email Address *" required />
            </div>

            {/* Subject & Phone */}
            <div className="flex flex-col md:flex-row md:gap-16">
              <input name="phone_number" type="tel" placeholder="Phone Number *" required />
              <input name="subject" type="text" placeholder="Subject *" required />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Write a Message *"
              required
              style={{
                resize: 'none',
              }}
              rows={5}
              maxLength={200}
            />

            <button type="submit">{status === 'sending' ? 'Sending…' : 'SUBMIT'}</button>

            {/* Status message */}
            <div>{sendMessage()}</div>
          </form>
        </div>

        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4134831958713!2d85.38285237615378!3d27.673612526977266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb058a73f99739%3A0x41f1148aae4502c5!2sHimalayan%20Educational%20Group%20Service!5e0!3m2!1sen!2snp!4v1760509673165!5m2!1sen!2snp"
            className="h-[460px] w-full "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
