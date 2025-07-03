import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-4 pb-12 pt-12 relative text-black dark:text-white">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] font-bold px-4 py-2 w-max mx-auto text-center text-sky-300 sm:border-2 border-[#1788ae] rounded-md">Let's Connect</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
