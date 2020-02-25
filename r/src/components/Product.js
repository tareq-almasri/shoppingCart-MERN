import React, { Component, Fragment } from "react";
import {Link } from "react-router-dom";

class Product extends Component {
  state = {
    phoneObj: {}
  };

  addToCart = () => {
    const { id } = this.props.match.params;
    fetch(`http://localhost:5000/shopping-cart/${id}`, {
      method: "POST"
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:5000/product-view/${id}`)
      .then(res => res.json())
      .then(phoneObj => this.setState({ phoneObj }));
  }

  render() {
    return (
      <Fragment>
        <div style={{ display: "flex", padding: "40px 100px", width: "100%" }}>
          <div className="col-lg-4 mx col-md-6 mb-4">
            <div className="card h-100 w-75 mx-auto">
              <img
                className="card-img-top"
                src={this.state.phoneObj.img}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title text-center ">
                  {this.state.phoneObj.brand} {this.state.phoneObj.model}
                </h4>
                <h6 className="font-weight-bolder">
                  Price: {this.state.phoneObj.price}
                </h6>
              </div>
            </div>
          </div>
          <div style={{ padding: "30px", width: "500px" }}>
            {" "}
            Description: <br />
            {this.state.phoneObj.description}
          </div>
        </div>
        <div style={{ width: "100%", padding: "20px", textAlign: "center" }}>
          <button
            type="button"
            onClick={this.addToCart()}
            className="btn add btn-danger"
          >
            Add to Cart
          </button>
          <button type="button" className="btn btn-success">
            <Link to="/">Continue Shopping</Link>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Product;
