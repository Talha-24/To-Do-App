import MoonIcon from "@/public/icons/MoonIcon";
import SideBar from "@/src/components/templates/sidebar";
import { SunIcon } from "lucide-react";
import { Poppins } from "next/font/google";

const MyPoppin = Poppins({
    weight: "400",
    variable: "--font-poppins",
    subsets: ['devanagari']
})

export default function MainLayout({ children }: { children: React.ReactNode }) {


    return (
        <html>
            <body className={`${MyPoppin.className}`}>
                <div className="main-layout">
                    <SideBar />
                    {children}
                    <SunIcon />
                </div>
            </body>
        </html>
    )
}