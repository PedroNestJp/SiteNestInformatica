import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

const EditProdut = () => {

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const { id } = useParams()

    useEffect(() => {
        buscarProduto()
        updateProduct()
    }, [])

    const buscarProduto = async () => {
        const resposta = await axios.get(`http://localhost:3001/products/${id}`)
        setNome(resposta.data.nome)
        setDescricao(resposta.data.descricao)
        setValor(resposta.data.valor)
    }

    const updateProduct = async (event) => {
        event.preventDefault()
        const produto = {
            nome: nome,
            descricao: descricao,
            valor: valor 
        }
        const resposta = await axios.post(`http://localhost:3001/product/update/${id}`, produto)
        if (resposta.status == 200) {
            navigate("/products");
        }
    }

    return (
        <div>
            <h1>Editar produto</h1>
            <Link to="/products">
                <button>
                    Voltar
                </button>
            </Link> 
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Nome do produto" 
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                 />
            </div>
            <div>
                <label>Descrição:</label>
                <input 
                    type="text" 
                    name="descricao" 
                    placeholder="Descrição do produto" 
                     value={descricao} 
                     onChange={(event) => setDescricao(event.target.value)}
                />
            </div>
            <div>
                <label>Valor:</label>
                <input 
                    type="text" 
                    name="preco" 
                    placeholder="Preço do produto" 
                     value={valor}
                     onChange={(event) => setValor(event.target.value)}
                />
            </div>
            <button  onClick={(e) => updateProduct(e)} >Atualizar</button>
        </div>
    )
}

export default EditProdut