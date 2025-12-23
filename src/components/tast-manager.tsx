
"use client";
import PlusIcon from "@/public/icons/PlusIcon";
import { useState, useTransition } from "react";
import PencilIcon from "@/public/icons/PencilIcon";
import TrashIcon from "@/public/icons/TrashIcon";
import Input from "./atoms/input";
const TaskManager = () => {


    const [activeFilter, setActiveFilter] = useState<number | null>(null);

    return (
        <div className="max-h-screen">
            <div className="text-center mt-10 flex flex-col gap-6 w-[520px]">
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl font-semibold text-center text-[#333333]">My Tasks</h1>
                    <div className="flex items-center justify-start  gap-3">
                        <div>
                            <input type="text" className="bg-white rounded-lg shadow-sm shadow-[#a8a6a6] py-2 px-6 w-[400px]" />
                        </div>
                        <div>
                            <button className="bg-black text-white px-6 py-2 rounded-lg shadow-xs shadow-gray-500 flex items-center justify-center cursor-pointer"><PlusIcon className="mr-1" />Add</button>
                        </div>
                    </div>
                </div>
                <div className="h-[380px] w-[510px] flex flex-col gap-5 mt-3 py-4">
                    <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-1 text-(--text-gray)">
                            {["All", "Active", "Completed"].map((filter, idx, allFilters) => {
                                return (
                                    <p key={filter} onClick={() => { setActiveFilter(idx) }} className={`cursor-pointer ${activeFilter == idx ? 'text-black ' : ' text-(--text-gray)'} `}>{filter} {idx < allFilters.length - 1 && " | "} </p>
                                )
                            })}
                        </div>
                        <div>
                            <p className="text-(--text-gray)">2 tasks left</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 overflow-y-auto w-full px-2 h-full">


                        {Array.from({ length: 6 }).map((elem,idx) => {
                            return (
                                <div key={idx+idx} className="bg-white rounded-lg py-4 px-6 w-full flex justify-between items-center box-shadow" >
                                    <Input type="checkbox" className="cursor-pointer mr-2" />
                                    <Input type="text" placeholder="Push to Github" disabled={true} className="placeholder:line-through py-1 w-full px-2 outline-none" />
                                    <div className="flex gap-4">
                                        <PencilIcon width={18} height={18} className="cursor-pointer" />
                                        <TrashIcon width={18} height={18} className="cursor-pointer" />
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>
        </div>
    )

}

export default TaskManager