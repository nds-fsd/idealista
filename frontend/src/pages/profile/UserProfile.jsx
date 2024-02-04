import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../context/UserContext';
import { UpdateUser } from '../../utils/apis/userApi'; // Import the updateUser function from userApi

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        const updatedUser = {
            ...user,
            ...data
        };

        UpdateUser(updatedUser) // Call the updateUser function with the updatedUser object
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Set initial form values
    React.useEffect(() => {
        if (user) {
            setValue('name', user.name);
            setValue('email', user.email);
            setValue('password', user.password);
            setValue('location', user.location);
            setValue('street', '');
            setValue('number', '');
            setValue('postcode', '');
            setValue('province', '');
            setValue('aboutMe', '');
        }
    }, [user, setValue]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" {...register('name')} />
                </div>
                <div>
                    <label>Correo electrónico:</label>
                    <input type="email" {...register('email')} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" {...register('password')} />
                </div>
                <div>
                    <label>Calle:</label>
                    <input type="text" {...register('street')} />
                </div>
                <div>
                    <label>Número:</label>
                    <input type="text" {...register('number')} />
                </div>
                <div>
                    <label>Código postal:</label>
                    <input type="text" {...register('postcode')} />
                </div>
                <div>
                    <label>Locacion:</label> 
                    <input type="text" {...register('location')} />
                </div>
                <div>
                    <label>Provincia:</label>
                    <input type="text" {...register('province')} />
                </div>
                <div>
                    <h2>Sobre mí</h2>
                    <textarea {...register('aboutMe')} />
                    <button type="submit">Actualizar</button>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;