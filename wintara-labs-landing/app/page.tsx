import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TechDemo from './components/TechDemo'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <TechDemo />
      <UseCases />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

