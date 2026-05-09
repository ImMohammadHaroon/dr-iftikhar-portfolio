const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    outline: "border border-border text-text-secondary"
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;