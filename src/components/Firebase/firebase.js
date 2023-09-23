import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const firebase = async (imgFile, folder) => {
  // Si no hay archivo, rechazamos solicitud
  if (!imgFile) {
    return Promise.reject("Adjunte una imagen");
  }

  try {
    // Referencia de la imagen, directorio y nombre de la misma, randomizado
    const imgRef = ref(storage, folder + imgFile.name + v4());

    // Subir la imagen y obtener la URL
    await uploadBytes(imgRef, imgFile);
    const url = await getDownloadURL(imgRef);
    return url;
  } catch (error) {
    alert("Error al subir la imagen: " + error.message);
    throw new Error("Error al subir la imagen: " + error.message)}
};

