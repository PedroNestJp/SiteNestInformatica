import {useState} from "react"
import axios from "axios"



const userList = () => {
    const [user, setUser] = useState([])


    const userList = async () => {
        const response = await axios.get("mysql://root:@localhost:3306/banconestdev")
        setUser(response.data)
        console.log(response)
        return(response.data) 
    }
    userList()

    
}
export default userList