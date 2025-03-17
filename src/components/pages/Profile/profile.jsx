// import React from 'react';
// import useAuth from '../../../hooks/useAuth';
// import { useStore } from '../../../hooks/useStore';
// import Header from '../Header/header';
// import CustomText from "../CustomText/CustomText";
// import "./profile.scss"
// function Profile() {
//     const { logout } = useAuth();
//     const groups = useStore((state) => state.groups);

//     return (
//         <div>
//             <Header />
//             <CustomText />
//             <div className="users">
//                 <div className="user-data">
//                     <h5>Your profile</h5>
//                     <img style={{ borderRadius: '50%' }} className="profile-img" src="/public/images/proxy-image.jpg" alt="Profile" />
//                     <div className="text-user">
//                         <div className="textes">
//                             <h1>{groups.username}</h1>
//                             <p>{groups.name}</p>
//                             <p>{groups.email}</p>
//                         </div>
//                         <button className="active-btn">Active</button>
//                         <div className="buttons">
//                             <button className="copy-btn">
//                                 <i className="icon-copy"></i> Copy Username
//                             </button>
//                             <button className="delete-btn" onClick={logout}>
//                                 <i className="icon-trash"></i> Delete Account
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useStore } from '../../../hooks/useStore';
import Header from '../Header/header';
import CustomText from "../CustomText/CustomText";
import "./profile.scss";

function Profile() {
    const { logout } = useAuth();
    const user = useStore((state) => state.user); // Foydalanuvchi ma'lumotlarini olish

    return (
        <div>
            <Header />
            <CustomText />
            <div className="users">
                <div className="user-data">
                    <h5>Your profile</h5>
                    <img
                        style={{ borderRadius: '50%' }}
                        className="profile-img"
                        src="/images/proxy-image.jpg"
                        alt="Profile"
                    />
                    <div className="text-user">
                        <div className="textes">
                            <h1>{user?.username || "Unknown User"}</h1>
                            <p>{user?.name || "No Name"}</p>
                        </div>
                        <button className="active-btn">Active</button>
                        <div className="buttons">
                            <button
                                className="copy-btn"
                                onClick={() => {
                                    const copiedText = prompt("Copy this username:", user?.username || "Unknown User");
                                    if (copiedText) {
                                        navigator.clipboard.writeText(copiedText);
                                        alert("Username copied to clipboard!");
                                    }
                                }}
                            >
                                <i className="icon-copy"></i> Copy Username
                            </button>
                            <button className="delete-btn" onClick={logout}>
                                <i className="icon-trash"></i> Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
