import React from "react";
import { useState } from "react";

import GooDriveApi from "../../../utils/apis/googleDriveApi";


const FileUploader = () => {
    const [files, setFiles] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = [...e.dataTransfer.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }

    const handleFileChange = (e) => {
        console.log("event.target.files:", e.target.files)
        const newFiles = [...e.target.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }

    return (
        <>    
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
            <div>
                <button>Publicar</button>
            </div>
        </>
    )
}

export default FileUploader;