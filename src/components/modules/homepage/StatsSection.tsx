import { Card, CardContent } from "@/components/ui/card"
import { Users, Car, MapPin, Star } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "2M+",
      label: "Happy Riders",
      color: "text-blue-600",
    },
    {
      icon: Car,
      number: "50K+",
      label: "Active Drivers",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      number: "100+",
      label: "Cities Served",
      color: "text-purple-600",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      color: "text-yellow-600",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-black text-foreground mb-2 font-[family-name:var(--font-montserrat)]">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-[family-name:var(--font-open-sans)]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
