"use client";

import React, { useState } from "react";
import { buttonColors, ButtonColorOption } from "@/lib/buttonColors";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClasses?: string;
  size?: "large" | "largeCircle";
  variant: "hollow" | "filled" | "avatar";
  colorScheme: ButtonColorOption;
  aria: string;
  padding?: "more" | "extra";
  addImage?: string;
}

const SiteButton: React.FC<ButtonProps> = ({
  addClasses,
  size = "default",
  onClick,
  disabled,
  type = "button",
  aria,
  variant,
  colorScheme = "e5",
  children,
  padding,
  addImage,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const buttonClasses = clsx(
    "SiteButton relative z-[1] cursor-pointer rounded-full font-semibold transition-all duration-200 tracking-superwide hover:saturate-[120%]",
    {
      // size
      "px-10 py-4 text-sm": size === "large",
      "h-16 w-16": size === "largeCircle",
      "px-4 py-2 text-xs min-w-[65px]": size !== "large" && "largeCircle",

      // variant
      "bg-cream border-jade text-jade border-[3px]": variant === "hollow",
      [`text-eggshell ${buttonColors[colorScheme].color1}`]:
        variant === "filled",
      [`${addImage} bg-cover`]: variant === "avatar",
      "group-hover:border-lime group-hover:bg-lime group-hover:text-eggshell":
        variant === "hollow",

      // pressed state
      "translate-x-1.5 translate-y-1.5": isPressed,
      "hover:-translate-x-0.5 hover:-translate-y-0.5": !isPressed,

      //padding
      "px-12": padding === "more",
      "px-16": padding === "extra",

      // diabled
      "disabled:translate-x-1 disabled:translate-y-1 disabled:bg-blush disabled:text-white disabled:hover:cursor-not-allowed disabled:hover:saturate-100":
        disabled,
    },
    addClasses,
    addImage,
  );

  const shadowClasses = clsx(
    "ButtonShadow absolute -right-1.5 top-1.5 rounded-full text-transparent font-semibold tracking-superwide",
    {
      // size
      "px-10 py-4 text-sm": size === "large",
      "h-16 w-16": size === "largeCircle",
      "px-4 py-2 text-xs min-w-[65px]": size !== "large" && "largeCircle",

      // variant
      "border-[3px] border-jade bg-jade group-hover:border-lilac group-hover:bg-lilac":
        variant === "hollow",
      "bg-jade": variant === "avatar",
      [`${buttonColors[colorScheme].color2}`]: variant === "filled",
    },
    addClasses,
  );

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <div className="ButtonContainer group relative w-fit">
      <button
        {...props}
        className={buttonClasses}
        type={type ?? "button"}
        onClick={onClick}
        disabled={disabled}
        aria-label={aria}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
      <div className={shadowClasses}>{children}</div>
    </div>
  );
};

export default SiteButton;
