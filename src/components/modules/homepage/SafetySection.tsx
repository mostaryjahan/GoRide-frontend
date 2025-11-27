
import { Shield, UserCheck, Map, Phone } from 'lucide-react';

const SafetyFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "24/7 Safety Support",
      description: "Round-the-clock support team for any safety concerns"
    },
    {
      icon: UserCheck,
      title: "Driver Verification",
      description: "All drivers undergo thorough background checks"
    },
    {
      icon: Map,
      title: "Real-time Tracking",
      description: "Share your ride details with friends and family"
    },
    {
      icon: Phone,
      title: "Emergency Assistance",
      description: "Quick access to emergency services when needed"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Your Safety is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            We've implemented multiple safety features to ensure you have a secure journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;