// components/sections/download-app.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone, Download } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Smartphone className="h-8 w-8" />
              <span className="text-xl font-semibold">GoRide Mobile App</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Download the GoRide App
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Get the best experience with our mobile app. Book rides faster, track your driver in real-time, and manage your payments seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                <Apple className="h-6 w-6 mr-3" />
                Download for iOS
              </Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold">
                <Download className="h-6 w-6 mr-3" />
                Download for Android
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-[500px] bg-gray-800 rounded-[40px] p-4 shadow-2xl relative">
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                  {/* App Screen Content */}
                  <div className="h-full bg-gradient-to-b from-blue-500 to-purple-600 p-6 text-white">
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-xl font-bold">GoRide</div>
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-sm font-bold">JS</span>
                      </div>
                    </div>
                    
                    <div className="text-center mt-12">
                      <div className="text-2xl font-bold mb-4">Welcome to GoRide</div>
                      <div className="text-lg opacity-90 mb-8">Your ride is just a tap away</div>
                      
                      <div className="bg-white/20 rounded-2xl p-6 mb-6">
                        <div className="text-3xl font-bold mb-2">$12.50</div>
                        <div className="text-sm opacity-90">Estimated fare</div>
                      </div>
                      
                      <button className="bg-white text-blue-600 w-full py-4 rounded-xl font-bold text-lg">
                        Book Ride Now
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;