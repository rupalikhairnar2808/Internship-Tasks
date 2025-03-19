import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    return (
        <div>
            <h3>Order History</h3>
            {orders.length === 0 ? (
                <p>No past orders.</p>
            ) : (
                orders.map((order, index) => (
                    <Card key={index} className="mb-3">
                        <Card.Body>
                            <Card.Title>Order #{index + 1} - {order.date}</Card.Title>
                            <Card.Text>
                                <strong>Total Price:</strong> ${order.total} <br />
                                <strong>Payment Method:</strong> {order.paymentMethod} <br />
                                <strong>Status:</strong> {order.status} <br />
                            </Card.Text>
                            <Button variant="primary">Reorder</Button>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
};

export default OrderHistory;
