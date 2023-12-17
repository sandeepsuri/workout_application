"use client"
import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";

const Create = () => {
    const router = useRouter()
    const [pageIndex, setPageIndex] = useState(1)

    const handleNextClick = () => {
        setPageIndex(pageIndex + 1)
    }

    const handlePrevClick = () => {
        setPageIndex(pageIndex - 1)
    }

    if(pageIndex == 0) router.push("/Setup")
    if(pageIndex === 4 ) router.push("/Dashboard")

    return (
        <div className="flex flex-col items-center h-screen w-full">
            {/* Header */}
            <div className="h-20 flex justify-center">
                <Image
                src="/logo_teal.svg"
                alt="header"
                width={200}
                height={200}
                />
            </div>
            <div className={`w-full h-full bg-sky-900 flex-col justify-start items-center gap-10 inline-flex`}>
                <button className="w-full px-10 py-[6%]">
                    <Image
                        src="/back_button.svg"
                        alt="back button"
                        width={50}
                        height={50}
                        onClick={handlePrevClick}
                    />
                </button>
                {/* Step 1 of Create */}
                <div className={`w-full flex-col flex items-center gap-8 ${pageIndex === 1 ? '' : 'hidden'}`} >
                    <div className="text-white text-4xl font-semibold font-inter">CREATE</div>
                    <div className="text-center text-white text-lg font-light font-roboto">Create a new workout challenge with your own rules and guidelines!</div>
                    {/* GROUP ID INPUT */}
                    <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white" placeholder="GROUP ID" />
                    {/* ACCESS CODE INPUT */}
                    <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white" placeholder="ACCESS CODE" />
                    {/* CONFIRM ACCESS CODE INPUT */}
                    <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white" placeholder="CONFIRM ACCESS CODE" />
                
                    <button className="px-6 py-1.5 bg-teal-950 rounded-2xl" onClick={handleNextClick}>
                        <div className="text-white text-xl font-light font-inter">NEXT</div>
                    </button>
                </div>
                {/* Step 2 of Create */}
                <div className={`w-full flex-col flex items-center gap-8 ${pageIndex === 2 ? '' : 'hidden'}`} >
                    <div className="text-white text-4xl font-semibold font-inter">CANCUN2K16</div>
                    <div className="text-white text-lg font-light font-roboto">Let’s create your challenge!</div>
                    {/* PENALTY INPUT */}
                    <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white" placeholder="PENALTY ($/WEEK)"/>
                    {/* NUMBER OF WORKOUTS/WEEK INPUT */}
                    <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white" placeholder="# OF WORKOUTS/WEEK" />
                    {/* START DATE INPUT */}
                    <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white" placeholder="START DATE" />
                    {/* DURATIONS INPUT */}
                    <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white" placeholder="DURATION (WEEKS)" />
                    
                    <button className="px-6 py-1.5 bg-teal-950 rounded-2xl" onClick={handleNextClick}>
                        <div className="text-white text-xl font-light font-inter">NEXT</div>
                    </button>
                </div>
                {/* Step 3 of Create */}
                <div className={`w-full flex-col flex items-center gap-8 ${pageIndex === 3 ? '' : 'hidden'}`} >
                    <div className="text-white text-4xl font-semibold font-inter">CANCUN2K16</div>
                    <div className="text-white text-lg font-light font-roboto leading-snug">Everything look right?</div>
                    <div className="self-stretch h-12 bg-gray-900 bg-opacity-30 border-b-8 border-gray-900 justify-center items-center flex">
                        <div className=" justify-center items-start gap-24 inline-flex">
                            <div className="text-white text-sm font-bold font-roboto">PENALTY ($/WEEK)</div>
                            <div className="text-white text-sm font-light font-roboto">$20</div>
                        </div>
                    </div>

                    <div className="self-stretch h-12 bg-gray-900 bg-opacity-30 border-b-8 border-gray-900 justify-center items-center gap-2.5 flex">
                        <div className="gap-28 inline-flex">
                            <div className="text-white text-sm font-bold font-roboto">WORKOUTS/WEEK</div>
                            <div className="text-white text-sm font-light font-roboto">4</div>
                        </div>
                    </div>

                    <div className="self-stretch h-12 bg-gray-900 bg-opacity-30 border-b-8 border-gray-900 justify-center items-center gap-2.5 flex">
                        <div className=" justify-center items-start gap-24 inline-flex">
                            <div className="text-white text-sm font-bold font-roboto">START DATE</div>
                            <div className="text-white text-sm font-light font-roboto">01-01-2024</div>
                        </div>
                    </div>

                    <div className="self-stretch h-12 bg-gray-900 bg-opacity-30 border-b-8 border-gray-900 justify-center items-center flex">
                        <div className=" justify-center items-start gap-28 inline-flex">
                            <div className="text-white text-sm font-bold font-roboto">DURATION</div>
                            <div className="text-white text-sm font-light font-roboto">26 WEEKS</div>
                        </div>
                    </div>

                    <button className="px-6 py-1.5 bg-white rounded-2xl" onClick={handleNextClick}>
                        <div className="text-sky-900 text-xl font-light font-inter">CREATE</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Create