import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Shield, Zap, Star, Award, Heart } from "lucide-react"

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Uber executive with 10+ years in transportation technology. Passionate about sustainable urban mobility.",
      image: "/images/about/manager.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Google engineer specializing in real-time systems and mobile applications. Expert in scalable ride-sharing platforms.",
      image: "/images/about/cto.jpg",
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      bio: "Operations leader with experience at Lyft and DoorDash. Focused on driver experience and safety protocols.",
      image: "/images/about/operations.jpeg",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product strategist from Tesla with expertise in user experience design and autonomous vehicle integration.",
      image: "/images/about/ceo.jpg",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced safety features, background checks, and 24/7 support ensure secure rides for everyone.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Cutting-edge technology including AI-powered matching and predictive routing for optimal experiences.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building stronger communities by connecting people and supporting local drivers and businesses.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality service with continuous improvement and user feedback.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            About GoRide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 ">
            Revolutionizing Urban Transportation
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ">
            We're building the future of mobility with safe, reliable, and sustainable ride-sharing solutions that
            connect communities and empower drivers.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 ">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground ">
                <p className="text-lg leading-relaxed">
                  Founded in 2020, RideShare emerged from a simple observation: urban transportation needed to be more
                  accessible, sustainable, and community-focused. Our founders, having worked at major tech companies,
                  saw an opportunity to create something better.
                </p>
                <p className="text-lg leading-relaxed">
                  Starting in just three cities, we've grown to serve millions of riders and thousands of drivers across
                  the region. Our platform combines cutting-edge technology with human-centered design to create
                  experiences that work for everyone.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're not just a ride-sharing company – we're a platform that empowers economic opportunity,
                  reduces urban congestion, and builds stronger communities through shared mobility.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about/header.jpg"
                alt="Urban transportation"
                className="rounded-lg shadow-lg w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 md:p-12 bg-card border-0 shadow-lg">
            <CardContent className="p-0">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-card-foreground mb-6 font-[family-name:var(--font-montserrat)]">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-open-sans)]">
                To make transportation accessible, affordable, and sustainable for everyone while creating economic
                opportunities for drivers and building stronger, more connected communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-open-sans)]">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-card border-0">
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-card-foreground mb-3 font-[family-name:var(--font-montserrat)]">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-[family-name:var(--font-open-sans)]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-open-sans)]">
              The passionate people driving our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-0 group"
              >
                <CardContent className="p-0">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-accent/20 group-hover:border-accent/40 transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2 font-[family-name:var(--font-montserrat)]">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-open-sans)]">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 font-[family-name:var(--font-montserrat)]">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-[family-name:var(--font-open-sans)]">
            Whether you're looking for a reliable ride or want to earn money driving, we're here to help you get where
            you need to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Users className="w-5 h-5 mr-2" />
              Become a Rider
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Star className="w-5 h-5 mr-2" />
              Drive with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sidebar-foreground font-[family-name:var(--font-open-sans)]">
            © 2024 RideShare. Building the future of transportation, one ride at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
