'use client'
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import GoogleButton from '../components/login/googleSignIn';

export default function Home() {
  const router = useRouter()
  const auth = getAuth()

  onAuthStateChanged (auth, async (user) => {
    if(user) router.push('Dashboard')
    else console.log('not logged in')
  })

  return (
    <div
      style={{
        backgroundImage: `url("/bghome.jpg")`, // Adjust the path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Make sure the background covers the entire viewport height
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity by changing the alpha value (0.5 in this example)
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <img
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