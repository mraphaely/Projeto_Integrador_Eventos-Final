import { CaixaLogin, Caixinha1, Caixinha2, H1, P, Btn, Btn2, LabelsInputs, Label, Input } from "../Styles/Login.js"
import React from "react";
import axios from "axios";


const Login = () => {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState('');
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading("Carregando...");

        try {
                await axios.post('http://localhost:3333/eventos/usuarios/login', {
                message
            });
            setMessage('Usuário logado com sucesso!');
            setLoading('')
            setEmail('');  
            setSenha('');  
        } catch (error) {
            console.log(error);
            setMessage('Erro ao fazer login do usuário');
        }
    };

    return(
        <CaixaLogin>
            <Caixinha1>
                <H1>Novo(a) por aqui?</H1>
                <P>Crie sua conta para criar ou descobrir eventos incríveis.</P>

                <Btn to={'/register'}>CADASTRO</Btn>
            </Caixinha1>

            <Caixinha2 className="caixa" onSubmit={handleSubmit}>
                <H1>Faça login no codemarket</H1>
                <LabelsInputs>
                    <Label controlId="email">Email:</Label>
                    <Input 
                    type='email' 
                    id='email' 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />

                    <Label controlId="senha">Senha:</Label>
                    <Input 
                    type='password' 
                    id='senha' 
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    required
                    />
                </LabelsInputs>

                <Btn2 type="submit">ENTRAR</Btn2>
                {message ? <p style={{color: "#ffff", backgroundColor: "none", display: "flex",  fontSize: "15px", marginTop: "10px"}}>{message}</p> 
                : <p style={{color: "#ffff", backgroundColor: "none", display: "flex",  fontSize: "15px", marginTop: "10px"}}>{loading}</p>}
            </Caixinha2>
        </CaixaLogin>

    )
}
export default Login