import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import portfolio from './images/portfolio.jpeg';
import './index.css';

const PortfolioPage = () => {
  const [projects, setProjects] = useState([
    {
      title: 'E-commerce Platform',
      description: 'A scalable e-commerce website built with the MERN stack.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/NnatuanyaFrankOguguo/E-commerce.git',
      live: 'https://e-commerce-tomato.onrender.com/',
    },
    {
      title: 'Hotel Booking Application',
      description: 'A full-featured hotel booking application with user authentication and CRUD functionality.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/NnatuanyaFrankOguguo/administration.git',
      live: 'https://administration-frontend.onrender.com/',
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Nnatunaya Frank <br />
          MERN Stack Developer Portfolio
        </h1>
        <div className="flex justify-end space-x-4 text-gray-500">
          <a href="https://github.com/NnatuanyaFrankOguguo" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/frank-nnatuanya-7683461b7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:nnatuanyafrank@gmail.com">
            <FaEnvelope size={24} />
          </a>
        </div>
      </header>

      <main className="w-full max-w-4xl p-6 mt-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="flex space-x-2 mb-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end space-x-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="text-center mt-8">
        <img
          src={portfolio} // Replace this with your actual photo
          alt="Your Photo"
          className="w-32 h-32 rounded-full bg-cover mx-auto"
        />
        <p className="text-lg mt-4">Hi, I'm Nnatunaya Frank, a passionate MERN stack developer focused on building scalable web applications.</p>
      </section>

      <footer className="w-full max-w-4xl p-6 mt-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500">Built with the MERN Stack</p>
        </div>
        <div className="flex justify-center space-x-4 text-gray-500">
          <div className="flex items-center">
            <SiMongodb size={24} className="mr-2" />
            <span>MongoDB</span>
          </div>
          <div className="flex items-center">
            <SiExpress size={24} className="mr-2" />
            <span>Express</span>
          </div>
          <div className="flex items-center">
            <SiReact size={24} className="mr-2" />
            <span>React</span>
          </div>
          <div className="flex items-center">
            <SiNodedotjs size={24} className="mr-2" />
            <span>Node.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
