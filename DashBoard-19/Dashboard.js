import React, { useState, useEffect } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import ProfileSettings from './ProfileSettings';
import OrderHistory from './OrderHistory';
import Wishlist from './Wishlist';

const Dashboard = () => {
    return (
        <Container>
            <Tab.Container defaultActiveKey="profile">
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey="profile">Profile Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="orders">Order History</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="wishlist">Wishlist</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="profile">
                        <ProfileSettings />
                    </Tab.Pane>
                    <Tab.Pane eventKey="orders">
                        <OrderHistory />
                    </Tab.Pane>
                    <Tab.Pane eventKey="wishlist">
                        <Wishlist />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default Dashboard;
