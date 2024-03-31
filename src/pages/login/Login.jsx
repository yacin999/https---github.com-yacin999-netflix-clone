import './login.scss'

export default function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
                </div>
            </div>

            <div className="container">
                <form action="">
                    <h1>Log In</h1>
                    <input type="email" placeholder="Email or your phone number"/>
                    <input type="password" placeholder="Password"/>
                    <button className="login-button">Sign In</button>
                    <span>New to netflix? <b>sign up now.</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot <b>learn more.</b> </small>
                </form>


               
            </div>
        </div>
    )
}
