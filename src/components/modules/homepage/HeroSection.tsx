import React from "react";
import { Button } from "@/components/ui/button";

import { Star, Shield, Car } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-gray-950 relative overflow-hidden font-primary">
      <div className="container mx-auto px-4 pt-16 relative z-10 mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Content */}
          <div className="w-1/2">
            <h1 className="text-4xl lg:text-6xl font-primary text-primary dark:text-white mb-4 leading-tight">
              Your Ride Elevated
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
              Your reliable ride is just a tap away. Experience premium comfort,
              safety, and convenience with our professional drivers.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-10 mb-10">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Safe rides
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Car className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Premium vehicles
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Rated drivers
                </span>
              </div>
            </div>
            <Link to="/login">
              <Button className="px-8 py-6 text-lg font-semibold">
                Book A Ride
              </Button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="w-1/2 flex-1 flex justify-center font-secondary">
            <div className="relative">
              <div className="w-80 h-[520px] bg-gray-900 rounded-[40px] p-4 shadow-2xl relative">
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                  <div className="h-full bg-gradient-to-b from-blue-900 to-primary/10 p-5 text-white">
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-xl font-bold">GoRide</div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Where to?</h3>
                      <div className="bg-white/20 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                          <span className="text-xs">A</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            Current location
                          </div>
                          <div className="text-xs opacity-80">Detecting...</div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 flex items-center gap-3 mt-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-xs text-white">B</span>
                        </div>
                        <div className="text-gray-800">Enter destination</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 text-gray-800 mt-8">
                      <div className="flex justify-between mb-4">
                        <div>
                          <div className="font-bold">RideShareX</div>
                          <div className="text-sm text-gray-500">
                            4 min away • SUV
                          </div>
                        </div>
                        <div className="font-bold">$12-16</div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="font-bold">RideShare Comfort</div>
                          <div className="text-sm text-gray-500">
                            7 min away • Premium
                          </div>
                        </div>
                        <div className="font-bold">$18-22</div>
                      </div>
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                        Confirm Ride
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
