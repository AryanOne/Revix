import "./globals.css";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-[#23272F] text-white">
        {children}
      </body>
    </html>
  );
}
