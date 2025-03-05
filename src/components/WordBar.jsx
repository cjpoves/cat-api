import { useState } from "react";
import "./WordBar.css"

export const WordBar = () => {
   
    const [texto, setTexto] = useState("")
    const [fact, setFact] = useState("")
    const [alerta, setAlerta] = useState('')
    const [imagen, setImagen] = useState("")
 
    const urlFact = "https://catfact.ninja/fact";
    const urlImagen = `https://cataas.com/cat/says/%20${texto}?position=center&font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none`

    const getNewFact = () => {
        fetch (urlFact)
        .then(res => res.json())
        .then(data => setFact(data.fact))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim()) {
            setTexto("");
            getNewFact()
            setImagen(urlImagen)

        } else {
            setAlerta('Ingrese una palabra')
        
            setTimeout(() => {
              setAlerta('')
         }, 2000)
        }
    }

    return(
        <>
        <h2 className="banner">Gatitos</h2>
        <form className='form' onSubmit={handleSubmit}>
        <input
         type='text'
         placeholder="Ingrese palabra"
         value={texto}
         onChange={(e) => setTexto(e.target.value)} ></input>
        <button type='submit'>Recibir gatito</button>
        {alerta && <p className='alert'>{alerta}</p>}
    </form>

    {fact && <p className="fact">{fact}</p> }
     <img src={imagen}/>
        </>
    )
}