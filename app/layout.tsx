import HeaderComp from "./components/HeaderComp";
import LeftScrollBar from "./components/LeftScrollBar";
import LeftSideBar from "./components/LeftSideBar";
import RightScrollBar from "./components/RightScrollBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#23272F] text-white">
        <HeaderComp/>
        <LeftSideBar/>
        <LeftScrollBar/>
        <RightScrollBar/>
        <div className="mt-16 ml-80 mr-64 h-full flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
