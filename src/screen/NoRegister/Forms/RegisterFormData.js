import * as Yup from "yup"

export function initialValues(){
    return {
        nombres: "",
        apellidos: "",
        rut: "",
        email: "",
        telefono: 900000000,
        password: "",
        repeatpassword: "",
    };
}

export function initialValuesLogin(){
    return {
        email: "",
        password: "",
    };
}

export function validationSchema_Arrendador () {
    return Yup.object({

        nombres: Yup.string().required("Nombres no ingresados"),
        apellidos: Yup.string().required("Apellidos no ingresados"),
        rut: Yup.string().min(9, "Rut ingresado no válido").max(10, "Rut ingresado no válido").required("Rut no ingresado"),
        email: Yup.string().email("Email ingresado no válido").required("Email no ingresado"),
        telefono: Yup.string().min(9, "Número telefonico no válido").required("Número telefonico no ingresado"),
        password: Yup.string().min(8, "Contraseña debe tener mínimo 8 carácteres").required("Contraseña no ingresada"),
        repeatpassword: Yup.string().min(8, "Contraseña debe tener mínimo 8 carácteres").required("Contraseña no ingresada").oneOf([Yup.ref("password")], "Contraseñas no coinciden"),

    });
}

export function validationSchema_Student () {
    return Yup.object({
        nombres: Yup.string().required("Nombres no ingresados"),
        apellidos: Yup.string().required("Apellidos no ingresados"),
        rut: Yup.string().min(9, "Rut ingresado no válido").max(10, "Rut ingresado no válido").required("Rut no ingresado"),
        
        email: Yup.string().email('Email ingresado no válido').test('alumnos-ubiobio', "Correo ingresado no válido", function (value) {
          if (!value) return true
          const dominioEsperado = '@alumnos.ubiobio.cl';
          return value.endsWith(dominioEsperado);
        }).required('Email no ingresado'),

        telefono: Yup.string().min(9, "Número telefonico no válido").required("Número telefonico no ingresado"),
        password: Yup.string().min(8, "Contraseña debe tener mínimo 8 carácteres").required("Contraseña no ingresada"),
        repeatpassword: Yup.string().min(8, "Contraseña debe tener mínimo 8 carácteres").required("Contraseña no ingresada").oneOf([Yup.ref("password")], "Contraseñas no coinciden"),
    });
}

export function validationSchema_Login() {
    return Yup.object({
         
        email: Yup.string().email('Email ingresado no válido').test('alumnos-ubiobio', "Correo ingresado no válido", function (value) {
            if (!value) return true
            const dominioEsperado = '@alumnos.ubiobio.cl';
            return value.endsWith(dominioEsperado);
          }).required('Email no ingresado'),

          password: Yup.string().required("Contraseña no ingresada"),


    })
}