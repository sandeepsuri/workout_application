"use client"
import React from "react"
import Image from "next/image"

const Create = () => {
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
            {/* Step 1 of Create */}
            <div className="w-full h-full bg-sky-900 flex-col justify-start items-center gap-10 inline-flex">
                <div className="h-9 px-10 flex-col justify-start items-start gap-2.5 flex" />
                <div className="self-stretch px-10 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-4xl font-semibold font-inter">CREATE</div>
                </div>
                <div className="self-stretch px-10 pb-3.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-lg font-light font-roboto leading-snug">Create a new workout challenge with your own rules and guidelines!</div>
                </div>

                {/* GROUP ID INPUT */}
                <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white flex-col justify-center items-start gap-2.5 flex" placeholder="GROUP ID" />
                {/* ACCESS CODE INPUT */}
                <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white flex-col justify-center items-start gap-2.5 flex" placeholder="ACCESS CODE" />
                {/* CONFIRM ACCESS CODE INPUT */}
                <input className="w-72 h-10 px-2.5 bg-gray-900 bg-opacity-20 rounded-md border border-white flex-col justify-center items-start gap-2.5 flex" placeholder="CONFIRM ACCESS CODE" />
                
                <button className="px-6 py-1.5 bg-teal-950 rounded-2xl flex-col justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-xl font-light font-['Inter']">NEXT</div>
                </button>
            </div>
        </div>
    )
}

export default Create