"use client"
import logincss from "./login.css"
import Link from "next/link"
import Image from "next/image"
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import googleLogo from "./assets/google 1.svg"
import facebookLogo from "./assets/facebook 1.svg"

function Login() { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

     const handleLogin = async (event) => { 
      event.preventDefault();

      try { 
        const response = await fetch('http://localhost:3001/api/login', { 
          method: 'POST', 
          headers: { 
            'Content-Type': 'application/json', 
          }, 
          body: JSON.stringify({email, password})
        })
  
        if (response.status === 404) {
          throw new Error('User does not exist');
      }

        if (response.status === 401) {
            throw new Error('Username or password is incorrect');
        }

        if (!response.ok) { 
            throw new Error('Failed to login');
        }
  
        router.push('/dashboard/home')
  
      } catch (error) { 
        setError(error.message)
      }

     }

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 0.5,
              backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#651FE0',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 12,
          height: 12,
          borderRadius: 6,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));

    return(
        <>
         <div className="login-container">
            <div className="HaveAccount">
                    <p>Dont't have an account?
                    <span> <a href="/authentication/signup">signup</a> </span>
                    </p>
                </div>
                {/*  */}
                <div className="login-section">
                    <div className="text-top-login">
                        <h2>Welcome Back</h2>
                        <p>Login into your account</p>
                    </div>
                    <div className="login-options-ggleORfb">
                        <div className="google-login">
                            <Image src={googleLogo} alt="google logo"></Image>
                            <p>Google</p>
                        </div>
                        <div className="facebook-login">
                            <Image src={facebookLogo} alt="facebook logo"></Image>
                            <p>Facebook</p>
                        </div>
                        </div>
                        <div className="break-line-authenticate">
                            <div className="lines-auth"></div>
                            <p>or conitnue with</p>
                            <div className="lines-auth"></div>
                        </div>
                        <form onSubmit={handleLogin} className="login-form-auth">
                            <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" placeholder="Enter Email"></input>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} required type="password" placeholder="Password"></input>
                            <div className="switchANDpswdRcvry">
                                <div className="theREMEMBERPSWDSWITCH">
                                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                    <p>Remember me</p>
                                </div>
                                <p><a href="/">Recover Password</a></p>
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <button onSubmit={handleLogin} type="submit">Login</button>
                        </form>
                </div>
            </div>
        </>
    )
}
export default Login