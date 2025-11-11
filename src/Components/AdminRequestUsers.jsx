import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../Services/llamados'

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
    <div>
        
        <div> <h3>Users</h3> </div>
        
            <div className='containerAdminUsers'>
                <ul className='AdminUlUsers'>
                    {users.map(user => (
                        <li className='AdminLiUsers' key={user.id}>
                            <h5 className='UsernameAdminPage'> {user.nombre} </h5>
                            <span className='infoUserAdminPage'> {user.nombre} </span>
                            <span className='infoUserAdminPage'> {user.email} </span>
                            <span className='infoUserAdminPage'> {user.location} </span>
                            <span className='infoUserAdminPage'> {user.typeUser} </span>
                            <div>
                                <button onClick={()=> userDelete(user.id)}>delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    </div>
  )
}

export default AdminRequestUsers