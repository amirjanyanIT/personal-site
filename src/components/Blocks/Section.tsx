import { forwardRef } from "react";
import { ContainerPropsInterface } from "./types/Container";

export const Section = forwardRef(
  (props: ContainerPropsInterface, ref: any) => {
    const { children, className = "", ...rest } = props;

    console.log("from forward: ", ref);
    return (
      <div className="section" ref={ref}>
        <div className={`section--filling ${className}`} {...rest}>
          {children}
        </div>
      </div>
    );
  }
);
