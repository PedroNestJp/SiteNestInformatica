import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'

const EditProduct = (props) => {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        buscarProduto()
    })

    const buscarProduto = async () => {
        const resposta = await axios.get(`http://localhost:3001/products/${id}`)
        setNome(resposta.data.nome)
        setDescricao(resposta.data.descricao)
        setValor(resposta.data.valor)
    }

    const editarProduto = async (event) => {
        event.preventDefault()
        const produto = {
            titulo: nome,
            descricao: descricao,
            valor: valor 
        }
        const resposta = await axios.put(`http://localhost:3001/product/update/${id}`, produto)
        if (resposta.status === 200) {
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
                <label>Preço:</label>
                <input 
                    type="text" 
                    name="preco" 
                    placeholder="Preço do produto" 
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                />
            </div>
            <button onClick={(e) => editarProduto(e)}>Atualizar</button>
        </div>
    )
}

export default EditProduct