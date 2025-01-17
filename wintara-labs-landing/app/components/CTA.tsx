import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-[#45d1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join leading enterprises and innovative startups using our cutting-edge technology solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            View Solutions
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

