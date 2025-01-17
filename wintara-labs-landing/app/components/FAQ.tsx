import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does your cloud infrastructure work?",
    answer: "Our cloud infrastructure uses advanced distributed systems to provide high availability and scalability. We utilize multiple data centers worldwide to ensure optimal performance and reliability for all our clients."
  },
  {
    question: "What security measures do you implement?",
    answer: "We implement military-grade security protocols, including end-to-end encryption, regular security audits, and compliance with international standards like SOC 2, ISO 27001, and GDPR."
  },
  {
    question: "Can I integrate your solutions with existing systems?",
    answer: "Yes! Our solutions are built with integration in mind. We provide comprehensive APIs and documentation to ensure seamless integration with your existing infrastructure."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive documentation. Our support team is highly skilled in resolving complex technical issues."
  },
  {
    question: "How do you handle data privacy?",
    answer: "We take data privacy seriously and comply with all major privacy regulations. Your data is encrypted both in transit and at rest, and you maintain full control over your data at all times."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our service
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

