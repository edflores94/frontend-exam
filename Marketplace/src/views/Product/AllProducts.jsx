import React from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { formatPrice } from "../../common/utils";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import styles from "./AllProducts.scss";
//import { styles } from "ansi-colors";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://private-12729-proyect1.apiary-mock.com/marketplace/products")
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { data } = this.state;
    debugger;
    if (data && data.products) {
    }
    return (
      <div>
        <Menu />
        <div class="jumbotron">
          <div style={{ textAlign: "center" }}>
            <h1 class="display-4">Bienvenido a Marketplace</h1>
            <p class="lead">Somos el primer portal digital donde podrás encontrar todo lo que necesitas</p>
            <hr class="my-4" />
            {/*<img src={iconMarket} alt="logo LifeBank" />*/}
          </div>
          {/*<Carousel/>*/}
          <Row>
            {data &&
              data.products &&
              data.products.map((item, key) => {
                return (
                  <Col sm="6">
                    <Card body>
                      <CardTitle><b>{item.name}</b> </CardTitle>
                      <CardText>{item.description}</CardText>
                      <CardText>
                        {formatPrice(item.price)} {item.currency}
                      </CardText>
                      <img className={ styles.imgContainer } src={item.image} alt=""></img>
                      <Button>Ver detalles</Button>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}
