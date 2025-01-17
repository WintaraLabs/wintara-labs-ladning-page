import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for trying out our services",
    features: [
      "Up to 10,000 characters per month",
      "Basic voice selection",
      "Standard support",
      "Web-based text-to-speech",
      "MP3 download"
    ]
  },
  {
    name: "Professional",
    price: "$49",
    description: "For professional content creators",
    features: [
      "Up to 100,000 characters per month",
      "Premium voice selection",
      "Priority support",
      "API access",
      "Advanced voice customization",
      "Commercial license"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited characters",
      "Custom voice creation",
      "24/7 dedicated support",
      "Full API access",
      "Custom integration",
      "SLA guarantee"
    ]
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border-2 border-gray-100 dark:border-gray-700"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="ml-1 text-xl text-gray-500">/month</span>
                  )}
                </div>
                <p className="mt-5 text-lg text-gray-500">
                  {plan.description}
                </p>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#45d1e8] mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full bg-[#45d1e8] hover:bg-[#45d1e8]/90">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

