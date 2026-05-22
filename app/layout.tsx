import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevDecay — Track Which Coding Skills Are Getting Rusty",
  description: "Analyzes your GitHub activity to identify unused languages and frameworks, then suggests personalized refresher projects to keep your skills sharp."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="00078beb-474b-4f18-9e37-27efe713f11a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
