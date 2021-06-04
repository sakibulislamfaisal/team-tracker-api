import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetail.css";
import male from "../../images/images.jpg";
import female from "../../images/download (1).jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const TeamDetail = () => {
  const { id } = useParams();
  const [teamDetail, setTeamDetail] = useState({});

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setTeamDetail(data.teams?.[0]));
  }, [id]);

  //console.log(teamDetail);

  return (
    <div className="team-detail">
      <div className="image-detail d-flex justify-content-center align-items-center">
        <img
          src={teamDetail.strTeamBadge}
          className="img-fluid team-image-detail"
          alt=""
        />
      </div>
      <div className="container bg-dark w-100 container-part">
        <div className="row bg-danger text-light mt-5 row-part">
          <div className="col-xs-12 col-sm-12 col-md-6 mt-4">
            <h4> Team :{teamDetail.strTeam}</h4>
            <h6> Alternate : {teamDetail.strAlternate}</h6>
            <h6>Year : {teamDetail.intFormedYear}</h6>
            <h6> Country : {teamDetail.strCountry}</h6>
            <h6> Gender :{teamDetail.strGender}</h6>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            {teamDetail.strGender === "Male" ? (
              <img src={male} className="img-fluid" alt="" />
            ) : (
              <img src={female} className="img-fluid" alt="" />
            )}
          </div>
        </div>
        <p className="text-light mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          explicabo incidunt dignissimos cupiditate, aliquid nisi minima
          delectus ipsa ex consequuntur, dolorum aspernatur, animi maxime
          commodi velit non alias. A corporis deserunt unde! Nisi libero sunt
          eius enim ipsam sapiente alias repellendus odit pariatur quo! Nisi
          perspiciatis voluptatibus fuga labore. Explicabo?
        </p>
        <p className="text-light mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          explicabo incidunt dignissimos cupiditate, aliquid nisi minima
          delectus ipsa ex consequuntur, dolorum aspernatur, animi maxime
          commodi velit non alias. A corporis deserunt unde! Nisi libero sunt
          eius enim ipsam sapiente alias repellendus odit pariatur quo! Nisi
          perspiciatis voluptatibus fuga labore. Explicabo?
        </p>
        <div className="icons text-light text-center">
          <FaFacebook size="2rem" className="m-3" />{" "}
          <FaTwitter size="2rem" className="m-3" />{" "}
          <FaYoutube size="2rem" className="m-3" />
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
