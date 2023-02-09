import { Children, createContext, useState } from "react";

export default CounterContex = createContext();


//Criar provider
export const CounterContextProvider = ({children}) => {
    const [counter, setCount] = useState();

    return {
        
    }
}


