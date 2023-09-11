import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='redes-sociais'>
        <img src="imagens/fb.png" alt="Facebook" />
        <img src="imagens/tw.png" alt="Twitter" />
        <img src="imagens/ig.png" alt="Instagram" />
      </div>
      <img src="imagens/logo.png" alt="Logo Organo" />
      <p>Desenvolvido por Alura.</p>
    </footer>
  );
};

export default Footer;