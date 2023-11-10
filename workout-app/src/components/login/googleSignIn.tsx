'use client'
import React from 'react'
// import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
// import { app } from '../../firebase/config'
import { useRouter } from 'next/navigation';


export default function GoogleButton() {
    const router = useRouter()
    const signIn = async () => {
        router.push('Setup')
    }

    return (
      <div className="px-8 py-32">
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-slate-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-2000 group-hover:duration-700 animate-tilt"></div>
          <button onClick={signIn} type="button" className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white -rotate-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
              </svg>
              <span className=" text-gray-100"> </span>
            </span>
            <span className="pl-6 text-white group-hover:text-gray-100 transition duration-200">Sign in with Google </span>
          </button>
        </div>
      </div>
    </div>
      
    )
}