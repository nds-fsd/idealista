import React from "react";
import { useState } from "react";
import axios from "axios"



const FileUploader = () => {
    const [files, setFiles] = useState([]);
    const [Loading, setLoading] = useState("");

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = [...e.dataTransfer.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        uploadFiles()
    }

    const handleFileChange = (e) => {
        console.log("event.target.files:", e.target.files)
        const newFiles = [...e.target.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        uploadFiles(newFiles)
    }

    const uploadFiles = (ficheros) => {
        console.log("uploadFiles:", ficheros)

        const uploader = ficheros.map((file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "realista");
            formData.append("api_key", "938244229631159");
            formData.append("timestamp", (Date.now() / 1000 | 0));
            setLoading("true");

            return axios
                    .post("https://api.cloudinary.com/dlrq6unnd/image/upload", formData, {
                        headers: {"X-Requested-With": "XMLHttpRequest"}
                    })
                    .then((response) => {
                        const data = response.data;
                        const fileURL = data.secure_url;
                        console.log("response.data", data, fileURL);
                    })
        })

        axios.all(uploader).then(() => {
            setLoading("false");
        })
    }

    return (
        <div style={{width: "97%"}}>    
            <div onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                style={{ border: '1px dashed black', padding: '20px', marginBottom: '20px' }}>
                <input type="file" onChange={handleFileChange} multiple />
                <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos</p>
            </div>
            <div>
                {files.length > 0 && (
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                        {console.log("file:", file)}
                        {file.name}{' '}
                        <img src={file.name} alt="Imagen inmueble"/>
                        <button onClick={() => handleRemoveFile(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    )
}

export default FileUploader;