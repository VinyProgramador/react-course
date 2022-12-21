import React from 'react'
import { useState } from 'react'

export const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Carlos");

    return (
        <div>
            <div>
                <h3>Isso será exibido?</h3>
                {x && <p>Se x for true sim!</p>}
            </div>
            {name === "Viny" ? (
                <div>
                    <p>O nome é Viny!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("Viny")}>
                Clique aqui
            </button>
        </div>
    );
};
