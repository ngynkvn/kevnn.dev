import React from "react";
import "./button.css";

export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  /**
   * What text color to use
   */
  color?: string;

  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;

  label?: React.ReactNode;
  children?: React.ReactNode;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  children,
  color,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      style={{ backgroundColor, color }}
      {...props}
      className={["button", `button--${size}`, mode, props.className].join(" ")}
    >
      {children || label}
    </button>
  );
};
