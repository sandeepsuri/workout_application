'use client'
import { useRouter } from 'next/navigation';
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
    <header className="bg-black text-white">WorkoutAPP</header>
    <div className=" bg-red-400">Week/Pot view</div>
    <div className="p-4">
  <div className="flex rounded-full gap-4">
    {[1, 2, 3, 4].map((number) => (
      <div key={number} className="bg-red-600 rounded-full w-10 h-10 inline-block flex items-center justify-center">
        {number}
      </div>
    ))}
  </div>
</div>

    
    <div className=" bg-red-900">Log Workout button</div>
    <footer className="bg-black"><button onClick={() => auth.signOut()} className="mt-4 text-white">Sign Out</button></footer>





    {/* <Feed />
    <Navbar /> */}
    
  </div>  
  )
}
