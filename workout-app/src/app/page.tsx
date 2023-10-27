'use client'
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import GoogleButton from '../components/login/googleSignIn';

export default function Home() {

  return (
    <div className='homeWallpaper'>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src="/Logo.svg"
          alt="Greatest Workout App"
          width={2040}
          height={1040}
          className="object-contain"
        />
        <GoogleButton />
      </div>
    </div>
  );
}