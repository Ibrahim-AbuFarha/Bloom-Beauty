import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";

function Profile() {
  const [userInfo, SetUserInfo] = useState([]);
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:3001/orders?userId=${user.id}`)
      .then(({ data }) => {
        setOrders(data); //{object}
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(user);

  console.log(orders);
  const one = require("./img/one.jpg");
  const two = require("./img/two.jpg");
  return (
    <>
      <section className="h-100 gradient-custom  ">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5.5">
              <div className="card1 mb-4">
                <div className="card1-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{user.username}</h5>
                  {/* <p className="text-muted mb-1">Full Stack Developer</p> */}
                  <p className="text-muted mb-4">{`${user.city},${user.country}`}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5.5">
              <div className="card1 mb-4">
                <div className="card1-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.username}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.phone}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${user.city},${user.country}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-5.5 col-xl-5.5">
              {orders.map((order) => {
                return (
                  <div className="card1">
                    <div className="card1-header px-4 py-5">
                      <h5 className="text-muted mb-0 text-center">
                        Thanks for your Order, {user.username}
                        <span style={{ color: "#f5a3b7" }}>{user.name}</span>!
                      </h5>
                    </div>
                    <div className="card1-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p
                          className="lead fw-normal mb-0"
                          style={{ color: "#f5a3b7" }}
                        >
                          Receipt
                        </p>
                        <p className="small text-muted mb-0">
                          Receipt Voucher : 1KAU9-84UIL
                        </p>
                      </div>
                      {order.orderItems.map((orderItem) => {
                        return (
                          <div className="card1 shadow-0 border mb-4">
                            <div className="card1-body">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={orderItem.image}
                                    className="img-fluid"
                                    alt="Lipstick Candy"
                                  />
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0">
                                    {orderItem.name}
                                  </p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">Pink</p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center"></div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">
                                    Qty: {orderItem.quantity}
                                  </p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">
                                    ${orderItem.price}
                                  </p>
                                </div>
                              </div>
                              <hr
                                className="mb-4"
                                style={{
                                  backgroundColor: "#e0e0e0",
                                  opacity: "1",
                                }}
                              />
                              <div className="row d-flex align-items-center">
                                <div className="col-md-2">
                                  <p className="text-muted mb-0 small">
                                    Track Order
                                  </p>
                                </div>
                                <div className="col-md-10">
                                  <div
                                    className="progress"
                                    style={{
                                      height: "6px",
                                      borderRadius: "16px",
                                    }}
                                  >
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{
                                        width: "65%",
                                        borderRadius: "16px",
                                        backgroundColor: "#f5a3b7",
                                      }}
                                      aria-valuenow="65"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="d-flex justify-content-around mb-1">
                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                      Out for delivary
                                    </p>
                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                      Delivered
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="d-flex justify-content-between pt-2">
                        <p className="fw-bold mb-0">Order Details</p>
                        <p className="text-muted mb-0">
                          <span className="fw-bold me-4">Total</span>{" "}
                          {order.total}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between pt-2">
                        <p className="text-muted mb-0">
                          Invoice Number : 788152
                        </p>
                        <p className="text-muted mb-0">
                          <span className="fw-bold me-4">Discount</span> $19.00
                        </p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">
                          Invoice Date : 22 Dec,2019
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-5">
                        <p className="text-muted mb-0">
                          Recepits Voucher : 18KU-62IIK
                        </p>
                        <p className="text-muted mb-0">
                          <span className="fw-bold me-4">Delivery Charges</span>{" "}
                          Free
                        </p>
                      </div>
                    </div>
                    <div
                      className="card1-footer border-0 px-4 py-5"
                      style={{
                        backgroundColor: "#f5a3b7",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <h5 className="d-flex align-items-center justify-content-center text-white text-uppercase mb-0">
                        <span className="h2 mb-0 ms-2">
                          Total paid : ${order.total}
                        </span>
                      </h5>
                    </div>
                    {}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
