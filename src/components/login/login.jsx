import React, { useState } from 'react';
import Style from './login.module.css';


function Login({ onClose }) {

    const [isClick, setIsClick] = useState(false)

    const isClickRegister = (e) => {
        e.preventDefault();
        setIsClick(true)

    }
    console.log(isClick);


    const isClickLogin = (e) => {
        e.preventDefault();
        setIsClick(false)
    }

    return (
        <div className={Style.popupContainer}>
            <div className={Style.popup}>
                <button onClick={onClose} className={Style.closeBTN} ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12.182 5.81791L5.81805 12.1819M12.182 12.1818L5.81805 5.81787" stroke="#040D08" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button>
                <h2>Welcome 👋 </h2>
                <p>Please login here</p>

                <div className={Style.loginForm}>

                    <form action="">

                        {isClick && (
                            <>
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' placeholder='Robert Parera' id='name' />
                            </>
                        )}

                        <label htmlFor="login">Email Address</label>
                        <input type="text" name='login' placeholder='robert.parera@example.com' id='login' />

                        <label htmlFor="password" > Password</label>
                        <input type="password" name='password' placeholder='••••••••••' id='password' />


                        <div className={Style.forgetPW}>
                            {!isClick ? (
                                <>
                                    <p><input type="checkbox" /> Remember Me</p>
                                    <a href="">Forgot Password?</a>
                                </>
                            ) : (
                                <>
                                    <p><input type="checkbox" /> I agree to the Terms & Conditions</p>

                                </>
                            )}
                        </div>


                        <button className={Style.loginBTN} onClick={(e) => isClickLogin(e)}> Login</button>
                        <button className={Style.registerBTN} onClick={(e) => isClickRegister(e)} > Register</button>


                        <div className={Style.loginWith} >

                            <p>Or Login With</p>
                        </div>

                        <button className={Style.withBTN}>
                            <div className={Style.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_221_1595)">
                                        <path d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z" fill="#4285F4" />
                                        <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                        <path d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z" fill="#FBBC04" />
                                        <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_221_1595">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span>Login with Google</span>
                        </button>

                        <button className={Style.withBTN}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M21.3426 17.1449C21.0099 17.9135 20.6161 18.6211 20.1598 19.2715C19.5378 20.1583 19.0286 20.7721 18.6361 21.113C18.0277 21.6724 17.3759 21.959 16.6779 21.9753C16.1768 21.9753 15.5725 21.8327 14.8691 21.5434C14.1633 21.2555 13.5148 21.113 12.9217 21.113C12.2998 21.113 11.6327 21.2555 10.9193 21.5434C10.2047 21.8327 9.62904 21.9834 9.18892 21.9984C8.51957 22.0269 7.85239 21.7322 7.18644 21.113C6.76139 20.7422 6.22974 20.1067 5.59285 19.2063C4.90951 18.2449 4.34772 17.13 3.9076 15.8589C3.43624 14.486 3.19995 13.1565 3.19995 11.8694C3.19995 10.3951 3.51853 9.12345 4.15665 8.05784C4.65815 7.20191 5.32533 6.52672 6.16035 6.03105C6.99537 5.53539 7.89761 5.2828 8.86925 5.26664C9.4009 5.26664 10.0981 5.43109 10.9645 5.75429C11.8284 6.07858 12.3832 6.24303 12.6264 6.24303C12.8082 6.24303 13.4245 6.05074 14.4692 5.66738C15.4571 5.31186 16.2909 5.16466 16.974 5.22264C18.8249 5.37202 20.2155 6.10167 21.1402 7.41619C19.4849 8.4192 18.666 9.82403 18.6823 11.6262C18.6972 13.03 19.2065 14.1981 20.2073 15.1256C20.6609 15.5561 21.1674 15.8888 21.731 16.1251C21.6087 16.4795 21.4797 16.819 21.3426 17.1449ZM17.0975 0.440369C17.0975 1.54062 16.6956 2.56792 15.8944 3.51878C14.9275 4.64917 13.758 5.30236 12.4898 5.19929C12.4736 5.06729 12.4642 4.92837 12.4642 4.78239C12.4642 3.72615 12.924 2.59576 13.7406 1.67152C14.1483 1.20356 14.6667 0.814453 15.2955 0.504058C15.9229 0.198295 16.5163 0.0292007 17.0744 0.000244141C17.0907 0.147331 17.0975 0.294426 17.0975 0.440355V0.440369Z" fill="black" />
                                </svg>
                            </div>

                            <span>Login with Apple</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;