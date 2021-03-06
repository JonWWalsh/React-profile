import React from "react";
import headshot from "../images/boatpic.jpg"

export default function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Jonathan.
              <br className="hidden lg:inline-block" />I love to build amazing
              apps and websites.
            </h1>
            <p className="mb-8 leading-relaxed">
            I am a Front-End Software Developer specializing in JavaScript and React.js using source controls such as Git and implementing developer best practices.  I am a Creative Problem Solver; I enjoy finding the solutions to business needs and challenges and brainstorming new ideas.  I’m a strong team player with a core belief in empowerment – when we work together, we can achieve greater results!  I have proven skills in professional relations, detailed organization, maintaining multiple workloads, and have extensive experience in the health care field.   
        
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
              <a
                href="https://drive.google.com/file/d/1me9DKu_KOe08gEpu5kknqxUZ84T36LvH/view?usp=sharing"
                className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                My Resume
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={headshot}
            />
          </div>
        </div>
      </section>
    )
}