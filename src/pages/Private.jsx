import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom'

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext);


    if (loading) {
       return <div className='text-center'>
        <span className="loading loading-spinner loading-lg"></span>
       </div>
      
    }

    if (user) {
        return children
    }
  return (
   
    <Navigate to='/login'></Navigate>

   
  )
}

export default Private
