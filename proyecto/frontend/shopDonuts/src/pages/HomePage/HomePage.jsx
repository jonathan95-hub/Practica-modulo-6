import React from "react";

import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add("rootHome");
    document.body.classList.remove("rootL");
  }, []);
  return (
    <>
      <div
        className="containerHome"
      >
        <div className="grid-photos">
          <div className="imgOne">
            <img className="imgStyle1" src="/urban-legend-interior2.webp" alt=""/>
            <p className="pStyle1">
              <strong>
                Nuestra tienda de donuts, abierta en 1995, vive hoy su mayor
                auge.
              </strong>
              <br />
              Lo que comenzó hace casi tres décadas como un pequeño local
              familiar, se ha convertido en un punto de referencia para los
              amantes del dulce. La combinación de recetas tradicionales y
              nuevas creaciones ha conquistado a varias generaciones de
              clientes, y hoy la tienda atraviesa la etapa más exitosa de su
              historia. Con más visitas que nunca y una comunidad fiel que crece
              día a día, la pasión por nuestros donuts artesanos confirma que la
              esencia con la que abrimos en 1995 sigue más viva que nunca.
            </p>
          </div>

          <div className="imgTwo">
            <img className="imgStyle2" src="/Homeimg3).jpg" alt=""/>
            <div>

              <span
                className="spanText"
              >
                Nuestra fábrica, orgullo de la casa, está considerada una de las
                mejores en su categoría. Con procesos modernos y una cuidada
                selección de ingredientes, garantizamos que cada donut mantenga
                la misma calidad y sabor artesanal que nos distingue desde 1995.
              </span>
            </div>
          </div>
          <div className="imgThree">
            <img className="imgStyle2" src="/Homeimg2.jpg" alt=""/>
            <div>
              <p className="spanText">
                La calidad de nuestros donuts se refleja en cada bocado… y en
                los números. Con miles de unidades vendidas cada mes, seguimos
                creciendo sin perder la esencia artesanal que nos ha acompañado
                desde 1995.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
