import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListProducts = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        recuperarProdutos()
    }, [])

    const recuperarProdutos = async () => {
        const resposta = await axios.get('http://localhost:3001/products')
        setProdutos(resposta.data)
    }

    const preencheTabela = () => {
        return produtos.map((produto) => (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.valor}</td>
                <td>
                    <Link to={`/products/edit/${produto.id}`}>
                        <button>Editar</button>
                    </Link>
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
                        <td>Valor</td>
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