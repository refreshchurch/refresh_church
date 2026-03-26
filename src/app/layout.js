import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from "next/script";
import { Montserrat } from "next/font/google";
import LayoutWrapper from "./layoutWrapper";
import { createClient } from "@/lib/supabase/server";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Refresh Church",
  description: "Refreshing souls",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const { data: schemas } = await supabase.from("site_schemas").select("schema_json").eq("enabled", true);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
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
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1331676532203367');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=1331676532203367&ev=PageView&noscript=1"
          />
        </noscript>
        <meta name="google-site-verification" content="wGR4NHBUHrciapz3x7QEra-kdwuh6VS5640kdpnqRvU" />
        {schemas?.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: s.schema_json }}
          />
        ))}
      </head>
      <body className={montserrat.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

