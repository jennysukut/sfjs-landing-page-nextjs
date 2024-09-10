"use client";

import clsx from "clsx";
import {
  LargeShadowColorOption,
  largeShadowColors,
} from "@/lib/stylingData/largeShadowColors";

interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "hollow" | "filled";
  colorScheme?: LargeShadowColorOption;
  aria: string;
  type?: string;
  title?: string;
  textSize?: "small" | "medium" | "large";
  addClasses?: string;
  size?: "small";
  width?: "extraWide";
}

const InfoBox: React.FC<InfoBoxProps> = ({
  type = "information",
  size,
  aria,
  variant,
  colorScheme = "d6",
  children,
  title,
  addClasses,
  textSize,
  width,
  ...props
}) => {
  const boxClasses = clsx(
    "InfoBox relative z-[1] font-semibold rounded-3xl leading-5 transition-all duration-200 tracking-superwide",
    {
      // variant
      "bg-cream border-jade drop-shadow-jade text-jade font-semibold border-[3px]":
        variant === "hollow",
      [`text-eggshell ${largeShadowColors[colorScheme]}`]: variant === "filled",

      //textSize
      "text-xs": textSize === "small",
      "text-sm": textSize === "medium",
      "text-m": textSize === "large",

      // size
      "py-6 px-10": size !== "small",
      "py-4 px-14": size === "small",

      //width
      "max-w-screen-sm": width !== "extraWide",
      "max-w-screen-lg": width === "extraWide",
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
