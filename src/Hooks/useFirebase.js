import { useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

  signInWithPopup,
  updateProfile 
} from "firebase/auth";
import { useEffect } from "react";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password, name, history) => {

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.replace('/')
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');

        // ...
      })
      .catch((error) => {
        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setAuthError('');
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }
  
  //observed user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [])
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }
  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
  }
}

export default useFirebase;