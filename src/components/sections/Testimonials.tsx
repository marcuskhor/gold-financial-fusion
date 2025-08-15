import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Ltd",
      role: "CEO",
      content: "Multi Metrics Marketing transformed our financial strategy completely. Their innovative approach helped us increase profitability by 45% within the first year.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Growth Ventures",
      role: "Founder",
      content: "The team's expertise in financial planning is unmatched. They provided solutions that not only solved our immediate challenges but positioned us for long-term success.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Strategic Solutions Inc",
      role: "CFO",
      content: "Working with MMM has been a game-changer. Their data-driven approach and personalized strategies have revolutionized how we manage our finances.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-bold text-foreground mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover how we've helped businesses and individuals achieve their financial goals 
            and transform their financial futures.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote size={24} className="text-gold mr-2" />
                    <div className="flex space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-gold">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;