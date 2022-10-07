import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import './Signin.css'
 

function Signin() {
    const Navigate=useNavigate();

    const[inpval,setInpval]=useState({
        email:"",
        password:""

    })

    const [data,setData]=useState([]);
    // const[error,setError]=useState(false)
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // console.log(inpval)

    const getdata=(e)=>{
        // console.log(e.target.value)
        const{value,name}=e.target;

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })

    }

    const addData=(e)=>{
        e.preventDefault();
        const getuserArr=localStorage.getItem("userDetail");
        // console.log(getuserArr);
        const {email,password}=inpval;
         if (email === "") {
            setEmailError("email field required");
        } else if (!email.includes("@")) {
            setEmailError("please enter valid email address")

        } else if (password === "") {
            setPasswordError("password field required")
        } else if (password.length < 5) {
            setPasswordError("password length should be greater than 5")
        } else{
            if(getuserArr && getuserArr.length){
                const userdata=JSON.parse(getuserArr);
                const userlogin=userdata.filter((el,k)=>{
                    return el.email===email && el.password===password
                });
                // alert("login successful")
                if(userlogin.length===0){
                    alert("invalid details");
                }else{
                    alert("user login susseful")
                    Navigate("/Menu")
                    localStorage.setItem("_token", "true")
                }
            }
            
        }

    }
  return (
    <>
        <>
            <section className='signup'>
                <div className='content'>
                <h1 className='heading'>Signin</h1>
                    <form>
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
                        <button type="submit" onClick={addData} className='btn'>Signin</button>       
                    </form>
                    <p className='already'>If u don't have an account<Link to={'/signup'}>Signup</Link></p>
                </div>

            </section>
        </>
    </>
  )
}

export default Signin;