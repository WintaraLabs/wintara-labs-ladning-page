import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, ShoppingCart, Hospital, BanknoteIcon as Bank, Plane, Microscope } from 'lucide-react'

const useCases = [
  {
    icon: <Building2 className="h-6 w-6 text-[#45d1e8]" />,
    title: "Enterprise",
    description: "Complete digital transformation solutions for large organizations"
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-[#45d1e8]" />,
    title: "E-commerce",
    description: "Scalable platforms for online retail businesses"
  },
  {
    icon: <Hospital className="h-6 w-6 text-[#45d1e8]" />,
    title: "Healthcare",
    description: "Secure and compliant healthcare technology solutions"
  },
  {
    icon: <Bank className="h-6 w-6 text-[#45d1e8]" />,
    title: "FinTech",
    description: "Advanced financial technology solutions"
  },
  {
    icon: <Plane className="h-6 w-6 text-[#45d1e8]" />,
    title: "Travel",
    description: "Smart solutions for travel and hospitality"
  },
  {
    icon: <Microscope className="h-6 w-6 text-[#45d1e8]" />,
    title: "Research",
    description: "Advanced tools for research and development"
  }
]

export default function UseCases() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Transform Your Content
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore the many ways you can use our voice technology
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-2 border-gray-100 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  {useCase.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

