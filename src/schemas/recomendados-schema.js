import { string, object, number } from "yup";

const RecomendadosSchema = object().shape({
  firstName: string()
    .min(2, "* El nombre es demasiado corto. *")
    .required("* El nombre es obligatorio. *"),
  lastName: string()
    .min(5, "* Los apellidos son demasiado cortos. *")
    .required("* Los apellidos son obligatorios. *"),
  phoneNumber: string()
    .required("* El número de teléfono es obligatorio. *")
    .matches(
      /\d{10}/,
      "* El número de teléfono está mal escrito, corrígelo, por favor. *"
    ),
  referrerPhoneNumber: string()
    .required("* El número de teléfono es obligatorio. *")
    .matches(
      /\d{10}/,
      "* El número de teléfono está mal escrito, corrígelo, por favor. *"
    ),
  city: string().required("* Selecciona una opción, por favor. *"),
  careOfHealth: string().required(
    "* Selecciona una opción, por favor, escríbela. *"
  ),
  disease: string().required(
    "* Ésta información es obligatoria, por favor, escríbela. *"
  ),
  civilStatus: string().required("Selecciona una opción, por favor."),
  age: number().required(
    "* Ésta información es obligatoria, por favor, escríbela. *"
  ).min(18, "* La persona recomendada debe ser mayor de edad. *"),
  relationship: string().required("* Selecciona una opción, por favor. *"),
  job: string().required("* Selecciona una opción, por favor. *"),
});

export default RecomendadosSchema;
