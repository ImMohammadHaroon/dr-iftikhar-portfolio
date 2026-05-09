import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import { conferences, workshops } from '../../data/portfolioData';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const ConferencesSection = () => {
  return (
    <section id="conferences" className="py-20 md:py-28 bg-surface">
      <Container>
        <SectionTitle title="Conferences & Engagement" subtitle="Sharing knowledge and contributing to scientific discourse" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Conferences */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className="font-playfair text-xl font-semibold text-primary mb-6">International Conferences & Seminars</h3>
            <div className="space-y-4">
              {conferences.map((conf, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="flex items-start gap-4 p-4">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">{conf.title}</h4>
                      <p className="text-sm text-text-secondary">{conf.location}</p>
                      <p className="text-xs text-text-secondary mt-1">{conf.date}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workshops */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className="font-playfair text-xl font-semibold text-primary mb-6">Workshops & Trainings</h3>
            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="flex items-start gap-4 p-4">
                    <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">{workshop.title}</h4>
                      <p className="text-sm text-text-secondary">{workshop.location}</p>
                      <p className="text-xs text-text-secondary mt-1">{workshop.date}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Special Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-12 bg-bg border-l-4 border-accent rounded-r-lg p-6"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-primary">Organized: World Tuberculosis Awareness Day Seminar</h4>
              <p className="text-text-secondary mt-1">March 24, 2025 — CUVAS Bahawalpur</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ConferencesSection;