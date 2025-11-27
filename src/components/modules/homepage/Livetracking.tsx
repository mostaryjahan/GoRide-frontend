// /* eslint-disable @typescript-eslint/no-unused-vars */

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { MapPin, Navigation, Share2, Shield, Clock, Car } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// const LiveTrackingDemo = () => {
//   const [driverPosition, setDriverPosition] = useState({ x: 10, y: 70 });
//   const [userPosition, setUserPosition] = useState({ x: 50, y: 50 });
//   const [isTracking, setIsTracking] = useState(false);
//   const [eta, setEta] = useState(5);

//   const driverPath = [
//     { x: 10, y: 70 },
//     { x: 25, y: 65 },
//     { x: 40, y: 60 },
//     { x: 55, y: 55 },
//     { x: 70, y: 50 }
//   ];

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
    
//     if (isTracking) {
//       let step = 0;
//       interval = setInterval(() => {
//         if (step < driverPath.length) {
//           setDriverPosition(driverPath[step]);
//           setEta(5 - step);
//           step++;
//         } else {
//           setIsTracking(false);
//         }
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isTracking]);

//   const startTracking = () => {
//     setDriverPosition({ x: 10, y: 70 });
//     setEta(5);
//     setIsTracking(true);
//   };

//   return (
//     <section className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
//             Real-time Live Tracking
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Track your driver in real-time and know exactly when they'll arrive
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           {/* Tracking Demo */}
//           <div className="flex-1">
//             <Card className="overflow-hidden border-0">
//               <CardContent className="p-0">
//                 {/* Map Container */}
//                 <div className="relative bg-gradient-to-br from-blue-100 to-green-100  h-96 rounded-lg overflow-hidden">
//                   {/* Map Grid */}
//                   <div className="absolute inset-0 opacity-30">
//                     {Array.from({ length: 20 }).map((_, i) => (
//                       <div key={i} className="h-px bg-gray-400 w-full" style={{ top: `${i * 5}%` }}></div>
//                     ))}
//                     {Array.from({ length: 20 }).map((_, i) => (
//                       <div key={i} className="w-px bg-gray-400 h-full" style={{ left: `${i * 5}%` }}></div>
//                     ))}
//                   </div>

//                   {/* Roads */}
//                   <div className="absolute w-full h-2 bg-gray-600 top-1/2 transform -translate-y-1/2"></div>
//                   <div className="absolute h-full w-2 bg-gray-600 left-1/2 transform -translate-x-1/2"></div>

//                   {/* User Location */}
//                   <div 
//                     className="absolute w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
//                     style={{ left: `${userPosition.x}%`, top: `${userPosition.y}%` }}
//                   >
//                     <MapPin className="h-3 w-3 text-white" />
//                   </div>

//                   {/* Driver Car */}
//                   <div 
//                     className="absolute transition-all duration-1000 ease-in-out"
//                     style={{ left: `${driverPosition.x}%`, top: `${driverPosition.y}%` }}
//                   >
//                     <div className="bg-white p-2 rounded-lg shadow-lg border">
//                       <Car className="h-6 w-6 text-green-600" />
//                     </div>
//                     <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
//                   </div>

//                   {/* Route Line */}
//                   <div 
//                     className="absolute h-1 bg-blue-500 rounded-full transform -rotate-45 origin-left"
//                     style={{
//                       width: `${Math.sqrt(Math.pow(driverPosition.x - userPosition.x, 2) + Math.pow(driverPosition.y - userPosition.y, 2))}%`,
//                       left: `${userPosition.x}%`,
//                       top: `${userPosition.y}%`
//                     }}
//                   ></div>

//                   {/* Map Labels */}
//                   <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md">
//                     <div className="text-sm font-semibold text-gray-700 ">Live Map View</div>
//                   </div>
//                 </div>

//                 {/* Demo Controls */}
//                 <div className="p-6 bg-gray-50">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-5 w-5 text-gray-600" />
//                       <span className="font-semibold">ETA: {eta} min</span>
//                     </div>
//                     <Button 
//                       onClick={startTracking}
//                       disabled={isTracking}
//                       className="bg-blue-600 hover:bg-blue-700"
//                     >
//                       {isTracking ? 'Tracking...' : 'Start Demo'}
//                     </Button>
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Click "Start Demo" to see real-time tracking in action
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Features List */}
//           <div className="flex-1 max-w-md">
//             <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
//               Stay Informed Every Step of the Way
//             </h3>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-green-100 p-3 rounded-full mt-1">
//                   <Navigation className="h-6 w-6 text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
//                     Real-time Location
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     See exactly where your driver is and track their route to your location
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-100 p-3 rounded-full mt-1">
//                   <Clock className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
//                     Accurate ETA
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     Get precise arrival times updated in real-time based on traffic conditions
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-purple-100 p-3 rounded-full mt-1">
//                   <Share2 className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
//                     Share Your Ride
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     Share your trip details and live location with friends and family
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-red-100 p-3 rounded-full mt-1">
//                   <Shield className="h-6 w-6 text-red-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
//                     Safety First
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     Emergency assistance and ride details always accessible
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-6 text-lg">
//               Download App for Live Tracking
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LiveTrackingDemo;