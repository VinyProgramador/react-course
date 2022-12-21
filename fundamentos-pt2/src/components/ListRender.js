import React from 'react'
import { useState } from 'react'

export const ListRender = () => {
    const [list] = useState(["Viny", "Mauricio", "Diogo"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Marcos", age: 45 },
        { id: 2, name: "Paulo", age: 32 },
        { id: 3, name: "Pedro", age: 21 },
    ]);

    const deletarRandomicamente = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(randomNumber);
            return prevUsers.filter((user)=> randomNumber !== user.id);
        })
    }
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <br />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        Nome: {user.name}, Idade: {user.age}
                    </li>
                ))}
            </ul>

            <button onClick={deletarRandomicamente}>Deletar usuario Randomicamente</button>
        </div>
    )
}
