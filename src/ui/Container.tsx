import type { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen bg-gradient-to-br from-background to-dark-700 lg:px-2">
      {children}
    </div>
  );
}

export default Container;
