import { useState, useRef } from 'react'
import './register.scss'

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="logo" />
                    <button className="login-button">Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. cancel anytime.</h2>
                <p>Read to watch, enter your email to create or restart your membership.</p>


                {
                    !email ? (
                        <div className="input">
                            <input type="email" name="" id="" placeholder="email address" ref={emailRef}/>
                            <button className="register-button" onClick={()=> handleStart()}>Get started</button>
                        </div>
                    ) : (
                        <div className="input">
                            <input type="password" name="" id="" placeholder="password" ref={passwordRef}/>
                            <button className="register-button" onClick={()=> handleFinish()}>start</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
