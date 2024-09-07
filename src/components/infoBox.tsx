"use client";

import clsx from "clsx";
import {
  LargeShadowColorOption,
  largeShadowColors,
} from "@/lib/largeShadowColors";

interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "hollow" | "filled";
  colorScheme?: LargeShadowColorOption;
  aria: string;
  type?: string;
  title?: string;
  textSize?: "small" | "medium" | "large";
  addClasses?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  type = "information",
  aria,
  variant,
  colorScheme = "d6",
  children,
  title,
  addClasses,
  textSize,
  ...props
}) => {
  const boxClasses = clsx(
    "InfoBox max-w-screen-sm relative z-[1] py-6 px-10  m-3 leading-5 font-semibold rounded-3xl transition-all duration-200 tracking-superwide",
    {
      // variant
      "bg-cream border-jade drop-shadow-jade text-jade font-semibold border-[3px]":
        variant === "hollow",
      [`text-eggshell ${largeShadowColors[colorScheme]}`]: variant === "filled",

      //textSize
      "text-xs": textSize === "small",
      "text-sm": textSize === "medium",
      "text-m": textSize === "large",
    },
    addClasses,
  );

  return (
    <div className={boxClasses}>
      <h3 className="Title my-1 text-lg">{title}</h3>
      {children}
    </div>
  );
};

export default InfoBox;
