import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Car, ArrowRight, Download } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 ">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8 font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto">
            Join millions of satisfied users who trust RideShare for their daily transportation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-900 border-0 text-white hover:bg-blue-800 transition-colors">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 mx-auto mb-6 text-blue-100" />
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">For Riders</h3>
              <p className="text-blue-100 mb-6 font-[family-name:var(--font-open-sans)]">
                Download the app and book your first ride in minutes. Safe, reliable, and affordable transportation at
                your fingertips.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full">
                <Download className="w-5 h-5 mr-2" />
                Download App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-800 border-0 text-white hover:bg-green-700 transition-colors">
            <CardContent className="p-8 text-center">
              <Car className="w-16 h-16 mx-auto mb-6 text-green-100" />
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">For Drivers</h3>
              <p className="text-green-100 mb-6 font-[family-name:var(--font-open-sans)]">
                Turn your car into an earning opportunity. Flexible schedule, competitive rates, and full support from
                our team.
              </p>
              <Link to="/login" className="btn bg-white text-green-600 rounded-md py-2 flex justify-center items-center hover:bg-green-50 w-full">
                <Users className="w-5 h-5 mr-2" />
                Start Driving
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}