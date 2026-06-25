import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

const PageSection = ({ children, className }: PageSectionProps) => {
  return (
    <div
      className={cn(
        "px-4 md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageSection;
