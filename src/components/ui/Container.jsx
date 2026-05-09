const Container = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-6 md:px-12 ${className}`}>
    {children}
  </div>
);

export default Container;