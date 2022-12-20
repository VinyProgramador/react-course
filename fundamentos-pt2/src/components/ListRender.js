import React from 'react'
import { useState } from 'react'

export const ListRender = () => {
    const [list] = useState(["Viny", "Mauricio", "Diogo"]);

    return (
        <div>
            <ul>
                {list.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
