import "/styles/browser-styles.css";
import "/styles/swiper.css";

import { enSiteTitle, siteDescription, siteTitle } from "@/utils";

export const metadata = {
  title: `${siteTitle} | ${enSiteTitle}`,
  description: `${siteDescription}`,
  param1: 1,
  param2: 2,
};

// test
// test

export default function RootLayout({ children }) {
  return <html lang="en"></html>;
}
