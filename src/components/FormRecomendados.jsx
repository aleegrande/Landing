import React from 'react'

export default function FormRecomendados() {
    return (
        <div className="form">
            <h1 className="title2">Datos sobre los recomendados: </h1>
            <div>
                <form>
                    <div className="divform"> 
                        <label>
                            Nombre: <input type="text" name="name" className="inputform" />
                        </label>
                    </div>
                    <div className="divform">
                        <label>
                            Apellidos: <input type="text" name="lastname"className="inputform" />
                        </label>
                    </div>
                    <div className="divform">
                        <label>
                            Número Fijo o Móvil: <input type="text" name="phone" className="inputform" />
                        </label>
                    </div>
                    <div className="divform">
                        <label>¿En qué ciudad vive actualmente?</label>
                        <div className="divRadio">
                            <input type="radio" value="Tijuana" name="city" checked={true} /> <text className="radioForm">Tijuana</text>
                            <input type="radio" value="Playas de Rosarito" name="city" /> <text className="radioForm">Playas de Rosarito</text>
                            <input type="radio" value="Ensenada" name="city" /> <text className="radioForm">Ensenada</text>
                            <input type="radio" value="Mexicali" name="city" /> <text className="radioForm">Mexicali</text>
                            <input type="radio" value="Tecate" name="city" /> <text className="radioForm">Tecate</text>
                            <input type="radio" value="Otra" name="city"/> <text className="radioForm">Otra</text>
                        </div>
                    </div>
                    <div className="divform">
                        <label>¿Le gusta cuidar su salud?</label>
                        <div  className="divRadio">
                            <input type="radio" value="Si" name="health" checked={true} /> <text className="radioForm">Si</text>
                            <input type="radio" value="No" name="health" /> <text className="radioForm">No</text>
                            <input type="radio" value="No sé" name="health" /> <text className="radioForm">No sé</text>
                            <input type="radio" value="A veces" name="health" /> <text className="radioForm">A veces</text>
                        </div>
                    </div>
                    <div className="divform">
                        <label>
                            ¿Padece de alguna enfermedad? ¿Cuál? <input type="text" name="disease" className="inputform" />
                        </label>
                    </div>
                    <div className="divform">
                        <label>¿Cuál es su estado civil ? </label>
                        <div className="divRadio">
                            <input type="radio" value="Soltero/a" name="civil" checked={true} /> <text className="radioForm">Soltero/a</text>
                            <input type="radio" value="Casado/a" name="civil" /> <text className="radioForm">Casado/a</text>
                            <input type="radio" value="Viudo/a" name="civil" /> <text className="radioForm">Viudo/a</text>
                            <input type="radio" value="Divorciado/a" name="civil" /> <text className="radioForm">Divorciado/a</text>
                        </div>
                    </div>
                    <div className="divform">
                        <label>
                            ¿Cuál es su edad? <input type="number" name="age" className="inputNumform" />
                        </label>
                    </div>
                    <div className="divform">
                        <label>¿Qué parentesco tiene usted con le participante? </label>
                        <div className="divRadio">
                            <input type="radio" value="Familiar" name="relationship" checked={true} /> <text className="radioForm">Familiar</text>
                            <input type="radio" value="Amigo/a" name="relationship" /> <text className="radioForm">Amigo/a</text>
                            <input type="radio" value="Conocido/a" name="relationship" /> <text className="radioForm">Conocido/a</text>
                            <input type="radio" value="Compañero/a de trabajo" name="relationship" /> <text className="radioForm">Compañero/a de trabajo</text>
                        </div>
                    </div>
                    <div className="divform">
                        <label>¿A qué se dedica?</label>
                        <div className="divRadio">
                            <input type="radio" value="Empleado/a" name="profession" checked={true} /> <text className="radioForm">Empleado/a</text>
                            <input type="radio" value="Jubilado/a" name="profession" /> <text className="radioForm">Jubilado/a</text>
                            <input type="radio" value="Ama de casa" name="profession" /> <text className="radioForm">Ama de casa</text>
                            <input type="radio" value="Estudiante" name="profession" /> <text className="radioForm">Estudiante</text>
                            <input type="radio" value="No trabajo" name="profession" /> <text className="radioForm">No trabajo</text>
                        </div>
                    </div>
                    <div className="divform">
                        <button className="buttonForm" ty>
                            ENVIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
