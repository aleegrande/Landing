import React from "react";
import axios from "axios";
import { validateNameLast, validatePhone } from "../utils/Validations";
const url = "http://201.151.177.210:8080/api/v1/people/q/add-referrer";

export default class FormRecomendados extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    careOfHealth: "",
    disease: "",
    civilStatus: "",
    age: "",
    relationship: "",
    job: "",
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  validateForm = () => {
    if(!validatePhone(this.state.phoneNumber) || !validateNameLast(this.state.firstName) || !validateNameLast(this.state.lastName) || this.state.age < 18)
    {
      if(!validatePhone(this.state.phoneNumber)) alert("Número de telefono invalido");
      else if(!validateNameLast(this.state.firstName)) alert("Nombre incorrecto");
      else if(!validateNameLast(this.state.lastName)) alert("Apellido incorrecto");
      else alert("Tu recomendado debe ser mayor de edad");
    }
    else{
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        owner: "5fca85fde39d4c2b08a59482",
        referrerPhoneNumber: "9515041726",
        job: this.state.job,
        city: this.state.city,
        fields: [
          {
            propertyId: '5fca8713e39d4c2b08a59483',
            data: [this.state.civilStatus],
          },
          {
            propertyId: '5fca8713e39d4c2b08a59484',
            data: [this.state.careOfHealth],
          },
          {
            propertyId: '5fca8713e39d4c2b08a59485',
            data: [this.state.disease],
          },
          {
            propertyId: '5fca8713e39d4c2b08a59486',
            data: [this.state.age],
          },
          {
            propertyId: '5fca8713e39d4c2b08a59487',
            data: [this.state.relationship],
          },
        ],
      };
    axios.post(url, { user })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
    }

    alert("Esperando");
  };
  render() {
    

    return (
      <form>
        <div className="form">
          <h1 className="title2">Datos sobre tus recomendados: </h1>
          <div>
            <div className="divform">
              <label>
                Nombre:{" "}
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="inputform"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="divform">
              <label>
                Apellidos:{" "}
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="inputform"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="divform">
              <label>
                Número Fijo o Móvil:
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="inputform"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="divform">
              <label>¿En qué ciudad vive actualmente?</label>
              <div className="divRadio">
                <input
                  type="radio"
                  value="Tijuana"
                  name="city"
                  id="city"
                  checked={true}
                  onChange={this.handleChange}
                />
                <text className="radioForm">Tijuana</text>
                <input
                  type="radio"
                  value="Playas de Rosarito"
                  name="city"
                  id="city"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Playas de Rosarito</text>
                <input
                  type="radio"
                  value="Ensenada"
                  name="city"
                  id="city"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Ensenada</text>
                <input
                  type="radio"
                  value="Mexicali"
                  name="city"
                  id="city"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Mexicali</text>
                <input
                  type="radio"
                  value="Tecate"
                  name="city"
                  id="city"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Tecate</text>
                <input
                  type="radio"
                  value="Otra"
                  name="city"
                  id="city"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Otra</text>
              </div>
            </div>
            <div className="divform">
              <label>¿Le gusta cuidar su salud?</label>
              <div className="divRadio">
                <input
                  type="radio"
                  value="Si"
                  name="careOfHealth"
                  id="careOfHealth"
                  checked={true}
                  onChange={this.handleChange}
                />
                <text className="radioForm">Si</text>
                <input
                  type="radio"
                  value="No"
                  name="careOfHealth"
                  id="careOfHealth"
                  onChange={this.handleChange}
                />
                <text className="radioForm">No</text>
                <input
                  type="radio"
                  value="No sé"
                  name="careOfHealth"
                  id="careOfHealth"
                  onChange={this.handleChange}
                />
                <text className="radioForm">No sé</text>
                <input
                  type="radio"
                  value="A veces"
                  name="careOfHealth"
                  id="careOfHealth"
                  onChange={this.handleChange}
                />
                <text className="radioForm">A veces</text>
              </div>
            </div>
            <div className="divform">
              <label>
                ¿Padece de alguna enfermedad? ¿Cuál?
                <input
                  type="text"
                  name="disease"
                  id="disease"
                  className="inputform"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="divform">
              <label>¿Cuál es su estado civil ? </label>
              <div className="divRadio">
                <input
                  type="radio"
                  value="Soltero/a"
                  name="civilStatus"
                  id="civilStatus"
                  onChange={this.handleChange}
                  checked={true}
                />
                <text className="radioForm">Soltero/a</text>
                <input
                  type="radio"
                  value="Casado/a"
                  name="civilStatus"
                  id="civilStatus"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Casado/a</text>
                <input
                  type="radio"
                  value="Viudo/a"
                  name="civilStatus"
                  id="civilStatus"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Viudo/a</text>
                <input
                  type="radio"
                  value="Divorciado/a"
                  name="civilStatus"
                  id="civilStatus"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Divorciado/a</text>
              </div>
            </div>
            <div className="divform">
              <label>
                ¿Cuál es su edad?
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="inputNumform"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="divform">
              <label>¿Qué parentesco tiene usted con el participante? </label>
              <div className="divRadio">
                <input
                  type="radio"
                  value="Familiar"
                  name="relationship"
                  id="relationship"
                  onChange={this.handleChange}
                  checked={true}
                />
                <text className="radioForm">Familiar</text>
                <input
                  type="radio"
                  value="Amigo/a"
                  name="relationship"
                  id="relationship"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Amigo/a</text>
                <input
                  type="radio"
                  value="Conocido/a"
                  name="relationship"
                  id="relationship"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Conocido/a</text>
                <input
                  type="radio"
                  value="Compañero/a de trabajo"
                  name="relationship"
                  id="relationship"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Compañero/a de trabajo</text>
              </div>
            </div>
            <div className="divform">
              <label>¿A qué se dedica?</label>
              <div className="divRadio">
                <input
                  type="radio"
                  value="Empleado/a"
                  name="job"
                  checked={true}
                  onChange={this.handleChange}
                />
                <text className="radioForm">Empleado/a</text>
                <input
                  type="radio"
                  value="Jubilado/a"
                  name="job"
                  id="job"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Jubilado/a</text>
                <input
                  type="radio"
                  value="Ama de casa"
                  name="job"
                  id="job"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Ama de casa</text>
                <input
                  type="radio"
                  value="Estudiante"
                  name="job"
                  id="job"
                  onChange={this.handleChange}
                />
                <text className="radioForm">Estudiante</text>
                <input
                  type="radio"
                  value="No trabajo"
                  name="job"
                  id="job"
                  onChange={this.handleChange}
                />
                <text className="radioForm">No trabajo</text>
              </div>
            </div>
          </div>
          <div className="divform">
            <button className="buttonForm" onClick={this.validateForm}>
              ENVIAR
            </button>
          </div>
        </div>
      </form>
    );
  }
}
