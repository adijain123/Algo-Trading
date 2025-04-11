import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: "Adi Jain",
      role: "Full Stack Developer & Quantitative Analyst",
      image: "./adi2.jpg",
      linkedin: "https://www.linkedin.com/in/adi-jain-336277260/",
      github: "https://github.com/adijain123"
    },
    {
      name: "Manvendra Saini",
      role: "Frontend Developer & Quantitative Analyst",
      image: "./manvendra.jpg",
      linkedin: "https://www.linkedin.com/in/manvendra-saini/",
      github: "https://github.com/Manvendra27saini"
    },
    {
      name: "Dhruv",
      role: "Backend Developer & Quantitative Analyst",
      image: "./dhruv.jpg",
      linkedin: "https://www.linkedin.com/in/dhruv-dhirawani-8b6b9225a/",
      github: "https://github.com/DhruvDhirawani"
    },
    {
      name: "Rishi Rathore",
      role: "Backend Developer & Quantitative Analyst",
      image: "./rishi.jpg",
      linkedin: "https://www.linkedin.com/in/rishi-rathore-1a4224211/",
      github: "https://github.com/rishi-rathore"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
      <section className="text-gray-300 body-font py-16">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-20 h-1 bg-blue-500 rounded mb-6"></div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-lg text-gray-400 max-w-2xl">
              Meet the talented individuals behind our trading algorithms and analytics platform.
              Together, we combine expertise in development and quantitative analysis.
            </p>
          </div>
          
          <div className="flex flex-wrap -m-4 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                <div className="bg-gray-800 bg-opacity-40 rounded-2xl overflow-hidden border border-blue-900/30 shadow-xl transform transition-all duration-300 hover:shadow-blue-900/20 hover:-translate-y-2 hover:border-blue-700/50">
                  <div className="relative">
                    <img
                      alt={member.name}
                      className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-105"
                      src={member.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 relative z-10 -mt-10">
                    <div className="bg-gray-800 rounded-xl p-4 border border-blue-900/30 shadow-lg">
                      <h2 className="title-font font-bold text-xl text-white mb-2">{member.name}</h2>
                      <h3 className="text-blue-400 mb-4 font-medium text-sm">{member.role}</h3>
                      
                      <div className="flex justify-center space-x-4 mt-4">
                        <a 
                          target="_blank" 
                          href={member.linkedin} 
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a 
                          target="_blank" 
                          href={member.github} 
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-20">
            <div className="w-2/3 border-t border-gray-800"></div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              AlgoTrader Team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;