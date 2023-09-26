 import { useState, useEffect } from "react";
 import { storage } from "../../firebase";
 import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
 import { v4 } from "uuid";

 const Firebase = () => {

   // Estado de la imagen a subir
   const [img, setImg] = useState(null);

   // Estado para checar si la carga de la imagen está en progreso
   const [isUploading, setIsUploading] = useState(false);

   // Estado para almacenar la URL de la imagen subida
   const [imageUrl, setImageUrl] = useState("");


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
     const imgRef = ref(storage, "admin-services/" + img.name + v4());

     // Indicar que la carga está en progreso
     setIsUploading(true);

     // Subimos con el método uploadBytes usando la referencia y el archivo correspondiente
     uploadBytes(imgRef, img)
      
     .then(() => {
         // Una vez que la carga se completa, obtenemos la URL
         return getDownloadURL(imgRef);})

     .then((url) => {
         // Seteamos la URL
         setImageUrl(url);
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

       <h1 style={{"margin":"4rem"}}> Firebase </h1>

       <input id="uploadFile" type="file" onChange={(event) => setImg(event.target.files[0])} />

       {/* El botón se deshabilita automáticamente durante la carga */}
       <button id="uploadButton" onClick={uploadImage}> Subir imagen </button>

       {/* Muestra la URL de las imagen subida */}
         <div>
           <h2>URL de imagen subida:</h2>
           <p>{imageUrl}</p>
         </div>

     </div>);
};

export default Firebase;
