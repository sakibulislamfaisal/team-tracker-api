import React from "react";
import "./TeamInfo.css";
import { FaArrowRight } from "react-icons/fa";
import { useHistory } from "react-router";
const TeamInfo = ({ team }) => {
  const id = team.idTeam;
  // console.log(id);
  // console.log(team);
  let history = useHistory();
  const showTeamInfo = (id) => {
    const url = `/info/${id}`;
    history.push(url);
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-4 shadow py-5  text-center">
      <div className="team-information">
        <img
          src={team.strTeamBadge}
          className="img-fluid team-image-info"
          alt=""
        />
        <h4>{team.strTeam}</h4>
        <small>{team.strAlternate}</small> <br />
        <br />
        <button onClick={() => showTeamInfo(id)} className="btn btn-primary">
          Explore <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default TeamInfo;
