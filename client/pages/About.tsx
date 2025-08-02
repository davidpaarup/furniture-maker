import { Award, Users, Leaf, Heart, Hammer, Shield, TreePine, Recycle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function About() {
  const teamMembers = [
    {
      name: "Marcus Thompson",
      role: "Founder & Master Craftsman",
      experience: "25+ years",
      specialization: "Traditional Joinery & Custom Design",
      bio: "Marcus founded WoodCraft with a vision to preserve traditional woodworking techniques while creating furniture for modern living. His passion for sustainable craftsmanship drives every piece we create.",
      image: "https://images.pexels.com/photos/5095283/pexels-photo-5095283.jpeg",
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      experience: "12+ years",
      specialization: "Modern Design & Space Planning",
      bio: "Sarah brings contemporary design sensibilities to our traditional craft. Her expertise in ergonomics and space planning ensures every piece is both beautiful and functional.",
      image: "https://images.pexels.com/photos/5095283/pexels-photo-5095283.jpeg",
    },
    {
      name: "David Rodriguez",
      role: "Senior Craftsman",
      experience: "18+ years",
      specialization: "Wood Finishing & Restoration",
      bio: "David's mastery of wood finishing techniques brings out the natural beauty in every piece. His restoration work has saved countless antique pieces for future generations.",
      image: "https://images.pexels.com/photos/5095283/pexels-photo-5095283.jpeg",
    },
    {
      name: "Emma Wilson",
      role: "Sustainability Coordinator",
      experience: "8+ years",
      specialization: "Sustainable Sourcing & Environmental Impact",
      bio: "Emma ensures our commitment to environmental responsibility. She manages our sustainable sourcing program and oversees our carbon-neutral workshop operations.",
      image: "https://images.pexels.com/photos/5095283/pexels-photo-5095283.jpeg",
    },
  ];

  const workshopStations = [
    {
      name: "Design Studio",
      description: "Where ideas come to life through sketches, 3D modeling, and material selection.",
      tools: ["CAD Workstations", "Material Library", "Scale Models", "Client Meeting Space"],
    },
    {
      name: "Lumber Mill",
      description: "Processing sustainably sourced timber with precision milling and drying.",
      tools: ["Band Saws", "Planer", "Kiln Dryer", "Moisture Meters"],
    },
    {
      name: "Traditional Workshop",
      description: "Hand tools and traditional techniques for detailed craftwork and joinery.",
      tools: ["Hand Planes", "Chisels", "Mortise Machines", "Sharpening Station"],
    },
    {
      name: "Modern Workshop",
      description: "CNC machines and modern tools for precision cutting and shaping.",
      tools: ["CNC Router", "Table Saws", "Router Tables", "Dust Collection"],
    },
    {
      name: "Finishing Room",
      description: "Climate-controlled environment for applying stains, oils, and protective coatings.",
      tools: ["Spray Booths", "Drying Racks", "Color Matching", "Quality Control"],
    },
    {
      name: "Assembly & Quality",
      description: "Final assembly, hardware installation, and rigorous quality inspection.",
      tools: ["Assembly Tables", "Hardware Station", "Quality Checklist", "Photography Setup"],
    },
  ];

  const sustainabilityCommitments = [
    {
      icon: TreePine,
      title: "Sustainable Sourcing",
      description: "100% of our wood comes from FSC-certified forests and responsible suppliers.",
      metrics: "1,200+ trees planted annually through our reforestation program",
    },
    {
      icon: Recycle,
      title: "Zero Waste Workshop",
      description: "Wood scraps become smaller items, sawdust for composting, and offcuts for fuel.",
      metrics: "95% waste diversion rate from landfills",
    },
    {
      icon: Leaf,
      title: "Carbon Neutral Operations",
      description: "Solar-powered workshop with renewable energy and carbon offset programs.",
      metrics: "Net-zero carbon footprint since 2020",
    },
    {
      icon: Shield,
      title: "Non-Toxic Finishes",
      description: "All finishes are water-based, VOC-free, and safe for indoor air quality.",
      metrics: "Zero harmful chemicals in our finishing process",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-wood-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-wood-900">
              Our Story
            </h1>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, WoodCraft has been dedicated to creating heirloom-quality 
              furniture that tells a story. Every piece we craft represents our commitment 
              to traditional techniques, sustainable practices, and timeless design.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
                The Founder's Journey
              </h2>
              <div className="space-y-4 text-wood-700 leading-relaxed">
                <p>
                  WoodCraft began in 2009 when Marcus Thompson, a third-generation woodworker, 
                  decided to follow his passion for creating furniture that would last generations. 
                  Growing up in his grandfather's workshop, Marcus learned that true craftsmanship 
                  isn't just about skill—it's about respect for the material, the process, and 
                  the people who will live with your creations.
                </p>
                <p>
                  After working for large furniture manufacturers for over a decade, Marcus felt 
                  disconnected from the heart of woodworking. He wanted to return to the roots 
                  of the craft—where every joint is cut by hand, every finish is applied with 
                  care, and every piece tells a unique story.
                </p>
                <p>
                  What started as a one-man operation in a small garage has grown into a team 
                  of passionate craftspeople, but our core values remain unchanged: quality over 
                  quantity, sustainability over profit, and craftsmanship over convenience.
                </p>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-wood-800">15+</p>
                  <p className="text-sm text-wood-600">Years in Business</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-wood-800">500+</p>
                  <p className="text-sm text-wood-600">Custom Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-wood-800">100%</p>
                  <p className="text-sm text-wood-600">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-wood-200 to-wood-300 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5095283/pexels-photo-5095283.jpeg"
                  alt="Marcus Thompson in his workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-wood-100 max-w-sm">
                <div className="space-y-3">
                  <p className="text-wood-700 italic">
                    "Every piece of wood has a story. Our job is to honor that story 
                    while creating something beautiful and lasting."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold text-wood-900">Marcus Thompson</p>
                      <p className="text-sm text-wood-600">Founder & Master Craftsman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 bg-wood-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
              Meet Our Team
            </h2>
            <p className="text-wood-600 max-w-2xl mx-auto">
              Our diverse team brings together traditional craftsmanship, modern design, 
              and sustainable practices to create exceptional furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-wood-200 overflow-hidden">
                <div className="aspect-square bg-wood-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-wood-900">{member.name}</h3>
                    <p className="text-wood-600 font-medium">{member.role}</p>
                    <Badge variant="secondary" className="mt-2">
                      {member.experience}
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-wood-800 mb-1">Specialization:</p>
                    <p className="text-sm text-wood-600">{member.specialization}</p>
                  </div>
                  
                  <p className="text-sm text-wood-700 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Tour */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
              Workshop Tour
            </h2>
            <p className="text-wood-600 max-w-2xl mx-auto">
              Take a virtual journey through our 8,000 square foot workshop where 
              traditional techniques meet modern precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshopStations.map((station, index) => (
              <Card key={index} className="border-wood-200">
                <CardHeader>
                  <CardTitle className="text-wood-900 flex items-center">
                    <Hammer className="h-5 w-5 mr-2" />
                    {station.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-wood-600">{station.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-wood-800 mb-2">Equipment & Tools:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {station.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="text-sm text-wood-600 flex items-center">
                          <span className="w-1 h-1 bg-wood-400 rounded-full mr-2" />
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-wood-200 bg-wood-50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-wood-200 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-wood-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-wood-900 mb-4">
                      Visit Our Workshop
                    </h3>
                    <p className="text-wood-600 max-w-2xl mx-auto mb-6">
                      We welcome visitors to see our craftspeople at work. Schedule a guided tour 
                      to experience the sights, sounds, and smells of traditional woodworking.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-wood-600 hover:bg-wood-700">
                      <Link to="/contact">Schedule a Tour</Link>
                    </Button>
                    <Button variant="outline" className="border-wood-600 text-wood-600">
                      Watch Virtual Tour
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Commitments */}
      <section className="py-20 bg-wood-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
              Our Commitment to Sustainability
            </h2>
            <p className="text-wood-600 max-w-3xl mx-auto">
              We believe in responsible craftsmanship that honors both the environment 
              and future generations. Our sustainability initiatives go beyond compliance—
              they're at the heart of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sustainabilityCommitments.map((commitment, index) => (
              <Card key={index} className="border-wood-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-wood-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <commitment.icon className="h-6 w-6 text-wood-600" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-wood-900">
                        {commitment.title}
                      </h3>
                      <p className="text-wood-600 leading-relaxed">
                        {commitment.description}
                      </p>
                      <div className="bg-wood-100 p-3 rounded-lg">
                        <p className="text-sm font-medium text-wood-800">
                          Impact: {commitment.metrics}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="border-wood-200">
            <CardHeader>
              <CardTitle className="text-wood-900 text-center flex items-center justify-center">
                <Award className="h-6 w-6 mr-2" />
                Certifications & Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <TreePine className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-wood-900">FSC Certified</h4>
                  <p className="text-sm text-wood-600">
                    Forest Stewardship Council certified for responsible wood sourcing
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Leaf className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-wood-900">Carbon Neutral</h4>
                  <p className="text-sm text-wood-600">
                    Verified carbon-neutral operations through renewable energy and offsets
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-wood-900">B-Corp Pending</h4>
                  <p className="text-sm text-wood-600">
                    Currently pursuing B-Corporation certification for social and environmental performance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-wood-200 bg-gradient-to-r from-wood-50 to-wood-100">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
                  Ready to Create Something Beautiful?
                </h2>
                <p className="text-xl text-wood-600 max-w-2xl mx-auto">
                  Whether you're looking for a single statement piece or furnishing 
                  an entire home, we're here to bring your vision to life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-wood-600 hover:bg-wood-700">
                    <Link to="/custom">Start Custom Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-wood-600 text-wood-600">
                    <Link to="/furniture">Browse Collection</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
