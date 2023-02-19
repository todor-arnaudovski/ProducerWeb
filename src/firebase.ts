import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA5Jvh9-XI3UNbycKeEpWhbUPWEZMRmjC8",
    authDomain: "audioplayerapp-f7290.firebaseapp.com",
    projectId: "audioplayerapp-f7290",
    storageBucket: "audioplayerapp-f7290.appspot.com",
    messagingSenderId: "532014483245",
    appId: "1:532014483245:web:7473dfc626c3d073aab5a4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
