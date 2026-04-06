import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Third Wave Coffee – Noida | Specialty Coffee & Fresh Bakes",
  description:
    "Your neighbourhood specialty coffee stop in Noida Sector 63. Fresh brews, artisan pastries, and a warm modern café space — perfect for coffee lovers, work sessions, and everyday moments.",
  keywords: [
    "Third Wave Coffee",
    "Noida",
    "specialty coffee",
    "café",
    "coffee shop",
    "Sector 63",
    "fresh bakes",
    "latte",
    "cappuccino",
  ],
  openGraph: {
    title: "Third Wave Coffee – Noida",
    description:
      "Fresh coffee. Bright conversations. Everyday moments. Visit our Sector 63 café.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
