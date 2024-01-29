// localStorage.js
export const getStorageObject = (key) => {
    const item = localStorage.getItem(key);
    if (item !== null) {
        try {
            return JSON.parse(item);
        } catch (error) {
            console.error(`Error parsing JSON for key "${key}":`, error);
            return null;
        }
    }
    return null;
};


const setStorageObject = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object));
};

const deleteStorageObject = (key) => {
    localStorage.removeItem(key);
};

export const getUserToken = () => {
    const session = getStorageObject("user");
    if (session) {
    return session.token;
    }
    return null;
};

export const getUserSession = () => {
    const session = getStorageObject("user");
    if (session) {
    return session.user;
    }
    return null;
};

export const setUserSession = (sessionData) => {
    setStorageObject("token", sessionData);
};

export const removeSession = () => {
    deleteStorageObject("token");
};
