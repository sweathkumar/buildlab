import React from 'react';

const SkillsSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">My Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {["React", "JavaScript", "Tailwind CSS", "AI Integration"].map(skill => (
        <div key={skill} className="bg-white rounded-2xl p-4 shadow-md text-center hover-card">
          <p className="text-sm sm:text-base font-semibold">{skill}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSection;