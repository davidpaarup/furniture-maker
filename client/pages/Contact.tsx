import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Calendar, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [consultationData, setConsultationData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    date: "",
    time: "",
    details: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation booked!",
      description: "We'll confirm your consultation appointment via email within 2 hours.",
    });
    setConsultationData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      date: "",
      time: "",
      details: "",
    });
  };

  const businessHours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-wood-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-wood-900">
              Get in Touch
            </h1>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto">
              Ready to bring your furniture vision to life? Contact us for consultations, 
              custom orders, or any questions about our handcrafted wooden furniture.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-wood-200">
              <CardHeader>
                <CardTitle className="text-wood-900 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-wood-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-wood-900">Visit Our Workshop</h3>
                    <p className="text-wood-600">
                      123 Craftsman Lane<br />
                      Woodville, WV 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-wood-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-wood-900">Phone</h3>
                    <p className="text-wood-600">(555) 123-4567</p>
                    <p className="text-sm text-wood-500">Call for urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-wood-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-wood-900">Email</h3>
                    <p className="text-wood-600">hello@woodcraft.com</p>
                    <p className="text-sm text-wood-500">We reply within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-wood-200">
              <CardHeader>
                <CardTitle className="text-wood-900 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="font-medium text-wood-900">{schedule.day}</span>
                      <span className={`text-sm ${schedule.hours === "Closed" ? "text-red-600" : "text-wood-600"}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-wood-50 rounded-lg">
                  <p className="text-sm text-wood-700">
                    <strong>Workshop visits:</strong> Available by appointment only. 
                    Call ahead to schedule a tour of our facilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card className="border-wood-200">
              <CardHeader>
                <CardTitle className="text-wood-900">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-wood-100 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-wood-400 mx-auto" />
                    <p className="text-wood-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-wood-500">
                      123 Craftsman Lane, Woodville, WV
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="border-wood-600 text-wood-600 hover:bg-wood-50">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Consultation Booking */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="border-wood-200">
              <CardHeader>
                <CardTitle className="text-wood-900">Send us a Message</CardTitle>
                <p className="text-wood-600">
                  Have a question or want to discuss a project? Fill out the form below and we'll get back to you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Email *</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Phone</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Subject *</label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="custom">Custom Furniture</SelectItem>
                          <SelectItem value="repair">Furniture Repair</SelectItem>
                          <SelectItem value="quote">Price Quote</SelectItem>
                          <SelectItem value="delivery">Delivery Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-wood-900">Message *</label>
                    <Textarea
                      placeholder="Tell us about your project or question..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-wood-600 hover:bg-wood-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Consultation Booking */}
            <Card className="border-wood-200">
              <CardHeader>
                <CardTitle className="text-wood-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Consultation
                </CardTitle>
                <p className="text-wood-600">
                  Schedule a free consultation to discuss your custom furniture project in detail.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={consultationData.name}
                        onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Email *</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={consultationData.email}
                        onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-wood-900">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={consultationData.phone}
                      onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-wood-900">Project Type *</label>
                    <Select
                      value={consultationData.projectType}
                      onValueChange={(value) => setConsultationData({ ...consultationData, projectType: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dining">Dining Room Furniture</SelectItem>
                        <SelectItem value="living">Living Room Furniture</SelectItem>
                        <SelectItem value="bedroom">Bedroom Furniture</SelectItem>
                        <SelectItem value="office">Office Furniture</SelectItem>
                        <SelectItem value="storage">Storage Solutions</SelectItem>
                        <SelectItem value="outdoor">Outdoor Furniture</SelectItem>
                        <SelectItem value="restoration">Furniture Restoration</SelectItem>
                        <SelectItem value="multiple">Multiple Items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Preferred Date *</label>
                      <Input
                        type="date"
                        value={consultationData.date}
                        onChange={(e) => setConsultationData({ ...consultationData, date: e.target.value })}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-wood-900">Preferred Time *</label>
                      <Select
                        value={consultationData.time}
                        onValueChange={(value) => setConsultationData({ ...consultationData, time: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="1:00">1:00 PM</SelectItem>
                          <SelectItem value="2:00">2:00 PM</SelectItem>
                          <SelectItem value="3:00">3:00 PM</SelectItem>
                          <SelectItem value="4:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-wood-900">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project, dimensions, wood preferences, budget range, timeline, etc."
                      rows={4}
                      value={consultationData.details}
                      onChange={(e) => setConsultationData({ ...consultationData, details: e.target.value })}
                    />
                  </div>

                  <div className="bg-wood-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-wood-900 mb-2">What to Expect:</h4>
                    <ul className="text-sm text-wood-700 space-y-1">
                      <li>• Free 60-minute consultation</li>
                      <li>• Discussion of design ideas and requirements</li>
                      <li>• Material and finish options review</li>
                      <li>• Timeline and pricing estimates</li>
                      <li>• Portfolio of previous work</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full bg-wood-600 hover:bg-wood-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-wood-600" />
            </div>
            <h3 className="font-semibold text-wood-900 mb-2">Quick Response</h3>
            <p className="text-sm text-wood-600">
              We respond to all inquiries within 24 hours during business days.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-wood-600" />
            </div>
            <h3 className="font-semibold text-wood-900 mb-2">Free Consultations</h3>
            <p className="text-sm text-wood-600">
              All initial consultations are complimentary with no obligation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-wood-600" />
            </div>
            <h3 className="font-semibold text-wood-900 mb-2">Workshop Visits</h3>
            <p className="text-sm text-wood-600">
              Schedule a visit to see our craftsmanship process firsthand.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-wood-600" />
            </div>
            <h3 className="font-semibold text-wood-900 mb-2">Project Updates</h3>
            <p className="text-sm text-wood-600">
              Regular progress updates and photos throughout your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
