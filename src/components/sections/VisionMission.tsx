import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Star, Award, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VisionMission = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      },
    },
  };

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "Committed to delivering outstanding results in every engagement"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Building trust through transparent and ethical practices"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Pioneering financial solutions for tomorrow's challenges"
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Rapidly adapting to market changes and client needs"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-dark-surface to-background overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-gold/10 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-10 w-24 h-24 bg-primary/20 rounded-full blur-lg"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Foundation
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Vision & 
            <span className="text-transparent bg-gradient-gold bg-clip-text"> Mission</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Transforming the financial landscape through innovation, expertise, and unwavering commitment to our clients' success.
          </motion.p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20"
        >
          <motion.div variants={itemVariants} className="group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-gold rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <Card className="relative bg-dark-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <CardContent className="relative p-10">
                  <motion.div 
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                  >
                    <Eye size={36} className="text-background" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    To establish or revive business financial stability and inspire young future leaders 
                    with financial literacy that will reshape the global financial landscape.
                  </p>
                  <div className="h-1 w-20 bg-gradient-gold rounded-full"></div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-gold rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <Card className="relative bg-dark-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <CardContent className="relative p-10">
                  <motion.div 
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                  >
                    <Target size={36} className="text-background" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    Be a trusted financial partner that lifts every business in any situation to a healthier 
                    financial status and builds stronger cornerstones through financial education.
                  </p>
                  <div className="h-1 w-20 bg-gradient-gold rounded-full"></div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
          >
            Our Core Values
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The principles that guide every decision and shape our client relationships
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-dark-card/50 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-gold transition-colors duration-300"
                  >
                    <value.icon size={28} className="text-primary group-hover:text-background transition-colors duration-300" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;