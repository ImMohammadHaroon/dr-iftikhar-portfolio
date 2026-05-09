import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../../hooks/useScrollAnimation';
import heroImage from '../../assets/hafiz-portfolio.jpeg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-bg">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="order-2 md:order-1"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Assistant Professor & Director, Central Diagnostic Laboratory CUVAS
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Dr. Hafiz Iftikhar Hussain, <span className="text-accent">Assistant Professor</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
              Veterinary Pathologist | Molecular Researcher | Academic Leader
            </p>
            <p className="mt-4 text-text-secondary">
              Investigating antimicrobial resistance and zoonotic pathogens at the intersection of animal health and public health.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#research">View Publications</Button>
              <Button variant="outline" href="https://drive.google.com/file/d/1Bp2OGn0XFNrRgnmpKkjnj7EbT2e82oTF/view" target="_blank" rel="noopener noreferrer">View CV</Button>
              <Button variant="ghost" href="#contact">Contact Me</Button>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform translate-x-4 translate-y-4" />
              <img
                src={heroImage}
                alt="Dr. Hafiz Iftikhar Hussain"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;