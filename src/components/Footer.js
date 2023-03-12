import React from 'react';
import Logo from './logo'; // remplacez "votre-logo" par le nom de votre objet logo
import Privacy from './Privacity';



function Footer() {
  return (
    <footer id="page_end">
      <Logo isFooter={true} />
      <Privacy />
    </footer>
  );
}


export default Footer;
