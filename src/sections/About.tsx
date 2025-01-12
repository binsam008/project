import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional service quality'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'Dedicated to understanding and meeting client needs'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Operating with transparency and ethical standards'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className='text-purple-700 dark:text-orange-500 text-4xl'>About </span>
            <span className='text-orange-600 dark:text-purple-700 text-4xl'>US</span>
          </motion.h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <motion.div
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Logistics Operations"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg"></div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                At Well Reach Logistics Services, we pride ourselves on our commitment to excellence, integrity, and customer satisfaction. Our team of experienced professionals is dedicated to providing personalized service and tailored solutions to meet your unique needs.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                With years of experience in the logistics industry, we understand the complexities of global trade and shipping. Our expertise allows us to navigate challenges effectively, ensuring smooth operations for our clients.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <AnimatedSection key={index}>
              <motion.div
                className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg text-center"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-purple-500 mb-4 flex justify-center dark:text-orange-600"
                  whileHover={{ rotate: 25 }}
                  transition={{ duration: 0.1 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-orange-500 dark:text-purple-500">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;