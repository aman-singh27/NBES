import { ReactNode } from "react";
import clsx from "clsx";

type SectionLabelProps = {
  children: ReactNode;
  centered?: boolean;
};

export default function SectionLabel({
  children,
  centered = false,
}: SectionLabelProps) {
  return (
    <div className={clsx("eyebrow-label", centered && "justify-center")}>
      {children}
    </div>
  );
}
