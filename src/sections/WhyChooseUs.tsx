import React from 'react';
import { motion } from 'framer-motion';
// Using lucide-react for professional icons
import { Award, Users, Target, Truck, Clock, Package } from 'lucide-react';
import {
  MdOutlineAttachMoney,
  MdOutlineWatchLater,
  MdOutlineDirectionsTransit,
  MdOutlineStar,
  MdOutlineFactory,
} from 'react-icons/md';

// --- 1. Framer Motion Variants ---

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15, // Increased stagger for better visual flow
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// --- 2. Data Definitions ---

// COMBINED DATA: Core Values and Top Features
interface HighlightData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const highlights: HighlightData[] = [
  // Core Values (using the powerful lucide icons and bold styling)
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Unwavering Excellence',
    description: 'Committed to delivering exceptional service quality and continuous operational improvement.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'True Customer Focus',
    description: 'Dedicated to anticipating and exceeding client needs through personalized and responsive solutions.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Absolute Integrity',
    description: 'Operating with transparency, ethical standards, and a dedication to reliable conduct.'
  },
  // Top Business Features (using the Md icons for variety)
  {
    icon: <MdOutlineAttachMoney className="w-8 h-8" />,
    title: 'Competitive Rates',
    description: 'Strategic low-cost transportation solutions tailored for maximizing your profit margins.'
  },
  {
    icon: <MdOutlineWatchLater className="w-8 h-8" />,
    title: 'Guaranteed On Time',
    description: 'We ensure reliable, guaranteed timely deliveries that keep your supply chain running smoothly.'
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Secure Packaging',
    description: 'Secure and careful cargo handling protocols minimize risk and ensure safe delivery every time.'
  },
];

const metrics: any[] = [ // Re-including KPIs for extra credibility
    { value: '99.8%', label: 'On-Time Rate', IconComponent: Clock },
    { value: '150+', label: 'Global Routes', IconComponent: Truck },
    { value: '4.9/5', label: 'Client Rating', IconComponent: MdOutlineStar },
];

// --- 3. Highlight Card Component ---

const HighlightCard: React.FC<HighlightData> = ({ icon, title, description }) => (
    <motion.div
        variants={itemFadeUp}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl text-center border-t-4 border-orange-500 dark:border-purple-600 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] cursor-pointer"
    >
        <div className="text-purple-600 mb-4 flex justify-center dark:text-orange-500">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-orange-600 dark:text-purple-500">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
);

// --- 4. Metric Card Component ---
const MetricCard: React.FC<{ value: string; label: string; IconComponent: React.ElementType }> = ({ value, label, IconComponent }) => (
    <motion.div 
        variants={itemFadeUp} 
        className="text-center p-4 rounded-lg bg-white/70 shadow-lg dark:bg-gray-800/70 backdrop-blur-sm transition-all hover:bg-orange-50/50 dark:hover:bg-gray-700/50"
    >
        <IconComponent className="w-6 h-6 text-purple-600 mx-auto mb-1 dark:text-orange-400" />
        <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{value}</p>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
);


// --- 5. Main Component ---

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Title and Subtitle */}
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h2 className="text-4xl font-extrabold mb-2">
                Why <span className='text-purple-700 dark:text-orange-500'>Choose </span>
                <span className='text-orange-600 dark:text-purple-700'>Us</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
                Our Commitment to Values and Measurable Results
            </p>
        </motion.div>
        
        {/* KPI Metrics Row */}
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-3 gap-6 mb-16"
        >
            {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
            ))}
        </motion.div>

        {/* Highlighted Features Grid (Values + Top Features) */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {highlights.map((highlight, index) => (
            <HighlightCard 
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;