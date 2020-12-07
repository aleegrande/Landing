import React from "react";
import axios from "axios";
import is from "is_js";
import { Formik } from "formik";
import PropTypes from "prop-types";

// Schemas de validación
import RecomendadosSchema from "../schemas/recomendados-schema";

const url = "http://201.151.177.210:8080/api/v1/people/q/add-referrer";

const arrs = {
  civilStatuses: ["Soltero/a", "Casado/a", "Viudo/a", "Divorciado/a"],
  relationships: [
    "Familiar",
    "Amigo/a",
    "Conocido/a",
    "Compañero/a de trabajo",
  ],
  jobs: ["Empleado/a", "Jubilado/a", "Ama de casa", "Estudiante", "No trabajo"],
  cities: [
    "Tijuana",
    "Playas de Rosarito",
    "Ensenada",
    "Mexicali",
    "Tecate",
    "Otra",
  ],
  careOfHealths: ["Si", "No", "No sé", "A veces"],
};

const FormRecomendados = ({ phoneNumber }) => {
  const handleSubmit = async (values) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      owner: "5fce99baefb04b3bae7b03da",
      referrerPhoneNumber: values.referrerPhoneNumber,
      job: values.job,
      city: values.city,
      fields: [
        {
          propertyId: "5fca8713e39d4c2b08a59483",
          data: [values.civilStatus],
        },
        {
          propertyId: "5fca8713e39d4c2b08a59484",
          data: [values.careOfHealth],
        },
        {
          propertyId: "5fca8713e39d4c2b08a59485",
          data: [values.disease],
        },
        {
          propertyId: "5fca8713e39d4c2b08a59486",
          data: [values.age],
        },
        {
          propertyId: "5fca8713e39d4c2b08a59487",
          data: [values.relationship],
        },
      ],
    };

    const { data, status } = await axios.post(url, user);

    if (status === 201) {
      console.log(data);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        referrerPhoneNumber: phoneNumber,
        city: "",
        careOfHealth: "",
        disease: "",
        civilStatus: "",
        age: "",
        relationship: "",
        job: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RecomendadosSchema}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form">
            {values.referrerPhoneNumber === "" ? (
              <>
                <h1 className="title2">
                  Proporciona tu número de teléfono antes de continuar:{" "}
                </h1>
                <div className="divform">
                  <label>
                    Número de teléfono:{" "}
                    <input
                      type="text"
                      name="referrerPhoneNumber"
                      value={values.referrerPhoneNumber}
                      className="inputform"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                </div>
              </>
            ) : null}

            <h1 className="title2">Datos sobre tus recomendados: </h1>
            <div>
              <div className="divform">
                <label>
                  Nombre:{" "}
                  <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    className="inputform"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
              </div>
              <div className="divform">
                <label>
                  Apellidos:{" "}
                  <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    className="inputform"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
              </div>
              <div className="divform">
                <label>
                  Número Fijo o Móvil:
                  <input
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    className="inputform"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
              </div>
              <div className="divform">
                <label>¿En qué ciudad vive actualmente?</label>
                <div className="divRadio">
                  {arrs.cities.map((city, index) => (
                    <React.Fragment key={`${city.toLowerCase()}-${index}`}>
                      <input
                        type="radio"
                        value={values.city}
                        name="city"
                        onChange={() => setFieldValue("city", city)}
                      />
                      <text className="radioForm">{city}</text>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="divform">
                <label>¿Le gusta cuidar su salud?</label>
                {arrs.careOfHealths.map((careOfHealth, index) => (
                  <React.Fragment
                    key={`${careOfHealth.toLowerCase()}-${index}`}
                  >
                    <input
                      type="radio"
                      value={values.careOfHealth}
                      name="careOfHealth"
                      onChange={() =>
                        setFieldValue("careOfHealth", careOfHealth)
                      }
                    />
                    <text className="radioForm">{careOfHealth}</text>
                  </React.Fragment>
                ))}
              </div>
              <div className="divform">
                <label>
                  ¿Padece de alguna enfermedad? ¿Cuál?
                  <input
                    type="text"
                    name="disease"
                    value={values.disease}
                    className="inputform"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="divform">
                <label>¿Cuál es su estado civil ? </label>

                <div className="divRadio">
                  {arrs.civilStatuses.map((civilStatus, index) => (
                    <React.Fragment
                      key={`${civilStatus.toLowerCase()}-${index}`}
                    >
                      <input
                        type="radio"
                        value={values.civilStatus}
                        name="civilStatus"
                        onChange={() =>
                          setFieldValue("civilStatus", civilStatus)
                        }
                      />
                      <text className="radioForm">{civilStatus}</text>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="divform">
                <label>
                  ¿Cuál es su edad?
                  <input
                    type="number"
                    name="age"
                    value={values.age}
                    className="inputNumform"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="divform">
                <label>¿Qué parentesco tiene usted con el participante? </label>
                <div className="divRadio">
                  {arrs.relationships.map((relationship, index) => (
                    <React.Fragment
                      key={`${relationship.toLowerCase()}-${index}`}
                    >
                      <input
                        type="radio"
                        value={values.relationship}
                        name="relationship"
                        onChange={() =>
                          setFieldValue("relationship", relationship)
                        }
                      />
                      <text className="radioForm">{relationship}</text>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="divform">
                <label>¿A qué se dedica?</label>
                <div className="divRadio">
                  {arrs.jobs.map((job, index) => (
                    <React.Fragment key={`${job.toLowerCase()}-${index}`}>
                      <input
                        type="radio"
                        value={values.job}
                        name="job"
                        onChange={() => setFieldValue("job", job)}
                      />
                      <text className="radioForm">{job}</text>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="divform">
              <button
                className="buttonForm"
                type="submit"
                disabled={is.not.empty(touched) && is.not.empty(errors)}
              >
                ENVIAR
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

FormRecomendados.defaultProps = {
  phoneNumber: "",
};

FormRecomendados.propTypes = {
  phoneNumber: PropTypes.string,
};

export default FormRecomendados;
