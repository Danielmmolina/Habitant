import React, { useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../utils/firebase";
import { AppNavigationNR } from "../NoRegister/navigation/AppNavigationNR";
import { AppNavigationS } from "../Student/navigation/AppNavigationS";
import { AppNavigationA } from "../Arrendador/navigation/AppNavigationA";
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


               
                const role = userData?.rol;

                
                setUserRole(role);
                console.log('El usuario es: '+ userRole);
            } else {
               
                setUserRole(null);
            }
        });
    }, []);


    if (userRole === 'Estudiante') {
        return <AppNavigationS />;
    } else if (userRole === 'Arrendador') {
        return <AppNavigationA />;
    } else {
        return <AppNavigationNR />;
    }
}
