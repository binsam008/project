import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Linkedin, Mail } from 'lucide-react';
import image2 from '../assets/team2.png'

const Team = () => {
  const team = [
    {
      name: 'Varun Nair',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      expertise: 'CUSTOMS CLEARANCE OPERATIONS',
    },
    {
      name: 'MUHSIN MOOSA',
      role: 'Regional Manager',
      image: image2,
      expertise: 'LOGISTICS & FREIGHT MANAGER',
    },
    {
      name: 'ZAYAN RAMZAN',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      expertise: 'OPERATIONS & SALES',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Meet our experienced team of logistics professionals dedicated to your success.
          </motion.p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={index}>
              <motion.div
                className="bg-white dark:bg-navy-800 rounded-lg shadow-lg overflow-hidden w-72"
                whileHover={{ y: -10 }}
              >
                <motion.div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-52 object-cover"
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {member.expertise}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Linkedin size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Mail size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
