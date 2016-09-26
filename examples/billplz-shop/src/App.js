import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Navbar,
  Button,
  Jumbotron,
  Grid,
  Row,
  Col,
  Thumbnail,
} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onHandleSubmitBill = this.onHandleSubmitBill.bind(this);
  }
  onHandleSubmitBill() {
    const collection_id = 'COLLECTION_ID_HERE';
    const email = 'abu@gmail.com';
    const mobile = '+60124433245';
    const firstName = 'Abu';
    const lastName = 'Bakar';
    const amount = 1000;
    const callback_url = 'http://localhost:3000/';
    const description = 'demo description';
    const redirect_url = 'http://localhost:3000/';

    this.props.mutate({
      variables: { collection_id, email, mobile, firstName, lastName, amount, callback_url, description, redirect_url }
    }).then(({ data }) => {
        let url = data.createBill.url;
        return window.open(url, '_self');
      }).catch((error) => {
        console.log('there was an error sending the query', error);
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Grid>
            <Row>
              <Col md={12}>
                <Jumbotron>
                  <h1>Billplz GraphQL Shop Demo</h1>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="https://source.unsplash.com/category/technology" alt="242x200">
                <h3>Product Name</h3>
                <h4>RM10.00</h4>
                <p>Description</p>
                <p>
                  <Button onClick={this.onHandleSubmitBill} bsStyle="primary">Buy Now</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="https://source.unsplash.com/category/technology" alt="242x200">
                <h3>Product Name</h3>
                <h4>RM10.00</h4>
                <p>Description</p>
                <p>
                  <Button onClick={this.onHandleSubmitBill} bsStyle="primary">Buy Now</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="https://source.unsplash.com/category/technology" alt="242x200">
                <h3>Product Name</h3>
                <h4>RM10.00</h4>
                <p>Description</p>
                <p>
                  <Button onClick={this.onHandleSubmitBill} bsStyle="primary">Buy Now</Button>
                </p>
              </Thumbnail>
            </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

const submitBill = gql`
  mutation createBill($collection_id: String!, $email: String!, $mobile: String!, $firstName: String!, $lastName: String!, $amount: Int!, $callback_url: String!, $description: String!, $redirect_url: String!) {
    createBill(
      collection_id: $collection_id,
      email: $email,
      mobile: $mobile,
      firstName: $firstName,
      lastName: $lastName,
      amount: $amount,
      callback_url: $callback_url,
      description: $description,
      redirect_url: $redirect_url
    ) {
      url
    }
  }
`;

const AppWithMutation = graphql(submitBill)(App);

export default AppWithMutation;
