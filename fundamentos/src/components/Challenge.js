const Challenge = () =>{
    const a = 5;
    const b = 3;

    return(
        <div>
            <br/>
            <span>Primeiro Numero: {a}</span>
            <br/>
            <span>Segundo Numero: {b}</span>
            <br/>
            <button onClick={()=> alert("A soma dos dois numeros é de "+(a+b))}>
                Clique para somar
            </button>
        </div>
    )
}

export default Challenge;