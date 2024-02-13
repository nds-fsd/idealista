import React, { useEffect } from "react";
import { useState, useRef } from "react";

import imageDelete from "../../../assets/basura.svg"



const FileUploader = () => {
    const [files, setFiles] = useState([]);
    const [Loading, setLoading] = useState("");

    // const inputFile = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = [...e.dataTransfer.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        uploadFiles(newFiles)
    }

    const handleFileChange = (e) => {
        console.log("event.target.files:", e.target.files)
        const newFiles = [...e.target.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        uploadFiles(newFiles)
    }

    const handleRemoveFile = (e) => {
        
    }

    const uploadFiles = (newFiles) => {
        console.log("uploadFiles", newFiles)
        //const files = inputFile.current.files;
        const formData = new FormData();
        //const url = "https://api.cloudinary.com/v1_1/dhgx6mcd8/image/upload";
        const url = "https://api.cloudinary.com/v1_1/dlrq6unnd/image/upload";
      
        for (let i = 0; i < newFiles.length; i++) {
          let file = newFiles[i];
          console.log("file transfer:", newFiles)
          formData.append("file", file);
          formData.append("upload_preset", "realista");
          fetch(url, {
            method: "POST",
            header: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
          })
            .then((response) => {
                console.log(response);
              return response.text();
            })
            .catch((data) => {
              debugger;
              addPhoto(JSON.parse(data));
              console.log(data);
            });
        }
    };

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