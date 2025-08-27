import { Badge } from "@/components/ui/badge";
import { Car, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Badge
                variant="secondary"
                className="mb-4 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 border-blue-200"
              >
                🚗 Your Ride, Your Way
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight">
                Safe, Fast & <span className="text-blue-600">Reliable</span> Rides
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg mx-auto md:mx-0">
                Experience the future of transportation with our premium
                ride-sharing platform. Book instantly, track in real-time, and
                travel with confidence.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link
                  to="/login"
                  className="text-base sm:text-lg text-center px-4 py-2 flex items-center justify-center rounded-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Book a Ride
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
                <Link
                  to="/login"
                  className="text-base sm:text-lg text-center px-4 py-2 flex items-center justify-center rounded-sm border border-blue-300 text-blue-600 hover:bg-blue-200 bg-transparent transition-colors"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Drive with Us
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative z-10">
              <img
                src="/images/home/hero.png"
                alt="RideShare App Interface"
                className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-48 sm:w-64 md:w-72 h-56 sm:h-72 md:h-80 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-40 sm:w-56 md:w-64 h-48 sm:h-64 md:h-64 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}