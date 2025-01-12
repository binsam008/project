
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { MessageSquare, HelpCircle } from 'lucide-react';

const Query = () => {
  const faqs = [
    {
      question: 'What shipping services do you offer?',
      answer: 'We offer comprehensive shipping services including air freight, sea freight, road freight, and specialized cargo handling.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'Once your shipment is processed, you will receive tracking information that you can use to monitor your cargo in real-time.'
    },
    {
      question: 'Do you handle customs clearance?',
      answer: 'Yes, we provide complete customs clearance services to ensure smooth import and export processes.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We operate globally with a strong presence in Bahrain and the GCC region, serving clients worldwide.'
    }
  ];

  return (
    <section id="query" className="py-20 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Have Questions?
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Find answers to common questions or reach out to us directly.
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <HelpCircle className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0 dark:text-orange-500" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <motion.div
                  className="inline-block text-purple-600 mb-4 dark:text-orange-500"
                  whileHover={{ rotate: 20 }}
                  transition={{ duration: 0.1 }}
                >
                  <MessageSquare className="w-12 h-12" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">Need Immediate Support?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Connect with us on WhatsApp for quick assistance
                </p>
                <motion.a
                  href="https://wa.me/97338251155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </motion.a>
              </div>

              <div className="text-center">
                <motion.div
                  className="inline-block text-purple-600 mb-4 dark:text-orange-500"
                  whileHover={{ rotate: 20 }}
                  transition={{ duration: 0.1 }}
                >
                  <MessageSquare className="w-12 h-12" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Reach out via email for any inquiries or support.
                </p>
                <motion.a
                  href="mailto:info.bh@wellreachlogisticsbh.com"
                  className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  <span className='px-3'>Mail Us</span>
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Query;
