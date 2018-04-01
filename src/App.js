import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';

import HeaderContainer from './containers/HeaderContainer';
import AsideContainer from './containers/AsideContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          <Container fluid>
            <Row>
              <Col md="2">
                <AsideContainer />
              </Col>
              <Col>
                <Switch>
                  <Route exact path="/" render={() => <div>Home</div>}/>
                  <Route path="/about" render={() => <div>About</div>}/>
                  <Route path="/:user" render={() => <div>:user</div>}/>
                  <Route render={() => <div>No Match</div>}/>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
