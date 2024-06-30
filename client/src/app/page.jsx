"use client"
import Link from "next/link"
import Image from "next/image"
import Header from "../components/header/header"

import herocss from "../components/hero/hero.css"
import heroImg from "../components/hero/MESSAGE APP IMG Hero.png"

function Home() { 

    return(
       <>
       <Header/>
        <div className="hero-container">
            <div className="first-left-hero">
                <h1>
                    Connect With Others </h1>
                <p>
                    Welcome to our chat app, where connections are just a click away! Join our vibrant <br/>
                    community and engage in meaningful conversations with people from all walks of life. Share <br/>
                    your thoughts, ideas, and experiences, and discover new perspectives and friendships. Our <br/>
                    chat app is the perfect platform to expand your social circle, learn, and grow. So why wait? <br/>
                    Join a chat and start connecting today!
                </p>
                <div className="buttons-hero">
                    <Link href="/authentication/login"> <button>Login</button> </Link>
                    <Link href="/authentication/signup"> <button>Signup</button> </Link>
                </div>
            </div>
            <div className="first-right-hero">
                <div className="box-to-fit-img-hero">
                    {/* <Image src={heroImg} alt="hero image"></Image> */}
                </div>
            </div>
        </div>
       </>
    )
}
export default Home