import axios from "axios"

export const getData = async() =>{
    let res = await axios.get(`http://localhost:8080/todos`)
    return res.data
}


export const postData = async(message: string) =>{
    let res = await axios.post(`http://localhost:8080/todos`,{message})
    return res.data
}