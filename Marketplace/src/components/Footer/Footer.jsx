import React from 'react';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import './Footer.scss';
//import notFoundUrl from '../../images/not-found2.png';

export default class Footer extends React.Component {

  render() {

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="containerFooter">
            <div class="row">
              <div class="col">
                <ul class="list-group">
                  <li class="nav-item nav-link" style={{ color: '#fff', paddingBottom: 0 }}>Call center</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0, paddingBottom: 0 }}>Llama a nuestro</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0 }}>centro de servicio (+345 463-3413)</li>
                </ul>
              </div>
              <div class="col">
              <ul class="list-group">
                  <li class="nav-item nav-link" style={{ color: '#fff', paddingBottom: 0 }}>Email</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0, paddingBottom: 0 }}>Consulta sobre nuestros</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0, paddingBottom: 0 }}>productos al correo: </li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0 }}>marketplace@sales.com</li>
                </ul>
              </div>
              <div class="col">
              <ul class="list-group">
                  <li class="nav-item nav-link" style={{ color: '#fff', paddingBottom: 0 }}>Podemos ayudarte</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0, paddingBottom: 0 }}>Tu cuenta</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0, paddingBottom: 0 }}>Tus pedidos</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0 }}>Devoluciones</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0 }}>Tarifas de envio</li>
                  <li class="nav-item nav-link" style={{ color: '#fff', fontSize: 12, paddingTop: 0 }}>Reportar incidente</li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
    );
  }
}

