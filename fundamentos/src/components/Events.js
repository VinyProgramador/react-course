const Events= () =>{
    const hendleMyEvent = () =>{
        alert("Meu primeiro evento em React!")
    }

    return(
        <div>
            <div>
                <button onClick={hendleMyEvent}>
                    Clique aqui para ver um evento
                </button>
            </div>
        </div>
    )
}

export default Events;