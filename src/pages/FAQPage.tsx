"use client"

import { useState, useMemo } from "react"
import { Search, Users, Car, CreditCard, Shield, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
interface FAQ {
  id: string
  question: string
  answer: string
  category: "riders" | "drivers" | "payments" | "safety" | "general"
}

const faqs: FAQ[] = [
  // Riders
  {
    id: "1",
    question: "How do I book a ride?",
    answer:
      'Simply open the app, enter your pickup and destination locations, choose your preferred ride type, and tap "Book Ride". You\'ll be matched with a nearby driver within minutes.',
    category: "riders",
  },
  {
    id: "2",
    question: "Can I schedule a ride in advance?",
    answer:
      'Yes! You can schedule rides up to 30 days in advance. Just select "Schedule" when booking and choose your preferred date and time.',
    category: "riders",
  },
  {
    id: "3",
    question: "How is the fare calculated?",
    answer:
      "Fares are calculated based on distance, time, demand, and local rates. You'll see an upfront price estimate before confirming your ride.",
    category: "riders",
  },
  {
    id: "4",
    question: "Can I share my ride with others?",
    answer:
      "Yes, our RideShare option allows you to share rides with other passengers going in the same direction, helping you save money.",
    category: "riders",
  },

  // Drivers
  {
    id: "5",
    question: "What are the requirements to become a driver?",
    answer:
      "You need a valid driver's license, vehicle registration, insurance, and must pass our background check. Your vehicle should be 2010 or newer.",
    category: "drivers",
  },
  {
    id: "6",
    question: "How much can I earn as a driver?",
    answer:
      "Earnings vary based on location, hours driven, and demand. Most drivers earn $15-25 per hour after expenses. You keep 80% of each fare.",
    category: "drivers",
  },
  {
    id: "7",
    question: "Can I choose my working hours?",
    answer: "You have complete flexibility to drive whenever you want. There are no minimum hour requirements.",
    category: "drivers",
  },
  {
    id: "8",
    question: "What if my car breaks down during a trip?",
    answer:
      "Contact our 24/7 support immediately. We'll help arrange alternative transportation for your passenger and provide roadside assistance.",
    category: "drivers",
  },

  // Payments
  {
    id: "9",
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and cash in select cities.",
    category: "payments",
  },
  {
    id: "10",
    question: "How do I add a tip?",
    answer:
      "You can add a tip through the app after your ride. Tips go directly to your driver and are greatly appreciated.",
    category: "payments",
  },
  {
    id: "11",
    question: "Can I get a receipt for my ride?",
    answer:
      'Yes, receipts are automatically sent to your email after each ride. You can also view them in the app under "Trip History".',
    category: "payments",
  },
  {
    id: "12",
    question: "What if I'm charged incorrectly?",
    answer:
      "If you believe there's an error in your fare, contact our support team within 24 hours. We'll review and adjust if necessary.",
    category: "payments",
  },

  // Safety
  {
    id: "13",
    question: "How do you ensure rider safety?",
    answer:
      "All drivers undergo background checks, vehicles are inspected, and we provide real-time GPS tracking, emergency assistance, and 24/7 support.",
    category: "safety",
  },
  {
    id: "14",
    question: "Can I share my trip details with someone?",
    answer:
      "Yes, you can share your live trip status with trusted contacts so they can track your journey in real-time.",
    category: "safety",
  },
  {
    id: "15",
    question: "What should I do if I feel unsafe?",
    answer:
      "Use our in-app emergency button to contact local authorities, or call our 24/7 safety line. Your safety is our top priority.",
    category: "safety",
  },
  {
    id: "16",
    question: "Are drivers insured?",
    answer:
      "Yes, all rides are covered by our comprehensive insurance policy that protects both riders and drivers during trips.",
    category: "safety",
  },

  // General
  {
    id: "17",
    question: "Is the app available in my city?",
    answer:
      "We operate in over 100 cities worldwide. Check the app or our website to see if we're available in your area.",
    category: "general",
  },
  {
    id: "18",
    question: "How do I contact customer support?",
    answer:
      "You can reach us through the app's help section, email support@rideapp.com, or call our 24/7 hotline at 1-800-RIDE-NOW.",
    category: "general",
  },
  {
    id: "19",
    question: "Can I cancel a ride?",
    answer:
      "Yes, you can cancel rides through the app. Cancellation fees may apply if you cancel after the driver has already started heading to your location.",
    category: "general",
  },
  {
    id: "20",
    question: "Do you offer rides for people with disabilities?",
    answer:
      'Yes, we offer wheelchair-accessible vehicles in many cities. Select "Accessible" when booking to request an appropriate vehicle.',
    category: "general",
  },
]

const categories = [
  { id: "all", name: "All Questions", icon: HelpCircle, color: "bg-gray-100 text-gray-800" },
  { id: "riders", name: "For Riders", icon: Users, color: "bg-blue-100 text-blue-800" },
  { id: "drivers", name: "For Drivers", icon: Car, color: "bg-green-100 text-green-800" },
  { id: "payments", name: "Payments", icon: CreditCard, color: "bg-yellow-100 text-yellow-800" },
  { id: "safety", name: "Safety", icon: Shield, color: "bg-red-100 text-red-800" },
  { id: "general", name: "General", icon: HelpCircle, color: "bg-purple-100 text-purple-800" },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredFAQs = useMemo(() => {
    let filtered = faqs

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (faq) => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query),
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}>
          <h1 className="text-3xl md:text-5xl text-foreground font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our ride-sharing platform. Can't find what you're looking for?
            Contact our support team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-foreground focus:border-primary rounded-xl"
            />
          </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <motion.section  initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 border-foreground text-foreground${
                    selectedCategory === category.id
                      ? "bg-primary hover:bg-blue-600 text-white"
                      : "border-muted-foreground text-muted-foreground hover:bg-rose-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* FAQ Content */}
       <motion.section  initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No questions found
                </h3>
                <p className="text-foreground font-[family-name:var(--font-open-sans)]">
                  Try adjusting your search terms or browse different categories.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Results count */}
              <div className="text-center">
                <p className="text-muted-foreground font-[family-name:var(--font-open-sans)]">
                  Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? "s" : ""}
                  {selectedCategory !== "all" && (
                    <span> in {categories.find((c) => c.id === selectedCategory)?.name}</span>
                  )}
                  {searchQuery && <span> matching "{searchQuery}"</span>}
                </p>
              </div>

              {/* FAQ Accordion */}
              <Card className="border-muted-foreground shadow-lg">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs.map((faq, index) => {
                      const category = categories.find((c) => c.id === faq.category)
                      return (
                        <AccordionItem
                          key={faq.id}
                          value={faq.id}
                          className={index !== filteredFAQs.length - 1 ? "border-b border-muted-foreground" : ""}
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-primary rounded-none transition-colors duration-200">
                            <div className="flex items-start gap-3 text-left">
                              <Badge className={`${category?.color} shrink-0 mt-1`}>{category?.name}</Badge>
                              <span className="font-font-semibold text-foreground rounded-none">
                                {faq.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="pl-20">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    })}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </motion.section>

      {/* Contact Support Section */}
      <section className="bg-gray-100 dark:bg-gray-900/40 border-t border-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              
              className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold"
            >
              Contact Support
            </Link>
            {/* <Button
              variant="outline"
              size="lg"
              className="border-rose-200 text-blue-600 hover:bg-rose-50 px-8 py-3 rounded-xl font-[family-name:var(--font-montserrat)] font-semibold bg-transparent"
            >
              Live Chat
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  )
}
