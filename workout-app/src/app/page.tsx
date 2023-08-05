'use client'
import { useRouter } from 'next/navigation';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import GoogleButton from '@/login/googleSignIn';
import { useState } from 'react';


export default function Home() {
  const router = useRouter()
  const auth = getAuth()
  console.log(auth)
  const [user, loading] = useAuthState(auth)

  if(loading) {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(user){
    router.push('Dashboard')
    // return <div>Welcome {user.displayName}</div>
  }

  return (
    <div>
      <h1>Ultimate Workout App</h1>
      <GoogleButton />
    </div>
  )
}
