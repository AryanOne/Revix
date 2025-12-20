export default function DashBoardPage(){
    return(
        <div>
             <div className="ml-72 px-8">
                <div className="h-screen">
                    <Header/> 
                    
                    <div className="text-4xl pb-9">
                        What will you create today?
                    </div>

                    <div className="flex mb-5 w-60 rounded-xl bg-[#1f2129]">
                        <div className="p-5 border-2 border-gray-700 rounded-xl ">
                            box1 
                        </div>
                        <div className="p-5">
                            box2
                        </div>
                    </div>

                    <MainSearchBox/>

                    <div className="flex justify-between mt-10">
                        <div className="text-2xl">Recent Contents</div>
                        <div>See all</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Header(){
    return (
        <div className="h-32 flex items-center justify-between">
            <div  className="text-2xl">
                Home
            </div>

            <div className="border-2 border-gray-700 flex rounded-xl p-1 w-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)] 
            focus-within:border-gray-500">
                <div className="pt-3 pl-2">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L15.8 15.8M10 18A8 8 0 1 1 10 2a8 8 0 0 1 0 16z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"/>
                    </svg>
                </div>

                <input type="text" placeholder="Search your contents..."
                className="p-3 pl-1.5 outline-none w-full placeholder-gray-400"/>
            </div>
        </div>
    )
}

function MainSearchBox(){
    return (
        <div className="border-2 border-gray-700 rounded-xl p-3.5 pl-4 pr-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)] 
        focus-within:border-gray-500 h-40 flex flex-col justify-between">
            <textarea className="outline-none h-full resize-none" defaultValue="input"/>
            <div className="mt-1">buttons</div>
        </div>
    )
}

