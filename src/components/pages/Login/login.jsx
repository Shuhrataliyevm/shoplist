import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { Form, Input, Button, Card } from "antd";
import useAuth from '../../../hooks/useAuth';
function Login() {

    const [username, setUsername] = useState('muhammadazim');
    const [password, setPassword] = useState('123456');   
    const { loginMutation} = useAuth();
    if (localStorage.getItem('token')) {
        return <Navigate to="/" replace />
    }
    const handleSubmit = () => {
        loginMutation.mutate({ username, password });
    };

    return (
        <Card title="Login" style={{ width: 300, margin: "0 auto", marginTop: '100px' }}>
            <Form>
                <Form.Item label="Username">
                    <Input placeholder="Enter username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password placeholder="Enter password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>
                <p style={{ marginTop: 10 }}>
                    Don't you have an account? <Link to="/register">Register</Link>
                </p>
                <Button type="primary" onClick={handleSubmit} >
                    Login
                </Button>
            </Form>
        </Card>
    );
};

export default Login;