import React from "react";
import whatsapp from "../utils/assets/img/whatsapp.png";
import meta from "../utils/assets/img/meta.png"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <label className="labelSocial">
          Para más información comunicate al{" "}
          <a
            target="_blank"
            style={{ color: "#e9d772", textDecoration: "underline" }}
            href="tel:6868880120"
          >
            6868880120
          </a>{" "}
          ó{" "}
          <a
            target="_blank"
            style={{ color: "#e9d772", textDecoration: "underline" }}
            href="tel:6647770114"
          >
            6647770114
          </a>
        </label>
      </div>
      <div className="divSocial">
        <div>
          <img src={whatsapp} className="imgSocial2" alt="WhatsApp" />
          <label className="labelSocial">
            <a
              href="https://wa.me/5216862927802"
              target="_blank"
              style={{ color: "#e9d772", textDecoration: "underline" }}
            >
              6862927802
            </a>
          </label>
        </div>
      </div>
      <div align="center">
        <div>
          <label className="terminos">Términos y condiciones</label>
        </div>
        <div>
          <label className="terminos">
            1) Para participar, solo necesitarás recomendarnos a por lo menos 5
            de tus familiares, amigos, conocidos y a todas aquellas personas que
            conozcas a las cuales les interese mejorar o cuidar su salud y su
            alimentación.
            <strong>
              {" "}
              Mientras más personas recomiendes, mas boletos podrás acumular y
              mayores probabilidades tendrás para ganar!.
            </strong>{" "}
          </label>
        </div>
        <div>
          <label className="terminos">
            2) Tus recomendados obtendrán 2 premios instantáneos, ellos
            recibirán una asesoría gratuita en nutrición y salud, así como un
            utensilio de cocina valorado en ¡$1,000 pesos!{" "}
          </label>
        </div>
        <div>
          <label className="terminos">
            3) Nuestro call center, estará contactando a tus recomendados por
            celular para agendar una cita y hacerles entrega de sus 2 premios,
            les llamaremos de tu parte! dándoles la buena noticia de que han
            ganado recompensas de nuestra marca gracias a que tú los
            recomendaste. ¡Informales!
          </label>
        </div>
        <div>
          <label className="terminos">
            4) Para que acumules boletos tus recomendados deberán ser : Mayores
            de edad Vivir en Baja California y Haber recibido sus 2 recompensas
            dentro de las fechas previas al concurso, las cuales son del 07 al
            25 de Diciembre del 2020.
          </label>
        </div>
        <div>
          <label className="terminos">
            5) Por cada recomendado que reciba su 2 premios instantáneos, tu
            acumularas un boleto, con el cual podrás participar en cualquiera de
            las 3 rifas de sartenes deluxe easy release con tapa valorados en
            $12,000 pesos cada uno, HABRÁN 3 ganadores.
          </label>
        </div>
        <div>
          <label className="terminos">
            6) Cada que uno de tus recomendados reciba sus dos premios
            instantáneos, nosotros te estaremos ASIGNANDO un boleto y te
            estaremos informando por SMS.{" "}
          </label>
        </div>
        <div>
          <label className="terminos">
            7) Para acumular boletos, es indispensable que los recomendados
            reciban sus 2 premios instantáneos.{" "}
          </label>
        </div>
        <div>
          <label className="terminos">
            8) Recuerda que la vigencia para acumular boletos será del 07 de
            Diciembre al 25 de Diciembre del 2020
          </label>
        </div>
        <div>
          <label className="terminos">
            9) El sorteo se llevara a cabo el domingo 27 de Diciembre a las 10am
            a traves de Facebook Live, por favor dale Me Gusta a
            www.facebook.com/CorporativoMetacoaching y conéctate el día y la
            hora indicada.
          </label>
        </div>
        <div>
          <label className="terminos">
            10) Los premios se entregarán en el domicilio de la persona
            ganadora.{" "}
          </label>
        </div>
      
      <label className="terminos">
        Consulta la Politica de privacidad, haz clic{" "}
        <strong>
          <a
            className="terminos"
            target="_blank"
            href="https://www.metacoaching.com.mx/pol%C3%ADtica-de-privacidad"
          >
            aquí.
          </a>
        </strong>
      </label>
      <div className="imgMeta">
        <img src={meta} className="imgMeta"/>
      </div>
      </div>
    </div>
  );
};

export default Footer;
