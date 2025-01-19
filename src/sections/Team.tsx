import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Linkedin, Mail } from 'lucide-react';
import image2 from '../assets/team2.png'
import image3 from '../assets/team3.png'
import image1 from '../assets/team1.png'
import image4 from '../assets/team4.png'


const Team = () => {
  const team = [
    {
      name: 'MAHMOOD ALI KHALIL',
      role: 'Director of Board',
      image: image4,
      expertise: 'CHAIR OF THE BOARD',
    },
    {
      name: 'Varun Nair',
      role: 'CEO & Founder',
      image:image1,
      expertise: 'CUSTOMS CLEARANCE OPERATIONS',
    },
    {
      name: 'ZAYAN RAMZAN',
      role: 'CEO & CO Founder',
      image: image3,
      expertise: 'OPERATIONS & SALES',
    },
    {
      name: 'MUHSIN MOOSA',
      role: 'Regional Manager',
      image: image2,
      expertise: 'LOGISTICS & FREIGHT MANAGER',
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
                  <p className="text-purple-600 dark:text-orange-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {member.expertise}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-orange-400"
                    >
                      <Linkedin size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-orange-400"
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
