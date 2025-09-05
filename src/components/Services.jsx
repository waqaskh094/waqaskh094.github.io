import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from "motion/react"


const Services = () => {
  const servicesData = [
    {
      title: 'Staffing & Recruitment',
      description:
        'We connect employers with skilled workers across industries to fill roles quickly and effectively.',
      icon: assets.ads_icon,
    },
    {
      title: 'Workforce Management',
      description:
        'We provide tailored workforce solutions, including scheduling, compliance, and productivity support.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Training & Development',
      description:
        'We equip job seekers with skills and certifications that align with employer needs, ensuring job readiness.',
      icon: assets.content_icon,
    },
    {
      title: 'Career Support',
      description:
        'From resume building to interview prep, we help job seekers land the right opportunities.',
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once:true}}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-[110px] -left-[70px] -z-[1] dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From people to performance, we connect businesses with the talent they need to thrive."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
