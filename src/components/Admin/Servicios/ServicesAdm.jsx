import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getServices } from "../../../redux/actions";
import { MDBDataTable } from 'mdbreact';

import NewServiceModal from "./NewServiceModal";
import OptionsModal from "./OptionsModal";
import "./ServicesAdm.css";


const ServicesAdm = () => {
  
  const dispatch = useDispatch();
  const servicios = useSelector((state) => state.services);


  // Controlar la visibilidad del modales
  const [showNewServiceModal, setShowNewServiceModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  // Datos de la fila seleccionada
  const [selectedRow, setSelectedRow] = useState(null);


  // Abrir y cerrar modales de nuevo servicio
  const openNewServiceModal = () => { setShowNewServiceModal(true)};
  const closeNewServiceModal = () => { setShowNewServiceModal(false)};

  // Abrir y cerrar modales de edicion de servicio
  const openOptionsModal = () => {setShowOptionsModal(true)};
  const closeOptionsModal = () => {setShowOptionsModal(false)};


  // Despachamos acción para obtener servicios
  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        await dispatch(getServices());
      } catch (error) { console.error('Error al obtener servicios:', error)}
    };
    obtenerServicios()}, [dispatch]);

 

  // Verificamos si los datos están disponibles antes de mostrar la tabla
  if (!servicios || servicios.length === 0) {
    return <div>Cargando datos...</div>;
  }


  // Definimos una función para asignar clases de estilo segun el status
  const getCellStyle = (status) => {
    if (status === 'available') {return 'available-cell'; } 
    else { return 'unavailable-cell'; } };
  

   // Boton de edicion de servicio
   const handleRowClick = (rowData) => {
    setSelectedRow(rowData); // Guardamos la data de la fila
    openOptionsModal()}; // Abre el modal


  // Definimos las columnas de la tabla
  const columns = [
    {label: 'ID', field: 'id', sort: 'asc', width: 150},
    {label: 'Type', field: 'type', sort: 'asc', width: 150},
    {label: 'Name', field: 'name', sort: 'asc', width: 150},
    {label: 'Provider', field: 'provider', sort: 'asc', width: 200},
    {label: 'Price', field: 'price', sort: 'asc', width: 100},
    {label: 'Status', field: 'status', sort: 'asc', width: 100},
    {label: 'Opción', field: 'option', width: 100}
  ];


  // Mapeamos los servicios
  const rows = servicios.map((servicio) => ({
    id: servicio.id,
    type: servicio.type,
    name: servicio.name,
    provider: servicio.provider,
    price: servicio.price,
    status: <span className={getCellStyle(servicio.status)}>{servicio.status}</span>,
    option:<i onClick={() => handleRowClick(servicio)} class="bi bi-pencil-square serviceOptionBut"></i>
  }));



  // Renderizado
  return (
    <div>

        <div id="introToServicesAdmin">
          <h1>Servicios activos:</h1>
          <button className="addService" onClick={openNewServiceModal}>Añadir Servicio</button>
        </div>
        
        <NewServiceModal show={showNewServiceModal} handleClose={closeNewServiceModal}/>

        <OptionsModal show={showOptionsModal} handleClose={closeOptionsModal} serviceData={selectedRow} />

        <MDBDataTable striped bordered small data={{ columns, rows }}
        infoLabel={['Mostrando del', 'al', 'de', 'clasificados disponibles']} 
        searchLabel="Buscar" 
        entriesLabel="Entradas a desplegar:"
        className="custom-datatable"/>

    </div>);
}

export default ServicesAdm;






