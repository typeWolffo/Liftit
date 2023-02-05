import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps, PropsWithChildren } from "react";

type ButtonProps = ComponentProps<"button"> & ComponentProps<"a">;

const buttonStyles = cva("px-5 py-2 rounded-md", {
  variants: {
    variant: {
      primary: "bg-primary text-dark-600",
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

export function Button({
  variant,
  fullWidth,
  className,
  href,
  children,
  ...props
}: PropsWithChildren<Props>) {
  const isLink = typeof href !== "undefined";
  return isLink ? (
    <Link href={href}>
      <button className={buttonStyles({ variant, fullWidth, className })}>
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={buttonStyles({ variant, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
}
