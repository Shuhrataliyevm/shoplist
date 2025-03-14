import React from 'react'
import Login from '../components/pages/Login/login';
import Register from '../components/pages/Register/register';
import Group from '../components/pages/Group/group';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Profile from '../components/pages/Profile/profile';
function index() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/group" element={<Group />} />
        </Routes>
    )
}

export default index;