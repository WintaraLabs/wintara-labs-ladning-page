import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    content: "The voice quality is incredible. It's helped me create professional content faster than ever.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Podcast Host",
    content: "Game-changing technology for my podcast production. The multilingual support is fantastic.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "E-Learning Developer",
    content: "Perfect for creating engaging educational content. The natural-sounding voices keep students engaged.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of satisfied customers using our voice technology
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-gray-100 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#45d1e8] text-[#45d1e8]" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-[#45d1e8] rounded-full flex items-center justify-center text-white">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
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

