import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award,
  TrendingUp,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously seek new ways to revolutionize financial solutions and stay ahead of market trends."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Trust is the foundation of everything we do. We operate with complete transparency and honesty."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We prioritize your financial goals above all else."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in every aspect of our service delivery."
    }
  ];

  const teamMembers = [
    {
      name: "Ahmad Hassan",
      role: "Chief Executive Officer",
      experience: "11+ years in financial services",
      description: "Seasoned financial expert with deep understanding of Malaysian banking systems and international finance."
    },
    {
      name: "Li Wei Chen",
      role: "Senior Loan Advisor",
      experience: "8+ years in loan advisory",
      description: "Specialist in personal and business loans with extensive network of banking partners across Malaysia."
    },
    {
      name: "Priya Sharma",
      role: "Financial Consultant",
      experience: "6+ years in debt management",
      description: "Expert in debt consolidation and refinancing solutions, helping clients optimize their financial positions."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-transparent bg-gradient-gold bg-clip-text">Multi Metrics Marketing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted financial partner with 11 years of expertise in banking and loan services across Malaysia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-gold text-center">
              <CardContent className="p-0">
                <Target size={48} className="text-background mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-background mb-4">Our Mission</h2>
                <p className="text-background/90 text-lg leading-relaxed">
                  To provide simple, reliable, and tailored financial solutions that help our clients achieve their goals with confidence.
                  We aim to be the trusted link between people and banks through professionalism, integrity, and results-driven service.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-dark-card text-center">
              <CardContent className="p-0">
                <Eye size={48} className="text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be a trusted financial agency recognized for excellence, integrity, and innovation — delivering seamless banking solutions that empower individuals and businesses to grow with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Established in 2014, our agency has over 11 years of experience in the financial and banking services industry. As a trusted partner to both individuals and businesses, we specialize in providing tailored financial solutions, from personal loans and credit advisory to business financing and banking consultation.
              </p>
              <p>
                With a deep understanding of the banking system and a strong network of partners, our mission is to simplify financial processes, guide our clients through complex banking procedures, and help them achieve their financial goals with confidence and clarity.
              </p>
              <p>
                Our team is committed to integrity, professionalism, and delivering results that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={32} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">35,446+</div>
              <div className="text-muted-foreground">Total Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">11+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have revolutionized their financial strategies with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-background text-background hover:bg-background hover:text-primary" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;