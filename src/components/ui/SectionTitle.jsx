const SectionTitle = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1 w-16 bg-accent rounded-full ${align === "center" ? "mx-auto" : ""}`} />
  </div>
);

export default SectionTitle;