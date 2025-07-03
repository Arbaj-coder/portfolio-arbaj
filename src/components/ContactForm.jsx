import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactImg from "../assets/images/contact-me.svg";


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vshqoun',       // your service ID
      'template_cb8ambq',      // your template ID
      form.current,
      'HvtfZBBFM4xDQ0_-O'      // your public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.error(error);
      }
    );
  };

  return (
    <div className='flex flex-col md:flex-row items-center mt-10 gap-10'>
       <div className="w-full flex justify-center">
          <img src={contactImg} alt="contact" className="w-3/4 max-w-md" />
        </div>

<form onSubmit={sendEmail} ref={form} className="w-full">

  <input type="text" name="name" placeholder="Your Name" required className="mb-4 w-full bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:text-white" />

  <input type="email" name="reply_to" placeholder="Your Email" required className="mb-4 w-full bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:text-white"/>

  <input type="text" name="time" value={new Date().toLocaleString()} hidden readOnly className="mb-4 w-full bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:text-white"/>

  <textarea name="message" placeholder="Your Message" className='mb-4 w-full bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:text-white' required ></textarea>

  <button type="submit" className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5">Send</button>
</form>
  </div>

  );
};

export default ContactForm;
