import {useEffect, useState} from "react"
import axios from "axios"

const produtos = () => {

    const [Produtos, setProducts] = useState([])

    useEffect(()=>{
        ListProducts()

    },)

    const ListProducts = async () => {
        const response = await axios.get("mysql://root:@localhost:3306/banconestdev")
        setProducts(response.data)
        console.log(response)
        return(response.data) 
    }
    ListProducts()

    return(
        <div>
            <h1> Produtos </h1>
            {produtos.map((produto)=>(
                <div> {produto.nome} </div>  
            ))}
        </div>
        )
}
export default produtos