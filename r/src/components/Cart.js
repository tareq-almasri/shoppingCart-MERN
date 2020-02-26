import React, { Component } from "react";

class Cart extends Component {
  state = {
    arr: [],
    total: 0
    
  };

  deleteFromCart = id => {
    fetch(`/shopping-cart/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => this.componentDidMount());
      
  };

  updateQuantity =(value, id) => {
    fetch(`/shopping-cart/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity: value }),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(() => this.componentDidMount());
  };

  componentDidMount() {
    fetch("/shopping-cart")
      .then(res => res.json())
      .then(arr =>
        this.setState({
          arr: arr,
          total: arr.reduce((total, x) => (total += x.quantity * x.price), 0)
        })
      );
  }

  render() {
    return (
      <div style={{ width: "100vw" }}>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-light rounded shadow-lg my-3">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border- bg-light">
                          <div className="py-2 px-3 text-monospace ">
                            PRODUCT
                          </div>
                        </th>
                        <th scope="col" className="border-5 bg-light">
                          <div className="py-2 text-monospace">PRICE</div>
                        </th>
                        <th scope="col" className="border-5 bg-light">
                          <div className="py-2 text-monospace">QUANTITY</div>
                        </th>
                        <th scope="col" className="border-5 bg-light">
                          <div className="py-2 text-monospace">REMOVE</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.arr.map(x => (
                        <tr key={x._id}>
                          <th scope="row" className="border-0">
                            <div className="p-2">
                              <img
                                src={x.img}
                                width="100"
                                className="img-fluid rounded shadow"
                              />
                              <div className="ml-3 d-inline-block align-middle">
                                <h5 className="mb-0">
                                  {" "}
                                  <span className="text-dark d-inline-block align-middle">
                                    {x.brand} {x.model}
                                  </span>
                                </h5>

                                <span className="text-muted font-weight-normal font-italic d-block">
                                  <div className="5">
                                    <div className="1">{x.description}</div>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </th>

                          <td className="border-0 align-middle price">
                            {" "}
                            {x.price} $
                          </td>

                          <td className="align-middle">
                            <input
                              className="w-50"
                              onChange={(e)=>this.updateQuantity(e.target.value, x._id)}
                              type="number"
                              min="1"
                              value={x.quantity}
                            />
                          </td>

                          <td className="align-middle">
                            <button
                              className="del"
                              onClick={this.deleteFromCart.bind(this, x._id)}
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    <tbody>
                      <tr>
                        <td className="font-weight-bolder text-uppercase text-monospace ">
                          <span>total</span>
                          <br />
                          <input
                            value={this.state.total}
                            className="w-50 rounded-top-sm text-right total"
                            type="number"
                            disabled
                          />
                          $
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success w-25 font-weight-bolder "
                          >
                            Payment <i className="far fa-credit-card"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
