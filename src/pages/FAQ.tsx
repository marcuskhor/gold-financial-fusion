import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Multi Metrics Marketing offer?",
      answer: "We offer comprehensive financial services including financial planning, investment advisory, risk management, business consulting, wealth management, tax advisory, family office services, and international finance solutions. Our services are designed to revolutionize your financial strategy and drive sustainable growth."
    },
    {
      question: "How is Multi Metrics Marketing different from other financial consultancies?",
      answer: "We're innovators committed to revolutionizing how financial solutions are produced. We combine advanced analytics, cutting-edge technology, and personalized strategies to create solutions that are truly tailored to your unique needs. Our data-driven approach ensures optimal results and future-proof strategies."
    },
    {
      question: "What is the minimum investment required to work with you?",
      answer: "We work with clients across various investment levels. Our minimum varies depending on the specific services required. During your consultation, we'll discuss your financial situation and recommend the most appropriate service package for your needs and goals."
    },
    {
      question: "How do you ensure the security of my financial information?",
      answer: "We employ bank-level security measures including 256-bit encryption, secure data centers, and strict access controls. Our team follows rigorous compliance protocols, and we're committed to maintaining the highest standards of data privacy and security."
    },
    {
      question: "What is your investment philosophy?",
      answer: "Our investment philosophy centers on data-driven decision making, diversification, and long-term wealth preservation. We focus on creating resilient portfolios that can adapt to changing market conditions while maintaining consistent growth potential."
    },
    {
      question: "How often will I receive updates on my investments?",
      answer: "We provide regular portfolio updates and performance reports. The frequency depends on your service level, but typically includes monthly statements, quarterly reviews, and annual comprehensive assessments. You also have 24/7 access to your portfolio through our secure client portal."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we provide international finance solutions for global businesses and investors. Our team has expertise in cross-border financial strategies, currency hedging, and international tax considerations."
    },
    {
      question: "What qualifications do your advisors have?",
      answer: "Our team consists of certified financial planners (CFP), chartered financial analysts (CFA), and other industry professionals with extensive experience in financial services. Many of our advisors have backgrounds at leading financial institutions and bring decades of expertise."
    },
    {
      question: "How do you charge for your services?",
      answer: "Our fee structure is transparent and varies based on the services provided. We offer both fee-based and commission-based options, depending on your needs. We'll discuss all fees upfront during your initial consultation to ensure complete transparency."
    },
    {
      question: "Can you help with business financial consulting?",
      answer: "Absolutely! We provide comprehensive business financial consulting including business valuation, capital structure optimization, M&A advisory, growth strategy development, and financial planning for businesses of all sizes."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply schedule a free consultation through our contact page or call us directly. During this initial meeting, we'll discuss your financial goals, assess your current situation, and recommend the best path forward."
    },
    {
      question: "What happens during the initial consultation?",
      answer: "During your free consultation, we'll review your financial goals, current portfolio, risk tolerance, and time horizon. We'll explain our services, discuss potential strategies, and outline how we can help you achieve your objectives. There's no obligation to proceed after the consultation."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle size={64} className="text-primary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-transparent bg-gradient-gold bg-clip-text">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help 
            revolutionize your financial future.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized answers to your specific questions 
            about our financial services and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-background">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-background">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@multimetricsmarketing.com</p>
              <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-background">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Schedule a Meeting</h3>
              <p className="text-muted-foreground">Free consultation available</p>
              <p className="text-sm text-muted-foreground">Virtual or in-person options</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;