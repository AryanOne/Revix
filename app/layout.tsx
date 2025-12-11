import HeaderComp from "./components/HeaderComp";
import LeftScrollBar from "./components/LeftScrollBar";
import LeftSideBar from "./components/LeftSideBar";
import RightScrollBar from "./components/RightScrollBar";
import "./globals.css";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className="bg-[#23272F] text-white">
        <HeaderComp/>
        <LeftSideBar/>
        <div className="hidden md:block">
          <LeftScrollBar/>
        </div>
        <div className="hidden xl:block">
          <RightScrollBar/>
        </div>
  
        <main
          className={`
            mt-16
            ml-16
            transition-all

            md:ml-80   /* left bar spacing */
            md:mr-0     /* no right bar until xl */
            
            xl:mr-64   /* right bar spacing at large screens */
          `}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
