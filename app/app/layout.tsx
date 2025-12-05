import SideBar from "@/src/components/sidebar";
import { Poppins } from "next/font/google";

const MyPoppin=Poppins({
    weight: "400",
    variable: "--font-poppins",
    subsets: ['devanagari']
})

export default function MainLayout({ children }: { children: React.ReactNode }) {


    return (
        <html>
            <body className={`${MyPoppin.className}`}>
                <SideBar />
                {children}
            </body>
        </html>
    )
}