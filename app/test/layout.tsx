export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border border-red-600 p-2">
      <h1>This Test Layout</h1>
      <section className="border border-red-600 p-2">{children}</section>
    </div>
  );
}
