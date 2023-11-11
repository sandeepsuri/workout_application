"use client"
import React, {useEffect, useState} from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { animate } from "framer-motion"

const Setup = () => {
    const router = useRouter()
    const [animate, setAnimate] = useState(false)
    
    const handleClickJoin = () => {
        router.push('Setup/Join')
    }
    const handleClickCreate = () => {
        router.push('Setup/Create')
    }

    useEffect(() => {
        setAnimate(true)
    }, [])

    return (
        <div className="flex flex-col items-center h-screen bg-[#004562]">
            {/* White box with centered text */}
            <div className={`flex flex-col items-center justify-center w-full h-1/2 bg-white ${animate ? 'animate-slideDown' : ''}`}>
                <div className="text-black text-4xl font-black font-inter" onClick={handleClickJoin}>JOIN</div>
                <div className="text-black text-opacity-40 text-xs font-light font-roboto">join a workout group</div>
            </div>
            
            {/* Centered WORKOUT APP text */}
            <div className={`flex justify-center items-center w-full  ${animate ? 'animate-scale' : ''}`} style={{height: '12%'}}>
                <Image
                src="/header_logo.svg"
                alt="header"
                width={200}
                height={200}
                />    
            </div>

            {/* Black box with centered text */}
            <div className={`flex flex-col items-center justify-center w-full h-1/2 bg-black ${animate ? 'animate-slideUp' : ''}`}>
                <div className="text-white text-4xl font-black font-inter" onClick={handleClickCreate}>CREATE</div>
                <div className="text-white text-opacity-40 text-xs font-light font-roboto">create a new workout group</div>
            </div>
        </div>
    )
}

export default Setup