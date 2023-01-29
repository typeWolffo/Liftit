import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const buttonStyles = cva("px-5 py-2 rounded-md", {
  variants: {
    variant: {
      primary: "bg-primary text-dark-600 ",
      "primary-outlined":
        "bg-transparent border-2 border-primary text-primary ",
      danger: "bg-red-500 text-white",
      "outline-danger": "bg-transparent text-red-500 border-2 border-red-500",
      info: "bg-blue-400",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export function Button({ variant, fullWidth, ...props }: Props) {
  return <button className={buttonStyles({ variant, fullWidth })} {...props} />;
}
