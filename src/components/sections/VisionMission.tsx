import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VisionMission = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
    <section className="py-16 lg:py-24 bg-dark-surface" ref={ref}>
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
            Our Vision & Mission
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Driving financial transformation through innovative solutions and unwavering commitment to excellence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <motion.div variants={itemVariants}>
            <Card className="group hover:shadow-elegant transition-all duration-300 h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye size={32} className="text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To establish or revive business financial stability and inspire young future leaders 
                  with financial literacy that will reshape the global financial landscape.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="group hover:shadow-elegant transition-all duration-300 h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target size={32} className="text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Be a trusted financial partner that lifts every business in any situation to a healthier 
                  financial status and builds stronger cornerstones through financial education.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card className="group hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} className="text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Client-Centric</h4>
                <p className="text-muted-foreground">Every solution tailored to your unique needs</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield size={24} className="text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Future-Proof</h4>
                <p className="text-muted-foreground">Strategies that adapt to changing markets</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;