import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { User, Phone, Mail, Car, Shield } from "lucide-react";
import toast from "react-hot-toast";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  useGetDriverProfileQuery,
  useUpdateDriverProfileMutation,
} from "@/redux/features/driver/driver.api";

interface ProfileForm {
  name: string;
  phone: string;
  address: string;
}

interface VehicleForm {
  vehicleType: string;
  vehicleNumber: string;
}

interface PasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function DriverProfile() {
  const { data: userInfo } = useUserInfoQuery();
  const { data: driverInfo } = useGetDriverProfileQuery({});
  const [updateDriverProfile] = useUpdateDriverProfileMutation();
  const [activeTab, setActiveTab] = useState("profile");

  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
  } = useForm<ProfileForm>();
  const {
    register: registerVehicle,
    handleSubmit: handleVehicleSubmit,
    formState: { errors: vehicleErrors },
  } = useForm<VehicleForm>();
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    watch,
  } = useForm<PasswordForm>();

  const user = userInfo?.data;

  const onProfileSubmit = async (data: ProfileForm) => {
    try {
      await updateDriverProfile(data).unwrap();
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
      console.log(error);
    }
  };

  const onVehicleSubmit = async (data: VehicleForm) => {
    try {
      await updateDriverProfile(data).unwrap();
      toast.success("Vehicle information updated successfully");
    } catch (error) {
      toast.error("Failed to update vehicle information");
      console.log(error);
    }
  };

  const onPasswordSubmit = async (data: PasswordForm) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      toast.success("Password changed successfully");
    } catch (error) {
      toast.error("Failed to change password");
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Driver Profile</h1>

      <div className="flex space-x-1 border-b">
        <Button
          variant={activeTab === "profile" ? "default" : "ghost"}
          onClick={() => setActiveTab("profile")}
          className="rounded-b-none"
        >
          <User className="h-4 w-4 mr-2" />
          Profile
        </Button>
        <Button
          variant={activeTab === "vehicle" ? "default" : "ghost"}
          onClick={() => setActiveTab("vehicle")}
          className="rounded-b-none"
        >
          <Car className="h-4 w-4 mr-2" />
          Vehicle
        </Button>
        <Button
          variant={activeTab === "password" ? "default" : "ghost"}
          onClick={() => setActiveTab("password")}
          className="rounded-b-none"
        >
          <Shield className="h-4 w-4 mr-2" />
          Password
        </Button>
      </div>

      {activeTab === "profile" && (
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleProfileSubmit(onProfileSubmit)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      defaultValue={user?.name}
                      className="pl-10"
                      {...registerProfile("name", {
                        required: "Name is required",
                      })}
                    />
                  </div>
                  {profileErrors.name && (
                    <p className="text-sm text-red-600">
                      {profileErrors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      defaultValue={user?.email}
                      className="pl-10"
                      disabled
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Email cannot be changed
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      defaultValue={user?.phone}
                      className="pl-10"
                      {...registerProfile("phone", {
                        required: "Phone number is required",
                      })}
                    />
                  </div>
                  {profileErrors.phone && (
                    <p className="text-sm text-red-600">
                      {profileErrors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    defaultValue={user?.address}
                    {...registerProfile("address")}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Update Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {activeTab === "vehicle" && (
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleVehicleSubmit(onVehicleSubmit)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Vehicle Type</Label>
                  <select
                    id="vehicleType"
                    className="w-full px-3 py-2 border rounded-md"
                    defaultValue={driverInfo?.data?.vehicleType || ""}
                    {...registerVehicle("vehicleType", {
                      required: "Vehicle type is required",
                    })}
                  >
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="motorcycle">Motorcycle</option>
                  </select>
                  {vehicleErrors.vehicleType && (
                    <p className="text-sm text-red-600">
                      {vehicleErrors.vehicleType.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                  <Input
                    id="vehicleNumber"
                    placeholder="ABC-123"
                    defaultValue={driverInfo?.data?.vehicleNumber || ""}
                    {...registerVehicle("vehicleNumber", {
                      required: "Vehicle number is required",
                    })}
                  />
                  {vehicleErrors.vehicleNumber && (
                    <p className="text-sm text-red-600">
                      {vehicleErrors.vehicleNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Update Vehicle Information
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {activeTab === "password" && (
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handlePasswordSubmit(onPasswordSubmit)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  {...registerPassword("currentPassword", {
                    required: "Current password is required",
                  })}
                />
                {passwordErrors.currentPassword && (
                  <p className="text-sm text-red-600">
                    {passwordErrors.currentPassword.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  {...registerPassword("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {passwordErrors.newPassword && (
                  <p className="text-sm text-red-600">
                    {passwordErrors.newPassword.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...registerPassword("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "Passwords do not match",
                  })}
                />
                {passwordErrors.confirmPassword && (
                  <p className="text-sm text-red-600">
                    {passwordErrors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Change Password
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
