import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

// Sign in with Google
export const login = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Login error", error);
  }
};

// Sign out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error", error);
  }
};
