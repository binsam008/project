import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Truck, Globe, Shield, Clock } from 'lucide-react';
import heroLight from '../assets/hero-light.jpg'; // Light mode image
import heroDark from '../assets/hero-dark.jpg'; // Dark mode image

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    handleThemeChange();

    // Listen for changes to the "dark" class
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true, // Observe attribute changes (like class changes)
      attributeFilter: ['class'],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: <Globe className="w-8 h-6" />,
      title: 'Global Shipping Solutions',
      description:
        'Seamless shipping services across the globe with our extensive network.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Customs Clearance',
      description:
        'Expert customs clearance ensuring smooth and efficient processing.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Warehousing & Distribution',
      description:
        'State-of-the-art facilities for secure storage and distribution.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Express Delivery',
      description: 'Time-sensitive solutions without compromising on safety.',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed"
    >
      {/* Light/Dark Mode Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${isDarkMode ? heroDark : heroLight})`,
        }}
      ></div>

      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg dark:bg-navy-800/30"></div>

      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto px-4 sm:px-6 md:py-5 lg:px-15 py-10 md:ps-5 lg:py-16">
        <AnimatedSection>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-300 to-blue-400 text-transparent bg-clip-text leading-tight"
            style={{ wordBreak: 'break-word', lineHeight: '1.4' }}
            {...fadeInUp}
          >
            
            Welcome to Well Reach Logistics
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-100 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your trusted partner for comprehensive shipping and logistics solutions in Bahrain. We streamline your logistics operations, ensuring your goods reach their destination promptly, safely, and efficiently.
          </motion.p>
          <div className="flex justify-center gap-4">
            <Link to="contact" smooth={true}>
              <motion.button
                className="bg-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-purple-950 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="services" smooth={true}>
              <motion.button
                className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-yellow-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Services Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <AnimatedSection key={index} className="text-center">
            <motion.div
              className="flex flex-col justify-between items-center bg-white dark:bg-navy-800 p-8 md:p-10 lg:p-12 rounded-xl shadow-lg h-full"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="text-purple-500 mb-6 flex justify-center dark:text-orange-500"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-orange-700 dark:text-purple-500">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Home;
