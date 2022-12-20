
import { useState } from "react";

export const ManageData = () => {
    let someData = 10;
    const[number, setNumber] = useState(15);
    return (
        <div>
            <div>
                <p>Valor da variavel "number": {number}</p>               
                <button onClick={() => setNumber(30)}>Mudar Varivel</button>
            </div>
        </div>
    )
}
