import "./Sidebar.css"

const SideBar = () =>{
    return(
        <section className="bg-white">

            <div className="m-2">
                <span className="brand-name fs-4">Administración</span>
            </div>

            <hr className="text-dark m-0"/>

            <div className="list-group list-group-flush mt-2">

                <a href="/admin/dashboard" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-speedometer2 fs-5 me-2"></i>
                    <span className="fs-5">Dashboard</span>
                </a>

                <a href="/admin/servicesAdm" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-nut fs-5 me-2"></i>
                    <span className="fs-5">Servicios</span>
                </a>

                <a href="/admin/combos" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-cart4 fs-5 me-2"></i>
                    <span className="fs-5">Combos</span>
                </a>

                <a href="/admin/usuarios" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-people fs-5 me-2"></i>
                    <span className="fs-5">Usuarios</span>
                </a>

                <a href="/admin/clasificados" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-bag-check fs-5 me-2"></i>
                    <span className="fs-5">Clasificados</span>
                </a>

                <a href="/admin/reseñas" className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-star-half fs-5 me-2"></i>
                    <span className="fs-5">Reseñas</span>
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