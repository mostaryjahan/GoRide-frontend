import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content:
        "RideShare has transformed my daily commute. The drivers are professional, cars are clean, and the app is incredibly user-friendly. I can't imagine using any other service!",
      rating: 5,
      image: "/professional-woman-headshot.png",
    },
    {
      name: "Michael Chen",
      role: "College Student",
      content:
        "As a student, I need affordable and reliable transportation. RideShare delivers on both fronts. The pricing is fair and I always feel safe during my rides.",
      rating: 5,
      image: "/young-male-college-student-headshot.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Working Mom",
      content:
        "The safety features give me peace of mind, especially when traveling with my kids. Real-time tracking and driver verification are game-changers for busy parents like me.",
      rating: 5,
      image: "/professional-mother-headshot.png",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            What Our Riders Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their RideShare experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gray-100 dark:bg-gray-800">
              <CardContent className="p-8 relative">
                <Quote className="w-8 h-8 text-blue-600 mb-4 absolute left-40 -top-9" />
                <p className="text-foreground mb-6 font-[family-name:var(--font-open-sans)] leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground font-[family-name:var(--font-montserrat)]">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm font-[family-name:var(--font-open-sans)]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
