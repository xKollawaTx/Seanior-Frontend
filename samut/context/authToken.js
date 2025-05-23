// context/authToken.js

import { auth } from "@/lib/firebase";


export const getAuthToken = async () => {
    const user = auth.currentUser;
    if (user) {
        return user.getIdToken();
    }

    console.log("token", user.getIdToken());

    return null;
};


export const getAuthUser = () => {
    const user = auth.currentUser;
    if (user) {
        return user;
    }
    return null;
}
