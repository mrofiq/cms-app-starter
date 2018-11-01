import * as React from 'react';
import './App.css';

// import logo from "./logo.svg";
import { Col, Container, Row } from 'reactstrap';
import OrderList from './OrderList';
import { MenuListApp } from './menubar/reducer';

// const menuitems = [
//   { id: 'dashboard', title: 'Dashboard' },
//   { id: 'orders', title: 'Order Management' },
//   { id: 'shipping', title: 'Shipping' },
// ];

class App extends React.Component {
  public menuClicked = (id: string) => (event: any) => {
    console.log('clicked ' + id);
  };

  public render() {
    const Content = OrderList;
    return (
      <Container>
        <Row>
          <Col xs="3">
            <MenuListApp />
          </Col>
          <Col>
            <Content />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
