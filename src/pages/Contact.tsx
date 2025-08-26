"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  inquiryType: z.enum(["general", "driver", "rider", "business", "support"]),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("[v0] Contact form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Your message has been received. Our team will get back to you
                within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-foreground text-3xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our ride-sharing platform? We're here to
              help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className=" text-2xl font-semibold text-foreground">
                        Contact Information
                      </CardTitle>
                      <CardDescription>
                        Multiple ways to reach our team
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            Address
                          </h4>
                          <p className="text-muted-foreground">
                            123 Innovation Drive
                            <br />
                            Tech District, City 12345
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Phone</h4>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Email</h4>
                          <p className="text-muted-foreground">
                            contact@goride.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Hours</h4>
                          <p className="text-muted-foreground">
                            Mon - Fri: 9:00 AM - 6:00 PM
                            <br />
                            Sat - Sun: 10:00 AM - 4:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Contact Cards */}
                  <div className="space-y-4">
                    <Card className="border-0 shadow-lg  text-white">
                      <CardContent className="p-6">
                        <h4 className="font-montserrat font-semibold text-lg mb-2">
                          For Drivers
                        </h4>
                        <p className="text-rose-100 mb-4">
                          Join our driver network and start earning
                        </p>
                        <Button variant="secondary" size="sm">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg  text-white">
                      <CardContent className="p-6">
                        <h4 className="font-montserrat font-semibold text-lg mb-2">
                          For Businesses
                        </h4>
                        <p className="text-blue-100 mb-4">
                          Corporate solutions and partnerships
                        </p>
                        <Button variant="secondary" size="sm">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-2xl text-gray-900">
                      Send us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you soon
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="john@example.com"
                                    type="email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+1 (555) 123-4567"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="inquiryType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Inquiry Type</FormLabel>
                                <FormControl>
                                  <select
                                    {...field}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  >
                                    <option value="general">
                                      General Inquiry
                                    </option>
                                    <option value="driver">
                                      Driver Support
                                    </option>
                                    <option value="rider">Rider Support</option>
                                    <option value="business">
                                      Business Partnership
                                    </option>
                                    <option value="support">
                                      Technical Support
                                    </option>
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="How can we help you?"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please provide details about your inquiry..."
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full  text-white py-3 text-lg font-semibold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending Message..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
