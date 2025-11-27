import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = {
    riding: [
      {
        id: 1,
        question: "How do I book a ride with GoRide?",
        answer: "Booking a ride is simple! Open the GoRide app, enter your pickup location and destination, choose your preferred ride option (GoRide X, Comfort, or Premier), and confirm your booking. You'll see the fare estimate and driver details before confirming."
      },
      {
        id: 2,
        question: "How is the fare calculated?",
        answer: "Fares are calculated based on base fare + distance + time + dynamic pricing during high demand. You'll see the fare estimate before confirming your ride. Factors like route, traffic conditions, and ride option selected affect the final fare."
      },
      {
        id: 3,
        question: "Can I schedule a ride in advance?",
        answer: "Yes! You can schedule rides up to 30 days in advance. Just select the 'Schedule' option when booking, choose your preferred date and time, and we'll match you with a driver when the time comes."
      },
      {
        id: 4,
        question: "What payment methods do you accept?",
        answer: "We accept cash, credit/debit cards, mobile banking, and digital wallets. You can also add multiple payment methods in the app and choose your preferred one for each ride."
      }
    ],
    safety: [
      {
        id: 5,
        question: "What safety measures does GoRide have?",
        answer: "We have multiple safety features including: 24/7 safety support, driver background checks, real-time ride tracking, emergency assistance button, ride sharing with trusted contacts, and two-way rating system for both drivers and riders."
      },
      {
        id: 6,
        question: "How are drivers screened?",
        answer: "All GoRide drivers undergo thorough background checks, including criminal record verification, driving history review, and vehicle inspection. They must maintain a high rating and complete safety training to continue driving with us."
      },
      {
        id: 7,
        question: "Can I share my ride details with others?",
        answer: "Yes! You can share your real-time trip details including driver information, vehicle details, and live location with friends and family through the app. They can track your journey until you safely reach your destination."
      }
    ],
    account: [
      {
        id: 8,
        question: "How do I create a GoRide account?",
        answer: "Download the GoRide app from App Store or Google Play Store, enter your phone number, verify with OTP, add your email and personal details, set up your payment method, and you're ready to ride!"
      },
      {
        id: 9,
        question: "I forgot my password. How can I reset it?",
        answer: "On the login screen, tap 'Forgot Password', enter your registered phone number or email, and we'll send you a verification code to reset your password securely."
      },
      {
        id: 10,
        question: "Can I use one account on multiple devices?",
        answer: "For security reasons, you can only be logged into one device at a time. If you log in from a new device, you'll be automatically logged out from the previous one."
      }
    ],
    driver: [
      {
        id: 11,
        question: "How can I become a GoRide driver?",
        answer: "To become a GoRide driver, you need to: be at least 21 years old, have a valid driver's license, own an eligible vehicle (less than 10 years old), pass background checks, and complete our driver training program. Apply through our website or app!"
      },
      {
        id: 12,
        question: "How much can I earn with GoRide?",
        answer: "Earnings vary based on your location, hours worked, and ride demand. On average, drivers can earn competitive rates with flexible schedules. You keep a percentage of each fare and can earn bonuses during peak hours."
      },
      {
        id: 13,
        question: "What support do you provide to drivers?",
        answer: "We provide 24/7 driver support, in-app navigation, earning tracking, insurance coverage, maintenance discounts, and access to driver lounges in some cities. We're committed to supporting our driver partners."
      }
    ]
  };

  const allFaqs = [
    ...faqData.riding,
    ...faqData.safety,
    ...faqData.account,
    ...faqData.driver
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getFilteredFaqs = () => {
    if (activeCategory === 'all') return allFaqs;
    return faqData[activeCategory as keyof typeof faqData] || [];
  };

  const categories = [
    { id: 'all', name: 'All Questions', count: allFaqs.length },
    { id: 'riding', name: 'Riding', count: faqData.riding.length },
    { id: 'safety', name: 'Safety', count: faqData.safety.length },
    { id: 'account', name: 'Account', count: faqData.account.length },
    { id: 'driver', name: 'Driving', count: faqData.driver.length }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find quick answers to common questions about GoRide
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main FAQ Content */}
          <div className="flex-1 max-w-4xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-80">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {getFilteredFaqs().map(faq => (
                <Card key={faq.id} className="border border-gray-200 dark:border-gray-800 hover:border-blue-300 transition-colors">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py- text-left flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-300 pr-4">
                        {faq.question}
                      </span>
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-5">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="text-center mt-12">
              <p className="text-xl text-gray-600 dark:text-gray-500 mb-6">
                Still have questions? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="px-8 py-6">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" className="px-8 py-6">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Help Sidebar */}
          <div className="lg:w-80">
            <Card className="sticky top-24 border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                  Quick Help
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-gray-900 rounded-lg">
                    <div className="bg-blue-100  p-2 rounded-full">
                      <Phone className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-300">Emergency</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">24/7 Support</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-gray-900 rounded-lg">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-200">Live Chat</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Instant Help</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-gray-900 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Mail className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-200">Email</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">response@goride.com</div>
                    </div>
                  </div>
                </div>

                {/* Popular Questions */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">
                    Popular Questions
                  </h4>
                  <div className="space-y-2">
                    {allFaqs.slice(0, 4).map(faq => (
                      <button
                        key={faq.id}
                        onClick={() => {
                          setActiveCategory('all');
                          setTimeout(() => toggleItem(faq.id), 100);
                        }}
                        className="block w-full text-left text-sm text-blue-600 hover:text-blue-700 p-2 rounded hover:bg-blue-50 transition-colors"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Support Hours */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">
                    Support Hours
                  </h4>
                  <div className="text-sm text-gray-600 dark:text-gray-500 space-y-1">
                    <div>Rider Support: 24/7</div>
                    <div>Driver Support: 24/7</div>
                    <div>Emergency: 24/7</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Help Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-3">
                Help Center
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Browse our comprehensive knowledge base for detailed guides and tutorials.
              </p>
              <Button variant="outline" className="w-full">
                Visit Help Center
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-3">
                Community Forum
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with other GoRide users and get answers from the community.
              </p>
              <Button variant="outline" className="w-full">
                Join Community
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-3">
                Contact Form
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Can't find what you're looking for? Send us a detailed message.
              </p>
              <Button variant="outline" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;