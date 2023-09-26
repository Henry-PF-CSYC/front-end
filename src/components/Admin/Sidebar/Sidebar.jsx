import "./Sidebar.css"

const SideBar = () =>{
    return(
        <section className="bg-white" id="container">

            <div className="m-2">
                <span className="brand-name fs-4">Administración</span>
            </div>

            <hr className="text-dark"/>

            <div className="list-group list-group-flush">

                <a href="/admin/dashboard" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-speedometer2 fs-5 me-2"></i>
                    <span className="fs-5">Dashboard</span>
                </a>

                <a href="/admin/servicesAdm" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-nut fs-5 me-2"></i>
                    <span className="fs-5">Servicios</span>
                </a>

                <a href="/admin/usuarios" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-people fs-5 me-2"></i>
                    <span className="fs-5">Usuarios</span>
                </a>

                <a href="/admin/clasificados" className="list-group-item list-group-item-action my-2">
                    <i class="bi bi-bag-heart-fill fs-5 me-2"></i>
                    <span className="fs-5">Clasificados</span>
                </a>

                <a href="/admin/novedades" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-calendar-check fs-5 me-2"></i>
                    <span className="fs-5">Novedades</span>
                </a>

                <a href="/" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-power fs-5 me-2"></i>
                    <span className="fs-5">Salir</span>
                </a>

            </div>


        </section>)
}

export default SideBar