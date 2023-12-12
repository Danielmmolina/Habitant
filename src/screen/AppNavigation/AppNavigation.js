import React, { useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../utils/firebase";
import { AppNavigationNR } from "../NoRegister/navigation/AppNavigationNR";
import { AppNavigationS } from "../Student/navigation/AppNavigationS";
import { AppNavigationL } from "../Lessor/navigation/AppNavigationL"; // Importo la navegación de "Arrendador"
import { doc, getDoc } from "firebase/firestore";
import { LoadingModal } from "../../components/Shared/LoadingModal/LoadingModal";

export function AppNavigation() {
    const [userRole, setUserRole] = useState(null);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userDoc = await getDoc(doc(db, 'infoUsers', uid));
                const userData = userDoc.data();     
                const role = userData?.rol;
                setUserRole(role);
            } else {
                setUserRole(null);
            }          
            setShow(false);
        });
        

    }, []);

    if(show){
        return <LoadingModal show={show} text='Iniciando sesión'/>
    }

    if (userRole === 'Estudiante') {    
    
        return <AppNavigationS />;
    }  if (userRole === 'Arrendador') {
        
        return <AppNavigationL />;
    } 

        else {
        
        return <AppNavigationNR />;
    }
}