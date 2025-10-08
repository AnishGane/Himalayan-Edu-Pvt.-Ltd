import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PageHeading from '../components/PageHeading';

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return (
    <section id="contact">
      <div className="content">
        <PageHeading heading={'Contact Us'} text1={'Home'} text2={'Contact'} />

        {/* Form container */}
        <div className="form_container w-full">
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
              rows={5} // initial visible height
              maxLength={200} // optional, max characters allowed
            />

            {/* Submit Button */}
            <button type="submit">{status === 'sending' ? 'Sending…' : 'SUBMIT'}</button>

            {/* Status message */}
            <div>{sendMessage()}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
