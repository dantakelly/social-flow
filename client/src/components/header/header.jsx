"use client"

import headercss from "./header.css"
import Image from "next/image"
import { useState } from 'react';
import Link from "next/link";

import OpenNav from "./assets/open header.svg"
import CloseNav from "./assets/close header.svg"


function Header() { 

    const [openHeader, setOpenHeader] = useState(true)
    const ToggleOpenHeader = () => {
        setOpenHeader(!openHeader)
    }

    return(
        <>
        <div className="show-responsive-header">
        <Image style={{ display: openHeader ? 'block' : 'none' }} src={OpenNav} onClick={ToggleOpenHeader}></Image>
        </div>

        <div style={{ display: openHeader ? 'none' : 'block' }} className="header-responsive"> 
         <Image onClick={ToggleOpenHeader} className="close-nav" src={CloseNav} />
        <div className="responive-head-contents">
            <div className="header-logo">
                    <h2>social flow</h2>
                </div>
                <ul>
                    <li className="login-header"> <a href="/authentication/login">Login</a> </li>
                    <li className="signup-header"> <a href="/authentication/signup">Signup</a> </li>
                    <li className="about-header">About</li>
                </ul>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <header className="header-section">
                <div className="header-logo">
                    <h2>social flow</h2>
                </div>
                <ul>
                    <li className="login-header"> <a href="/authentication/login">Login</a> </li>
                    <li>||</li>
                    <li className="signup-header"> <a href="/authentication/signup">Signup</a> </li>
                    <li>||</li>
                    <li className="about-header">About</li>
                </ul>
            </header>
        </>
    )
}
export default Header