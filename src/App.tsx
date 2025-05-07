import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <motion.div 
    variants={fadeIn}
    className="p-6 rounded-xl bg-gradient-to-br from-background to-secondary/50 border border-border/50 hover:border-primary/30 transition-all"
    whileHover={{ y: -5 }}
  >
    <div className="text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"
          >
            Nexa<span className="text-foreground">Labs</span>
          </motion.div>
          
          <NavigationMenu>
            <NavigationMenuList>
              {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} hover:text-primary transition-colors`}
                  >
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-primary to-cyan-500 text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection>
        <section className="container flex flex-col items-center justify-center gap-8 pt-32 pb-16 md:py-40">
          <motion.div variants={fadeIn} className="flex flex-col items-center gap-6 text-center max-w-4xl">
            <motion.span 
              variants={fadeIn}
              className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Next-gen platform launched
            </motion.span>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
            >
              Transform your <span className="text-primary">business</span> with AI
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Our cutting-edge platform helps you automate workflows, analyze data, and make smarter decisions faster.
            </motion.p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-500 text-white hover:opacity-90">
              Start free trial
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-secondary/50">
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                See demo
              </span>
            </Button>
          </motion.div>
          
          <motion.div variants={fadeIn} className="mt-12 w-full max-w-5xl aspect-video bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl border border-border/50 overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              [Product screenshot/hero image]
            </div>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Logos Section */}
      <AnimatedSection>
        <section className="container py-12">
          <motion.p variants={fadeIn} className="text-center text-muted-foreground mb-8">
            Trusted by innovative companies worldwide
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70"
          >
            {['TechCorp', 'InnoVate', 'DataSphere', 'CloudNine', 'AI Nexus'].map((logo) => (
              <motion.div 
                key={logo}
                whileHover={{ scale: 1.1 }}
                className="text-xl font-medium text-muted-foreground"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection>
        <section className="container py-12 md:py-24">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful features built for scale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, launch, and grow your business
            </p>
          </motion.div>
          
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Process data in milliseconds with our optimized engine"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Military-grade encryption and compliance standards"
              },
              {
                icon: "📊",
                title: "Advanced Analytics",
                description: "Real-time insights with beautiful visualizations"
              },
              {
                icon: "🤖",
                title: "AI Powered",
                description: "Smart recommendations and automation"
              },
              {
                icon: "🔄",
                title: "Seamless Sync",
                description: "Connect all your tools in one place"
              },
              {
                icon: "🌐",
                title: "Global Infrastructure",
                description: "Low latency worldwide with 99.99% uptime"
              }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection>
        <section className="container py-12 md:py-24 bg-gradient-to-b from-secondary/10 to-background rounded-3xl">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start for free, upgrade as you grow. No hidden fees.
            </p>
          </motion.div>
          
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                name: 'Starter',
                price: '$29',
                description: 'Perfect for individuals and small teams',
                features: ['Up to 10 users', 'Basic analytics', 'Email support', '100GB storage'],
                popular: false
              },
              {
                name: 'Pro',
                price: '$99',
                description: 'For growing businesses',
                features: ['Up to 50 users', 'Advanced analytics', 'Priority support', '1TB storage', 'API access'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: ['Unlimited users', 'Premium analytics', '24/7 support', 'Custom storage', 'Dedicated account manager'],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={plan.name}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-2xl border ${plan.popular ? 'border-primary/30 shadow-lg shadow-primary/10' : 'border-border/50'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <Card className="border-none">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold mb-6">
                      {plan.price}
                      {plan.price !== 'Custom' && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      size="lg" 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-cyan-500 text-white' : ''}`}
                    >
                      Get started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="container py-12 md:py-24">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Loved by businesses worldwide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear what our customers say
            </p>
          </motion.div>
          
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'CTO at TechCorp',
                quote: 'This platform transformed our workflow completely. We saw a 300% increase in productivity within the first month.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Product Manager',
                quote: 'The best decision we made for our engineering team. The automation features saved us hundreds of hours.',
                rating: 5
              },
              {
                name: 'Emma Rodriguez',
                role: 'Director of Operations',
                quote: 'Incredible customer support and constantly improving features. Worth every penny.',
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl bg-gradient-to-b from-background to-secondary/10 border border-border/50"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="container py-12 md:py-24">
          <motion.div 
            variants={fadeIn}
            className="rounded-3xl bg-gradient-to-r from-primary/10 to-cyan-500/10 p-8 md:p-16 text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to transform your business?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Join thousands of businesses already using our platform to drive growth and efficiency.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-500 text-white hover:opacity-90">
                Start free trial
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-secondary/50">
                Contact sales
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="mt-auto border-t">
        <div className="container flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-bold text-xl bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              NexaLabs
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              The next generation platform for business automation and AI-powered analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Product",
                links: ["Features", "Solutions", "Pricing", "Demo"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Guides", "Blog", "Support"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Contact"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Cookies"]
              }
            ].map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container border-t py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NexaLabs. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub', 'Facebook'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
