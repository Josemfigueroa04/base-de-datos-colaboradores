
const Nav = ({onSearchChange}) => {

    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    }

    return (
            <>
            <nav className="navbar bg-body-tertiary navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white">Base de Datos Colaboradores</a>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange}  />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
            </>
            
    )
}

export default Nav;