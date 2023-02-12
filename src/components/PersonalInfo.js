
import React from 'react'

function PersonalInfo({data,setData}) {
  return (
    <div className='personal-info-container'>
        <input type='text' placeholder='First Name' value={data.firstname} onChange={(event)=>{setData({...data, firstname: event.target.value}) }}></input>
        <input type='text' placeholder='Last Name' value={data.lastname} onChange={(event)=>{setData({...data, lastname: event.target.value}) }}></input>
        <input type='text' placeholder='Username' value={data.username} onChange={(event)=>{setData({...data, username: event.target.value}) }}></input>
   </div>
  )
}

export default PersonalInfo