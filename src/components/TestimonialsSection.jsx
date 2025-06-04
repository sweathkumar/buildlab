import React from 'react';

const TestimonialsSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">What People Say</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { name: "John Doe", text: "MoodPlay helped me discover amazing songs based on my mood!" },
        { name: "Jane Smith", text: "The AI Resume Generator saved me hours of work!" }
      ].map((testimonial, index) => (
        <div key={index} className="bg-white rounded-2xl p-4 shadow-md hover-card">
          <p className="text-gray-600 text-xs sm:text-sm mb-2">"{testimonial.text}"</p>
          <p className="text-sm font-semibold">{testimonial.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TestimonialsSection;