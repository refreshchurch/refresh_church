import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import FooterComponent from "./components/FooterComponent.js"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from "next/script";
import { Montserrat } from "next/font/google";
import LayoutWrapper from "./layoutWrapper";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Refresh Church",
  description: "Refreshing souls",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CN1GV2BN6V"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CN1GV2BN6V');
            `,
          }}
        />
        {/* Visit Planner Script */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.pyvAccountKey = 'V4pQZqBu'; 
              window.pyvDomain = 'https://lite.visitplanner.church';
              var script = document.createElement('script'); 
              script.async = true; 
              script.type = 'text/javascript'; 
              script.src = 'https://lite.visitplanner.church/embed/embed.js';
              document.head.appendChild(script);
            `,
          }}
        /> */}
        <meta name="google-site-verification" content="wGR4NHBUHrciapz3x7QEra-kdwuh6VS5640kdpnqRvU" />
      </head>
      <body className={montserrat.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

