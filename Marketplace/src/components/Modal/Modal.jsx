/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalPage extends React.Component {
    static propTypes = {
        children: PropTypes.object,
        titulo: PropTypes.string,
        respuesta: PropTypes.string
      }

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const {
        titulo,
        respuesta
      } = this.props;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
          <ModalBody>
            {respuesta}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Aceptar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPage;