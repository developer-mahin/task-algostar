import { ReactNode } from "react";
import { cn } from "../../utils/cn";

type TContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container: React.FC<TContainerProps> = ({ className, children }) => {
  return (
    <div className={cn(className, "container mx-auto px-5")}>{children}</div>
  );
};

export default Container;
