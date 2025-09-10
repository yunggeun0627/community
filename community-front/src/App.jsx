import React, { useState } from 'react';
import RootRoute from './routes/RootRoute';
import RootLayout from './components/Layout/RootLayout/RootLayout';

function App(props) {
    const [userProfile, setUserProfile] = useState({
        avatar: localStorage.getItem("profileAvatar") || "",
        banner: localStorage.getItem("profileBanner") || "",
        username: localStorage.getItem("profileUsername") || "username",
    });

    const handleProfileChange = (newProfile) => {
        setUserProfile((prev) => ({ ...prev, ...newProfile }));

        if (newProfile.avatar) localStorage.setItem("profileAvatar", newProfile.avatar);
        if (newProfile.banner) localStorage.setItem("profileBanner", newProfile.banner);
        if (newProfile.username) localStorage.setItem("profileUsername", newProfile.username);
    };

    return (
        <RootLayout>
            <RootRoute
                userProfile={userProfile}
                onProfileChange={handleProfileChange}
            />
        </RootLayout>
    );
}

export default App;