import React from "react";
import { Car, Bike, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface Service {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
  features: string[];
  estimatedTime: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      name: "GoRide Economy",
      description: "Affordable rides for everyday travel",
      priceRange: "$50 - $200",
      icon: <Car className="w-8 h-8" />,
      features: ["4-seater", "AC", "Cashless rides"],
      estimatedTime: "2-5 mins",
    },
    {
      id: 2,
      name: "GoRide Premium",
      description: "Comfort for special occasions",
      priceRange: "$150 - $400",
      icon: <Car className="w-8 h-8" />,
      features: ["4-seater", "Premium AC", "Priority booking"],
      estimatedTime: "5-8 mins",
    },
    {
      id: 3,
      name: "GoRide SUV",
      description: "Spacious rides for groups ",
      priceRange: "$200 - $500",
      icon: <Car className="w-8 h-8" />,
      features: ["6-seater", "Extra luggage", "Family friendly"],
      estimatedTime: "5-10 mins",
    },
    {
      id: 4,
      name: "GoRide Bike",
      description: "Quick and economical bike rides",
      priceRange: "$20 - $80",
      icon: <Bike className="w-8 h-8" />,
      features: ["1-seater", "Quick commute", "Traffic beat"],
      estimatedTime: "1-3 mins",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className=" max-w-7xl mx-auto px-2">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-foreground mb-4 font-[family-name:var(--font-montserrat)]"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto"
          >
            Choose from our variety of ride options tailored to your needs and
            budget
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: service.id * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <div className="text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
              </div>

              {/* Service Name & Description */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {service.priceRange}
                </span>
              </div>

              {/* Features */}
              <div className="mb-4 space-y-2">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Star className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Estimated Time */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Est. arrival
                </span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {service.estimatedTime}
                </span>
              </div>

              {/* Book Button */}
              <Link to="/rider/book-ride">
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Book Now
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
