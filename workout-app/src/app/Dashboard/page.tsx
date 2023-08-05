'use client'
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const route = useRouter()
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)

  if(loading) return <div>Loading...</div>
  if(!user) {
    route.push("/")
    // return <div>Please sign in to continue.</div>
}
  return (
    <div>
      <h2>Success!</h2>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}
