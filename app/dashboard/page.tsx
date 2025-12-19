export default function DashBoardPage(){
    return(
        <div>
            <div className="bg-[#1A1C22] w-72 fixed h-full">
                Dash
            </div>

            <div className="pl-8 pr-8">
                <div className="ml-72 h-screen">
                    <div className="h-32 flex items-center justify-between">
                        <div>
                            Home
                        </div>

                        <div className="border-2 border-gray-700 flex rounded-xl p-1 w-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)] focus-within:border-gray-500">
                            <div className="pt-3 pl-2">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21L15.8 15.8M10 18A8 8 0 1 1 10 2a8 8 0 0 1 0 16z"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"/>
                                </svg>
                            </div>

                            <input type="text" placeholder="Search your contents..."
                            className="p-3 pl-1.5 outline-none w-full placeholder-gray-400"/>
                        </div>
                    </div>
               
                    <div className="text-4xl pb-9">
                        What will you create today?
                    </div>

                    <div className="flex pb-5">
                        <div>
                            box1 
                        </div>
                        <div>
                            box2
                        </div>
                    </div>

                    <div>
                        <input type="text" placeholder="input"
                            className="border"/>
                    </div>
                </div>

            </div>
        </div>
    )
}