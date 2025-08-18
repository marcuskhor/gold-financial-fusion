import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, TrendingUp, Award, Clock, HeadphonesIcon, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Proven track record with industry-leading expertise and countless success stories.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "Data-backed strategies that deliver measurable improvements to your financial health.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need guidance or have questions.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International market insights combined with local expertise for optimal results.",
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Satisfaction",
      description: "We stand behind our work with comprehensive guarantees and ongoing support.",
    },
    {
      icon: Clock,
      title: "Time-Efficient Solutions",
      description: "Streamlined processes that save you time while maximizing your financial potential.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Multi Metrics Marketing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just provide financial services – we deliver transformational results 
            that position you for sustainable success in an ever-evolving financial landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-1 h-full border-border/50 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={32} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-gold p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-background mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-background/80 mb-6">
              Join thousands of satisfied clients who have transformed their financial futures with our expert guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;