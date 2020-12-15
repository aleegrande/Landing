import React from "react";
import axios from "axios";
import is from "is_js";
import { Formik } from "formik";
import PropTypes from "prop-types";
import swal from "sweetalert2";

// Schemas de validación
import RecomendadosSchema from "../schemas/recomendados-schema";

// Utilidades
import selectMessage from "../utils/select-message";

const baseUrl = "http://localhost:8080/api/v1";

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
  const getUsers = async () => {
    try {
      const result = await axios.get(`${baseUrl}/users`);

      return result.data.users;
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = async (values, actions) => {
    const users = await getUsers();
    const owner = users[Math.floor(Math.random() * users.length)]?._id;

    const user = {
      firstName: values.firstName,
      owner,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      referrerPhoneNumber: phoneNumber,
      job: values.job,
      city: values.city,
      fields: [
        {
          propertyId: "5fd92937c399424e94415f7d",
          data: [values.civilStatus],
        },
        {
          propertyId: "5fd929a3c399424e94415f7e",
          data: [values.careOfHealth],
        },
        {
          propertyId: "5fd929cfc399424e94415f7f",
          data: [values.disease],
        },
        {
          propertyId: "5fd92a00c399424e94415f80",
          data: [values.age],
        },
        {
          propertyId: "5fd92a2dc399424e94415f81",
          data: [values.relationship],
        },
      ],
    };

    try {
      const { data, status } = await axios.post(
        `${baseUrl}/people/q/add-referrer`,
        user
      );

      if (status.toString().match(/[20][0-4]{1}/)) {
        swal.fire({
          icon: "success",
          title: `Folio: ${data.folio}`,
          text: selectMessage(data.count),
        });

        actions.resetForm({
          values: {
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
          },
        });

        return;
      }

      if (status.toString().match(/[40][0-9]{1}/)) {
        return swal.fire({
          icon: "error",
          title: "Error",
          text: "¡Hubo un error al mandar la solicitud!",
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        if (error.response.data?.error?.code === 11000) {
          return swal.fire({
            icon: "error",
            title: "Hubo un error",
            text: "Ya hay un cliente registrado con ese número de teléfono",
          });
        }
      }

      if (error.response.status === 404) {
        switch (error.response.data.code) {
          case "client_not_found":
            return swal.fire({
              icon: "error",
              title: "Hubo un error",
              text: "¡No te encuentras registrado en nuestra base de datos!",
            });
          case "client_exists": {
            return swal.fire({
              icon: "error",
              title: "Hubo un error",
              text: "Ya hay un cliente registrado con ese número de teléfono",
            });
          }
        }
      }
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
          <div>
            <h1 className="title2">
              Captura la información sobre tus recomendados:&nbsp;
            </h1>
            <div>
              <div className="divform">
                <label>
                  Nombre de tu recomendado:&nbsp;
                  <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    className="inputform"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <p>{errors?.firstName}</p>
              </div>
              <div className="divform">
                <label>
                  Apellido de tu recomendado:&nbsp;
                  <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    className="inputform"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <p>{errors?.lastName}</p>
              </div>
              <div className="divform">
                <label>
                  Número de WhatsApp:
                  <input
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    className="inputform"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <p>{errors?.lastName}</p>
              </div>
              <div className="divform">
                <label>¿En qué ciudad vive actualmente su recomendado?</label>
                <div className="divRadio">
                  {arrs.cities.map((city, index) => (
                    <React.Fragment key={`${city.toLowerCase()}-${index}`}>
                      <input
                        type="radio"
                        value={values.city}
                        name="city"
                        checked={values.city === city}
                        onChange={() => setFieldValue("city", city)}
                      />
                      <text className="radioForm">{city}</text>
                    </React.Fragment>
                  ))}
                </div>
                <p>{errors?.city}</p>
              </div>
              <div className="divform">
                <label>A su recomendado, ¿Le gusta cuidar su salud?</label>
                <div className="divRadio">
                  {arrs.careOfHealths.map((careOfHealth, index) => (
                    <React.Fragment
                      key={`${careOfHealth.toLowerCase()}-${index}`}
                    >
                      <input
                        type="radio"
                        value={values.careOfHealth}
                        name="careOfHealth"
                        checked={values.careOfHealth === careOfHealth}
                        onChange={() =>
                          setFieldValue("careOfHealth", careOfHealth)
                        }
                      />
                      <text className="radioForm">{careOfHealth}</text>
                    </React.Fragment>
                  ))}
                </div>
                <p>{errors?.careOfHealth}</p>
              </div>
              <div className="divform">
                <label>
                  Su recomendado, ¿Padece de alguna enfermedad? ¿Cuál?
                  <input
                    type="text"
                    name="disease"
                    value={values.disease}
                    className="inputform"
                    onChange={handleChange}
                  />
                </label>
                <p>{errors?.disease}</p>
              </div>
              <div className="divform">
                <label>¿Cuál es el estado civil de su recomendado?</label>

                <div className="divRadio">
                  {arrs.civilStatuses.map((civilStatus, index) => (
                    <React.Fragment
                      key={`${civilStatus.toLowerCase()}-${index}`}
                    >
                      <input
                        type="radio"
                        value={values.civilStatus}
                        checked={values.civilStatus === civilStatus}
                        name="civilStatus"
                        onChange={() =>
                          setFieldValue("civilStatus", civilStatus)
                        }
                      />
                      <text className="radioForm">{civilStatus}</text>
                    </React.Fragment>
                  ))}
                </div>
                <p>{errors?.civilStatus}</p>
              </div>
              <div className="divform">
                <label>
                  ¿Cuál es la edad aproximada de su recomendado?
                  <input
                    type="number"
                    name="age"
                    value={values.age}
                    className="inputNumform"
                    onChange={handleChange}
                  />
                </label>
                <p>{errors?.age}</p>
              </div>
              <div className="divform">
                <label>¿Qué parentesco tiene usted con el recomendado? </label>
                <div className="divRadio">
                  {arrs.relationships.map((relationship, index) => (
                    <React.Fragment
                      key={`${relationship.toLowerCase()}-${index}`}
                    >
                      <input
                        type="radio"
                        value={values.relationship}
                        name="relationship"
                        checked={values.relationship === relationship}
                        onChange={() =>
                          setFieldValue("relationship", relationship)
                        }
                      />
                      <text className="radioForm">{relationship}</text>
                    </React.Fragment>
                  ))}
                </div>
                <p>{errors?.relationship}</p>
              </div>
              <div className="divform">
                <label>¿A qué se dedica su recomendado?</label>
                <div className="divRadio">
                  {arrs.jobs.map((job, index) => (
                    <React.Fragment key={`${job.toLowerCase()}-${index}`}>
                      <input
                        type="radio"
                        value={values.job}
                        name="job"
                        checked={values.job === job}
                        onChange={() => setFieldValue("job", job)}
                      />
                      <text className="radioForm">{job}</text>
                    </React.Fragment>
                  ))}
                </div>
                <p>{errors?.job}</p>
              </div>
            </div>

            <div className="divform">
              <button
                className="buttonForm"
                type="submit"
                disabled={is.not.empty(errors)}
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
