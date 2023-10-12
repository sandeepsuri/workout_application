'use client'
import { useRouter } from 'next/navigation';
import Weekpot from "@/components/weekpot";
import Header from "@/components/header";
import Log from "@/components/log";
import { app } from "@/firebase/config";
import React, { useState, useEffect } from "react";
import { 
  browserLocalPersistence, 
  getAuth, 
  getRedirectResult, 
  onAuthStateChanged, 
  setPersistence 
} from "firebase/auth"



export default function Dashboard() {
  const auth = getAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [toggleBoard, setToggleBoard] = useState(false)

  const handleToggle = () => {
    setToggleBoard(!toggleBoard)
  }
  
  useEffect(() => {
    setIsClient(true); // Set the isClient state to true when the component is mounted on the client side
  }, []);

  useEffect(() => {
    getAuth(app)
    if (isClient) {
      // Stays logged in unless you sign out manuelly
      setPersistence(auth, browserLocalPersistence);

      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) router.push('/');
      });

      return () => {
        unsubscribe(); // Clean up the subscription when the component unmounts
      };
    }
  }, [auth, isClient, router]);

  return (
  <div className="flex flex-col items-center h-screen">
    <Header />
    <br />
    <Weekpot toggleBoard={toggleBoard} handleToggle={handleToggle} />
    {toggleBoard ? null : <Log />}
    {/* <Log /> */}
    <footer className="bg-black"><button onClick={() => auth.signOut()} className="mt-4 text-white">Sign Out</button></footer>
  </div>  
  )
}
