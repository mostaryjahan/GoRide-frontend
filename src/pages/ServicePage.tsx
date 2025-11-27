
import { Car, Package, Users, Building,Clock, Shield, Star, Zap, Heart, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


const ServicesPage = () => {
  const mainServices = [
    {
      icon: Car,
      title: 'GoRide X',
      description: 'Affordable everyday rides for your daily commute',
      price: 'From ৳ 120',
      features: ['4 passengers', 'Standard comfort', 'Everyday pricing', '2 min average wait'],
      bestFor: ['Daily commute', 'Short trips', 'Budget travel'],
      color: 'blue'
    },
    {
      icon: Users,
      title: 'GoRide Comfort',
      description: 'Newer cars with extra legroom and top-rated drivers',
      price: 'From ৳ 180',
      features: ['4 passengers', 'Extra legroom', 'Top-rated drivers', '5 min average wait'],
      bestFor: ['Business meetings', 'Comfortable travel', 'Airport rides'],
      color: 'green'
    },
    {
      icon: Shield,
      title: 'GoRide Premier',
      description: 'Premium luxury vehicles with professional drivers',
      price: 'From ৳ 250',
      features: ['4 passengers', 'Luxury vehicles', 'Professional drivers', '7 min average wait'],
      bestFor: ['Special occasions', 'Business travel', 'Luxury experience'],
      color: 'purple'
    }
  ];

  const specialServices = [
    {
      icon: Package,
      title: 'GoRide Delivery',
      description: 'Quick and reliable package delivery across the city',
      features: ['Same-day delivery', 'Real-time tracking', 'Multiple package sizes', 'Insurance coverage'],
      price: 'From ৳ 80'
    },
    {
      icon: Building,
      title: 'GoRide Business',
      description: 'Corporate travel solutions with expense management',
      features: ['Centralized billing', 'Employee management', 'Travel analytics', 'Dedicated support'],
      price: 'Custom pricing'
    },
    {
      icon: Plane,
      title: 'GoRide Airport',
      description: 'Reliable airport transfers with flight tracking',
      features: ['Flight tracking', 'Meet & greet', 'Luggage assistance', 'Fixed pricing'],
      price: 'From ৳ 600'
    }
  ];

  const serviceFeatures = [
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Book a ride in less than 30 seconds with our intuitive app'
    },
    {
      icon: Shield,
      title: 'Safe Rides',
      description: '24/7 safety support and driver verification for peace of mind'
    },
    {
      icon: Star,
      title: 'Rated Drivers',
      description: 'All drivers are rated and reviewed by our rider community'
    },
    {
      icon: Zap,
      title: 'Live Tracking',
      description: 'Real-time tracking and ETA updates for your convenience'
    }
  ];

  const citiesServices = [
    {
      city: 'Dhaka',
      available: ['GoRide X', 'GoRide Comfort', 'GoRide Premier', 'Delivery', 'Airport'],
      coverage: 'Full city coverage'
    },
    {
      city: 'Chittagong',
      available: ['GoRide X', 'GoRide Comfort', 'Delivery'],
      coverage: 'Metro area coverage'
    },
    {
      city: 'Sylhet',
      available: ['GoRide X', 'Delivery'],
      coverage: 'City center coverage'
    },
    {
      city: 'Other Cities',
      available: ['GoRide X'],
      coverage: 'Limited coverage'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
      <div className="min-h-screen bg-background">
   
      
      {/* Hero Section */}
       <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the perfect ride for every occasion. From daily commutes to special events, 
              we've got you covered with safe, reliable, and affordable transportation.
            </p>
            <Button className="bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800 px-8 py-6 text-lg">
              Book Your Ride Now
            </Button>
          </div>
        </div>
      </section>

      {/* Main Ride Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">Choose Your Ride</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select from our range of ride options designed for different needs and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{service.title}</h3>
                      <p className="text-3xl font-bold text-primary">{service.price}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 py-6">
                    Book {service.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Special Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond rides - explore our additional services designed for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">Why Choose GoRide?</h2>
            <p className="text-xl text-muted-foreground">Experience the difference with our premium features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Service Coverage</h2>
            <p className="text-xl text-muted-foreground">Available services across different cities</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {citiesServices.map((city, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-4 text-center">{city.city}</h3>
                    <div className="space-y-3 mb-4">
                      {city.available.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {city.coverage}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download the GoRide app today and experience the future of urban transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Download App
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
              Book on Web
            </Button>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default ServicesPage;