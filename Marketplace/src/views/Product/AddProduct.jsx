import React from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import { CustomInput, Label } from "reactstrap";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import "./AddProduct.scss";

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      applyDiscount: false
    };
  }

  applyDiscount() {
    this.setState({
      applyDiscount: true
    });
  }

  removeDiscount() {
    this.setState({
      applyDiscount: false
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div class="jumbotron" style={{ marginBottom: 0 }}>
          <div style={{ textAlign: "center" }}>
            <h2 class="display-4">Agregar producto</h2>
            <hr class="my-4" />
          </div>

          <form>
            <div className="row offset-md-3">
              <div className="col-md-8">
                <div class="form-group">
                  <label>Nombre</label>
                  <input type="text" className="form-control" placeholder="Nombre del producto" required />
                </div>
              </div>
            </div>

            <div className="row offset-md-3">
              <div className="col-md-8">
                <div class="form-group">
                  <label>Descripcion</label>
                  <textarea type="text" className="form-control" placeholder="Descripcion del producto" required />
                </div>
              </div>
            </div>

            <div className="row offset-md-3">
              <div className="col-md-4">
                <div class="form-group">
                  <label>Precio</label>
                  <input type="text" className="form-control" placeholder="Precio del producto" required />
                </div>
              </div>
              <div className="col-md-4">
                <div class="form-group">
                  <label>Moneda</label>
                  <input type="text" className="form-control" disabled value={"USD"} />
                </div>
              </div>
            </div>

            <div className="row offset-md-3">
              <div className="col-md-4">
                <div class="form-group">
                  <Label for="exampleCheckbox">Descuento</Label>
                  <div>
                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" inline onClick={() => this.removeDiscount()} />
                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Si" inline onClick={() => this.applyDiscount()} />
                  </div>
                </div>
              </div>
            </div>

            {this.state.applyDiscount && (
              <div className="row offset-md-3">
                <div className="col-md-4">
                  <div class="form-group">
                    <label>Tipo</label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                      <option>Fijo</option>
                      <option>Porcentual</option>
                    </CustomInput>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="form-group">
                    <label>Valor</label>
                    <input type="text" className="form-control" placeholder="Valor del descuento" required />
                  </div>
                </div>
              </div>
            )}

            <div className="row offset-md-3">
              <div className="col-md-8">
                <div class="form-group">
                  <label>Subir imagen</label>
                  <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                </div>
              </div>
            </div>

            <div className="row offset-md-3">
              <div className="col-md-4">
                <div class="form-group">
                  <button className="btn btn-info" style={{ marginRight: "1rem" }}>
                    Guardar producto
                  </button>
                  <button className="btn btn-secondary">Cancelar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
