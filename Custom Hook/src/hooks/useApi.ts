import { useEffect, useState } from "react"

const useApi = <A>(apiFunc:Function,isDelayed:boolean = false) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<A>()


const execute = async(params?:any) =>{
    setLoading(true)
    try{
        let data = await apiFunc(params);
        setLoading(false)
        setData(data)
    }catch(err){
        setError(true)
    }
}

useEffect(()=>{
    if(!isDelayed){
        execute()
    }
},[isDelayed])

return {loading, error, data, execute}

}
export default useApi