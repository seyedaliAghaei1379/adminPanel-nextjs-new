import "@/css/satoshi.css";
import "@/css/style.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir={"rtl"}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
