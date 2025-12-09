import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sahil Chudasama | Flutter Developer",
  description: "Portfolio of Sahil Chudasama, a Flutter Developer specializing in cross-platform mobile apps, AI integrations, and scalable backends.",
  keywords: ["Flutter Developer", "Mobile App Developer", "Cross-Platform", "Sahil Chudasama", "Portfolio", "Android", "iOS", "Firebase"],
  authors: [{ name: "Sahil Chudasama", url: "https://sahil-mobile-dev.web.app" }],
  creator: "Sahil Chudasama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahil-mobile-dev.web.app",
    title: "Sahil Chudasama | Flutter Developer",
    description: "Building cross-platform mobile experiences with Flutter and AI.",
    siteName: "Sahil Chudasama Portfolio",
    images: [
      {
        url: "/og-image.png", // TODO: Generate this image
        width: 1200,
        height: 630,
        alt: "Sahil Chudasama Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Chudasama | Flutter Developer",
    description: "Building cross-platform mobile experiences with Flutter and AI.",
    images: ["/og-image.png"], // TODO: Generate this image
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png", // For iOS home screen
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sahil Chudasama",
  "url": "https://sahil-mobile-dev.web.app",
  "jobTitle": "Flutter Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Qurious Click"
  },
  "sameAs": [
    "https://in.linkedin.com/in/sahil-chudasama",
    "https://github.com/sahil-mobile-dev"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}
        <Script id="mixpanel-init" strategy="beforeInteractive">
          {`
            (function(e,c){if(!c.__SV){var l,h;window.mixpanel=c;c._i=[];c.init=function(q,r,f){function t(d,a){var g=a.split(".");2==g.length&&(d=d[g[0]],a=g[1]);d[a]=function(){d.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";b.people=b.people||[];b.toString=function(d){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);d||(a+=" (stub)");return a};b.people.toString=function(){return b.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
            for(h=0;h<l.length;h++)t(b,l[h]);var n="set set_once union unset remove delete".split(" ");b.get_group=function(){function d(p){a[p]=function(){b.push([g,[p].concat(Array.prototype.slice.call(arguments,0))])}}for(var a={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<n.length;m++)d(n[m]);return a};c._i.push([q,r,f])};c.__SV=1.2;var k=e.createElement("script");k.type="text/javascript";k.async=!0;k.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===
            e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=e.getElementsByTagName("script")[0];e.parentNode.insertBefore(k,e)}})(document,window.mixpanel||[]);
            
            mixpanel.init('1a135816acfb515ab97304d3cadae9ca', {
              autocapture: true,
              record_sessions_percent: 100,
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-900 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white`}>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
