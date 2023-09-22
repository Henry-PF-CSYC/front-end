import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../../redux/actions";
import { MDBDataTable } from 'mdbreact';
import "./Usuarios.css";

const ServicesAdm = () => {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.allUsers); 
  
  // Despachamos accion para obtener usuarios
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        await dispatch(getAllUsers());
      } catch (error) { console.error('Error al obtener usuarios:', error);}
    };
  
  obtenerUsuarios(); // Llamamos a la función al cargar el componente
  }, [dispatch]); 


  // Verifica si los datos de servicios están disponibles antes de mostrar la tabla
  if (!usuarios || usuarios.length === 0) {
    return <div>Cargando datos...</div>;
  }

  // Define una función para asignar clases de estilo condicionales en función del estado
  const getCellStyle = (status) => {
    if (status === 'user') {
      return 'user-cell'; // Clase para servicios disponibles (verde)
    } else {
      return 'admin-cell'; // Clase para servicios no disponibles (rojo)
    }
  };

  // Boton de opciones
  const handleRowClick = (rowData) => {
    alert(`Haz hecho clic en ${rowData.name}`);
  };
  
  // Define las columnas de la tabla
  const columns = [
    {
      label: 'Email',
      field: 'email',
      sort: 'asc',
      width: 150
    },
    {
      label: 'DNI',
      field: 'dni',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Nombre',
      field: 'name',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Apellido',
      field: 'lastname',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Teléfono',
      field: 'phone',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Dirección',
      field: 'address',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Rol',
      field: 'role',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Ver',
      field: 'accion',
      width: 100
    }
  ];

  // Mapea los datos de servicios en el formato adecuado
  const rows = usuarios.map((usuario) => ({
    email: usuario.email,
    dni: usuario.dni,
    name: usuario.name,
    lastname: usuario.lastname,
    phone: usuario.phone,
    address: usuario.address,
    role: <span className={getCellStyle(usuario.role)}>{usuario.role}</span>,
    accion:(
      <button onClick={() => handleRowClick(usuario)} className="accion-button">
        <i class="bi bi-three-dots-vertical"></i>
      </button>)
  }));

  return (
    <div>

        <h1 id="titleAdminUsers">Usuarios activos:</h1>

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



// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAllUsers } from "../../../redux/actions";
// import "./Usuarios.css"

// const Usuarios = () => {

//     const dispatch = useDispatch();
//     const usuarios = useSelector((state) => state.allUsers); 
  
//     // Despachamos accion para obtener usuarios
//     useEffect(() => {
//       const obtenerUsuarios = async () => {
//         try {
//           await dispatch(getAllUsers());
//         } catch (error) { console.error('Error al obtener usuarios:', error);}
//       };
  
//     obtenerUsuarios(); // Llamamos a la función al cargar el componente
//     }, [dispatch]); 
  

// // Renderizado
// return (
//       <div>
//         <h1>Usuarios</h1>
        
//         <table className="usuarios-table">

//           <thead>
//             <tr>
//                <th>Email</th>
//                <th>Nombre</th>
//                <th>Apellido</th>
//                <th>Rol</th>
//                <th>DNI</th>
//                <th>Direccion</th>
//             </tr>
//           </thead>

//           <tbody>
//             {usuarios.map((usuario) => (
//               <tr key={usuario.email}>
//                  <td>{usuario.email}</td>
//                  <td>{usuario.name}</td>
//                  <td>{usuario.lastname}</td>
//                  <td>{usuario.role}</td>
//                  <td>{usuario.dni}</td>
//                  <td>{usuario.address}</td>
//               </tr>))}
//           </tbody>

//         </table>
//       </div>);
// };
  
// export default Usuarios;