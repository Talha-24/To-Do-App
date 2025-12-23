"use client";


const NavItem: React.FC<NavItem> = ({ svg,title,onClick,className }) => {


    return (
        <div onClick={onClick} className={`flex  items-center gap-9 py-2 hover:bg-[#F3F4F6] rounded-lg cursor-pointer px-4 text-black ${className}`}>
            {svg}
            <span className="font-semibold text-lg">{title}</span>
        </div>
    )
}
export default NavItem