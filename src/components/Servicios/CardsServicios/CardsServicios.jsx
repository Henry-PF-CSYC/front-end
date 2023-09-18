import style from './CardsServicios.module.css'

const CardsServicios = ({ imagen, titulo, descripcion, nombreBoton, estado }) => {

    return (
        <div className='mb-4'>
            <div className="card w-85" style={{ backgroundColor: 'black' }}>
                <img src={imagen} className="card-img-top" height={'260px'} alt="..." />
                <div className="card-body">
                    <h5 className="card-title ps-3" style={{ color: 'white' }}>{titulo}</h5>
                    <div className="mt-3 px-3">
                        <p className={style.descripcion} style={{ color: 'white' }}>{descripcion}</p>
                    </div>
                    <div className="ps-3">
                        <button className="btn btn-primary">{nombreBoton}</button>
                    </div>
                    <div className='row d-flex justify-content-center mt-2 ps-3'>
                        {
                            estado === 'available' ? (
                                <div class="alert alert-success col-md-4 p-0" role="alert">
                            {estado}
                        </div>
                            ) : (
                                <div class="alert alert-danger col-md-4 p-0" role="alert">
                            {estado}
                        </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsServicios