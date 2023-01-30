// firebase.config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyABpdLXMzPFhmUoQeh0ABLPsoiI9r2wKb4",
    authDomain: "majestic-garage.firebaseapp.com",
    projectId: "majestic-garage",
    storageBucket: "majestic-garage.appspot.com",
    messagingSenderId: "332740869277",
    appId: "1:332740869277:web:162c3077b0ba0591efa874",
    measurementId: "G-9KFDQ4RR8X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };