const Card = ({ children, className = "" }) => (
  <div className={`bg-surface rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border ${className}`}>
    {children}
  </div>
);

export default Card;