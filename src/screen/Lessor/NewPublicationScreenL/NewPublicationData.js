import * as Yup from "yup";

export function initialValues(){
    return {
        images: [],
        title: "",
        description: "",
        ubication: "",
        rules: {
          noBeber: false,
          horarioLlegada: false,
          sinMascotas: false,
          sinVisitas: false,
          NoEscucharMusicaConVolumenAlto: false,
          NoFumar: false,
          RealizarAseo: false,
        },
        characteristics: {
          comedor: false,
          estacionamiento: false,
          tv: false,
          gastosComunesIncluidos: false,
          living: false,
          wifi: false,
        },
    }
}

export function validationSchema(){
    return Yup.object ({
        images: Yup.array().min(1, "Se requiere una imagen como mínimo.").required("Se requiere una imagen como mínimo."),
        title: Yup.string().required("Título no ingresado"),
        description: Yup.string().required("Descripción no ingresada"),
        ubication: Yup.string().required("Ubicación no ingresada"),
        rules: Yup.object().shape({
          noBeber: Yup.boolean(),
          horarioLlegada: Yup.boolean(),
          sinMascotas: Yup.boolean(),
          sinVisitas: Yup.boolean(),
          NoEscucharMusicaConVolumenAlto: Yup.boolean(),
          NoFumar: Yup.boolean(),
          RealizarAseo: Yup.boolean(),
        }),
        characteristics: Yup.object().shape({
          comedor: Yup.boolean(),
          estacionamiento: Yup.boolean(),
          tv: Yup.boolean(),
          gastosComunesIncluidos: Yup.boolean(),
          living: Yup.boolean(),
          wifi: Yup.boolean(),
        }),
    });
}