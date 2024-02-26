import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { CreateRealEstate, UpdateRealEstate } from '../../../utils/apis/realEstateApi';
import ClaudinaryApi from '../../../utils/apis/claudinaryApi.js';
import FileUploader from '../../../components/fileSystem/fileUploader/FileUploader.jsx';
import UserContext from "../../../context/UserContext.jsx"


import styles from './realEstateForm.module.css';



const RealEstateForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const context = useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
  const { id } = useParams();
  
  const onSubmit = async (data) => {
    const images = await ClaudinaryApi.uploadFiles(files);
    const address = `${data.location || ''}, ${data.roadName || ''}, ${data.roadNumber || ''}, ${data.floor || ''}, ${data.door || ''}, ${data.urbanization || ''}, ${data.district || ''}}`;
    const publicAddress = `${data.location}, ${data.urbanization || ''}, ${data.district || ''}`;
    const user = context.user._id;
    await CreateRealEstate({ ...data, user, images, address, publicAddress });
    setIsSubmitted(true);
  };

  return (
    <div>

      {isSubmitted ? (
        <div className={styles.container}>
          <p className={styles.successMessage}>¡Tu anuncio ha sido publicado exitosamente!</p>
          <a href="/" className={styles.link}>Volver a la página de inicio</a>
          <a href="/realestates/create" className={styles.link}>Crear otro anuncio</a>
        </div>
      ) : (

        <div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>

          <div className={styles.title}>Publica tu anuncio</div>
          <small>*Campos obligatorios</small>
          <div className={styles.tabselected}>Datos básicos</div>

          <div style={{marginTop: "30px", display: "flex"}}>
            <div style={{width: "33%"}}>
              <label htmlFor="realEstateType" className={styles.label}>Tipo de inmueble *</label>
              <select {...register("realEstateType", { required: true })} className={styles.select}>
                <option value="Vivienda">Viviendas</option>
                <option value="Promocion">Promoción</option>
                <option value="Oficinas">Oficinas</option>
                <option value="Local-Nave">Local o nave</option>
                <option value="Garaje">Plaza de garaje</option>
                <option value="Terreno">Terreno</option>
                <option value="Trastero">Trastero</option>
                <option value="Edificio">Edificio</option>
              </select>
              {errors.realEstateType && <p className={styles.error}>Este campo es obligatorio</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="realEstateSubtype" className={styles.label}>Subtipo de inmueble *</label>
              <select {...register("realEstateSubtype", { required: true })} className={styles.select}>
                <option value="Piso">Piso</option>
                <option value="Ático">Ático</option>
                <option value="Ático">Duplex</option>
                <option value="Casa">Casa</option>
              </select>
              {errors.realEstateSubtype && <p className={styles.error}>Este campo es obligatorio</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="operation" className={styles.label}>Operación *</label>
              <select {...register("operation", { required: true })} className={styles.select}>
                <option value="Comprar">Vender</option>
                <option value="Alquiler">Alquiler</option>
                <option value="Compartir">Compartir</option>
              </select>
              {errors.operation && <p className={styles.error}>Este campo es obligatorio</p>}
            </div>
          </div>

          <div style={{marginTop: "10px", display: "flex"}}>
            <div style={{width: "33%"}}>
              <label type="text" htmlFor="location" className={styles.label}>Población *</label>
              <input {...register("location", { required: true })} className={styles.input} />
              {errors.location && <p className={styles.error}>Este campo es obligatorio</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="roadName" className={styles.label}>Nombre de la calle *</label>
              <input type="text" {...register("roadName", { required: true })} className={styles.input} />
              {errors.roadName && <p className={styles.error}>Este campo es oblicatorio</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="roadNumber" className={styles.label}>Número *</label>
              <input type="text" {...register("roadNumber", { required: true })} className={styles.input} />
              {errors.roadNumber && <p className={styles.error}>Este campo es obligatorio</p>}
            </div>
          </div>

          <div style={{marginTop: "10px", display: "flex"}}>
            <div style={{width: "33%"}}>
              <label htmlFor="block" className={styles.label}>Escalera / Bloque</label>
              <input {...register("block", { required: false })} className={styles.input} />
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="floor" className={styles.label}>Número de piso</label>
              <input type="text" {...register("floor", { required: true})} className={styles.input} />
              {errors.floor && <p className={styles.error}>Este campo es obligatorio</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="door" className={styles.label}>Puerta</label>
              <input {...register("door", { pattern: /^[1-9][0-9]*$/ })} className={styles.input} />
              {errors.door && errors.door.type === "pattern" && <p className={styles.error}>El valor debe ser un número mayor a 0</p>}
            </div>
          </div>

          <div style={{marginTop: "10px", display: "flex"}}>
            <div style={{width: "33%"}}>
              <label htmlFor="urbanization" className={styles.label}>Urbanización</label>
              <input {...register("urbanization", { required: false })} className={styles.input} />
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="district" className={styles.label}>Distrito</label>
              <input {...register("district", { required: false })} className={styles.input} />
            </div>
            <div style={{width: "33%"}}>

            </div>
          </div>

          <div className={styles.tabselected}>Detalle</div>

          <div style={{marginTop: "20px"}}>
            <label htmlFor="shortDescription" className={styles.label}>Descripción corta*</label>
            <input {...register("shortDescription", { required: true })} className={styles.input} />
            {errors.shortDescription && <p className={styles.error}>Este campo es obligatorio</p>}
          </div>

          <div style={{marginTop: "10px"}}>
            <label htmlFor="description" className={styles.label}>Descripción</label>
            <div>
              <textarea {...register("description", { required: false })} className={styles.textarea} />
            </div>            
          </div>

          <div className={styles.tabselected}>Características</div>

          <div style={{marginTop: "20px", display: "flex"}}>
            <div style={{width: "33%"}}>
              <label htmlFor="price" className={styles.label}>Precio*</label>
              <input {...register("price", { required: true, pattern: /^[1-9][0-9]*$/ })} className={styles.input} />
              {errors.price && errors.price.type === "pattern" && <p className={styles.error}>El campo es obligatorio y debe ser un número mayor a 0</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="metersBuilt" className={styles.label}>Metros construidos (m²)*</label>
              <input {...register("metersBuilt", { pattern: /^[1-9][0-9]*$/ })} className={styles.input} />
              {errors.metersBuilt && errors.metersBuilt.type === "pattern" && <p className={styles.error}>El valor debe ser un número mayor a 0</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="usefulMeter" className={styles.label}>Metros útiles (m²)</label>
              <input {...register("usefulMeter", { required: false, pattern: /^[1-9][0-9]*$/ })} className={styles.input} />
              {errors.usefulMeter && errors.usefulMeter.type === "pattern" && <p className={styles.error}>El valor debe ser un número mayor a 0</p>}
            </div>
          </div>

          <div style={{marginTop: "20px", display: "flex"}}>
            <div style={{width: "33%"}}>
              <label htmlFor="rooms" className={styles.label}>Número de habitaciones</label>
              <input {...register("rooms", { required: false, pattern: /^[1-9][0-9]*$/ })} className={styles.input} />
              {errors.rooms && errors.rooms.type === "pattern" && <p className={styles.error}>El valor debe ser un número mayor a 0</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="bathrooms" className={styles.label}>Número de baños</label>
              <input {...register("bathrooms", { required: false, pattern: /^[1-9][0-9]*$/ })} className={styles.input} />
              {errors.bathrooms && errors.bathrooms.type === "pattern" && <p className={styles.error}>El valor debe ser un número mayor a 0</p>}
            </div>
            <div style={{width: "33%"}}>
              <label htmlFor="state" className={styles.label}>Estado</label>
              <select {...register("state", { required: false })} className={styles.select}>
                <option value="Buen estado">Buen estado</option>
                <option value="A reformar">A reformar</option>
                <option value="Obra nueva">Obra nueva</option>                                
              </select>
            </div>
          </div>

          <div style={{marginTop: "20px"}}>
            <label htmlFor="properties" className={styles.label}>Propiedades</label>
          </div>
          <div style={{marginTop: "10px", display: "flex"}}>
            <div style={{width:"33%", display: "flex"}}>
              <input type="checkbox" id="airConditioning" {...register("properties")} value="Aire acondicionado" className={styles.checkbox} />
              <label htmlFor="airConditioning">Aire acondicionado</label>
            </div>
            <div style={{width:"33%", display: "flex"}}>
                <label htmlFor="fittedWardrobes">
                <input type="checkbox" id="fittedWardrobes" {...register("properties")} value="Armarios empotrados" className={styles.checkbox} />
                Armarios empotrados</label>
            </div>
            <div>
              <label htmlFor="elevator">
                <input type="checkbox" id="elevator" {...register("properties")} value="Ascensor" className={styles.checkbox} />
                Ascensor
              </label>
            </div>
          </div>
          
          <div style={{marginTop: "10px", display: "flex"}}>
            <div style={{width:"33%", display: "flex"}}>
              <label htmlFor="exterior">
                <input type="checkbox" id="exterior" {...register("properties")} value="Exterior" className={styles.checkbox} />
                Exterior
              </label>
            </div>
            <div style={{width:"33%", display: "flex"}}>
              <label htmlFor="terrace">
                <input type="checkbox" id="terrace" {...register("properties")} value="Terraza" className={styles.checkbox} />
                Terraza
              </label>
            </div>
            <div>
              <label htmlFor="garden">
                <input type="checkbox" id="garden" {...register("properties")} value="Jardín" className={styles.checkbox} />
                Jardín
              </label>
            </div>
          </div>

          <div style={{marginTop: "10px", display: "flex"}}>
            <div style={{width:"33%", display: "flex"}}>
              <label htmlFor="pool">
                <input type="checkbox" id="pool" {...register("properties")} value="Piscina" className={styles.checkbox} />
                Piscina
              </label>
            </div>
            <div style={{width:"33%", display: "flex"}}>
              <label htmlFor="garage">
                <input type="checkbox" id="garage" {...register("properties")} value="Garaje" className={styles.checkbox} />
                Garaje
              </label>
            </div>
            <div>
              <label htmlFor="storageRoom">
                <input type="checkbox" id="storageRoom" {...register("properties")} value="Trastero" className={styles.checkbox} />
                Trastero
              </label>
            </div>
          </div>

          <div style={{marginTop: "10px", display: "flex"}}>
            <div style={{width:"33%", display: "flex"}}>
              <label htmlFor="accessibleHousing">
                <input type="checkbox" id="accessibleHousing" {...register("properties")} value="Vivienda accesible" className={styles.checkbox} />
                Vivienda accesible
              </label>
            </div>
            <div style={{width:"33%", display: "flex"}}>
              <label htmlFor="luxuryHousing">
                <input type="checkbox" id="luxuryHousing" {...register("properties")} value="Vivienda de lujo" className={styles.checkbox} />
                Vivienda de lujo
              </label>
            </div>
            <div>
              <label htmlFor="seaViews">
                <input type="checkbox" id="seaViews" {...register("properties")} value="Vistas al mar" className={styles.checkbox} />
                Vistas al mar
              </label>
            </div>
          </div>

          <div className={styles.tabselected}>Fotos</div>
          <div style={{marginTop: "20px"}}>
            <FileUploader files={files} setFiles={setFiles}/>
          </div>

          <div style={{marginTop: "20px", width:"97%"}}>
            <input type="submit" value="Enviar" className={styles.submit} />
          </div>            

          </form>
        </div>
      )}
    </div>
  );
};

export default RealEstateForm;