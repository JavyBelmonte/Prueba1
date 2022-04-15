import React, {useState, Fragment} from "react";

const Lista = () => {
    const [arrayNumero, setarrayNumero] = useState([1,2,3,4,5])
    const [numero, setNumero] = useState(6)

    const agregarElemento = () => {
        //console.log('Click')
        setNumero(numero + 1)
        setarrayNumero([
            ...arrayNumero,
            numero
        ])
    }
    return ( 
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) =>
                    <p key={index} >{item} - {index}</p>
                )
            }
        </Fragment>
     );
}
 
export default Lista;