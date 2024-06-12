export const Button = ({ children, className, ...restProps }) => {
  return (
    <button className={`btn ${className}`} {...restProps}>
      {children}
    </button>
  );
};
