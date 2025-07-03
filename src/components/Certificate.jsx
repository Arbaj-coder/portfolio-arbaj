import React from "react";

const certificates = [
  {
    name: "AI for Beginners",
    description: "Introduction to Artificial Intelligence fundamentals.",
    link: "https://drive.google.com/file/d/1aL-Tp0zfA-Qtl4BlyIip0wzlLFivjJdr/view?usp=drive_link",
  },
  {
    name: "Data Analytic",
    description: "Gained hands-on experience with data analysis techniques including data cleaning, visualization, and interpretation using tools like Excel, Python, and SQL. Focused on turning raw data into actionable insights.",
    link: "https://drive.google.com/file/d/1_qhnQAOFx_AxF8_D89MF75Yjc38K_kmO/view?usp=drive_link",
  },
  {
    name: "DSA with Java",
    description: "Learned core data structures and algorithms using Java, including arrays, linked lists, stacks, queues, trees, and sorting/searching techniques. Built problem-solving skills for technical interviews and coding contests.",
    link: "https://drive.google.com/file/d/1iZPuz8Vt_RnAX1d_r5-ZPS7CoEFjlaaq/view?usp=drive_link",
  },
  {
    name: "MATLAB Onramp",
    description: "Completed an interactive course introducing MATLAB basics, including variables, scripts, functions, and data visualization. Gained hands-on experience with essential computational and plotting tools.",
    link: "https://drive.google.com/file/d/10roWzCUFB0RuUc7arZb2tr7XXRkVwnBe/view?usp=drive_link",
  },
  {
    name: "Resume Building Workshop by Dr. Sneha Sharma (10X Club – Coding Ninjas)",
    description: "Participated in an online workshop focused on crafting impactful resumes. Learned effective techniques and strategies for professional resume building, guided by corporate trainer Dr. Sneha Sharma.",
    link: "https://drive.google.com/file/d/1iET-LQJrnugHiBJze8SpxZtU2kTC7N-N/view?usp=drive_link",
  },
  {
    name: "Rehber’s Vibe Coding Session – 10X Club (Coding Ninjas)",
    description: "Actively participated in a hands-on coding session led by Rehber Moin, aimed at enhancing real-world problem-solving and development skills.",
    link: "https://drive.google.com/file/d/1TrKqC3j9HQ3GZxF9XnzW1iz4JmBv5UZr/view?usp=drive_link",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 relative bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold  bg-white dark:bg-black text-black dark:text-white mb-12">
          Certificates
        </h2>
        <div className="flex flex-col gap-6">
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="bg-[#111] text-white p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_#00ff88,0_0_30px_#1788ae,0_0_40px_#ff00cc] transition-all duration-300 cursor-pointer text-left"
            >
              <h3 className="text-xl font-semibold text-[#fcfcfc]">{cert.name}</h3>
              <p className="text-sm mt-2">{cert.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
