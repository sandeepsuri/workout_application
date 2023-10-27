'use client'
import { useRouter } from 'next/navigation';
import WeekTracker from '@/components/weekTracker';
import Weekpot from "@/components/weekpot";
import Header from "@/components/header";
import Log from "@/components/log";
import { app } from "@/firebase/config";
import React, { useState, useEffect } from "react";
import { 
  browserLocalPersistence, 
  getRedirectResult, 
  onAuthStateChanged, 
  setPersistence 
} from "firebase/auth"



export default function Dashboard() {
  const router = useRouter();
  // const [isClient, setIsClient] = useState(false);
  const [toggleBoard, setToggleBoard] = useState(false)

  const handleToggle = () => {
    setToggleBoard(!toggleBoard)
  }

  const signOut = async () => {
    router.push('/')
  }
  

  return (
  <div className="flex flex-col items-center h-screen">
    <Header />
    <WeekTracker />
    <Weekpot toggleBoard={toggleBoard} handleToggle={handleToggle} />
    {toggleBoard ? null : <Log />}
    {/* <Log /> */}
    <footer className="bg-black mt-2"><button onClick={signOut} className="mt-4 text-white">Sign Out</button></footer>
  </div>  
  )
}
