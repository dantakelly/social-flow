"use client"

import dashboardlayoutcss from "./dashboardlayout.css"
import Dashboard from "../dashboardComponents/dashboard";


export default function Layout({ children }) {
    return (
      <>
        <Dashboard />
        <section className="children-of-dashboard-layout">{children}</section>
      </>
    );
  }
  

//   <>
//   <Dashboard /> 
//   <section className="children-of-dashboard-layout">
//     {children}
//   </section>
//  </>