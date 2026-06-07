"use client";
import { ThemeProvider } from "next-themes";
import FollowCursor from "@/components/FollowCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <FollowCursor color="#0071e3" zIndex={9999} />
      {children}
    </ThemeProvider>
  );
}
