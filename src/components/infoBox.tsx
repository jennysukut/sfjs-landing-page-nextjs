"use client";

import clsx from "clsx";
import {
  LargeShadowColorOption,
  largeShadowColors,
} from "@/lib/stylingData/largeShadowColors";
import {
  smallShadowColors,
  SmallShadowColorOption,
} from "@/lib/stylingData/smallShadowColors";

interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "hollow" | "filled";
  colorScheme?: LargeShadowColorOption;
  aria: string;
  type?: string;
  title?: string;
  textSize?: "small" | "medium" | "large";
  addClasses?: string;
  size?: "small" | null;
  width?: "extraWide" | null;
  shadowSize?: "small";
}

const InfoBox: React.FC<InfoBoxProps> = ({
  type = "information",
  size = "standard",
  aria,
  variant,
  colorScheme = "d6",
  children,
  title,
  addClasses,
  textSize,
  width = "standard",
  shadowSize = "standard",
  ...props
}) => {
  const boxClasses = clsx(
    "InfoBox relative z-[1] font-semibold rounded-3xl leading-5 transition-all duration-200 tracking-superwide",
    {
      // variant + shadowSize
      "bg-cream border-jade drop-shadow-jade text-jade font-semibold border-[3px]":
        variant === "hollow",
      [`text-eggshell ${largeShadowColors[colorScheme]}`]:
        variant === "filled" && shadowSize === "standard",
      [`text-eggshell ${smallShadowColors[colorScheme]}`]:
        variant === "filled" && shadowSize === "small",

      //textSize
      "text-xs": textSize === "small",
      "text-sm": textSize === "medium",
      "text-m": textSize === "large",

      // size
      "py-6 px-10": size === "standard",
      "py-4 px-14": size === "small",

      //width
      "max-w-screen-sm": width === "standard",
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
