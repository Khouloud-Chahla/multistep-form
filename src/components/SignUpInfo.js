
import React from 'react'

function SignUpInfo({data,setData}) {
  return (
    <div className='sign-up-container'>
        <input type='text' placeholder='Email' value={data.email} onChange={(event)=>{setData({...data, email: event.target.value}) }} ></input>
        <input type='text' placeholder='Password' value={data.password} onChange={(event)=>{setData({...data, password: event.target.value}) }} ></input>
        <input type='text' placeholder='Confirm Password' value={data.pwd} onChange={(event)=>{setData({...data, pwd: event.target.value}) }} ></input>
    </div>
  )
}

export default SignUpInfo