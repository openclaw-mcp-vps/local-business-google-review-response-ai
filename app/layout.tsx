import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply AI — Auto-respond to Google Reviews",
  description: "AI generates personalized responses to your Google reviews. Save time, boost reputation, and never miss a review again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d91b6f0b-9500-431f-97fd-e989303b7b15"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
