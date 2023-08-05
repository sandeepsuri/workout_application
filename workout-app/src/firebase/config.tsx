import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.FB_AK,
    authDomain: process.env.FB_AD,
    projectId: process.env.FB_PID,
    storageBucket: process.env.FB_SB,
    messagingSenderId: process.env.FB_MSID,
    appId: process.env.FB_AID,
    measurementId: process.env.FB_MID
};
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initializeFirebase = () => { return app }

