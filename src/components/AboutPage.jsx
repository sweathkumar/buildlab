import React from 'react';

const AboutPage = () => (
  <div className="max-w-4xl mx-auto p-4 sm:p-6">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h1>
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Who I Am</h2>
      <p className="text-gray-600 text-xs sm:text-sm mb-4">
        I'm a passionate developer with a knack for building tools that make life easier. With over two years of experience in frontend engineering and AI integration, I specialize in creating applications that are both beautiful and functional.
      </p>
      <p className="text-gray-600 text-xs sm:text-sm">
        My Build Lab is where I bring my ideas to life, focusing on projects that solve real problems for real people. When I'm not coding, you can find me exploring new technologies or sharing my knowledge with the community.
      </p>
    </div>
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">My Mission</h2>
      <p className="text-gray-600 text-xs sm:text-sm">
        My mission is to empower users with tools that simplify their lives, leveraging the power of AI and modern web technologies. I aim to deliver value through every project, ensuring a seamless user experience from start to finish.
      </p>
    </div>
  </div>
);

export default AboutPage;