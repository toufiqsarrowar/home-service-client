import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import { useForm } from "react-hook-form";
import Payment from "../Payment/Payment";

const Book = ({order}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [process, setProcess] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const onSubmit = () => {
    setProcess(order);
  };

  // handle payment
  const handlePayment = (paymentId) => {
     const orderDetails = {
      ...loggedInUser,
      ...process,
      paymentId: paymentId,
      orderTime: new Date(),
    };

    fetch("http://localhost:5002/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("order Successfull");
        }
      });
 }

  return (
    <div className='w-50 ml-5'>
      <div  style = {{display: process ? 'none' : 'block'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <small>Name</small>
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue={loggedInUser.name}
          ></input>
          </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <small>Email address</small>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue={loggedInUser.email}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <small>Service</small>
          </label>
          <input
            type="service"
            class="form-control"
            defaultValue={order.serviceName}
          ></input>
        </div>
        <input type="submit" />
      </form>
      </div>
      <div style = {{display: process ? 'block' : 'none'}}>
          <Payment handlePayment = {handlePayment}></Payment>
      </div>
    </div>
  );
};

export default Book;
