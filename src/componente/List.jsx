

const List = ({colaboradores,busquedaColb}) => {

    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
        const searchValue = busquedaColb.toLowerCase();
        return (
           colaborador.nombre.toLowerCase().includes(searchValue) || 
           colaborador.correo.toLowerCase().includes(searchValue) 
        )        
    });

    return (
        <>
        <table className="table">
        <thead>
          <tr>
            
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            
          </tr>
        </thead>
        <tbody>
          {colaboradoresFiltrados.map((colaborador) => {

            return (
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
              </tr>
            );
          }
        )}
                  
        </tbody>
      </table>
        </>
        
    )
}

export default List