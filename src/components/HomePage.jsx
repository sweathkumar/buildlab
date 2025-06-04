import React from 'react';
import WelcomeSection from './WelcomeSection';
import WhatIDoSection from './WhatIDoSection';
import FeaturedProjectSection from './FeaturedProjectSection';
import RecentLaunchesSection from './RecentLaunchesSection';
import StatsSection from './StatsSection';
import SkillsSection from './SkillsSection';
import TestimonialsSection from './TestimonialsSection';
import HelpSection from './HelpSection';
import NewsletterSection from './NewsletterSection';
import ContactSection from './ContactSection';

const HomePage = () => (
  <div className="max-w-4xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
    <WelcomeSection />
    <WhatIDoSection />
    <FeaturedProjectSection />
    <RecentLaunchesSection />
    <StatsSection />
    <SkillsSection />
    <TestimonialsSection />
    <HelpSection />
    <NewsletterSection />
    <ContactSection />
  </div>
);

export default HomePage;