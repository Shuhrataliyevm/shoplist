import React from 'react'
import './profile.scss'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useStore } from '../../../hooks/useStore';

function Profile() {
    const { logout } = useAuth();
    const user = useStore((state) => state.user);
    return (
        <div>
            <div className="container">
                <div className="new-navbar">
                    <div className="navbar">
                        <div className="navbar-img">
                            <img src="/src/assets/images/new groud.png" alt="" />
                            <button className='add-person'>
                                <img src="/src/assets/icons/addPerson.svg" alt="" />
                                <p>Create</p>

                            </button>
                        </div>
                        <form>
                            <input type="text" placeholder='Search group and join ...' />
                        </form>
                        <div className="icons">
                            <img src="/src/assets/icons/notifict.svg" alt="" />
                            <img src="/src/assets/icons/shop.svg" alt="" />
                            <img src="/src/assets/icons/nastroyka.svg" alt="" />
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} className='nastroyka' onClick={logout}>
                                <img src="/src/assets/icons/logout.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new-container">
                <div className="text">
                    <ul>
                        <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', width:'350px' }} className="profile-btn" to="/profile"><li style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', width:'350px' }}><img src="/src/assets/icons/profile-person.svg" alt="" /> Profil</li></Link>
                        <br />
                        <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', width:'350px' }} className="ground-btn" to="/ground"><li style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', width:'350px' }}><img src="/src/assets/icons/groups.svg" alt="" /> Ground</li></Link>
                    </ul>
                </div>
            </div>
            <div className="users">
                <div className="user-data">
                    <h5>Your profile</h5>
                    <img style={{ borderRadius: '50%' }} className="profile-img" src="/src/assets/images/boy.jpg" alt="" />
                    <div className="text-user">
                        <h1>{user.username}</h1>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <button className="active-btn">Active</button>
                        <div className="buttons">
                            <button className="copy-btn">
                                <i className="icon-copy"></i> Copy Username
                            </button>
                            <button className="delete-btn"  onClick={logout}>
                                <i className="icon-trash"></i> Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;