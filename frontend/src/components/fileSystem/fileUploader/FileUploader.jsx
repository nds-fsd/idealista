import React, { useEffect } from "react";
import { useState, useRef } from "react";

import imageDelete from "../../../assets/basura.svg"



const FileUploader = (props) => {
    const {files, setFiles} = props;

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = [...e.dataTransfer.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }

    const handleFileChange = (e) => {
        const newFiles = [...e.target.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }

    const handleRemoveFile = (e) => {
        /* ToDo: eliminar fotos de la lista*/        
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
                        <li key={index} style={{display:"flex", flexDirection:"column"}}>
                            <img src={URL.createObjectURL(file)} alt="Imagen inmueble" 
                                 style={{height:"137px", width:"137px"}}/>
                            <button onClick={() => handleRemoveFile(index)} 
                                    style={{marginTop:"5px", backgroundColor:"#EEEFA7", border:"none", display:"flex"}}>
                                    <div style={{width:"35%"}}>
                                        <img src={imageDelete} alt="Eliminar imagen" style={{height:"16px", width:"16px"}} />
                                    </div>
                                    <div>
                                        Eliminar
                                    </div>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    )
}

export default FileUploader;