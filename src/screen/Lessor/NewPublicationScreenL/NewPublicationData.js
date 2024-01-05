import * as Yup from "yup";

export function initialValues() {
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
      titleRoom: "",
      roomImages: [],
      valueRoom: 0,
      characteristicsRooms: {
        cama: false,
        ventilador: false,
        banoPersonal: false,
        tv: false,
        velador: false,
        closet: false,
        ropaCama: false,
        silla: false,
        escritorio: false,
        calefaccion: false,
      },
  };
}

export function validationSchema() {
  return Yup.object({
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
      titleRoom: Yup.string().required("Título de la habitación no ingresado"),
      roomImages: Yup.array().min(1, "Se requiere una imagen como mínimo.").required("Se requiere una imagen como mínimo."),
      valueRoom: Yup.number().required("Precio de la habitación no ingresado"),
      characteristicsRooms: Yup.object().shape({
        cama: Yup.boolean(),
        ventilador: Yup.boolean(),
        banoPersonal: Yup.boolean(),
        tv: Yup.boolean(),
        velador: Yup.boolean(),
        closet: Yup.boolean(),
        ropaCama: Yup.boolean(),
        silla: Yup.boolean(),
        escritorio: Yup.boolean(),
        calefaccion: Yup.boolean(),
      }),
  });
}