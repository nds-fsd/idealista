import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
// import UserContext from '../../context/UserContext';
import { GetUser, UpdateUser } from '../../utils/apis/userApi'; // Import the GetUser and updateUser function from userApi

const UserProfile = () => {
    // const { user, setUser } = useContext(UserContext);
    const [user, setUser] = useState(null); // Change the user state to a useState hook
    const { register, handleSubmit, setValue } = useForm();
    const [editMode, setEditMode] = useState(false); // Add editMode state variable

    const userId = '65c3db0101d791f00cf2cebe';
    
    const onSubmit = (data) => {
        const updatedUser = {
            ...user,
            ...data
        };

        UpdateUser(updatedUser) // Call the UpdateUser function with the updatedUser object
            .then((response) => {
                setUser(response.data);
                setEditMode(false); // Disable edit mode after submitting the form
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const onCancelEdit = () => {
        setEditMode(false); // Disable edit mode when cancel button is clicked
    };

    // Set initial form values and fetch user data
    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await GetUser(userId);
                if (response && response.data) { // Check if response and response.data exist
                    setUser(response.data);
                } else {
                    console.error("No data in response");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (!user) {
            fetchUser();
        } else {
            setValue('email', user.email || '');
            setValue('name', user.name || '');
            setValue('location', user.location || '');
            // setValue('street', user.street || '');
            // setValue('number', user.number || '');
            // setValue('postcode', user.postcode || '');
            // setValue('province', user.province || '');
            // setValue('aboutMe', user.aboutMe || '');
        }
    }, [user, setValue, setUser]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            {editMode ? ( // Render form if editMode is true
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
                    {/* <div>
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
                    </div> */}
                    <div>
                        <label>Locacion:</label> 
                        <input type="text" {...register('location')} />
                    </div>
                    // <div>
                    //     <label>Provincia:</label>
                    //     <input type="text" {...register('province')} />
                    // </div>
                    // <div>
                    //     <h2>Sobre mí</h2>
                    //     <textarea {...register('aboutMe')} />
                    //     <button type="submit">Actualizar</button>
                    //     <button type="button" onClick={onCancelEdit}>Cancelar</button> {/* Cancel edit button */}
                    // </div>
                </form>
            ) : (
                // Render regular text if editMode is false
                <div>
                    <div>
                        <label>Nombre:</label>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <label>Correo electrónico:</label>
                        <span>{user.email}</span>
                    </div>
                    {/* <div>
                        <label>Contraseña:</label>
                        <span>{user.password}</span>
                    </div>
                    <div>
                        <label>Calle:</label>
                        <span>{user.street}</span>
                    </div>
                    <div>
                        <label>Número:</label>
                        <span>{user.number}</span>
                    </div>
                    <div>
                        <label>Código postal:</label>
                        <span>{user.postcode}</span>
                    </div> */}
                    <div>
                        <label>Locacion:</label> 
                        <span>{user.location}</span>
                    </div>
                    {/* <div>
                        <label>Provincia:</label>
                        <span>{user.province}</span>
                    </div>
                    <div>
                        <h2>Sobre mí</h2>
                        <p>{user.aboutMe}</p>
                        <button onClick={() => setEditMode(true)}>Editar</button> Enable edit mode when clicked
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default UserProfile;