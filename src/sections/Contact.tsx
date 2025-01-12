import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+973 38251155',
      link: 'tel:+97338251155',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info.bh@wellreachlogisticsbh.com',
      link: 'mailto:info.bh@wellreachlogisticsbh.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Tubli, Kingdom Of Bahrain',
      link: 'https://goo.gl/maps/YOUR_LOCATION',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us',
      link: 'https://wa.me/97338251155',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: 'wellreachbh',
      link: 'https://www.instagram.com/wellreachbh/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Contact Us</h2>
          <p className="text-gray-400">Get in touch with our team</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-800 p-6 rounded-lg hover:bg-navy-900 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 break-words text-sm">
                  {item.content}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5123464455366!2d50.5577892!3d26.1897153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a58b0e7f3c33%3A0x0!2sTubli%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1645000000000!5m2!1sen!2sbh"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
