import { google } from 'googleapis';


const username = "realista.nuclio.digital.school@gmail.com";
const password = "NuclioDigitalSchool";
const scope = "http://www.googleapis.com/auth/drive"

//const drive = google.drive({ version: 'v3' });

const uploadFilesToDrive = async (accessToken, files) => {
    const googleAuth = new google.auth.JWT(username, null, password, scope);
    const drive = google.drive({version: "v3", auth: googleAuth});  
    // auth.setCredentials({ access_token: accessToken });

  for (const file of files) {
    const fileMetadata = {
      name: file.name,
      mimeType: file.type
    };
    const media = {
      mimeType: file.type,
      body: file
    };
    try {
      const response = await drive.files.create({
        auth,
        resource: fileMetadata,
        media: media,
        fields: 'id'
      });
      console.log('Archivo subido:', response.data.id);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  }
};

export default {
    uploadFilesToDrive
}