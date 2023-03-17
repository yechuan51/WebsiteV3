import CurrentTimeComp from "@/components/navBar/client/utils/currentTime";
import NavBarComp, { NavBarItemType } from "@/components/navBar/navBar";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navBarItems: NavBarItemType[] = [
    { key: "blog", displayText: "Blog", href: "/blogs" },
    { key: "about", displayText: "About", href: "/about" },
  ];

  return (
    <div>
      <Head>
        <title>My Website</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="My Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBarComp items={navBarItems} />
        <CurrentTimeComp />
      </header>
      <main>{children}</main>
    </div>
  );
}
