import type { ComponentProps } from "react";
import { forwardRef } from "react";

interface Props extends ComponentProps<"input"> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", ...props }, ref) => {
    return (
      <label>
        <div className="mb-1 font-medium text-gray-800 dark:text-gray-200">
          {label}
        </div>
        <input
          className="w-full rounded-md border  border-brand-400 bg-dark-500 px-4 py-2 text-gray-200 focus:border-primary focus:outline-0 focus:ring-primary disabled:bg-dark-300 disabled:bg-opacity-20 disabled:opacity-60"
          type={type}
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);

export default Input;
