import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Smartphone, MapPin, Car, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Smartphone,
      title: "Book Your Ride",
      description: "Open the app, enter your destination, and choose your preferred vehicle type.",
      step: "01",
    },
    {
      icon: MapPin,
      title: "Get Matched",
      description: "Our smart algorithm instantly connects you with the nearest available driver.",
      step: "02",
    },
    {
      icon: Car,
      title: "Track & Travel",
      description: "Track your driver in real-time and enjoy a safe, comfortable journey.",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Rate & Pay",
      description: "Rate your experience and pay seamlessly through the app.",
      step: "04",
    },
  ]

  return (
    <section className={cn(
        "py-20 px-4",
        "bg-gradient-to-b from-slate-50 to-blue-100",
        "dark:from-gray-900/10 dark:to-gray-950"
      )}>
        
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-foreground mb-4"
          >
            How It Works
            </motion.h2>
             <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Getting a ride has never been easier. Follow these simple steps to book your next journey.
          </motion.p>
        </div>
      

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
             <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
            <Card
              key={index}
              className="relative text-center border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gray-100 dark:bg-[#020c31]"
            >
              <CardContent className="p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <step.icon className="w-12 h-12 text-blue-600 mx-auto mb-6 mt-4" />
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-montserrat)]">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-[family-name:var(--font-open-sans)] leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}