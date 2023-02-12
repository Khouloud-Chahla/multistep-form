import React from 'react'

function OtherInfo({data,setData}) {
  return (
    <div className='other-info-container'>
        <input type='text' placeholder='Nationality' value={data.nationality} onChange={(event)=>{setData({...data, nationality: event.target.value}) }}></input>
        <input type='text' placeholder='Other..' value={data.other} onChange={(event)=>{setData({...data, other: event.target.value}) }}></input>
    
    </div>
  )
}

export default OtherInfo