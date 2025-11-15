import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../Services/llamados'
import AdminUsersChart from './AdminUsersChart'
import "../Styles/AdminRequestUsers.css";

function AdminRequestUsers() {
        const [users, setUsers] = useState([])
        const [reload, setReload] = useState(false)

        useEffect (() => {
            async function list() {
                const dataUsers = await getUsers()
                setUsers(dataUsers)
                console.log(dataUsers)
            }
        list()
        }, [reload])

        async function userDelete(id) {
            await deleteUser(id)
            setReload(!reload)
        }
            
        
  return (
    <div className='containerAllRequestUsers'>
        
        <div className='titleUsersRequest'>
            <h3 className='titleUsersRequest'>Users</h3> 
        </div>
        
            <div className='containerAdminUsers'>
                <ul className='AdminUlUsers'>
                    {users.map(user => (
                        <li className='AdminLiUsers' key={user.id}>
                            <h5 className='UsernameAdminPage'> {user.nombre} </h5>
                            <span className='infoUserAdminPage'>Name: {user.nombre} </span><br />
                            <span className='infoUserAdminPage'>Email: {user.email} </span><br />
                            <span className='infoUserAdminPage'>Location:  {user.location} </span><br />
                            <span className='infoUserAdminPage'>TypeUser: {user.typeUser} </span><br />
                            <span className='infoUserAdminPage'>Creation Date: {user.userCreateDate} </span><br />

                            <div><br />
                                <button onClick={()=> userDelete(user.id)}>delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='containerChartUsers'>
                <AdminUsersChart/>
            </div>
    </div>
  )
}

export default AdminRequestUsers