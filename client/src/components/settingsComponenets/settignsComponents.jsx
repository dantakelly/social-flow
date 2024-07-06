"use client"

import { useState } from "react"
import SettingsCSS from "./SettingsCmpnts.css"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Cookies from "js-cookie"


export default function SettingsComponents() { 

    const [isLoggedOut, setIsLoggedOut] = useState("")
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const LogoutFunction = () => { 
        
        Cookies.remove('authToken')
        router.push('/authentication/login')
    }

    return ( 
        <>
             <h1>Settings Page</h1>
             
             <div className="logoutsection">
                <button onClick={LogoutFunction} className="logoutButon">Logout</button>
             </div>
        </>
    )
}
