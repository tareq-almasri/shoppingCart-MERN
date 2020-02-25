import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class ProductsList extends Component {
  state = {
    arr: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/product-listing/")
      .then(res => res.json())
      .then(arr => this.setState({ arr }));
  }

  render() {
    return (
      <Fragment>
        {this.state.arr.map(x => (
          <div className="card text-white bg-dark" key={x._id}>
            <img src={x.img} className="card-img-top" alt="phonePic" />
            <div className="card-body">
              <h5 className="card-title">
                {x.brand} {x.model}
              </h5>
              <p className="card-text">Color: {x.color}</p>
              <p className="card-text">Price: {x.price} $</p>

              <Link to={`/product/${x._id}`} key={x._id}>
                <div className="btn btn-primary">View Phone </div>
              </Link>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default ProductsList;
