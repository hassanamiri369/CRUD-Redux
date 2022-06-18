import React from "react"
import { GetDetailsById } from "../api/axiosRequest"


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [detailsById , setDetailById] = React.useState({})
    
    const GetDetailsByHooks = (requestId)=>{
        return GetDetailsById(requestId)
        .then((res)=> {
            console.log("response date is : " , res)
            setDetailById(res)
        })
}


    React.useEffect(()=> {
        GetDetailsByHooks(props)
    } , [])

  
    return [detailsById]
}