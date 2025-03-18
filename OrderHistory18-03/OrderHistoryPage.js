import React from "react";
import { OrderProvider } from "../context/OrderContext";
import OrderHistory from "../components/OrderHistory";

const OrderHistoryPage = () => {
  return (
    <OrderProvider>
      <div>
        <h1>My Orders</h1>
        <OrderHistory />
      </div>
    </OrderProvider>
  );
};

export default OrderHistoryPage;
