'use client'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from 'next/navigation';
import Weekpot from "@/components/weekpot";
import Header from "@/components/header";
import Log from "@/components/log";


export default function Dashboard() {
  const router = useRouter()
  const auth = getAuth()

  onAuthStateChanged (auth, async (user) => {
    if(!user) router.push('/')
  })

  return (
  <div className="flex flex-col items-center h-screen">
    <Header />
    <Weekpot />
    <Log />
    <footer className="bg-black"><button onClick={() => auth.signOut()} className="mt-4 text-white">Sign Out</button></footer>
  </div>  
  )
}
