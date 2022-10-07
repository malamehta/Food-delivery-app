import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup() {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        username: "",
        email: "",
        password: ""

    })

    const [data, setData] = useState([]);
    // const [errorMessage, setErrorMessage] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // console.log(inpval)

    const getdata = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();
        const { username, email, password } = inpval;

        if (username === "") {
            setUsernameError("name field required");
        } else if (email === "") {
            setEmailError("email field required");
        } else if (!email.includes("@")) {
            setEmailError("please enter valid email address")

        } else if (password === "") {
            setPasswordError("password field required")
        } else if (password.length < 5) {
            setPasswordError("password length should be greater than 5")
        } else {
            alert("signup successfull ")
            localStorage.setItem("userDetail", JSON.stringify([...data, inpval]));
            history("/signin")
        }

    }
    return (
        <>
            <>
                <section className='signup'>
                    <div className='content'>
                        <h1 className='heading'>Signup</h1>
                        <form>
                            <div className='input-box'>
                                <input
                                    type="text"
                                    placeholder='Enter user Name'
                                    name='username'
                                    onChange={getdata}
                                />
                                {usernameError && (
                                    <p className="error"  style={{color:"red"}}> {usernameError} </p>
                                )}
                            </div>
                            <div className='input-box'>
                                <input
                                    type="text"
                                    placeholder='Enter Email'
                                    name='email'
                                    onChange={getdata}
                                />
                                {emailError && (
                                    <p className="error" style={{color:"red"}}> {emailError} </p>
                                )}
                            </div>
                            <div className='input-box'>
                                <input
                                    type="password"
                                    placeholder='Enter password'
                                    name='password'
                                    onChange={getdata}
                                />
                                {passwordError && (
                                    <p className="error" style={{color:"red"}}> {passwordError} </p>
                                )}
                            </div>
                            <button type="submit" onClick={addData} className='btn'>Signup</button>

                            <p className='already'>Already have an account<Link to={'/signin'}>Login</Link></p>
                        </form>
                    </div>

                </section>
            </>
        </>
    )
}

export default Signup;