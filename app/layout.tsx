import "./globals.css";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-[#18191C] text-white">
        {children}
      </body>
    </html>
  );
}
