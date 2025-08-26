/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  MapPin,
  Navigation,
  Car,
  Clock,
  MapPinIcon,
  CreditCard,
  Wallet,
} from "lucide-react";
import LocationInput from "../../pages/rider/LocationInput";
import { useCreateRideMutation } from "@/redux/features/rides/rides.api";
import { useInitRidePaymentMutation } from "@/redux/features/payment/payment.api";
import toast from "react-hot-toast";

interface Location {
  id: number;
  name: string;
  address: string;
  coords: { lat: number; lng: number };
}

interface RideFormData {
  pickupLocation: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  destinationLocation: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  fare: number;
}

export default function RideReqForm() {
  const [pickupInput, setPickupInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [destinationLocation, setDestinationLocation] =
    useState<Location | null>(null);
  const [estimatedFare, setEstimatedFare] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const pickupRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  const [createRide, { isLoading }] = useCreateRideMutation();
  const [initRidePayment] = useInitRidePaymentMutation();

  const { handleSubmit } = useForm<RideFormData>();

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setPickupInput("");
      setDestinationInput("");
      setPickupLocation(null);
      setDestinationLocation(null);
      setEstimatedFare(0);
      setPaymentMethod("cash");
      setIsSubmitted(false);
    };
  }, []);

  // Calculate fare based on distance
  const calculateFare = (pickup: Location, destination: Location) => {
    const distance = getDistance(pickup.coords, destination.coords);
    const baseFare = 50; // Base fare in BDT
    const perKmRate = 15; // Rate per km
    return Math.round(baseFare + distance * perKmRate);
  };

  // Calculate distance between two coordinates
  const getDistance = (
    coord1: { lat: number; lng: number },
    coord2: { lat: number; lng: number }
  ) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
    const dLon = ((coord2.lng - coord1.lng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((coord1.lat * Math.PI) / 180) *
        Math.cos((coord2.lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handlePickupSelect = (location: Location) => {
    setPickupLocation(location);
    setPickupInput(location.name);
    if (destinationLocation) {
      const fare = calculateFare(location, destinationLocation);
      setEstimatedFare(fare);
    }
  };

  const handleDestinationSelect = (location: Location) => {
    setDestinationLocation(location);
    setDestinationInput(location.name);
    if (pickupLocation) {
      const fare = calculateFare(pickupLocation, location);
      setEstimatedFare(fare);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLoc = {
            id: 999,
            name: "Current Location",
            address: "Your current location",
            coords: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          };
          handlePickupSelect(currentLoc);
        },
        () => {
          toast.error("Unable to get current location");
        }
      );
    } else {
      toast.error("Geolocation is not supported");
    }
  };

  const validateForm = () => {
    const errors = [];
    
    if (!pickupLocation) {
      errors.push("Please select a pickup location");
    }
    
    if (!destinationLocation) {
      errors.push("Please select a destination location");
    }
    
    if (pickupLocation && destinationLocation) {
      const distance = getDistance(pickupLocation.coords, destinationLocation.coords);
      if (distance < 0.5) {
        errors.push("Pickup and destination must be at least 500 meters apart");
      }
      if (distance > 100) {
        errors.push("Maximum ride distance is 100 km");
      }
    }
    
    if (estimatedFare < 50) {
      errors.push("Minimum fare is ৳50");
    }
    
    if (estimatedFare > 5000) {
      errors.push("Maximum fare is ৳5000");
    }
    
    return errors;
  };

  const onSubmit = async () => {
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      validationErrors.forEach(error => toast.error(error));
      return;
    }

    try {
      const rideData = {
        pickupLocation: {
          address: pickupLocation?.name,
          coordinates: {
            lat: pickupLocation?.coords.lat,
            lng: pickupLocation?.coords.lng,
          },
        },
        destinationLocation: {
          address: destinationLocation?.name,
          coordinates: {
            lat: destinationLocation?.coords.lat,
            lng: destinationLocation?.coords.lng,
          },
        },
        fare: estimatedFare,
        paymentMethod: paymentMethod,
      };


      
      const rideResponse = await createRide(rideData).unwrap();
      
      if (paymentMethod === "card") {
        // Redirect to SSLCommerz for card payment
        try {
          const paymentResponse = await initRidePayment(rideResponse.data._id).unwrap();
          if (paymentResponse.data?.GatewayPageURL) {
            // Successful payment initialization - redirect to gateway
            window.location.href = paymentResponse.data?.GatewayPageURL;
            return; // Don't show any error
          } else {
            toast.error("Payment gateway error");
          }
        } catch (paymentError: any) {
          console.error('Payment error:', paymentError);
          toast.error("Payment initialization failed");
          return; // Don't throw error, ride is already created
        }
      } else {
        // Cash payment - show success message
        toast.success("Ride requested successfully!");
        setIsSubmitted(true);

        // Reset form after showing confirmation
        setTimeout(() => {
          setPickupInput("");
          setDestinationInput("");
          setPickupLocation(null);
          setDestinationLocation(null);
          setEstimatedFare(0);
          setPaymentMethod("cash");
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error: any) {
      // This catch block only handles ride creation errors
      console.error('Ride creation error:', error);
      const errorMessage = error?.data?.message || "Failed to request ride";
      toast.error(errorMessage);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-5 w-5" />
          Request a Ride
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <LocationInput
              id="pickup"
              label="Pickup Location"
              value={pickupInput}
              onChange={setPickupInput}
              onLocationSelect={handlePickupSelect}
              icon={<MapPin className="h-4 w-4" />}
              inputRef={pickupRef}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={getCurrentLocation}
              className="w-full"
            >
              <MapPinIcon className="h-4 w-4 mr-2" />
              Use Current Location
            </Button>
          </div>

          <LocationInput
            id="destination"
            label="Destination"
            value={destinationInput}
            onChange={setDestinationInput}
            onLocationSelect={handleDestinationSelect}
            icon={<Navigation className="h-4 w-4" />}
            inputRef={destinationRef}
          />

          {estimatedFare > 0 && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Estimated Fare:</span>
                <span className="font-semibold text-lg">৳{estimatedFare}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <Clock className="h-3 w-3" />
                Est. 10-15 mins
              </div>
            </div>
          )}

          {estimatedFare > 0 && (
            <div className="space-y-3">
              <Label className="text-sm font-medium">Payment Method</Label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label
                    htmlFor="cash"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Wallet className="h-4 w-4" />
                    Cash
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label
                    htmlFor="card"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <CreditCard className="h-4 w-4" />
                    Card
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {isSubmitted && pickupLocation && destinationLocation && (
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Ride Requested Successfully!
              </h3>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-green-600" />
                  <div>
                    <span className="font-medium">From:</span>{" "}
                    {pickupLocation.name}
                    <br />
                    <span className="text-xs text-green-600">
                      {pickupLocation.address}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Navigation className="h-4 w-4 mt-0.5 text-green-600" />
                  <div>
                    <span className="font-medium">To:</span>{" "}
                    {destinationLocation.name}
                    <br />
                    <span className="text-xs text-green-600">
                      {destinationLocation.address}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-green-200">
                  <span>Fare: ৳{estimatedFare}</span>
                  <span>
                    Payment: {paymentMethod === "cash" ? "Cash" : "Card"}
                  </span>
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={
              !pickupLocation ||
              !destinationLocation ||
              isLoading ||
              isSubmitted
            }
          >
            {isLoading ? "Requesting..." : "Request Ride"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}