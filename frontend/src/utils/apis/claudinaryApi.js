import {Cloudinary} from "@cloudinary/url-gen";

const url = "https://api.cloudinary.com/v1_1/dlrq6unnd/image/upload";



const uploadFiles = async (images) => {
    try {
        const formData = new FormData();
        const uploadImages = [];
  
        for (let i = 0; i < images.length; i++) {
            let file = images[i];
            formData.append("file", file);
            formData.append("upload_preset", "realista");

            const options = { method: "POST", 
                                header: {'Content-Type': 'multipart/form-data' },
                                body: formData }
            const response = await fetch(url, options);
            const responseJSON = await response.json();
            uploadImages.push(responseJSON.secure_url);
        
            fetch(url, {
                method: "POST",
                header: {
                'Content-Type': 'multipart/form-data'
                },
                body: formData
            })
            .catch((error) => {
                console.log(error.message);
            });       
        }
        return uploadImages;
    } catch(error) {
        console.log("Error in claudinaryApi.js uploadFiles:", error.message);
    }
    return [];
};

export default { uploadFiles }