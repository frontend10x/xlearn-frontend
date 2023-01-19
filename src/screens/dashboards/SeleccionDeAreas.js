import React, { useEffect, useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { Footer } from "../../componentes/Footer";
import { getAreas} from "../../services/services";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { coursesByArea } from "../../actions/diagnostico";

export const SeleccionDeAreas = () => {
  const [areas, setAreas] = useState();
  const { token } = useSelector((state) => state.auth);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    async function areas() {
      const data = await getAreas(token);
      setAreas(data.response._embedded.areas);
    }
    areas();
  }, [token]);

  const filterAreas = (e) => {
    let  id = e.target.id;
    setFilter(id);
  }

  const redirect =  (e) => {
    if (filter && e.target.value === "Siguiente") {
      dispatch(coursesByArea(filter));
      navigate("/project/diagnostic/training");
    }else if (e.target.value === "Volver") {
      navigate("/selection/process");
    }
  };

  return (
    <div className="section__selection-areas">
      <HeaderDashboard />
      <div className="selection__buttons-container">
        <div className="selection__buttons-content">
          {areas &&
            areas.map((item, index) => (
              <div className="w-25" key={index}>
                <input
                  type="submit"
                  id={item.id}
                  value={item.name}
                  className="selection__area-buttons"
                  onClick={filterAreas}
                  multiple={true}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="selection__areas-footer_container">
        <div className="selection__areas-buttons_container">
          <input type="button" onClick={redirect} className="footer__button-back" value="Volver"/>
          <input type="button" onClick={redirect} className="footer__button-next" value="Siguiente" />
        </div>
      </div>
    </div>
  );
};
