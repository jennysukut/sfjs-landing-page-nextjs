"use client";

import React, { useState } from "react";
import {
  buttonColors,
  ButtonColorOption,
} from "@/lib/stylingData/buttonColors";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClasses?: string;
  size?: "large" | "largeCircle";
  variant: "hollow" | "filled" | "avatar";
  colorScheme: ButtonColorOption;
  aria: string;
  padding?: "more" | "extra";
  addImage?: string;
  selectable?: "true";
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
  selectable,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const buttonClasses = clsx(
    "SiteButton relative z-[1] cursor-pointer rounded-full font-semibold transition-all duration-200 tracking-superwide hover:saturate-[120%]",
    {
      // size
      "px-10 py-4 text-sm": size === "large",
      "h-16 w-16": size === "largeCircle",
      "px-4 py-2 text-xs min-w-[65px]": size !== "large" && "largeCircle",

      // variant
      "bg-cream border-jade border-[2px]": variant === "hollow",
      "text-jade": variant === "hollow" && !isSelected,
      [`text-eggshell ${buttonColors[colorScheme].color1}`]:
        variant === "filled",
      [`${addImage} bg-cover`]: variant === "avatar",
      "group-hover:border-lime group-hover:bg-lime group-hover:text-eggshell":
        variant === "hollow",

      // pressed state
      "translate-x-1.5 translate-y-1.5": isPressed,
      "hover:-translate-x-0.5 hover:-translate-y-0.5":
        !isPressed && !isSelected,

      //selected state
      [`bg-lime border-lime translate-x-1 translate-y-1 text-eggshell`]:
        isSelected,

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
      "border-[2px] border-jade bg-jade group-hover:border-lilac group-hover:bg-lilac":
        variant === "hollow",
      "bg-jade": variant === "avatar",
      [`${buttonColors[colorScheme].color2}`]: variant === "filled",

      //selected state
      "bg-lilac border-lilac": isSelected,
    },
    addClasses,
  );

  const handleMouseDown = () => {
    setIsPressed(true);
    if (selectable === "true" && isSelected === false) {
      setIsSelected(true);
    }
    if (selectable === "true" && isSelected === true) {
      setIsSelected(false);
    }
  };
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <div className="Button group relative w-fit">
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
