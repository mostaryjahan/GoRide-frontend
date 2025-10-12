import React from 'react';
import { Play, Star, Shield, Zap, ArrowRight, CarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Temporary image - replace with your actual image
const heroImage = "/images/home/hero.avif";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const features = [
    { icon: <Zap className="w-6 h-6" />, text: 'Instant Booking', subtext: 'Rides in 2-5 mins' },
    { icon: <Shield className="w-6 h-6" />, text: 'Safe & Secure', subtext: 'Verified drivers' },
    { icon: <Star className="w-6 h-6" />, text: '4.8 Rated', subtext: 'By 1M+ customers' }
  ];

  return (
      <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} 
     className="relative min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full">
        <svg 
          className="w-full h-full animate-float"
          viewBox="0 0 1200 800" 
          preserveAspectRatio="none"
        >
          {/* Background Gradient */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="waveGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3730a3" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#5b21b6" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          
          {/* Animated Wave 1 */}
          <path 
            d="M0,200 Q300,100 600,300 T1200,200 L1200,800 L0,800 Z" 
            fill="url(#waveGradient)" 
            className="dark:fill-[url(#waveGradientDark)] animate-wave-1"
          />
          
          {/* Animated Wave 2 */}
          <path 
            d="M0,400 Q400,250 800,450 T1200,350 L1200,800 L0,800 Z" 
            fill="url(#waveGradient)" 
            fillOpacity="0.3"
            className="dark:fill-[url(#waveGradientDark)] animate-wave-2"
          />
          
          {/* Animated Wave 3 */}
          <path 
            d="M0,550 Q500,400 900,600 T1200,500 L1200,800 L0,800 Z" 
            fill="url(#waveGradient)" 
            fillOpacity="0.2"
            className="dark:fill-[url(#waveGradientDark)] animate-wave-3"
          />
          
          
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-200/20 to-transparent dark:from-blue-900/10"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 font-[family-name:var(--font-montserrat)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-gray-900 dark:text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1 bg-blue-200 text-blue-600 rounded-full text-sm font-medium mb-3">
              <Star className="w-5 h-5 mr-2 text-yellow-600 fill-amber-500" />
              <span>Trusted by 1M+ riders nationwide</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl md:text-6xl font-bold mb-5 leading-tight">
              Your Ride,
              <span className="block text-blue-600 dark:text-blue-400">
                On Demand
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className=" md:text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              Experience the future of transportation with <span className="font-semibold text-blue-600 dark:text-blue-400">GoRide</span>. 
              Safe, reliable, and affordable rides at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <Link to="/login">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-xl transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                Book Your Ride
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              
              <button className="group border-2 border-blue-600 dark:border-gray-600 text-blue-600 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 font-medium text-lg px-5 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/50"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                    <div className="text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{feature.text}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Happy customer using GoRide app" 
                className="w-full md:h-[480px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card 1 - */}
            <div className="absolute top-8 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl"><CarIcon/></span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Eric</div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    4.9 • 2 mins away
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2  */}
            <div className="absolute bottom-8 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 hidden sm:block">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">$149</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">to Airport</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">15% off first ride</div>
              </div>
            </div>

            {/* App Download Badge */}
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm rounded-2xl p-4 text-white hidden sm:block ">
              <div className="text-sm mb-2">Get the app</div>
              <div className="flex space-x-2">
                <button className="bg-white text-black px-3 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors">
                  Play Store
                </button>
                <button className="bg-white text-black px-3 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors">
                  App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes wave-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wave-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wave-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wave-bottom {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-wave-1 {
          animation: wave-1 6s ease-in-out infinite;
        }
        .animate-wave-2 {
          animation: wave-2 7s ease-in-out infinite;
        }
        .animate-wave-3 {
          animation: wave-3 8s ease-in-out infinite;
        }
        .animate-wave-bottom {
          animation: wave-bottom 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out 1s infinite;
        }
        .animate-float-slower {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float 11s ease-in-out 2s infinite;
        }
      `}</style>
   </motion.section>
  );
};

export default HeroSection;