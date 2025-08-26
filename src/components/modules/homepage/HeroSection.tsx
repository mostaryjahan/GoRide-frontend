import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Users, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg- py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
              🚗 Your Ride, Your Way
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-6  leading-tight">
              Safe, Fast &<span className="text-blue-600"> Reliable</span> Rides
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-center mx-auto max-w-lg">
              Experience the future of transportation with our premium ride-sharing platform. Book instantly, track in
              real-time, and travel with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                <Users className="w-5 h-5 mr-2" />
                Book a Ride
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Car className="w-5 h-5 mr-2" />
                Drive with Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/home/hero.png"
                alt="RideShare App Interface"
                className="rounded-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-80 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}