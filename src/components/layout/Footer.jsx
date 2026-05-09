import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = ["Home", "About", "Research", "Contact"];

  return (
    <footer className="bg-primary text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Dr. H.I. Hussain</h3>
            <p className="text-white/70 text-sm">
              Veterinary Pathologist | Molecular Researcher | Academic Leader
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/70 text-sm">
              © {currentYear} Dr. Hafiz Iftikhar Hussain. All rights reserved.
            </p>
            <p className="text-white/50 text-xs mt-2">
              Built with care for academic excellence
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;