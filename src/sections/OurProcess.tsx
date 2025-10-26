import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import logisticsImage from "../assets/logistics-process.jpg"; // ✅ make sure the path is correct

const steps = [
  {
    title: "Before Journey",
    description:
      "Before onboarding a new client, we conduct an in-depth analysis to build trust and understand their logistics ecosystem. This discovery phase maps workflows, identifies challenges, and defines success parameters for seamless alignment.",
  },
  {
    title: "During Journey",
    description:
      "We audit every operational aspect — from workforce capability to equipment efficiency — producing a complete diagnostic report that captures every detail for continuous improvement.",
  },
  {
    title: "After Journey",
    description:
      "Finally, we design a tailored logistics strategy backed by data and real-world expertise — optimizing routes, minimizing downtime, and maximizing long-term performance for our partners.",
  },
];

const OurProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section id="process" className="relative py-24 bg-gray-50 dark:bg-navy-900 overflow-hidden">
      {/* 🔹 Glassmorphed Background Image */}
      <div className="absolute inset-0">
        <img
          src={logisticsImage}
          alt="Logistics Process"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-navy-900/60 backdrop-blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-700 dark:text-orange-500">Our Process</span>
        </motion.h2>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-5 top-0 w-1 bg-purple-600 dark:bg-orange-500 rounded-full origin-top"
            initial={{ scaleY: 0 }}
            animate={controls}
            variants={{
              visible: {
                scaleY: 1,
                transition: { duration: 1.2, ease: "easeOut" },
              },
            }}
            style={{ height: "100%" }}
          />

          {/* Timeline Steps */}
          <div className="space-y-12 pl-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Step Number Circle */}
                <div className="z-10 flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-700 dark:bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="backdrop-blur-md bg-white/70 dark:bg-navy-800/70 p-6 rounded-xl shadow-lg border border-white/30 dark:border-navy-700/40">
                  <h3 className="text-xl font-semibold text-purple-700 dark:text-orange-500 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
