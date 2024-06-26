// import { Children } from 'react'
import {Navigate} from 'react-router-dom'

function ProtectedRoute({children}) {

    const token = sessionStorage.getItem('token')

    if(!token){
        sessionStorage.clear()
        localStorage.clear()
    }
  return token ? children : <Navigate to='/' />
}

export default ProtectedRoute