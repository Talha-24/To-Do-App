
"use client";
const TaskManager = () => {



    return (
        <div>
            <div className="text-center mt-10 flex flex-col gap-6">
                <h1 className="text-3xl font-semibold">My Tasks</h1>

                {/* ADD TASK */}
                <div className="flex items-center justify-start gap-1">
                    <div>
                        <input type="text" className="bg-white rounded-lg shadow-sm shadow-[#a8a6a6] py-1 px-6" />
                    </div>
                    <div>
                        <button className="bg-black text-white px-3 py-1 rounded-lg shadow-xs shadow-gray-500 flex items-center justify-center cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Add</button>
                    </div>
                </div>


                {/* ALL TASKS  */}

                <div className="flex items-start">
                    <div>
                        {/* <Image  src={NoTaskImage.src} width={NoTaskImage?.width} height={NoTaskImage?.height}  alt="No Task to be finished" className="h-auto w-full" loading="eager" /> */}
                    </div>
                    <div>
                        <p>Empty as my motivation on Monday 😅</p>
                        <p>Let's start adding stuff!</p>
                    </div>
                </div>



            </div>
        </div>
    )

}

export default TaskManager