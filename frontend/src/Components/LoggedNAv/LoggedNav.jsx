import React from 'react'
import { LOGGED_IN, TOKEN, USERDATA, USERD_KEYS } from '../../constants'
import { useNavigate } from 'react-router-dom'

function LoggedNav() {

  const user = JSON.parse(localStorage.getItem(USERDATA))
const navigate = useNavigate()
  const LogOut= ()=>{
    localStorage.removeItem(TOKEN)
    localStorage.removeItem(USERDATA)
    localStorage.removeItem(LOGGED_IN)
    navigate("/")
  }
  //console.log(user)
  return (
    <div className='w-full border'>
      <div className='w-5/6  my-5 flex justify-between items-center  mx-auto'>
        <h1 className='text-3xl font-bold'>Welcome, {user[USERD_KEYS.NAME]} !!</h1>
        <div className='flex'>
          <button  className="px-5 mr-5 py-2 bg-red-500 text-white rounded-xl" type="button" onClick={LogOut}>Log Out</button>
        <img src={user[USERD_KEYS.PROFILE_URL]} style={{borderRadius:"50%",width:'60px'}} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default LoggedNav
