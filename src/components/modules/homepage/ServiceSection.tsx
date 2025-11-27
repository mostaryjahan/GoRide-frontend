
import { Users, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RideOptions = () => {
  const options = [
    {
      name: "GoRide X",
      price: "From $12",
      icon: Zap,
      description: "Affordable everyday rides",
      features: ["4 passengers", "Everyday pricing", "Standard comfort"],
      color: "blue"
    },
    {
      name: "GoRide Comfort",
      price: "From $18",
      icon: Users,
      description: "Newer cars with extra legroom",
      features: ["4 passengers", "Extra legroom", "Top-rated drivers"],
      color: "green"
    },
    {
      name: "GoRide Premier",
      price: "From $25",
      icon: Shield,
      description: "Premium luxury vehicles",
      features: ["4 passengers", "Luxury cars", "Professional drivers"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Choose Your GoRide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 ">
            Options for every occasion and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="px-8 py-4">
                <div className={`w-16 h-16 rounded-full ${getColorClasses(option.color)} flex items-center justify-center mb-6`}>
                  <option.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100  mb-2">
                  {option.name}
                </h3>
                <p className="text-3xl font-semibold text-gray-900 dark:text-gray-300  mb-2">
                  {option.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400  mb-3">
                  {option.description}
                </p>
                
                <ul className="space-y-1 mb-4">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700 dark:text-gray-400 ">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                  Select {option.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RideOptions;