import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../redux/actions";
import { MDBDataTable } from 'mdbreact';
import "./ServicesAdm.css";

const ServicesAdm = () => {
  
  const dispatch = useDispatch();
  const servicios = useSelector((state) => state.services);

  // Despachamos acción para obtener servicios
  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        await dispatch(getServices());
      } catch (error) {
        console.error('Error al obtener servicios:', error);
      }
    };
    obtenerServicios(); 
  }, [dispatch]);


  // Verificamos si los datos están disponibles antes de mostrar la tabla
  if (!servicios || servicios.length === 0) {
    return <div>Cargando datos...</div>;
  }


  // Definimos una función para asignar clases de estilo segun el status
  const getCellStyle = (status) => {
    if (status === 'available') {
      return 'available-cell'; 
    } else {
      return 'unavailable-cell'; 
    }
  };
  

  // Boton de opciones
  const handleRowClick = (rowData) => {
    alert(`Haz hecho clic en ${rowData.name}`);
  };
  

  // Definimos las columnas de la tabla
  const columns = [
    {label: 'ID', field: 'id', sort: 'asc', width: 150},
    {label: 'Type', field: 'type', sort: 'asc', width: 150},
    {label: 'Name', field: 'name', sort: 'asc', width: 150},
    {label: 'Provider', field: 'provider', sort: 'asc', width: 200},
    {label: 'Price', field: 'price', sort: 'asc', width: 100},
    {label: 'Status', field: 'status', sort: 'asc', width: 100},
    {label: 'Ver', field: 'ver', width: 100}
  ];


  // Mapeamos los servicios
  const rows = servicios.map((servicio) => ({
    id: servicio.id,
    type: servicio.type,
    name: servicio.name,
    provider: servicio.provider,
    price: servicio.price,
    status: <span className={getCellStyle(servicio.status)}>{servicio.status}</span>,
    ver:(
      <button onClick={() => handleRowClick(servicio)} className="accion-button">
        <i class="bi bi-three-dots-vertical"></i>
      </button>)
  }));



  // Renderizado
  return (
    <div>

        <div id="introToServicesAdmin">
          <h1>Servicios activos:</h1>
          <button className="addService">Añadir Servicio</button>
        </div>
        
        <MDBDataTable
        striped
        bordered
        small
        data={{ columns, rows }}
        infoLabel={['Mostrando del', 'al', 'de', 'servicios disponibles']} 
        searchLabel="Buscar por nombre" 
        entriesLabel="Entradas a desplegar:"
        className="custom-datatable"/>

    </div>);
}

export default ServicesAdm;






