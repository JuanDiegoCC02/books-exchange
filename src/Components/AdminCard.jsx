import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import AdminRequestUsers from './AdminRequestUsers';
import AdminRequestBooks from './AdminRequestBooks';
import "../styles/AdminCard.css"


function AdminCard() {
    const [activeChange, setActiveChange]= useState("users")
  return (
    <div>
        <div><h3>Administration</h3></div>

       
           <nav className='NavAdminSelect'>
            <ul className='UlAdminSelect'>
                <li className={activeChange === "users"? "active-change" : ""}
                onClick={()=> setActiveChange ("users")}>"Users"</li>

                <li className={activeChange === "books"? "active-change" : ""}
                onClick={()=> setActiveChange ("books")}>"Books"</li>
            </ul>
           </nav>
        
        <div className='containerRequestAdmin'>
            {activeChange === "users" && <AdminRequestUsers/>}
             {activeChange === "books" && <AdminRequestBooks/>}
        </div>
    </div>
  )
}

export default AdminCard