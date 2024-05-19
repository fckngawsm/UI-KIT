import React from "react";
import "../../vendor/fonts/index.css";
import NormalizeWrapper from "./NormalizeWrapper";

export const AppRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main">
      <NormalizeWrapper />
      {children}
    </main>
  );
};
