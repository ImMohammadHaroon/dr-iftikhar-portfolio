import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import { thesisWork, publications } from '../../data/portfolioData';
import { ArrowRight } from 'lucide-react';

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 md:py-28 bg-surface">
      <Container>
        <SectionTitle
          title="Research & Publications"
          subtitle="Exploring antimicrobial resistance and molecular pathogenesis"
        />

        {/* Thesis Work */}
        <div className="mb-16">
          <h3 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-8">Featured Research</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {thesisWork.map((thesis, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Card className="h-full">
                  <Badge variant="accent" className="mb-4">{thesis.type}</Badge>
                  <h4 className="font-semibold text-lg text-primary mb-3">{thesis.title}</h4>
                  <p className="text-text-secondary mb-4">{thesis.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {thesis.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-text-secondary">{tag}</span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Publications */}
        <div>
          <h3 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-8">Recent Publications</h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {publications.map((pub, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="default">Journal Article</Badge>
                    <span className="text-accent font-bold text-sm">{pub.year}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary leading-snug mb-3 line-clamp-2 flex-grow">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-1">
                    {pub.authors.replace('Hussain, H.I.', '<strong>Hussain, H.I.</strong>')}
                  </p>
                  <p className="text-sm text-text-secondary italic mb-4">{pub.journal}</p>
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover group-hover:gap-2 transition-all mt-auto"
                  >
                    View Paper <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ResearchSection;