import { Leaf, Shield, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
                Crafting Excellence Since 2009
              </h2>
              <p className="text-wood-600 leading-relaxed">
                At WoodCraft, we believe that furniture should be more than just functional—it should tell a story. 
                Our master craftsmen combine traditional woodworking techniques with contemporary design to create 
                pieces that will be treasured for generations.
              </p>
              <p className="text-wood-600 leading-relaxed">
                Every piece is handcrafted in our workshop using sustainably sourced wood, ensuring that your 
                furniture is not only beautiful but also environmentally responsible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-wood-600" />
                </div>
                <h3 className="font-semibold text-wood-900">Sustainable Wood</h3>
                <p className="text-sm text-wood-600">
                  Only responsibly sourced materials from certified forests.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-wood-600" />
                </div>
                <h3 className="font-semibold text-wood-900">Lifetime Warranty</h3>
                <p className="text-sm text-wood-600">
                  We stand behind our craftsmanship with a comprehensive warranty.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-wood-600" />
                </div>
                <h3 className="font-semibold text-wood-900">Free Delivery</h3>
                <p className="text-sm text-wood-600">
                  Complimentary white-glove delivery and setup service.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-wood-600" />
                </div>
                <h3 className="font-semibold text-wood-900">Custom Timeline</h3>
                <p className="text-sm text-wood-600">
                  Bespoke pieces crafted to your exact specifications.
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-wood-600 hover:bg-wood-700">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-wood-200 to-wood-300 rounded-2xl overflow-hidden">
              {/* Placeholder for workshop/craftsman image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-wood-400 rounded-full mx-auto flex items-center justify-center">
                    <Leaf className="h-12 w-12 text-wood-100" />
                  </div>
                  <p className="text-wood-600 font-medium">Our Workshop</p>
                  <p className="text-wood-500 text-sm">Craftsman at work</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-wood-100">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-wood-800">15+</p>
                  <p className="text-xs text-wood-600">Years</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-wood-800">500+</p>
                  <p className="text-xs text-wood-600">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-wood-800">100%</p>
                  <p className="text-xs text-wood-600">Handmade</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-wood-800">24/7</p>
                  <p className="text-xs text-wood-600">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
