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
      {errors.shortDescription && <p className={styles.error}>This field is required</p>}

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
      {errors.realEstateType && <p className={styles.error}>This field is required</p>}

      <label htmlFor="realEstateSubtype" className={styles.label}>Subtipo de inmueble</label>
      <input {...register("realEstateSubtype", { required: true })} className={styles.input} />
      {errors.realEstateSubtype && <p className={styles.error}>This field is required</p>}

      <label htmlFor="metersBuilt" className={styles.label}>Metros cuadrados (m²)</label>
      <input type="number" {...register("metersBuilt", { required: true })} className={styles.input} />
      {errors.metersBuilt && <p className={styles.error}>This field is required</p>}

      <label htmlFor="price" className={styles.label}>Precio</label>
      <input type="number" {...register("price", { required: true })} className={styles.input} />
      {errors.price && <p className={styles.error}>This field is required</p>}

      <label htmlFor="location" className={styles.label}>Población</label>
      <input {...register("location", { required: true })} className={styles.input} />
      {errors.location && <p className={styles.error}>This field is required</p>}

      <label htmlFor="operation" className={styles.label}>Operación</label>
      <select {...register("operation", { required: true })} className={styles.select}>
        <option value="Vender">Vender</option>
        <option value="Alquiler">Alquiler</option>
        <option value="Compartir">Compartir</option>
      </select>
      {errors.operation && <p className={styles.error}>This field is required</p>}

      <label htmlFor="description" className={styles.label}>Descripción</label>
      <textarea {...register("description", { required: false })} className={styles.textarea} />
          
          <input type="submit" className={styles.button} />
        </form>
      )}
    </div>
  );
};

export default RealEstateForm;