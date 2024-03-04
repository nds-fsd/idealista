# Realista

Realista es una  aplicación web exclusiva para particulares y sin anuncios tradicionales de los portales inmobiliarios. En nuestro sitio  priman los precios realistas y la transparencia del mercado. 

Los usuarios pueden publicar y buscar inmuebles, contactar directamente con el propietario a través de nuestro chat, sin intermediarios. Explorar propiedades por ubicación, visualizarlas en el mapa y sumergirse en sus detalles con fotos y descripciones detalladas. 


 # User Interface 

**_Home Page:_** Esta página permite al usuario hacer una búsqueda, loguearse y registrarse en la aplicación.      

<img width="585" alt="Screenshot 2024-02-27 at 8 45 56 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/6716b6f7-148e-489c-b329-16688083b779">

**_Login:_** El usuario se puede loguear para comenzar a guardar sus inmuebles favoritos, conversar con un propietario y/o publicar sus anuncios. Si el usuario no tiene una cuenta en Realista, puede crearse una cuenta desde el botón que se encuentra aquí.

<img width="585" alt="Screenshot 2024-02-27 at 8 46 43 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/26379e23-0078-4365-b548-442b6ae43ae3">

**_Registro:_** El usuario puede crear una cuenta llenando los campos requeridos, si el usuario no acepta las políticas de privacidad, no podrá crearse una cuenta, las cuales puede acceder directamente desde el link. 

<img width="585" alt="Screenshot 2024-02-27 at 8 50 13 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/8a46f5b7-d33e-4b29-99dc-11b6e5b0b496">

**_Publicar Anuncios:_** Una vez el usuario esté logueado, puede publicar anuncios con descripción específica e incluir fotos del inmueble, igualmente podrá consultar sus anuncios publicados en la página "Mis Anuncios".

<img width="585" alt="Screenshot 2024-02-27 at 9 42 39 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/8e6e1f0e-73bc-4f07-932b-7081965ba078">

**_Anuncios Publicados:_** Se visualizan todos los anuncios publicados y el usuario puede hacer su búsqueda mediante los filtros. 

<img width="585" alt="Screenshot 2024-02-28 at 7 01 33 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/3c5fd82d-244c-43ec-95dc-2b5c046f9f33">

**_Mis Anuncios:_** El usuario puede ver los anuncios que ha publicado.

<img width="585" alt="Screenshot 2024-02-28 at 7 03 58 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/845043ac-bf64-4d74-96fc-554da29741ba">


# Demo 
Puedes hacer un pequeño tour por la aplicación y visitar nuestro video de demostración en nuestro canal de Youtube

https://youtu.be/ZoCQC8MAHoA


# Roadmap
- Dibujar la zona de búsqueda
- Zona de propietario
- Gestion de contratos
- Simulador de hipotecas
- Simulador de tasación
- Analítica
- Responsive
- Portal vacacional
- Integración con el catastro y otras integraciones
- Internacionalización


# Librerías y tecnologías utilizadas

**Cliente:** 

- React
- React hook forms
- React router dom
- JWT decode
- Cloudinary React 
- Claudinary url-gen
- Socket.io Client 
- React micro-animations library
- React icons
- Mui
- @googlemaps/js-api-loader 
- @googlemaps/react-wrapper"
- Bcrypt

**Servidor:** 

- Node
- Express
- Socket.io
- Mongoose
- Mailgun
- Bcrypt
- JsonWebToken


 # Diagrama de entidades
![Realista-DataModel](https://github.com/nds-fsd/idealista/assets/146576217/57cea54e-6a4f-4edb-bc03-dfb33f0eb314)



# Pasos para utilizar el proyecto

### Requisitos previos

Para ejecutar Realista en tu máquina local, debes tener instalado lo siguiente:
- Node.Js
- MongoDB (si quieres utilizar una base de datos local)

### Configuración 

1. Clona el poyecto: 

   ```git clone https://github.com/nds-fsd/idealista.git```

2. Navega a Frontend y Backend del proyecto e instala las dependencias:

Desde carpeta idealista: cd frontend

```npm install```

Desde carpeta idealista: cd backend

```npm install```

3. Configura las siguientes variables en el fichero .env

`MONGO_URL`
`GOOGLE_APIKEY`
`JWT_SECRET`
`JWT_EXPIRES_IN`
`REACT_APP_BACKEND_URL`
`MAILGUN_API_KEY`
`MAILGUN_DOMAIN`


4. En la terminal inicia el proyecto de la siquiente manera:
`npm run dev`

5. Si quieres iniciar el frontend y el backend por separado puedes hacerlo de la siguiente manera:

 **Frontend:**  `npm run start:frontend`
 **Backend:**  `npm run start:backend`

6. Abre tu navegador web y navega a `http://localhost:3000` para ver la aplicación.


# Authors

- Carla León [https://github.com/clmirabent]
- Filip Galetic [https://github.com/fgaletic]
- Harold Pozo [https://github.com/haroldtpozo]
- Xavi López  [ https://github.com/xlopezmin]
