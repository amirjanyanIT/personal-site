import { forwardRef } from "react";
import { ContainerPropsInterface } from "./types/Container";

export const Section = forwardRef(
  (props: ContainerPropsInterface, ref: any) => {
    const { children, className = "", ...rest } = props;
    return (
      <div className={`section ${className}--section`} ref={ref}>
        <div className={`section--filling ${className}`} {...rest}>
          {children}
        </div>
      </div>
    );
  }
);
