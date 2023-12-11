/*import React, { useState, useEffect} from "react";
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
    
}*/

import React, { useState, useEffect} from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AppNavigationNR } from "../NoRegister/navigation/AppNavigationNR";
import { AppNavigationS } from "../Student/navigation/AppNavigationS";
import { AppNavigationL } from "../Lessor/navigation/AppNavigationL"; // Importo la navegación de "Arrendador"

export function AppNavigation() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUserType(user ? user.type : null); // Supongamos que tienes un campo "type" en el objeto de usuario
    });
  }, []);

  const renderNavigationByType = () => {
    if (userType === "Student") {
      return <AppNavigationS />;
    } else if (userType === "Lessor") {
      return <AppNavigationL />;
    } else {
      return <AppNavigationNR />;
    }
  };

  return renderNavigationByType();
}
