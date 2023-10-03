import "./Novedades.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNotices } from "../../../redux/actions";
import { MDBDataTable } from 'mdbreact';

import NewNoticeModal from "./NewNoticeModal";
import EditNoticeModal from "./EditNoticeModal";

const Novedades = () =>{
   
    const dispatch = useDispatch();
    const notices = useSelector((state) => state.notices);
  
  
    // Controlar la visibilidad del modales
    const [showNewNoticeModal, setShowNewNoticeModal] = useState(false);
    const [showOptionsModal, setShowOptionsModal] = useState(false);
  
    // Datos de la fila seleccionada
    const [selectedRow, setSelectedRow] = useState(null);
  
  
    // Abrir y cerrar modales de nuevo servicio
    const openNewNoticeModal = () => { setShowNewNoticeModal(true)};
    const closeNewNoticeModal = () => { setShowNewNoticeModal(false)};
  
    // Abrir y cerrar modales de edicion de servicio
    const openOptionsModal = () => {setShowOptionsModal(true)};
    const closeOptionsModal = () => {setShowOptionsModal(false)};
  
  
    // Despachamos acción para obtener servicios
    useEffect(() => {
      const obtenerAvisos = async () => {
        try {
           dispatch(await getNotices({ randomParam: Date.now() }));
        } catch (error) { console.error('Error al obtener novedades:', error)}
      };
      obtenerAvisos()}, [dispatch]);
  
   
    // Verificamos si los datos están disponibles antes de mostrar la tabla
    if (!notices || notices.length === 0) {
      return <div>Cargando datos...</div>;
    }
  

    // Boton de edicion de servicio
    const handleRowClick = (rowData) => {
    setSelectedRow(rowData); // Guardamos la data de la fila
    openOptionsModal()}; // Abre el modal
  


  
    // Definimos las columnas de la tabla
    const columns = [
      {label: 'ID', field: 'id', sort: 'asc', width: 150},
      {label: 'Title', field: 'title', sort: 'asc', width: 150},
      {label: 'Description', field: 'desc', sort: 'asc', width: 150},
      {label: 'Date', field: 'date', sort: 'asc', width: 200},
      {label: 'Editar', field: 'edit', width: 100}
    ];
  
  
    // Mapeamos los avisos
    const rows = notices.map((notice) => {
  
    // Parseamos la fecha y obtenemos los componentes fecha y hora:
    const createdAt = new Date(notice.createdAt);
    const day = createdAt.getDate();
    const month = createdAt.getMonth() + 1; 
    const year = createdAt.getFullYear();
    const hours = createdAt.getHours();
    const minutes = createdAt.getMinutes();
    const formattedDate = `${day}/${month}/${year} a las ${hours}:${minutes}`;


    return {
      id: notice.id,
      title: notice.title,
      desc: notice.description,
      date: formattedDate,
      edit: <i onClick={() => handleRowClick(notice)} className="bi bi-pencil-square serviceOptionBut"></i>
    };
  }
);
  
  

  
// Renderizado
    return (
      <div>
  
          <div id="introToServicesAdmin" className="adminTitles">
            <h2 id="titleAdminNovedades"> Últimas novedades: </h2>
            <button className="addService" onClick={openNewNoticeModal}> Añadir aviso / novedad </button>
          </div>
          
          <NewNoticeModal show={showNewNoticeModal} handleClose={closeNewNoticeModal}/>
  
          <EditNoticeModal show={showOptionsModal} handleClose={closeOptionsModal} noticeData={selectedRow} />
  
          <MDBDataTable striped bordered small data={{ columns, rows }}
          searchLabel="Buscar" className="custom-datatable" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}  
          info={false} paginationLabel={"<>"} noBottomColumns responsive entries={[15]}/>
  
      </div>);
  }

export default Novedades