import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nextjs Init",
  description: "Clean Nextjs Setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-2">
        <section>
          <h1>This Root Layout</h1>
          <article className="flex gap-2">
            <Link href="/" className="link">
              Go To /
            </Link>
            |
            <Link href="/test" className="link">
              Go To /test
            </Link>
          </article>
        </section>

        <section className="border p-2">{children}</section>
      </body>
    </html>
  );
}
