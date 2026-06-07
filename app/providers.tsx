"use client";
import { ThemeProvider } from "next-themes";
import { CursorSpotlight } from "@/components/CursorSpotlight";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <CursorSpotlight />
      {children}
    </ThemeProvider>
  );
}
