import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const description =
  "Field-ready mnemonic reference cards for first responders: DRSABCDE, MARCH, GCS, IMIST-AMBO, METHANE, Triage Sieve, and vital sign ranges.";

export const metadata: Metadata = {
  metadataBase: new URL("https://resqcard.kyleho.net"),
  title: "ResQCard",
  description,
  manifest: "/manifest.json",
  openGraph: {
    title: "ResQCard",
    description,
    url: "/",
    siteName: "ResQCard",
    type: "website",
    images: [{ url: "/brand/banner.png", width: 1942, height: 809, alt: "ResQCard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResQCard",
    description,
    images: ["/brand/banner.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7f6" },
    { media: "(prefers-color-scheme: dark)", color: "#025d44" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster position="bottom-center" />
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
