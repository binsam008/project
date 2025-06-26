import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dubai from "../assets/bahrain.png";
import india from "../assets/india.png";

const locations = [
  {
    title: "Bangalore",
    addressLine1: "#368, 2nd Floor, Jakkur Layout, Amruthahalli, Banglore - 560092 India",
    phone: "+91 96328 49502",
    email: "varun@wellreachlogistics.com",
    branchHead: "Varun Dev P.V",
    image: india,
  },
  {
    title: "Cochin",
    addressLine1: "# CC 28/447, Club Road, Giri Nagar,",
    addressLine2: "Kadavanthara, Cochin, Kerala, India – 682020",
    phone: "+91 81370 15484",
    email: "visakh@wellreachlogistics.com",
    branchHead: "Visakh P V",
    image: india,
  },
  {
    title: "Calicut",
    addressLine1: "# 2/2288, Peringatt Building, Opp. Civil Station,",
    addressLine2: "Calicut, Kerala, India – 673020",
    phone: "+91 99021 85610",
    email: "sales@wellreachlogistics.com",
    branchHead: "Krishna Raj P S",
    image: india,
  },
  {
    title: "Bahrain",
    addressLine1: "#2, Building 1698, Block 608, Road 845,",
    addressLine2: "Wadiyan, Sitra, Bahrain",
    phone: "+973 3825 1155",
    email: "info.bh@wellreachlogisticsbh.com",
    branchHead: "Anees K P",
    image: dubai,
  },
];


const Location = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="locations" className="py-20 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-purple-700 dark:text-orange-500 text-4xl">Our </span>
          <span className="text-orange-600 dark:text-purple-700 text-4xl">Locations</span>
        </motion.h2>

        <p className="text-center max-w-2xl mx-auto mb-12 text-sm text-gray-700 dark:text-gray-300">
          Need expert advice or want to know more about our services and pricing? Feel free to reach out to any of our international locations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-navy-800 rounded-xl shadow-md overflow-hidden"
              whileHover={{ y: -4 }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={loc.image}
                    alt={`${loc.title} illustration`}
                    className={`w-full h-full object-cover transition-all duration-500
                    ${isDark ? "filter brightness-100" : "filter brightness-100"}
                    `}
                  />
                </div>
                <div className="p-6 md:w-1/2 space-y-2">
                  <h3 className="text-xl font-semibold text-orange-500 dark:text-purple-500">{loc.title}</h3>
                  <p>{loc.addressLine1}</p>
                  <p>{loc.addressLine2}</p>
                  <p><strong>Call:</strong> {loc.phone}</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${loc.email}`} className="underline text-blue-600 dark:text-blue-400">
                      {loc.email}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
