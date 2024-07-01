"use client";
import signupcss from "./signup.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import googleLogo from "./assets/google 1.svg";
import facebookLogo from "./assets/facebook 1.svg";

function Signup() { 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleRegister = async (event) => { 
        event.preventDefault();

        if (password !== confirmPassword) { 
            setError("Passwords do not match");
            return;
        }

        try { 
            const response = await fetch('https://social-flow-server.vercel.app/api/user', { 
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify({ username, email, password })
            });
            console.log("error here:", {response})

            if (!response.ok) { 
                throw new Error('Failed to register');
            }

            const data = await response.json(); 
            console.log('Registration successful', data);
            router.push('/dashboard/home')

        } catch (error) { 
            setError(error.message);
        }
    }

    return (
        <>
            <div className="signup-container">
                <div className="HaveAccount">
                    <p>have an account?
                        <span> <Link href="/authentication/login">login</Link> </span>
                    </p>
                </div>
                <div className="signup-section">
                    <div className="text-top-signup">
                        <h2>Getting Started With Social Flow</h2>
                        <p>Getting started is easy</p>
                    </div>
                    <div className="signup-options-ggleORfb">
                        <div className="google-signup">
                            <Image src={googleLogo} alt="google logo" />
                            <p>Google</p>
                        </div>
                        <div className="facebook-signup">
                            <Image src={facebookLogo} alt="facebook logo" />
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="break-line-authenticate">
                        <div className="lines-auth"></div>
                        <p>or continue with</p>
                        <div className="lines-auth"></div>
                    </div>
                    <form onSubmit={handleRegister} className="signup-form-auth">
                        <input 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username} 
                            type="text" 
                            placeholder="Full Name" 
                            required
                        />
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            type="email" 
                            placeholder="Enter Email" 
                            required
                        />
                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            type="password" 
                            placeholder="Password" 
                            required
                        />
                        <input 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            value={confirmPassword} 
                            type="password" 
                            placeholder="Confirm Password"
                            required 
                        />

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button onSubmit={handleRegister} type="submit">Create Account</button>
                    </form>
                    <div className="termsANDagreements-auth">
                        <p>By continuing, you indicate that you read and agreed to the Terms of Use</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
