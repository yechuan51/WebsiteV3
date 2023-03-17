import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>My Website</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="My Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
