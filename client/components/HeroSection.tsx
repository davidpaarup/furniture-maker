import { ArrowRight, Hammer, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-wood-50 to-wood-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="fill-current text-wood-600"
        >
          <pattern
            id="wood-grain"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <rect width="60" height="60" fill="none" />
            <path d="M0 20h60M0 40h60" stroke="currentColor" strokeWidth="1" />
            <path d="M20 0v60M40 0v60" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wood-grain)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-wood-900 leading-tight">
                Handcrafted
                <span className="block text-wood-600">Wooden Furniture</span>
              </h1>
              <p className="text-lg text-wood-700 leading-relaxed max-w-md">
                Transform your space with bespoke wooden furniture, crafted with
                traditional techniques and modern design sensibility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-wood-600 hover:bg-wood-700"
              >
                <Link to="/furniture">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-wood-600 text-wood-600 hover:bg-wood-50"
              >
                <Link to="/custom">Custom Order</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-wood-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Hammer className="h-6 w-6 text-wood-600" />
                </div>
                <p className="text-sm font-medium text-wood-800">Handcrafted</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wood-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-wood-600" />
                </div>
                <p className="text-sm font-medium text-wood-800">
                  Premium Quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wood-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-wood-600" />
                </div>
                <p className="text-sm font-medium text-wood-800">Custom Made</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-wood-200 to-wood-300 rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="w-full h-full flex items-center justify-center bg-wood-200">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-wood-400 rounded-full mx-auto flex items-center justify-center">
                    <Hammer className="h-12 w-12 text-wood-100" />
                  </div>
                  <p className="text-wood-600 font-medium">
                    Beautiful Wooden Furniture
                  </p>
                  <p className="text-wood-500 text-sm">
                    Hero image placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-wood-100">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-wood-800">15+</p>
                  <p className="text-sm text-wood-600">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-wood-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-wood-800">500+</p>
                  <p className="text-sm text-wood-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
