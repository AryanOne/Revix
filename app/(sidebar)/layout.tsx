import SideBar from "../components/SideBar";

export default function SideBarLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    
    return(
        <div>
            <SideBar/>
            {children}
        </div>
    )
}