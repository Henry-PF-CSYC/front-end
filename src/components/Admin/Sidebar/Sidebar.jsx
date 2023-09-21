import "./Sidebar.css"

const SideBar = () =>{
    return(
        <section className="bg-white" id="container">

            <div className="m-2">
                <span className="brand-name fs-4">Administrador</span>
            </div>

            <hr className="text-dark"/>

            <div className="list-group list-group-flush">

                <a href="/admin/dashboard" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-speedometer2 fs-5 me-2"></i>
                    <span className="fs-5">Dashboard</span>
                </a>

                <a href="/admin/productos" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-table fs-5 me-2"></i>
                    <span className="fs-5">Productos</span>
                </a>

                <a href="/admin/reclamos" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-clipboard fs-5 me-2"></i>
                    <span className="fs-5">Reportes</span>
                </a>

                <a href="/admin/usuarios" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-people fs-5 me-2"></i>
                    <span className="fs-5">Usuarios</span>
                </a>

                <a className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-power fs-5 me-2"></i>
                    <span className="fs-5">Salir</span>
                </a>

            </div>


        </section>)
}

export default SideBar