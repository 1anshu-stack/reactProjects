import { useRef, useState } from "react";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../../firebase";
import "./signInScreen.css"

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = async (e) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log("signInScreen",authUser)
        }).catch((error)=>{
            alert(error.message);
        });
    };

    return (
        <div className="signInScreen">
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="password" />
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signupScreen_gray">New to Netflix?</span> 
                    <span className="signupScreen_link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen;