import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Target, 
  BarChart3, 
  PieChart, 
  Calculator,
  Users,
  Globe,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Users,
      title: "Personal Loans",
      description: "Tailored personal financing solutions for your individual needs and goals.",
      clients: "25,369",
      features: [
        "Personal Financing",
        "Credit Advisory",
        "Loan Restructuring",
        "Financial Planning"
      ]
    },
    {
      icon: BarChart3,
      title: "SME Financing",
      description: "Business loans and financing solutions to help your enterprise grow.",
      clients: "834",
      features: [
        "Business Loans",
        "Working Capital",
        "Equipment Financing",
        "Trade Financing"
      ]
    },
    {
      icon: Shield,
      title: "Debt Consolidation",
      description: "Simplify your finances by consolidating multiple debts into one manageable payment.",
      clients: "8,756",
      features: [
        "Debt Restructuring",
        "Payment Consolidation",
        "Interest Rate Optimization",
        "Financial Counseling"
      ]
    },
    {
      icon: TrendingUp,
      title: "Housing Loans",
      description: "Make your dream home a reality with our competitive housing loan packages.",
      clients: "329",
      features: [
        "Home Purchase Loans",
        "Refinancing Options",
        "Construction Loans",
        "Islamic Financing"
      ]
    },
    {
      icon: Calculator,
      title: "Refinancing",
      description: "Optimize your existing loans with better rates and terms through refinancing.",
      clients: "458",
      features: [
        "Rate Comparison",
        "Loan Restructuring",
        "Terms Optimization",
        "Cost Savings Analysis"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: PieChart,
      title: "Wealth Management",
      description: "Holistic approach to managing and growing your wealth across all asset classes."
    },
    {
      icon: Calculator,
      title: "Tax Advisory",
      description: "Strategic tax planning to minimize liability and maximize after-tax returns."
    },
    {
      icon: Users,
      title: "Family Office Services",
      description: "Comprehensive financial services for high-net-worth families and individuals."
    },
    {
      icon: Globe,
      title: "International Finance",
      description: "Cross-border financial solutions for global businesses and investors."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-transparent bg-gradient-gold bg-clip-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed to revolutionize your financial landscape 
            and drive sustainable growth for your future.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Financial Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our flagship services that form the foundation of your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon size={24} className="text-background" />
                      </div>
                      <CardTitle className="text-xl lg:text-2xl">{service.title}</CardTitle>
                    </div>
                    <div className="bg-gradient-gold text-background px-3 py-1 rounded-full text-sm font-semibold">
                      {service.clients} clients
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced financial solutions for complex needs and unique circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering exceptional financial solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-background">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                We begin by understanding your unique financial situation, goals, and challenges through comprehensive analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-background">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Strategy</h3>
              <p className="text-muted-foreground">
                Our experts develop a customized financial strategy tailored to your specific needs and risk tolerance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-background">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Implementation</h3>
              <p className="text-muted-foreground">
                We execute the strategy with precision and provide ongoing monitoring and adjustments as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how our services can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-background text-background hover:bg-background hover:text-primary" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;