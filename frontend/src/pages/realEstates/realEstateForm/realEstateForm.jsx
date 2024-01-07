import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CreateRealEstate } from '../../../utils/apis/realEstateApi.js';
import styles from './realEstateForm.module.css';

const RealEstateForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    const response = await CreateRealEstate(data);
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <div className={styles.container}>
          <p className={styles.successMessage}>¡Tu anuncio ha sido publicado exitosamente!</p>
          <a href="/" className={styles.link}>Volver a la página de inicio</a>
          <a href="/create-ad" className={styles.link}>Crear otro anuncio</a>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          <h1 className={styles.title}>Llena este formulario y publica tu anuncio en un instante</h1>

          <label htmlFor="shortDescription" className={styles.label}>Descripción corta</label>
          <input {...register("shortDescription", { required: true })} className={styles.input} />
          {errors.shortDescription && <p className={styles.error}>Este campo es obligatorio</p>}

          <label htmlFor="realEstateType" className={styles.label}>Tipo de inmueble</label>
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

          <label htmlFor="realEstateSubtype" className={styles.label}>Subtipo de inmueble</label>
          <input {...register("realEstateSubtype", { required: true })} className={styles.input} />
          {errors.realEstateSubtype && <p className={styles.error}>Este campo es obligatorio</p>}

          <label htmlFor="metersBuilt" className={styles.label}>Metros construidos (m²)</label>
          <input type="number" {...register("metersBuilt", { required: true })} className={styles.input} />
          {errors.metersBuilt && <p className={styles.error}>Este campo es obligatorio</p>}

          <label htmlFor="price" className={styles.label}>Precio</label>
          <input type="number" {...register("price", { required: true })} className={styles.input} />
          {errors.price && <p className={styles.error}>Este campo es obligatorio</p>}

          <label htmlFor="location" className={styles.label}>Población</label>
          <input {...register("location", { required: true })} className={styles.input} />
          {errors.location && <p className={styles.error}>Este campo es obligatorio</p>}

          <label htmlFor="operation" className={styles.label}>Operación</label>
          <select {...register("operation", { required: true })} className={styles.select}>
            <option value="Vender">Vender</option>
            <option value="Alquiler">Alquiler</option>
            <option value="Compartir">Compartir</option>
          </select>
          {errors.operation && <p className={styles.error}>Este campo es obligatorio</p>}

          <label htmlFor="description" className={styles.label}>Descripción</label>
          <textarea {...register("description", { required: false })} className={styles.textarea} />

          <label htmlFor="roadName" className={styles.label}>Nombre de la calle</label>
          <input {...register("roadName", { required: false })} className={styles.input} />

          <label htmlFor="roadNumber" className={styles.label}>Número de la calle</label>
          <input {...register("roadNumber", { required: false })} className={styles.input} />

          <label htmlFor="block" className={styles.label}>Bloque</label>
          <input {...register("block", { required: false })} className={styles.input} />

          <label htmlFor="portal" className={styles.label}>Portal</label>
          <input {...register("portal", { required: false })} className={styles.input} />

          <label htmlFor="floor" className={styles.label}>Piso</label>
          <input {...register("floor", { required: false })} className={styles.input} />

          <label htmlFor="door" className={styles.label}>Puerta</label>
          <input {...register("door", { required: false })} className={styles.input} />

          <label htmlFor="urbanization" className={styles.label}>Urbanización</label>
          <input {...register("urbanization", { required: false })} className={styles.input} />

          <label htmlFor="district" className={styles.label}>Distrito</label>
          <input {...register("district", { required: false })} className={styles.input} />

          <label htmlFor="state" className={styles.label}>Estado</label>
          <select {...register("state", { required: false })} className={styles.select}>
            <option value="Obra nueva">Obra nueva</option>
            <option value="Buen estado">Buen estado</option>
            <option value="A reformar">A reformar</option>
          </select>

          <label htmlFor="usefulMeter" className={styles.label}>Metros útiles (m²)</label>
          <input type="number" {...register("usefulMeter", { required: false })} className={styles.input} />

          <label htmlFor="properties" className={styles.label}>Propiedades</label>
          <ul className={styles.properties}>
            <li>
              <label htmlFor="airConditioning">
                Aire acondicionado
                <input type="checkbox" id="airConditioning" {...register("properties")} value="Aire acondicionado" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="fittedWardrobes">
              Armarios empotrados
                <input type="checkbox" id="fittedWardrobes" {...register("properties")} value="Armarios empotrados" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="elevator">
              Ascensor
                <input type="checkbox" id="elevator" {...register("properties")} value="Ascensor" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="exterior">
              Exterior
                <input type="checkbox" id="exterior" {...register("properties")} value="Exterior" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="garage">
              Garaje
                <input type="checkbox" id="garage" {...register("properties")} value="Garaje" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="garden">
              Jardín
                <input type="checkbox" id="garden" {...register("properties")} value="Jardín" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="pool">
              Piscina
                <input type="checkbox" id="pool" {...register("properties")} value="Piscina" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="terrace">
              Terraza
                <input type="checkbox" id="terrace" {...register("properties")} value="Terraza" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="storageRoom">
              Trastero
                <input type="checkbox" id="storageRoom" {...register("properties")} value="Trastero" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="accessibleHousing">
              Vivienda accesible
                <input type="checkbox" id="accessibleHousing" {...register("properties")} value="Vivienda accesible" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="luxuryHousing">
              Vivienda de lujo
                <input type="checkbox" id="luxuryHousing" {...register("properties")} value="Vivienda de lujo" className={styles.checkbox} />
              </label>
            </li>
            <li>
              <label htmlFor="seaViews">
              Vistas al mar
                <input type="checkbox" id="seaViews" {...register("properties")} value="Vistas al mar" className={styles.checkbox} />
              </label>
            </li>
          </ul>
          
          <label htmlFor="realtor" className={styles.label}>Agente inmobiliario</label>
          <input {...register("realtor", { required: false })} className={styles.input} />

            <input type="submit" value="Enviar" className={styles.button} />
        </form>
      )}
    </div>
  );
};

export default RealEstateForm;