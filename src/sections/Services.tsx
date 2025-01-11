import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Plane, 
  Ship, 
  Truck, 
  FileCheck, 
  Building2, 
  Car, 
  Package, 
  Forklift 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Air Freight',
      description: 'Fast and reliable air services to destinations worldwide.'
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: 'Sea Freight',
      description: 'Economical and efficient sea freight services for bulk cargo.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Road Freight',
      description: 'Safe and timely road freight services for all destinations.'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Customs Clearance',
      description: 'Expert customs clearance for smooth import/export processes.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Ministry Approvals',
      description: 'Assistance with obtaining necessary permits and approvals.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Vehicle Import & Export',
      description: 'Specialized services for vehicle shipping and documentation.'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Project Cargo',
      description: 'Handling of oversized and complex project cargo.'
    },
    {
      icon: <Forklift className="w-8 h-8" />,
      title: 'Transportation',
      description: 'Comprehensive transportation solutions for all cargo types.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
           <span className='text-orange-500'>Our </span>
           <span className='text-orange-400'>Services</span>
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We offer a comprehensive range of logistics services tailored to meet your specific needs.
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <motion.div
                className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-purple-500 mb-4 flex justify-center dark:text-orange-600"
                  whileHover={{ rotate: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;