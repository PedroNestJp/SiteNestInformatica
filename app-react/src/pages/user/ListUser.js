import api from "../../service/Api"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ListUser = () => {

    const [usuarios, setUser] = useState([])

    useEffect(() => {
        recuperarUsuarios()
    }, [])

    const recuperarUsuarios = async () => {
        const resposta = await api.get('http://localhost:3001/users')
        setUser(resposta.data)
    }

    const preencheTabela = () => {
        return usuarios.map((user) => (
            <tr>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.cpf}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/user/edit/${user.id}`}>
                        <button>Editar</button>
                    </Link>
                </td>
            </tr>
          ))
    }

    return (
        <div>
            <h1>Users</h1>
            <div>
                <Link to="/user/create">
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
            </table> : "Carregando usuarios..."}
            
        </div>
    )
}

export default ListUser