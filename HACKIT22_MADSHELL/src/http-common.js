import axios from "axios"
export default axios.create({
    baseURL:"http://192.168.0.199:8000/api/v1",
    headers:{
        "Content-type":"application/json"
    }
})