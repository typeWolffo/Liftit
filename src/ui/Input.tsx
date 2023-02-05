import type { ComponentProps } from "react";
import { forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", ...props }, ref) => {
    return (
      <div className="group relative w-fit rounded-md">
        <label
          htmlFor="input"
          className="absolute mb-1 font-medium text-gray-800 group-[:nth-of-type(1)_&]:scale-50 dark:text-gray-200"
        >
          {label}
        </label>
        <input
          id="input"
          className="rounded-md border border-brand-400 bg-dark-500 px-4 py-2 text-gray-200 focus:border-primary focus:outline-0 focus:ring-primary disabled:bg-dark-300 disabled:bg-opacity-20 disabled:opacity-60"
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
