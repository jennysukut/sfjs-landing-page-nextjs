"use client";

import clsx from "clsx";
import {
  LargeShadowColorOption,
  largeShadowColors,
} from "@/lib/stylingData/largeShadowColors";
import { smallShadowColors } from "@/lib/stylingData/smallShadowColors";
import Image from "next/image";

interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "hollow" | "filled";
  colorScheme?: LargeShadowColorOption;
  aria: string;
  type?: string;
  title?: string;
  textSize?: "small" | "medium" | "large";
  addClasses?: string;
  size?: "small" | "standard" | "large";
  width?: "extraWide" | null;
  shadowSize?: "small";
  canCollapse?: boolean;
  collapseClick?: Function;
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
  textSize = "large",
  width = "standard",
  shadowSize = "standard",
  canCollapse,
  collapseClick,
  ...props
}) => {
  const boxClasses = clsx(
    "InfoBox max-w-[95vw] relative z-[1] font-semibold leading-5 transition-all duration-200 tracking-superwide",
    {
      // variant + shadowSize
      "bg-cream border-jade drop-shadow-jade text-jade font-semibold border-[3px]":
        variant === "hollow",
      [`text-eggshell ${largeShadowColors[colorScheme]}`]:
        variant === "filled" && shadowSize === "standard",
      [`text-eggshell ${smallShadowColors[colorScheme]}`]:
        variant === "filled" && shadowSize === "small",

      //textSize
      "text-[0.6rem] sm:text-xs": textSize === "small",
      "text-xs sm:text-sm": textSize === "medium",
      "text-md sm:text-md": textSize === "large",

      // size
      "py-4 px-8 sm:py-6 sm:px-10 md:py-14 md:px-16 rounded-2xl sm:rounded-3xl":
        size === "standard",
      "py-4 px-10 sm:py-6 sm:px-14 rounded-2xl sm:rounded-3xl":
        size === "small",
      "py-8 px-8 xs:px-10 sm:py-8 sm:px-12 md:py-14 md:px-16 rounded-3xl":
        size === "large",

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

      {canCollapse ? (
        <button
          className="CollapseButton self-end opacity-100 hover:opacity-50"
          onClick={collapseClick as React.MouseEventHandler<HTMLButtonElement>}
        >
          <Image
            src="/jade-collapse-button.svg"
            alt="collapseButton"
            width={16}
            height={16}
          ></Image>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoBox;
