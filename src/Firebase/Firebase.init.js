import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
}

export default initializeAuthentication;