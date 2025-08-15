import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Target, Users, BarChart3, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "$2.5B+", label: "Assets Managed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Comprehensive financial strategies tailored to your goals and risk tolerance.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect your wealth with sophisticated risk assessment and mitigation strategies.",
    },
    {
      icon: Target,
      title: "Investment Advisory",
      description: "Expert guidance to optimize your investment portfolio for maximum returns.",
    },
    {
      icon: BarChart3,
      title: "Business Consulting",
      description: "Strategic business financial consulting to accelerate growth and profitability.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.6) 50%, rgba(201, 166, 53, 0.1) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Revolutionizing 
              <span className="text-transparent bg-gradient-gold bg-clip-text"> Financial </span>
              Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Empowering individuals and businesses to make smarter financial decisions 
              that grow and future-proof their finances to be more resilient, profitable and sustainable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="min-w-[200px] shadow-gold" asChild>
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial solutions designed to reshape the financial landscape 
              and drive sustainable growth for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
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

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Multi Metrics Marketing?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're not just another financial consultancy. We're innovators committed to 
                revolutionizing how financial solutions are produced and delivered.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={16} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Client-Centric Approach</h3>
                    <p className="text-muted-foreground">Every strategy is tailored to your unique financial goals and circumstances.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calculator size={16} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data-Driven Solutions</h3>
                    <p className="text-muted-foreground">Leveraging advanced analytics and market insights for optimal results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield size={16} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Future-Proof Strategies</h3>
                    <p className="text-muted-foreground">Building resilient financial foundations that adapt to changing markets.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-gold p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-background mb-4">Ready to Transform Your Finances?</h3>
                <p className="text-background/80 mb-6">
                  Schedule a free consultation and discover how we can help you achieve your financial goals.
                </p>
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;