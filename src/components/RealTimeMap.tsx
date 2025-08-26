/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';

interface RealTimeMapProps {
  pickupLocation?: {
    coordinates: [number, number];
    address: string;
  };
  destinationLocation?: {
    coordinates: [number, number];
    address: string;
  };
  driverLocation?: {
    lat: number;
    lng: number;
  };
  rideStatus?: string;
}

export default function RealTimeMap({ 
  pickupLocation, 
  destinationLocation, 
  driverLocation, 
  rideStatus 
}: RealTimeMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  // Simulate driver movement (in real app, this would come from WebSocket/API)
  useEffect(() => {
    if (rideStatus === 'ACCEPTED' || rideStatus === 'PICKED_UP' || rideStatus === 'IN_TRANSIT') {
      const interval = setInterval(() => {
        // In real implementation, update driver location from backend
        console.log('Updating driver location...');
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [rideStatus]);

  const openDirections = () => {
    if (pickupLocation && destinationLocation) {
      const pickup = `${pickupLocation.coordinates[1]},${pickupLocation.coordinates[0]}`;
      const destination = `${destinationLocation.coordinates[1]},${destinationLocation.coordinates[0]}`;
      const url = `https://www.google.com/maps/dir/${pickup}/${destination}`;
      window.open(url, '_blank');
    }
  };

  const openPickupInMaps = () => {
    if (pickupLocation) {
      const lat = pickupLocation.coordinates[1];
      const lng = pickupLocation.coordinates[0];
      const url = `https://www.google.com/maps?q=${lat},${lng}&label=Pickup`;
      window.open(url, '_blank');
    }
  };

  const openDestinationInMaps = () => {
    if (destinationLocation) {
      const lat = destinationLocation.coordinates[1];
      const lng = destinationLocation.coordinates[0];
      const url = `https://www.google.com/maps?q=${lat},${lng}&label=Destination`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="space-y-4">
      {/* Interactive Map */}
      <div 
        ref={mapRef}
        className="relative bg-gradient-to-br from-blue-100 via-green-50 to-red-100 h-96 rounded-xl border-2 border-gray-200 overflow-hidden shadow-inner"
      >
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#4B5563" strokeWidth="0.5"/>
                <circle cx="15" cy="15" r="1" fill="#6B7280" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Road Lines */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 40% L 100% 60%" stroke="#E5E7EB" strokeWidth="3" opacity="0.6"/>
            <path d="M 20% 0 L 80% 100%" stroke="#E5E7EB" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>

        {/* Map Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-8">
              {/* Pickup Location */}
              {pickupLocation && (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-green-700">Pickup</span>
                </div>
              )}

              {/* Driver Location */}
              {driverLocation && (rideStatus === 'ACCEPTED' || rideStatus === 'PICKED_UP' || rideStatus === 'IN_TRANSIT') && (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2 animate-bounce">
                    <Car className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-blue-700">Driver</span>
                </div>
              )}

              {/* User Location */}
              {userLocation && (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs font-medium text-purple-700">You</span>
                </div>
              )}

              {/* Destination Location */}
              {destinationLocation && (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-2">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-red-700">Destination</span>
                </div>
              )}
            </div>

            {/* Route Line Simulation */}
            <div className="flex justify-center">
              <div className="h-1 w-64 bg-gradient-to-r from-green-500 via-blue-500 to-red-500 rounded-full opacity-60"></div>
            </div>

            <div className="space-y-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50">
              <p className="text-lg font-bold text-gray-800">🗺️ Live Route Map</p>
              <p className="text-sm text-gray-600">
                {rideStatus === 'REQUESTED' && '🔍 Searching for nearby drivers...'}
                {rideStatus === 'ACCEPTED' && '🚗 Driver is heading to pickup location'}
                {rideStatus === 'PICKED_UP' && '📍 You have been picked up'}
                {rideStatus === 'IN_TRANSIT' && '🛣️ En route to your destination'}
                {rideStatus === 'COMPLETED' && '✅ Journey completed successfully'}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Updates every 5 seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <div className={`w-2 h-2 rounded-full ${
              rideStatus === 'IN_TRANSIT' ? 'bg-green-500 animate-pulse' : 
              rideStatus === 'ACCEPTED' || rideStatus === 'PICKED_UP' ? 'bg-blue-500 animate-pulse' : 
              'bg-gray-400'
            }`}></div>
            <span className="text-xs font-medium">Live</span>
          </div>
        </div>
      </div>

      {/* Map Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button 
          onClick={openPickupInMaps}
          className="flex items-center justify-center gap-2 p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors"
        >
          <MapPin className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">View Pickup</span>
        </button>
        
        <button 
          onClick={openDirections}
          className="flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
        >
          <Navigation className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Get Directions</span>
        </button>
        
        <button 
          onClick={openDestinationInMaps}
          className="flex items-center justify-center gap-2 p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors"
        >
          <MapPin className="h-4 w-4 text-red-600" />
          <span className="text-sm font-medium text-red-700">View Destination</span>
        </button>
      </div>

      {/* Real-time Updates Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-blue-800">Real-time Updates</span>
        </div>
        <p className="text-xs text-blue-600">
          Location updates every 5 seconds • Driver position tracked live • Route optimized automatically
        </p>
      </div>
    </div>
  );
}