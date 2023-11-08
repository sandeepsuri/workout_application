"use client"
import React from "react"
import Image from "next/image"

const Setup = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-black">
            {/* White box with centered text */}
            <div className="flex flex-col items-center justify-center w-full h-1/2 bg-white">
                <div className="text-black text-4xl font-black font-inter">JOIN</div>
                <div className="text-black text-opacity-40 text-xs font-light font-roboto">join a workout group</div>
            </div>
            
            {/* Centered WORKOUT APP text */}
            <div className="flex justify-center items-center mt-[-26px]">
                <Image
                src="/setup_logo.svg"
                alt="header"
                width={200}
                height={200}
                />    
            </div>

            {/* Black box with centered text */}
            <div className="flex flex-col items-center justify-center w-full h-1/2">
                <div className="text-white text-4xl font-black font-inter">CREATE</div>
                <div className="text-white text-opacity-40 text-xs font-light font-roboto">create a new workout group</div>
            </div>
        </div>
    )
}

export default Setup