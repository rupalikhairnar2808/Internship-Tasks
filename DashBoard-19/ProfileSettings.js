import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProfileSettings = () => {
    const [user, setUser] = useState({ name: '', email: '', address: '', phone: '' });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user')) || { name: '', email: '', address: '', phone: '' };
        setUser(storedUser);
    }, []);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const saveProfile = () => {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Profile updated!');
    };

    return (
        <div>
            <h3>Profile Settings</h3>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={user.name} onChange={handleProfileChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={user.email} readOnly />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={user.address} onChange={handleProfileChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phone" value={user.phone} onChange={handleProfileChange} />
                </Form.Group>
                <Button className="mt-2" onClick={saveProfile}>Save</Button>
            </Form>
        </div>
    );
};

export default ProfileSettings;
