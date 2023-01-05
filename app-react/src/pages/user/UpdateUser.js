import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'

const UpdateUser = (props) => {
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCell] = useState("")
    const [senha, setPassword] = useState("")
    const [repetirSenha, setRePassword] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        buscarUser()
    })

    const buscarUser = async () => {
        const resposta = await axios.get(`http://localhost:3001/user/update${id}`)
        setNomeCompleto(resposta.data.nomeCompleto)
        setCpf(resposta.data.cpf)
        setEmail(resposta.data.email)
        setCell(resposta.data.celular)
        setPassword(resposta.data.senha)
        setRePassword(resposta.data.repetirSenha)
        
    }

    const editarUser = async (event) => {
        event.preventDefault()
        const user = {
            nomeCompleto: nomeCompleto,
            cpf: cpf,
            email: email, 
            celular: celular, 
            senha: senha,
            repetirSenha: repetirSenha
        }
        const resposta = await axios.put(`http://localhost:3001/user/update/${id}`, user)
        if (resposta.status === 200) {
            navigate("/users");
        }
    }

    return (
        <div>
            <h1>Atualizar usuário</h1>
            <Link to="/users">
                <button>
                    Voltar
                </button>
            </Link> 
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Nome do usuário" 
                    value={nomeCompleto}
                    onChange={(event) => setNomeCompleto(event.target.value)}
                 />
            </div>
            <div>
                <label>CPF:</label>
                <input 
                    type="text" 
                    name="cpf" 
                    placeholder="Digite seu cpf" 
                    value={cpf} 
                    onChange={(event) => setCpf(event.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="Email" 
                    placeholder="Digite seu Email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
            </div>
            <div>
                <label>Celular:</label>
                <input 
                    type="tel" 
                    name="Cell" 
                    placeholder="Digite seu Celular" 
                    value={celular}
                    onChange={(event) => setCell(event.target.value)}
                    />
            </div>
            <div>
                <label>Senha:</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Digite sua Senha" 
                    value={senha}
                    onChange={(event) => setPassword(event.target.value)}
                    />
            </div>
            <div>
                <label>Repetir Senha:</label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Repita a Senha" 
                  value={repetirSenha}
                  onChange={(event) => setRePassword(event.target.value)}
                    />
            </div>
            <button onClick={(e) => editarUser(e)}>Atualizar</button>
        </div>
    )
}

export default UpdateUser