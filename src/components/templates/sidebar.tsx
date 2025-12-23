"use client";

import { useEffect, useState } from "react";
import NavItem from "../atoms/NavItem";
import ListIcon from "@/public/icons/ListIcon";
import SettingIcon from "@/public/icons/SettingIcon";
import MenuIcon from "@/public/icons/MenuIcon";

const SideBar = () => {


    const [isOpen, setIsOpen] = useState(false);


    const SideBarItems = {

        desktop:
            [
                {
                    svg: MenuIcon,
                },

                {
                    title: "Mohammad Talha",
                    email: "talhacoder1033@gmail.com",

                },

                {
                    title: "My Tasks",
                    svg: ListIcon,
                },

                {
                    title: "Setting",
                    svg: SettingIcon,
                },
            ],

        mobile: [
            MenuIcon,
            ListIcon,
            SettingIcon,
        ]

    }

    // let children = document.getElementById("children") as any;
    // useEffect(() => {
    //     if (isOpen) {
    //         children.style.backgroundColor = "var(--text-primary)";
    //         window.document.body.style.opacity = "40%"

    //     } else {
    //         children.style.backgroundColor = "var(--text-primary)";
    //         window.document.body.style.opacity = "40%";
    //     }
    // }, [isOpen])


    return (
        <div className="transition-all delay-300 ">
            {isOpen ?
                <div className="h-screen p-4 px-6 bg-white mr-auto  w-65 shadow-[2px_0_5px_rgba(0,0,0,0.2)] flex flex-col ">
                    <div className="flex flex-col gap-4 justify-center ">

                        <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer  flex  justify-start ">
                            <MenuIcon />
                        </div>

                        <div className="profile flex items-center justify-center border-b border-b-[#6A7282] py-4">
                            <div className="flex flex-col gap-2 items-center justify-center text-center">
                                <div className="h-[60] w-[60] border border-black rounded-full">
                                    {/* <img src="" alt="" /> */}
                                </div>
                                <div >
                                    <h1 className="font-bold py-2">Name</h1>
                                    <h2 className="text-sm text-[#6A7282]">talhacoder1033@gmail.com</h2>
                                </div>
                            </div>
                        </div>

                        <div className="features flex flex-col gap-3">
                            <NavItem title="My Tasks" svg={<ListIcon />} onClick={() => { alert("alerted") }} />
                            <NavItem title="Settings" svg={<SettingIcon />} onClick={() => { alert("") }} />
                        </div>
                    </div>
                </div>
                :

                <div className="h-screen p-4  bg-white mr-auto px-3 w-20  shadow-[2px_0_5px_rgba(0,0,0,0.2)] ">
                    <div className="flex flex-col gap-4 justify-center ">
                        <div className="burger-icon border-b-[#6A7282] border-b-[1.5px] flex items-center justify-center py-3 pb-6">
                            {/* BURGER ICON */}
                            <div onClick={() => { setIsOpen((prev) => !prev) }} className="burger-icon  flex  justify-start ">
                                {/* BURGER ICON */}
                                <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33337 6.66666H26.6667" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.33337 16H26.6667" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.33337 25.3333H26.6667" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>


                        <div className="flex flex-col gap-1">
                            <div className="burger-icon flex items-center justify-center py-2 hover:bg-[#F3F4F6] rounded-lg cursor-pointer">
                                <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3334 6.66667H28" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.3334 16H28" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.3334 25.3333H28" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 22.6667L6.66667 25.3333L12 20" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.6667 5.33333H5.33333C4.59695 5.33333 4 5.93029 4 6.66667V12C4 12.7364 4.59695 13.3333 5.33333 13.3333H10.6667C11.403 13.3333 12 12.7364 12 12V6.66667C12 5.93029 11.403 5.33333 10.6667 5.33333Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div onClick={() => { }} className="burger-icon flex items-center justify-center py-2 hover:bg-[#F3F4F6] rounded-lg cursor-pointer">
                                <SettingIcon />
                            </div>
                        </div>
                    </div>
                </div>

            }

        </div>
    )

}

export default SideBar