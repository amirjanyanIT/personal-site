import { ContainerPropsInterface } from "./types/Container";

export const Container = (props: ContainerPropsInterface) => {
  const { children } = props;

  return (
    <div className="container">
      <div className="container--filling">{children}</div>
    </div>
  );
};
