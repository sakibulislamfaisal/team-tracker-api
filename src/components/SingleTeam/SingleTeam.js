import React, { useEffect, useState } from "react";
import TeamInfo from "../TeamInfo/TeamInfo";
import "./SingleTeam.css";
const SingleTeam = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((response) => response.json())
      .then((data) => setTeam(data.teams));
  }, []);

  return (
    <div className="single-team">
      <div className="container">
        <div className="row">
          {team.map((team) => (
            <TeamInfo key={team.idTeam} team={team}></TeamInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
