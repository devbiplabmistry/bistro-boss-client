
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";



export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider()
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
    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const authInfo = {
        user,
        loading,
        signUp,
        login,
        logout,
        googleSignIn,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (result) => {
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(result)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.token) {

                        localStorage.setItem('access-token', data?.token)
                    }
                })
                // console.log(result?.displayName);
            setUser(result)
            if (!user) {
                localStorage.removeItem('access-token');
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [auth, user])

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;