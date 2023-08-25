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
