"use client";

import clsx from "clsx";
import {
  smallShadowColors,
  SmallShadowColorOption,
} from "@/lib/stylingData/smallShadowColors";
import getRandomColorScheme from "@/utils/getRandomColorScheme";
import Image from "next/image";

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "display" | "functional";
  size?: "medium" | "default";
  colorScheme?: SmallShadowColorOption;
  aria: string;
  type?: string;
  addClasses?: string;
  textSize?: "medium" | "large";
}

const SiteLabel: React.FC<LabelProps> = ({
  type = "label",
  size = "default",
  aria,
  variant,
  colorScheme = getRandomColorScheme("a1"),
  children,
  addClasses,
  textSize,
  ...props
}) => {
  function handleDelete() {
    // tie this into the data to update list of labels at it's source
  }

  const labelClasses = clsx(
    `Label w-fit flex relative z-[1] rounded-full font-medium transition-all duration-200 ${smallShadowColors[colorScheme]} text-eggshell m-1`,
    {
      // variant
      "px-4": variant === "display",
      "pr-3 pl-4": variant === "functional",

      // size
      "py-2": size === "default",
      "px-8 py-3": size === "medium",

      //textSize
      "text-xs  tracking-widest": !textSize,
      "text-sm  tracking-widest": textSize === "medium",
      "text-md  tracking-superwide justify-center": textSize === "large",
    },
    addClasses,
  );

  return (
    <div {...props} className={labelClasses} aria-label={aria}>
      {children}
      {variant === "functional" && (
        <button
          className="CloseButton ml-5 opacity-100 hover:opacity-50"
          onClick={handleDelete}
        >
          <Image
            src="/labelCloseButton.svg"
            alt="closebutton"
            width={10}
            height={10}
          ></Image>
        </button>
      )}
    </div>
  );
};

export default SiteLabel;
