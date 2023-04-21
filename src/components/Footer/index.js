import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__icons">
        <li className="footer__icon footer__icon--fb">
          <a href="#">
            <img src="/images/fb.png" alt="Logo do Facebook" />
          </a>
        </li>
        <li className="footer__icon footer__icon--tw">
          <a href="#">
            <img src="/images/tw.png" alt="Logo do Twitter" />
          </a>
        </li>
        <li className="footer__icon footer__icon--ig">
          <a href="#">
            <img src="/images/ig.png" alt="Logo do Instagram" />
          </a>
        </li>
      </ul>
      <section className="footer__logo">
        <img src="/images/logo.png" alt="Logo da Organo" />
      </section>
      <p className="footer__credits">
        Desenvolvido por{' '}
        <a href="https://github.com/alexandresouva" target="_blank">
          Alexandre Souva
        </a>
      </p>
    </footer>
  );
};

export default Footer;
