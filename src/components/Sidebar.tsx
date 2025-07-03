import { Link } from 'react-scroll';
import {
  Home,
  Info,
  Briefcase,
  Users,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  LocateFixed,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const sidebarItems = [
    { icon: <Home size={20} />, to: 'home', label: 'Home' },
    { icon: <Info size={20} />, to: 'about', label: 'About' },
    { icon: <Briefcase size={20} />, to: 'services', label: 'Services' },
    { icon: <Users size={20} />, to: 'team', label: 'Team' },
    { icon: <MapPin size={20} />, to: 'locations', label: 'Locations' },
    { icon: <LocateFixed size={20} />, to: 'tracking', label: 'Tracking' },
    { icon: <Phone size={20} />, to: 'contact', label: 'Contact' },
    {
      icon: <MessageSquare size={20} />,
      to: 'https://wa.me/97338251155',
      label: 'WhatsApp',
      external: true,
    },
    {
      icon: <Mail size={20} />,
      to: 'mailto:info.bh@wellreachlogisticsbh.com',
      label: 'Mail',
      external: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="flex flex-col space-y-4">
        {sidebarItems.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-navy-800 rounded-full flex items-center justify-center shadow-lg hover:bg-navy-700 dark:hover:bg-navy-700 transition-colors duration-200 group relative"
            >
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-orange-400">
                {item.icon}
              </span>
              <span className="absolute top-1/2 left-12 -translate-y-1/2 bg-white dark:bg-navy-800 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md z-50">
                {item.label}
              </span>
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              className="w-10 h-10 bg-white dark:bg-navy-800 rounded-full flex items-center justify-center shadow-lg hover:bg-navy-700 dark:hover:bg-navy-700 transition-colors duration-200 group relative cursor-pointer"
            >
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-orange-400">
                {item.icon}
              </span>
              <span className="absolute top-1/2 left-12 -translate-y-1/2 bg-white dark:bg-navy-800 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md z-50">
                {item.label}
              </span>
            </Link>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
