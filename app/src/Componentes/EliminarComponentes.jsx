import React, { useState } from 'react'

const EliminarComponentes = ({ lista, setLista }) => {

    const [tachados, setTachados] = useState([]);

    const checkbox = (index) => {
        if (tachados.includes(index)) {
            setTachados(tachados.filter((t) => t !== index));
        } else {
            setTachados([...tachados, index]);
        }
    };


    const eliminar = (index) => {
        const nuevosDatos = lista.filter((list, i) => i !== index);
        setLista(nuevosDatos)
        setTachados(tachados.filter((t) => t !== index));
    };
    return (

        <div>

            {lista.map((list, index) => (
                <p key={index} className='m-3'>
                    <span style={{ textDecoration: tachados.includes(index) ? 'line-through' : 'none' }} className='m-3'> {list.nombre} </span>
                    <input type="checkbox" checked={tachados.includes(index)} onChange={() => checkbox(index)} />                    
                    <button type='button' onClick={() => eliminar(index)} className='btn btn-danger m-3'> Eliminar</button>
                </p>
            ))}

        </div>


    )
}

export default EliminarComponentes
