const Button = ({ variant = "primary", href, children, onClick, className = "" }) => {
  const base = "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-sm tracking-wide";
  const styles = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:text-accent"
  };

  const classNames = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return <a href={href} className={classNames}>{children}</a>;
  }
  return <button className={classNames} onClick={onClick}>{children}</button>;
};

export default Button;