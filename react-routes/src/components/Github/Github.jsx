import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
   const data= useLoaderData()
    
    // const [data,setdata]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((data)=>setdata(data))
        
    // },[])
  return (
    <>
    <div>User Follower : {data.followers}</div>
    <img src={data.avatar_url}alt="" />
    </>
  )
}

export default Github
export const gitLoader = async()=>{
   const res = await fetch('https://api.github.com/users/hiteshchoudhary')
   return res.json()
}