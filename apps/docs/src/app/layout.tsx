import { CommandLineIcon } from "@heroicons/react/24/outline";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { PropsWithChildren } from "react";

export const metadata = {
  title: "Incentro IC - Code Standards",
};

const navbar = (
  <Navbar
    logo={
      <>
        <CommandLineIcon style={{ width: "24px", marginRight: "8px" }} />
        <b>Code standards</b>
      </>
    }
  />
);

const footer = (
  <Footer>Copyright © {new Date().getFullYear()} Incentro B.V.</Footer>
);

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 19, saturation: 100, lightness: 49.8 }}>
        <link rel="icon" href="/incentro-circle.svg" />
      </Head>

      <body>
        <Layout
          navbar={navbar}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/incentro-ecx/code-standards/tree/main/apps/docs"
          footer={footer}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
