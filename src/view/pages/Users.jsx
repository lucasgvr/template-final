import React, { useEffect, useState } from 'react'

import axios from 'axios'

import '../styles/userTable.scss'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8000')
            setUsers(response.data)
        }

        fetchUsers()
    }, [])

  return (
    <div className='usersTable'>
        <h1>Users</h1>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>CPF</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => ( 
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.cpf}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Users