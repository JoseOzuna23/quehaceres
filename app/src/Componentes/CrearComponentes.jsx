import React, { useState } from 'react'


const CrearComponentes = ({ lista, setLista }) => {

    const [nombre, setNombre] = useState('');


    const enviarSubmit = (e) => {
        e.preventDefault();
        const nuevosDatosPersonales = { nombre };
        setLista([...lista, nuevosDatosPersonales]);
        setNombre('');
    }


    return (
        <div>
            <form onSubmit={enviarSubmit} className='m-3'>
                <label className='m-3'> Escribir Texto </label>
                <input  type='text' value={nombre} onChange={(e) => setNombre(e.target.value)}  ></input>
                <button type='submit' className='m-3 btn btn-success'> Crear </button>
            </form>

        </div>
    )
}

export default CrearComponentes
