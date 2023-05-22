import React, { useState } from 'react';

const Insert = ({onSubmit}) => {
    const [colaborador, setColaborador] = useState({
        id: 0,
        nombre: '',
        correo: '',
    });

    const handleChange = (e) => {
        setColaborador({
            ...colaborador,
            [e.target.id]: e.target.value,
        });

    }


    const saveColaborador = (e) => {
        e.preventDefault();
        if(!colaborador.nombre || !colaborador.correo){
            alert('Los campos no pueden estar vacios');
            return;
        }
    
        onSubmit(colaborador);
}
     return (
        <>
            <form onSubmit = {saveColaborador}>
                <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder='Ingresa el nombre del colaborador' id="nombre"  onChange={handleChange}/>
                    
                </div>
                <div className="mb-3">
                    <label for="correo" className="form-label">Correo</label>
                    <input type="email" className="form-control" placeholder='Ingresa el correo del colaborador'id="correo" onChange={handleChange} />
                    
                </div>
                
                <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
            </form>

        </>
    )
}

export default Insert