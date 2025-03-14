import React, { useRef, useState } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const usernameRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();

    const { registerMutation } = useAuth();
    const handleSubmit = () => {
        registerMutation.mutate({ username, password, name });
    }
    return (
        <Card title="Register" style={{ width: 300, margin: "0 auto", marginTop: '100px' }}>
            <Form>
                <Form.Item label="Username">
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} ref={usernameRef} placeholder="Enter username" />
                </Form.Item>
                <Form.Item label="Name">
                    <Input value={name} onChange={(e) => setName(e.target.value)} ref={nameRef} placeholder="Enter your name" />
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} placeholder="Enter password" />
                </Form.Item>
                <p style={{ marginTop: 10 }}>
                    Do you have an account? <Link to="/login">Login</Link>
                </p>
                <Button type="primary" onClick={handleSubmit}>
                    Register
                </Button>
            </Form>
        </Card>
    );
};

export default Register;
