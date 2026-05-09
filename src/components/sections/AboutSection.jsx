import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../hooks/useScrollAnimation';
import { aboutText, focusAreas } from '../../data/portfolioData';
import aboutImage from '../../assets/hafiz-portfolio.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Dr. Hafiz Iftikhar Hussain"
              className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-medium text-primary">📍 Bahawalpur, Pakistan</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <SectionTitle title="About Me" subtitle="Bridging molecular research with institutional leadership" align="left" />
            <div className="space-y-4 text-text-primary leading-relaxed">
              {aboutText.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {focusAreas.map((area, index) => (
                <motion.div key={index} variants={fadeInLeft}>
                  <Card className="p-4 h-full">
                    <area.icon className="w-6 h-6 text-accent mb-2" />
                    <h4 className="font-semibold text-primary text-sm">{area.title}</h4>
                    <p className="text-xs text-text-secondary mt-1">{area.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;