/*import React, { useState, useEffect} from "react";
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
    if (userType === "Estudiante") {
      return <AppNavigationS />;
    } else if (userType === "Arrendador") {
      return <AppNavigationL />;
    } else {
      return <AppNavigationNR />;
    }
  };

  return renderNavigationByType();
}*/
import React, { useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../utils/firebase";
import { AppNavigationNR } from "../NoRegister/navigation/AppNavigationNR";
import { AppNavigationS } from "../Student/navigation/AppNavigationS";
import { AppNavigationL } from "../Lessor/navigation/AppNavigationL"; // Importo la navegación de "Arrendador"
import { doc, getDoc } from "firebase/firestore";

export function AppNavigation() {
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userDoc = await getDoc(doc(db, 'infoUsers', uid));

                const userData = userDoc.data();


                // Accede al rol del usuario
                const role = userData?.rol;

                // Establece el rol del usuario en el estado
                setUserRole(role);
                console.log('El usuario es: '+ userRole);
            } else {
                // Si no hay usuario autenticado, establece el rol en null
                setUserRole(null);
            }
        });
    }, []);

/*
    useEffect(() => {
        setInfoUser('');
        onSnapshot(doc(db, 'infoUsers', uid), (doc) => {
          setInfoUser(doc.data());
          setShow(false);
        });
      }, [uid]);
*/
    // Renderiza la navegación basándose en el rol del usuario
    if (userRole === 'Estudiante') {
        return <AppNavigationS />;
    } else if (userRole === 'Arrendador') {
        return <AppNavigationL />;
    } else {
        // Si no hay usuario autenticado o el rol no está definido, muestra la navegación para no registrados
        return <AppNavigationNR />;
    }
}
