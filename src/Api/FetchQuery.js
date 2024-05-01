import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchQuery = ({url,token}) => {
    const [data,setData]=useState("")
    const [loading,setLoading] = useState("")
    const [failed,setfailed]  = useState("")
    useEffect(()=>{
        (async()=>{
            setLoading(true)
        try{


        const Response= await axios.get(url)
        setData(Response.data)

        }catch(err){

            setfailed(err.response)
        }
    
    setLoading(false)
    }
        )()
    },[])
  return [data,failed,loading]
}

export default FetchQuery


// const  [ ,failed,loading] =FetchQuery("urlr")

