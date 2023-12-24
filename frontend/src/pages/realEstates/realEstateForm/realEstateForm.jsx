import { useForm } from 'react-hook-form';

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
      <input {...register("shortDescription", { required: true })} placeholder="Short Description" />
      {errors.shortDescription && <p>This field is required</p>}

      <input {...register("squareMeters", { required: true })} placeholder="Square Meters" />
      {errors.squareMeters && <p>This field is required</p>}

      <input {...register("price", { required: true })} placeholder="Price" />
      {errors.price && <p>This field is required</p>}

      <input {...register("location", { required: true })} placeholder="Location" />
      {errors.location && <p>This field is required</p>}

      <input {...register("realEstateType", { required: true })} placeholder="Real Estate Type" />
      {errors.realEstateType && <p>This field is required</p>}

      <input type="submit" />
    </form>
  );
};

export default RealEstateForm;