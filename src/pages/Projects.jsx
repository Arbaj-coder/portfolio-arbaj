import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import contactimg from "../assets/images/spotify-image.png"
import contactimg1 from "../assets/images/netflix-ui-image.png"
import contactimg2 from "../assets/images/signup-login.png"
import contactimg3 from "../assets/images/TM-app.png"
import contactimg4 from "../assets/images/giv-1.png"
const projects = [
  
  {
  name: "Giveora- A donation app",
  image: contactimg4,
  skills: ["Next", "MongoDB" , "React" , "Razorpay-integration" , "Tailwind CSS","NextAuth.js","react-toastify"],
  link: "https://giveora-1.vercel.app/login",
  },
  {
  name: "Task Manager App - iTask",
  image: contactimg3,
  skills: ["React", "MongoDB" , "Express" , "Node.js" , "Tailwind CSS","JWTwebtoken","react-toastify"],
  link: "https://mern-task-app-ui.onrender.com/",
  },
  {
  name: "MERN - AUTH APP",
  image: contactimg2,
  skills: ["React", "Tailwind CSS" , "MongoDB" , "Express" , "Node.js", "JWTwebtoken","react-toastify"],
  link: "https://signup-login-ui.onrender.com/",
  },
  {
    name: "Media player App",
    image: contactimg,
    skills: ["HTML", "CSS", "JS"],
    link: "https://spotify-by-arbaj.onrender.com", // replace with your project URL
  },
  {
    name: "Netflix-ui",
    image: contactimg1,
    skills: ["HTML", "CSS"],
    link: "https://mern-task-app-api-buha.onrender.com",
  },
];

function Projects() {
  return (
    <>
    <Navbar2/>
    <div className="pt-24 pb-16 px-6 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 block"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
              />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    <Footer/>
        </>
  );
}

export default Projects;
