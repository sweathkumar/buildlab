import React from 'react';

const ContactSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">Get in Touch</h2>
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md text-center">
      <p className="text-gray-600 text-xs sm:text-sm mb-4">Feel free to reach out via email or follow me on social media!</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-gray-600 hover:text-black">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4.56v14.88A4.56 4.56 0 0 1 19.44 24H4.56A4.56 4.56 0 0 1 0 19.44V4.56A4.56 4.56 0 0 1 4.56 0h14.88A4.56 4.56 0 0 1 24 4.56zM8.25 19.44v-8.64H5.76v8.64h2.49zm-1.24-9.84c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47-1.47.66-1.47 1.47.66 1.47 1.47 1.47zm12.24 9.84v-4.92c0-2.64-.96-4.44-3.36-4.44-1.83 0-2.91 1.23-3.39 2.4v-2.04h-2.49v8.64h2.49v-4.8c0-1.32.24-2.4 1.74-2.4 1.47 0 1.47 1.2 1.47 2.52v4.68h2.49z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.44 2.88 8.22 6.84 9.54.5.09.68-.22.68-.48v-1.68c-2.82.6-3.42-1.35-3.42-1.35-.46-1.17-1.12-1.47-1.12-1.47-.92-.63.06-.62.06-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84c.85.004 1.71.114 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.56.82.56 1.65v2.45c0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.04c0-5.52-4.48-10-10-10z"/>
          </svg>
        </a>
      </div>
      <a href="mailto:contact@mybuildlab.com" className="text-black underline text-xs sm:text-sm">contact@mybuildlab.com</a>
    </div>
  </div>
);

export default ContactSection;