import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Clock, Tag, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PromoSection = () => {
  const [activePromo, setActivePromo] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [copied, setCopied] = useState(false);

  const promotions = [
    {
      id: 1,
      title: "First Ride Free!",
      description: "Get up to $20 off on your first GoRide",
      code: "WELCOME20",
      discount: "20",
      expiry: "2024-12-31",
      color: "from-orange-500 to-red-500",
      icon: Sparkles,
    },
    {
      id: 2,
      title: "Weekend Special",
      description: "30% off all rides on weekends",
      code: "WEEKEND30",
      discount: "30",
      expiry: "2024-12-31",
      color: "from-purple-500 to-pink-500",
      icon: Tag,
    },
    {
      id: 3,
      title: "Group Ride Discount",
      description: "Save 25% when riding with 3+ people",
      code: "GROUP25",
      discount: "25",
      expiry: "2024-12-31",
      color: "from-green-500 to-blue-500",
      icon: Clock,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!showBanner) return null;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Special Offers & Discounts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300  max-w-2xl mx-auto">
            Exclusive deals to make your rides even more affordable
          </p>
        </div>

        {/* Main Promo Banner */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Promo Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-2 rounded-full"></div>
                  <span className="text-blue-200 font-semibold">
                    Limited Time Offer
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  {promotions[activePromo].title}
                </h3>

                <p className="text-xl text-blue-100 mb-6">
                  {promotions[activePromo].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="text-sm text-blue-200">Use code</div>
                    <div className="text-2xl font-mono font-bold">
                      {promotions[activePromo].code}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() =>
                        copyToClipboard(promotions[activePromo].code)
                      }
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                    >
                      Copy Code
                    </Button>
                    {copied && (
                      <span className="text-white font-semibold">Copied!</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-white/40">
                    {promotions[activePromo].discount}%
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePromo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activePromo ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                index === activePromo ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setActivePromo(index)}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${promo.color} flex items-center justify-center mb-4`}
                >
                  <promo.icon className="h-6 w-6 text-white" />
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100  mb-2">
                  {promo.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300  mb-4">{promo.description}</p>

                <div className="flex items-center justify-between">
                  <div className="font-mono font-bold text-lg text-blue-600">
                    {promo.code}
                  </div>
                  <div className="text-sm text-gray-500">
                    Valid until {new Date(promo.expiry).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
