import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Target, Users, BarChart3, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "@/assets/hero-bg.jpg";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import VisionMission from "@/components/sections/VisionMission";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

const Home = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { value: 500, label: "Clients Served", suffix: "+" },
    { value: 2.5, label: "Assets Managed", prefix: "$", suffix: "B+" },
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  const count1 = useCountAnimation({ end: 500, duration: 2500 });
  const count2 = useCountAnimation({ end: 25, duration: 2500 }); // 2.5 * 10 for decimals
  const count3 = useCountAnimation({ end: 15, duration: 2000 });
  const count4 = useCountAnimation({ end: 98, duration: 2200 });

  const counters = [count1, count2, count3, count4];

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
        ref={heroRef}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Revolutionizing 
              <span className="text-transparent bg-gradient-gold bg-clip-text"> Financial </span>
              Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Empowering individuals and businesses to make smarter financial decisions 
              that grow and future-proof their finances to be more resilient, profitable and sustainable.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="min-w-[200px] shadow-gold" asChild>
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const counter = counters[index];
              return (
                <motion.div 
                  key={index} 
                  ref={counter.ref}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.prefix}
                    {index === 1 ? (counter.count / 10).toFixed(1) : counter.count}
                    {stat.suffix}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24" ref={servicesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial solutions designed to reshape the financial landscape 
              and drive sustainable growth for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <service.icon size={32} className="text-background" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-gold p-12 rounded-3xl max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have revolutionized their finances 
                with our expert guidance and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" size="lg" className="min-w-[200px]" asChild>
                    <Link to="/contact">Book Free Consultation</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="min-w-[200px] bg-background text-foreground border-2 border-background hover:bg-transparent hover:text-background" 
                    asChild
                  >
                    <Link to="/services">Explore Our Services</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;