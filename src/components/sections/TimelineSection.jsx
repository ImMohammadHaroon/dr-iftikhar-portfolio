import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import { timeline } from '../../data/portfolioData';

const TimelineSection = () => {
  return (
    <section id="journey" className="py-20 md:py-28 bg-bg">
      <Container>
        <SectionTitle title="Academic Journey" subtitle="A timeline of my professional and educational milestones" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow transform -translate-x-1/2 ${
                  item.current ? 'w-5 h-5 ring-4 ring-accent/30' : ''
                }`} />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-surface rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border">
                    <span className="text-accent font-bold text-sm">{item.year}</span>
                    <h4 className="font-semibold text-primary mt-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm mt-1">{item.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TimelineSection;