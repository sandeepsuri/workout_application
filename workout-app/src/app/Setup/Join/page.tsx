"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Join = () => {
    const router = useRouter()

    const handleClickJoin = () => {
        router.push('/Dashboard')
    }

    const handleClickBack = () => {
        router.push('/Setup')
    }

    return (
        //Header
        <div className="flex flex-col items-center h-screen bg-white flex-col justify-start items-center gap-12">
            <div className='container'>
                <div className="h-20 bg-sky-900 flex justify-center">
                    <Image
                        src="/header_logo.svg"
                        alt="header"
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            <div className="container mx-auto">
                <Image
                    src="/back.svg"
                    alt="<-"
                    width={350}
                    height={200}
                    onClick={handleClickBack}
                />
            </div>

            <div className="text-center text-sky-900 text-4xl font-semibold font-inter">JOIN</div>

            <div className="px-[10%]">
                <div className="grow shrink basis-0 text-center text-sky-900 text-opacity-80 text-lg font-light font-roboto leading-[23px]">Enter your Group ID and Access Code to join the challenge! </div>
            </div>

            <div style={{ width: '300px', height: '40px', padding: '10px', borderRadius: '7px', border: '1px solid #1e40af' }} className="flex flex-col justify-center items-start space-y-2.5">
                <input
                    type="text"
                    className="w-full h-full outline-none border-none text-black text-opacity-70 text-sm font-light font-roboto"
                    placeholder="GROUP ID"
                />
            </div>

            <div style={{ width: '300px', height: '40px', padding: '10px', borderRadius: '7px', border: '1px solid #1e40af' }} className="flex flex-col justify-center items-start space-y-2.5">
                <input
                    type="text"
                    className="w-full h-full outline-none border-none text-black text-opacity-70 text-sm font-light font-roboto"
                    placeholder="ACCESS CODE"
                />
            </div>

            <div className="px-[25px] py-[7px] bg-sky-900 rounded-[17px] flex-col flex">
                <div className="text-center text-white text-xl font-light font-inter" onClick={handleClickJoin}>JOIN</div>
            </div>

        </div >
    )
}

export default Join