import { Caixa, Caixinha1, Caixinha2, H1, P, Btn, Btn2, LabelsInputs, Label, Input } from "../Styles/Cadastro.js";
import React from "react";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [verifica_senha, setVerificaSenha] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading("Carregando...");

        try {
                await axios.post('http://localhost:3333/eventos/usuarios/cadastro', {
                message
            });
            setMessage('Usuário cadastrado com sucesso!');
            setLoading('')
            setEmail('');  
            setSenha('');  
            setVerificaSenha('');  
        } catch (error) {
            console.log('Erro ao cadastrar usuário:', error);
            setMessage('Erro ao cadastrar usuário');
        }
    };

    return (
        <Caixa>
            <Caixinha1>
                <H1>Bem vindo(a) de volta!</H1>
                <P>Faça login na plataforma para poder criar ou se increver em eventos incríveis.</P>
                <Btn to='/PagLogin'>ENTRAR</Btn>
            </Caixinha1>

            <Caixinha2 className="caixa" onSubmit={handleSubmit}>
                <H1>Faça Cadastro no codemarket</H1>
                <LabelsInputs>
                    <Label htmlFor='email' controlId="email">Email:</Label>
                    <Input
                        type='text'
                        id='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <Label htmlFor='senha' controlId="senha">Senha:</Label>
                    <Input
                        type='password'
                        id='senha'
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                        required
                    />

                    <Label htmlFor='verifica_senha' controlId="verifica_senha">Repetir senha:</Label>
                    <Input
                        type='password'
                        id='verifica_senha'
                        value={verifica_senha}
                        onChange={(event) => setVerificaSenha(event.target.value)}
                        required
                    />
                    <Btn2 type="submit">CADASTRAR</Btn2>
                </LabelsInputs>
                {message ? <p style={{color: "#ffff", backgroundColor: "none", display: "flex",  fontSize: "15px", marginTop: "10px"}}>{message}</p> 
                : <p style={{color: "#ffff", backgroundColor: "none", display: "flex",  fontSize: "15px", marginTop: "10px"}}>{loading}</p>}
            </Caixinha2>
        </Caixa>
    );
}

export default Register;
