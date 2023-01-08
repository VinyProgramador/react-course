import React from 'react'
import { useState } from 'react'
import './MyForm.css'
const MyForm = ({ user }) => {
    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : user.name = '');
    const [email, setEmail] = useState(user ? user.email : user.email = '');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    }
    // console.log(name)
    // console.log(email)

    const hendleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviou o form sem recarregar a página..');
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);

        // limpar form

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }
    return (
        // Envio de form
        <form onSubmit={hendleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' placeholder='Digite seu nome..'
                    onChange={handleName} value={name} />
            </div>
            {/* Label envolvendo input */}
            <label>
                <span>Email</span>
                <input type="email" name="email" placeholder='Digite seu email..'
                    onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            {/* TextArea */}

            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do user..' 
                onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* Selects */}
            <label>
                <span>Funçao do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar.." />

        </form>
    )
}

export default MyForm