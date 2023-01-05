import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const ListProducts = () => {

    const [produtos, setProdutos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        recuperarProdutos()
    }, [])

    const recuperarProdutos = async () => {
        const resposta = await axios.get('http://localhost:3001/products')
        setProdutos(resposta.data)
    }

    const deletarProduto = async (id) => {
        const resposta = await axios.delete(`http://localhost:3001/product/delete/${id}`)
        setProdutos(resposta.data)
        navigate('/products')
        
        
    }

    const preencheTabela = () => {
        return produtos.map((produto) => (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>{produto.createdAt}</td>
                <td>
                    <Link to={`/product/update/${produto.id}`} produto={produto}>
                        <button>Editar</button>
                    </Link>
                    <button onClick={() => deletarProduto(produto.id)}>Excluir</button>
                </td>
            </tr>
          ))
    }

    return (
        <div>
            <h1>Produtos</h1>
            <div>
                <Link to="/products/create">
                    <button>
                        Cadastrar
                    </button>
                </Link>
            </div>
            {produtos.length > 0 ? <table>
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome do produto</td>
                        <td>Descrição</td>
                        <td>Preço</td>
                        <td>Criado em:</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {preencheTabela()}
                </tbody>
            </table> : "Carregando produtos..."}
            
        </div>
    )
}

export default ListProducts