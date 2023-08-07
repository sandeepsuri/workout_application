'use client'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from 'next/navigation';
import Feed from "@/components/feed";
import Navbar from "@/components/navbar";

export default function Dashboard() {
  const router = useRouter()
  const auth = getAuth()

  onAuthStateChanged (auth, async (user) => {
    if(!user) router.push('/')
  })

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h2>Success!</h2>
    <Feed />
    <Navbar />
    <button onClick={() => auth.signOut()} className="mt-4">Sign Out</button>
  </div>  
  )
}
