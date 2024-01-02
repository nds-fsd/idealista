import { useForm } from 'react-hook-form';
import axios from 'axios';


const RealEstateForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      const response = await axios.post('/realestates', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating real estate', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("shortDescription", { required: true })} placeholder="Descripción corta" />
      {errors.shortDescription && <p>This field is required</p>}

      <select {...register("realEstateType", { required: true })}>
        <option value="Vivienda">Viviendas</option>
        <option value="Promocion">Promoción</option>
        <option value="Oficinas">Oficinas</option>
        <option value="Local-Nave">Local o nave</option>
        <option value="Garaje">Plaza de garaje</option>
        <option value="Terreno">Terreno</option>
        <option value="Trastero">Trastero</option>
        <option value="Edificio">Edificio</option>
      </select>
      {errors.realEstateType && <p>This field is required</p>}

      <input {...register("realEstateSubtype", { required: true })} placeholder="Subtipo de inmueble" />
      {errors.realEstateSubtype && <p>This field is required</p>}

      <input type="number" {...register("metersBuilt", { required: true })} placeholder="Metros cuadrados (m²)" />
      {errors.squareMeters && <p>This field is required</p>}

      <input type="number" {...register("price", { required: true })} placeholder="Precio" />
      {errors.price && <p>This field is required</p>}

      <input {...register("location", { required: true })} placeholder="Población" />
      {errors.location && <p>This field is required</p>}

      <select {...register("operation", { required: true })}>
        <option value="Vender">Vender</option>
        <option value="Alquiler">Alquiler</option>
        <option value="Compartir">Compartir</option>
      </select>
      {errors.operation && <p>This field is required</p>}

      <textarea {...register("description", { required: false })} placeholder="Descripción" />

      <input type="submit" />
    </form>
  );
};

export default RealEstateForm;