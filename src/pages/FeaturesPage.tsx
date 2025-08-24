"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Car,
  MapPin,
  CreditCard,
  Shield,
  Clock,
  Star,
  Users,
  BarChart3,
  Settings,
  MessageSquare,
  Navigation,
  Smartphone,
  DollarSign,
  FileText,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  Database,
  Bell,
  Lock,
  Headphones,
} from "lucide-react"

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("rider")

  const riderFeatures = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Easy Booking",
      description:
        "Book rides instantly with just a few taps. Set pickup and destination with smart location detection.",
      category: "Booking",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Real-time Tracking",
      description: "Track your driver's location in real-time with accurate ETA updates and route optimization.",
      category: "Navigation",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Multiple Payment Options",
      description: "Pay with credit cards, digital wallets, or cash. Automatic receipts and expense tracking.",
      category: "Payment",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Driver Rating System",
      description: "Rate and review drivers to maintain service quality. View driver ratings before booking.",
      category: "Quality",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Features",
      description: "Emergency button, trip sharing with contacts, and 24/7 safety support for peace of mind.",
      category: "Safety",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Ride Scheduling",
      description: "Schedule rides in advance for important appointments. Set recurring trips for daily commutes.",
      category: "Booking",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Multiple Vehicle Types",
      description: "Choose from economy, premium, or luxury vehicles based on your needs and budget.",
      category: "Options",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Trip History",
      description: "Access detailed trip history with receipts, routes taken, and expense categorization.",
      category: "Management",
    },
  ]

  const driverFeatures = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Flexible Earnings",
      description: "Earn money on your schedule with transparent fare calculation and instant payouts.",
      category: "Earnings",
    },
    {
      icon: <Navigation className="h-6 w-6" />,
      title: "Smart Navigation",
      description: "GPS navigation with traffic optimization and alternative route suggestions for efficiency.",
      category: "Navigation",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Earnings Analytics",
      description: "Detailed earnings reports, peak hour insights, and performance metrics to maximize income.",
      category: "Analytics",
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Driver Verification",
      description: "Comprehensive background checks and document verification for rider safety and trust.",
      category: "Safety",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Ride Notifications",
      description: "Instant notifications for new ride requests with smart matching based on location.",
      category: "Management",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Driver Support",
      description: "Round-the-clock support for drivers with dedicated helpline and in-app assistance.",
      category: "Support",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Insights",
      description: "Track your rating, completion rate, and customer feedback to improve service quality.",
      category: "Analytics",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Work when you want with no minimum hours. Set availability and take breaks anytime.",
      category: "Management",
    },
  ]

  const adminFeatures = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Comprehensive Dashboard",
      description: "Real-time overview of all platform activities, rides, drivers, and revenue metrics.",
      category: "Management",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Management",
      description: "Manage rider and driver accounts, handle verification, and resolve account issues.",
      category: "Users",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Deep insights into platform performance, user behavior, and business intelligence.",
      category: "Analytics",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Revenue Management",
      description: "Track earnings, manage commission rates, and handle payment processing and disputes.",
      category: "Finance",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Safety Monitoring",
      description: "Monitor safety incidents, manage emergency responses, and maintain safety protocols.",
      category: "Safety",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Platform Configuration",
      description: "Configure pricing, service areas, vehicle types, and platform-wide settings.",
      category: "Configuration",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Support Management",
      description: "Handle customer support tickets, manage support team, and track resolution times.",
      category: "Support",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Security Controls",
      description: "Advanced security features, fraud detection, and compliance management tools.",
      category: "Security",
    },
  ]

  const getFeatures = () => {
    switch (activeTab) {
      case "rider":
        return riderFeatures
      case "driver":
        return driverFeatures
      case "admin":
        return adminFeatures
      default:
        return riderFeatures
    }
  }

  const getTabColor = (tab: string) => {
    if (activeTab === tab) {
      return "bg-blue-600 text-white"
    }
    return "bg-white text-blue-600 border-blue-200 hover:bg-blue-50"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Features for
            Everyone
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive capabilities designed for riders, drivers, and administrators. Our platform delivers
            seamless experiences across all user types.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setActiveTab("rider")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${getTabColor("rider")}`}
              variant="outline"
            >
              <Users className="h-5 w-5 mr-2" />
              Rider Features
            </Button>
            <Button
              onClick={() => setActiveTab("driver")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${getTabColor("driver")}`}
              variant="outline"
            >
              <Car className="h-5 w-5 mr-2" />
              Driver Features
            </Button>
            <Button
              onClick={() => setActiveTab("admin")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${getTabColor("admin")}`}
              variant="outline"
            >
              <Settings className="h-5 w-5 mr-2" />
              Admin Features
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {activeTab === "rider" && "Rider Capabilities"}
              {activeTab === "driver" && "Driver Capabilities"}
              {activeTab === "admin" && "Admin Capabilities"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {activeTab === "rider" &&
                "Everything riders need for a smooth, safe, and convenient transportation experience."}
              {activeTab === "driver" &&
                "Comprehensive tools and features to help drivers maximize earnings and efficiency."}
              {activeTab === "admin" && "Advanced management tools for complete platform oversight and optimization."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFeatures().map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-gray-200 dark:bg-gray-900"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-blue-600 rounded-lg text-blue-100 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <Badge variant="secondary" className="bg-blue-600 text-blue-100 border-blue-600">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Experience the Future of Transportation?
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Join thousands of satisfied users who trust our platform for their daily transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold">
              Get Started as Rider
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold bg-transparent"
            >
              Become a Driver
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
