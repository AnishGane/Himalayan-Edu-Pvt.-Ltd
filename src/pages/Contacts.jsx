import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // or VITE_/NEXT_PUBLIC_ var
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input name="full_name" placeholder="Your name" required />
      <input name="user_email" type="email" placeholder="Your email" required />
      <input name="subject" type="text" placeholder="Subject" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">{status === 'sending' ? 'Sending…' : 'Send message'}</button>

      {status === 'success' && <p>Message sent — thank you!</p>}
      {status === 'error' && <p>Failed to send. Try again later.</p>}
    </form>
  );
};

export default Contacts;
