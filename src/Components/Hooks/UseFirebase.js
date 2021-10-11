import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/Firebase.init";

initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const SigninWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider).then((result) => {
      console.log(result.user);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const LogOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    SigninWithGoogle,
    user,
    LogOut 
  };
};

export default UseFirebase;
