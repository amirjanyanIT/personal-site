import { ContainerPropsInterface } from "./types/Container";

export const Section = (props: ContainerPropsInterface) => {
  const { children, className = "", ...rest } = props;

  return (
    <div className="section">
      <div className={`section--filling ${className}`} {...rest}>
        {children}
      </div>
    </div>
  );
};
