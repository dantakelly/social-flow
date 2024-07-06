import Image from "next/image"
import Dashboardcss from "./Dashboard.css"
import Link from "next/link"
import { useState } from "react"

import homenav from "./assets/Home.svg"
import dialoguenav from "./assets/Dialogue.svg"
import piechartnav from "./assets/Pie chart.svg"
import searchnav from "./assets/Loupe.svg"
import calendernav from "./assets/Calendar.svg"
import settingsnav from "./assets/Setting.svg"

const Dashboard = () => { 

    const [activeNav, setActiveNav] = useState(null);

    const handleNavClick = (nav) => {
        setActiveNav(nav === activeNav ? null : nav);
    }

    const isNavActive = (nav) => {
        return nav === activeNav;
    }

    const activeStyle = { 
        borderRadius: '5px',
        borderBottom: 'solid 2px #651FE0'
    }

    return(
        <>
            <div className="dashboard-container">
                <div className="dashboard-items">
                    <div className="user-img-dashboard">
                        {/* <Image src={} alt="user-img"></Image> */}
                    </div>
                    <div className="dashboard-navigations">
                    
                       <Link href="/dashboard/home"> <Image className="img-home-dashboard"
                            style={isNavActive(homenav) ? activeStyle : {}} 
                            onClick={() => handleNavClick(homenav)} 
                            src={homenav} 
                            alt=""
                        /> </Link>

                        <Link href="/dashboard/messages"> <Image 
                            style={isNavActive(dialoguenav) ? activeStyle : {}} 
                            onClick={() => handleNavClick(dialoguenav)} 
                            src={dialoguenav} 
                            alt=""
                        /> </Link>

                        <Link href="/"> <Image 
                            style={isNavActive(piechartnav) ? activeStyle : {}} 
                            onClick={() => handleNavClick(piechartnav)} 
                            src={piechartnav} 
                            alt=""
                        /> </Link>

                        <Link href="/"> <Image 
                            style={isNavActive(searchnav) ? activeStyle : {}} 
                            onClick={() => handleNavClick(searchnav)} 
                            src={searchnav} 
                            alt=""
                        /> </Link>

                        <Link href="/"> <Image 
                            style={isNavActive(calendernav) ? activeStyle : {}} 
                            onClick={() => handleNavClick(calendernav)} 
                            src={calendernav} 
                            alt=""
                        /> </Link>

                        <Link href="/dashboard/settings"> <Image 
                            style={isNavActive(settingsnav) ? activeStyle : {}} 
                            onClick={() => handleNavClick(settingsnav)} 
                            src={settingsnav} 
                            alt=""
                        /> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard
