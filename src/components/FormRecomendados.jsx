import React from "react";
import axios from "axios";

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
    console.log(this.state);
  };

  peticionPost = () => {
    axios
      .post(url, this.state)
      .then((response) => {})
      .catch((response) => {});
  };
  render() {
    console.log(this.props.phoneNumber);

    return (
      <form onSubmit={this.handleSubmit}>
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
            <button className="buttonForm" onClick={this.handleSubmit}>
              ENVIAR
            </button>
          </div>
        </div>
      </form>
    );
  }
}
