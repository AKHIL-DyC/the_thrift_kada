"use client"
import React from 'react'
import { useEffect ,useState} from 'react'
const Page = () => {
  const [jeans,setjeans]=useState([]);
    useEffect(()=>{
      const fetchjeans=async()=>{
        const response=await fetch("https://the-thrift-kada.vercel.app/api/showjeans")
        const data= await response.json();
        setjeans(data);
      }
      fetchjeans();
    },[]
    )
  return (

    <div>
      {jeans.map((jean)=>(<>
        <div>{jean.title}</div>
        <div>{jean.price}</div>
      </>))}
      {console.log(jeans)}
      </div>
  )
}

export default Page