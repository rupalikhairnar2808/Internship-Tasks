import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderItem from "./OrderItem";

const OrderHistory = () => {
  const { orders } = useContext(OrderContext);

  return (
    <div className="container">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        orders.map((order, index) => <OrderItem key={index} order={order} />)
      )}
    </div>
  );
};

export default OrderHistory;
