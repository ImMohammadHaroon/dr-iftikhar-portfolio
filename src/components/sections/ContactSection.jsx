import { useState, useRef } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight, fadeInLeft } from '../../hooks/useScrollAnimation';
import { contactInfo } from '../../data/portfolioData';
import emailjs from '@emailjs/browser';

// EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_4pfgv6y';
const EMAILJS_TEMPLATE_ID = 'template_nefrmi3';
const EMAILJS_PUBLIC_KEY = 'O5HTVExnytokPuJ5i';

const IconRenderer = ({ type }) => {
  const icons = {
    email: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    location: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#0077b5]">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    )
  };
  return icons[type] || null;
};

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      e.target.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg">
      <Container>
        <SectionTitle
          title="Let's Collaborate"
          subtitle="Open to research collaborations, PhD supervision inquiries, and diagnostic partnerships."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <Card className="h-full">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  if (info.type === "location") {
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <IconRenderer type="location" />
                        <span className="text-text-secondary text-sm">{info.text}</span>
                      </div>
                    );
                  }
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.target}
                      rel={info.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 hover:text-accent transition-colors group"
                      style={{ textDecoration: 'none' }}
                    >
                      <IconRenderer type={info.type} />
                      <span className="text-text-primary group-hover:text-accent">{info.text}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium text-primary mb-4">Connect</h4>
                <a
                  href="https://linkedin.com/in/hafiz-iftikhar-hussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 group"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <Card>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-white py-3.5 px-8 rounded-full font-medium shadow-md hover:bg-accent-hover hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-sm text-center">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or email directly.</p>
                )}
                {!status && (
                  <p className="text-xs text-text-secondary text-center">I'll respond within 2–3 business days.</p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;