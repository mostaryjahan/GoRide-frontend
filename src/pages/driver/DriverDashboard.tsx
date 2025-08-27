/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, DollarSign, Clock, ToggleLeft, ToggleRight, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserInfoQuery, useUpdateDriverStatusMutation } from "@/redux/features/auth/auth.api";
import { useGetDriverStatsQuery, useGetAvailableRidesQuery, useAcceptRideMutation, useRejectRideMutation, useGetActiveRidesQuery, useUpdateRideStatusMutation, useGetDriverEarningsQuery } from "@/redux/features/driver/driver.api";
import toast from "react-hot-toast";
import SOSButton from "@/components/SOSButton";

export default function DriverDashboard() {
  // const { data: userInfo, refetch } = useUserInfoQuery({});
  // const { data: statsData } = useGetDriverStatsQuery({});
  // const { data: earningsData } = useGetDriverEarningsQuery({});
  const [updateDriverStatus] = useUpdateDriverStatusMutation();
  const [acceptRide] = useAcceptRideMutation();
  const [rejectRide] = useRejectRideMutation();
  const { data: activeRidesData, refetch: refetchActiveRides } = useGetActiveRidesQuery({});
  const [updateRideStatus] = useUpdateRideStatusMutation();

  // In your dashboard component, make sure you're using the user ID
const { data: userInfo } = useUserInfoQuery({});
const userId = userInfo?.data?._id;

// Then use this userId in your queries
const { data: statsData } = useGetDriverStatsQuery(userId, { skip: !userId });
const { data: earningsData } = useGetDriverEarningsQuery(userId, { skip: !userId });
  
  const user = userInfo?.data;
  const stats = statsData?.data || {};
  const earnings = earningsData?.data || {};
  const [isOnline, setIsOnline] = useState(user?.isOnline || false);
  
  const { data: availableRidesData, refetch: refetchRides } = useGetAvailableRidesQuery({}, { skip: !isOnline });


  useEffect(() => {
    if (user?.isOnline !== undefined) {
      setIsOnline(user.isOnline);
    }
  }, [user?.isOnline]);

  const toggleOnlineStatus = async () => {
    try {
      const newStatus = !isOnline;
      await updateDriverStatus({ isOnline: newStatus }).unwrap();
      setIsOnline(newStatus);
      // refetch(); 
      if (newStatus) {
        refetchRides(); 
      }
      toast.success(newStatus ? "You're now online" : "You're now offline");
    } catch (error) {
      toast.error("Failed to update status");
      console.error(error);
    }
  };

  const handleAcceptRide = async (rideId: string) => {
    try {
      await acceptRide(rideId).unwrap();
      toast.success("Ride accepted successfully!");
      refetchRides();
      refetchActiveRides();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to accept ride");
    }
  };

  const handleRejectRide = async (rideId: string) => {
    try {
      await rejectRide(rideId).unwrap();
      toast.success("Ride rejected");
      refetchRides();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to reject ride");
    }
  };

  const handleUpdateRideStatus = async (rideId: string) => {
    try {
      await updateRideStatus(rideId).unwrap();
      toast.success("Ride status updated successfully!");
      refetchActiveRides();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update ride status");
    }
  };

  const getNextStatusText = (currentStatus: string) => {
    switch (currentStatus) {
      case 'ACCEPTED': return 'Mark as Picked Up';
      case 'PICKED_UP': return 'Start Trip';
      case 'IN_TRANSIT': return 'Complete Trip';
      default: return 'Update Status';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Driver Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            <Badge className="dark:text-foreground" variant={isOnline ? "default" : "secondary"}>
              {isOnline ? "Online" : "Offline"}
            </Badge>
          </div>
          <Button
            onClick={toggleOnlineStatus}
            variant={isOnline ? "destructive" : "default"}
            className="flex items-center gap-2"
          >
            {isOnline ? (
              <>
                <ToggleRight className="h-4 w-4" />
                Go Offline
              </>
            ) : (
              <>
                <ToggleLeft className="h-4 w-4" />
                Go Online
              </>
            )}
          </Button>
        </div>
      </div>

      {!isOnline && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-4">
            <p className="text-orange-800 text-sm">
              You're currently offline. Go online to start receiving ride requests from passengers.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{earnings.todayEarnings?.toFixed(2) || stats.todayEarnings?.toFixed(2) || '0.00'}</div>
            <p className="text-xs text-muted-foreground">
              {earnings.todayRides || stats.todayRides || 0} rides completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{earnings.weeklyEarnings?.toFixed(2) || '0.00'}</div>
            <p className="text-xs text-muted-foreground">
              {earnings.weeklyRides || 0} rides
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{earnings.monthlyEarnings?.toFixed(2) || '0.00'}</div>
            <p className="text-xs text-muted-foreground">
              {earnings.monthlyRides || 0} rides
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* <div className="text-2xl font-bold">{stats.averageRating?.toFixed(1) || '0.0'}</div> */}
            <p className="text-xs text-muted-foreground">
              Based on {stats.totalRides || 0} rides
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Rides Section - Debug */}
      <Card>
        <CardHeader>
          <CardTitle>Active Rides: {activeRidesData?.data?.length || 0}</CardTitle>
        </CardHeader>
        <CardContent>
          {activeRidesData?.data?.length > 0 ? (
            <div className="space-y-4">
              {activeRidesData.data.map((ride: any) => {
                const pickupAddress = typeof ride.pickupLocation === 'object' 
                  ? ride.pickupLocation?.address 
                  : ride.pickupLocation;
                const destinationAddress = typeof ride.destinationLocation === 'object' 
                  ? ride.destinationLocation?.address 
                  : ride.destinationLocation;
                
                return (
                  <div key={ride._id} className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-950">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-medium">{pickupAddress} → {destinationAddress}</p>
                        <p className="text-sm text-muted-foreground">
                          Rider: {ride.rider?.name || ride.rider?.email || 'Loading...'}
                        </p>
                        <p className="text-xs text-gray-500">
                          Status: {ride.status}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">৳{ride.fare}</p>
                        <Badge className={`${
                          ride.status === 'ACCEPTED' ? 'bg-blue-100 text-blue-800' :
                          ride.status === 'PICKED_UP' ? 'bg-orange-100 text-orange-800' :
                          ride.status === 'IN_TRANSIT' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {ride.status}
                        </Badge>
                      </div>
                    </div>
                    
                    {ride.status !== 'COMPLETED' && ride.status !== 'CANCELLED' && (
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleUpdateRideStatus(ride._id)}
                        >
                          {getNextStatusText(ride.status)}
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-4">
              No active rides found. Accept a ride to see it here.
            </p>
          )}
        </CardContent>
      </Card>
      


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isOnline ? (
          <Card>
            <CardHeader>
              <CardTitle>Incoming Ride Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableRidesData?.data?.length > 0 ? (
                  availableRidesData.data.map((ride: any) => {
                    const pickupAddress = typeof ride.pickupLocation === 'object' 
                      ? ride.pickupLocation?.address 
                      : ride.pickupLocation;
                    const destinationAddress = typeof ride.destinationLocation === 'object' 
                      ? ride.destinationLocation?.address 
                      : ride.destinationLocation;
                    
                    return (
                      <div key={ride._id} className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-950">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-medium">{pickupAddress} → {destinationAddress}</p>
                            <p className="text-sm text-muted-foreground">
                              Requested: {new Date(ride.createdAt).toLocaleTimeString()}
                            </p>
                            <p className="text-xs text-gray-500">
                              Rider: {ride.rider?.name || 'Unknown'}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">৳{ride.fare}</p>
                            <p className="text-xs text-muted-foreground">Fare</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => handleAcceptRide(ride._id)}
                          >
                            Accept
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => handleRejectRide(ride._id)}
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No ride requests available. Waiting for new requests...
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Recent Rides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentRides?.length > 0 ? (
                  stats.recentRides.slice(0, 3).map((ride: any) => {
                    const pickupAddress = typeof ride.pickupLocation === 'object' 
                      ? ride.pickupLocation?.address 
                      : ride.pickupLocation;
                    const destinationAddress = typeof ride.destinationLocation === 'object' 
                      ? ride.destinationLocation?.address 
                      : ride.destinationLocation;
                    
                    return (
                      <div key={ride._id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Car className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{pickupAddress || 'Unknown'} to {destinationAddress || 'Unknown'}</p>
                            <p className="text-sm text-muted-foreground">{new Date(ride.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">৳{ride.fare}</p>
                          <p className={`text-sm ${
                            ride.status === 'COMPLETED' ? 'text-green-600' : 
                            ride.status === 'CANCELLED' ? 'text-red-600' : 'text-blue-600'
                          }`}>
                            {ride.status}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    No recent rides. Start accepting rides to build your history!
                  </p>
                )}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/driver/ride-history">View All Rides</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full justify-start" 
              onClick={toggleOnlineStatus}
              variant={isOnline ? "destructive" : "default"}
            >
              {isOnline ? (
                <>
                  <ToggleRight className="h-4 w-4 mr-2" />
                  Go Offline
                </>
              ) : (
                <>
                  <ToggleLeft className="h-4 w-4 mr-2" />
                  Go Online
                </>
              )}
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/driver/earnings">
                <DollarSign className="h-4 w-4 mr-2" />
                View Earnings
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/driver/ride-history">
                <Clock className="h-4 w-4 mr-2" />
                Ride History
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/driver/profile">
                <Car className="h-4 w-4 mr-2" />
                Vehicle & Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* SOS Button - Only show when driver has active rides */}
      <SOSButton isVisible={activeRidesData?.data?.length > 0} />
    </div>
  );
}