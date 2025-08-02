import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Interior Designer",
    content: "The dining table I ordered exceeded all expectations. The craftsmanship is extraordinary and the attention to detail is remarkable. It's become the centerpiece of my dining room.",
    rating: 5,
    image: "sarah",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Homeowner",
    content: "Working with WoodCraft was an absolute pleasure. They listened to my vision and created a custom bookshelf that perfectly fits my space and style. Highly recommended!",
    rating: 5,
    image: "michael",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Architect",
    content: "As an architect, I appreciate quality craftsmanship. WoodCraft delivers furniture that's not just beautiful but built to last generations. Their work is truly artisanal.",
    rating: 5,
    image: "emily",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-wood-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
            What Our Customers Say
          </h2>
          <p className="text-wood-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their WoodCraft experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-wood-200 bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-wood-400" />

                  {/* Rating */}
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-wood-700 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-wood-100">
                    <div className="w-10 h-10 bg-wood-200 rounded-full flex items-center justify-center">
                      <span className="text-wood-600 font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-wood-900">{testimonial.name}</p>
                      <p className="text-sm text-wood-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
