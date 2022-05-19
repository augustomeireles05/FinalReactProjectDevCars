import './Footer.css'

import { Link } from 'react-router-dom';

import Facebook from '../../assets/images/Footer/facebook.png';
import Twitter from '../../assets/images/Footer/twitter.png';
import Instagram from '../../assets/images/Footer/instagram.png';
import Linkedin from '../../assets/images/Footer/linkedin.png';
import Youtube from '../../assets/images/Footer/youtube.png';

import Visa from '../../assets/images/Footer/visa.png';
import Mastercard from '../../assets/images/Footer/mastercard.png';
import Pix from "../../assets/images/Footer/pix.png";
import Elo from "../../assets/images/Footer/elo.png";
import Apple from "../../assets/images/Footer/apple-pay (1).png";
import Boleto from "../../assets/images/Footer/codigo-de-barras.png";


function Footer() {
  return (
    <>
      <footer>
        {/*Começo Footer */}
        <div className="container mt-5 mb-5 pt-3">
          {/*Começo Redes Sociais */}

          <div className="row justify-content-center responsive-social-media pt-3">
            <div className="col-2 col-md-1">
              {/*Icon Facebook */}
              <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
                <img src={Facebook} width="30" height="30" alt="Facebook-Logo" />
              </a>
            </div>
            <div className="col-2 col-md-1">
              {/*Icon Twitter */}
              <a href="https://twitter.com/login?lang=pt" target="_blank" rel="noreferrer">
                <img src={Twitter} width="30" height="30" alt="Twitter-Logo" />
              </a>
            </div>
            <div className="col-2 col-md-1">
              {/*Icon Instagram */}
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img src={Instagram} width="30" height="30" alt="Instagram-Logo" />
              </a>
            </div>
            <div className="col-2 col-md-1">
              {/*Icon Linkedin */}
              <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
                <img src={Linkedin} width="30" height="30" alt="Linkedin-Logo" />
              </a>
            </div>
            <div className="col-2 col-md-1">
              {/*Icon YouTube */}
              <a href="https://www.youtube.com/?gl=br&hl=pt" target="_blank" rel="noreferrer">
                <img src={Youtube} width="30" height="30" alt="Youtube-Logo" />
              </a>
            </div>
          </div>
        </div>

        {/*Fim Redes Sociais */}

        <div className="container">
          {/*Começo Container Texto */}
          <div className="row gy-5 text-start d-flex justify-content-center ms-3 responsive-footer">
            <div className="col-md-3">
              {/*Começo Institucional */}
              <h5>INSTITUCIONAL</h5>
              <br />
              <ul className="nav flex-column text-start">
                <li className="nav-item mb-2">
                  <Link
                    to="/aboutUs"
                    className="nav-link p-0 text-muted">
                    SOBRE NÓS
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/"
                    className="nav-link p-0 text-muted">
                    HOME
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/inventory"
                    className="nav-link p-0 text-muted">
                    PRODUTOS
                  </Link>
                </li>
              </ul>
            </div>

            {/*Fim Institucional */}

            <div className="col-md-3">
              {/*Começo Contato */}
              <h5>CONTATO</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="tel:+551137695678" className="nav-link p-0 text-muted">
                    TELEFONE: (11) 3769-5678
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="tel:+5511955555555" className="nav-link p-0 text-muted">
                    WHATSAPP: (11) 95555-5555
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="tel:+5508005555555" className="nav-link p-0 text-muted">
                    OUVIDORIA: 0800 555 5555
                  </a>
                </li>
              </ul>
            </div>

            {/*Fim Contato */}

            <div className="col-md-3">
              {/*Começo Atendimento */}
              <h5>ATENDIMENTO</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link p-0 text-muted">
                    AGENDAMENTO DE VISITAS
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link p-0 text-muted">
                    CENTRAL DE ATENDIMENTO
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link p-0 text-muted">
                    PRAZOS DE ENTREGA
                  </Link>
                </li>
              </ul>
            </div>

            {/*Fim Atendimento */}

            <div className="col-md-3">
              {/*Começo Minha Conta */}
              <h5>MINHA CONTA</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/myData" className="nav-link p-0 text-muted">
                    ALTERAR DADOS PESSOAIS
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/myOrder" className="nav-link p-0 text-muted">
                    ACOMPANHAR UM PEDIDO
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/register" className="nav-link p-0 text-muted">
                    CRIAR UM CADASTRO
                  </Link>
                </li>
              </ul>
            </div>

            {/*Fim Minha Conta */}
          </div>
          <br />
        </div>
        <div className="formas-pagamento text-center">
          {/*Começo Gaveta Formas de Pagamento */}
          <details>
            <summary>formas de pagamento</summary>
            <ul>
              <li>
                <img src={Visa} alt="Visa" width="60" height="30" />
                {/* Icon Visa */}
              </li>
              <li>
                <img src={Mastercard} alt="MasterCard" width="60" height="30" />
                {/* Icon Mastercard */}
              </li>
              <li>
                <img src={Pix} alt="Pix" width="100" height="30" />
                {/* Icon Pix */}
              </li>
              <li>
                <img src={Elo} alt="Elo" width="60" height="30" />
                {/* Icon Elo */}
              </li>
              <li>
                <img src={Apple} alt="Maestro" width="50" height="40" />
                {/* Icon Maestro */}
              </li>
              <li>
                <img src={Boleto} alt="boleto" width="60" height="40" />
                {/* Icon Boleto */}
              </li>
            </ul>
          </details>
        </div>

        {/*Fim Gaveta Formas de Pagamento */}
        <br />
        {/*Começo Copyright */}
        <div className="text-center p-2">
          {/*Começo Copyright */}© 2021-2022 DEV CARS AUTOMOBILES.
        </div>
        {/*Fim Copyright */}
      </footer>
    </>
  );
}

export default Footer