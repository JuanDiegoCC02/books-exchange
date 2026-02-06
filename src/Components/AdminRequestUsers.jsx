import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers, updateUsers } from '../Services/llamados'
import AdminUsersChart from './AdminUsersChart'
import "../Styles/AdminRequestUsers.css";

function AdminRequestUsers() {
        const [users, setUsers] = useState([])
        const [reload, setReload] = useState(false)
        const [editingId, setEditingId] = useState(null)
        const [editName, setEditName] = useState("")
        const [editEmail, setEditEmail] = useState("")
        const [editLocation, setEditLocation] = useState("")
        const [editTypeUser, setEditTypeUser] = useState("")

        const startEdit = (user)=>{
            if (editingId === user.id) {
                setEditingId(null)                
            } else {
                setEditingId(user.id)
                setEditName(user.nombre)
                setEditEmail(user.email)
                setEditLocation(user.location)
                setEditTypeUser(user.typeUser)
            }
        }

        function newName(e) {
            setEditName(e.target.value)
        }
        
        function newEmail(e) {
            setEditEmail(e.target.value)
        }
        
        function newLocation(e) {
            setEditLocation(e.target.value)
        }
        
        function newTypeUser(e) {
            setEditTypeUser(e.target.value)
        }

         
        async function userDelete(id) {
            await deleteUser(id)
            setReload(!reload)
        }

        async function edit(id) {
            const userEdit ={
                "nombre": editName,
                "email": editEmail,
                "location": editLocation,
                "typeUser": editTypeUser
            }
            await updateUsers(userEdit, id)
            setReload(!reload)
        }

        useEffect (() => {
            async function list() {
                const dataUsers = await getUsers()
                setUsers(dataUsers)
                console.log(dataUsers)
            }
        list()
        }, [reload])

       
            
        
  return (
    <div className='containerAllRequestUsers'>
        
        <div className='titleUsersRequestContainer'>
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
                                <button className='btnDeleteUser' onClick={()=> userDelete(user.id)}>delete</button>
                                <button className='btnEditUser' onClick={()=> startEdit(user)}>
                                    {editingId === user.id? 'cancel' : 'edit'} 
                                </button>
                            </div>
                            {editingId === user.id && 
                            <>
                            <div className='containerEditUser'>
                                <input className='inpEditUser' type="text" onChange={newName} placeholder='Name' value={editName} />
                                <input className='inpEditUser' type="text" onChange={newEmail}  placeholder='Email' value={editEmail} />
                                <input className='inpEditUser' type="text" onChange={newLocation} placeholder='Location' value={editLocation} />
                                <input className='inpEditUser' type="text" onChange={newTypeUser} placeholder='Type User' value={editTypeUser} />
                                <button className='btnSaveEdit' onClick={()=> edit(user.id)}>Save</button>
                            </div>
                            </>
                            }
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