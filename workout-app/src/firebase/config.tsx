import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_AK,
    authDomain: process.env.NEXT_PUBLIC_FB_AD,
    projectId: process.env.NEXT_PUBLIC_FB_PID,
    storageBucket: process.env.NEXT_PUBLIC_FB_SB,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_MSID,
    appId: process.env.NEXT_PUBLIC_FB_AID,
    measurementId: process.env.NEXT_PUBLIC_FB_MID
};
  
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }

// export const initializeFirebase = () => { return app }

