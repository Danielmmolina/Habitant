import React, { useState, useEffect} from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { AppNavigationNR } from "../NoRegister/navigation/AppNavigationNR";
import { AppNavigationS } from "../Student/navigation/AppNavigationS";


export function AppNavigation() {
    const [hasLogged, setHasLogged] = useState (null);

    useEffect (() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true: false);
        });
    }, []);

    return hasLogged ? <AppNavigationS /> : <AppNavigationNR />
    
}