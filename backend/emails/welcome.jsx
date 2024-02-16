import React from 'react';
import { Email, Item, A, renderEmail } from 'react-email';

class WelcomeEmail extends React.Component {
  render() {
    return (
      <Email title="¡Bienvenido a nuestro servicio!">
        <Item align="center">
          <h1>Bienvenido a nuestro servicio</h1>
          <p>Gracias por unirte a nosotros. Esperamos que disfrutes de tu experiencia.</p>
          <p><A href="https://tusitio.com">Visita nuestro sitio web</A></p>
        </Item>
      </Email>
    );
  }
}

// Para renderizar el correo electrónico:
const emailHTML = renderEmail(<WelcomeEmail />);
console.log(emailHTML); // Esto mostrará el HTML del correo electrónico en la consola

export default WelcomeEmail;
