import React, { useState, useEffect } from "react";
import { getEnterpriseGroups } from "../../services/services";
import { useSelector } from "react-redux";
import { colors } from "@mui/material";
import "../../assets/css/componentes/GroupsDescription.css";

export const GroupsDescription = ({items}) => {
  const { token, subcompanie_id } = useSelector((state) => state.auth);
  const [groups, setGroups] = useState();

  useEffect(() => {
    async function getUserGroups() {
      const data = await getEnterpriseGroups(token, subcompanie_id);
      console.log(data?.groups?._embedded?.groups, "valores de data!");
      setGroups(data?.groups?._embedded?.groups);
    }
    getUserGroups();
  }, []);

  const users = [
    {
      area: null,
      email: "cpromultimedia@gmail.com",
      id: 223,
      name: "Carlos Narvaez",
      phone: "3192175637",
      "progress:porcentage": 50,
      rol_id: 4,
      state: 1,
      subcompanies_id: 46,
    },
    {
      area: null,
      email: "cpromultimedia@gmail.com",
      id: 223,
      name: "Carlos Narvaez",
      phone: "3192175637",
      "progress:porcentage": 100,
      rol_id: 4,
      state: 1,
      subcompanies_id: 46,
    },
    {
      area: null,
      email: "cpromultimedia@gmail.com",
      id: 223,
      name: "Carlos Narvaez",
      phone: "3192175637",
      "progress:porcentage": 80,
      rol_id: 4,
      state: 1,
      subcompanies_id: 46,
    },
  ];

  return (
    <div className="mt-3 d-flex flex-wrap w-75" style={{gap:"50px"}} >
      {groups &&
        groups.map((item, index) => (
          <div
            class="card mb-3"
            style={{
              width: "547px",
              backgroundColor: "#F2F2F2",
              height: "694px",
            }}
          >
            <p
              className="fw-bold mt-3 ms-3"
              style={{ color: "#2BDB71", fontSize: "20px" }}
            >{`Grupo ${index + 1}`}</p>
            <div class="card-body">
              <h3>
                <span className="fw-bold">Curso:</span>
                <span style={{ fontSize: "28px", color: "#002333" }}>
                  {item?.name}
                </span>
              </h3>
              {item?.leader ? (
                <h5
                  class="card-title"
                  style={{ color: "#394649", fontSize: "20px" }}
                >
                  Lider:{item?.leader}
                </h5>
              ) : (
                <h5
                  class="card-title"
                  style={{ color: "#394649", fontSize: "20px" }}
                >
                  Lider:Falto por asignar lider{" "}
                </h5>
              )}

              <div style={{ position: "relative", marginTop: "50px" }}>
                {/* {item.users.map((items, index) => ( */}
                {users.map((items, index) => (
                  <div
                    key={index}
                    className={`row d-flex ${
                      index % 2 === 0 ? "bg-white" : "bg-F2F2F2"
                    }`}
                    style={{
                      width: "510px",
                      position: "relative",
                      left: "10px",
                    }}
                  >
                    <div className="col">
                      <p
                        className="fw-bold"
                        style={{ fontSize: "14px", color: "#394649" }}
                      >
                        Usuarios
                      </p>
                      <h6
                        className="fw-bold"
                        style={{ color: "#002333", fontSize: "20px" }}
                      >
                        {items?.name}
                      </h6>
                      <p className="fw-bold" style={{ color: "#8894AB" }}>
                        {items?.email}
                      </p>
                    </div>
                    {/* <div className="xln_info_gestionDeCupos"> */}
                    <div className="col">
                      <p
                        className="fw-bold"
                        style={{ fontSize: "14px", color: "#394649" }}
                      >
                        Progreso
                      </p>
                      {/* <div className="progress__bar__style d-flex"> */}
                      <div className="d-flex">
                        <p>{items["progress:porcentage"]}%</p>
                        {/* <input
                          type="range"
                          className={`range ms-3 ${index % 2 === 0 ? "bg-white" : "bg-F2F2F2"} `}
                          value={items["progress:porcentage"]}
                          style={{
                            backgroundColor: "#F2F2F2",
                            position: "relative",
                            marginBottom: "15px",
                          }}
                          id="range-input"
                        /> */}

                        <input
                          type="range"
                          className={`ms-3 custom-range ${
                            index % 2 === 0 ? "bg-white" : "bg-F2F2F2"
                          }`}
                          value={items["progress:porcentage"]}
                          id="range-input"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <p
                        className="fw-bold"
                        style={{ fontSize: "14px", color: "#394649" }}
                      >
                        Ultimo ingreso
                      </p>
                      <h6 className="fw-bold" style={{ color: "#002333" }}>
                        30/07/2023
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
