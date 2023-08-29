
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
            }).catch((error) => {
                console.log(error.message);
            });
    }
    const authInfo = {
        user,
        loading,
        signUp,
        login,
        logout,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [auth])

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;