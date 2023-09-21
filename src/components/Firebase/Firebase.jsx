import { useState, useEffect } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Firebase = () => {

  // Estado de la imagen a subir
  const [img, setImg] = useState(null);

  // Estado para checar si la carga de la imagen está en progreso
  const [isUploading, setIsUploading] = useState(false);

  // Arreglo para almacenar las URLs de las imágenes subidas
  const [imageUrls, setImageUrls] = useState([]);


  // useEffect para deshabilitar el botón durante la carga
  useEffect(() => {
    if (isUploading) {
        // Deshabilitar ambos botones mientras se está cargando 
        document.getElementById("uploadFile").disabled = true;
        document.getElementById("uploadButton").disabled = true;
       
    } else {
        // Habilitar los botones una vez que la carga haya terminado
          document.getElementById("uploadFile").disabled = false;
          document.getElementById("uploadButton").disabled = false;}
    }, [isUploading]);
    

// Funcion para subir imagenes
  const uploadImage = () => {

    // Si no hay archivo, alerta
    if (img === null) return alert("Adjunte una imagen");

    // Referencia de la imagen, directorio y nombre de la misma, la randomizamos
    const imgRef = ref(storage, "clasificados/" + img.name + v4());

    // Indicar que la carga está en progreso
    setIsUploading(true);

    // Subimos con el método uploadBytes usando la referencia y el archivo correspondiente
    uploadBytes(imgRef, img)
      
    .then(() => {
        // Una vez que la carga se completa, obtenemos la URL
        return getDownloadURL(imgRef);})

    .then((url) => {
        // Agregamos la URL al array contenedor de las mismas
        setImageUrls([...imageUrls, url]);
        return alert("Imagen subida correctamente");
      })

    .catch((error) => {
        // Alert de error en caso asi sea
        return alert("Error al subir la imagen: ", error);
      })

    .finally(() => {
        // Marcamos que la carga ha terminado, ya sea con éxito o error
        setIsUploading(false);
      });
  };


  // Renderizado
  return (
    <div>

      <h1 style={{"margin":"4rem"}}>PRUEBA</h1>

      <input id="uploadFile" type="file" onChange={(event) => setImg(event.target.files[0])} />

      {/* El botón se deshabilita automáticamente durante la carga */}
      <button id="uploadButton" onClick={uploadImage}> Subir imagen </button>

      {/* Muestra las URLs públicas de las imágenes subidas */}
      {imageUrls.length > 0 && (
        
        <div>
          <h2>URLs de imágenes subidas:</h2>
          <ul>{imageUrls.map((url, index) => (
              <li key={index}>{url}</li>))}
          </ul>
        </div>)}

    </div>);
};

export default Firebase;
